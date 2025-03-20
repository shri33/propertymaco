import AnimatedPage from "@/components/common/AnimatedPage";
import SEO from "@/components/common/SEO";

export default function PrivacyPolicyPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Privacy Policy | PropertyMaco"
        description="Learn how PropertyMaco handles your personal data."
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          {/* Insert your detailed privacy policy text. */}
        </p>
      </div>
    </AnimatedPage>
  );
}
