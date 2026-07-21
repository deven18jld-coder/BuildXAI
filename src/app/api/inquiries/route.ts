import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { 
  validateName, 
  validatePhone, 
  validateEmail, 
  validateMessage, 
  validateRequired 
} from '@/lib/utils/validation';

export async function POST(req: Request) {
  try {
    // Safely parse request body
    const body = await req.json();
    console.log('📥 Received inquiry body:', body);

    const { name, phone, email, service_type, message, bot_field } = body;

    // Honeypot check (Spam protection)
    if (bot_field) {
      console.log('🛑 Bot detected via honeypot');
      return NextResponse.json({ success: true }); // pretend it succeeded
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

    // Email Configuration
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
      console.error('❌ SMTP configuration missing');
      return NextResponse.json(
        { success: false, error: 'Email service configuration is missing' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use 'gmail' service shortcut
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    // Email Template content
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #007EA7; border-bottom: 2px solid #007EA7; padding-bottom: 10px;">New Inquiry Received</h2>
        <p>You have received a new lead from the BuildXAI website form.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 35%;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Service</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${service_type || 'General Inquiry'}</td>
          </tr>
        </table>

        <div style="margin-top: 20px;">
          <h3 style="color: #444; margin-bottom: 10px;">Message:</h3>
          <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #007EA7; border-radius: 4px;">
            ${message ? message.replace(/\n/g, '<br>') : 'No additional message provided.'}
          </div>
        </div>
        
        <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
          This email was sent automatically from your website contact form.
        </p>
      </div>
    `;

    const mailOptions = {
      from: `"BuildXAI Form" <${SMTP_EMAIL}>`,
      to: 'contact@buildxai.in',
      subject: `New Lead: ${name} - ${service_type || 'General Inquiry'}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\nService: ${service_type || 'General'}\nMessage: ${message || 'N/A'}`,
      html: htmlTemplate,
    };

    console.log('📤 Sending email via Nodemailer...');
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('❌ Inquiry API catch error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send inquiry email. Please try again.' },
      { status: 500 }
    );
  }
}
