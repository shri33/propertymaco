"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import Link from "next/link";
import Image from "next/image";

export default function FreshStartPage() {
  return (
    <AnimatedPage>
      <SEO
        title="PROPERTY MACO: A Fresh Start When You Need It Most"
        description="Falling behind on mortgage payments is never a reflection of your worth. PROPERTY MACO is here to help with immediate cash offers, no repairs or hidden fees, and a simple, transparent process to secure your future."
      />

      {/* HERO SECTION */}
      <section className="relative h-[40vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg" // Update with your hero image path
            alt="Fresh Start Hero Background"
            fill
            className="object-cover"
          />
        </div>
        {/* Color Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        {/* Text Content */}
        <div className="container mx-auto relative z-20 flex flex-col justify-center items-start h-full text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Upgrading or Downsizing
          </h1>
          <p className="text-lg max-w-2xl text-white mb-8">
            A Fresh Start When You Need It Most – Falling behind on mortgage payments is never a reflection of your worth. Whether you're facing job loss, unexpected medical expenses, or other financial hardships, PROPERTY MACO is here to help. We provide a straightforward way to relieve the burden of debt and secure your future—even if your home is not in perfect condition.
          </p>
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              Get an Offer
            </button>
          </Link>
        </div>
      </section>

      {/* IMMEDIATE CASH OFFERS */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Immediate Cash Offers</h2>
            <p className="mb-4">
              Avoid the lengthy process of traditional home sales. Our all‑cash offers give you the financial freedom you need to catch up on overdue payments. Falling behind on mortgage payments is never a reflection of your worth. Whether you're facing job loss, unexpected medical expenses, or other financial hardships, PROPERTY MACO is here to help. We provide a straightforward way to relieve the burden of debt and secure your future—even if your home is not in perfect condition.
              <br /><br />
              Immediate Cash Offers: Avoid the lengthy process of traditional home sales. Our all‑cash offers give you the financial freedom you need to catch up on overdue payments.
              <br /><br />
              No Repairs or Upgrades Required: Sell your home as-is. PROPERTY MACO buys properties in any condition—saving you time, money, and stress.
              <br /><br />
              No Hidden Fees: With us, there are no commission fees or unexpected charges. The cash you receive is yours to use as you see fit.
            </p>
          </div>
          {/* Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/cash-offer.jpg" // Update with your image path
              alt="Immediate Cash Offers"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* NO REPAIRS OR UPGRADES REQUIRED */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/no-repairs.png" // Update with your image path
              alt="No Repairs or Upgrades Required"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">No Repairs or Upgrades Required</h2>
            <p className="mb-4">
              Sell your home as‑is. PROPERTY MACO buys properties in any condition—saving you time, money, and stress.
              <br /><br />
              Avoid Foreclosure and Credit Damage:
              <br />
              Foreclosure can be a long and draining process that leads to severe credit damage and additional legal complications. With PROPERTY MACO, you can quickly settle your mortgage and prevent further financial distress. Our mission is to help you transition smoothly to a more secure financial situation.
              <br /><br />
              Simple, Transparent Process:
              <br />
              Our team works closely with you to understand your unique circumstances. From the moment you reach out, we provide clear communication and honest guidance, ensuring you know every step of the process. We pride ourselves on our transparency—no surprises, just solutions.
              <br /><br />
              Personalized Solutions for Every Homeowner:
              <br />
              At PROPERTY MACO, we believe that every homeowner deserves a chance to recover from financial setbacks. Our experienced team customizes each cash offer based on your home's condition and your current financial situation, ensuring you get a fair deal that reflects your needs.
            </p>
          </div>
        </div>
      </section>

      {/* NO HIDDEN FEES */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">No Hidden Fees</h2>
            <p className="mb-4">
              With us, there are no commission fees or unexpected charges. The cash you receive is yours to use as you see fit.
              <br /><br />
              No one chooses to fall behind on payments, and every homeowner deserves a second chance. PROPERTY MACO is dedicated to providing you with a safe, efficient, and dignified way to overcome financial hardships. By choosing us, you’re not just selling a home—you’re reclaiming your future.
              <br /><br />
              Contact PROPERTY MACO Today – Ready to break free from the cycle of financial strain? Reach out now to speak with one of our experts. Whether you prefer to chat online, complete a quick web form, or call us directly, we’re here to guide you every step of the way.
              <br /><br />
              Take control of your financial destiny with PROPERTY MACO—where every homeowner gets a fresh start.
            </p>
          </div>
          {/* Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/no-hidden-fees.png" // Update with your image path
              alt="No Hidden Fees"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* WHY PROPERTY MACO */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-black">Why PROPERTY MACO?</h2>
          <div className="space-y-6 text-black">
            <div>
              <h3 className="font-bold">Avoid Foreclosure and Credit Damage:</h3>
              <p>
                Foreclosure can be a long and draining process that leads to severe credit damage and additional legal complications. With PROPERTY MACO, you can quickly settle your mortgage and prevent further financial distress.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Simple, Transparent Process:</h3>
              <p>
                Our team works closely with you to understand your unique circumstances. From the moment you reach out, we provide clear communication and honest guidance, ensuring you know every step of the process. We pride ourselves on our transparency—no surprises, just solutions.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Personalized Solutions for Every Homeowner:</h3>
              <p>
                At PROPERTY MACO, we believe that every homeowner deserves a chance to recover from financial setbacks. Our experienced team customizes each cash offer based on your home's condition and your current financial situation, ensuring you get a fair deal that reflects your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STREAMLINED THREE-STEP PROCESS */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-black-100 text-black">Our Streamlined Three-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-[#0086bf] rounded-lg p-6 shadow-md text-left">
              <h3 className="font-bold mb-2 text-lg text-white">Step 1: Let’s Talk</h3>
              <p className="text-sm text-white">
                Start with a simple conversation. Our friendly experts will assess your situation, listen to your concerns, and determine if our solution is right for you. This no-obligation consultation is designed to put you at ease and provide a clear path forward.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-[#0086bf] rounded-lg p-6 shadow-md text-left">
              <h3 className="font-bold mb-2 text-lg text-white">Step 2: Receive a Fair Cash Offer</h3>
              <p className="text-sm text-white">
                After understanding your unique needs, we’ll present you with a competitive, all‑cash offer for your home. Our goal is to give you the flexibility to settle outstanding debts, including mortgage arrears, and to pave the way for a fresh start.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-[#0086bf] rounded-lg p-6 shadow-md text-left">
              <h3 className="font-bold mb-2 text-lg text-white">Step 3: Close on Your Terms</h3>
              <p className="text-sm text-white">
                Choose a closing date that fits your schedule. Once the deal is finalized, you’ll have cash in hand—allowing you to pay off your mortgage, address other financial challenges, and move forward with renewed confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TAKE THE FIRST STEP TOWARD FINANCIAL FREEDOM */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Take the First Step Toward Financial Freedom
          </h2>
          <p className="text-lg max-w-6xl mx-auto text-black mb-8">
            No one chooses to fall behind on payments, and every homeowner deserves a second chance. PROPERTY MACO is dedicated to providing you with a safe, efficient, and dignified way to overcome financial hardships. By choosing us, you’re not just selling a home—you’re reclaiming your future.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Contact PROPERTY MACO Today
          </h2>
          <p className="text-lg max-w-6xl mx-auto text-black mb-4">
            Ready to break free from the cycle of financial strain? Reach out now to speak with one of our experts. Whether you prefer to chat online, complete a quick web form, or call us directly, we’re here to guide you every step of the way.
          </p>
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </AnimatedPage>
  );
}
