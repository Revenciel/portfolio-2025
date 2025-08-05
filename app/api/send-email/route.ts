import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Clarkybox Portfolio <onboarding@resend.dev>',
      to: 'clarkybox@gmail.com',
      subject: `[Contact Form] ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    
    // console.log('Resend response: ', data)

    return NextResponse.json({ success: true, data });
  } catch (error) {
    // console.error('Resend error: ', error)
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
