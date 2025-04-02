"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    propertyAddress: "",
    whereHear: "",
  });

  const [status, setStatus] = useState(""); // "sending", "success", or "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        // Optionally clear the form
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          propertyAddress: "",
          whereHear: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section className="relative w-full bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT COLUMN: Text and Logo */}
          <div className="md:w-1/2 flex flex-col items-center justify-center gap-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold">
                <span className="text-white">PROPERTY</span>{" "}
                <span className="text-red-600">MACO</span>
              </h2>
              <p className="mt-4">
                “I need to sell my house fast”, “I need to sell my house cash,” or even “should I sell my house cash” are all common thoughts for our homeowners. Selling a house can seem overwhelming—just take the first step and start with a chat. Either fill out the webform or call us at{" "}
                <a href="tel:(239) 990-5070" className="underline font-semibold">
                  (239) 990-5070
                </a>.
              </p>
            </div>
            <img
              src="/bbb-white.png"
              alt="BBB Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="md:w-1/2 bg-white text-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-2xl font-bold mb-4 text-center">
              GET YOUR CASH OFFER!
            </h3>
            {status === "sending" && (
              <p className="text-center text-blue-600">Sending...</p>
            )}
            {status === "success" && (
              <p className="text-center text-green-600">
                Thank you for contacting us!
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-600">
                There was an error. Please try again.
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold mb-1">
                  First Name (Required)
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold mb-1">
                  Last Name (Required)
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-1">
                  Phone Number (Required)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">
                  Email (Required)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="propertyAddress" className="block text-sm font-semibold mb-1">
                  Property Address (Required)
                </label>
                <input
                  type="text"
                  id="propertyAddress"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  placeholder="Enter a location"
                  required
                />
              </div>
              <div>
                <label htmlFor="whereHear" className="block text-sm font-semibold mb-1">
                  Where did you hear about us? (Required)
                </label>
                <select
                  id="whereHear"
                  name="whereHear"
                  value={formData.whereHear}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                >
                  <option value="">Please Choose An Option</option>
                  <option value="Google">Google</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Friend">Friend/Family</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0086bf] hover:bg-[#002a9d] text-white font-bold py-2 rounded mt-2"
              >
                Get Your Cash Offer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
