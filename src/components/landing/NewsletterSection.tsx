import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const NewsletterSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 border border-background/30 mb-6">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Stay Updated</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get ESG Insights & Updates
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for ESG compliance tips, industry insights, regulatory updates, and platform announcements.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-background/10 border-background/30 text-foreground placeholder:text-foreground/60 focus-visible:ring-background"
              required
            />
            <Button
              type="submit"
              size="lg"
              variant="secondary"
              className="px-8 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm opacity-80 mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>No spam, unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Weekly updates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Free resources</span>
            </div>
          </div>
          <p className="text-sm opacity-70">
            Or <Link to="/blog" className="underline hover:opacity-100 transition-opacity">read our latest blog posts</Link> for instant insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

