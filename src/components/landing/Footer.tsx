import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container-width">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src="/Logo.png" 
                alt="EcoTrack India" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-primary-foreground">EcoTrack India</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-sm mb-4">
              Sustainability, simplified for Indian businesses. Track, score, and report your ESG metrics with confidence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link to="/product" className="hover:text-primary-foreground transition-colors">Product Details</Link></li>
              <li><Link to="/industries" className="hover:text-primary-foreground transition-colors">Industries</Link></li>
              <li><Link to="/use-cases" className="hover:text-primary-foreground transition-colors">Use Cases</Link></li>
              <li><a href="/pricing" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/impact" className="hover:text-primary-foreground transition-colors">Business Impact</Link></li>
              <li><Link to="/blog" className="hover:text-primary-foreground transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-primary-foreground transition-colors">Careers</Link></li>
              <li><a href="/contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-4">Locations</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-primary-foreground">Gurugram</div>
                    <div className="text-sm">
                      Sector 56, Gurugram,<br />
                      Haryana, 122011
                    </div>
                  </div>
                </div>
              </li>
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
