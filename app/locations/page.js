"use client";

import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";

export default function LocationsPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Locations | PropertyMaco"
        description="See the areas we serve all over the USA."
      />
      <div
        className="container mx-auto py-10 px-4"
        style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
      >
        <h1 className="text-3xl font-bold mb-4" style={{ color: "#FF0000" }}>
          Locations Across the USA
        </h1>
        <p className="mb-6">
          PropertyMaco proudly serves homeowners in every corner of the United States. Whether you’re located on the East Coast, West Coast, or anywhere in between, our dedicated team is ready to simplify your home-selling process with fair, fast, and reliable transactions.
        </p>

        {/* Blue accent divider representing the arc and swoosh */}
        <div className="mb-8">
          <hr className="border-t-2" style={{ borderColor: "#2A9DF4" }} />
        </div>

        {/* List of Major Regions */}
        <div className="space-y-8">
          {/* Northeast */}
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#FF0000" }}>
              Northeast
            </h2>
            <ul className="list-disc list-inside">
              <li>New York City, NY</li>
              <li>Boston, MA</li>
              <li>Philadelphia, PA</li>
              <li>Washington, D.C.</li>
            </ul>
          </div>
          {/* Southeast */}
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#FF0000" }}>
              Southeast
            </h2>
            <ul className="list-disc list-inside">
              <li>Miami, FL</li>
              <li>Orlando, FL</li>
              <li>Atlanta, GA</li>
              <li>Charlotte, NC</li>
            </ul>
          </div>
          {/* Midwest */}
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#FF0000" }}>
              Midwest
            </h2>
            <ul className="list-disc list-inside">
              <li>Chicago, IL</li>
              <li>Detroit, MI</li>
              <li>Minneapolis, MN</li>
              <li>Kansas City, MO</li>
            </ul>
          </div>
          {/* Southwest */}
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#FF0000" }}>
              Southwest
            </h2>
            <ul className="list-disc list-inside">
              <li>Houston, TX</li>
              <li>Dallas, TX</li>
              <li>Phoenix, AZ</li>
              <li>San Antonio, TX</li>
            </ul>
          </div>
          {/* West */}
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#FF0000" }}>
              West
            </h2>
            <ul className="list-disc list-inside">
              <li>Los Angeles, CA</li>
              <li>San Francisco, CA</li>
              <li>Seattle, WA</li>
              <li>Portland, OR</li>
            </ul>
          </div>
        </div>

        {/* "Get Your Cash Offer" Form Section */}
        <div className="mt-10 p-6 rounded-lg" style={{ backgroundColor: "#2A9DF4" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
            Get Your Cash Offer!
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name (Required)"
                className="p-2 rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="Last Name (Required)"
                className="p-2 rounded w-full"
                required
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number (Required)"
              className="p-2 rounded w-full"
              required
            />
            <input
              type="email"
              placeholder="Email (Required)"
              className="p-2 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Property Address (Required)"
              className="p-2 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Enter a location"
              className="p-2 rounded w-full"
            />
            <select className="p-2 rounded w-full" required>
              <option value="">
                Where did you hear about us? (Required)
              </option>
              <option value="google">Google</option>
              <option value="friend">Friend</option>
              <option value="advertisement">Advertisement</option>
            </select>
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Get an Offer
            </button>
          </form>
          <div className="mt-4 text-center" style={{ color: "#FFFFFF" }}>
            <p>
              Call us now: <strong>(888) 713-9158</strong>
            </p>
            <p>Open 24 Hours</p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
