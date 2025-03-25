"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";

export default function BehindOnMortgagePage() {
  return (
    <AnimatedPage>
      <SEO
        title="Behind on Mortgage | PropertyMaco"
        description="Facing missed mortgage payments? Sell your house fast for cash."
      />
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Behind on Mortgage</h1>
          <p className="text-gray-700 mb-4">
            If you're struggling to keep up with mortgage payments, selling your home 
            quickly can prevent foreclosure and further credit damage. We can help.
          </p>
          {/* Additional content or calls to action */}
        </div>
      </section>
    </AnimatedPage>
  );
}
