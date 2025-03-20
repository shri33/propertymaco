// components/layout/Footer.js

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
          {/* Left Column: Availability & Phone */}
          <div className="mb-6 md:mb-0">
            <p className="text-sm mb-2">Available 24/7</p>
            <p className="text-lg font-bold mb-2">888-719-9158</p>
          </div>

          {/* Middle Column: Connect via Text, T&Cs, Privacy Policy */}
          <div className="mb-6 md:mb-0">
            <p className="text-sm font-bold mb-2">Connect via text:</p>
            <p className="text-sm">
              <a
                href="https://friendlyhomebuyer.h.trustco.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                https://friendlyhomebuyer.h.trustco.ai
              </a>
            </p>
            <p className="text-sm mt-2">
              Messaging T&Cs:{" "}
              <a
                href="https://friendlyhomebuyer.h.trustco.ai/#termsArea"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                https://friendlyhomebuyer.h.trustco.ai/#termsArea
              </a>
            </p>
            <p className="text-sm mt-2">
              Messaging Privacy Policy:{" "}
              <a
                href="https://friendlyhomebuyer.h.trustco.ai/#privacyArea"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                https://friendlyhomebuyer.h.trustco.ai/#privacyArea
              </a>
            </p>
          </div>

          {/* Right Column: Quick Links */}
          <div className="space-y-2 text-sm">
            <Link href="/about">
              <span className="block hover:underline cursor-pointer">About Us</span>
            </Link>
            <Link href="/testimonials">
              <span className="block hover:underline cursor-pointer">Reviews</span>
            </Link>
            <Link href="/services">
              <span className="block hover:underline cursor-pointer">We Buy Houses</span>
            </Link>
            <Link href="/faq">
              <span className="block hover:underline cursor-pointer">FAQs</span>
            </Link>
            <Link href="/contact">
              <span className="block hover:underline cursor-pointer">Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-sm mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} PropertyMaco. All Rights Reserved.
          </p>
          <div className="space-x-4 text-sm">
            <Link href="/privacy-policy">
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/accessibility">
              <span className="hover:underline cursor-pointer">Accessibility</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
