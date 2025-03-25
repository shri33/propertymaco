"use client";

import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import { useEffect, useState } from "react";

export default function AccessibilityPage() {
  const [reviews, setReviews] = useState([
    "Great service! Sold my property fast and hassle-free. - John Doe",
    "Highly recommend PropertyMaco for their professionalism. - Jane Smith",
    "Very satisfied with the quick process. - Mark Taylor",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setReviews((prevReviews) => [...prevReviews.slice(1), prevReviews[0]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedPage>
      <SEO
        title="Accessibility | PropertyMaco"
        description="Our commitment to accessibility for all users."
      />
      <div className="bg-[#000000] text-white py-10 px-4 text-center">
        <h1 className="text-4xl font-bold">ACCESSIBILITY</h1>
      </div>
      
      <div className="container mx-auto py-10 px-4 md:px-20">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#FF0000]">GENERAL</h2>
          <p className="mt-2 text-gray-300">
            www.propertymaco.com strives to ensure that its services are accessible to people with disabilities. Our
            commitment to inclusivity is evident in our continuous efforts to make our website easy to navigate for all
            users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#FF0000]">ACCESSIBILITY POLICY</h2>
          <p className="mt-2 text-gray-300">
            At PropertyMaco, we are dedicated to providing an inclusive online experience for all individuals, including
            those with disabilities. We actively work to improve the accessibility of our website to ensure that everyone
            can access and interact with our services effectively. Our team regularly reviews and updates the site to
            meet accessibility standards.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#FF0000]">ACCESSIBILITY ON PROPERTYMACO</h2>
          <p className="mt-2 text-gray-300">
            We have implemented the UserWay Website Accessibility Widget powered by a dedicated accessibility server.
            This software helps us comply with WCAG 2.1 guidelines.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#FF0000]">ENABLING THE ACCESSIBILITY MENU</h2>
          <p className="mt-2 text-gray-300">
            The accessibility menu can be enabled by clicking the accessibility icon at the corner of the page. Please
            allow a moment for it to load.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#FF0000]">DISCLAIMER</h2>
          <p className="mt-2 text-gray-300">
            We strive to improve our site’s accessibility, but some content may not yet be fully adapted. We appreciate
            your understanding.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#FF0000]">HERE FOR YOU</h2>
          <p className="mt-2 text-gray-300">
            If you experience difficulty with any content, please contact us during business hours.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#FF0000]">CONTACT US</h2>
          <p className="mt-2 text-gray-300">
            If you wish to report an accessibility issue, need assistance, or have questions, contact us at:
            <span className="block font-bold">Phone: 1-800-345-6978</span>
          </p>
        </section>
      </div>
      
      <div className="bg-[#2A9DF4] py-10">
        <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-[#FFFFFF] mb-4">CONTACT US</h2>
            <p className="text-white">Have any questions? Reach out to us at:</p>
            <p className="text-white font-bold">Phone: 1-800-345-6978</p>
            <p className="text-white font-bold">Email: support@propertymaco.com</p>
            
            <h2 className="text-2xl font-semibold text-[#FFFFFF] mt-6 mb-4">REVIEWS FROM BUYERS</h2>
            <div className="overflow-hidden whitespace-nowrap w-full">
              <div className="flex space-x-10 animate-marquee">
                {reviews.map((review, index) => (
                  <p key={index} className="text-white italic">{review}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-[#FFFFFF] text-center mb-4">GET YOUR CASH OFFER!</h2>
            <form className="bg-white p-6 rounded-lg shadow-lg">
              <input type="text" placeholder="First Name" className="w-full border p-2 mb-4 rounded" />
              <input type="text" placeholder="Phone Number" className="w-full border p-2 mb-4 rounded" />
              <input type="email" placeholder="Email" className="w-full border p-2 mb-4 rounded" />
              <input type="text" placeholder="Property Address" className="w-full border p-2 mb-4 rounded" />
              <button className="bg-[#FF0000] text-white w-full py-2 rounded hover:bg-red-700">
                Get Your Cash Offer
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
