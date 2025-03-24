"use client"; // 1️⃣ Mark this file as a Client Component

import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WeBuyHousesPage() {
  return (
    <AnimatedPage>
      <SEO
        title="We Buy Houses in Florida | PropertyMaco"
        description="Sell your house in Florida fast for cash. No fees, no repairs, no hassle."
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-primary text-white py-16 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/we-buy-hero.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">WE BUY HOUSES</h1>
          <p className="text-lg max-w-2xl mb-8">
            PropertyMaco specializes in buying houses fast for cash in Florida. Whether you're
            facing foreclosure, divorce, or just need a quick sale, we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Get an Offer
          </Link>
        </div>
      </motion.div>

      {/* Copy of About Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Sell Your Florida House to Us?
          </h2>
          <p className="text-gray-700 mb-4">
            We provide honest evaluations, fair offers, and flexible closing. Avoid repairs,
            agent fees, and showings.
          </p>
          <p className="text-gray-700">
            Our process is straightforward and stress-free, giving you peace of mind.
          </p>
        </div>
      </section>

      {/* Our Process Explained */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            OUR PROCESS EXPLAINED
          </h2>
          {/* Steps or re-use your existing ProcessSection code */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* ... steps here ... */}
          </div>
        </div>
      </section>

      {/* You can add Testimonials or Contact form here */}
    </AnimatedPage>
  );
}
