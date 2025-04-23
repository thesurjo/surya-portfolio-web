import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { name, email, subject, message, recaptchaToken } = await req.json();
    
    // Basic validation
    if (!name || !email || !subject || !message || !recaptchaToken) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Verify reCAPTCHA token
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      console.error('RECAPTCHA_SECRET_KEY is not defined');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
      {
        method: 'POST',
      }
    );
    
    const recaptchaResult = await recaptchaResponse.json();
    
    // If reCAPTCHA verification fails, return an error
    if (!recaptchaResult.success) {
      console.log('reCAPTCHA verification failed', recaptchaResult);
      return NextResponse.json(
        { message: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }
    
    // Check the score for v3 reCAPTCHA (optional, only if using v3)
    // Only check the score if it exists (v3 specific)
    if (typeof recaptchaResult.score === 'number' && recaptchaResult.score < 0.5) {
      console.log('reCAPTCHA score too low', recaptchaResult.score);
      return NextResponse.json(
        { message: 'We could not verify that you are a human. Please try again.' },
        { status: 400 }
      );
    }
    
    // Here you would implement your email sending logic
    // For example, using nodemailer, SendGrid, AWS SES, etc.
    
    // For demonstration purposes, we'll just log the data and return success
    console.log('Form submission:', { name, email, subject, message });
    
    // Return success response
    return NextResponse.json({ message: 'Message sent successfully!' });
    
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 