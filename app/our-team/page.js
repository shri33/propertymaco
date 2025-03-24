import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";

export default function TeamPage() {
  return (
    <AnimatedPage>
      <SEO
        title="Our Team | PropertyMaco"
        description="Meet the dedicated professionals behind PropertyMaco."
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">Our Team</h1>
        <p className="mb-6">
          At PropertyMaco, we believe in putting people first. Our dedicated team of
          real estate professionals is here to guide you every step of the way, ensuring
          a smooth and stress-free home selling experience.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Example: Team Member Cards */}
          <div className="bg-white shadow-md p-6 rounded text-center">
            <img
              src="/images/team.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">John Smith</h3>
            <p className="text-gray-600">Founder & CEO</p>
            <p className="mt-2 text-sm">
              John has over 15 years of experience in real estate and is passionate about
              helping homeowners find the best solutions for their situations.
            </p>
          </div>

          {/* Repeat for other team members */}
          {/* ... */}
        </div>
      </div>
    </AnimatedPage>
  );
}
