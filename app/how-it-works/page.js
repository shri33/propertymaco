import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";

export default function HowItWorksPage() {
  return (
    <AnimatedPage>
      <SEO
        title="How It Works | PropertyMaco"
        description="Learn how our simple process helps you sell your home fast."
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">How It Works</h1>
        <p>
          {/* Outline your step-by-step process from PDF */}
        </p>
      </div>
    </AnimatedPage>
  );
}
