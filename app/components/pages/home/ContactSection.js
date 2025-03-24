"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/app/components/common/ContactForm";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">CONTACT US</h2>
            <p className="text-gray-700 mb-6">
              "I need to sell my house fast!" "I need to sell my house NOW!" "I want to sell my house without a realtor!" If you're asking yourself these questions, we're here to help. We're buying houses fast for cash right now. Just fill out our form, and we'll reach out within 24 hours with your free cash offer.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clipRule="evenodd" />
                </svg>
                <a href="mailto:info@propertymaco.com" className="text-gray-700 hover:underline">info@propertymaco.com</a>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:8887199158" className="text-gray-700 hover:underline">888-719-9158</a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-2/3 bg-secondary p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-center text-white mb-6">GET YOUR CASH OFFER!</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}