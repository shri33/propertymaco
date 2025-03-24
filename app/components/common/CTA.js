// components/common/CTA.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-secondary text-white py-16 px-4 text-center"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Sell Your House?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Get a fast, fair cash offer with PropertyMaco today. No obligations, no pressure.
        </p>
        <Link href="/contact">
          <span className="bg-white text-secondary font-bold py-3 px-8 rounded-md inline-block hover:bg-gray-100 transition duration-300 cursor-pointer">
            Contact Us
          </span>
        </Link>
      </div>
    </motion.section>
  );
}
