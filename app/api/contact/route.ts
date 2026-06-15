// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Incomplete transmission. Missing required fields.' }, 
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Foundation Terminal" <${process.env.SMTP_USER}>`, 
      replyTo: email, 
      to: process.env.CONTACT_EMAIL, 
      subject: `[Institutional Inquiry] ${subject || 'General Correspondence'}`,
      text: `Sender: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0A192F; padding: 24px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 18px; letter-spacing: 2px; text-transform: uppercase;">Institutional Inquiry</h2>
          </div>
          <div style="padding: 24px; background-color: #ffffff;">
            <p style="margin: 0 0 8px; color: #475569;"><strong>Sender:</strong> ${name}</p>
            <p style="margin: 0 0 24px; color: #475569;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1B4F9B;">${email}</a></p>
            <div style="padding: 16px; background-color: #F8FAFC; border-left: 4px solid #1B4F9B; color: #0A192F; line-height: 1.6;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Transmission successful.' }, { status: 200 });

  } catch (error) {
    console.error('SMTP Transmission Failure:', error);
    return NextResponse.json(
      { error: 'Internal server failure during transmission.' }, 
      { status: 500 }
    );
  }
}