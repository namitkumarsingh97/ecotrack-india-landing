import { Factory, Ship, Briefcase, Building2, Shirt, Pill, Wheat, Laptop, FlaskConical, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    icon: Shirt,
    title: "Textiles & Apparel",
    description: "Export compliance, water tracking, supply chain transparency",
    color: "text-primary"
  },
  {
    icon: Pill,
    title: "Pharmaceuticals",
    description: "Hazardous waste, water quality, lab safety metrics",
    color: "text-primary"
  },
  {
    icon: Wheat,
    title: "Food Processing",
    description: "Farm-to-fork traceability, organic certification support",
    color: "text-primary"
  },
  {
    icon: Laptop,
    title: "IT/Software",
    description: "E-waste management, energy consumption, diversity metrics",
    color: "text-primary"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Factory compliance, energy efficiency, worker safety",
    color: "text-primary"
  },
  {
    icon: FlaskConical,
    title: "Chemicals",
    description: "Hazardous waste, emissions tracking, CPCB compliance",
    color: "text-primary"
  },
  {
    icon: Ship,
    title: "Exporters",
    description: "International ESG requirements, CSRD compliance",
    color: "text-primary"
  },
  {
    icon: Building2,
    title: "Enterprise Suppliers",
    description: "Client ESG requirements, supply chain transparency",
    color: "text-primary"
  },
];

const AudienceSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Brands, <span className="text-primary">Across All Industries</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Adaptable to every market, every channel, every business type. Industry-specific templates and metrics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className={`w-8 h-8 ${industry.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            If ESG shows up in your emails or tenders — <span className="font-semibold text-foreground">EcoTrack is for you.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8" asChild>
              <a href="/industries">Explore All Industries</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="/contact">Talk to Our Team</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
