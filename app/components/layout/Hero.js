"use client"; 
import { motion } from "framer-motion";

export default function HeroSection({ children, backgroundImage }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[600px] flex items-center justify-center text-white bg-cover bg-center px-6 md:px-12"
      // If you want a custom background per page, pass it via `backgroundImage` prop
      style={{ backgroundImage: `url('${backgroundImage || "/hero.jpg"}')` }}
    >
      {/* Semi-Transparent Teal Overlay */}
      <div className="absolute inset-0 bg-[#0086bf]/30"></div>

      {/* Dynamic Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        {children} {/* 🚀 Dynamic Content Provided by Each Page */}
      </div>
    </motion.div>
  );
}
