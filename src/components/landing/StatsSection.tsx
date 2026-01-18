import { Building2, FileText, TrendingUp, Shield, CheckCircle2 } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "9+",
    label: "Industries Supported",
    description: "From textiles to tech, we cover all major sectors"
  },
  {
    icon: FileText,
    value: "BRSR",
    label: "Compliance Frameworks",
    description: "Aligned with Indian & global standards"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Cost Savings",
    description: "Cheaper than Big-4 consultants"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Automated Tracking",
    description: "Real-time compliance monitoring"
  }
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Platform Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built to Scale with Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-ready platform designed for Indian SMBs who are ready to grow
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Scalable Architecture</h3>
                <p className="text-sm text-muted-foreground">
                  From startup to enterprise, our platform grows with you without performance issues
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Data Security</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade encryption and compliance with Indian data protection standards
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Easy Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless integration with your existing systems and workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

