"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import Image from "next/image";

export default function InterpretationDefinitionsPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Interpretation and Definitions | PropertyMaco"
        description="Learn the definitions and interpretation used in our Privacy Policy."
      />

      {/* HERO SECTION */}
      <section className="relative h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg" // Replace with your desired image path
            alt="Hero"
            fill
            className="object-cover"
          />
        </div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-70"></div>
        {/* Left-aligned white text overlay, vertically centered */}
        <div className="absolute inset-0 flex items-center justify-start pl-48">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-white max-w-3xl">
              Last updated: March 20, 2025
              <br /><br />
              This Privacy Policy describes our policies and procedures regarding the collection, use, and disclosure of your information when you access and use our Service, and it outlines your privacy rights and how the law protects you.
              <br /><br />
              By using our Service, you agree to the collection and use of your personal data in accordance with this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="bg-white text-black py-10 px-4 md:px-20">
        {/* Interpretation Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold bg-[#0086bf] text-white p-2">
            Interpretation
          </h2>
          <p className="mt-2">
            The words with initial capital letters have meanings defined under the following conditions. These definitions will have the same meaning regardless of whether they appear in singular or plural form.
          </p>
        </section>

        {/* Definitions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold bg-[#0086bf] text-white p-2">
            Definitions
          </h2>
          <p className="mt-2 mb-4">For the purposes of this Privacy Policy:</p>
          <ul className="list-none space-y-2">
            <li>
              <span className="text-green-500 font-bold mr-2">✓</span>
              <strong>Account:</strong> A unique account created for you to access our Service or parts of our Service.
            </li>
            <li>
              <span className="text-green-500 font-bold mr-2">✓</span>
              <strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares or equity interest.
            </li>
            <li>
              <span className="text-green-500 font-bold mr-2">✓</span>
              <strong>Company:</strong> (referred to as either "PROPERTYMACO PROCESS," "we," "us," or "our" in this Policy) refers to PROPERTYMACO PROCESS.
            </li>
            <li>
              <span className="text-green-500 font-bold mr-2">✓</span>
              <strong>Cookies:</strong> Small files placed on your computer or mobile device by a website, containing details of your browsing history on that website among other uses.
            </li>
            <li>
              <span className="text-green-500 font-bold mr-2">✓</span>
              <strong>Country:</strong> Florida, United States.
            </li>
            <li>
              <span className="text-green-500 font-bold mr-2">✓</span>
              <strong>Device:</strong> Any device (such as a computer, cellphone, or digital tablet) that can access our Service.
            </li>
            <li>
              <span className="text-green-500 font-bold mr-2">✓</span>
              <strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual.
            </li>
            <li>
              <span className="text-green-500 font-bold mr-2">✓</span>
              <strong>Service:</strong> Our website and services provided by PROPERTYMACO PROCESS.
            </li>
            <li>
              <span className="text-green-500 font-bold mr-2">✓</span>
              <strong>Service Provider:</strong> Any natural or legal person who processes data on behalf of PROPERTYMACO PROCESS.
            </li>
            <li>
              <span className="text-green-500 font-bold mr-2">✓</span>
              <strong>Usage Data:</strong> Data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
            </li>
            <li>
              <span className="text-green-500 font-bold mr-2">✓</span>
              <strong>Website:</strong> PROPERTYMACO PROCESS, accessible from <a href="https://propertymacoprocess.com/" className="text-blue-600 underline">https://propertymacoprocess.com/</a>.
            </li>
            <li>
              <span className="text-green-500 font-bold mr-2">✓</span>
              <strong>You:</strong> The individual or entity accessing or using the Service, or the legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </li>
          </ul>
        </section>
      </div>
    </AnimatedPage>
  );
}
