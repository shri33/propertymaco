"use client"; // 1️⃣ Mark as a Client Component
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import MissionSection from "@/app/MissionSection";
import StorySection from "@/app/components/pages/home/StorySection";
import CTASection from "@/app/components/common/CTA";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <AnimatedPage>
      <SEO
        title="About PropertyMaco"
        description="Learn how we help homeowners sell quickly and hassle-free."
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-primary text-white py-16 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ABOUT US</h1>
          <p className="text-lg max-w-2xl mb-8">
            PropertyMaco is here to help in all kinds of real estate situations. Whether you're 
            facing foreclosure, going through a divorce, or simply want to sell quickly without 
            the hassle of repairs, we offer a transparent and fair option. We provide honest 
            evaluations of your property value and offer fair, competitive prices based on 
            analyzing the real-time value of your home.
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

      {/* Optional CTA Section */}
      <CTASection />
    </AnimatedPage>
  );
}
