"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <span className="flex items-center cursor-pointer">
              <span className="text-blue-800 font-bold text-2xl">PropertyMaco</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about-us">
              <span className="text-gray-700 hover:text-blue-800 transition-colors">About Us</span>
            </Link>
            <Link href="/our-team">
              <span className="text-gray-700 hover:text-blue-800 transition-colors">Our Team</span>
            </Link>
            <Link href="/reviews">
              <span className="text-gray-700 hover:text-blue-800 transition-colors">Reviews</span>
            </Link>
            <Link href="/locations">
              <span className="text-gray-700 hover:text-blue-800 transition-colors">Locations</span>
            </Link>

            {/* "We Buy Houses" with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center space-x-1">
                {/* "We Buy Houses" → Navigates to the page */}
                <Link href="/we-buy-houses">
                  <span className="text-gray-700 hover:text-blue-800 transition-colors cursor-pointer">
                    We Buy Houses
                  </span>
                </Link>

                {/* Arrow Button → Toggles Dropdown */}
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation
                    setDropdownOpen(!dropdownOpen);
                  }}
                  className="focus:outline-none"
                >
                  <svg
                    className={`w-4 h-4 text-black transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    {[
                      { name: "Avoiding Foreclosure", link: "/avoiding-foreclosure" },
                      { name: "Bankruptcy", link: "/bankruptcy" },
                      { name: "Behind on Mortgage", link: "/behind-on-mortgage" },
                      { name: "Divorce or Separation", link: "/divorce-or-separation" },
                      { name: "Relocation", link: "/relocation" },
                      { name: "Upgrading or Downsizing", link: "/upgrading-or-downsizing" },
                    ].map((item) => (
                      <li key={item.link}>
                        <Link href={item.link} onClick={() => setDropdownOpen(false)}>
                          <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Contact & Phone */}
            <div className="ml-4 flex items-center">
              <div className="mr-2">
                <p className="text-gray-500 text-xs">Available 24/7</p>
                <p className="text-blue-800 font-bold">(239) 990-5070</p>
              </div>
              <Link href="/contact">
                <span className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                  GET AN OFFER
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
