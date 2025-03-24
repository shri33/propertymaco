"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";

export default function DivorceOrSeparationPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Divorce or Separation | PropertyMaco"
        description="Sell your house quickly to simplify divorce or separation."
      />
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Divorce / Separation</h1>
          <p className="text-gray-700 mb-4">
            A fast, fair cash sale can ease the stress of dividing assets. PropertyMaco 
            provides a quick solution during a difficult time.
          </p>
          {/* Additional content or calls to action */}
        </div>
      </section>
    </AnimatedPage>
  );
}
