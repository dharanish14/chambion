import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Open CORS - allow all origins
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    console.log(`New contact from: ${name} <${email}>`);

    const smtpPort = parseInt(process.env.SMTP_PORT) || 587;
    const isSecure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"Chambion Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<h3>New Contact Request</h3>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    };

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully');
    } else {
      console.warn('⚠️ SMTP credentials not set. Email skipped.');
    }

    res.status(201).json({ success: true, message: 'Message received successfully!' });
  } catch (error) {
    console.error('❌ Contact error:', error.message);
    res.status(500).json({ error: 'Failed to send message. Please try again.', details: error.message });
  }
});

// Health check — also shows if env vars are loaded
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
    smtp_user: process.env.SMTP_USER ? '✅ Set' : '❌ Missing',
    smtp_pass: process.env.SMTP_PASS ? '✅ Set' : '❌ Missing',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
