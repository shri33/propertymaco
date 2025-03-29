"use client";
import { useState, useRef, useEffect } from "react";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import Link from "next/link";
import Image from "next/image";

export default function BehindOnMortgagePage() {
  return (
    <AnimatedPage>
      <SEO
        title="Behind on Mortgage | PropertyMaco"
        description="Save your home from foreclosure and even earn extra cash by selling your home fast."
      />

      {/* HERO SECTION */}
      {/* HERO SECTION */}
<section className="relative h-[70vh]">
  {/* Background Image */}
  <div className="absolute inset-0 -z-20">
    <Image
      src="/hero.jpg" // Update with your hero image path
      alt="Hero Background"
      fill
      className="object-cover"
    />
  </div>
  {/* Color Overlay */}
  <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
  {/* Text Content */}
  <div className="container mx-auto relative z-20 flex flex-col justify-center items-center sm:items-start h-full text-center sm:text-left px-4 sm:px-8 md:px-20">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
      Behind on Mortgage: Save Your Home from Foreclosure and Even Earn Extra Cash
    </h1>
    <p className="text-base sm:text-lg md:text-xl max-w-2xl text-white mb-6">
      Challenging financial times can put homeowners under extreme stress, causing them to fall behind on regular mortgage payments. Instead of facing credit damage and legal complications, you can turn to us for a fast, all‑cash offer.
    </p>
    <Link href="/contact">
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base py-3 px-6 rounded-md transition duration-300">
        Get an Offer
      </button>
    </Link>
  </div>
</section>

      {/* SECTION 1: Selling Your Home in Hard Times */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-8 md:px-20">
          {/* Text Column (Left) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Selling Your Home in Hard Times</h2>
            <p className="mb-4">
              Every homeowner encounters difficult financial realities from time to time—whether it's a loss of income, unexpected medical bills, or a miscalculation in homeownership costs. By selling your home to PropertyMaco, you can eliminate your largest recurring expense and free up vital income. We make a fair, as‑is cash offer regardless of your home's condition. After using part of the cash to settle your mortgage, you keep the remaining funds to help restore your financial health—all without commission fees or surprise charges.
            </p>
          </div>
          {/* Image Column (Right) */}
          <div className="md:w-1/2">
            <Image
              src="/selling-hard-times.jpg" // Replace with your image
              alt="Selling Your Home in Hard Times"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Legal Considerations of Falling Behind on Mortgage Payments */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-8 md:px-20">
          {/* Image Column (Left) */}
          <div className="md:w-1/2">
            <Image
              src="/legal-consideration.jpg" // Replace with your image
              alt="Legal Considerations"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Text Column (Right) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">
              Legal Considerations of Falling Behind on Mortgage Payments
            </h2>
            <p className="mb-4">
              Defaulting on mortgage payments can lead to foreclosure—a lengthy, draining process that might result in a deficiency judgment, severe credit damage, eviction, and a mountain of legal bills. Once foreclosure is finalized, the lender takes ownership and may sell your property, leaving lasting financial repercussions. Selling your home before reaching that stage allows you to regain control, avoid the drastic consequences of foreclosure, and potentially preserve your credit.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: How PropertyMaco Gets You Out of Mortgage Distress */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-8 md:px-20">
          {/* Text Column (Left) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">
              How PropertyMaco Gets You Out of Mortgage Distress
            </h2>
            <p className="mb-4">
              Listing your home with a traditional real estate agent can take months—during which mortgage bills continue to mount along with agent commissions and closing costs. PropertyMaco bypasses these delays by offering an immediate, all‑cash offer on your home, purchased in its current condition. Once your mortgage debt is settled, any remaining funds are yours, giving you a real opportunity to break free from financial burdens.
            </p>
          </div>
          {/* Image Column (Right) */}
          <div className="md:w-1/2">
            <Image
              src="/get-out-of-debt.jpg" // Replace with your image
              alt="Get Out of Mortgage Distress"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Relieve the Pain of Missed Mortgage Payments */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-8 md:px-20">
          {/* Image Column (Left) */}
          <div className="md:w-1/2">
            <Image
              src="/relieve-pain.jpg" // Replace with your image
              alt="Relieve the Pain of Missed Mortgage Payments"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Text Column (Right) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">
              Relieve the Pain of Missed Mortgage Payments
            </h2>
            <p className="mb-4">
              Falling behind on your mortgage doesn’t mean you’re without options. By selling your home to PropertyMaco, you can avoid foreclosure and its long‑term impact on your credit, while also gaining cash to help manage other debts. We work with integrity, provide fair cash offers, and maintain complete transparency at every step. It’s a chance to start over without judgment or additional obstacles.
            </p>
          </div>
        </div>
      </section>

      {/* TAKE CONTROL OF YOUR FUTURE SECTION */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-8 md:px-20">
          {/* Text Column (Left) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Take Control of Your Future</h2>
            <p className="mb-4">
              Don’t let foreclosure ruin your financial future. By selling your home to PropertyMaco, you can avoid long‑term credit damage, settle your mortgage balance, and potentially even secure extra cash to help with your next steps. Contact our team today and let’s discuss how we can turn a challenging situation into a fresh start.
            </p>
          </div>
          {/* Image Column (Right) */}
          <div className="md:w-1/2">
            <Image
              src="/take-control.jpg" // Replace with your image
              alt="Take Control of Your Future"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: The Process: Selling Your Home Fast */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto text-center px-4 sm:px-8 md:px-20">
          <h2 className="text-3xl font-bold mb-4">The Process: Selling Your Home Fast</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            At PropertyMaco, our goal is to make selling your home quick and hassle‑free. Our streamlined process consists of three simple steps:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-left">
              <h3 className="font-bold mb-2 text-lg">Step 1 – Just a Chat</h3>
              <p className="text-sm">
                We begin with a friendly phone consultation to learn about your situation and determine if we're the right fit for your needs.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-left">
              <h3 className="font-bold mb-2 text-lg">Step 2 – We Present an Offer</h3>
              <p className="text-sm">
                If we’re a good match, our team will present you with a fair, as‑is cash offer for your property—no repairs, no hidden fees.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-left">
              <h3 className="font-bold mb-2 text-lg">Step 3 – Close and Get Paid</h3>
              <p className="text-sm">
                Once you accept our offer, we schedule an on‑site closing at a time that’s convenient for you. In just a few weeks, you'll receive cash for your home and can move forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Contact Marco’s Friendly Home Buyer Team to Get Started */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center px-4 sm:px-8 md:px-20">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Contact Marco’s Friendly Home Buyer Team to Get Started
          </h2>
          <p className="text-lg max-w-6xl mx-auto text-black mb-4">
            Falling behind on mortgage payments can be overwhelming, but you don’t have to go through it alone. Marco and his team at Friendly Home Buyer are here to help you move forward without stress or judgment.
          </p>
          <p className="text-lg max-w-6xl mx-auto text-black">
            The first step is simple—reach out to us. Whether you prefer an online chat, filling out a quick form, or giving us a call at (239) 990-5070, we’re ready to assist you. Let’s work together to turn this challenge into a fresh start.
          </p>
        </div>
      </section>
    </AnimatedPage>
  );
}
