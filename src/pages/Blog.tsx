import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Calendar, Clock, ArrowRight, FileText, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      category: "ESG Compliance",
      title: "Understanding BRSR: A Complete Guide for Indian SMBs",
      excerpt: "Learn everything you need to know about Business Responsibility and Sustainability Reporting (BRSR) and how it affects your business.",
      author: "EcoTrack Team",
      date: "2024-12-15",
      readTime: "8 min read",
      image: "brsr"
    },
    {
      category: "Industry Insights",
      title: "ESG Compliance for Textile Exporters: Meeting EU CSRD Requirements",
      excerpt: "How Indian textile exporters can meet European Union's Corporate Sustainability Reporting Directive (CSRD) requirements.",
      author: "EcoTrack Team",
      date: "2024-12-10",
      readTime: "6 min read",
      image: "textiles"
    },
    {
      category: "Best Practices",
      title: "5 Ways to Improve Your ESG Score Without Breaking the Bank",
      excerpt: "Practical, cost-effective strategies to improve your Environmental, Social, and Governance score and attract more business.",
      author: "EcoTrack Team",
      date: "2024-12-05",
      readTime: "5 min read",
      image: "improvement"
    },
    {
      category: "Compliance",
      title: "CPCB Compliance Checklist: What Every Manufacturing SMB Needs to Know",
      excerpt: "A comprehensive checklist for Central Pollution Control Board (CPCB) compliance requirements for Indian manufacturers.",
      author: "EcoTrack Team",
      date: "2024-11-28",
      readTime: "7 min read",
      image: "cpcb"
    },
    {
      category: "Industry Insights",
      title: "Why IT Companies Need ESG Reporting: Beyond Greenwashing",
      excerpt: "How IT and software companies can use ESG reporting to attract global clients and improve their competitive position.",
      author: "EcoTrack Team",
      date: "2024-11-20",
      readTime: "6 min read",
      image: "it"
    },
    {
      category: "Case Studies",
      title: "How ESG Compliance Helped a Food Processing Company Win ₹50 Cr Export Contract",
      excerpt: "Real-world example of how proper ESG reporting opened doors to lucrative export opportunities.",
      author: "EcoTrack Team",
      date: "2024-11-15",
      readTime: "5 min read",
      image: "case-study"
    }
  ];

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "ESG Compliance", count: 1 },
    { name: "Industry Insights", count: 2 },
    { name: "Best Practices", count: 1 },
    { name: "Compliance", count: 1 },
    { name: "Case Studies", count: 1 }
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
                <FileText className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Blog & Resources</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                ESG Insights &
                <span className="text-primary"> Industry Updates</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest ESG compliance trends, industry insights, and best practices for Indian businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-all group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg flex items-center justify-center">
                    <FileText className="w-16 h-16 text-primary/30" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 text-center">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground mb-6">
                    Subscribe to our newsletter for the latest ESG insights and compliance updates.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/#newsletter">Subscribe to Newsletter</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

