// components/layout/Header.js
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

            {/* Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-800 transition-colors flex items-center" suppressHydrationWarning>
                We Buy Houses
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isClient && dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <ul className="py-2">
                    <li>
                      <Link href="/avoiding-foreclosure" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Avoiding Foreclosure</Link>
                    </li>
                    <li>
                      <Link href="/bankruptcy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Bankruptcy</Link>
                    </li>
                    <li>
                      <Link href="/behind-on-mortgage" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Behind on Mortgage</Link>
                    </li>
                    <li>
                      <Link href="/divorce-or-separation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Divorce or Separation</Link>
                    </li>
                    <li>
                      <Link href="/relocation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Relocation</Link>
                    </li>
                    <li>
                      <Link href="/upgrading-or-downsizing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Upgrading or Downsizing</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

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
