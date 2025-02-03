"use client";

import { useState } from "react";
import ChatBot from "../ChatBot/page";

const NeedHelpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("There was an error sending your message. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
        Need Help?
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Have a question or need support? Fill out the form below, and we’ll get
        back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows={6}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="mt-6 text-center text-sm text-gray-600">{status}</p>
      )}

      <div className="text-center mt-6">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          {chatOpen ? "Close Chat" : "Chat with Support"}
        </button>
      </div>

      {chatOpen && <ChatBot />}
    </div>
  );
};

export default NeedHelpPage;
