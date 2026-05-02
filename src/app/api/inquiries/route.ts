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
    // Initialize Supabase using available env vars
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('❌ Supabase env vars missing:', { supabaseUrl: !!supabaseUrl, supabaseKey: !!supabaseKey });
      return NextResponse.json(
        { success: false, error: 'Database configuration missing' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Safely parse request body
    const body = await req.json();
    console.log('📥 Received body:', body);

    const { name, phone, email, service_type, message, bot_field } = body;

    // Honeypot check
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

    // Build insert payload — message is NOT NULL in DB, so provide a fallback
    const payload = {
      name,
      phone,
      email: email || null,
      service_type: service_type || 'General Inquiry',
      // schema.sql: message text not null — use empty string if not provided
      message: message && message.trim().length > 0 ? message.trim() : 'No message provided',
    };

    console.log('📤 Inserting into Supabase:', payload);

    const { data, error } = await supabase
      .from('inquiries')
      .insert([payload]);

    if (error) {
      console.error('❌ Supabase Insertion Error:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { success: false, error: error.message || 'Failed to save inquiry' },
        { status: 500 }
      );
    }

    console.log('✅ Inquiry saved successfully:', data);
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('❌ Inquiry API catch error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
