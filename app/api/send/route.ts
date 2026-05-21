import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rateLimit';
import { escapeHTML, isValidEmail, isSpamContent } from '@/lib/security';

const resend = new Resend(process.env.RESEND_API_KEY || 'missing_key');

export async function POST(req: Request) {
  // 1. Resolve client IP and apply rate limiting
  const forwardedFor = req.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : (req.headers.get('x-real-ip') || '127.0.0.1');

  // Rate Limit: 5 requests per 10 minutes
  const limit = 5;
  const windowMs = 10 * 60 * 1000;
  const rateLimitResult = rateLimit(ip, limit, windowMs);

  const rateLimitHeaders = {
    'X-RateLimit-Limit': rateLimitResult.limit.toString(),
    'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
    'X-RateLimit-Reset': rateLimitResult.reset.toString(),
  };

  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: 'Too many transmissions. Please wait a few minutes before trying again.' },
      { status: 429, headers: rateLimitHeaders }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'System configuration error: Missing communication key.' },
      { status: 500, headers: rateLimitHeaders }
    );
  }

  try {
    const body = await req.json();
    const { name, email, message, botField, timestamp } = body;

    // 2. Honeypot check (Spam detection)
    if (botField) {
      console.warn(`Honeypot triggered from IP ${ip}`);
      // Deceive the bot with a simulated success response
      return NextResponse.json({ id: 'sp_simulated_success', success: true }, { headers: rateLimitHeaders });
    }

    // 3. Client submit-speed check (Spam detection)
    // Humans take at least 3 seconds to load the page and type form details.
    if (timestamp) {
      const duration = Date.now() - Number(timestamp);
      if (duration < 3000) {
        console.warn(`Submission too fast (${duration}ms) from IP ${ip}`);
        // Deceive the bot with simulated success
        return NextResponse.json({ id: 'sp_speed_simulated_success', success: true }, { headers: rateLimitHeaders });
      }
    }

    // 4. Input validation
    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json({ error: 'Name must be between 1 and 100 characters.' }, { status: 400, headers: rateLimitHeaders });
    }

    if (!email || !isValidEmail(email) || email.length > 256) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400, headers: rateLimitHeaders });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.length > 5000) {
      return NextResponse.json({ error: 'Message must be between 10 and 5000 characters.' }, { status: 400, headers: rateLimitHeaders });
    }

    // 5. Spam content filter
    if (isSpamContent(name) || isSpamContent(message)) {
      console.warn(`Spam content blocked from IP ${ip}`);
      // Deceive the spammer with a simulated success response
      return NextResponse.json({ id: 'sp_content_simulated_success', success: true }, { headers: rateLimitHeaders });
    }

    // 6. Input sanitization (XSS mitigation)
    const sanitizedName = escapeHTML(name.trim());
    const sanitizedEmail = email.trim(); // Checked by isValidEmail regex
    const sanitizedMessage = escapeHTML(message.trim());

    // 7. Send Email
    const { data, error: resendError } = await resend.emails.send({
      from: 'Cloudmint <onboarding@resend.dev>', // Use verified domain once set up
      to: ['cloudmint.official.in@gmail.com'],
      subject: `New Transmission from ${sanitizedName}`,
      replyTo: sanitizedEmail,
      text: message.trim(), // plain text body
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
      `,
    });

    if (resendError) {
      console.error('Resend delivery error:', resendError);
      return NextResponse.json(
        { error: 'Failed to dispatch transmission. Please try again later.' },
        { status: 500, headers: rateLimitHeaders }
      );
    }

    return NextResponse.json({ success: true, data }, { headers: rateLimitHeaders });
  } catch (error) {
    console.error('API send route error:', error);
    return NextResponse.json({ error: 'Failed to send transmission.' }, { status: 500, headers: rateLimitHeaders });
  }
}