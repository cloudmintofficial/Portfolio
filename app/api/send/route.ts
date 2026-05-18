import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 'missing_key');

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'System configuration error: Missing communication key.' }, { status: 500 });
  }

  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Cloudmint <onboarding@resend.dev>', // Use your verified domain once set up
      to: ['cloudmint.official.in@gmail.com'],
      subject: `New Transmission from ${name}`,
      replyTo: email,
      text: message,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send transmission' }, { status: 500 });
  }
}