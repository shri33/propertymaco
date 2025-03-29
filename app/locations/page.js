"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import Image from "next/image";
import Link from "next/link";

// Simple check icon component
function CheckIcon() {
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

// Example locations data
const locations = [
  {
    name: "Miami, FL",
    description:
      "Serving Miami-Dade and surrounding areas with fast cash offers and hassle-free transactions.",
  },
  {
    name: "Orlando, FL",
    description:
      "Expert local service for homeowners in Orlando and Central Florida.",
  },
  {
    name: "Tampa, FL",
    description:
      "Efficient home buying solutions for Tampa Bay and nearby regions.",
  },
  {
    name: "Jacksonville, FL",
    description:
      "Providing quick, fair cash offers for properties in Jacksonville and surrounding areas.",
  },
  {
    name: "Fort Lauderdale, FL",
    description:
      "Helping homeowners in Fort Lauderdale get the best offers without any fees.",
  },
  {
    name: "Naples, FL",
    description:
      "Fast and straightforward service for Naples-area properties.",
  },
];

export default function LocationsPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Locations | PropertyMaco"
        description="Discover the areas we serve across the USA."
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>
        {/* Color Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        {/* Content Container */}
        <div className="container mx-auto relative z-10 text-left px-4 sm:px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            Locations
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl text-white mb-4">
            Explore our comprehensive services across the United States. At
            PropertyMaco, we make selling your home hassle-free by offering fast,
            fair cash offers. No matter where you are, our experienced team is ready
            to help you get the best deal.
          </p>
          <Link href="/contact">
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm sm:text-base">
              Get an Offer
            </button>
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">
              At PropertyMaco, we understand that selling your home can be daunting.
            </h2>
            <p className="mb-4">
              We simplify the process by buying homes as-is, so you don't have to worry
              about repairs, cleaning, or staging. Our experienced team is committed
              to making the process smooth and stress-free.
            </p>
            <p className="mb-4">
              We cover all closing costs and work efficiently to close deals quickly.
              Our A+ rating from the Better Business Bureau reflects our dedication.
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h2l3.6 7.59a1 1 0 01-.21 1.09l-2.79 2.79a11.05 11.05 0 005.3 5.3l2.79-2.79a1 1 0 011.09-.21L19 19v2a1 1 0 01-1 1C9.94 22 2 14.06 2 4a1 1 0 011-1h2z"
                />
              </svg>
              <span className="text-lg font-semibold">(888) 713-9158</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg">Open 24/7</span>
            </div>
          </div>
          {/* Right Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/locations.avif"
              alt="Locations Image"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE SECTION */}
      <section className="py-16 px-4 bg-[#0086bf]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            AREAS WE SERVE
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckIcon />New York, NY
              </li>
              <li className="flex items-center">
                <CheckIcon />Los Angeles, CA
              </li>
              <li className="flex items-center">
                <CheckIcon />Chicago, IL
              </li>
              <li className="flex items-center">
                <CheckIcon />Houston, TX
              </li>
              <li className="flex items-center">
                <CheckIcon />Phoenix, AZ
              </li>
              <li className="flex items-center">
                <CheckIcon />Philadelphia, PA
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckIcon />San Antonio, TX
              </li>
              <li className="flex items-center">
                <CheckIcon />San Diego, CA
              </li>
              <li className="flex items-center">
                <CheckIcon />Dallas, TX
              </li>
              <li className="flex items-center">
                <CheckIcon />San Jose, CA
              </li>
              <li className="flex items-center">
                <CheckIcon />Jacksonville, FL
              </li>
              <li className="flex items-center">
                <CheckIcon />Fort Worth, TX
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckIcon />Columbus, OH
              </li>
              <li className="flex items-center">
                <CheckIcon />Charlotte, NC
              </li>
              <li className="flex items-center">
                <CheckIcon />San Francisco, CA
              </li>
              <li className="flex items-center">
                <CheckIcon />Indianapolis, IN
              </li>
              <li className="flex items-center">
                <CheckIcon />Seattle, WA
              </li>
              <li className="flex items-center">
                <CheckIcon />Denver, CO
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckIcon />Washington, DC
              </li>
              <li className="flex items-center">
                <CheckIcon />Boston, MA
              </li>
              <li className="flex items-center">
                <CheckIcon />El Paso, TX
              </li>
              <li className="flex items-center">
                <CheckIcon />Nashville, TN
              </li>
              <li className="flex items-center">
                <CheckIcon />Detroit, MI
              </li>
              <li className="flex items-center">
                <CheckIcon />Oklahoma City, OK
              </li>
            </ul>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
