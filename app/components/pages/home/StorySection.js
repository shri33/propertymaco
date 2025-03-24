// components/pages/about/StorySection.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">OUR STORY</h2>
            <p className="text-gray-700 mb-4">
              PropertyMaco was born from a genuine desire to simplify the home-selling process 
              for Florida homeowners. Founded by a team with deep roots in the local real estate 
              market, we've seen firsthand what sellers struggle with when trying to sell a 
              property fast, for cash, when they need flexibility.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder saw an opportunity to create a better experience for homeowners, 
              transforming the way people sell their properties in Florida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/team.jpg"
                alt="PropertyMaco Team"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
