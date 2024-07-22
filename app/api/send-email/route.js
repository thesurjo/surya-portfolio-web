import { createTransport } from "nodemailer";

export async function POST(req) {
  const { name, email, mobile, subject, message, recaptchaToken } = await req.json();

  // Server-side validation
  if (!name || !email || !subject || !message || !recaptchaToken) {
    return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return new Response(JSON.stringify({ message: "Invalid email address" }), { status: 400 });
  }

  // Verify reCAPTCHA token
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`, {
    method: 'POST',
  });
  const recaptchaResult = await recaptchaResponse.json();

  if (!recaptchaResult.success) {
    return new Response(JSON.stringify({ message: "reCAPTCHA verification failed" }), { status: 400 });
  }

  const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: process.env.BREVO_USERNAME,
      pass: process.env.BREVO_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: `Contact form submission: ${subject}`,
    text: `Hello, \n\nYou have a new message from ${name} (Email: ${email}, Mobile: ${mobile}) on your portfolio site. \n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Your message has been successfully sent. We appreciate you reaching out and will get in touch with you as soon as possible." }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong", error: error.message }), { status: 500 });
  }
}