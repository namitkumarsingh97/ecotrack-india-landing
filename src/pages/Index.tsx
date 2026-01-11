import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import TrustStrip from "@/components/landing/TrustStrip";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AudienceSection from "@/components/landing/AudienceSection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <AudienceSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
