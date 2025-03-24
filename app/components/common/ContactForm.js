"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    howCanWeHelp: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded w-full text-gray-700"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded w-full text-gray-700"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded w-full text-gray-700"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded w-full text-gray-700"
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded w-full text-gray-700"
      />

      <textarea
        name="howCanWeHelp"
        placeholder="How can we help?"
        value={formData.howCanWeHelp}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded w-full text-gray-700"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 w-full"
      >
        Submit
      </button>

      {submitted && (
        <p className="text-green-600 text-center">Thank you! Your message has been sent.</p>
      )}
    </form>
  );
}
