'use client';

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

type FAQ = {
  question: string;
  answer: string;
  category?: string;
  createdAt: string;
};

const FAQPage = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  // Fetch FAQ data from Sanity
  useEffect(() => {
    const fetchFAQs = async () => {
      const query = `*[_type == "faq"] | order(createdAt desc) {
        question,
        answer,
        category,
        createdAt
      }`;
      
      const fetchedFaqs = await client.fetch(query);
      setFaqs(fetchedFaqs);
    };

    fetchFAQs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Here are some of the most frequently asked questions about our products and services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border bg-gray-100 rounded-lg shadow-sm p-5">
            <h2 className="text-lg font-medium flex justify-between items-center">
              {faq.question}
              <span className="text-gray-400">+</span>
            </h2>
            <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
