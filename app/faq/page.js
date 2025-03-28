"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "How does the cash offer process work?",
      answer:
        "Our process is designed to be simple and straightforward. It starts with a no-obligation conversation where we learn about your situation and your home. We then present you with a fair, all-cash offer, and if you agree, we schedule a closing date that works for you.",
    },
    {
      question: "Do I need to make repairs or clean up my home before selling?",
      answer:
        "No, you don’t have to worry about repairs or upgrades. We buy homes as-is, so you can sell your property in its current condition and avoid the hassle of additional work or expenses.",
    },
    {
      question: "How quickly can I get an offer and close on my home?",
      answer:
        "You can typically receive your cash offer within a few days, and if you accept, the closing process can be completed in as little as a few weeks, giving you fast access to cash.",
    },
    {
      question: "Are there any hidden fees or commissions?",
      answer:
        "Absolutely not. Our service comes with no commission fees or hidden charges. The cash offer you receive is exactly what you get, allowing you to use the funds as you need.",
    },
    {
      question: "What if I’m behind on my mortgage payments?",
      answer:
        "Selling your home for cash is a great way to address missed mortgage payments. The cash you receive can be used to pay off your outstanding mortgage balance, helping you avoid foreclosure.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Yes. We value your privacy and handle all information with the utmost confidentiality. Our process is secure and designed to protect your personal and financial details.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply contact us through our website, fill out our online form, or call our dedicated team. We’ll guide you through the entire process, answer any additional questions, and help you take the first step toward financial relief.",
    },
  ];

  // Toggle function for the accordion
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[40vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg" // Replace with your hero image path
            alt="FAQ Hero Background"
            fill
            className="object-cover"
          />
        </div>
        {/* Color Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        {/* Text Content */}
        <div className="container mx-auto relative z-20 flex flex-col justify-center items-start h-full text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg max-w-2xl text-white mb-6">
            Learn more about selling your home for cash. Our goal is to make
            the process quick, fair, and stress‑free so you can move forward
            with confidence.
          </p>
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              Get an Offer
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#f2fafc] py-10">
        <div className="container mx-auto px-4 text-black">
          <h2 className="text-3xl font-bold text-center mb-8">
            FAQ Have Questions? We Have Answers.
          </h2>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                {/* Question Button */}
                <button
                  onClick={() => handleToggle(index)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold text-black">
                    {faq.question}
                  </span>
                  <span className="text-xl font-bold text-black">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <p className="mt-2 text-black">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
