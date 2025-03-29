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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form submission logic
    alert("Form submitted with data: " + JSON.stringify(formData));
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
          <Image
            src="/hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>
        {/* Color Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>
        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto p-4 sm:p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center justify-center h-full text-center">
          {/* LEFT COLUMN: Text & Logo */}
          <div className="w-full md:w-1/2 text-white mb-6 md:mb-0 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              WE BUY HOUSES IN <span className="block mt-2">USA</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-3">
              Sell your house AS-IS. No fees. Any condition.
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4 px-2">
              We buy houses and properties in tough situations, like foreclosure,
              divorce, probate, behind on payments, bad tenants, and more.
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
                  <label
                    htmlFor="firstName"
                    className="block text-xs sm:text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="lastName"
                    className="block text-xs sm:text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-700"
                  >
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
                <label
                  htmlFor="property"
                  className="block text-xs sm:text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="hear"
                  className="block text-xs sm:text-sm font-medium text-gray-700"
                >
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
            </form>
          </div>
        </div>
      </section>

      {/* ===================== AS SEEN ON SECTION ===================== */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {/* Logos */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Image
                src="/NBC_logo.svg"
                alt="NBC"
                width={120}
                height={130}
                className="object-contain w-20 sm:w-28 md:w-32"
              />
              <Image
                src="/ABC_logo.svg"
                alt="ABC"
                width={110}
                height={110}
                className="object-contain w-16 sm:w-24 md:w-28"
              />
              <Image
                src="/CBS_logo.svg"
                alt="CBS"
                width={110}
                height={110}
                className="object-contain w-16 sm:w-24 md:w-28"
              />
              <Image
                src="/FOX_logo.svg"
                alt="Fox"
                width={130}
                height={130}
                className="object-contain w-20 sm:w-28 md:w-32"
              />
            </div>
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              AS SEEN ON:
            </h2>
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
              We pay cash for homes in the USA and work tirelessly to provide the simplest
              and most convenient home selling experience possible. We work with homeowners
              who don’t want to do repairs, need help with foreclosure, have an inherited
              property, face eviction, or simply want to move on.
            </p>
            <Link href="/contact">
              <span className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 mb-6 text-sm sm:text-base">
                Get an Offer
              </span>
            </Link>
            <p className="text-sm sm:text-base text-gray-700">
              Don’t take our word for it. We have dozens of video reviews where you can see
              and hear how other homeowners felt about working with us.
            </p>
          </div>
          {/* RIGHT COLUMN: Image */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-4">
            <Image
              src="/nocommission.jpg"
              alt="No Commission"
              width={600}
              height={300}
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <p className="text-center text-gray-800 font-semibold mt-4 text-sm sm:text-base">
              NO COMMISSION <br />
              marco@gmail.com <br />
              813-800-SELL (7355)
            </p>
          </div>
        </div>

        {/* FOUR-COLUMN SECTION */}
        <div className="container mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <Link href="/videoreviews">
              <Image
                src="/videocall_icon.png"
                alt="Video Reviews"
                width={50}
                height={50}
                className="w-10 h-10"
              />
            </Link>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-4">
              Video Reviews
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 mt-2">
              We have dozens of video reviews from homeowners sharing their experience.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <Link href="/google-reviews">
              <Image
                src="/google_icon.png"
                alt="Google Reviews"
                width={50}
                height={50}
                className="w-10 h-10"
              />
            </Link>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-4">
              Google Reviews
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 mt-2">
              View our Google reviews to see how many homeowners had great experiences.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <Link href="/bbb-rating">
              <Image
                src="/bbb_icon.png"
                alt="BBB Rating"
                width={50}
                height={50}
                className="w-10 h-10"
              />
            </Link>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-4">
              A+ BBB Rating
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 mt-2">
              We have an “A+” rating on the Better Business Bureau.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <Link href="/cash">
              <Image
                src="/cash_icon.png"
                alt="Cash Icon"
                width={50}
                height={50}
                className="w-10 h-10"
              />
            </Link>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-4">
              We Actually Have Cash
            </h3>
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
              <h3 className="text-xl font-bold text-white mb-4">
                WE PRESENT AN OFFER
              </h3>
              <p className="text-white text-sm">
                We'll make you a fair cash offer for your property.
              </p>
            </div>
            <div className="border border-white p-6 rounded-lg">
              <div className="font-bold text-xl text-white mb-2">Step 3</div>
              <h3 className="text-xl font-bold text-white mb-4">
                CLOSE AND GET PAID
              </h3>
              <p className="text-white text-sm">
                Choose the closing date that works for you. Get your cash in as little as 7 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS SECTION ===================== */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            VIDEO REVIEWS
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base mb-8">
            We are PropertyMaco, and we're proud of the extraordinary testimonials from our clients.
          </p>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-md shadow-md"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="PropertyMaco Client Testimonials"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===================== WHY SELL TO US & MORE (TEAL BACKGROUND) ===================== */}
      <section className="py-12 bg-[#0086bf]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-black">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Sell to Us?</h2>
              <p className="text-sm sm:text-base max-w-4xl mx-auto mb-8">
                With many cash home buyers available, why choose us? We are local, reliable, and dedicated to providing a stress-free selling experience.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="border border-black rounded-lg p-4">
                <div className="flex items-start">
                  <img
                    src="/tick-icon.png"
                    alt="Tick Icon"
                    className="w-4 h-4 mr-2 mt-1"
                  />
                  <p className="text-xs sm:text-sm">
                    <strong>If you don’t have the time, money, or desire</strong> to prepare your home for listing, we should have a chat.
                  </p>
                </div>
              </div>
              <div className="border border-black rounded-lg p-4">
                <div className="flex items-start">
                  <img
                    src="/tick-icon.png"
                    alt="Tick Icon"
                    className="w-4 h-4 mr-2 mt-1"
                  />
                  <p className="text-xs sm:text-sm">
                    <strong>We make it simple and easy</strong> to sell a home without the hassle of repairs, updates, or staging.
                  </p>
                </div>
              </div>
              <div className="border border-black rounded-lg p-4">
                <div className="flex items-start">
                  <img
                    src="/tick-icon.png"
                    alt="Tick Icon"
                    className="w-4 h-4 mr-2 mt-1"
                  />
                  <p className="text-xs sm:text-sm">
                    <strong>We’ve even bought homes sight unseen.</strong> Contact us or fill out the form to discuss your situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LEARN ABOUT CASH HOME BUYING ===================== */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Learn About Cash Home Buying</h2>
            <p className="text-sm sm:text-base max-w-3xl mb-8">
              Interested in selling your property for cash? Here are some benefits:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start">
                <img
                  src="/tick-icon.png"
                  alt="Tick Icon"
                  className="w-4 h-4 mr-2 mt-1"
                />
                <span>
                  We offer a contingency-free closing since we use our own funds.
                </span>
              </li>
              <li className="flex items-start">
                <img
                  src="/tick-icon.png"
                  alt="Tick Icon"
                  className="w-4 h-4 mr-2 mt-1"
                />
                <span>
                  We detail every cost upfront so there are no surprises.
                </span>
              </li>
              <li className="flex items-start">
                <img
                  src="/tick-icon.png"
                  alt="Tick Icon"
                  className="w-4 h-4 mr-2 mt-1"
                />
                <span>
                  Our process is tailored to your schedule, whether at the title company or remotely.
                </span>
              </li>
              <li className="flex items-start">
                <img
                  src="/tick-icon.png"
                  alt="Tick Icon"
                  className="w-4 h-4 mr-2 mt-1"
                />
                <span>
                  No cleaning required and zero fees charged at closing.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">For Cash vs. Using a Realtor</h2>
            <p className="text-sm sm:text-base max-w-3xl mb-8">
              Wondering about the difference between selling for cash and using a Realtor?
            </p>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start">
                <img
                  src="/tick-icon.png"
                  alt="Tick Icon"
                  className="w-4 h-4 mr-2 mt-1"
                />
                <span>
                  We buy homes directly, while Realtors act as middlemen.
                </span>
              </li>
              <li className="flex items-start">
                <img
                  src="/tick-icon.png"
                  alt="Tick Icon"
                  className="w-4 h-4 mr-2 mt-1"
                />
                <span>
                  No inspections or financing contingencies—cash offers only.
                </span>
              </li>
              <li className="flex items-start">
                <img
                  src="/tick-icon.png"
                  alt="Tick Icon"
                  className="w-4 h-4 mr-2 mt-1"
                />
                <span>
                  Zero fees and no commissions.
                </span>
              </li>
              <li className="flex items-start">
                <img
                  src="/tick-icon.png"
                  alt="Tick Icon"
                  className="w-4 h-4 mr-2 mt-1"
                />
                <span>
                  We specialize in cash sales; most realtors list homes for financed buyers.
                </span>
              </li>
            </ul>
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
