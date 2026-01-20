import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import {
  FileCheck,
  Handshake,
  TrendingUp,
  Award,
  Users,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Building2,
  Briefcase,
  Target,
  Shield,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UseCases = () => {
  const useCases = [
    {
      icon: Handshake,
      title: "Winning Enterprise Contracts",
      scenario:
        "Your company wants to supply to large enterprises, but they require ESG compliance reports.",
      challenge:
        "Enterprise clients demand ESG reports before signing contracts. Without them, you're excluded from lucrative opportunities.",
      solution:
        "Use EcoTrack to generate professional ESG reports in days, not weeks. Showcase your sustainability commitment to win contracts.",
      results: [
        "Qualify for enterprise client contracts",
        "Win contracts worth ₹10 Cr+",
        "Save ₹2-5 Lakh in consultant fees",
        "Complete reports in 2-3 days vs 2-3 weeks",
      ],
      industry: "All industries, especially manufacturing and services",
    },
    {
      icon: FileCheck,
      title: "Meeting Regulatory Compliance",
      scenario:
        "Your company needs to comply with BRSR, CPCB, or Factory Act requirements.",
      challenge:
        "Regulatory deadlines are approaching, and you need to submit compliance reports. Missing deadlines can result in penalties.",
      solution:
        "EcoTrack tracks all compliance requirements and generates audit-ready reports aligned with Indian regulations.",
      results: [
        "Meet BRSR compliance deadlines",
        "Pass CPCB audits successfully",
        "Avoid penalties and fines",
        "Stay ahead of regulatory changes",
      ],
      industry: "All industries with regulatory requirements",
    },
    {
      icon: DollarSign,
      title: "Attracting Investors",
      scenario:
        "You're raising capital, and investors are asking for ESG reports and sustainability metrics.",
      challenge:
        "Modern investors, especially ESG-focused funds, require sustainability data before investing.",
      solution:
        "Generate investor-ready ESG reports that demonstrate your commitment to sustainability and responsible business practices.",
      results: [
        "Attract ESG-focused investors",
        "Improve valuation by 10-15%",
        "Access green financing options",
        "Demonstrate long-term sustainability",
      ],
      industry: "Startups, growing companies, all sectors",
    },
    {
      icon: Building2,
      title: "Winning Government Tenders",
      scenario:
        "Government tenders increasingly require ESG compliance as a qualification criterion.",
      challenge:
        "Without ESG reports, you can't even bid on many government contracts, losing significant revenue opportunities.",
      solution:
        "Use EcoTrack to generate BRSR-compliant reports that meet government tender requirements.",
      results: [
        "Qualify for government tenders",
        "Win contracts worth ₹50 Cr+",
        "Meet all compliance criteria",
        "Stand out from competitors",
      ],
      industry: "Manufacturing, construction, services",
    },
    {
      icon: TrendingUp,
      title: "Improving Operational Efficiency",
      scenario:
        "You want to reduce costs by identifying inefficiencies in energy, water, and waste management.",
      challenge:
        "Without tracking metrics, you can't identify where you're wasting resources or money.",
      solution:
        "EcoTrack helps you track all resource consumption and identify areas for improvement, leading to cost savings.",
      results: [
        "Reduce energy costs by 15-20%",
        "Optimize water usage",
        "Improve waste management",
        "Save ₹5-20 Lakh annually",
      ],
      industry: "Manufacturing, textiles, food processing",
    },
    {
      icon: Award,
      title: "Building Brand Reputation",
      scenario:
        "You want to differentiate your brand by demonstrating commitment to sustainability.",
      challenge:
        "Consumers and partners increasingly prefer sustainable brands, but you need proof of your efforts.",
      solution:
        "Generate professional ESG reports that you can share publicly to build brand trust and reputation.",
      results: [
        "Enhance brand image",
        "Attract conscious consumers",
        "Improve stakeholder trust",
        "Stand out in competitive markets",
      ],
      industry: "Consumer-facing businesses, retail, B2C",
    },
    {
      icon: Users,
      title: "Attracting & Retaining Talent",
      scenario:
        "You're struggling to attract top talent, especially younger employees who care about sustainability.",
      challenge:
        "67% of employees prefer working for companies with strong ESG commitments.",
      solution:
        "Use EcoTrack to demonstrate your sustainability commitment and attract talent who share your values.",
      results: [
        "Attract top talent",
        "Improve employee retention",
        "Enhance workplace culture",
        "Boost employee satisfaction",
      ],
      industry: "IT, services, all industries",
    },
    {
      icon: Shield,
      title: "Export Market Compliance",
      scenario:
        "You export to EU, US, or other markets that require ESG compliance (CSRD, forced labor requirements).",
      challenge:
        "Export markets have strict ESG requirements. Without compliance, you lose access to lucrative export opportunities.",
      solution:
        "EcoTrack helps you meet international ESG standards while maintaining India-specific compliance.",
      results: [
        "Access export markets",
        "Meet EU CSRD requirements",
        "Comply with US forced labor laws",
        "Win export contracts",
      ],
      industry: "Textiles, manufacturing, food processing",
    },
  ];

  const stepByStep = [
    {
      step: 1,
      title: "Sign Up & Set Up",
      description:
        "Create your account and add your company information. Choose your industry to get relevant templates.",
      duration: "15 minutes",
    },
    {
      step: 2,
      title: "Enter Your Data",
      description:
        "Use our guided forms to enter your ESG metrics. No training required-anyone on your team can do it.",
      duration: "1-2 hours",
    },
    {
      step: 3,
      title: "Get Your ESG Score",
      description:
        "Our automated engine calculates your ESG score instantly based on Indian and global standards.",
      duration: "Instant",
    },
    {
      step: 4,
      title: "Generate Reports",
      description:
        "Export professional PDF or Excel reports ready for audits, investors, or clients.",
      duration: "2 minutes",
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
                <Briefcase className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Use Cases
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Real-World
                <span className="text-primary"> Use Cases</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                See how companies like yours are using EcoTrack to solve real
                business challenges and drive growth.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/30 transition-all"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <useCase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="text-xl mb-2">
                          {useCase.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mb-3">
                          {useCase.scenario}
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-xs font-medium text-accent">
                          {useCase.industry}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        The Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {useCase.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        The Solution
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {useCase.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {useCase.results.map((result, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {result}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Getting Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From signup to your first report-here's how simple it is.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {stepByStep.map((step, index) => (
                <div key={index} className="relative">
                  {index < stepByStep.length - 1 && (
                    <div
                      className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-primary/20 z-0"
                      style={{ width: "calc(100% - 3rem)" }}
                    />
                  )}
                  <Card className="border-2 border-primary/20 relative z-10">
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {step.description}
                      </p>
                      <div className="text-xs text-primary font-medium">
                        {step.duration}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Scenarios */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Common Scenarios
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                When Do You Need EcoTrack?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">
                      Before a Big Contract
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A potential client asks for ESG compliance before signing.
                    You need a report quickly to win the deal.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Generate report in 2-3 days</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Professional format impresses clients</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Win the contract</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-semibold">
                      Compliance Deadline Approaching
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    BRSR or CPCB deadline is coming up, and you need to submit
                    compliance reports on time.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Automated deadline reminders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Compliance checklist included</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Avoid penalties and fines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Raising Capital</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Investors are asking for ESG reports as part of due
                    diligence. You need to demonstrate sustainability.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Investor-ready reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Improve valuation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Attract ESG-focused investors</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-semibold">
                      Improving Operations
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    You want to reduce costs by tracking resource consumption
                    and identifying inefficiencies.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Track all resource usage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Identify cost-saving opportunities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>Save 15-20% on operational costs</span>
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
                Ready to Solve Your ESG Challenges?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Whether you need to win contracts, meet compliance, or improve
                operations, EcoTrack can help. Start your free trial today.
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

export default UseCases;
