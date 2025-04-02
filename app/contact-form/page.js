"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    property: "",
    hear: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "sending", "success", "error", or null

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
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 -z-20">
        <Image src="/hero.jpg" alt="Hero Background" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[#0086bf] opacity-90"></div>

      {/* Hero Content Container */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:space-x-4">
        {/* Left Column: Text */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="max-w-xl text-white text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              We'd love to hear from you. Send us a message and we'll get back to you soon.
            </p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full md:w-1/2 flex items-center justify-start">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            {status === "success" ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Thank you for contacting us.</h2>
                <p>We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                {/* Property Address */}
                <div>
                  <label htmlFor="property" className="block text-sm font-medium text-gray-700">
                    Property Address*
                  </label>
                  <input
                    type="text"
                    id="property"
                    value={formData.property}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                {/* Where did you hear about us? */}
                <div>
                  <label htmlFor="hear" className="block text-sm font-medium text-gray-700">
                    Where did you hear about us?*
                  </label>
                  <select
                    id="hear"
                    value={formData.hear}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Please select</option>
                    <option value="google">Google</option>
                    <option value="facebook">Facebook</option>
                    <option value="friend">Friend/Family</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {/* Message Section */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
                {status === "error" && (
                  <p className="text-red-600 text-center mt-2">
                    There was an error. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
