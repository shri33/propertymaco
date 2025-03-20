import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import ContactForm from "@/app/components/common/ContactForm";

export default function ContactPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Contact PropertyMaco"
        description="Reach out to us with any real estate questions."
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          {/* Insert PDF text: "We're here to help you navigate your real estate needs..." */}
        </p>
        <ContactForm />
        {/* "Why Contact Us?" section from PDF can go here */}
      </div>
    </AnimatedPage>
  );
}
