"use client";

import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import MissionSection from "@/app/MissionSection";
import StorySection from "@/app/components/pages/home/StorySection";
import CTASection from "@/app/components/common/CTA";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  { name: "Sarah Williams", review: "Selling my house was stress-free with PropertyMaco! Highly recommend!" },
  { name: "David Brown", review: "A smooth process from start to finish. Very professional team!" },
  { name: "Emily Clark", review: "Excellent service! They made everything simple and transparent." },
];

const faqs = [
  { question: "How fast can I sell my home?", answer: "We can close in as little as 7 days, depending on your needs." },
  { question: "Do I need to make repairs before selling?", answer: "No! We buy homes as-is, saving you time and money." },
  { question: "Are there any fees or commissions?", answer: "No commissions or hidden fees. We provide a fair cash offer." },
];

export default function AboutPage() {
  return (
    <AnimatedPage>
      <SEO title="About PropertyMaco" description="Learn how we help homeowners sell quickly and hassle-free." />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="bg-primary text-white py-16 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ABOUT US</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            PropertyMaco helps homeowners sell quickly and hassle-free, no matter the situation.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Get an Offer
          </a>
        </div>
      </motion.div>

      {/* Story Section */}
      <StorySection />

      {/* Mission Section */}
      <MissionSection />

      {/* Why Choose Us Section */}
      <div className="container mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Why Choose Us?</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          We provide a fast, transparent, and hassle-free home-selling experience.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-900 text-white py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">What Our Clients Say</h2>
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <p className="italic">"{testimonial.review}"</p>
              <h3 className="mt-2 font-bold text-blue-400">- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-blue-500">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Form */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-2 border rounded bg-gray-700 text-white" 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-2 border rounded bg-gray-700 text-white" 
            required 
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full p-2 border rounded h-24 bg-gray-700 text-white" 
            required 
          ></textarea>
          <button 
            type="submit" 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* CTA Section */}
      <CTASection />
    </AnimatedPage>
  );
}
