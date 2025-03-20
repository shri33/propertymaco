import TestimonialsList from "@/components/pages/testimonials/TestimonialsList";

export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
        <TestimonialsList />
      </div>
    </section>
  );
}
