import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-green-light border border-accent/20 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-sm font-medium text-accent">India's First SMB-Focused ESG Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            ESG Reporting Made Simple for{" "}
            <span className="text-primary">Indian SMBs</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Track sustainability metrics, calculate ESG scores, and generate compliance-ready reports — without consultants.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base font-semibold">
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-base">
              View Sample Report
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>India-compliant</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 relative animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="bg-card rounded-xl shadow-2xl border border-border overflow-hidden max-w-5xl mx-auto">
            <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
              <div className="w-3 h-3 rounded-full bg-accent/60"></div>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* ESG Score Card */}
                <div className="bg-background rounded-lg p-6 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Overall ESG Score</p>
                  <div className="text-4xl font-bold text-primary mb-2">78</div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-primary rounded-full"></div>
                  </div>
                </div>
                {/* Environmental */}
                <div className="bg-background rounded-lg p-6 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Environmental</p>
                  <div className="text-4xl font-bold text-accent mb-2">82</div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[82%] bg-accent rounded-full"></div>
                  </div>
                </div>
                {/* Social */}
                <div className="bg-background rounded-lg p-6 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Social & Governance</p>
                  <div className="text-4xl font-bold text-eco-blue mb-2">74</div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[74%] bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
