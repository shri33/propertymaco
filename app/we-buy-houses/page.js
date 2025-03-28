"use client"; // Mark file as a Client Component

import { useState, useRef, useEffect } from "react";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Simple tick/check icon component for bullet items
function TickIcon() {
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

// Data for "Our Process Explained" steps
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

// Sample Google Reviews Data for Testimonials
const googleReviewsData = [
  {
    name: "Random Person",
    date: "16 October 2022",
    rating: 5,
    comment:
      "I posted my previous review just to make a point about perception. I appreciate that you actually allowed it there. Read more",
  },
  {
    name: "Galactic Stone",
    date: "25 September 2022",
    rating: 5,
    comment:
      "I can’t say enough good things about Joe, Ben, and the folks at Friendly Home Buyer. They were very nice, straightforward, and…",
  },
  {
    name: "Patricia Obrien",
    date: "20 June 2022",
    rating: 5,
    comment:
      "Ben and Joe were excellent throughout the whole process. Very Courteous and knowledgeable. Worked with us every step…",
  },
  {
    name: "David Ekins",
    date: "3 March 2022",
    rating: 5,
    comment:
      "These guys are the greatest to deal with—honest and very prompt in any and all communication. I would highly…",
  },
  {
    name: "Alice Johnson",
    date: "10 January 2023",
    rating: 5,
    comment: "Amazing service and super fast closing!",
  },
  {
    name: "Bob Williams",
    date: "2 January 2023",
    rating: 5,
    comment: "Transparent and hassle-free experience.",
  },
  // ... additional review objects
];

// Utility function to render 5 stars for a review
function StarRating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFA500"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#FFA500"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.75.75 0 011.04 0l2.181 2.205 3.038.622a.75.75 0 01.417 1.28l-2.205 2.223.522 3.113a.75.75 0 01-1.091.79l-2.888-1.558-2.888 1.558a.75.75 0 01-1.09-.79l.522-3.113-2.205-2.223a.75.75 0 01.417-1.28l3.038-.622 2.181-2.205z"
        />
      </svg>
    );
  }
  return <div className="flex items-center">{stars}</div>;
}

