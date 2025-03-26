// components/layout/Footer.js
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0086bf] text-white">
      <div className="container mx-auto px-4 pt-8 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Logo and Contact */}
          <div className="mb-6 md:mb-0">
            {/* Logo (same style as header) */}
            <Link href="/">
              <span className="flex items-center cursor-pointer bg-white p-1 rounded">
                <Image
                  src="/Logo.png"      // Replace with your actual logo path
                  alt="PropertyMaco Logo"
                  width={180}
                  height={80}
                  priority
                />
              </span>
            </Link>

            {/* Contact Info */}
            <div className="mt-4 flex flex-col">
              <p className="text-base mb-1">Available 24/7</p>
              {/* Phone Row with Bigger Icon & Text */}
              <div className="flex items-center mb-2">
                <Image
                  src="/phone-icon.png" // Replace with your phone icon path
                  alt="Phone Icon"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <p className="text-2xl font-bold">(888) 719-9158</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-2 mt-2">
              <a href="#" aria-label="Facebook" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.218-1.79.465-2.428.247-.67.599-1.227 1.153-1.772A4.904 4.904 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.8c-2.67 0-2.986.01-4.04.06-.976.044-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.054-.06 1.37-.06 4.04 0 2.67.01 2.986.06 4.04.044.976.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.047 1.37.06 4.04.06 2.67 0 2.987-.01 4.04-.06.976-.044 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.054.06-1.37.06-4.04 0-2.67-.01-2.986-.06-4.04-.044-.976-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.097 3.097 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.047-1.37-.06-4.04-.06zm0 3.064A5.136 5.136 0 1 1 12 17.136 5.136 5.136 0 0 1 12 6.864zm0 8.466a3.332 3.332 0 1 0 0-6.664 3.332 3.332 0 0 0 0 6.664zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Connect via text */}
          <div className="mb-6 md:mb-0">
            <p className="text-base font-bold mb-2">Connect via text:</p>
            <p className="text-base">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                https://propertymaco.h.trustco.ai
              </a>
            </p>
            <p className="text-base mt-2">
              Messaging T&Cs:{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                https://propertymaco.h.trustco.ai/#termsArea
              </a>
            </p>
            <p className="text-base mt-2">
              Messaging Privacy Policy:{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                https://propertymaco.h.trustco.ai/#privacyArea
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 text-base">
            <Link href="/about-us">
              <span className="block hover:underline cursor-pointer">About Us</span>
            </Link>
            <Link href="/reviews">
              <span className="block hover:underline cursor-pointer">Reviews</span>
            </Link>
            <Link href="/we-buy-houses">
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
        <div className="border-t border-[#0075a7] pt-4 flex flex-col md:flex-row md:justify-between md:items-center">
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
