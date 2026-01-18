import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Mail, MessageSquare, Send, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setSubject(decodeURIComponent(subjectParam));
    }
  }, [searchParams]);
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "ecotrackindia26@gmail.com",
      link: "mailto:ecotrackindia26@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Office Address",
      content: "Sector 56, Gurugram, Haryana, 122011",
      link: null,
      description: "Corporate HQ Office"
    },
    {
      icon: MessageSquare,
      title: "Response Time",
      content: "Within 24 hours",
      description: "We typically respond within one business day"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri, 9 AM - 6 PM IST",
      description: "Indian Standard Time"
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
                <MessageSquare className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Let's Start a
                <span className="text-primary"> Conversation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about EcoTrack? Want to see a demo? We're here to help you get started with ESG compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-all text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-primary hover:underline font-medium block mb-2"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-primary font-medium mb-2">{info.content}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-2">
                <CardContent className="pt-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `mailto:ecotrackindia26@gmail.com?subject=${encodeURIComponent((document.getElementById('subject') as HTMLInputElement)?.value || 'Contact from Website')}&body=${encodeURIComponent((document.getElementById('message') as HTMLTextAreaElement)?.value || '')}`;
                      }}
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>

                    <p className="text-sm text-center text-muted-foreground">
                      By submitting this form, you agree to our Privacy Policy. We'll respond within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Our Locations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit us at our office locations across India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-primary/30 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Gurugram</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Corporate HQ Office
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Sector 56, Gurugram,<br />
                        Haryana, 122011
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                  Other Ways to Reach Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">We're Here to Help</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">For Sales Inquiries</h3>
                    <p className="text-muted-foreground mb-4">
                      Interested in learning more about EcoTrack? Want to see a demo or discuss pricing?
                    </p>
                    <a
                      href="mailto:ecotrackindia26@gmail.com?subject=Sales Inquiry"
                      className="text-primary hover:underline font-medium"
                    >
                      Email us →
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">For Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Need help with your account? Have questions about features? Our support team is ready to assist.
                    </p>
                    <a
                      href="mailto:ecotrackindia26@gmail.com?subject=Support Request"
                      className="text-primary hover:underline font-medium"
                    >
                      Get Support →
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">For Partnerships</h3>
                    <p className="text-muted-foreground mb-4">
                      Interested in partnering with us? Let's explore how we can work together.
                    </p>
                    <a
                      href="mailto:ecotrackindia26@gmail.com?subject=Partnership Inquiry"
                      className="text-primary hover:underline font-medium"
                    >
                      Partner with Us →
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">For Media</h3>
                    <p className="text-muted-foreground mb-4">
                      Press inquiries, interviews, or media kit requests? We'd love to hear from you.
                    </p>
                    <a
                      href="mailto:ecotrackindia26@gmail.com?subject=Media Inquiry"
                      className="text-primary hover:underline font-medium"
                    >
                      Contact Media →
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

