import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host:'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Optional: Check SMTP connection works
transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP Connection Error:", error);
  } else {
    console.log("SMTP is ready to send messages");
  }
});

export default transporter;
