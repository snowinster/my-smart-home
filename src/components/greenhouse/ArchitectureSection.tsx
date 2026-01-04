import { Badge } from "@/components/ui/badge";

const components = [
  {
    category: "Microcontrôleur",
    items: [
      { name: "ESP32", description: "Microcontrôleur WiFi/Bluetooth intégré" }
    ]
  },
  {
    category: "Capteurs",
    items: [
      { name: "DHT22", description: "Température et humidité de l'air" },
      { name: "Capteur d'humidité du sol", description: "Mesure hygrométrie du substrat" },
      { name: "LDR / BH1750", description: "Capteur de luminosité" }
    ]
  },
  {
    category: "Actionneurs",
    items: [
      { name: "Pompe à eau", description: "Système d'arrosage automatique" },
      { name: "Ventilateur", description: "Régulation de la température" },
      { name: "Relais 4 canaux", description: "Contrôle des actionneurs" }
    ]
  },
  {
    category: "Alimentation",
    items: [
      { name: "Alimentation 5V/12V", description: "Source d'énergie du système" }
    ]
  }
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-secondary text-sm font-medium mb-4">
            Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Composants <span className="text-gradient">Techniques</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vue d'ensemble des composants matériels utilisés pour construire la serre connectée.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Components List */}
          <div className="space-y-6">
            {components.map((group) => (
              <div key={group.category} className="glass rounded-2xl p-6 hover-lift">
                <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
                  {group.category}
                </Badge>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Visual Diagram */}
          <div className="glass-strong rounded-2xl p-8 neon-border">
            <h3 className="text-xl font-semibold font-display mb-8 text-center">Schéma de connexion</h3>
            
            <div className="relative">
              {/* ESP32 Central */}
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-center neon-glow">
                  ESP32
                  <div className="text-xs opacity-80 mt-1">Microcontrôleur principal</div>
                </div>
              </div>

              {/* Connection Lines */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="h-8 w-0.5 bg-primary/50 mx-auto" />
                  <div className="glass rounded-lg p-3 text-sm">
                    <div className="font-medium text-primary">Capteurs</div>
                    <div className="text-xs text-muted-foreground mt-1">DHT22, Sol, Lumière</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="h-8 w-0.5 bg-secondary/50 mx-auto" />
                  <div className="glass rounded-lg p-3 text-sm">
                    <div className="font-medium text-secondary">WiFi</div>
                    <div className="text-xs text-muted-foreground mt-1">Réseau local</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="h-8 w-0.5 bg-accent/50 mx-auto" />
                  <div className="glass rounded-lg p-3 text-sm">
                    <div className="font-medium text-accent">Actionneurs</div>
                    <div className="text-xs text-muted-foreground mt-1">Pompe, Ventilateur</div>
                  </div>
                </div>
              </div>

              {/* Data Flow */}
              <div className="glass rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground">Flux de données</div>
                <div className="flex items-center justify-center gap-2 mt-2 text-sm font-medium">
                  <span className="text-primary">Capteurs</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-secondary">ESP32</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-accent">Interface Web</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
