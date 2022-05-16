// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: "contact@amalrajan.dev",
    pass: process.env.ZOHO_PASSWORD,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const mailOptions = {
      from: "contact@amalrajan.dev",
      to: "hello@amalrajan.dev",
      subject: `New message from ${req.body.name}`,
      text: `Got a message from ${req.body.name}, ${req.body.email}\n\n${req.body.message}`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
}
