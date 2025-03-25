import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";

export default function PrivacyPolicyPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Privacy Policy | PropertyMaco"
        description="Learn how PropertyMaco handles your personal data."
      />
      <div className="container mx-auto py-10 px-4 text-white" style={{ backgroundColor: "#000000" }}>
        <div className="grid grid-cols-3 gap-4">
          {/* Contact Form on the Left */}
          <div className="col-span-1 bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Message</label>
                <textarea className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded">Send</button>
            </form>
          </div>
          
          {/* Main Content */}
          <div className="col-span-2">
            <h1 className="text-3xl font-bold mb-4 text-red-600">Privacy Policy</h1>
            <p className="mb-4">Last updated: March 20, 2024</p>
            <p className="mb-4">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
              information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p className="mb-4">
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
              and use of information in accordance with this Privacy Policy.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-red-600">Interpretation and Definitions</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Interpretation</h3>
            <p className="mb-4">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The
              following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Definitions</h3>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Account:</strong> A unique account created for You to access our Service.</li>
              <li><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</li>
              <li><strong>Company:</strong> ("We", "Us", or "Our") refers to The Friendly Home Buyer.</li>
              <li><strong>Cookies:</strong> Small files placed on Your device containing details of Your browsing history.</li>
              <li><strong>Country:</strong> Florida, United States.</li>
              <li><strong>Device:</strong> Any device that can access the Service, such as a computer or mobile phone.</li>
              <li><strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual.</li>
              <li><strong>Service:</strong> The Website.</li>
              <li><strong>Website:</strong> The Friendly Home Buyer, accessible from https://thefriendlyhomebuyer.com/</li>
              <li><strong>You:</strong> The individual or company using the Service.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-red-600">Use of Your Personal Data</h2>
            <p className="mb-4">We may use Personal Data for the following purposes:</p>
            <ul className="list-disc list-inside mb-4">
              <li>To provide and maintain our Service</li>
              <li>To manage Your Account</li>
              <li>To contact You with updates</li>
              <li>To provide You with marketing and promotional offers</li>
              <li>To manage requests and inquiries</li>
              <li>For business transfers and security compliance</li>
            </ul>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-10 p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">What Our Buyers Say</h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-lg">"The process was smooth and stress-free. Highly recommend!"</p>
              <p className="text-sm text-gray-400">- John Doe</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-lg">"Excellent service and professional team. Thank you!"</p>
              <p className="text-sm text-gray-400">- Sarah Smith</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
