"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0086bf] text-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-6 sm:pt-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Logo and Contact Info - First Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/Logo.png"
                alt="PropertyMaco Logo"
                width={200}
                height={80}
                priority
                className="w-[150px] sm:w-[200px] md:w-[250px] h-auto"
              />
            </Link>
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base mb-1">Available 24/7</p>
              {/* Wrap the phone icon and number in an anchor tag */}
              <a
                href="tel:2399905070"
                className="flex items-center justify-center md:justify-start mb-2 hover:underline"
              >
                <Image
                  src="/phone-icon.png"
                  alt="Phone Icon"
                  width={24}
                  height={24}
                  className="mr-2 w-5 sm:w-6 h-auto"
                />
                <p className="text-lg sm:text-xl md:text-2xl font-bold">
                  (239) 990-5070
                </p>
              </a>
              
              {/* Social Icons with responsive spacing */}
              <div className="flex justify-center md:justify-start space-x-3 mt-3">
                <a
                  href="https://facebook.com/yourpage"
                  aria-label="Facebook"
                  className="text-white hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/yourpage"
                  aria-label="Instagram"
                  className="text-white hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.218-1.79.465-2.428.247-.67.599-1.227 1.153-1.772A4.904 4.904 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.8c-2.986 0-3.25.01-4.392.064-.972.044-1.498.203-1.847.336-.464.183-.8.398-1.152.75-.351.351-.567.688-.75 1.152-.133.349-.292.875-.336 1.847C2.01 8.75 2 9.014 2 12c0 2.986.01 3.25.064 4.392.044.972.203 1.498.336 1.847.183.466.398.8.75 1.152.351.35.688.567 1.152.75.349.133.875.292 1.847.336 1.142.054 1.406.064 4.392.064 2.986 0 3.25-.01 4.392-.064.972-.044 1.498-.203 1.847-.336.464-.183.8-.398 1.152-.75.351-.35.567-.688.75-1.152.133-.349.292-.875.336-1.847.054-1.142.064-1.406.064-4.392 0-2.986-.01-3.25-.064-4.392-.044-.972-.203-1.498-.336-1.847a3.823 3.823 0 00-.75-1.152 3.823 3.823 0 00-1.152-.75c-.349-.133-.875-.292-1.847-.336C15.25 3.81 14.986 3.8 12 3.8zm0 3.064A5.136 5.136 0 1 1 12 17.136 5.136 5.136 0 0 1 12 6.864zm0 8.466a3.332 3.332 0 1 0 0-6.664 3.332 3.332 0 0 0 0 6.664zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Connect via text - Second Column */}
          <div className="text-center md:text-left">
            <p className="text-sm sm:text-base font-bold mb-2">Connect via text:</p>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm">
                <a
                  href="https://propertymaco.h.trustco.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  https://propertymaco.h.trustco.ai
                </a>
              </p>
              <p className="text-xs sm:text-sm">
                Messaging T&Cs:{" "}
                <a
                  href="https://propertymaco.h.trustco.ai/#termsArea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  Terms &amp; Conditions
                </a>
              </p>
              <p className="text-xs sm:text-sm">
                Messaging Privacy Policy:{" "}
                <a
                  href="https://propertymaco.h.trustco.ai/#privacyArea"
                  target=" "
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links - Third Column */}
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm sm:text-base font-bold mb-2">Quick Links</p>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-2 justify-center md:justify-start">
              <Link href="/about-us">
                <span className="text-xs sm:text-sm block hover:underline cursor-pointer">
                  About Us
                </span>
              </Link>
              <Link href="/reviews">
                <span className="text-xs sm:text-sm block hover:underline cursor-pointer">
                  Reviews
                </span>
              </Link>
              <Link href="/we-buy-houses">
                <span className="text-xs sm:text-sm block hover:underline cursor-pointer">
                  We Buy Houses
                </span>
              </Link>
              <Link href="/faq">
                <span className="text-xs sm:text-sm block hover:underline cursor-pointer">
                  FAQs
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-xs sm:text-sm block hover:underline cursor-pointer">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-[#0075a7] pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} PropertyMaco. All Rights Reserved.
          </p>
          <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm">
            <Link href="/privacy-policy">
              <span className="hover:underline cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/accessibility">
              <span className="hover:underline cursor-pointer">
                Accessibility
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
