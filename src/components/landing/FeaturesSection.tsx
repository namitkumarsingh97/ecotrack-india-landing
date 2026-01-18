import { 
  MapPin, 
  ClipboardList, 
  Calculator, 
  Download, 
  TrendingUp, 
  Shield,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: MapPin,
    title: "India-Specific Metrics",
    description: "Built for Indian regulatory requirements and industry standards",
  },
  {
    icon: ClipboardList,
    title: "Guided Data Input",
    description: "Simple forms that anyone on your team can fill without training",
  },
  {
    icon: Calculator,
    title: "Transparent Scoring",
    description: "Understand exactly how your ESG score is calculated",
  },
  {
    icon: Download,
    title: "One-Click Exports",
    description: "Generate PDF & Excel reports ready for audits and investors",
  },
  {
    icon: TrendingUp,
    title: "Year-on-Year Tracking",
    description: "Monitor progress and show improvement over time",
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Aligned with BRSR, GRI, and other major frameworks",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for ESG Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built for Indian SMBs who need results, not complexity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button size="lg" className="px-8" asChild>
            <a href="/product">Explore All Features</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
