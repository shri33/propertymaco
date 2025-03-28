"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Separate refs for desktop and mobile dropdowns
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownItems = [
    { name: "Avoiding Foreclosure", link: "/avoiding-foreclosure" },
    { name: "Bankruptcy", link: "/bankruptcy" },
    { name: "Behind on Mortgage", link: "/behind-on-mortgage" },
    { name: "Divorce or Separation", link: "/divorce-or-separation" },
    { name: "Relocation", link: "/relocation" },
    { name: "Upgrading or Downsizing", link: "/upgrading-or-downsizing" },
  ];

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      {/* Fully responsive fluid container */}
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        {/* Flex container with enhanced responsiveness */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:py-4">
          {/* Logo with responsive sizing */}
          <Link
            href="/"
            className="flex items-center cursor-pointer bg-white p-1 rounded mb-3 sm:mb-0 self-center sm:self-start"
          >
            <Image
              src="/Logo.png"
              alt="PropertyMaco Logo"
              width={200}
              height={72}
              priority
              className="w-[150px] sm:w-[200px] md:w-[250px] h-auto"
            />
          </Link>

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <Link
              href="/about-us"
              className="text-white hover:text-blue-400 text-base md:text-lg transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/our-team"
              className="text-white hover:text-blue-400 text-base md:text-lg transition-colors"
            >
              Our Team
            </Link>
            <Link
              href="/reviews"
              className="text-white hover:text-blue-400 text-base md:text-lg transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/locations"
              className="text-white hover:text-blue-400 text-base md:text-lg transition-colors"
            >
              Locations
            </Link>

            {/* "We Buy Houses" Dropdown (Desktop/Tablet) */}
            <div className="relative" ref={desktopDropdownRef}>
              <div className="flex items-center space-x-1">
                <Link
                  href="/we-buy-houses"
                  className="text-white hover:text-blue-400 text-base md:text-lg transition-colors cursor-pointer"
                >
                  We Buy Houses
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdownOpen((prev) => !prev);
                  }}
                  className="focus:outline-none"
                >
                  <svg
                    className={`w-4 h-4 text-white transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-black border border-gray-700 rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    {dropdownItems.map((item) => (
                      <li key={item.link}>
                        <Link
                          href={item.link}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2 text-white hover:bg-blue-500 text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Contact & Phone with responsive layout */}
            <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              <div className="text-right">
                <p className="text-blue-400 text-xs sm:text-sm">Available 24/7</p>
                <div className="flex items-center">
                  <a href="tel:2399905070" className="flex items-center">
                    <Image
                      src="/phone-icon.png"
                      alt="Phone Icon"
                      width={16}
                      height={16}
                      className="mr-1 w-3 sm:w-4 h-auto"
                    />
                    <p className="text-red-500 font-bold text-sm sm:text-base">
                      (239) 990-5070
                    </p>
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md font-medium text-sm sm:text-base transition-colors"
              >
                GET AN OFFER
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden self-end absolute top-4 right-4">
            <button
              onClick={() => setMobileNavOpen((prev) => !prev)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileNavOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileNavOpen && (
        <nav className="md:hidden bg-black px-4 pt-2 pb-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/about-us"
              className="text-white hover:text-blue-400 text-lg transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/our-team"
              className="text-white hover:text-blue-400 text-lg transition-colors"
            >
              Our Team
            </Link>
            <Link
              href="/reviews"
              className="text-white hover:text-blue-400 text-lg transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/locations"
              className="text-white hover:text-blue-400 text-lg transition-colors"
            >
              Locations
            </Link>

            {/* "We Buy Houses" Dropdown (Mobile) */}
            <div className="relative" ref={mobileDropdownRef}>
              <div className="flex items-center space-x-1">
                <Link
                  href="/we-buy-houses"
                  className="text-white hover:text-blue-400 text-lg transition-colors"
                >
                  We Buy Houses
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdownOpen((prev) => !prev);
                  }}
                  className="focus:outline-none"
                >
                  <svg
                    className={`w-4 h-4 text-white transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {dropdownOpen && (
                <div className="mt-2">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-white hover:bg-blue-500 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-3">
              <div className="text-center">
                <p className="text-blue-400 text-sm">Available 24/7</p>
                <a 
                  href="tel:2399905070" 
                  className="flex items-center justify-center"
                >
                  <Image
                    src="/phone-icon.png"
                    alt="Phone Icon"
                    width={16}
                    height={16}
                    className="mr-1"
                  />
                  <p className="text-red-500 font-bold">(239) 990-5070</p>
                </a>
              </div>
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium text-center transition-colors"
              >
                GET AN OFFER
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}