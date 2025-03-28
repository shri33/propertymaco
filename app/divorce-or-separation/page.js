"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import Link from "next/link";
import Image from "next/image";

export default function DivorceOrSeparationPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Divorce or Separation | PropertyMaco"
        description="Sell your home quickly during divorce or separation for a fresh start."
      />

      {/* HERO SECTION */}
      <section className="relative h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg" // Replace with your Divorce/Separation hero image
            alt="Divorce or Separation Hero"
            fill
            className="object-cover"
          />
        </div>
        {/* Color Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        {/* Text Content */}
        <div className="container mx-auto relative z-20 flex flex-col justify-center items-start h-full text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Divorce or Separation: Sell Your Home for Cash Fast
          </h1>
          <p className="text-lg max-w-2xl text-white mb-8">
            If you are going through a divorce or separation and need to sell your home for cash fast, PropertyMaco is here to help. We understand that you have enough on your plate already, and the last thing you need is to endure a lengthy, uncertain listing process. Instead, give us a call and receive a cash offer on your home in no time.
          </p>
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              Get an Offer
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 1: The Basics of Selling During Divorce or Separation */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Column (Left) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">
              The Basics of Selling During Divorce or Separation
            </h2>
            <p className="mb-4">
              Ending a marriage or long-term relationship is never easy. Before you can focus on moving on and beginning the healing process, you must address the pressing question: “What happens to the house?” Deciding who maintains ownership of your home is a crucial part of any divorce or separation proceeding. For many couples, selling the home is the most practical solution—it offers a clean break (at least from a property standpoint) and provides both parties with cash to start the next chapter.
            </p>
            <p className="mb-4">
              At PropertyMaco, we provide you with an all‑cash offer that can close at a time that suits you. You can take the property you need and leave behind what you don’t.
            </p>
          </div>
          {/* Image Column (Right) */}
          <div className="md:w-1/2">
            <Image
              src="/property-division.jpg" // Replace with an image relevant to property division
              alt="The Basics of Selling During Divorce or Separation"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Selling Is Often the Easiest Option */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image Column (Left) */}
          <div className="md:w-1/2">
            <Image
              src="/easy-selling.jpg" // Replace with your image
              alt="Why Selling Is Often the Easiest Option"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Text Column (Right) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Why Selling Is Often the Easiest Option</h2>
            <p className="mb-4">
              In many cases, one party might wish to retain ownership of the home—which can be complicated if both parties are on the mortgage and deed. Keeping the home may require refinancing or even buying out the other party—options that are often costly and complex. Selling your home quickly allows you to avoid these complications and move forward.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Legal Considerations in Property Division During a Divorce */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Column (Left) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">
              Legal Considerations in Property Division During a Divorce
            </h2>
            <p className="mb-4">
              If you are legally married, you typically cannot sell your home without your spouse’s consent. When both parties agree to sell, the process can be smooth—especially with a direct cash buyer like PropertyMaco. However, if the process is contentious, you may need to wait for your final divorce decree from the court. In such cases, a judge will ultimately decide what happens to the house. For unmarried co‑owners, selling the home is generally simpler once an agreement on price and profit division is reached.
            </p>
          </div>
          {/* Image Column (Right) */}
          <div className="md:w-1/2">
            <Image
              src="/legal-division.jpg" // Replace with a relevant image for legal considerations
              alt="Legal Considerations in Property Division"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Benefits of Selling to a Home Buying Company */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image Column (Left) */}
          <div className="md:w-1/2">
            <Image
              src="/benefits-divorce.jpg" // Replace with a relevant image
              alt="Benefits of Selling to a Home Buying Company"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Text Column (Right) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Benefits of Selling to a Home Buying Company</h2>
            <p className="mb-4">
              While you could list your home with an agent, that process can drag on for months—and during that time, you’re forced to maintain communication with your former spouse. Additionally, if your home requires repairs, you might face additional expenses and disagreements. By selling directly to PropertyMaco, you eliminate these complexities. We purchase your home as‑is, without any commission fees or hidden charges, giving you an instant opportunity to regain financial stability.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Speed and Simplicity of the Sale */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Column (Left) */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Speed and Simplicity of the Sale</h2>
            <p className="mb-4">
              PropertyMaco makes selling your home quick and easy. You won’t have to stage your property or make any repairs; we buy homes in their current condition. This not only preserves your privacy—without “For Sale” signs or public listings—but also allows you to avoid the prolonged stress of traditional sales. Once our fair, all‑cash offer is accepted, we schedule a closing at your convenience, often within just a few weeks, putting cash in your hand and helping you get back on track.
            </p>
          </div>
          {/* Image Column (Right) */}
          <div className="md:w-1/2">
            <Image
              src="/speed-sale.jpg" // Replace with a relevant image
              alt="Speed and Simplicity of the Sale"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: Navigating the Emotional Aspects of Selling */}
