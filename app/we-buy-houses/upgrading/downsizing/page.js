"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";

export default function UpgradingOrDownsizingPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Upgrading or Downsizing | PropertyMaco"
        description="Sell your home quickly when upgrading or downsizing."
      />
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Upgrading / Downsizing</h1>
          <p className="text-gray-700 mb-4">
            Whether you're moving to a bigger place or downsizing, a fast cash sale can 
            simplify your transition. Let us handle the details.
          </p>
          {/* Additional content or calls to action */}
        </div>
      </section>
    </AnimatedPage>
  );
}
