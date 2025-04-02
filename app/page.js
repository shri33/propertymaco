"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    property: "",
    hear: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  // For FAQ accordion (if needed)
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image src="/hero.jpg" alt="Hero Background" fill className="object-cover" />
        </div>
        {/* Color Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto p-4 sm:p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center justify-center h-full text-center">
          {/* LEFT COLUMN: Text & Logo */}
          <div className="w-full md:w-1/2 text-white mb-6 md:mb-0 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-5xl font-bold mb-4">
              We buy houses nationwide and offer fast cash solutions.
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-3">
              Sell your house AS-IS. No fees. Any condition.
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4 px-2">
              We buy houses and properties in tough situations, like foreclosure, divorce,
              probate, behind on payments, bad tenants, and more.
            </p>
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/bbb-white.png"
                alt="BBB Accredited"
                width={290}
                height={290}
                className="w-auto h-16 sm:h-20 md:h-24 brightness-125"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg text-gray-800 max-w-md mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
              GET YOUR CASH OFFER!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First/Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-700">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-700">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm"
                    required
                  />
                </div>
              </div>
              {/* Phone/Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm"
                    required
                  />
                </div>
              </div>
              {/* Property Address */}
              <div>
                <label htmlFor="property" className="block text-xs sm:text-sm font-medium text-gray-700">
                  Property Address*
                </label>
                <input
                  type="text"
                  id="property"
                  value={formData.property}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm"
                  required
                />
              </div>
              {/* Where did you hear about us? */}
              <div>
                <label htmlFor="hear" className="block text-xs sm:text-sm font-medium text-gray-700">
                  Where did you hear about us?*
                </label>
                <select
                  id="hear"
                  value={formData.hear}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm"
                  required
                >
                  <option value="">Please select</option>
                  <option value="google">Google</option>
                  <option value="facebook">Facebook</option>
                  <option value="friend">Friend/Family</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 text-sm sm:text-base"
              >
                Get Your Cash Offer
              </button>
              {status === "sending" && <p className="text-center text-sm text-gray-600">Sending...</p>}
              {status === "success" && (
                <p className="text-center text-sm text-green-600">
                  Thank you for contacting us. We will get back to you soon!
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-red-600">
                  There was an error. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ===================== TRUST SECTION ===================== */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:flex md:space-x-8">
          {/* LEFT COLUMN: Text */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              WE ARE A USA CASH HOME BUYER YOU CAN TRUST
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              We pay cash for homes in the USA and work tirelessly to provide the simplest and most convenient home selling experience possible. We work with homeowners who don’t want to do repairs, need help with foreclosure, have an inherited property, face eviction, or simply want to move on.
            </p>
            <Link href="/contact">
              <span className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 mb-6 text-sm sm:text-base">
                Get an Offer
              </span>
            </Link>
            <p className="text-sm sm:text-base text-gray-700">
              Don’t take our word for it. We have dozens of video reviews where you can see and hear how other homeowners felt about working with us.
            </p>
          </div>
          {/* RIGHT COLUMN: Image and Phone */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-4">
            <Image src="/nocommission.jpg" alt="No Commission" width={600} height={300} className="rounded-lg shadow-lg w-full h-auto" />
            <p className="text-center text-gray-800 font-semibold mt-4 text-sm sm:text-base">
              NO COMMISSION <br />
              <a href="tel:2399905070" className="hover:underline">(239) 990-5070</a> <br />
            </p>
          </div>
        </div>

        {/* ===================== FOUR-COLUMN SECTION ===================== */}
        <div className="container mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <Link href="/videoreviews">
              <Image src="/videocall_icon.png" alt="Video Reviews" width={50} height={50} className="w-10 h-10" />
            </Link>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-4">Video Reviews</h3>
            <p className="text-xs sm:text-sm text-gray-700 mt-2">
              We have dozens of video reviews from homeowners sharing their experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Link href="/google-reviews">
              <Image src="/google_icon.png" alt="Google Reviews" width={50} height={50} className="w-10 h-10" />
            </Link>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-4">Google Reviews</h3>
            <p className="text-xs sm:text-sm text-gray-700 mt-2">
              View our Google reviews to see how many homeowners had great experiences.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Link href="/bbb-rating">
              <Image src="/bbb_icon.png" alt="BBB Rating" width={50} height={50} className="w-10 h-10" />
            </Link>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-4">A+ BBB Rating</h3>
            <p className="text-xs sm:text-sm text-gray-700 mt-2">
              We have an “A+” rating on the Better Business Bureau.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Link href="/cash">
              <Image src="/cash_icon.png" alt="Cash Icon" width={50} height={50} className="w-10 h-10" />
            </Link>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-4">We Actually Have Cash</h3>
            <p className="text-xs sm:text-sm text-gray-700 mt-2">
              We have the funds to buy your house directly.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== BENEFITS SECTION ===================== */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-4">A</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                We'll make your comfort a priority.
              </h3>
              <p className="text-gray-700 text-sm">
                We'll keep the sale process stress-free. Request a no-obligation cash offer and we'll guide you through each step.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-4">B</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Your offer is 100% unique to you.
              </h3>
              <p className="text-gray-700 text-sm">
                Each offer reflects your specific needs and represents the best value for your property.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-gray-600 mb-4">C</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                We proudly back all offers.
              </h3>
              <p className="text-gray-700 text-sm">
                Our company backs every offer. Enjoy a smooth property transaction with no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROCESS SECTION ===================== */}
      <section className="py-12 bg-[#0086bf]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">
            THE PROPERTYMACO PROCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white p-6 rounded-lg">
              <div className="font-bold text-xl text-white mb-2">Step 1</div>
              <h3 className="text-xl font-bold text-white mb-4">CALL US & CHAT</h3>
              <p className="text-white text-sm">
                Tell us about your property and we'll make a fast cash offer via phone, online form, or text.
              </p>
            </div>
            <div className="border border-white p-6 rounded-lg">
              <div className="font-bold text-xl text-white mb-2">Step 2</div>
              <h3 className="text-xl font-bold text-white mb-4">WE PRESENT AN OFFER</h3>
              <p className="text-white text-sm">
                We'll make you a fair cash offer for your property.
              </p>
            </div>
            <div className="border border-white p-6 rounded-lg">
              <div className="font-bold text-xl text-white mb-2">Step 3</div>
              <h3 className="text-xl font-bold text-white mb-4">CLOSE AND GET PAID</h3>
              <p className="text-white text-sm">
                Choose the closing date that works for you. Get your cash in as little as 7 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FREQUENTLY ASKED QUESTIONS ===================== */}
      <section className="py-12 bg-[#0086bf]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div
              className="bg-white text-black rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(0)}
            >
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                What fees are charged at closing?
              </h3>
              {openIndex === 0 && (
                <p className="text-xs sm:text-sm">
                  We charge zero fees at closing. All closing costs are covered by us.
                </p>
              )}
            </div>

            <div
              className="bg-white text-black rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(1)}
            >
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Do I have to clean the house before I leave?
              </h3>
              {openIndex === 1 && (
                <p className="text-xs sm:text-sm">
                  Nope! Leave behind anything you don’t want. We’ll handle the rest.
                </p>
              )}
            </div>

            <div
              className="bg-white text-black rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(2)}
            >
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Can I have my attorney review the purchase agreement?
              </h3>
              {openIndex === 2 && (
                <p className="text-xs sm:text-sm">
                  Absolutely. We encourage you to have a trusted advisor review the contract.
                </p>
              )}
            </div>

            <div
              className="bg-white text-black rounded-md p-4 cursor-pointer"
              onClick={() => handleToggle(3)}
            >
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Do I have to travel somewhere to do the closing?
              </h3>
              {openIndex === 3 && (
                <p className="text-xs sm:text-sm">
                  Not at all. We can close at the title company’s office or remotely in your living room.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
