"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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

  // Dropdown items array
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/">
            <span className="flex items-center cursor-pointer bg-white p-1 rounded">
              <Image
                src="/Logo.png" // Replace with your actual logo path
                alt="PropertyMaco Logo"
                width={250}
                height={90}
                priority
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/about-us">
              <span className="text-white hover:text-blue-400 text-lg transition-colors">
                About Us
              </span>
            </Link>
            <Link href="/our-team">
              <span className="text-white hover:text-blue-400 text-lg transition-colors">
                Our Team
              </span>
            </Link>
            <Link href="/reviews">
              <span className="text-white hover:text-blue-400 text-lg transition-colors">
                Reviews
              </span>
            </Link>
            <Link href="/locations">
              <span className="text-white hover:text-blue-400 text-lg transition-colors">
                Locations
              </span>
            </Link>

            {/* "We Buy Houses" with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center space-x-1">
                <Link href="/we-buy-houses">
                  <span className="text-white hover:text-blue-400 text-lg transition-colors cursor-pointer">
                    We Buy Houses
                  </span>
                </Link>
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
                        <Link href={item.link} onClick={() => setDropdownOpen(false)}>
                          <span className="block px-4 py-2 text-white hover:bg-blue-500 cursor-pointer text-sm">
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
            <div className="flex items-center space-x-12">
              <div className="text-right">
                <p className="text-blue-400 text-sm">Available 24/7</p>
                <div className="flex items-center justify-end">
                  <a href="tel:2399905070" className="flex items-center">
                    <Image
                      src="/phone-icon.png" // Replace with your phone icon path
                      alt="Phone Icon"
                      width={16}
                      height={16}
                      className="mr-1"
                    />
                    <p className="text-red-500 font-bold">(239) 990-5070</p>
                  </a>
                </div>
              </div>
              <Link href="/contact">
                <span className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                  GET AN OFFER
                </span>
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
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
            <Link href="/about-us">
              <span className="text-white hover:text-blue-400 text-lg transition-colors cursor-pointer">
                About Us
              </span>
            </Link>
            <Link href="/our-team">
              <span className="text-white hover:text-blue-400 text-lg transition-colors cursor-pointer">
                Our Team
              </span>
            </Link>
            <Link href="/reviews">
              <span className="text-white hover:text-blue-400 text-lg transition-colors cursor-pointer">
                Reviews
              </span>
            </Link>
            <Link href="/locations">
              <span className="text-white hover:text-blue-400 text-lg transition-colors cursor-pointer">
                Locations
              </span>
            </Link>
            {/* "We Buy Houses" with Dropdown for Mobile */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center space-x-1">
                <Link href="/we-buy-houses">
                  <span className="text-white hover:text-blue-400 text-lg transition-colors cursor-pointer">
                    We Buy Houses
                  </span>
                </Link>
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
                    <Link href={item.link} key={item.link}>
                      <span className="block px-4 py-2 text-white hover:bg-blue-500 cursor-pointer text-sm">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/contact">
              <span className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors cursor-pointer">
                GET AN OFFER
              </span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
