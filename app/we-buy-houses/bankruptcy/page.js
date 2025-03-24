"use client";
import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";

export default function BankruptcyPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Bankruptcy | PropertyMaco"
        description="Sell your house quickly to avoid or reduce the impact of bankruptcy."
      />
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Bankruptcy</h1>
          <p className="text-gray-700 mb-4">
            If you're considering or going through bankruptcy, selling your home quickly 
            can provide financial relief. PropertyMaco can help you navigate the process 
            with a fair cash offer.
          </p>
          {/* Additional content or calls to action */}
        </div>
      </section>
    </AnimatedPage>
  );
}
