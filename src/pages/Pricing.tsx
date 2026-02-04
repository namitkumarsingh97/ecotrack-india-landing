import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Check, X, ArrowRight, Zap, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Explorer",
      price: "Free",
      period: "",
      description: "Try our interactive demo and explore ESG reporting capabilities",
      popular: false,
      features: [
        "Interactive ESG demo",
        "SEBI BRSR-aligned parameters",
        "Real-time score calculation",
        "Sample report generation",
        "Download demo reports",
        "No credit card required",
        "Full feature preview"
      ],
      limitations: [],
      cta: "Try Demo",
      trialInfo: "Free demo - No signup required",
      link: "/demo"
    },
    {
      name: "Starter",
      price: "₹1,999",
      period: "month",
      description: "Perfect for small businesses getting started with ESG compliance",
      popular: false,
      features: [
        "Full ESG tracking dashboard",
        "Unlimited report exports (PDF & Excel)",
        "Year-on-year comparison",
        "Email support",
        "BRSR-compliant templates",
        "Basic ESG scoring",
        "Compliance deadline alerts",
        "Up to 5 users"
      ],
      limitations: [
        "No API access",
        "Standard support only"
      ],
      cta: "Get Started",
      trialInfo: "No trial - Low price to get started immediately",
      link: "/contact"
    },
    {
      name: "Pro",
      price: "₹4,999",
      period: "month",
      description: "For growing businesses that need advanced features and priority support",
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced analytics & benchmarking",
        "Industry-specific templates",
        "Priority email support",
        "API access",
        "Custom report branding",
        "Multi-year trend analysis",
        "Up to 20 users",
        "Dedicated account manager",
        "Training & onboarding support"
      ],
      limitations: [],
      cta: "Start Free Trial",
      trialInfo: "7-14 day free trial available",
      link: "/contact"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex compliance needs",
      popular: false,
      features: [
        "Everything in Pro",
        "Unlimited users",
        "White-label options",
        "Custom integrations",
        "24/7 priority support",
        "Dedicated success manager",
        "Custom compliance frameworks",
        "Advanced security & SSO",
        "On-premise deployment option",
        "Custom SLA guarantees"
      ],
      limitations: [],
      cta: "Schedule Demo",
      trialInfo: "Demo only - Custom pricing available",
      link: "/contact?subject=Demo%20Request"
    }
  ];

  const faq = [
    {
      question: "Is there a free trial?",
      answer: "Yes! Our Pro plan includes a 7-14 day free trial so you can explore all features before committing. The Starter plan has no trial but offers a low price to get started immediately. Enterprise plans include a personalized demo to see how EcoTrack can work for your organization. Contact us to get started!"
    },
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI, and bank transfers. Enterprise plans can be invoiced."
    },
    {
      question: "Do you offer annual billing discounts?",
      answer: "Yes! Annual billing saves you 20% compared to monthly billing. Contact us for annual pricing."
    },
    {
      question: "What happens if I exceed my user limit?",
      answer: "We'll notify you when you're approaching your limit. You can upgrade your plan or add additional users for a small fee."
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
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Pricing Plans</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Simple, Transparent
                <span className="text-primary"> Pricing</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                No hidden fees. No consultant costs. Just transparent pricing that works for growing businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding bg-background">
          <div className="container-width">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative border-2 transition-all duration-300 ${
                    plan.popular
                      ? "border-primary shadow-xl scale-105"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl md:text-5xl font-bold text-primary">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground">/{plan.period}</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                      {plan.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground/70 line-through">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      className="w-full"
                      variant={plan.popular ? "default" : plan.name === "Explorer" ? "default" : "outline"}
                      asChild
                    >
                      <a href={plan.link || "/contact"}>{plan.cta}</a>
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      {plan.trialInfo}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Feature Comparison
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Plans</h2>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-semibold">Features</th>
                    <th className="text-center py-4 px-4 font-semibold">Explorer</th>
                    <th className="text-center py-4 px-4 font-semibold">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold bg-primary/5">Pro</th>
                    <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">ESG Tracking Dashboard</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                    <td className="text-center py-4 px-4 bg-primary/5"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Report Exports (PDF/Excel)</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                    <td className="text-center py-4 px-4 bg-primary/5"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Advanced Analytics</td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="text-center py-4 px-4 bg-primary/5"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">API Access</td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="text-center py-4 px-4 bg-primary/5"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Priority Support</td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="text-center py-4 px-4 bg-primary/5"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Custom Integrations</td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="text-center py-4 px-4 bg-primary/5"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Max Users</td>
                    <td className="text-center py-4 px-4">Demo Only</td>
                    <td className="text-center py-4 px-4">5</td>
                    <td className="text-center py-4 px-4 bg-primary/5">20</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Pricing FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faq.map((item, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{item.question}</h3>
                    <p className="text-sm text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container-width">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-8 opacity-90">
                Get in touch to learn more about our pricing plans and find the right fit for your business.
              </p>
              <Button size="lg" variant="secondary" className="px-8" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

