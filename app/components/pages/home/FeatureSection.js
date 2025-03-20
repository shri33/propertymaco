import { motion } from "framer-motion";

const features = [
  {
    title: "Fast Cash Offers",
    description: "Close on your timeline with no hidden fees.",
  },
  {
    title: "No Repairs Needed",
    description: "We buy houses in any condition, saving you time & money.",
  },
  {
    title: "Local Expertise",
    description: "We understand the local market & provide fair offers.",
  },
];

export default function FeatureSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-gray-50"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose PropertyMaco?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white shadow p-6 rounded w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
