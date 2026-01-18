import { TrendingUp, Target, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const transformations = [
  {
    icon: TrendingUp,
    metric: "30%",
    title: "Faster Compliance",
    description: "Generate reports in days instead of weeks with automated scoring"
  },
  {
    icon: Target,
    metric: "95%",
    title: "Cost Reduction",
    description: "Save compared to Big-4 consultants while getting better results"
  },
  {
    icon: Zap,
    metric: "100%",
    title: "Automated Tracking",
    description: "Real-time monitoring of compliance deadlines and requirements"
  },
  {
    icon: Award,
    metric: "24/7",
    title: "Always Available",
    description: "Access your ESG data and generate reports anytime, anywhere"
  }
];

const TransformationSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
            The Transformation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See What <span className="text-primary">Growth Really Looks Like</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's how EcoTrack can transform your ESG compliance journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {transformations.map((item, index) => (
            <Card key={index} className="border-2 hover:border-primary/30 transition-all text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.metric}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold mb-3">Before EcoTrack</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Manual spreadsheet tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Expensive consultant fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Weeks to generate reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">×</span>
                  <span>Uncertain compliance status</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20">
              <h3 className="text-xl font-semibold mb-3 text-primary">With EcoTrack</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Automated data collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Affordable monthly pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Reports in minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Real-time compliance tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;

