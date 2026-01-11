import { Leaf, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#solution", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "Who It's For" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <Leaf className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">EcoTrack India</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">
              Login
            </Button>
            <Button variant="outline">
              Book a Demo
            </Button>
            <Button>
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-foreground hover:text-primary transition-colors text-base font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <Button variant="ghost" className="justify-start">
                    Login
                  </Button>
                  <Button variant="outline">
                    Book a Demo
                  </Button>
                  <Button>
                    Get Started Free
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
