"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    question: "What fees will I be charged at closing?",
    answer: "None! Unlike traditional real estate transactions, we don't charge any fees or commissions. The offer we make is the amount you receive, minus any existing mortgage balances or liens."
  },
  {
    question: "Do I have to fix up my home or clean it?",
    answer: "Not at all. We buy houses in as-is condition, which means you don't need to clean, repair, or fix anything before selling to us."
  },
  {
    question: "Will I have to clean the house before I leave?",
    answer: "No. Take what you want and leave the rest. We'll handle all the cleaning and removal of unwanted items."
  },
  {
    question: "Can I have some flexibility with the closing date?",
    answer: "Absolutely! We can close on your timeline, whether that's as quickly as 7 days or several months out."
  },
  {
    question: "How do I get my money?",
    answer: "You'll receive payment via wire transfer or certified check at closing, whichever you prefer."
  },
  {
    question: "Do I need to travel somewhere to close the closing?",
    answer: "In most cases, no. We can arrange for a mobile notary to come to your location for signing, making the process as convenient as possible for you."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 p-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/faq">
            <span className="inline-block py-2 px-6 bg-primary text-white rounded-md hover:bg-primary/90 transition duration-300 cursor-pointer">
              View All
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}