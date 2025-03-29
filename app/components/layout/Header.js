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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between py-4">
          {/* Desktop Logo with White Outline */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="PropertyMaco Desktop Logo"
              width={200}
              height={72}
              priority
              className="w-48 h-auto border border-white"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-6">
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

            {/* "We Buy Houses" Dropdown */}
            <div className="relative" ref={desktopDropdownRef}>
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

            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-blue-400 text-xs">Available 24/7</p>
                <div className="flex items-center">
                  <a href="tel:2399905070" className="flex items-center">
                    <Image
                      src="/phone-icon.png"
                      alt="Phone Icon"
                      width={16}
                      height={16}
                      className="mr-1 w-4 h-auto"
                    />
                    <p className="text-red-500 font-bold text-sm">
                      (239) 990-5070
                    </p>
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors"
              >
                GET AN OFFER
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between py-4 relative">
          {/* Mobile Logo with White Outline */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="PropertyMaco Mobile Logo"
              width={150}
              height={54}
              priority
              className="w-36 h-auto border border-white"
            />
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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

      {/* Mobile Navigation Menu */}
      {mobileNavOpen && (
        <nav className="md:hidden bg-black px-4 py-4 transition-all duration-300">
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

            {/* Contact Info */}
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
                    className="mr-1 w-4 h-auto"
                  />
                  <p className="text-red-500 font-bold text-base">
                    (239) 990-5070
                  </p>
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
