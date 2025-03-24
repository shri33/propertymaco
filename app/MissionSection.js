// components/pages/about/MissionSection.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 order-2 md:order-1"
          >
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 order-1 md:order-2"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">OUR MISSION</h2>
            <p className="text-gray-700 mb-4">
              Our mission is to provide homeowners with a stress-free home-selling 
              experience. We're committed to providing a hassle-free, fair, and swift 
              process for selling your property, regardless of its condition.
            </p>
            <p className="text-gray-700">
              When you work with us, you can expect honesty, integrity, and a genuine 
              commitment to meeting your real estate needs in a way that works best 
              for your situation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
