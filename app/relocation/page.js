"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import Link from "next/link";
import Image from "next/image";

export default function RelocationPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Relocation | PropertyMaco"
        description="Moving? Sell your house quickly and relocate on your schedule."
      />

      {/* HERO SECTION */}
      <section className="relative h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg" // Replace with your relocation hero image
            alt="Relocation Hero"
            fill
            className="object-cover"
          />
        </div>
        {/* Color Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        {/* Text Content */}
        <div className="container mx-auto relative z-20 flex flex-col justify-center items-start h-full text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Relocation: Sell Your Home for Cash Fast
          </h1>
          <p className="text-lg max-w-2xl text-white mb-8">
            Whether your career has taken you out of state or you simply need a change of scenery, PropertyMaco is here to help. Our relocation team specializes in purchasing homes for cash, offering you an all‑cash, as‑is solution so you can uproot and move on to the next chapter of your adventure.
          </p>
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              Get an Offer
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 1: Selling Your Home to Relocate */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Column (Left) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">
              Selling Your Home to Relocate
            </h2>
            <p className="mb-4">
              Relocating to a new state can be exciting, but if you've already purchased a new property or need to move quickly due to job constraints, selling your old home can quickly become a logistical nightmare. Managing two homes means added expenses and double mortgage payments. Coordinating with agents and buyers from hundreds of miles away only complicates matters further. The good news? PropertyMaco offers a better way.
            </p>
          </div>
          {/* Image Column (Right) */}
          <div className="md:w-1/2">
            <Image
              src="/selling-to-relocate.jpg" // Replace with an appropriate image
              alt="Selling Your Home to Relocate"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Offloading Your Property */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image Column (Left) */}
          <div className="md:w-1/2">
            <Image
              src="/offloading-property.jpg" // Replace with your image
              alt="Offloading Your Property"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Text Column (Right) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Offloading Your Property</h2>
            <p className="mb-4">
              Listing your home with an agent can take months—and along the way, you may incur closing costs, commissions, and repair requests. This drawn‑out process often adds extra expenses and stress. By choosing PropertyMaco, you can get a clean break. We buy your home for cash, so you can cover your mortgage, receive extra funds, and avoid the headaches of staging, repairs, or cleaning. We handle everything for you!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: How We Make Relocation Transactions Simple and Lightning-Fast */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Column (Left) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">
              How We Make Relocation Transactions Simple and Lightning‑Fast
            </h2>
            <p className="mb-4">
              PropertyMaco prioritizes speed, simplicity, and transparency. Our process minimizes stress and lets you focus on settling into your new home. We accomplish this by:
              <br /><br />
              <strong>Buying your home as‑is:</strong> No need for repairs or upgrades.
              <br /><br />
              <strong>Taking care of cleaning and removal:</strong> Leave behind any unwanted items.
              <br /><br />
              <strong>Making an all‑cash offer:</strong> Get cash quickly without hidden fees.
              <br /><br />
              <strong>Setting a closing date that suits you:</strong> We work around your schedule to close fast.
            </p>
          </div>
          {/* Image Column (Right) */}
          <div className="md:w-1/2">
            <Image
              src="/lightning-fast.jpg" // Replace with your image
              alt="Relocation Transactions Made Simple"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Two‑Step Process */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Two‑Step Process</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our streamlined approach ensures a quick sale:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-left">
              <h3 className="font-bold mb-2 text-lg">Step 1 – Just a Chat</h3>
              <p className="text-sm">
                We begin with a brief phone consultation to understand your property and financial situation. This call helps us determine if we're a good fit.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-left">
              <h3 className="font-bold mb-2 text-lg">Step 2 – We Present an Offer</h3>
              <p className="text-sm">
                If you decide to work with us, we make an all‑cash, as‑is offer on your home. Once you accept, you choose your closing date—often within just a few weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Ready to Uproot? Contact Our Team */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 text-black">
            Ready to Uproot? Contact Our Team
          </h2>
          <p className="text-lg max-w-5xl mx-auto text-black mb-4">
            Don't let the burden of two homes hold you back. Take the first step toward financial freedom by selling your home for cash with PropertyMaco. Contact our team today to get started—we're ready to help you make a fresh start.
          </p>
          <p className="text-lg text-black">
            Call us at <strong>(239) 990-5070</strong> or reach out through our online form.
          </p>
        </div>
      </section>
    </AnimatedPage>
  );
}
