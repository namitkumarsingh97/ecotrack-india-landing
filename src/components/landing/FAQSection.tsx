import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is EcoTrack India and what does it do?",
    answer:
      "EcoTrack India is an ESG (Environmental, Social, Governance) compliance platform built specifically for Indian SMBs. It helps you track sustainability metrics, calculate ESG scores, and generate audit-ready reports aligned with BRSR, GRI, and other Indian compliance frameworks-all without needing expensive consultants.",
  },
  {
    question: "How is EcoTrack different from hiring Big-4 consultants?",
    answer:
      "EcoTrack is 95% cheaper than Big-4 consultants (starting at ₹1,999/month vs ₹50,000+ per report). It's self-service, so you can generate reports in minutes instead of weeks. Plus, you maintain control over your data and can generate reports whenever needed, not just during audit season.",
  },
  {
    question: "Which industries does EcoTrack support?",
    answer:
      "EcoTrack supports 9+ industries including Textiles, Pharmaceuticals, Food Processing, IT/Software, Manufacturing, Chemicals, Automotive, Construction, and Logistics. Each industry has pre-configured templates and metrics relevant to their specific compliance needs.",
  },
  {
    question: "What compliance frameworks does EcoTrack support?",
    answer:
      "EcoTrack is aligned with BRSR (Business Responsibility & Sustainability Report), GRI (Global Reporting Initiative), CPCB requirements, Factory Act compliance, and other Indian regulatory standards. Our scoring methodology follows both Indian and global ESG frameworks.",
  },
  {
    question: "How long does it take to generate an ESG report?",
    answer:
      "Once you've entered your data, you can generate a professional ESG report in minutes. The platform automatically calculates your ESG score and creates PDF or Excel reports ready for audits, investors, or clients. Initial data entry typically takes 1-2 hours depending on your company size.",
  },
  {
    question: "Do I need technical expertise to use EcoTrack?",
    answer:
      "No technical expertise required! EcoTrack is designed for business users. Our guided forms and intuitive interface make it easy for anyone on your team to enter data and generate reports without training.",
  },
  {
    question: "Can I export reports in different formats?",
    answer:
      "Yes! EcoTrack supports multiple export formats including PDF (for audits and presentations), Excel (for data analysis), and JSON (for API integration). All reports are professionally formatted and ready to share.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption and comply with Indian data protection laws. Your data is stored securely and you maintain full control over who can access it. We never share your data with third parties.",
  },
  {
    question: "What if I need help or have questions?",
    answer:
      "We offer comprehensive support including documentation, video tutorials, and email support. As a startup, we're committed to helping you succeed and are always available to answer questions.",
  },
  {
    question: "Can I try EcoTrack before committing?",
    answer:
      "Yes! Our Pro plan includes a 7-14 day free trial so you can explore all features before committing. The Starter plan has no trial but offers a low price (₹1,999/month) to get started immediately. Enterprise plans include a personalized demo to see how EcoTrack can work for your organization. Contact us to get started!",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions
            about EcoTrack India.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
