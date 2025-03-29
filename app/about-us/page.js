"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const stepsData = [
  {
    step: "01",
    title: "Initial Contact",
    text: "We begin with a straightforward conversation to understand your unique situation and needs, ensuring we align our services with your expectations.",
    image: "/step1.jpg",
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
    <div>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[50vh] flex items-center">
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
        <div className="relative z-10 container mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row">
            {/* Left Column: Hero Text & Button */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
                ABOUT US
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6">
                The PropertyMaco helps homeowners sell quickly and hassle-free,
                no matter the situation. Built on a foundation of real estate
                passion and commitment, we specialize in providing a stress-free,
                efficient home-selling experience.
              </p>
              <Link href="/contact">
                <span className="inline-block mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 text-sm sm:text-base mx-auto md:mx-0">
                  Get an Offer
                </span>
              </Link>
            </div>
            {/* Right Column: Empty for layout on larger screens */}
            <div className="hidden md:block md:w-1/2"></div>
          </div>
        </div>
      </section>

      {/* ===================== OUR STORY SECTION ===================== */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2 text-left text-black">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg">
              PropertyMaco emerged from a genuine desire to simplify the
              home-selling process for a Nation-wide homeowners. Founded by a team
              passionate about real estate and helping people, our journey began
              with a clear vision: to offer a stress-free, fair, and efficient way
              to sell homes. Over the years, we’ve fine-tuned our approach to meet
              the evolving needs of homeowners across the USA.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/our-story.jpg"
              alt="Our Story"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </section>

      {/* ===================== OUR MISSION SECTION ===================== */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/mission.jpg"
              alt="Our Mission"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2 text-left text-black">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              At <strong>PropertyMaco</strong>, we are dedicated to transforming
              the home-selling experience into a seamless and empowering journey.
              Our mission is to provide a transparent, fair, and rapid process that
              alleviates the emotional and financial stresses of selling your home.
              We’re here to ensure every homeowner benefits from a service that is
              both efficient and compassionate.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== OUR PROCESS EXPLAINED SECTION ===================== */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="border border-blue-500 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">
              Our Process Explained
            </h2>
            {stepsData.map((stepItem, idx) => (
              <div
                key={idx}
                ref={(el) => (stepRefs.current[idx] = el)}
                data-index={idx}
                className={`my-12 flex flex-col md:flex-row items-center transition-all duration-700 transform ${
                  visibleSteps[idx]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="md:w-1/6 text-left md:text-right pr-4 mb-4 md:mb-0">
                  <span className="text-4xl font-bold text-gray-400">
                    {stepItem.step}
                  </span>
                </div>
                <div className="md:w-1/2 text-left text-black px-4">
                  <h3 className="text-2xl font-bold mb-2">{stepItem.title}</h3>
                  <p className="text-lg">{stepItem.text}</p>
                </div>
                <div className="md:w-5/12 mt-4 md:mt-0">
                  <Image
                    src={stepItem.image}
                    alt={stepItem.title}
                    width={500}
                    height={300}
                    className="object-cover rounded-md shadow-md w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US SECTION ===================== */}
      <section className="py-12 bg-[#0086bf]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-black">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
              <p className="text-lg max-w-4xl mx-auto mb-10">
                Choosing <strong>PropertyMaco</strong> means opting for a quick,
                straightforward sale. You won’t need to worry about repairs,
                cleaning, or uncertain closing dates. We’re here to make your life
                easier with a direct, fair cash offer.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="border border-black rounded-lg p-6">
                <div className="flex items-start">
                  <img
                    src="/tick-icon.png"
                    alt="Tick Icon"
                    className="w-5 h-5 mr-2 mt-1"
                  />
                  <p>
                    <strong>If you don’t have the time, money or desire</strong>{" "}
                    to get your home ready to list, we should have a chat.
                  </p>
                </div>
              </div>
              <div className="border border-black rounded-lg p-6">
                <div className="flex items-start">
                  <img
                    src="/tick-icon.png"
                    alt="Tick Icon"
                    className="w-5 h-5 mr-2 mt-1"
                  />
                  <p>
                    <strong>We make it simple and easy</strong> to sell a home without
                    the hassle of repairs, cleaning, staging or showings.
                  </p>
                </div>
              </div>
              <div className="border border-black rounded-lg p-6">
                <div className="flex items-start">
                  <img
                    src="/tick-icon.png"
                    alt="Tick Icon"
                    className="w-5 h-5 mr-2 mt-1"
                  />
                  <p>
                    <strong>We’ve even bought homes sight unseen.</strong> Contact us
                    today or fill out the form to discuss your situation!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ SECTION ===================== */}
      <section className="py-12 bg-[#0086bf]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div
              className="bg-white text-black rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(0)}
            >
              <h3 className="font-semibold text-lg mb-2">
                What fees are charged at closing?
              </h3>
              {openIndex === 0 && (
                <p className="text-sm">
                  We charge zero fees at closing. All closing costs are covered by
                  us.
                </p>
              )}
            </div>
            <div
              className="bg-white text-black rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(1)}
            >
              <h3 className="font-semibold text-lg mb-2">
                Do I have to clean the house before I leave?
              </h3>
              {openIndex === 1 && (
                <p className="text-sm">
                  Nope! Leave behind anything you don’t want. We’ll handle the
                  rest.
                </p>
              )}
            </div>
            <div
              className="bg-white text-black rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(2)}
            >
              <h3 className="font-semibold text-lg mb-2">
                Can I have my attorney review the purchase agreement?
              </h3>
              {openIndex === 2 && (
                <p className="text-sm">
                  Absolutely. We encourage you to have a trusted advisor review
                  the contract.
                </p>
              )}
            </div>
            <div
              className="bg-white text-black rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(3)}
            >
              <h3 className="font-semibold text-lg mb-2">
                Do I have to travel somewhere to do the closing?
              </h3>
              {openIndex === 3 && (
                <p className="text-sm">
                  Not at all. We can close at the title company’s office or remotely.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
