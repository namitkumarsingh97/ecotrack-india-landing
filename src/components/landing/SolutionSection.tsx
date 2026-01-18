import { useState } from "react";
import { FileText, TrendingUp, Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const layers = [
  {
    id: "report",
    icon: FileText,
    title: "Report",
    subtitle: "Generate & Export",
    description: "Audit & investor-ready reports generated in minutes",
    features: [
      "PDF & Excel exports",
      "BRSR-compliant templates",
      "Custom branding options",
      "Multi-year comparisons"
    ],
    color: "from-primary to-primary/80"
  },
  {
    id: "score",
    icon: TrendingUp,
    title: "Score",
    subtitle: "Calculate & Analyze",
    description: "Automatic ESG scoring aligned to Indian & global standards",
    features: [
      "Real-time score calculation",
      "Environmental (40%), Social (30%), Governance (30%)",
      "Industry benchmarks",
      "Trend analysis"
    ],
    color: "from-accent to-accent/80"
  },
  {
    id: "track",
    icon: Database,
    title: "Track",
    subtitle: "Collect & Monitor",
    description: "Environmental, Social & Governance data with guided inputs",
    features: [
      "Guided data entry forms",
      "Real-time metric tracking",
      "Compliance deadline alerts",
      "Historical data storage"
    ],
    color: "from-primary/60 to-accent/60"
  },
];

const SolutionSection = () => {
  const [activeLayer, setActiveLayer] = useState("report");

  return (
    <section className="section-padding bg-gradient-to-b from-background to-card">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            The Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            With 3-Layer Framework, Command Every Aspect of ESG Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three integrated layers that transform raw data into actionable insights and compliance-ready reports.
          </p>
        </div>

        {/* Interactive Layer Selector */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {layers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`flex-1 p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  activeLayer === layer.id
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                    <layer.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">{layer.subtitle}</div>
                    <div className="text-xl font-bold">{layer.title}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{layer.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Active Layer Details */}
        <div className="max-w-5xl mx-auto">
          {layers
            .filter((layer) => layer.id === activeLayer)
            .map((layer) => (
              <Card key={layer.id} className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
                <CardContent className="pt-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${layer.color} text-white mb-6`}>
                        <layer.icon className="w-4 h-4" />
                        <span className="text-sm font-semibold">{layer.title}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{layer.subtitle}</h3>
                      <p className="text-muted-foreground mb-6">{layer.description}</p>
                      <ul className="space-y-3">
                        {layer.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-background rounded-xl p-8 border border-border">
                      <div className={`w-full h-64 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                        <layer.icon className="w-24 h-24 text-white/20" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

export default SolutionSection;
