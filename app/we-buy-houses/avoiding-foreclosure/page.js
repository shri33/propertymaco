"use client"; // if you use Framer Motion or React hooks
import AnimatedPage from "@/app/components/common/AnimatedPage"; // adjust path as needed
import SEO from "@/app/components/common/SEO";

export default function AvoidingForeclosurePage() {
  return (
    <AnimatedPage>
      <SEO
        title="Avoiding Foreclosure | PropertyMaco"
        description="Learn how to avoid foreclosure by selling your house quickly."
      />
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Avoiding Foreclosure
          </h1>
          <p className="text-gray-700 mb-4">
            Facing foreclosure can be stressful. PropertyMaco offers a straightforward solution...
          </p>
          {/* Add more content or calls to action here */}
        </div>
      </section>
    </AnimatedPage>
  );
}
