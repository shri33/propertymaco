import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import TestimonialsList from "@/app/components/pages/home/TestimonialsList";

export default function TestimonialsPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Testimonials | PropertyMaco"
        description="Hear from our satisfied clients."
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">Testimonials</h1>
        <TestimonialsList />
      </div>
    </AnimatedPage>
  );
}
