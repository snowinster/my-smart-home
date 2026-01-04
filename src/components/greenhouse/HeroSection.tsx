import { Leaf, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-accent/10 blur-2xl animate-pulse-slow" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Icon */}
        <div className="mb-8 inline-flex">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-glow" />
            <div className="relative glass rounded-full p-6 neon-border">
              <Leaf className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 tracking-tight">
          <span className="text-gradient">Serre</span>
          <br />
          <span className="text-foreground">Connectée</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Un projet IoT innovant pour automatiser et surveiller votre serre en temps réel. 
          Documentation complète pour reproduire ce projet chez vous.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity px-8 py-6 text-lg neon-glow"
            onClick={() => scrollToSection("documentation")}
          >
            Voir la documentation
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="glass neon-border px-8 py-6 text-lg"
            onClick={() => scrollToSection("architecture")}
          >
            Explorer le projet
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("presentation")}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
