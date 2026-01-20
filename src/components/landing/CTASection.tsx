import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 border border-background/30 mb-6">
            <img 
              src="/Logo.png" 
              alt="EcoTrack India" 
              className="h-5 w-auto"
            />
            <span className="text-sm font-medium">Ready to Get Started?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Make Every Compliance Decision <span className="text-background">Count For Growth</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            The future belongs to businesses that move faster, think smarter, and execute with absolute clarity. Start your ESG compliance journey today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
              asChild
            >
              <a href="/contact">Schedule Your Demo</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-base font-semibold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-background/10"
              asChild
            >
              <a href="/contact">Start Free Trial</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
