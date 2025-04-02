import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const allowedOrigin = 'https://www.propertymaco.com';

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin, // Only allow your Bluehost domain
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request) {
  try {
    console.log("Email sending process started");

    const { firstName, lastName, phone, email, propertyAddress, whereHear } = await request.json();
    console.log("Form data received:", { firstName, lastName, email, propertyAddress, whereHear });

    // Create a transporter using your SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.SMTP_USER || "Info@PropertyMaco.com",
        pass: process.env.SMTP_PASS || "vxog cfsb itdu qnee",
      },
    });

    console.log("Transporter created");

    // Define the email options
    const mailOptions = {
      from: process.env.SMTP_FROM || "Property Maco <Info@PropertyMaco.com>",
      to: "Info@PropertyMaco.com", // Recipient email
      subject: "New Contact Form Submission",
      text: `You have received a new message from ${firstName} ${lastName}.

Phone: ${phone}
Email: ${email}
Property Address: ${propertyAddress}
Where did they hear about us: ${whereHear}`,
    };

    console.log("Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully", id: info.messageId }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': allowedOrigin,
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error", error: error.toString(), stack: error.stack }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': allowedOrigin,
        },
      }
    );
  }
}
