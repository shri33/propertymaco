export default function TestimonialCard({ name, testimonial }) {
    return (
      <div className="bg-white rounded shadow-md p-6 text-center">
        <p className="italic text-gray-800 mb-4">"{testimonial}"</p>
        <h4 className="font-bold text-lg">{name}</h4>
      </div>
    );
  }
  