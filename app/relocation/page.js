"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";

export default function RelocationPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Relocation | PropertyMaco"
        description="Moving? Sell your house quickly and relocate on your schedule."
      />
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Relocation</h1>
          <p className="text-gray-700 mb-4">
            Need to move quickly? PropertyMaco offers fast, flexible closings so you can 
            relocate on your timeline—no repairs or agent fees required.
          </p>
          {/* Additional content or calls to action */}
        </div>
      </section>
    </AnimatedPage>
  );
}
