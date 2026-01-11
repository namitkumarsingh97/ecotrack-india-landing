import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
            <Leaf className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get ESG-Ready Before It's Mandatory
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Start tracking sustainability the smart way. Join Indian businesses already preparing for the future.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="px-8 py-6 text-base font-semibold"
          >
            Request Early Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
