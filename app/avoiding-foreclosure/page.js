"use client"; // Mark file as a Client Component

import { useState, useRef, useEffect } from "react";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import Link from "next/link";
import Image from "next/image";

// HERO and shared components

// Simple tick/check icon (if needed elsewhere)
function TickIcon() {
  return (
    <svg
      className="w-4 h-4 mr-2 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function AvoidingForeclosurePage() {
  // For any animated sections (if needed)
  const [visibleSteps, setVisibleSteps] = useState({});
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );
    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <AnimatedPage>
      <SEO
        title="Avoiding Foreclosure | PropertyMaco"
        description="Learn how we help homeowners avoid foreclosure."
      />

      {/* HERO SECTION */}
      <section className="relative h-[40vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg" // Replace with your hero image path
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>
        {/* Color Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        {/* Text Content */}
        <div className="container mx-auto relative z-20 flex flex-col justify-center items-start h-full text-left px-4 sm:px-8 md:px-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AVOIDING FORECLOSURE
          </h1>
          <p className="text-lg max-w-2xl text-white mb-8">
            Facing foreclosure can be stressful. PropertyMaco offers a straightforward solution to help you avoid it.
          </p>
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              Get an Offer
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 1: Understanding the Basics of Selling Before Foreclosure */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-8 md:px-20">
          {/* Left Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">
              Understanding the Basics of Selling Before Foreclosure
            </h2>
            <p className="mb-4">
              Typically, lenders begin the foreclosure process after 120 to 180 days of missed payments. In Florida, the process can take between 8 to 14 months to complete. However, once foreclosure is finalized, the lender takes ownership of your home and may sell it—damaging your credit and leaving you liable for any remaining balance. Selling your property before foreclosure not only helps you salvage your financial health but may also leave you with extra cash for a fresh start.
            </p>
            <Link href="/contact">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                Contact Us Now
              </button>
            </Link>
          </div>
          {/* Right Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/Before-foreclosure.png" // Replace with appropriate image
              alt="Selling Before Foreclosure"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Legal Considerations */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-8 md:px-20">
          {/* Left Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/legal-considerations.jpg" // Replace with your image
              alt="Legal Considerations"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Right Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Legal Considerations</h2>
            <p className="mb-4">
              There are two critical legal factors when selling to avoid foreclosure. First, timing is essential: you must sell before your lender formally initiates the foreclosure case in court. Second, if you sell your home for less than you owe (a short sale), your lender must agree to the terms—often resulting in a deficiency judgment or forgiveness of the remaining balance. At PropertyMaco, we have extensive experience in pre-foreclosure and short sale transactions, ensuring a fair offer that helps you move forward.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Our Streamlined Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-8 md:px-20">
          {/* Left Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Our Streamlined Process</h2>
            <p className="mb-4">
              Working with PropertyMaco means you can bypass the traditional hassles of home selling. We buy your home "as is"—no repairs, no cleaning, and no staging required. Once we agree on an offer, our team takes care of all the details, from paperwork to closing. We can complete the process in as little as two weeks, allowing you to move on quickly without the stress of prolonged uncertainty.
            </p>
          </div>
          {/* Right Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/streamlined-process.jpg" // Replace with your image
              alt="Our Streamlined Process"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Don’t Let Foreclosure Ruin Your Financial Future */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-8 md:px-20">
          {/* Left Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/avoid-financial-future.jpg" // Replace with your image
              alt="Avoid Financial Future"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Right Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Don’t Let Foreclosure Ruin Your Financial Future</h2>
            <p className="mb-4">
              Foreclosure can severely impact your credit for years, making future financial recovery difficult. By selling your home to PropertyMaco, you can avoid these long-term repercussions, settle your mortgage balance, and potentially even secure some cash to help with your next steps. Contact our team today to discuss how we can help you turn a challenging situation into a fresh start.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Our Process: How We Expedite Your Home Transaction */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-8 md:px-20">
          {/* Left Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Our Process: How We Expedite Your Home Transaction</h2>
            <p className="mb-4">
              At PropertyMaco, our streamlined home-buying process is designed to ensure a quick, hassle‑free sale. It all starts with a simple phone consultation. When you connect with our team, we arrange a brief chat to understand your situation and assess if we’re the right fit for your needs. If everything aligns, our experts will present you with an as‑is cash offer for your home.
              <br /><br />
              It’s really that easy! Once you accept the offer, we schedule a closing at your convenience. Our experienced team can finalize the transaction in as little as two weeks. Plus, we handle all aspects of the sale—from repairs and cleaning to property removal—so you can focus on moving forward.
            </p>
          </div>
          {/* Right Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/expedite-transaction.jpg" // Replace with your image
              alt="Expedite Your Home Transaction"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: Don’t Let Foreclosure Ruin Your Financial Health */}
      <section className="py-16 px-12" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto text-center px-4 sm:px-8 md:px-20">
          <h2 className="text-3xl font-bold mb-4">Don’t Let Foreclosure Ruin Your Financial Health</h2>
          <p className="text-lg max-w-7xl mx-auto mb-6">
            Foreclosure can significantly damage your credit for years, making it challenging to recover financially. At PropertyMaco, we help you avoid foreclosure and settle your mortgage balance quickly. Our efficient, all‑cash approach may even leave you with extra funds to help start fresh. Contact our team today, and let’s discuss how we can turn a difficult situation into a smart financial decision.
          </p>
        </div>
      </section>
      
    </AnimatedPage>
  );
}
