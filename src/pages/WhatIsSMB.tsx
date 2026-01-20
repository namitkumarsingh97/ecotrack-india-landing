import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import {
  Building2,
  TrendingUp,
  Users,
  Target,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhatIsSMB = () => {
  const smbFacts = [
    {
      icon: Building2,
      number: "63",
      suffix: "million",
      label: "SMBs in India",
      description:
        "Small and Medium Businesses form the backbone of India's economy",
    },
    {
      icon: TrendingUp,
      number: "30",
      suffix: "%",
      label: "GDP Contribution",
      description: "SMBs contribute significantly to India's economic growth",
    },
    {
      icon: Users,
      number: "110",
      suffix: "million",
      label: "Jobs Created",
      description: "SMBs are the largest employment generators in India",
    },
    {
      icon: Target,
      number: "50",
      suffix: "%",
      label: "Export Share",
      description: "SMBs account for half of India's total exports",
    },
  ];

  const smbChallenges = [
    {
      title: "Compliance Complexity",
      description:
        "Navigating through multiple regulatory frameworks like BRSR, CPCB, GRI, and international standards like CSRD can be overwhelming for SMBs with limited resources.",
    },
    {
      title: "Resource Constraints",
      description:
        "Unlike large enterprises, SMBs often lack dedicated compliance teams, making it difficult to track, manage, and report on ESG metrics effectively.",
    },
    {
      title: "Market Access Barriers",
      description:
        "Many global buyers and large corporations now require ESG compliance as a prerequisite, creating barriers for SMBs trying to access new markets.",
    },
    {
      title: "Cost of Non-Compliance",
      description:
        "Fines, penalties, and lost business opportunities due to non-compliance can significantly impact SMB profitability and growth prospects.",
    },
    {
      title: "Documentation Burden",
      description:
        "Maintaining accurate records, conducting audits, and preparing compliance reports requires significant time and effort that SMBs struggle to allocate.",
    },
    {
      title: "Technology Gap",
      description:
        "Many SMBs rely on manual processes and spreadsheets, making ESG compliance inefficient, error-prone, and difficult to scale.",
    },
  ];

  const smbOpportunities = [
    {
      icon: Zap,
      title: "Competitive Advantage",
      description:
        "ESG compliance helps SMBs differentiate themselves in competitive markets and win contracts with sustainability-conscious buyers.",
    },
    {
      icon: Target,
      title: "Market Expansion",
      description:
        "Compliance opens doors to export markets, especially in Europe and North America where ESG requirements are mandatory.",
    },
    {
      icon: TrendingUp,
      title: "Cost Savings",
      description:
        "Effective ESG management often leads to reduced energy consumption, waste reduction, and improved operational efficiency.",
    },
    {
      icon: Users,
      title: "Talent Attraction",
      description:
        "ESG-focused companies attract better talent, especially among younger generations who value purpose-driven organizations.",
    },
    {
      icon: Building2,
      title: "Investor Appeal",
      description:
        "ESG compliance makes SMBs more attractive to investors, lenders, and partners who prioritize sustainable business practices.",
    },
    {
      icon: CheckCircle2,
      title: "Risk Mitigation",
      description:
        "Proactive compliance reduces regulatory risk, avoids penalties, and protects business reputation and continuity.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-section-alt">
          <div className="container-width">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-green-light border border-accent/20 mb-6">
                <Building2 className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Understanding SMBs
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                What Are <span className="text-primary">SMBs</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Small and Medium Businesses (SMBs) share the unspoken truths,
                uncomfortable challenges, and sharp insights that quietly
                separate ESG leaders from everyone else.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Backbone of Indian Economy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>ESG Compliance Challenges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Growth Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {smbFacts.map((fact, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/30 transition-all text-center"
                >
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <fact.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="mb-2">
                      <span className="text-3xl md:text-4xl font-bold text-primary">
                        {fact.number}
                      </span>
                      <span className="text-xl font-semibold text-primary ml-1">
                        {fact.suffix}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold mb-1">{fact.label}</h3>
                    <p className="text-xs text-muted-foreground">
                      {fact.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                The SMB Reality
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Challenges That Define SMBs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every SMB faces unique challenges in their ESG compliance
                journey. Here's what keeps them up at night.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {smbChallenges.map((challenge, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/30 transition-all"
                >
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {challenge.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                The Opportunity
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why ESG Compliance Matters for SMBs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                ESG compliance isn't just a requirement-it's a strategic
                advantage that can transform your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {smbOpportunities.map((opportunity, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/30 transition-all"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <opportunity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {opportunity.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {opportunity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Videos Section */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Learn More
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ESG Importance in Business
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Watch these videos to understand why ESG compliance is crucial
                for businesses, especially SMBs in India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Video 1 - ESG Basics */}
              <Card className="border-2 hover:border-primary/30 transition-all overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/ugHMhHAQcos?si=69qG6zeQn-EzwqE9"
                    title="Why ESG Is Becoming A Bigger Part of Investment Strategies"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-bold mb-2">
                    Why ESG Is Becoming A Bigger Part of Investment Strategies
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Research shows that 85% of consumers are buying more
                    sustainable products than five years ago. That trend is also
                    carrying over to institutions and investors, who are
                    interested in environmental, social, and governance (ESG)
                    issues.
                  </p>
                </CardContent>
              </Card>

              {/* Video 2 - ESG for SMBs */}
              <Card className="border-2 hover:border-primary/30 transition-all overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/WIdWB2jG0s4?si=4Qp6yT3PMR0Iqup4"
                    title="ESG in India: Corporate Initiatives and Opportunities for SMBs"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-bold mb-2">
                    ESG Compliance for SMBs
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    ESG in India: Corporate Initiatives, Reporting requirements,
                    SEBI and listing requirements, Opportunities for SMBs.
                  </p>
                </CardContent>
              </Card>

              {/* Video 3 - BRSR Compliance */}
              <Card className="border-2 hover:border-primary/30 transition-all overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/OT3gsCbCKdI?si=eQWTDJAhFWZE-V9d"
                    title="What is ESG?"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-bold mb-2">
                    What is ESG and why is it important for your organization?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    ESG (Environmental, Social, and Governance) is crucial
                    because it helps companies manage risks, attract investment,
                    build reputation, and ensure long-term sustainability
                  </p>
                </CardContent>
              </Card>

              {/* Video 4 - ESG ROI */}
              {/* <Card className="border-2 hover:border-primary/30 transition-all overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="The Business Case for ESG: ROI and Competitive Advantage"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-bold mb-2">
                    The Business Case for ESG
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Explore how ESG compliance drives ROI, reduces costs, and
                    creates competitive advantages.
                  </p>
                </CardContent>
              </Card> */}

              {/* Video 5 - ESG and Export Markets */}
              {/* <Card className="border-2 hover:border-primary/30 transition-all overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="ESG Compliance: Key to Unlocking Export Markets"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-bold mb-2">
                    ESG: Key to Export Markets
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how ESG compliance helps Indian businesses access
                    international markets and win export contracts.
                  </p>
                </CardContent>
              </Card> */}

              {/* Video 6 - ESG Success Stories */}
              {/* <Card className="border-2 hover:border-primary/30 transition-all overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="ESG Success Stories: Indian SMBs Leading the Way"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-bold mb-2">
                    ESG Success Stories
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Real-world examples of Indian SMBs that transformed their
                    business through ESG compliance.
                  </p>
                </CardContent>
              </Card> */}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Want to learn more about ESG compliance for your business?
              </p>
              <Button size="lg" asChild>
                <Link to="/contact?subject=ESG%20Compliance%20Inquiry">
                  Get Expert Guidance
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container-width">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Make Every Compliance Decision{" "}
                <span className="text-background">Count For Growth</span>
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                The future belongs to SMBs that move faster, think smarter, and
                execute with absolute clarity. Start your ESG compliance journey
                today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" asChild>
                  <Link to="/contact?subject=Schedule%20Your%20Demo">
                    Schedule Your Demo
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhatIsSMB;
