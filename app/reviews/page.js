"use client"; // 1️⃣ Mark this as a Client Component for Framer Motion

import AnimatedPage from "@/app/components/common/AnimatedPage"; 
import SEO from "@/app/components/common/SEO";
import { motion } from "framer-motion";

// Example data for your reviews/testimonials
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
        className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden"
      >
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover genuine reviews from homeowners who sold their houses quickly and hassle-free.
          </p>
        </div>
      </motion.section>

      {/* Reviews List */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
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
    </AnimatedPage>
  );
}
