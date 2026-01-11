import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-width">
        <div className="max-w-xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, SMB-Friendly Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            No hidden fees. No consultant costs. Just transparent pricing that works for growing businesses.
          </p>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="text-5xl font-bold text-primary mb-2">
              ₹1,999<span className="text-lg font-normal text-muted-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-6">Starting price • Billed annually</p>

            <div className="space-y-3 text-left mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">Full ESG tracking dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">Unlimited report exports</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">Year-on-year comparison</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">Email support</span>
              </div>
            </div>

            <Button size="lg" className="w-full py-6 text-base font-semibold">
              View All Plans
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
