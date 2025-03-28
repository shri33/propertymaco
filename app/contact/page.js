import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import ContactForm from "@/app/components/common/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Contact PropertyMaco"
        description="Reach out to us with any real estate questions."
      />

      {/* HERO SECTION */}
      <section className="relative h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg" // Update with your hero image path
            alt="Contact The Friendly Home Buyer"
            fill
            className="object-cover"
          />
        </div>
        {/* Color Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        {/* Hero Text Content */}
        <div className="container mx-auto relative z-20 flex flex-col justify-center items-start h-full text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h1>
          <p className="text-lg text-white mb-4">
            Ready to explore your options and reclaim your financial freedom? Our team is here to answer your questions and guide you every step of the way. Whether you prefer a quick chat online, a call, or filling out our easy contact form, we’re available to assist you.
          </p>
          <p className="text-lg text-white mb-4">
            Call Us Today: <span className="font-bold">(239) 990-5070</span>
          </p>
          <p className="text-lg text-white mb-4">
            Get In Touch: Use our online form or chat feature on our website to start a conversation.
          </p>
          <p className="text-lg text-white">
            Don’t let financial stress hold you back any longer. Reach out now and let The Friendly Home Buyer help you take the first step toward a fresh start.
          </p>
        </div>
      </section>
    </AnimatedPage>
  );
}
