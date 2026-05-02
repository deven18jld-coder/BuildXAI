import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { validateName, validatePhone, validateEmail, validateMessage, validateRequired } from '@/lib/utils/validation';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Basic in-memory rate limiting (IP -> { count, timestamp })
const rateLimit = new Map<string, { count: number; timestamp: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown_ip';
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute

    const rateData = rateLimit.get(ip);
    if (rateData && now - rateData.timestamp < windowMs) {
      if (rateData.count >= 3) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
      rateData.count += 1;
      rateLimit.set(ip, rateData);
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now });
    }

    const body = await request.json();
    const { name, phone, email, service_type, message, bot_field } = body;

    // Honeypot check
    if (bot_field) {
      // Act like it was successful to fool bots
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Backend Validation
    const errors: Record<string, string> = {};

    if (!validateRequired(name)) {
      errors.name = "Name is required";
    } else if (!validateName(name)) {
      errors.name = "Name must be at least 3 characters and contain only letters";
    }

    if (!validateRequired(phone)) {
      errors.phone = "Phone is required";
    } else if (!validatePhone(phone)) {
      errors.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    if (email && !validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!validateRequired(service_type)) {
      errors.service_type = "Please select a service";
    }

    if (message) {
      if (message.trim().length > 0 && message.trim().length < 10) {
        errors.message = "Message must be at least 10 characters";
      } else if (!validateMessage(message)) {
        errors.message = "Please enter a meaningful message without repeated characters";
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: 'Validation failed', errors }, { status: 400 });
    }

    const { error: supabaseError } = await supabase
      .from('inquiries')
      .insert({
        name,
        phone,
        email: email || null,
        service_type,
        message,
      } as any);

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json({ error: 'Failed to submit inquiry' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
