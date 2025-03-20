// components/pages/home/HeroSection.js

"use client"; // Important for Framer Motion in app router
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[url('/images/hero.jpg')] bg-cover bg-center text-white py-32 px-4 flex items-center justify-center"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Sell Your House Fast with PropertyMaco</h1>
        <p className="mb-6">
          We buy houses in any condition. No repairs, no hidden fees, and a quick closing.
        </p>
        <a
          href="/contact"
          className="bg-secondary px-6 py-3 rounded font-bold hover:opacity-90"
        >
          Get Your Cash Offer
        </a>
      </div>
    </motion.section>
  );
}

