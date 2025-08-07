import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  // Configure your SMTP transporter (use your own credentials)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.emailAddress, // your email
      pass: process.env.emailPassword, // use an App Password, not your main password
    },
  })

  const mailOptions = {
    from: email,
    to: "tladilethamaga25@gmail.com",
    subject: `New Contact Message from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message}</p>`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}
