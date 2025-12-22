//contact.js
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MY_EMAIL,
      subject: `Portfolio Message from ${name}`,
      text: message,
    });

    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Email sending failed" });
  }
});

module.exports = router;
