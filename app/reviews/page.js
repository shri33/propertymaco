"use client"; // Mark this as a Client Component for Framer Motion

import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import { motion } from "framer-motion";

// Example data for your testimonials reviews
const reviewsData = [
  {
    name: "John Doe",
    comment: "PropertyMaco made the selling process so easy! I got a fair offer and closed quickly.",
  },
  {
    name: "Jane Smith",
    comment: "No repairs, no hidden fees. Exactly as promised. Highly recommend PropertyMaco!",
  },
  {
    name: "Carlos Rivera",
    comment: "I was behind on payments and needed to sell fast. They handled everything!",
  },
];

// Example data for video reviews (replace videoUrl with your actual video embeds)
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

      {/* Hero / Intro Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-black text-white py-16 px-4 text-center relative overflow-hidden"
      >
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#FF0000" }}>
            What Our Clients Say
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover genuine reviews from homeowners who sold their houses quickly and hassle-free. We are the
            only home buyer with dozens of video reviews from ACTUAL homeowners sharing their experience.
          </p>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: "#FF0000" }}
          >
            Client Testimonials
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {reviewsData.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <p className="text-gray-700 italic mb-4">"{review.comment}"</p>
                <h4 className="font-bold text-gray-800">- {review.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reviews Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: "#FF0000" }}
          >
            Video Reviews
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {videoReviewsData.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800">{video.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: "#FF0000" }}
          >
            Get In Touch
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Contact Form */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#FF0000" }}>
                Contact Us
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
            {/* Right Column: Additional Contact Content or Info */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#2A9DF4" }}>
                Why Choose Us?
              </h3>
              <p className="mb-2 text-white">
                We are the only home buyer with dozens of video reviews featuring ACTUAL homeowners sharing their
                experiences. There are no fees or commissions, and we buy houses AS-IS—no repairs or even cleaning are
                needed.
              </p>
              <p className="mb-2 text-white">Call us now at <strong style={{ color: "#FF0000" }}>(888) 713-9158</strong></p>
              <p className="mb-2 text-white">Or email us at <strong style={{ color: "#FF0000" }}>info@propertymaco.com</strong></p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
