"use client";
import { useState, useRef, useEffect } from "react";
import AnimatedPage from "@/app/components/common/AnimatedPage"; // Ensure this file exists
import SEO from "@/app/components/common/SEO";
import Image from "next/image";
import Link from "next/link";

// Example array for otherTeamMembers with a 'description' field for the modal
const otherTeamMembers = [
  {
    role: "Funding Coordinator",
    image: "/team4.jpg",
    description: "Martin grew up in the son of a postal worker in Mansfield, OH...",
  },
  {
    role: "Transaction Manager",
    image: "/team5.jpg",
    description: "Handles day-to-day transaction details and ensures smooth closings.",
  },
  {
    role: "Acquisitions Manager",
    image: "/team6.jpg",
    description: "Oversees property acquisitions and negotiates fair deals for homeowners.",
  },
  {
    role: "Senior Acquisitions Specialist",
    image: "/team7.jpg",
    description: "Expert in evaluating properties, offering fair prices, and closing quickly.",
  },
  {
    role: "Acquisitions Specialist",
    image: "/team8.jpg",
    description: "Works closely with sellers to provide an AS-IS cash offer with no hassles.",
  },
  {
    role: "Acquisitions Specialist",
    image: "/team9.jpg",
    description: "Ensures a streamlined selling experience for homeowners across the region.",
  },
  {
    role: "Acquisitions Specialist",
    image: "/team10.jpg",
    description: "Coordinates property visits and delivers transparent, stress-free offers.",
  },
  {
    role: "Transaction Coordinator",
    image: "/team11.jpg",
    description: "Manages paperwork and closing details to keep everything on schedule.",
  },
  {
    role: "Transaction Coordinator",
    image: "/team12.jpg",
    description: "Assists in finalizing documents and ensuring a smooth handoff at closing.",
  },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  function handleMemberClick(member) {
    setSelectedMember(member);
  }

  function handleCloseModal() {
    setSelectedMember(null);
  }

  return (
    <AnimatedPage>
      <SEO
        title="Our Team | PropertyMaco"
        description="Meet the dedicated professionals behind PropertyMaco."
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[40vh] flex items-center">
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
        <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row">
            {/* Left Column: Hero Text & Button */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
                Our Team
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6">
                We have collectively decades of experience in real estate and we flat out get the job done.
                When someone decides to sell their house to us, they’re trusting our team to ensure a timely closing
                with no hassle and no surprises. Quite simply, we’re the best at what we do.
              </p>
              <Link href="/contact">
                <span className="inline-block mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 text-sm sm:text-base mx-auto md:mx-0">
                  Get an Offer
                </span>
              </Link>
            </div>
            {/* Right Column: Empty on larger screens */}
            <div className="hidden md:block md:w-1/2"></div>
          </div>
        </div>
      </section>

      {/* ===================== EDUARD CHEPURNOY SECTION ===================== */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Left Column: Photo */}
          <div className="md:w-1/3">
            <Image
              src="/eduard.jpg"
              alt="Eduard Chepurnoy"
              width={400}
              height={400}
              className="object-cover rounded-lg shadow-lg w-full"
            />
          </div>
          {/* Right Column: Text */}
          <div className="md:w-2/3 text-black">
            <h1 className="text-4xl font-bold mb-2">Eduard Chepurnoy</h1>
            <h2 className="text-2xl font-semibold mb-4">Owner/Operator</h2>
            <p className="text-lg">
              of PropertyMaco, brings extensive real estate expertise to every transaction.
              Starting his career in 2011 during a challenging market recovery, Eduard has honed a
              strategic approach focused on delivering efficient, AS-IS cash sales for homeowners
              across the USA. His deep understanding of market dynamics and commitment to transparent,
              professional service make PropertyMaco a trusted partner for those seeking a straightforward
              and fair home-selling experience.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== MEET THE REST OF THE TEAM SECTION ===================== */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-left text-black">
            Meet The Rest of The Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {otherTeamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#0086bf] bg-opacity-90 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer"
                onClick={() => handleMemberClick(member)}
              >
                <Image
                  src={member.image}
                  alt={member.role}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
                <p className="mt-2 text-black text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MODAL FOR SELECTED TEAM MEMBER ===================== */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full flex flex-col md:flex-row pointer-events-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <div className="md:w-1/2 flex-shrink-0 flex items-center justify-center">
              <Image
                src={selectedMember.image}
                alt={selectedMember.role}
                width={150}
                height={150}
                className="object-cover rounded-full"
              />
            </div>
            <div className="md:w-1/2 p-4 text-black">
              <h3 className="text-2xl font-bold mb-2">{selectedMember.role}</h3>
              <p className="text-lg">{selectedMember.description}</p>
            </div>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
}
