"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import { motion } from "framer-motion";
import Image from "next/image";

const reviewsData = [
  {
    name: "John Doe",
    comment:
      "PropertyMaco made the selling process so easy! I got a fair offer and closed quickly.",
  },
  {
    name: "Jane Smith",
    comment:
      "No repairs, no hidden fees. Exactly as promised. Highly recommend PropertyMaco!",
  },
  {
    name: "Carlos Rivera",
    comment:
      "I was behind on payments and needed to sell fast. They handled everything!",
  },
];

const videoReviewsData = [
  {
    title: "Andrea Eachus - From Start to Finish",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // sample URL
  },
  {
    title: "Cathy Cantwell - A Smooth Process",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Tara Bennett - Fast & Easy Closing",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function ReviewsPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Reviews | PropertyMaco"
        description="Read real testimonials from homeowners who sold their properties to PropertyMaco."
      />

      {/* ===================== HERO SECTION ===================== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[30vh] text-white py-8 px-4 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg" // Replace with your actual hero image
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>
        {/* Color Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        {/* Text Overlay (Aligned to Left) */}
        <div className="container mx-auto relative z-10 text-left pl-10 pr-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "white" }}>
            Reviews
          </h1>
          <p className="text-lg max-w-2xl">
            See what our customers have to say about their experience with PropertyMaco.
            Discover genuine reviews from homeowners who sold their houses quickly and hassle-free.
          </p>
        </div>
      </motion.section>

      {/* ===================== VIDEO REVIEWS SECTION (UPDATED) ===================== */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
            style={{ color: "black" }}
          >
            Video Reviews
          </motion.h2>
          <p className="text-lg mb-8 text-black max-w-4xl mx-auto">
            We are the only home buyer with dozens of video reviews featuring ACTUAL homeowners talking about
            their experience selling to us. There are truly no fees or commissions, and we buy houses AS-IS,
            so there are definitely no repairs (or even cleaning) needed.
          </p>
          {/* Single Big Video Review */}  
          <div className="mx-auto max-w-7xl rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video">
              <iframe
                src={videoReviewsData[0].videoUrl}
                title={videoReviewsData[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-0">
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
