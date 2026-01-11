import { Factory, Ship, Briefcase, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Factory,
    title: "Manufacturers",
    description: "Track emissions, waste, and energy across production units",
  },
  {
    icon: Ship,
    title: "Exporters",
    description: "Meet international ESG requirements for global trade",
  },
  {
    icon: Briefcase,
    title: "Service-Based SMBs",
    description: "Report on social metrics and governance practices",
  },
  {
    icon: Building2,
    title: "Enterprise Suppliers",
    description: "Fulfill ESG requirements from large corporate clients",
  },
];

const AudienceSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
            Who It's For
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Indian Businesses Like Yours
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border text-center hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{audience.title}</h3>
              <p className="text-muted-foreground text-sm">{audience.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground mt-10 max-w-2xl mx-auto">
          If ESG shows up in your emails or tenders — <span className="font-semibold text-foreground">EcoTrack is for you.</span>
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button size="lg" className="px-8">
            Check If You Qualify
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="ghost" size="lg" className="px-8 text-primary">
            Talk to Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
