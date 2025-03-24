"use client";  // 1️⃣ Mark this file as a Client Component

import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          WHY CHOOSE US?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 text-gray-700"
        >
          Choosing PropertyMaco means opting for a quick, straightforward sale. You won't
          need to worry about repairs, marketing, or uncertain closing dates. We're here
          to make your life easier with a selling process that puts your needs first.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">OUR VALUES</h3>
            <p className="text-gray-700">
              Transparency, integrity, and customer service are at the heart of everything
              we do. We're dedicated to building trust and ensuring a positive experience
              for all our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              OUR COMMITMENT TO YOU
            </h3>
            <p className="text-gray-700">
              We're committed to understanding your specific needs and offering a
              stress-free selling process. Our team is here to support you every step
              of the way.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
