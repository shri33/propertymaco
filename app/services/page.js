import AnimatedPage from "@/app/components/common/AnimatedPage";
import SEO from "@/app/components/common/SEO";
import ServiceCard from "@/app/components/common/ServiceCard";

export default function ServicesPage() {
  return (
    <AnimatedPage>
      <SEO
        title="We Buy Houses | PropertyMaco"
        description="Discover our services for selling your home quickly."
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">We Buy Houses</h1>
        <p className="mb-6">
          {/* "We specialize in helping homeowners with foreclosure, divorce..." */}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            title="Avoiding Foreclosure"
            description="Fast cash solutions to help you avoid foreclosure."
            link="/services/avoiding-foreclosure"
          />
          <ServiceCard
            title="Bankruptcy"
            description="Get relief by selling your home quickly."
            link="/services/bankruptcy"
          />
          <ServiceCard
            title="Behind on Mortgage"
            description="Avoid further debt by selling for cash."
            link="/services/behind-on-mortgage"
          />
          {/* ... Add more sub-services */}
        </div>
      </div>
    </AnimatedPage>
  );
}
