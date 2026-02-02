import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import {
  BarChart3,
  FileText,
  LineChart,
  Shield,
  Download,
  TrendingUp,
  Calculator,
  MapPin,
  ClipboardList,
  Zap,
  Database,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Product = () => {
  const coreFeatures = [
    {
      icon: BarChart3,
      title: "Track ESG Metrics",
      description:
        "Comprehensive data collection for Environmental, Social, and Governance metrics with guided inputs.",
      details: [
        "Environmental: Energy, water, waste, emissions",
        "Social: Diversity, training, safety, retention",
        "Governance: Board composition, policies, compliance",
      ],
    },
    {
      icon: Calculator,
      title: "Automated ESG Scoring",
      description:
        "AI-powered scoring engine that calculates your ESG score based on Indian and global standards.",
      details: [
        "Environmental Score (40% weight)",
        "Social Score (30% weight)",
        "Governance Score (30% weight)",
        "Overall weighted score with ratings",
      ],
    },
    {
      icon: FileText,
      title: "Report Generation",
      description:
        "Generate audit-ready, investor-ready reports in multiple formats with one click.",
      details: [
        "PDF reports with professional formatting",
        "Excel exports for data analysis",
        "BRSR-compliant templates",
        "Customizable branding options",
      ],
    },
    {
      icon: TrendingUp,
      title: "Year-on-Year Tracking",
      description:
        "Monitor your ESG progress over time with historical data and trend analysis.",
      details: [
        "Multi-year data storage",
        "Trend visualization charts",
        "Improvement tracking",
        "Benchmark comparisons",
      ],
    },
  ];

  const technicalFeatures = [
    {
      icon: MapPin,
      title: "India-Specific Metrics",
      description:
        "Built for Indian regulatory requirements including BRSR, CPCB, Factory Act compliance.",
    },
    {
      icon: ClipboardList,
      title: "Guided Data Input",
      description:
        "Simple, intuitive forms that anyone on your team can fill without training or expertise.",
    },
    {
      icon: Shield,
      title: "Framework Alignment",
      description:
        "Aligned with BRSR, GRI, and other major ESG frameworks used globally.",
    },
    {
      icon: Download,
      title: "One-Click Exports",
      description:
        "Export reports in PDF, Excel, or JSON formats ready for audits and investor presentations.",
    },
    {
      icon: Database,
      title: "Secure Data Storage",
      description:
        "Your data is encrypted and stored securely in compliance with Indian data protection laws.",
    },
    {
      icon: Lock,
      title: "Role-Based Access",
      description:
        "Control who can view and edit data with granular permission settings.",
    },
  ];

  const scoringDetails = [
    {
      category: "Environmental (40%)",
      metrics: [
        "Energy efficiency per employee",
        "Waste management per employee",
        "Water conservation",
        "Renewable energy adoption",
        "Carbon emissions per employee",
      ],
    },
    {
      category: "Social (30%)",
      metrics: [
        "Gender diversity (0-25 points)",
        "Training & development (0-25 points)",
        "Workplace safety (0-25 points)",
        "Employee retention (0-25 points)",
      ],
    },
    {
      category: "Governance (30%)",
      metrics: [
        "Board independence (0-30 points)",
        "Policy framework (0-40 points)",
        "Compliance record (0-30 points)",
      ],
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
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Product Overview
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Everything You Need for
                <span className="text-primary"> ESG Compliance</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                A comprehensive platform that simplifies ESG tracking, scoring,
                and reporting for Indian businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8" asChild>
                  <a href="/contact?subject=Free%20Trial%20Request">
                    Start Free Trial
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="px-8" asChild>
                  <a href="/demo">View Demo</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Core Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Track, Score, Report
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three simple steps to ESG compliance-all in one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {coreFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/30 transition-all"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Platform Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built for Indian Businesses
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Purpose-built features that make ESG compliance simple and
                accessible.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {technicalFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/30 transition-all"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ESG Scoring Details */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Scoring Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Calculate Your ESG Score
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparent, standardized scoring aligned with Indian and global
                ESG frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {scoringDetails.map((section, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/30 transition-all"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {section.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {metric}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <LineChart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Overall Score Calculation
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Your overall ESG score is calculated using a weighted
                        formula:
                      </p>
                      <div className="bg-background rounded-lg p-4 font-mono text-sm">
                        Overall Score = (Environmental × 0.4) + (Social × 0.3) +
                        (Governance × 0.3)
                      </div>
                      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="font-semibold text-foreground">
                            80-100
                          </div>
                          <div className="text-muted-foreground">
                            Excellent 🟢
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            60-79
                          </div>
                          <div className="text-muted-foreground">Good 🔵</div>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            40-59
                          </div>
                          <div className="text-muted-foreground">Fair 🟡</div>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            0-39
                          </div>
                          <div className="text-muted-foreground">
                            Needs Improvement 🔴
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Report Formats */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Report Formats
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Export-Ready Reports
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Generate professional reports in the format you need, when you
                need them.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-primary/30 transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">PDF Reports</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Professional, formatted reports ready for audits, investor
                    presentations, and compliance submissions.
                  </p>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>BRSR-compliant format</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Custom branding options</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Multi-year comparisons</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Excel Exports</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Raw data in Excel format for further analysis, custom
                    reporting, and integration with other tools.
                  </p>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>All metrics included</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Formatted worksheets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Historical data</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">JSON API</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Programmatic access to your ESG data via REST API for custom
                    integrations and automation.
                  </p>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>RESTful API</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Real-time data</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Secure authentication</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container-width">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Start tracking your ESG metrics today. Get in touch to see how
                EcoTrack can help your business.
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

export default Product;
