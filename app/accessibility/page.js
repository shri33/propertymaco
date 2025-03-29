"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import Image from "next/image";
import Link from "next/link";

export default function AccessibilityPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Accessibility | PropertyMaco"
        description="Our commitment to accessibility for all users."
      />

      {/* HERO SECTION */}
      <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg" // Replace with your desired image path
            alt="Accessibility Hero Image"
            fill
            className="object-cover"
          />
        </div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-70"></div>
        {/* Hero Text Content */}
        <div className="container mx-auto relative z-20 flex flex-col justify-center items-center sm:items-start h-full text-center sm:text-left px-4 sm:px-8 md:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Accessibility
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="bg-white text-black py-10 px-4 md:px-20">
        <section className="mb-8">
          <h2 className="text-2xl font-bold bg-[#0086bf] text-white p-2">
            Accessibility at PROPERTYMACO PROCESS
          </h2>
          <p className="mt-2">
            At PROPERTYMACO PROCESS, we believe every user deserves to access our services with dignity, comfort, and independence. We are committed to ensuring that our digital environment is accessible to everyone, including individuals with disabilities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold bg-[#0086bf] text-white p-2">
            Our Commitment to Accessibility
          </h2>
          <p className="mt-2">
            PROPERTYMACO PROCESS has invested significant resources to enhance our website's usability for all users. We strive to comply with the Web Content Accessibility Guidelines (WCAG 2.1) to ensure an inclusive online experience. Our accessibility efforts reflect our commitment to providing a seamless experience for every visitor.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold bg-[#0086bf] text-white p-2">
            Accessibility Tools
          </h2>
          <p className="mt-2">
            Our website features an accessibility widget powered by a dedicated accessibility server. To activate the accessibility menu, simply click on the accessibility icon located in the corner of the page and wait a moment for it to load completely. This tool is designed to adjust the site's display to better meet your individual needs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold bg-[#0086bf] text-white p-2">
            Disclaimer
          </h2>
          <p className="mt-2">
            While we continually work to improve the accessibility of our site, some content may not yet fully meet the highest accessibility standards. This may be due to evolving technological solutions. We are dedicated to identifying and implementing improvements on an ongoing basis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold bg-[#0086bf] text-white p-2">
            We're Here to Help
          </h2>
          <p className="mt-2">
            If you encounter any difficulties or have questions about accessing content on our website, please don't hesitate to contact our support team. We are here to assist you during normal business hours.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold bg-[#0086bf] text-white p-2">
            Contact Us
          </h2>
          <p className="mt-2">
            For accessibility-related inquiries or to report an issue, please reach out to our IT support at:
            <br />
            <strong>Email:</strong> it@propertymaco.com
          </p>
        </section>

        <p className="mt-4">
          Your feedback is invaluable in helping us enhance accessibility and ensure that our services remain accessible to all.
        </p>
      </div>
    </AnimatedPage>
  );
}

