"use client"; // Enable client-side features (e.g., animations)

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  // 5 Example Reviews (shortText & fullText)
  const reviews = [
    {
      name: "Galactic Stone",
      date: "23 September 2022",
      rating: 5,
      shortText: `I can't say enough good things about Joe, Ben, and the folks at Friendly Home BuyerThey were very nice, straightforward, and efficient...`,
      fullText: `I can't say enough good things about Joe, Ben, and the folks at Friendly Home Buyer. They were very nice, straightforward, and efficient in helping me sell my house quickly. The entire process was smooth from start to finish!`,
    },
    {
      name: "Patricia OBrien",
      date: "29 June 2022",
      rating: 5,
      shortText: `Ben and Joe were excellent throughout the whole process. Very courteous and knowledgeable. Worked with us and explained every detail...`,
      fullText: `Ben and Joe were excellent throughout the whole process. Very courteous and knowledgeable. Worked with us and explained every detail so we felt comfortable. We closed faster than expected and got a fair price!`,
    },
    {
      name: "John Doe",
      date: "10 May 2022",
      rating: 5,
      shortText: `Joe and team made selling my house super simple They answered every question I had and were patient throughout the process....`,
      fullText: `Joe and team made selling my house super simple. They answered every question I had and were patient throughout the process. I received a fair cash offer and closed on my own timeline. Highly recommend!`,
    },
    {
      name: "Jane Smith",
      date: "2 April 2022",
      rating: 4,
      shortText: `I was skeptical at first, but I'm so glad I called They gave me a fair offer and closed quickly. Couldn't be happier with the service....`,
      fullText: `I was skeptical at first, but I'm so glad I called. They gave me a fair offer and closed quickly. Couldn't be happier with the service. It took a lot of stress off my shoulders and saved me time.`,
    },
    {
      name: "Mike Johnson",
      date: "18 March 2022",
      rating: 5,
      shortText: `The best experience I've ever had selling a house Fast, easy, and no hidden fees. Highly recommend this team! From start...`,
      fullText: `The best experience I've ever had selling a house. Fast, easy, and no hidden fees. Highly recommend this team! From start to finish, they communicated well and made sure I was comfortable with every step.`,
    },
  ];

  // Current index of the displayed review
  const [currentIndex, setCurrentIndex] = useState(0);

  // For toggling the "Read more" state of the current review
  const [expanded, setExpanded] = useState(false);

  // For auto-sliding
  const intervalRef = useRef(null);

  // Whenever currentIndex changes, reset expanded to false
  useEffect(() => {
    setExpanded(false);
  }, [currentIndex]);

  // Auto-play every 3 seconds
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [currentIndex]); // restarts interval on index change

  const startAutoSlide = () => {
    stopAutoSlide(); // clear any existing interval
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Go to previous review
  const handlePrev = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Go to next review
  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  // Framer Motion variants for sliding in/out
  const variants = {
    enter: { x: 300, opacity: 0 },  // start off to the right
    center: { x: 0, opacity: 1 },   // center position
    exit: { x: -300, opacity: 0 },  // slide out to the left
  };

  // Current review object
  const currentReview = reviews[currentIndex];

  return (
    <section className="relative w-full bg-black text-white py-10 px-4">
      {/* Arc / Swoosh at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            fill="#2A9DF4" // Arc color
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT COLUMN */}
          <div className="md:w-1/2 space-y-6">
            {/* "PROPERTY MACO" heading with colors */}
            <h2 className="text-3xl font-bold">
              <span className="text-white">PROPERTY</span>{" "}
              <span className="text-red-600">MACO</span>
            </h2>

            <p>
              “I need to sell my house fast”, “I need to sell my house cash,” or even
              “should I sell my house cash” are all very common thoughts for the homeowners
              we work with. Selling a house can seem a bit overwhelming. Just take the first
              step and start with a chat. Either fill out the webform, or call us at{" "}
              <a href="tel:888-713-9158" className="underline font-semibold">
                888-713-9158
              </a>
              .
            </p>

            {/* BBB White Logo */}
            <img
              src="/bbb-white .png"
              alt="bbb-white"
              className="h-12 w-auto"
            />

            {/* REVIEWS SLIDER (One at a time) */}
            <div className="mt-6 relative w-full max-w-md h-64 mx-auto overflow-hidden">
              <h3 className="text-2xl font-bold mb-2">
                What Our Customers Are Saying
              </h3>

              {/* Arrows (outside box with negative margins) */}
              <button
                className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-[#00bfa6] bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-r"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <button
                className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-[#00bfa6] bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-l"
                onClick={handleNext}
              >
                &gt;
              </button>

              {/* AnimatePresence for slide transitions */}
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentIndex}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="absolute w-full h-full flex flex-col bg-[#00bfa6]/10 rounded-lg p-4 shadow"
                  >
                    {/* Top Row: Avatar/Name/Date + Google Icon */}
                    <div className="flex items-center justify-between mb-2">
                      {/* Left: Avatar & Name/Date */}
                      <div className="flex items-center space-x-3">
                        {/* "G" Circle or user icon */}
                        <div className="w-10 h-10 rounded-full bg-[#f4511e] flex items-center justify-center text-white font-bold">
                          G
                        </div>
                        <div>
                          <p className="font-semibold text-white">
                            {currentReview.name}
                          </p>
                          <p className="text-xs text-gray-300">
                            {currentReview.date}
                          </p>
                        </div>
                      </div>
                      {/* Right: Google Logo (optional) */}
                      <img
                        src="/google.png"
                        alt="google"
                        className="w-6 h-6"
                      />
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center mb-2">
                      {[...Array(currentReview.rating)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          className="w-5 h-5 text-yellow-400 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.18a1 1 0 00.95.69h4.389c.969 0 1.371 1.24.588 1.81l-3.535 2.57a1 1 0 00-.364 1.118l1.357 4.18c.3.921-.755 1.688-1.54 1.118l-3.535-2.57a1 1 0 00-1.176 0l-3.535 2.57c-.784.57-1.839-.197-1.54-1.118l1.357-4.18a1 1 0 00-.364-1.118L2.806 9.607c-.783-.57-.38-1.81.589-1.81h4.389a1 1 0 00.95-.69l1.357-4.18z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Text (short or full) */}
                    <p className="text-white mb-2">
                      {expanded ? currentReview.fullText : currentReview.shortText}
                    </p>

                    {/* Read more / Show less button */}
                    <button
                      className="text-blue-300 font-semibold"
                      onClick={() => setExpanded(!expanded)}
                    >
                      {expanded ? "Show less" : "Read more"}
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="md:w-1/2 bg-white text-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-2xl font-bold mb-4 text-center">
              GET YOUR CASH OFFER!
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="firstName">
                  First Name (Required)
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="lastName">
                  Last Name (Required)
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="phone">
                  Phone Number (Required)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="email">
                  Email (Required)
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-1"
                  htmlFor="propertyAddress"
                >
                  Property Address (Required)
                </label>
                <input
                  type="text"
                  id="propertyAddress"
                  className="w-full border rounded p-2"
                  placeholder="Enter a location"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-1"
                  htmlFor="whereHear"
                >
                  Where did you hear about us? (Required)
                </label>
                <select
                  id="whereHear"
                  className="w-full border rounded p-2"
                  required
                >
                  <option value="">Please Choose An Option</option>
                  <option value="Google">Google</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Friend">Friend/Family</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0086bf] hover:bg-[#002a9d] text-white font-bold py-2 rounded mt-2"
              >
                Get Your Cash Offer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
