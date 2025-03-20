// app/components/common/CTA.js

"use client"; // This is crucial for using Framer Motion in Next.js 13 App Router
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary text-white p-10 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Sell Your House?</h2>
      <p className="mb-6">Get a fast, fair cash offer with PropertyMaco today.</p>
      <Link
        href="/contact"
        className="bg-white text-secondary font-bold py-2 px-6 rounded cursor-pointer hover:opacity-90"
      >
        Contact Us
      </Link>
    </motion.section>
  );
}
