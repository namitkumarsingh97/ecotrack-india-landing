import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { 
  Shirt, 
  Pill, 
  Wheat, 
  Laptop, 
  Factory, 
  FlaskConical,
  Car,
  Building2,
  Truck,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Industries = () => {
  const industries = [
    {
      icon: Shirt,
      name: "Textiles & Apparel",
      description: "Export-heavy industry with strict ESG requirements from EU/US clients",
      challenges: [
        "Water consumption tracking (critical for dyeing/processing)",
        "Chemical usage & waste management",
        "Labor rights & worker safety metrics",
        "Supply chain transparency"
      ],
      benefits: [
        "Meet EU CSRD requirements",
        "Comply with US CBP forced labor requirements",
        "Win export contracts",
        "Improve brand reputation"
      ],
      marketSize: "15,000+ textile units in India",
      pricing: "₹2,500-5,000/month"
    },
    {
      icon: Pill,
      name: "Pharmaceuticals & Healthcare",
      description: "Regulatory compliance and investor pressure drive ESG needs",
      challenges: [
        "Hazardous waste tracking",
        "Water quality & discharge monitoring",
        "Clinical trial ethics tracking",
        "Employee health & safety (lab safety)"
      ],
      benefits: [
        "CDSCO & FDA compliance",
        "Attract ESG-focused investors",
        "Manage hazardous waste effectively",
        "Demonstrate ethical practices"
      ],
      marketSize: "200+ pharma companies",
      pricing: "₹4,999-9,999/month"
    },
    {
      icon: Wheat,
      name: "Food Processing & Agriculture",
      description: "Export requirements and sustainability focus drive ESG compliance",
      challenges: [
        "Farm-level sustainability metrics",
        "Food waste tracking",
        "Water footprint (irrigation + processing)",
        "Supply chain traceability"
      ],
      benefits: [
        "FSSAI & organic certification support",
        "Meet export requirements",
        "Farm-to-fork traceability",
        "Reduce food waste"
      ],
      marketSize: "25,000+ food processing units",
      pricing: "₹2,999-4,999/month"
    },
    {
      icon: Laptop,
      name: "IT/Software Services",
      description: "Global clients demand ESG reports from Indian IT companies",
      challenges: [
        "E-waste management",
        "Energy consumption (data centers)",
        "Remote work carbon footprint",
        "Diversity & inclusion metrics"
      ],
      benefits: [
        "Meet global client requirements",
        "Showcase sustainability leadership",
        "Attract top talent",
        "Reduce operational costs"
      ],
      marketSize: "400+ IT companies",
      pricing: "₹1,999-4,999/month"
    },
    {
      icon: Factory,
      name: "Manufacturing (General)",
      description: "Largest SMB segment with compliance and tender requirements",
      challenges: [
        "Factory compliance tracking",
        "Energy efficiency metrics",
        "Waste reduction targets",
        "Worker safety (accident tracking)"
      ],
      benefits: [
        "Factory Act compliance",
        "Win government & private tenders",
        "Pollution control board compliance",
        "Improve operational efficiency"
      ],
      marketSize: "50,000+ manufacturing units",
      pricing: "₹1,999-3,999/month"
    },
    {
      icon: FlaskConical,
      name: "Chemicals & Petrochemicals",
      description: "High compliance requirements and environmental liability concerns",
      challenges: [
        "Hazardous waste management",
        "Air emissions tracking",
        "Water discharge quality",
        "Emergency response planning"
      ],
      benefits: [
        "CPCB compliance",
        "Environmental liability insurance",
        "Investor scrutiny management",
        "Risk mitigation"
      ],
      marketSize: "100+ chemical companies",
      pricing: "₹4,999-12,999/month"
    },
    {
      icon: Car,
      name: "Automotive Components",
      description: "OEM requirements and EV transition drive ESG needs",
      challenges: [
        "Export to OEMs (Maruti, Tata, Hyundai)",
        "EV battery manufacturing ESG",
        "Supply chain compliance",
        "Carbon footprint reduction"
      ],
      benefits: [
        "Meet OEM requirements",
        "EV transition support",
        "Supply chain transparency",
        "Competitive advantage"
      ],
      marketSize: "Growing EV market",
      pricing: "₹2,999-5,999/month"
    },
    {
      icon: Building2,
      name: "Construction & Real Estate",
      description: "Green building certifications and sustainable materials",
      challenges: [
        "LEED & IGBC certifications",
        "Material sourcing sustainability",
        "Construction waste management",
        "Energy efficiency in buildings"
      ],
      benefits: [
        "Green building certifications",
        "Sustainable construction materials",
        "Attract eco-conscious buyers",
        "Regulatory compliance"
      ],
      marketSize: "Growing green building market",
      pricing: "₹3,999-7,999/month"
    },
    {
      icon: Truck,
      name: "Logistics & Transportation",
      description: "Carbon footprint tracking and e-commerce ESG requirements",
      challenges: [
        "Fleet emissions tracking",
        "Last-mile delivery optimization",
        "E-commerce ESG requirements",
        "Fuel efficiency metrics"
      ],
      benefits: [
        "Carbon footprint reduction",
        "Meet e-commerce requirements",
        "Optimize fleet operations",
        "Cost savings"
      ],
      marketSize: "Growing logistics sector",
      pricing: "₹2,999-4,999/month"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-section-alt">
          <div className="container-width">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-green-light border border-accent/20 mb-6">
                <Factory className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Industries We Serve</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                ESG Solutions for
                <span className="text-primary"> Every Industry</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                From textiles to tech, we provide industry-specific ESG solutions tailored to your unique compliance needs.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-all flex flex-col">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <industry.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{industry.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-destructive" />
                        Key Challenges
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {industry.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        How We Help
                      </h4>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{industry.marketSize}</span>
                        <span className="font-semibold text-primary">{industry.pricing}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry-Specific Features */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Industry Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored to Your Industry</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We understand that each industry has unique ESG requirements. That's why we offer industry-specific templates and metrics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Pre-Configured Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get started quickly with industry-specific metric templates that are pre-configured for your sector.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Industry-specific scoring weights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Relevant compliance checklists</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Best practice benchmarks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Compliance Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Stay compliant with industry-specific regulations and standards relevant to your business.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Regulatory deadline tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Compliance alerts & reminders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Audit-ready documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Industry-Specific Matters */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                  Why It Matters
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">One Size Doesn't Fit All</h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  ESG requirements vary significantly across industries. A textile manufacturer needs to track water consumption and chemical discharge, while an IT company focuses on e-waste and data center energy usage. A pharmaceutical company must monitor hazardous waste, while a food processor tracks supply chain traceability.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  <strong className="text-foreground">Generic ESG tools</strong> force you to adapt your business to their framework. <strong className="text-foreground">EcoTrack India</strong> adapts to your industry, providing:
                </p>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                  <li>Industry-specific metrics that matter to your business</li>
                  <li>Relevant compliance checklists for your sector</li>
                  <li>Benchmarking against similar companies in your industry</li>
                  <li>Scoring weights optimized for your industry's ESG priorities</li>
                </ul>
                <p className="text-lg text-muted-foreground">
                  This industry-specific approach means you spend less time configuring the tool and more time improving your ESG performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container-width">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Industry-Specific ESG?</h2>
              <p className="text-lg mb-8 opacity-90">
                See how EcoTrack can help your industry meet ESG compliance requirements. Start with a free trial today.
              </p>
              <Button size="lg" variant="secondary" className="px-8" asChild>
                <a href="/contact?subject=Free%20Trial%20Request">Start Free Trial</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;

