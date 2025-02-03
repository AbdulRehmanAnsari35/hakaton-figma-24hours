// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    console.log("Contact Request:", { name, email, message });

    return res.status(200).json({ message: "Message sent successfully" });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
