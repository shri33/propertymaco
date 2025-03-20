import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";

export default function FAQPage() {
  return (
    <AnimatedPage>
      <SEO
        title="FAQ | PropertyMaco"
        description="Frequently asked questions about selling your home."
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">FAQ</h1>
        <ul className="space-y-4">
          {/* Insert Q&As from PDF, paraphrased */}
          <li>
            <strong>My house needs a lot of repairs. Will you still buy it?</strong><br />
            Yes! We buy houses in any condition...
          </li>
          {/* etc. */}
        </ul>
      </div>
    </AnimatedPage>
  );
}
