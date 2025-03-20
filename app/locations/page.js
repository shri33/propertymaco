import AnimatedPage from "@/components/common/AnimatedPage";
import SEO from "@/components/common/SEO";

export default function LocationsPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Locations | PropertyMaco"
        description="See the areas we serve."
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">Locations</h1>
        <p className="mb-6">
          PropertyMaco proudly serves homeowners across various regions. We are local
          experts who understand the market in each of these areas, ensuring fair and
          accurate offers.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">Miami, FL</h3>
            <p className="text-gray-700">
              We buy houses throughout Miami, from distressed properties to turnkey
              homes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Orlando, FL</h3>
            <p className="text-gray-700">
              Whether you're relocating or facing foreclosure, our Orlando team can help.
            </p>
          </div>
          {/* Add more locations as needed */}
        </div>
      </div>
    </AnimatedPage>
  );
}
