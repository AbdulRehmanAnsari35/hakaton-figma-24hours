"use client";

import { useState, useRef, useEffect } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = generateBotResponse(input);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateBotResponse = (message: string) => {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes("hello") || lowerMsg.includes("hi"))
      return "Hello! How can I assist you today?";
    if (lowerMsg.includes("help") || lowerMsg.includes("support"))
      return "Sure! What do you need help with?";
    if (lowerMsg.includes("pricing") || lowerMsg.includes("cost"))
      return "Our pricing depends on the service you choose.";
    if (lowerMsg.includes("bye") || lowerMsg.includes("goodbye"))
      return "Goodbye! Have a great day!";
    return "I'm still learning! Could you please provide more details?";
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 md:bottom-5 md:right-5 md:w-80 bg-white shadow-lg border border-gray-300 rounded-lg md:rounded-t-lg md:h-auto h-full">
          <div className="bg-green-600 text-white p-3 flex justify-between items-center rounded-t-lg">
            <h2 className="text-lg font-semibold">Support Chat</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-lg"
            >
              ×
            </button>
          </div>
          <div className="h-[70vh] md:h-64 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${msg.sender === "bot" ? "bg-gray-200" : "bg-blue-500 text-white"}`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <p className="text-sm text-gray-500">Bot is typing...</p>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-green-600 text-white px-3 py-2 ml-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Chat with Support
        </button>
      )}
    </>
  );
};

export default ChatBot;
