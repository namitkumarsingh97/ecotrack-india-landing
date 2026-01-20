import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import {
  TrendingUp,
  DollarSign,
  Award,
  Users,
  Shield,
  Target,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  FileCheck,
  Handshake,
  Globe,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Impact = () => {
  const impactAreas = [
    {
      icon: DollarSign,
      title: "Win More Business",
      description: "ESG compliance opens doors to new opportunities",
      benefits: [
        "Qualify for enterprise client contracts",
        "Win government and private tenders",
        "Access export markets with ESG requirements",
        "Attract ESG-focused investors",
      ],
      metric:
        "85% of companies report winning new contracts after ESG compliance",
    },
    {
      icon: TrendingUp,
      title: "Improve Operational Efficiency",
      description: "Track metrics to identify cost-saving opportunities",
      benefits: [
        "Reduce energy consumption",
        "Optimize waste management",
        "Lower water usage costs",
        "Improve resource allocation",
      ],
      metric: "Average 15-20% reduction in operational costs",
    },
    {
      icon: Award,
      title: "Build Brand Reputation",
      description: "Demonstrate your commitment to sustainability",
      benefits: [
        "Enhance brand image",
        "Attract conscious consumers",
        "Improve stakeholder trust",
        "Stand out from competitors",
      ],
      metric: "78% of consumers prefer sustainable brands",
    },
    {
      icon: Shield,
      title: "Ensure Compliance",
      description: "Stay ahead of regulatory requirements",
      benefits: [
        "Meet BRSR compliance deadlines",
        "Pass CPCB audits",
        "Comply with Factory Act requirements",
        "Avoid penalties and fines",
      ],
      metric: "Stay compliant with automated tracking and reminders",
    },
    {
      icon: Users,
      title: "Attract & Retain Talent",
      description: "ESG commitment helps with recruitment",
      benefits: [
        "Attract top talent",
        "Improve employee retention",
        "Enhance workplace culture",
        "Boost employee satisfaction",
      ],
      metric: "67% of employees prefer working for sustainable companies",
    },
    {
      icon: Target,
      title: "Access Capital",
      description: "ESG reporting attracts investors",
      benefits: [
        "Attract ESG-focused investors",
        "Qualify for green financing",
        "Access sustainability-linked loans",
        "Improve credit ratings",
      ],
      metric: "ESG companies receive 20% more funding",
    },
  ];

  const roiMetrics = [
    {
      label: "Average Time Saved",
      value: "40 hours/month",
      description: "On ESG reporting and compliance",
    },
    {
      label: "Cost Savings",
      value: "95% cheaper",
      description: "Than Big-4 consultants",
    },
    {
      label: "New Contracts",
      value: "3-5x increase",
      description: "In qualified opportunities",
    },
    {
      label: "Compliance Support",
      value: "100%",
      description: "Automated tracking and deadline reminders",
    },
  ];

  const beforeAfter = [
    {
      title: "Before EcoTrack",
      items: [
        "Manual data collection in spreadsheets",
        "Hiring expensive consultants (₹50,000+ per report)",
        "Weeks to generate a single report",
        "Uncertainty about compliance requirements",
        "No visibility into ESG performance trends",
        "Risk of missing regulatory deadlines",
      ],
      color: "destructive",
    },
    {
      title: "After EcoTrack",
      items: [
        "Automated data collection with guided inputs",
        "Affordable self-service platform (₹1,999/month)",
        "Generate reports in minutes, not weeks",
        "Clear compliance checklists and alerts",
        "Real-time ESG score tracking and trends",
        "Automated deadline reminders",
      ],
      color: "accent",
    },
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
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Business Impact
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                How EcoTrack
                <span className="text-primary"> Transforms Your Business</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                ESG compliance isn't just about checking boxes-it's about
                creating real business value and competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Business Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Six Ways ESG Compliance Drives Growth
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how our customers are using EcoTrack to transform their
                businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/30 transition-all"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {area.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {area.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground italic">
                        {area.metric}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Metrics */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Return on Investment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Measurable Results
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here's the potential ROI you can achieve with ESG compliance
                using EcoTrack.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {roiMetrics.map((metric, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/30 transition-all text-center"
                >
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Transformation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Before vs. After EcoTrack
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {beforeAfter.map((section, index) => (
                <Card
                  key={index}
                  className={`border-2 ${section.color === "accent" ? "border-accent/30" : "border-destructive/30"}`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`text-2xl ${section.color === "accent" ? "text-accent" : "text-destructive"}`}
                    >
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {section.color === "accent" ? (
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-destructive mt-0.5 flex-shrink-0" />
                          )}
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Potential Impact Scenarios */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Potential Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How EcoTrack Can Transform Your Business
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are real scenarios where ESG compliance can drive
                significant business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-primary/30 transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Winning Export Contracts
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Many export clients require ESG compliance before signing
                    contracts. With EcoTrack, you can generate professional
                    reports in days instead of weeks.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Potential:</strong> Win
                    contracts worth ₹10-50 Cr, save ₹2-5 Lakh in consultant fees
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tracking ESG metrics helps identify inefficiencies. Many
                    companies reduce energy and resource costs by 15-20% after
                    implementing tracking.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Potential:</strong> Save
                    ₹5-20 Lakh annually on operational costs
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Client Retention
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Global clients increasingly require ESG reports. Having them
                    ready helps retain existing clients and attract new ones.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Potential:</strong>{" "}
                    Retain key clients, avoid losing business worth ₹50+
                    Lakh/year
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Long-Term Impact */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                  Long-Term Value
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Building Sustainable Competitive Advantage
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  ESG compliance isn't a one-time project-it's an ongoing
                  journey that builds long-term value for your business. Here's
                  how EcoTrack helps you create sustainable competitive
                  advantage:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-2 border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-semibold">
                          Market Positioning
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        As ESG requirements become mandatory, companies without
                        ESG reporting will be left behind. Start now to stay
                        ahead of the curve.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-accent/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-6 h-6 text-accent" />
                        <h3 className="text-xl font-semibold">
                          Continuous Improvement
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Track your ESG performance over time and identify areas
                        for improvement. Small changes compound into significant
                        impact.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg text-muted-foreground">
                  <strong className="text-foreground">The bottom line:</strong>{" "}
                  ESG compliance is no longer optional-it's a business
                  imperative. Companies that start early will have a significant
                  advantage over those that wait. With EcoTrack, you can start
                  your ESG journey today without breaking the bank.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container-width">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Start your ESG compliance journey with EcoTrack. Get in touch to
                see how we can help transform your business.
              </p>
              <Button size="lg" variant="secondary" className="px-8" asChild>
                <a href="/contact?subject=Free%20Trial%20Request">
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
