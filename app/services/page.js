import AnimatedPage from "@/app/components/common/AnimatedPage";
import ServiceCard from "@/app/components/common/ServiceCard";
import CTA from "@/app/components/common/CTA";

export default function ServicesPage() {
  const services = [
    {
      title: "Avoiding Foreclosure",
      description: "Get cash for your home before foreclosure proceedings begin.",
      link: "/services/avoiding-foreclosure"
    },
    {
      title: "Bankruptcy",
      description: "Selling your home during bankruptcy can help relieve financial stress.",
      link: "/services/bankruptcy"
    },
    {
      title: "Behind on Mortgage",
      description: "Catch up on payments or sell your home before it's too late.",
      link: "/services/behind-on-mortgage"
    },
    {
      title: "Divorce or Separation",
      description: "Quick, fair solutions when dividing property in a divorce.",
      link: "/services/divorce-or-separation"
    },
    {
      title: "Relocation",
      description: "Need to move quickly? We can help with a fast sale.",
      link: "/services/relocation"
    },
    {
      title: "Upgrading or Downsizing",
      description: "Ready for a change? Sell your current home fast.",
      link: "/services/upgrading-or-downsizing"
    }
  ];

  return (
    <AnimatedPage>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-accent">We Buy Houses</h1>
        <p className="mb-8 text-lg max-w-3xl">
          We specialize in helping homeowners in difficult situations sell their 
          homes quickly for cash. No matter the condition of your property or your 
          circumstances, we can provide a fair offer.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
        
        <CTA />
      </div>
    </AnimatedPage>
  );
}