import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Account Information: When you create an account, we collect your name, email address, company name, and contact information.",
        "Usage Data: We collect information about how you use our platform, including features accessed, reports generated, and time spent on the platform.",
        "Company Data: You may provide ESG metrics, compliance data, and other business information necessary for our services.",
        "Technical Data: We collect IP addresses, browser type, device information, and other technical data for security and analytics purposes."
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our ESG compliance services",
        "To generate ESG reports and calculate scores based on your data",
        "To communicate with you about your account, support requests, and service updates",
        "To send you marketing communications (with your consent)",
        "To comply with legal obligations and protect our rights",
        "To analyze usage patterns and improve our platform"
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        "We use industry-standard encryption to protect your data in transit and at rest",
        "Access to your data is restricted to authorized personnel only",
        "We regularly update our security measures to protect against unauthorized access",
        "Your data is stored on secure servers with appropriate access controls",
        "We comply with Indian data protection laws and regulations"
      ]
    },
    {
      icon: Eye,
      title: "Data Sharing and Disclosure",
      content: [
        "We do not sell your personal information to third parties",
        "We may share data with service providers who help us operate our platform (under strict confidentiality agreements)",
        "We may disclose information if required by law or to protect our rights",
        "Aggregated, anonymized data may be used for industry benchmarking (with no personal identification)"
      ]
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
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Privacy Policy</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Privacy
                <span className="text-primary"> Matters to Us</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  At EcoTrack India, we are committed to protecting your privacy and ensuring the security of your personal and business information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our ESG compliance platform.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  By using EcoTrack India, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Sections */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <div className="max-w-4xl mx-auto space-y-8">
              {sections.map((section, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
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

        {/* Additional Sections */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    You have the right to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Access and review your personal information</li>
                    <li>• Request correction of inaccurate data</li>
                    <li>• Request deletion of your account and data</li>
                    <li>• Opt-out of marketing communications</li>
                    <li>• Export your data in a portable format</li>
                    <li>• Withdraw consent at any time</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    To exercise these rights, please contact us at{" "}
                    <a href="mailto:ecotrackindia26@gmail.com" className="text-primary hover:underline">
                      ecotrackindia26@gmail.com
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                  <p className="text-muted-foreground">
                    We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When you delete your account, we will delete or anonymize your personal data within 30 days, except where we are required to retain it for legal or regulatory purposes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                  <p className="text-muted-foreground mb-4">
                    We use cookies and similar tracking technologies to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Remember your preferences and settings</li>
                    <li>• Analyze how you use our platform</li>
                    <li>• Improve our services and user experience</li>
                    <li>• Provide personalized content</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                  <p className="text-muted-foreground">
                    Our platform may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Email:</strong>{" "}
                      <a href="mailto:ecotrackindia26@gmail.com" className="text-primary hover:underline">
                        ecotrackindia26@gmail.com
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Company:</strong> EcoTrack India
                    </p>
                  </div>
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

export default PrivacyPolicy;

