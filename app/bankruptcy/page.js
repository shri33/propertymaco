"use client"; // Mark file as a Client Component

import { useState, useRef, useEffect } from "react";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import Link from "next/link";
import Image from "next/image";

// HERO and shared components

export default function BankruptcyPage() {
  // For any animated sections (e.g. Our Approach, if needed)
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
        title="Bankruptcy & Selling Your Home | PropertyMaco"
        description="Learn how PropertyMaco helps you navigate bankruptcy and sell your home fast."
      />

      {/* HERO SECTION */}
      <section className="relative h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg" // Update if needed
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>
        {/* Color Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        {/* Text Content */}
        <div className="container mx-auto relative z-20 flex flex-col justify-center items-start h-full text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bankruptcy & Selling Your Home
          </h1>
          <p className="text-lg max-w-2xl text-white mb-8">
            If you’re overwhelmed by debt and considering bankruptcy, selling your home might be the solution you need. Even if you’ve already filed for Chapter 7 or Chapter 13, letting go of your home—and its monthly mortgage payment—can pave the way for a fresh start. Contact us today at PropertyMaco to get a fair, all‑cash offer.
          </p>
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              Get an Offer
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 1: Selling Your Home Before Filing for Bankruptcy */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-6">
              Selling Your Home Before Filing for Bankruptcy
            </h2>
            <p className="mb-4">
              For those who haven’t filed for bankruptcy yet, selling your home may help you avoid it altogether. Your monthly mortgage payment is often your largest recurring expense, and shedding this burden can free up vital income to address other debts and begin your journey toward financial freedom. PropertyMaco will make you an as‑is cash offer, allowing you to settle your mortgage and keep any remaining cash—without commissions or fees.
            </p>
          </div>
          {/* Right Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/before-bankruptcy.jpg" // Replace with appropriate image
              alt="Selling Before Bankruptcy"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Legal Considerations After Filing for Bankruptcy */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/legal-bankruptcy.jpg" // Replace with your image
              alt="Legal Considerations"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Right Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">
              Legal Considerations After Filing for Bankruptcy
            </h2>
            <p className="mb-4">
              If you’ve already filed for bankruptcy, selling your home can be more complex. In a Chapter 7 filing, complications may arise if the sale interferes with creditors’ rights, whereas a Chapter 13 filing typically allows for a smoother process—though court approval is still required. This is why, whenever possible, it’s best to sell your home before filing.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: How PropertyMaco Simplifies Your Home Transition */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">
              How PropertyMaco Simplifies Your Home Transition
            </h2>
            <p className="mb-4">
              Traditional home sales can drag on for months and come with hefty commissions (typically 5–6% of the purchase price) plus additional closing costs. With PropertyMaco, you won’t incur any fees. We pay cash for your home and purchase it “as is” — meaning no repairs, cleaning, or removal of unwanted belongings are necessary. After settling your mortgage, any leftover cash is yours to use as you see fit—whether to pay off debts, rebuild your savings, or start fresh.
            </p>
          </div>
          {/* Right Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/simplify-transition.jpg" // Replace with your image
              alt="Simplify Your Home Transition"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

       {/* SECTION: Transitioning Out of Your Home: Emotional Impacts */}
<section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "white" }}>
  <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
    {/* Left Image Column */}
    <div className="md:w-1/2">
      <Image
        src="/emotional-impact.jpg" // Replace with your actual image path
        alt="Emotional Impacts"
        width={600}
        height={400}
        className="object-cover rounded-lg shadow-lg"
      />
    </div>
    {/* Right Text Column */}
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold mb-4">
        Transitioning Out of Your Home: Emotional Impacts
      </h2>
      <p className="mb-4">
        Moving out of a home—especially one where you've built memories over the years—can be emotionally challenging. However, selling your home gives you control over what comes next for you and your family. Rather than filing for bankruptcy and handing your future over to creditors, you can shed debt and secure cash for a fresh start.
      </p>
      <p>
        At PropertyMaco, we understand these challenges and are here to help. We take pride in assisting homeowners facing tough situations with integrity, fair cash offers, and complete transparency from start to finish. Brighter days are ahead, and we're committed to helping you move forward with confidence.
      </p>
    </div>
  </div>
</section>


      {/* SECTION 4: Our Approach */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="mb-4">
              Our streamlined, two‑step process is designed to expedite your home transaction:
              <br /><br />
              <strong>Connect With Our Team:</strong> We start with a quick, friendly phone consultation to understand your situation and assess your property.
              <br /><br />
              <strong>Receive Your Offer & Close:</strong> If we’re a good fit, we’ll present you with an all‑cash, as‑is offer. Once you accept, we schedule a closing that works for you—often in as little as two weeks. We handle repairs, cleaning, and property removal, ensuring a seamless transition.
            </p>
          </div>
          {/* Right Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/our-approach.jpg" // Replace with your image
              alt="Our Approach"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: Take Control of Your Future */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Take Control of Your Future
          </h2>
          <p className="text-lg max-w-6xl mx-auto mb-6">
            Don’t let the threat of bankruptcy ruin your financial health. By selling your home to PropertyMaco, you can avoid long-term credit damage, settle your mortgage debt, and potentially secure extra cash to jumpstart a new chapter. Contact our team today and let’s discuss your options.
          </p>
        </div>
      </section>
    </AnimatedPage>
  );
}
