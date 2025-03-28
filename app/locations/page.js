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

export default function LocationsPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Locations | PropertyMaco"
        description="See the areas we serve all over the USA."
      />

      {/* HERO SECTION */}
      <section className="relative h-[40vh] text-white py-8 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        <div className="container mx-auto relative z-10 text-left pl-4 sm:pl-10 pr-4 sm:pr-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Locations</h1>
          <p className="text-lg max-w-2xl">
            Explore our comprehensive services all across the United States. At PropertyMaco, 
            we are dedicated to simplifying your home-selling process by offering fair, fast, 
            and reliable transactions. No matter where you're located in the nation, our 
            experienced team is ready to make you a personalized cash offer that respects your 
            time and meets your needs.
          </p>
          <Link href="/contact">
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
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
              At PropertyMaco, we understand that selling your home can be a daunting process.
            </h2>
            <p className="mb-4">
              That's why we're committed to making it as seamless and stress-free as possible. 
              As a trusted cash home buyer operating throughout the USA, we purchase homes 
              in any condition, allowing you to bypass the hassles of repairs, cleaning, or updates. 
              Simply take what you want and leave the rest to us.
            </p>
            <p className="mb-4">
              Our team is equipped to handle various situations, whether you're facing relocation, 
              dealing with an inherited property, or seeking a quick sale for any other reason. 
              With decades of collective real estate experience, we pride ourselves on closing deals 
              efficiently and on time, with no surprises.
            </p>
            <p className="mb-4">
              We cover all closing costs, ensuring a transparent and fair transaction. Our A+ rating 
              from the Better Business Bureau reflects our dedication to providing professional and 
              friendly service.
            </p>
            {/* Phone & Availability Info */}
            <div className="flex items-center space-x-2 mt-4">
              {/* Phone Icon */}
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
              {/* Watch Icon */}
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
          <div className="md:w-1/2 mt-8 md:mt-0">
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
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "#0086bf", color: "black" }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">AREAS WE SERVE</h2>
          {/* Grid with sample major U.S. cities */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Column 1 */}
            <ul className="space-y-2">
              <li className="flex items-center"><CheckIcon />New York, NY</li>
              <li className="flex items-center"><CheckIcon />Los Angeles, CA</li>
              <li className="flex items-center"><CheckIcon />Chicago, IL</li>
              <li className="flex items-center"><CheckIcon />Houston, TX</li>
              <li className="flex items-center"><CheckIcon />Phoenix, AZ</li>
              <li className="flex items-center"><CheckIcon />Philadelphia, PA</li>
            </ul>
            {/* Column 2 */}
            <ul className="space-y-2">
              <li className="flex items-center"><CheckIcon />San Antonio, TX</li>
              <li className="flex items-center"><CheckIcon />San Diego, CA</li>
              <li className="flex items-center"><CheckIcon />Dallas, TX</li>
              <li className="flex items-center"><CheckIcon />San Jose, CA</li>
              <li className="flex items-center"><CheckIcon />Jacksonville, FL</li>
              <li className="flex items-center"><CheckIcon />Fort Worth, TX</li>
            </ul>
            {/* Column 3 */}
            <ul className="space-y-2">
              <li className="flex items-center"><CheckIcon />Columbus, OH</li>
              <li className="flex items-center"><CheckIcon />Charlotte, NC</li>
              <li className="flex items-center"><CheckIcon />San Francisco, CA</li>
              <li className="flex items-center"><CheckIcon />Indianapolis, IN</li>
              <li className="flex items-center"><CheckIcon />Seattle, WA</li>
              <li className="flex items-center"><CheckIcon />Denver, CO</li>
            </ul>
            {/* Column 4 */}
            <ul className="space-y-2">
              <li className="flex items-center"><CheckIcon />Washington, DC</li>
              <li className="flex items-center"><CheckIcon />Boston, MA</li>
              <li className="flex items-center"><CheckIcon />El Paso, TX</li>
              <li className="flex items-center"><CheckIcon />Nashville, TN</li>
              <li className="flex items-center"><CheckIcon />Detroit, MI</li>
              <li className="flex items-center"><CheckIcon />Oklahoma City, OK</li>
            </ul>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
