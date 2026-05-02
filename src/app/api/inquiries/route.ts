import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { 
  validateName, 
  validatePhone, 
  validateEmail, 
  validateMessage, 
  validateRequired 
} from '@/lib/utils/validation';

export async function POST(req: Request) {
  try {
    // Get environment variables inside the handler to prevent module-level crashes
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    // Fallback to anon key if service role key is missing
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase configuration missing in environment variables');
      return NextResponse.json(
        { success: false, error: 'Database configuration missing' },
        { status: 500 }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);

    const body = await req.json();
    const { name, phone, email, service_type, message, bot_field } = body;

    // Honeypot check - if bot_field is filled, silently succeed without saving
    if (bot_field) {
      return NextResponse.json({ success: true });
    }

    // Backend validation
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

    if (message && !validateMessage(message)) {
      errors.message = "Please enter a meaningful message";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Insert form data into "inquiries" table
    const { error } = await supabase
      .from('inquiries')
      .insert([
        {
          name,
          phone,
          email: email || null,
          service_type: service_type || 'General Inquiry',
          message: message || null,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('Supabase Insertion Error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to save inquiry to database' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Inquiry API error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
