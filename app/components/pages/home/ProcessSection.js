"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const processSteps = [
  {
    step: "STEP 1",
    title: "INITIAL CONTACT",
    description: "We begin with a simple conversation to understand your unique situation and needs, ensuring we align our services with your expectations."
  },
  {
    step: "STEP 2",
    title: "PROPERTY EVALUATION",
    description: "Our experts calculate a thorough assessment of your property in its current condition, guaranteeing a fair and market-based offer that meets the needs for your circumstances."
  },
  {
    step: "STEP 3",
    title: "RECEIVE YOUR OFFER",
    description: "We present you with a clear, no-obligation cash offer based on our evaluation, with full transparency on how we arrived at this figure."
  },
  {
    step: "STEP 4",
    title: "CLOSING",
    description: "If you accept, we handle all the paperwork and close on your timeline - whether that's a week or several months. You choose when it works best for you."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          OUR PROCESS EXPLAINED
        </motion.h2>

        <div className="space-y-24">
          {processSteps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connecting line */}
              {index < processSteps.length - 1 && (
                <div className="absolute h-24 w-1 bg-gray-200 left-[33px] top-full"></div>
              )}
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-8`}
              >
                {/* Step Number */}
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white font-bold text-xl">
                  {index + 1}
                </div>
                
                {/* Step Content */}
                <div className="max-w-2xl">
                  <span className="text-sm font-bold text-gray-500">{item.step}</span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                
                {/* Image (only shown for even-indexed items) */}
                {index % 2 === 0 && (
                  <div className="hidden md:block ml-auto">
                    <div className="relative h-64 w-64 rounded-lg overflow-hidden shadow-lg">
                      <Image 
                        src={`/images/process-${index + 1}.jpg`} 
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}