// ReviewCarousel component: displays 4 reviews per slide with fade/slide animation
const ReviewCarousel = ({ reviews }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const totalSlides = Math.ceil(reviews.length / 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Show 4 reviews per slide
  const startIndex = currentSlide * 4;
  let currentReviews = reviews.slice(startIndex, startIndex + 4);
  if (currentReviews.length < 4) {
    currentReviews = currentReviews.concat(
      reviews.slice(0, 4 - currentReviews.length)
    );
  }

  // Toggle full text vs snippet
  const handleReadMore = (idx) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="flex space-x-4"
      >
        {currentReviews.map((review, idx) => {
          const avatarLetter = review.name.charAt(0) || "";
          const isExpanded = expandedIndex === idx;
          const displayedText = isExpanded
            ? review.comment
            : review.comment.length > 100
            ? review.comment.slice(0, 100) + "..."
            : review.comment;

          return (
            <div
              key={idx}
              className="relative flex-1 bg-[#F7FEFF] border border-gray-200 p-4 rounded-lg text-left transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src="/google.png"
                alt="Google Logo"
                width={20}
                height={20}
                className="absolute top-3 right-3"
              />
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold uppercase">
                  {avatarLetter}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="mb-2">
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-700 text-sm mb-2">{displayedText}</p>
              {review.comment.length > 100 && (
                <button
                  onClick={() => handleReadMore(idx)}
                  className="text-blue-600 text-sm hover:underline inline-block"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              )}
            </div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default function WeBuyHousesPage() {
  // Define visibleSteps and stepRefs for the Our Process Explained section
  const [visibleSteps, setVisibleSteps] = useState({});
  const stepRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(null); // For FAQ if needed

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
    <AnimatedPage>
      <SEO
        title="We Buy Houses in Florida | PropertyMaco"
        description="Sell your house in Florida fast for cash. No fees, no repairs, no hassle."
      />

      {/* HERO SECTION */}
      <section className="relative h-[50vh]">
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
        {/* Text Content */}
        <div className="container mx-auto relative z-20 flex flex-col justify-center items-start h-full text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            WE BUY HOUSES
          </h1>
          <p className="text-lg max-w-2xl text-white mb-8">
            Looking to sell your house fast in Florida? The Friendly Home Buyer offers a straightforward, stress‑free solution for homeowners. We buy houses quickly, regardless of their situation. Whether you’re facing financial difficulties, relocating, or simply need to sell your property swiftly, we provide a seamless experience tailored to your unique needs.
          </p>
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              Get an Offer
            </button>
          </Link>
        </div>
      </section>

      {/* WHY SELL YOUR HOUSE TO US SECTION */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Column */}
          <div className="md:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-4">Why Sell Your House to Us?</h2>
            <p className="text-gray-700">
              Choose PropertyMaco for a hassle‑free selling experience. With no fees, no need for repairs, and an all‑cash purchase, our process eliminates the stress and delay associated with traditional home sales. We ensure a timely closing with no surprises, making every step—from initial contact to final closing—transparent and efficient, while respecting both your time and your property.
            </p>
          </div>
          {/* Right Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/our-story.jpg"
              alt="Why Sell Your House to Us?"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SITUATIONS WE SPECIALIZE IN SECTION */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/our-story.jpg"
              alt="Situations We Specialize In"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Right Text Column */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Situations We Specialize In</h2>
            <p className="mb-4">
              PropertyMaco provides comprehensive support for homeowners experiencing a wide range of circumstances. Our expertise includes helping you navigate:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <TickIcon />
                <Link href="/situations" className="underline">
                  Divorce or Separation
                </Link>
              </li>
              <li className="flex items-center">
                <TickIcon />
                <Link href="/situations" className="underline">
                  Avoiding Foreclosure
                </Link>
              </li>
              <li className="flex items-center">
                <TickIcon />
                <Link href="/situations" className="underline">
                  Bankruptcy
                </Link>
              </li>
              <li className="flex items-center">
                <TickIcon />
                <Link href="/situations" className="underline">
                  Relocation
                </Link>
              </li>
              <li className="flex items-center">
                <TickIcon />
                <Link href="/situations" className="underline">
                  Behind On Mortgage
                </Link>
              </li>
              <li className="flex items-center">
                <TickIcon />
                <Link href="/situations" className="underline">
                  Upgrading or Downsizing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* OUR PROCESS EXPLAINED SECTION */}
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
                  visibleSteps[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Step Number */}
                <div className="md:w-1/6 text-left md:text-right pr-4 mb-4 md:mb-0">
                  <span className="text-4xl font-bold text-gray-400">
                    {stepItem.step}
                  </span>
                </div>
                {/* Step Text */}
                <div className="md:w-1/2 text-left text-black px-4">
                  <h3 className="text-2xl font-bold mb-2">{stepItem.title}</h3>
                  <p className="text-lg">{stepItem.text}</p>
                </div>
                {/* Step Image */}
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

      {/* OUR GUARANTEE SECTION */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0086bf", color: "black" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Column */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Guarantee</h2>
            <p className="text-lg mb-4">
              At PropertyMaco, we are committed to fairness and transparency. We promise fair cash offers, cover all closing costs, and purchase properties “as is.” We work within your timeline to close the sale swiftly and smoothly. Trust PropertyMaco to prioritize your needs and deliver a reliable, efficient selling process.
            </p>
          </div>
          {/* Right Image Column */}
          <div className="md:w-1/2">
            <Image
              src="/guarantee.jpg" // Replace with your guarantee image
              alt="Our Guarantee"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Testimonials</h2>
          <p className="text-lg mb-8 text-black">
            Discover what our satisfied clients are saying about their experience:
          </p>
          <div className="mx-auto max-w-7xl rounded-lg overflow-hidden shadow-lg px-4 py-6 bg-white">
            <ReviewCarousel reviews={googleReviewsData} />
          </div>
        </div>
      </section>

      {/* GET STARTED TODAY SECTION */}
      <section className="py-16 px-4 bg-[#0086bf]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Get Started Today</h2>
          <p className="text-lg mb-8 text-black max-w-4xl mx-auto">
            Begin your journey to a hassle‑free home-selling process with PropertyMaco by filling out our quick form today. With no obligation and a commitment to a stress‑free consultation, we ensure a transparent experience right from the start. Let us guide you with ease and confidence toward a successful sale.
          </p>
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              Get an Offer
            </button>
          </Link>
        </div>
      </section>
    </AnimatedPage>
  );
}
