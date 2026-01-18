import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isActive = (href: string) => location.pathname === href;
  const isActiveInPath = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/Logo_No_BG.png" 
              alt="EcoTrack India" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-foreground hidden sm:inline-block">
              EcoTrack India
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/") && location.pathname === "/"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("product")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <DropdownMenu open={openDropdown === "product"} onOpenChange={(open) => !open && setOpenDropdown(null)}>
                <DropdownMenuTrigger
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    isActiveInPath("/product") || isActiveInPath("/industries") || isActiveInPath("/use-cases")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Product
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48" onMouseEnter={() => setOpenDropdown("product")} onMouseLeave={() => setOpenDropdown(null)}>
                  <DropdownMenuItem asChild>
                    <Link to="/product">Product Details</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/industries">Industries</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/use-cases">Use Cases</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/pricing">Pricing</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <DropdownMenu open={openDropdown === "resources"} onOpenChange={(open) => !open && setOpenDropdown(null)}>
                <DropdownMenuTrigger
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    isActiveInPath("/impact") || isActiveInPath("/blog")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Resources
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48" onMouseEnter={() => setOpenDropdown("resources")} onMouseLeave={() => setOpenDropdown(null)}>
                  <DropdownMenuItem asChild>
                    <Link to="/impact">Business Impact</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/blog">Blog</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("company")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <DropdownMenu open={openDropdown === "company"} onOpenChange={(open) => !open && setOpenDropdown(null)}>
                <DropdownMenuTrigger
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    isActiveInPath("/about") || isActiveInPath("/careers")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Company
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48" onMouseEnter={() => setOpenDropdown("company")} onMouseLeave={() => setOpenDropdown(null)}>
                  <DropdownMenuItem asChild>
                    <Link to="/about">About Us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/careers">Careers</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link to="/pricing">Pricing</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] overflow-y-auto">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                <nav className="flex flex-col gap-1">
                  <Link
                    to="/"
                    className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive("/") && location.pathname === "/"
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Home
                  </Link>
                  
                  <div className="px-3 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Product
                  </div>
                  <Link
                    to="/product"
                    className={`px-6 py-2 rounded-md text-base transition-colors ${
                      isActive("/product")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Product Details
                  </Link>
                  <Link
                    to="/industries"
                    className={`px-6 py-2 rounded-md text-base transition-colors ${
                      isActive("/industries")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Industries
                  </Link>
                  <Link
                    to="/use-cases"
                    className={`px-6 py-2 rounded-md text-base transition-colors ${
                      isActive("/use-cases")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Use Cases
                  </Link>
                  <Link
                    to="/pricing"
                    className={`px-6 py-2 rounded-md text-base transition-colors ${
                      isActive("/pricing")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Pricing
                  </Link>

                  <div className="px-3 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide mt-4">
                    Resources
                  </div>
                  <Link
                    to="/impact"
                    className={`px-6 py-2 rounded-md text-base transition-colors ${
                      isActive("/impact")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Business Impact
                  </Link>
                  <Link
                    to="/blog"
                    className={`px-6 py-2 rounded-md text-base transition-colors ${
                      isActive("/blog")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Blog
                  </Link>

                  <div className="px-3 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide mt-4">
                    Company
                  </div>
                  <Link
                    to="/about"
                    className={`px-6 py-2 rounded-md text-base transition-colors ${
                      isActive("/about")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/careers"
                    className={`px-6 py-2 rounded-md text-base transition-colors ${
                      isActive("/careers")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Careers
                  </Link>

                  <Link
                    to="/contact"
                    className={`px-3 py-2 rounded-md text-base font-medium transition-colors mt-4 ${
                      isActive("/contact")
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Contact
                  </Link>
                </nav>
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <Button variant="outline" asChild>
                    <Link to="/pricing">Pricing</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/contact">Get Started</Link>
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
