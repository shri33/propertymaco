import TestimonialCard from "@/app/components/common/TestimonialCard";

const testimonialsData = [
  {
    name: "Anya Petrova",
    testimonial:
      "PropertyMaco made selling my home fast and hassle-free. They were so compassionate!",
  },
  {
    name: "Jamal Khan",
    testimonial:
      "They gave me a fair offer, and I didn't have to do a thing. Super professional and friendly.",
  },
  // ... more testimonials, paraphrased from your PDF
];

export default function TestimonialsList() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {testimonialsData.map((item, idx) => (
        <TestimonialCard key={idx} name={item.name} testimonial={item.testimonial} />
      ))}
    </div>
  );
}
