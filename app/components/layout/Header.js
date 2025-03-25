"use client";

import Link from "next/link";
import Image from "next/image";
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
    <header className="bg-[#000000] shadow-md">
      {/* Header Background: Black (#000000) */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <span className="flex items-center cursor-pointer">
              <Image
                src="/Logo.png"
                alt="PropertyMaco Logo"
                width={280}
                height={90}
                priority
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about-us">
              <span className="text-white hover:text-blue-400 transition-colors">About Us</span>
            </Link>
            <Link href="/our-team">
              <span className="text-white hover:text-blue-400 transition-colors">Our Team</span>
            </Link>
            <Link href="/reviews">
              <span className="text-white hover:text-blue-400 transition-colors">Reviews</span>
            </Link>
            <Link href="/locations">
              <span className="text-white hover:text-blue-400 transition-colors">Locations</span>
            </Link>

            {/* "We Buy Houses" with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center space-x-1">
                <Link href="/we-buy-houses">
                  <span className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                    We Buy Houses
                  </span>
                </Link>
                {/* Arrow Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdownOpen(!dropdownOpen);
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-black border border-gray-700 rounded-md shadow-lg z-50">
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
                          <span className="block px-4 py-2 text-white hover:bg-blue-500 cursor-pointer">
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
                <p className="text-blue-400 text-xs">Available 24/7</p>
                <p className="text-red-500 font-bold">(239) 990-5070</p>
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