<section className="py-16 px-4 bg-[#0086bf]">
  <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
    {/* Image Column (Left) */}
    <div className="md:w-1/2">
      <Image
        src="/emotional-aspects.jpg" // Replace with your actual image path
        alt="Navigating the Emotional Aspects of Selling"
        width={600}
        height={400}
        className="object-cover rounded-lg shadow-lg"
      />
    </div>
    {/* Text Column (Right) */}
    <div className="md:w-1/2 text-white">
      <h2 className="text-3xl font-bold mb-4">
        Navigating the Emotional Aspects of Selling
      </h2>
      <p className="mb-4">
        Letting go of a shared home can be an emotionally taxing process. Prolonging your separation only adds to the strain. By choosing to sell your home swiftly, you take control of your future and reduce the emotional burden.
      </p>
      <p>
        At PropertyMaco, we work with integrity, offer fair cash deals, and maintain complete transparency throughout the process—giving you the chance to start fresh without additional stress.
      </p>
    </div>
  </div>
</section>

      {/* SECTION 7: The Process: Selling Your Home Fast */}
      <section className="py-16 px-4" style={{ backgroundColor: "white", color: "black" }}>
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">The Process: Selling Your Home Fast</h2>
    <p className="text-lg mb-8 max-w-3xl mx-auto">
      At PropertyMaco, our goal is to make selling your home quick and hassle‑free. Our streamlined process consists of three simple steps:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Step 1 */}
      <div className="bg-[#0086bf] rounded-lg p-6 shadow-md text-left">
        <h3 className="font-bold mb-2 text-lg text-white">Step 1 – Just a Chat</h3>
        <p className="text-sm text-white">
          We begin with a friendly phone consultation to learn about your situation and determine if we're the right fit.
        </p>
      </div>
      {/* Step 2 */}
      <div className="bg-[#0086bf] rounded-lg p-6 shadow-md text-left">
        <h3 className="font-bold mb-2 text-lg text-white">Step 2 – We Present an Offer</h3>
        <p className="text-sm text-white">
          If we’re a good match, our team will present you with an as‑is cash offer for your property—no repairs, no hidden fees.
        </p>
      </div>
      {/* Step 3 */}
      <div className="bg-[#0086bf] rounded-lg p-6 shadow-md text-left">
        <h3 className="font-bold mb-2 text-lg text-white">Step 3 – Close and Get Paid</h3>
        <p className="text-sm text-white">
          Once you accept our offer, we schedule an on‑site closing at a time that’s convenient for you. In just a few weeks, you'll receive cash for your home and can move forward with confidence.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* SECTION 8: Ready to Get Started? Contact Our Team */}
      <section className="py-16 px-4 bg-[#0086bf]">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4 text-black">
      Ready to Get Started? Contact Our Team
    </h2>
    <p className="text-lg max-w-3xl mx-auto text-black mb-4">
      Don't let a difficult situation hold you back. Contact PropertyMaco at <strong>(239) 990-5070</strong> to get started on a path toward financial freedom and a fresh beginning.
    </p>
  </div>
</section>
    </AnimatedPage>
  );
}
