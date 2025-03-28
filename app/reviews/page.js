"use client";
import { useState, useEffect } from "react";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Example data with date and rating
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
      "These guys are the greatest to deal with honest and very prompt in any and all communication. I would highly…",
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
  {
    name: "Carol Martinez",
    date: "30 December 2022",
    rating: 5,
    comment: "I felt supported every step of the way.",
  },
  {
    name: "David Lee",
    date: "18 December 2022",
    rating: 5,
    comment: "Efficient, friendly, and very professional.",
  },
  {
    name: "Eva Brown",
    date: "11 December 2022",
    rating: 5,
    comment: "They exceeded my expectations in every way.",
  },
  {
    name: "Frank Garcia",
    date: "7 December 2022",
    rating: 5,
    comment: "Quick process and a fair offer.",
  },
  {
    name: "Grace Kim",
    date: "1 December 2022",
    rating: 5,
    comment: "I highly recommend PropertyMaco to anyone.",
  },
  {
    name: "Hank Wilson",
    date: "25 November 2022",
    rating: 5,
    comment: "Stress-free and smooth transaction.",
  },
  {
    name: "Ivy Davis",
    date: "22 November 2022",
    rating: 5,
    comment: "Exceptional service from start to finish.",
  },
  {
    name: "Jack Miller",
    date: "10 November 2022",
    rating: 5,
    comment: "Truly the best home buying experience!",
  },
  {
    name: "Kelly Anderson",
    date: "2 November 2022",
    rating: 5,
    comment: "They made everything so simple.",
  },
];

// Utility function to render 5 stars
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

// ReviewCarousel component: displays 4 reviews per slide
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
    currentReviews = currentReviews.concat(reviews.slice(0, 4 - currentReviews.length));
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

export default function ReviewsPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Reviews | PropertyMaco"
        description="Read real testimonials from homeowners who sold their properties to PropertyMaco."
      />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[30vh] text-white py-8 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        <div className="container mx-auto relative z-10 text-left pl-10 pr-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "white" }}>
            Reviews
          </h1>
          <p className="text-lg max-w-2xl">
            See what our customers have to say about their experience with PropertyMaco.
            Discover genuine reviews from homeowners who sold their houses quickly and hassle-free.
          </p>
        </div>
      </motion.section>
      <section className="pt-16 pb-8 px-4 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-black"
          >
            Video Reviews
          </motion.h2>
          <p className="text-lg mb-8 text-black max-w-4xl mx-auto">
            We are the only home buyer with dozens of video reviews featuring ACTUAL homeowners
            talking about their experience selling to us. There are truly no fees or commissions,
            and we buy houses AS-IS, so there are definitely no repairs (or even cleaning) needed.
          </p>
          <div className="mx-auto max-w-7xl rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Andrea Eachus - From Start to Finish"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-7xl rounded-lg overflow-hidden shadow-lg px-4 py-6 bg-white">
            <ReviewCarousel reviews={googleReviewsData} />
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
