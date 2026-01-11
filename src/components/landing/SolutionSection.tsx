import { BarChart3, FileText, LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: BarChart3,
    title: "Track",
    description: "Environmental, Social & Governance data with guided inputs",
  },
  {
    icon: LineChart,
    title: "Score",
    description: "Automatic ESG scoring aligned to Indian & global standards",
  },
  {
    icon: FileText,
    title: "Report",
    description: "Audit & investor-ready reports generated in minutes",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
            The Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One Simple Platform to Stay ESG-Ready
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From data collection to compliance reports — everything in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-border"></div>
              )}
              
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
            <div className="text-sm font-semibold text-primary mb-2">Step {index + 1}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button size="lg" className="px-8">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
