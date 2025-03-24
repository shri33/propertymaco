export default function FeatureSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            title="Fast Performance" 
            description="Optimized for speed and seamless experience." 
          />
          <FeatureCard 
            title="Secure & Reliable" 
            description="Top-notch security to protect your data." 
          />
          <FeatureCard 
            title="User-Friendly Design" 
            description="Easy to use and intuitive interface." 
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
