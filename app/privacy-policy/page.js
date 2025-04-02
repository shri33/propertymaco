"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import Image from "next/image";
import Link from "next/link";

export default function InterpretationDefinitionsPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Privacy Policy | PropertyMaco"
        description="Learn about key legal regulations and requirements for websites to ensure compliance."
      />

      {/* HERO SECTION */}
      <section className="relative h-[70vh]">
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
        {/* Hero Text Content */}
        <div className="container mx-auto relative z-20 flex flex-col justify-center items-center sm:items-start h-full text-center sm:text-left px-4 sm:px-8 md:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 max-w-2xl">
            Understand the key legal regulations and requirements for your website.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="bg-white text-black py-10 px-4 md:px-20">
        <section>
          <p className="mb-4">
            To ensure legal compliance, websites must adhere to regulations concerning data privacy (like GDPR and CCPA), accessibility (ADA, WCAG), copyright, security, and cookie consent, among others, including having a privacy policy, terms of service, and potentially a cookie policy.
          </p>
          <p className="mb-4 font-bold">
            Here's a more detailed breakdown of key regulations and requirements:
          </p>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Data Privacy and Collection:</strong>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>GDPR (General Data Protection Regulation):</strong> If your website processes data of individuals in the European Union (EU), you must comply with GDPR, which includes obtaining explicit consent for data processing, providing a privacy policy, and implementing security measures.
                </li>
                <li>
                  <strong>CCPA (California Consumer Privacy Act):</strong> If your website collects data from California residents, you need to comply with CCPA, which grants consumers rights to access, delete, and opt-out of the sale of their personal information.
                </li>
                <li>
                  <strong>COPPA (Children's Online Privacy Protection Act):</strong> If your website collects data from children under 13, you must comply with COPPA, which requires parental consent for data collection and provides specific rules for protecting children's data.
                </li>
                <li>
                  <strong>Privacy Policy:</strong> Every website should have a clear and easy-to-understand privacy policy outlining how user data is collected, used, and protected.
                </li>
                <li>
                  <strong>Transparency and Consent:</strong> Be transparent about data collection practices and obtain explicit consent for using cookies and other tracking technologies.
                </li>
                <li>
                  <strong>Data Security:</strong> Implement robust security measures to protect user data from unauthorized access, theft, or misuse.
                </li>
              </ul>
            </li>
            <li>
              <strong>Accessibility:</strong>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>ADA (Americans with Disabilities Act):</strong> Your website must be accessible to people with disabilities, including those who use assistive technologies.
                </li>
                <li>
                  <strong>WCAG (Web Content Accessibility Guidelines):</strong> Follow WCAG guidelines to ensure your website is accessible to people with disabilities.
                </li>
              </ul>
            </li>
            <li>
              <strong>Copyright and Content:</strong>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>Copyright Notice:</strong> Include a copyright notice to protect your intellectual property.
                </li>
                <li>
                  <strong>Digital Millennium Copyright Act (DMCA):</strong> If your website hosts user-generated content, have a DMCA policy in place to address copyright infringement claims.
                </li>
                <li>
                  <strong>Liability for Third-Party Content:</strong> Be aware of your potential liability for third-party content and consider measures to monitor and remove infringing content.
                </li>
              </ul>
            </li>
            <li>
              <strong>Cookie Consent:</strong>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>ePrivacy Directive:</strong> Obtain user consent before placing cookies on their devices.
                </li>
                <li>
                  <strong>Cookie Policy:</strong> Have a clear and easy-to-understand cookie policy that explains how cookies are used and allows users to manage their preferences.
                </li>
              </ul>
            </li>
            <li>
              <strong>Other Important Considerations:</strong>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>Terms of Service:</strong> Provide clear and concise terms of service that outline the rules and guidelines for using your website.
                </li>
                <li>
                  <strong>Disclaimers:</strong> Include disclaimers to limit your liability for certain content or actions on your website.
                </li>
                <li>
                  <strong>Acceptable Use Policy:</strong> Consider an acceptable use policy that outlines prohibited activities on your website.
                </li>
                <li>
                  <strong>Security Measures:</strong> Implement appropriate security measures to protect your website and user data from cyber threats.
                </li>
                <li>
                  <strong>Contact Information:</strong> Provide clear contact details for users to reach you with questions or concerns.
                </li>
                <li>
                  <strong>Legal Disclosures:</strong> Include any legally required disclosures, such as company registration information or VAT number.
                </li>
                <li>
                  <strong>Update Notices:</strong> Inform users about changes to your privacy policy or other legal policies.
                </li>
                <li>
                  <strong>Accessibility Statement:</strong> Include a statement explaining how your website is designed to be accessible to people with disabilities.
                </li>
              </ul>
            </li>
          </ol>
        </section>
      </div>
    </AnimatedPage>
  );
}

