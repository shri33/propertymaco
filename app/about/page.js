import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import MissionSection from "@/app/MissionSection";

export default function AboutPage() {
  return (
    <AnimatedPage>
      <SEO
        title="About PropertyMaco"
        description="Learn how we help homeowners sell quickly and hassle-free."
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">About PropertyMaco</h1>
        <p className="mb-4">
          {/* Insert your PDF text about the company, paraphrased. */}
        </p>
        <MissionSection />
      </div>
    </AnimatedPage>
  );
}
