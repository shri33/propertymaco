"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
      <div className="flex gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
          className="border p-2 w-1/2"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
          className="border p-2 w-1/2"
        />
      </div>
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="address"
        placeholder="Property Address"
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <textarea
        name="message"
        placeholder="Message (Optional)"
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:opacity-90"
      >
        Submit
      </button>
      {submitted && <p className="text-green-600">Thank you! We'll be in touch soon.</p>}
    </form>
  );
}
