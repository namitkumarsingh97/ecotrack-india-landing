import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container-width">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Leaf className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">EcoTrack India</span>
            </a>
            <p className="text-primary-foreground/70 max-w-sm">
              Sustainability, simplified for Indian businesses. Track, score, and report your ESG metrics with confidence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#features" className="hover:text-primary-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sample Report</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} EcoTrack India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
