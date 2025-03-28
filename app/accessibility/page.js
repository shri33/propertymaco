"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import Image from "next/image";

export default function AccessibilityPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Accessibility | PropertyMaco"
        description="Our commitment to accessibility for all users."
      />

      {/* HERO SECTION */}
      <section className="relative h-[40vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero-accessibility.jpg" // Replace with your desired image path
            alt="Accessibility Hero Image"
            fill
            className="object-cover"
          />
        </div>
        {/* Optional overlay (adjust opacity as needed) */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-70"></div>
        {/* White text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Accessibility</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="bg-white text-black py-10 px-4 md:px-20">
        {/* Additional content goes here */}
      </div>
    </AnimatedPage>
  );
}
