"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Define your six steps in an array
const stepsData = [
  {
    step: "01",
    title: "Initial Contact",
    text: "We begin with a straightforward conversation to understand your unique situation and needs, ensuring we align our services with your expectations.",
    image: "/step1.jpg", // Replace with your actual image path
  },
  {
    step: "02",
    title: "Property Evaluation",
    text: "Our team conducts a thorough assessment of your property in its current condition, guaranteeing a fair and honest evaluation without any repairs.",
    image: "/step2.jpg",
  },
  {
    step: "03",
    title: "Receive Your Offer",
    text: "Following the evaluation, you will receive a no-obligation cash offer, allowing you the freedom to decide without any pressure from us.",
    image: "/step3.jpg",
  },
  {
    step: "04",
    title: "Review & Acceptance",
    text: "You have the opportunity to review our offer at your own pace. We’re here to answer any questions and ensure you’re comfortable and confident in your decision.",
    image: "/step4.jpg",
  },
  {
    step: "05",
    title: "Closing Arrangements",
    text: "Once you accept our offer, we handle all closing details, coordinating with necessary parties to ensure a smooth and efficient process.",
    image: "/step5.jpg",
  },
  {
    step: "06",
    title: "Sale Completion",
    text: "The final step is the completion of the sale, where you finalize the transaction and receive your cash promptly, allowing you to move forward stress-free.",
    image: "/step6.jpg",
  },
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleSteps, setVisibleSteps] = useState({});
  const stepRefs = useRef([]);

  // Toggle logic for FAQ
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Intersection Observer for fade-in steps
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
    <>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg" // Replace with your actual hero image
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Color Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>

        {/* Text Overlay */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white text-left pl-44 pr-6 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">ABOUT US</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            The PropertyMaco helps homeowners sell quickly and hassle-free, no matter the
            situation is built on a foundation of real estate passion and a commitment to
            helping homeowners in Florida. We specialize in providing a stress-free,
            efficient home-selling experience, driven by a mission to simplify the process
            for sellers facing any situation. Our approach is centered around fairness,
            efficiency, and adapting to the evolving needs of our clients.
          </p>
          <a
            href="/contact"
            className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Get an Offer
          </a>
        </div>
      </section>

      {/* ===================== OUR STORY SECTION ===================== */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Text on the left */}
          <div className="md:w-1/2 text-left text-black">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg">
              PropertyMaco emerged from a genuine desire to simplify the home-selling process for
              Florida homeowners. Founded by a team passionate about real estate and helping
              people, our journey began with a clear vision: to offer a stress-free, fair, and
              efficient way to sell homes. Over the years, we’ve fine-tuned our approach to ensure
              we meet the evolving needs of homeowners, transforming the way people sell their
              properties across the USA.
            </p>
          </div>

          {/* Image on the right */}
          <div className="md:w-1/2">
            <Image
              src="/our-story.jpg" // Replace with your actual image
              alt="Our Story"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ===================== OUR MISSION SECTION ===================== */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left side: Image */}
          <div className="md:w-1/2">
            <Image
              src="/mission.jpg" // Replace with your actual mission image
              alt="Our Mission"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right side: Text */}
          <div className="md:w-1/2 text-left text-black">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              At <strong>PropertyMaco</strong>, we are dedicated to transforming the
              home-selling experience into a seamless and empowering journey. Our mission is
              to provide a transparent, fair, and rapid process that alleviates the
              emotional and financial stresses of selling your home. We’re here to ensure
              every homeowner benefits from a service that is not only efficient but also
              compassionate—making the path to your next chapter as effortless as possible.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== OUR PROCESS EXPLAINED (6 Steps) ===================== */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          {/* Blue box container */}
          <div className="border border-blue-500 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Process Explained</h2>
            {stepsData.map((stepItem, idx) => (
              <div
                key={idx}
                ref={(el) => (stepRefs.current[idx] = el)}
                data-index={idx}
                className={`my-12 flex flex-col md:flex-row items-center transition-all duration-700 transform ${
                  visibleSteps[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Step Number on Left */}
                <div className="md:w-1/6 text-left md:text-right pr-4 mb-4 md:mb-0">
                  <span className="text-4xl font-bold text-gray-400">{stepItem.step}</span>
                </div>

                {/* Step Text in Middle */}
                <div className="md:w-1/2 text-left text-black px-4">
                  <h3 className="text-2xl font-bold mb-2">{stepItem.title}</h3>
                  <p className="text-lg">{stepItem.text}</p>
                </div>

                {/* Image Column */}
                <div className="md:w-5/12 mt-4 md:mt-0">
                  <Image
                    src={stepItem.image}
                    alt={stepItem.title}
                    width={500}
                    height={300}
                    className="object-cover rounded-md shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US (TEAL BACKGROUND) ===================== */}
      <section className="py-12 bg-[#0086bf]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-black">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
              <p className="text-lg max-w-4xl mx-auto mb-10">
                Choosing <strong>PropertyMaco</strong> means opting for a quick,
                straightforward sale. You won’t need to worry about repairs, cleaning, or
                uncertain closing dates. We’re here to make your life easier with a direct,
                fair cash offer.
              </p>
            </div>

            {/* Two Box Containers Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Box 1: Our Values */}
              <div className="bg-white p-6 rounded-lg shadow-md text-black">
                <h3 className="text-2xl font-bold mb-2">Our Values</h3>
                <p>
                  Integrity, transparency, and customer-centric service are at the heart of
                  everything we do. We’re dedicated to building trust and ensuring a
                  positive experience for all our clients.
                </p>
              </div>

              {/* Box 2: Our Commitment to You */}
              <div className="bg-white p-6 rounded-lg shadow-md text-black">
                <h3 className="text-2xl font-bold mb-2">Our Commitment to You</h3>
                <p>
                  We respect your time and property, striving to understand your specific
                  needs and offer a stress-free selling process. Our team is here to support
                  you every step of the way, making sure you have the simplest, most
                  efficient home-selling experience possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FREQUENTLY ASKED QUESTIONS ===================== */}
      <section className="py-12 bg-[#0086bf]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Q1 */}
            <div
              className="bg-white text-black rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(0)}
            >
              <h3 className="font-semibold text-lg mb-2">
                What fees are charged at closing?
              </h3>
              {openIndex === 0 && (
                <p className="text-sm">
                  We charge zero fees at closing. All closing costs are covered by us.
                </p>
              )}
            </div>

            {/* Q2 */}
            <div
              className="bg-white text-black rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(1)}
            >
              <h3 className="font-semibold text-lg mb-2">
                Do I have to clean the house before I leave?
              </h3>
              {openIndex === 1 && (
                <p className="text-sm">
                  Nope! Leave behind anything you don’t want. We’ll handle the rest.
                </p>
              )}
            </div>

            {/* Q3 */}
            <div
              className="bg-white text-black rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(2)}
            >
              <h3 className="font-semibold text-lg mb-2">
                Can I have my attorney review the purchase agreement?
              </h3>
              {openIndex === 2 && (
                <p className="text-sm">
                  Absolutely. We encourage you to have any trusted advisor review the
                  contract to ensure you’re comfortable.
                </p>
              )}
            </div>

            {/* Q4 */}
            <div
              className="bg-white text-black rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(3)}
            >
              <h3 className="font-semibold text-lg mb-2">
                Do I have to travel somewhere to do the closing?
              </h3>
              {openIndex === 3 && (
                <p className="text-sm">
                  Not at all. We can close at the title company’s office, or even remotely in
                  your own living room.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
