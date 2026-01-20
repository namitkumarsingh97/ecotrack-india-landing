import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import {
  Leaf,
  Target,
  Eye,
  Users,
  Award,
  TrendingUp,
  Heart,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Making ESG compliance accessible to every Indian SMB, regardless of size or budget.",
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description:
        "We're building this for you. Every feature is designed based on real needs of Indian SMBs.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Continuously improving our platform with cutting-edge technology and best practices.",
    },
    {
      icon: Globe,
      title: "Sustainability First",
      description:
        "We believe every business can contribute to a sustainable future.",
    },
  ];

  const stats = [
    { label: "Industries Supported", value: "9+", icon: Leaf },
    { label: "Compliance Frameworks", value: "BRSR, GRI", icon: Award },
    { label: "Platform Status", value: "Ready", icon: TrendingUp },
    { label: "Launch Year", value: "2025", icon: Users },
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
                <img
                  src="/Logo_No_BG.png"
                  alt="EcoTrack India"
                  className="h-5 w-auto"
                />
                <span className="text-sm font-medium text-accent">
                  About EcoTrack India
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Empowering Indian Businesses for a
                <span className="text-primary"> Sustainable Future</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                We're on a mission to democratize ESG compliance, making it
                simple, affordable, and accessible for every Indian SMB.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center border-2 hover:border-primary/30 transition-all"
                >
                  <CardContent className="pt-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How EcoTrack India Was Born
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  In 2025, I noticed a critical gap in the Indian market: while
                  large enterprises had access to expensive Big-4 consultants
                  for ESG reporting, small and medium businesses were left
                  behind. These SMBs faced mounting pressure from:
                </p>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                  <li>Export clients demanding ESG compliance</li>
                  <li>Investors requiring sustainability reports</li>
                  <li>Government tenders mandating BRSR compliance</li>
                  <li>Supply chain partners requesting ESG data</li>
                </ul>
                <p className="text-lg text-muted-foreground mb-6">
                  Yet, traditional solutions were either too expensive (₹50,000+
                  per report) or too complex (requiring dedicated consultants).
                  I set out to change this.
                </p>
                <p className="text-lg text-muted-foreground">
                  <strong className="text-foreground">EcoTrack India</strong>{" "}
                  was built from the ground up for Indian SMBs. Combining deep
                  regulatory knowledge (BRSR, GRI, CPCB compliance) with modern
                  technology, I created a platform that's both powerful and
                  accessible. As a solo founder, I'm building this startup to
                  help Indian businesses achieve ESG compliance without breaking
                  the bank. We're just getting started, but our vision is clear:
                  make ESG compliance accessible to every Indian SMB.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-section-alt">
          <div className="container-width">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-primary/30 transition-all">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To democratize ESG compliance by providing affordable,
                    accessible, and India-specific sustainability reporting
                    tools that empower every SMB to meet regulatory
                    requirements, attract investors, and build sustainable
                    businesses.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-all">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become India's leading ESG platform, helping thousands of
                    SMBs achieve sustainability compliance. We envision a future
                    where every Indian business can easily track, measure, and
                    improve their environmental and social impact-without
                    needing expensive consultants or complex systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do at EcoTrack India.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/30 transition-all"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                  Why EcoTrack India
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Built for Indian SMBs, by Indian SMBs
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      India-Specific Compliance
                    </h3>
                    <p className="text-muted-foreground">
                      We understand Indian regulations inside out. Our platform
                      is built for BRSR, CPCB, Factory Act, and other Indian
                      compliance requirements-not adapted from global solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Affordable Pricing
                    </h3>
                    <p className="text-muted-foreground">
                      Starting at just ₹1,999/month, we're 95% cheaper than
                      Big-4 consultants. No hidden fees, no surprise
                      charges-just transparent, affordable pricing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Self-Service Platform
                    </h3>
                    <p className="text-muted-foreground">
                      No consultants needed. Our intuitive platform guides you
                      through every step, from data entry to report generation.
                      Your team can use it without training.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Fast & Reliable
                    </h3>
                    <p className="text-muted-foreground">
                      Generate audit-ready reports in minutes, not weeks. Our
                      automated scoring engine calculates your ESG score
                      instantly, and you can export PDF/Excel reports with one
                      click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container-width">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Join Us?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Start your ESG compliance journey today. Get in touch to learn
                how EcoTrack can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-3 bg-background text-primary rounded-lg font-semibold hover:bg-background/90 transition-colors"
                >
                  View Pricing
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-background text-background rounded-lg font-semibold hover:bg-background/10 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
