import HeroSection from "@/components/greenhouse/HeroSection";
import PresentationSection from "@/components/greenhouse/PresentationSection";
import ArchitectureSection from "@/components/greenhouse/ArchitectureSection";
import DocumentationSection from "@/components/greenhouse/DocumentationSection";
import FeaturesSection from "@/components/greenhouse/FeaturesSection";
import Footer from "@/components/greenhouse/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PresentationSection />
      <ArchitectureSection />
      <FeaturesSection />
      <DocumentationSection />
      <Footer />
    </div>
  );
};

export default Index;
