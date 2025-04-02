// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.propertymaco.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method === 'POST') {
    // Set CORS header for POST responses
    res.setHeader('Access-Control-Allow-Origin', 'https://www.propertymaco.com');

    const { firstName, lastName, phone, email, propertyAddress, whereHear } = req.body;

    // Validate the incoming data
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ message: 'First name, last name, and email are required.' });
    }

    try {
      // Create a transporter using your SMTP configuration
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false, // Use STARTTLS
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Define the email options
      const mailOptions = {
        from: process.env.SMTP_FROM || '"Property Maco" <Info@PropertyMaco.com>',
        to: 'Info@PropertyMaco.com', // Recipient email address
        subject: 'New Contact Form Submission',
        text: `You have received a new message from ${firstName} ${lastName}.
        
Phone: ${phone}
Email: ${email}
Property Address: ${propertyAddress}
Where did they hear about us: ${whereHear}`,
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  } else {
    // If method is not allowed, respond with a 405
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
