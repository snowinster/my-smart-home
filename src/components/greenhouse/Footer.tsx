import { Leaf, Github, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="glass rounded-full p-3 neon-border">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <span className="text-2xl font-bold font-display">
              <span className="text-gradient">Serre</span> Connectée
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-md mb-8">
            Projet IoT open source pour l'automatisation et le monitoring de serre. 
            N'hésitez pas à reproduire et améliorer ce projet !
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="ghost" size="sm" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Ressources
            </Button>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-border/50 mb-6" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Serre Connectée. Projet éducatif IoT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
