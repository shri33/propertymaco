// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16">
        {/* Semi-Transparent Teal Container */}
        <div className="bg-[#0086bf]/70 max-w-7xl mx-auto p-8 rounded-lg md:flex md:items-start md:justify-between">
          {/* LEFT COLUMN: Text */}
          <div className="md:w-1/2 text-white md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              WE BUY HOUSES IN <span className="block mt-2">FLORIDA</span>
            </h1>
            <p className="text-xl mb-4">
              Sell your house AS-IS. No fees. Any condition.
            </p>
            <p className="mb-4">
              We buy houses and properties in tough situations, like: foreclosure, divorce,
              probate, behind on payments, bad tenants, and more.
            </p>
            <div className="flex items-center mb-4">
              <img
                src="/bbb-white.png"
                alt="BBB Accredited"
                className="h-10 w-auto"
              />
              <span className="ml-2 font-semibold">BBB Accredited</span>
            </div>
            <Link href="/contact">
              <span className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                GET AN OFFER
              </span>
            </Link>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-gray-800">
            <h2 className="text-2xl font-bold text-center mb-4">
              GET YOUR CASH OFFER!
            </h2>
            <form className="space-y-4">
              {/* First/Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    required
                  />
                </div>
              </div>
              {/* Phone/Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    required
                  />
                </div>
              </div>
              {/* Property Address */}
              <div>
                <label
                  htmlFor="property"
                  className="block text-sm font-medium text-gray-700"
                >
                  Property Address*
                </label>
                <input
                  type="text"
                  id="property"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              {/* Where did you hear about us? */}
              <div>
                <label
                  htmlFor="hear"
                  className="block text-sm font-medium text-gray-700"
                >
                  Where did you hear about us?*
                </label>
                <select
                  id="hear"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                Get Your Cash Offer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* As Seen On Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-700 mb-6">AS SEEN ON:</h2>
          <div className="flex justify-center items-center space-x-8">
            <img src="/FOX_logo.svg" alt="Fox" className="h-13" />
            <img src="/CBS_logo.svg" alt="CBS" className="h-13" />
            <img src="/ABC_logo.svg" alt="ABC" className="h-18" />
            <img src="/NBC_logo.svg" alt="NBC" className="h-20" />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                WE ARE A FLORIDA CASH HOME BUYER YOU CAN TRUST
              </h2>
              <p className="text-gray-700 mb-6">
                PropertyMaco is a professional home buying company. We work with homeowners
                to provide fast and fair cash offers for their home. We don't care about the
                condition of your property — we want to buy it no matter what state it's in.
                No repairs, no real estate agent fees, no inspections, no important payments
                needed, or what your credit score is like.
              </p>
              <Link href="/contact">
                <span className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                  Get an Offer
                </span>
              </Link>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <img
                src="/images/team.jpg"
                alt="Our Team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-4">A</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                We'll make your comfort a priority.
              </h3>
              <p className="text-gray-700">
                We'll keep the sale process as stress-free as possible. When you request a
                no-obligation cash offer from PropertyMaco through our website, we'll guide
                you through each step.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-4">B</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Your offer is 100% unique to you.
              </h3>
              <p className="text-gray-700">
                Each offer reflects your specific needs and represents the best possible
                value for your property, taking all factors into appropriate selling at
                their value.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-gray-600 mb-4">C</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                We proudly back all offers.
              </h3>
              <p className="text-gray-700">
                Our company backs every offer. We guarantee you a smooth property
                transaction process. This means no surprises for you, just as we promised
                at the very beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            THE PROPERTYMACO PROCESS
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="font-bold text-xl text-blue-600 mb-2">Step 1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">CALL US & CHAT</h3>
              <p className="text-gray-700">
                Tell us about your property and we'll make a fast cash offer on the phone,
                fill out our online form, or text us directly.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="font-bold text-xl text-blue-600 mb-2">Step 2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                WE PRESENT AN OFFER
              </h3>
              <p className="text-gray-700">
                We'll make you a fair cash offer on your property.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="font-bold text-xl text-blue-600 mb-2">Step 3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                CLOSE AND GET PAID
              </h3>
              <p className="text-gray-700">
                Choose the closing date that works for you, and we'll handle the rest. Get
                your cash in as little as 7 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            VIDEO REVIEWS
          </h2>
          <p className="text-center text-gray-700 mb-8">
            We are PropertyMaco, and we're proud of the extraordinary things our clients say
            about their experience selling to us. These are truly real-life testimonials,
            and we truly proudly KC to verify these are definitely no scripts but warm
            heartfelt reviews.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-96"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="PropertyMaco Client Testimonials"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Sell Your House Fast?</h2>
          <p className="text-xl mb-8">Get your cash offer today!</p>
          <Link href="/contact">
            <span className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md text-xl transition duration-300">
              GET YOUR CASH OFFER
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}