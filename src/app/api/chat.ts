import type { NextApiRequest, NextApiResponse } from "next";

const botResponses = {
  hello: "Hello! How can I assist you today?",
  help: "I'm here to help you. What do you need assistance with?",
  default: "Sorry, I didn't quite understand that. Could you please rephrase?",
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { message } = req.body;

    const botReply = getBotResponse(message);

    return res.status(200).json({ message: botReply });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

function getBotResponse(message: string): string {
  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes("hello")) return botResponses.hello;
  if (lowerCaseMessage.includes("help")) return botResponses.help;

  return botResponses.default;
}
