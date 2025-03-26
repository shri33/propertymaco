"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/path-to-your-image.jpg" // Replace with your actual image
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">ABOUT US</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          PropertyMaco helps homeowners sell quickly and hassle-free, no matter the situation.
        </p>
        <a
          href="/contact"
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition duration-300"
        >
          Get an Offer
        </a>
      </div>
    </div>
  );
}
