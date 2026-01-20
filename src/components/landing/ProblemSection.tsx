import { AlertTriangle, FileWarning, IndianRupee, X } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    text: "ESG demands from large enterprise clients",
  },
  {
    icon: AlertTriangle,
    text: "Export & vendor compliance pressure",
  },
  {
    icon: IndianRupee,
    text: "Expensive consultants & confusing frameworks",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-destructive uppercase tracking-wide mb-4">
              The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ESG Is No Longer Optional
            </h2>
            <div className="space-y-4 mb-8">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-lg text-muted-foreground pt-2">
                    {problem.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg font-semibold text-foreground border-l-4 border-destructive pl-4">
              Most Indian SMBs are unprepared - and losing opportunities.
            </p>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="text-muted-foreground">
                    Spreadsheet chaos
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="text-muted-foreground">
                    Manual data collection
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="text-muted-foreground">
                    Inconsistent reporting
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="text-muted-foreground">
                    Missed compliance deadlines
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
