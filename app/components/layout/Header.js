"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [weBuyMenuOpen, setWeBuyMenuOpen] = useState(false);
  const [mobileWeBuyOpen, setMobileWeBuyOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <span className="flex items-center cursor-pointer">
              <span className="text-blue-800 font-bold text-2xl">PropertyMaco</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 relative">
            <Link href="/about-us">
              <span className="text-gray-700 hover:text-blue-800 transition-colors">
                About Us
              </span>
            </Link>
            <Link href="/our-team">
              <span className="text-gray-700 hover:text-blue-800 transition-colors">
                Our Team
              </span>
            </Link>
            <Link href="/reviews">
              <span className="text-gray-700 hover:text-blue-800 transition-colors">
                Reviews
              </span>
            </Link>
            <Link href="/locations">
              <span className="text-gray-700 hover:text-blue-800 transition-colors">
                Locations
              </span>
            </Link>

            {/* We Buy Houses (Desktop) */}
            <div className="relative flex items-center">
              {/* Main Link to /we-buy-houses */}
              <Link href="/we-buy-houses">
                <span className="text-gray-700 hover:text-blue-800 transition-colors mr-1">
                  We Buy Houses
                </span>
              </Link>
              {/* Down Arrow Button for subpages */}
              <button
                onClick={() => setWeBuyMenuOpen(!weBuyMenuOpen)}
                onBlur={() => setWeBuyMenuOpen(false)}
                className="focus:outline-none text-gray-700 hover:text-blue-800 transition-colors"
              >
                <svg
                  className={`h-4 w-4 transform transition-transform ${
                    weBuyMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {weBuyMenuOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-lg border border-gray-200 rounded-md w-48 z-50">
                  <ul className="py-2">
                    <li>
                      <Link href="/we-buy-houses/avoiding-foreclosure">
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Avoiding Foreclosure
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/we-buy-houses/bankruptcy">
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Bankruptcy
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/we-buy-houses/behind-on-mortgage">
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Behind on Mortgage
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/we-buy-houses/divorce-or-separation">
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Divorce/Separation
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/we-buy-houses/relocation">
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Relocation
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/we-buy-houses/upgrading-or-downsizing">
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Upgrading/Downsizing
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Right side: phone + button */}
            <div className="ml-4 flex items-center">
              <div className="mr-2">
                <p className="text-gray-500 text-xs">Available 24/7</p>
                <p className="text-blue-800 font-bold">(888) 719-9158</p>
              </div>
              <Link href="/contact">
                <span className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                  GET AN OFFER
                </span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <ul className="space-y-4">
              <li>
                <Link href="/about-us">
                  <span className="block text-gray-700 hover:text-blue-800">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/our-team">
                  <span className="block text-gray-700 hover:text-blue-800">Our Team</span>
                </Link>
              </li>
              <li>
                <Link href="/reviews">
                  <span className="block text-gray-700 hover:text-blue-800">Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="/locations">
                  <span className="block text-gray-700 hover:text-blue-800">Locations</span>
                </Link>
              </li>

              {/* We Buy Houses for Mobile */}
              <li>
                {/* Link to main We Buy Houses page */}
                <div className="flex items-center justify-between pr-4">
                  <Link href="/we-buy-houses">
                    <span className="block text-gray-700 hover:text-blue-800">
                      We Buy Houses
                    </span>
                  </Link>
                  {/* Arrow for subpages */}
                  <button
                    onClick={() => setMobileWeBuyOpen(!mobileWeBuyOpen)}
                    className="focus:outline-none text-gray-700 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      className={`h-4 w-4 transform transition-transform ${
                        mobileWeBuyOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
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

                {/* Subpages */}
                {mobileWeBuyOpen && (
                  <ul className="ml-6 space-y-2 mt-2">
                    <li>
                      <Link href="/we-buy-houses/avoiding-foreclosure">
                        <span className="block text-gray-700 hover:text-blue-800">
                          Avoiding Foreclosure
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/we-buy-houses/bankruptcy">
                        <span className="block text-gray-700 hover:text-blue-800">
                          Bankruptcy
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/we-buy-houses/behind-on-mortgage">
                        <span className="block text-gray-700 hover:text-blue-800">
                          Behind on Mortgage
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/we-buy-houses/divorce-or-separation">
                        <span className="block text-gray-700 hover:text-blue-800">
                          Divorce/Separation
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/we-buy-houses/relocation">
                        <span className="block text-gray-700 hover:text-blue-800">
                          Relocation
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/we-buy-houses/upgrading-or-downsizing">
                        <span className="block text-gray-700 hover:text-blue-800">
                          Upgrading/Downsizing
                        </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Contact Info */}
              <li className="pt-2">
                <p className="text-gray-500 text-xs">Available 24/7</p>
                <p className="text-blue-800 font-bold">(888) 719-9158</p>
              </li>
              <li className="pt-2">
                <Link href="/contact">
                  <span className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium">
                    GET AN OFFER
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
