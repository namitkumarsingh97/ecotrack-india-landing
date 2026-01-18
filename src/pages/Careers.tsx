import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Heart, 
  Zap, 
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const cultureValues = [
    {
      icon: Target,
      title: "Integrity > Convenience",
      description: "We prioritize doing what's right for our customers, our people, and our product, even when it's inconvenient."
    },
    {
      icon: Zap,
      title: "Innovation × Curiosity",
      description: "When innovation meets curiosity, ideas don't just evolve - they expand what's possible."
    },
    {
      icon: Users,
      title: "Growth + People",
      description: "For us, growth is a shared journey, meaningful only when we build and celebrate it together."
    }
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: "Work Your Way",
      description: "We measure contribution, not chair-time. Flexible work arrangements that fit your life."
    },
    {
      icon: TrendingUp,
      title: "Learning Culture",
      description: "We invest in you so you keep growing, skill by skill. Continuous learning and development opportunities."
    },
    {
      icon: Heart,
      title: "Open-Door Policy",
      description: "Leadership is approachable, feedback is welcomed. Your voice matters in shaping our future."
    },
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "Be part of building something meaningful. Your ideas can shape the product and company direction."
    }
  ];

  const openRoles = [
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Gurugram / Remote",
      type: "Full-time",
      description: "We're looking for a dynamic Business Development Manager to help us grow our customer base and bring ESG compliance to more Indian SMBs.",
      responsibilities: [
        "Identify and reach out to potential customers in target industries",
        "Build relationships with SMBs looking for ESG compliance solutions",
        "Conduct product demos and presentations",
        "Close deals and manage customer relationships",
        "Provide feedback to improve our product based on customer needs"
      ],
      requirements: [
        "2-4 years of B2B sales experience, preferably in SaaS",
        "Strong communication and presentation skills",
        "Understanding of ESG/sustainability space is a plus",
        "Self-motivated and results-driven",
        "Comfortable working in a startup environment"
      ],
      whyJoin: "As our first sales hire, you'll have the opportunity to shape our go-to-market strategy and directly impact our growth. You'll work closely with the founder and have significant autonomy."
    },
    {
      title: "Customer Success Specialist",
      department: "Customer Success",
      location: "Gurugram / Remote",
      type: "Full-time",
      description: "Help our customers succeed with ESG compliance. You'll be the bridge between our product and our customers, ensuring they get maximum value.",
      responsibilities: [
        "Onboard new customers and guide them through the platform",
        "Provide ongoing support and answer customer questions",
        "Help customers understand ESG compliance requirements",
        "Collect feedback and work with the team to improve the product",
        "Reduce churn by ensuring customer satisfaction"
      ],
      requirements: [
        "1-3 years of customer success or support experience",
        "Excellent communication skills, both written and verbal",
        "Patience and empathy when working with customers",
        "Basic understanding of ESG/sustainability concepts",
        "Problem-solving mindset"
      ],
      whyJoin: "You'll be the face of EcoTrack for our customers. This role offers the opportunity to learn about ESG compliance deeply while helping businesses succeed."
    },
    {
      title: "Marketing & Content Specialist",
      department: "Marketing",
      location: "Gurugram / Remote",
      type: "Full-time",
      description: "Build our brand and generate leads through content marketing, SEO, and digital marketing. Help Indian SMBs discover EcoTrack.",
      responsibilities: [
        "Create content (blog posts, guides, case studies) about ESG compliance",
        "Manage SEO and content marketing to drive organic traffic",
        "Run digital marketing campaigns (social media, email, ads)",
        "Build partnerships and collaborations",
        "Track and analyze marketing metrics"
      ],
      requirements: [
        "1-3 years of marketing experience, preferably in B2B SaaS",
        "Strong writing skills in English and Hindi",
        "Understanding of SEO and content marketing",
        "Creative mindset and ability to tell compelling stories",
        "Familiarity with marketing tools (Google Analytics, social media platforms)"
      ],
      whyJoin: "As our first marketing hire, you'll shape our brand voice and marketing strategy. You'll have creative freedom to experiment and see what works."
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
                <Users className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Join Our Team</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Build the Future of
                <span className="text-primary"> ESG Compliance</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Join a mission-driven startup where your work directly impacts how Indian businesses achieve sustainability. We're building something meaningful, and we need passionate people to help us grow.
              </p>
            </div>
          </div>
        </section>

        {/* Culture Code */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Our Culture Code
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {cultureValues.map((value, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-all text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Why Join Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">EcoTrack + You</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What happens when a mission-driven startup meets passionate talent? Boundaries break and possibilities explode!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-all">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Open Positions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Come Build What's Next</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're looking for passionate individuals who want to make a real impact. As an early team member, you'll shape our culture and product.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {openRoles.map((role, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-all">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{role.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            {role.department}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {role.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {role.type}
                          </div>
                        </div>
                      </div>
                      <Button asChild>
                        <a href={`/contact?subject=${encodeURIComponent(`Job Application - ${role.title}`)}`}>
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{role.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {role.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {role.requirements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <h4 className="font-semibold mb-2 text-primary">Why Join This Role?</h4>
                      <p className="text-sm text-muted-foreground">{role.whyJoin}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don't see a role that fits? We're always looking for talented people.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact?subject=General%20Inquiry%20-%20Careers">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container-width">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
              <p className="text-lg mb-8 opacity-90">
                Join us in making ESG compliance accessible to every Indian SMB. Your work will directly help businesses grow sustainably.
              </p>
              <Button size="lg" variant="secondary" className="px-8" asChild>
                <a href="/contact?subject=Career%20Inquiry">Explore Opportunities</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;

