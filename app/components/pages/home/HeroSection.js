"use client";  // 1️⃣ Mark as Client Component
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-[url('/images/hero.jpg')] bg-cover bg-center text-white py-32 px-4 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Sell Your House Fast with PropertyMaco
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg mb-8"
          >
            We buy houses in any condition. No repairs, no hidden fees, and a quick closing on your timeline.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/contact">
              <span className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-md inline-block transition duration-300 cursor-pointer">
                Get Your Cash Offer
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
