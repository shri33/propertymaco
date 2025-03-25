import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";

const teamMembers = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    image: "/images/team1.jpg",
    description:
      "John has over 15 years of experience in real estate and is passionate about helping homeowners find the best solutions for their situations.",
  },
  {
    name: "Jane Doe",
    role: "Acquisitions Manager",
    image: "/images/team2.jpg",
    description:
      "Jane specializes in property acquisitions and ensures smooth transactions for all our clients.",
  },
  {
    name: "Mark Johnson",
    role: "Finance Coordinator",
    image: "/images/team3.jpg",
    description:
      "Mark manages financial operations and makes sure everything runs efficiently in the business.",
  },
];

const testimonials = [
  {
    name: "Sarah Williams",
    review: "PropertyMaco made selling my house so easy and stress-free. Highly recommend their team!",
  },
  {
    name: "David Brown",
    review: "A seamless process from start to finish. The team was professional and supportive throughout!",
  },
  {
    name: "Emily Clark",
    review: "Great experience working with PropertyMaco! They provided excellent service and guidance.",
  },
];

export default function TeamPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Our Team | PropertyMaco"
        description="Meet the dedicated professionals behind PropertyMaco."
      />
      <div className="container mx-auto py-10 px-4 bg-black text-white">
        <h1 className="text-3xl font-bold mb-4 text-center text-red-500">Our Team</h1>
        <p className="mb-6 text-center text-gray-300">
          At PropertyMaco, we believe in putting people first. Our dedicated team of
          real estate professionals is here to guide you every step of the way, ensuring
          a smooth and stress-free home selling experience.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500"
              />
              <h3 className="text-xl font-bold text-red-500">{member.name}</h3>
              <p className="text-blue-400 font-semibold">{member.role}</p>
              <p className="mt-2 text-sm text-gray-300">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Forms Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Left Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-red-500">Contact Us</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded bg-gray-700 text-white" />
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded bg-gray-700 text-white" />
              <textarea placeholder="Your Message" className="w-full p-2 border rounded h-24 bg-gray-700 text-white"></textarea>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
            </form>
          </div>

          {/* Right Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-red-500">Get in Touch</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-2 border rounded bg-gray-700 text-white" />
              <input type="email" placeholder="Email Address" className="w-full p-2 border rounded bg-gray-700 text-white" />
              <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded bg-gray-700 text-white" />
              <button className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-10 bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center text-red-500 mb-6">What Our Clients Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="text-gray-300 italic">"{testimonial.review}"</p>
                <h3 className="mt-2 font-bold text-blue-400">- {testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
