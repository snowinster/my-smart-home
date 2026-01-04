import { 
  Thermometer, 
  Droplets, 
  Sun, 
  Wind, 
  Gauge, 
  Bell,
  Smartphone,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: Thermometer,
    title: "Contrôle Température",
    description: "Surveillance précise de la température avec activation automatique de la ventilation.",
    color: "text-red-500"
  },
  {
    icon: Droplets,
    title: "Gestion Arrosage",
    description: "Arrosage automatique basé sur l'humidité du sol pour une hydratation optimale.",
    color: "text-blue-500"
  },
  {
    icon: Sun,
    title: "Suivi Luminosité",
    description: "Mesure de l'exposition lumineuse pour adapter les conditions de culture.",
    color: "text-yellow-500"
  },
  {
    icon: Wind,
    title: "Ventilation Auto",
    description: "Régulation automatique du flux d'air selon la température ambiante.",
    color: "text-cyan-500"
  },
  {
    icon: Gauge,
    title: "Dashboard Temps Réel",
    description: "Visualisation instantanée de toutes les métriques sur une interface web.",
    color: "text-primary"
  },
  {
    icon: Bell,
    title: "Alertes Intelligentes",
    description: "Notifications en cas de conditions anormales nécessitant une intervention.",
    color: "text-accent"
  },
  {
    icon: Smartphone,
    title: "Accès Mobile",
    description: "Interface responsive accessible depuis n'importe quel appareil connecté.",
    color: "text-secondary"
  },
  {
    icon: BarChart3,
    title: "Historique Données",
    description: "Conservation et analyse des données pour optimiser vos cultures.",
    color: "text-green-500"
  }
];

const FeaturesSection = () => {
  return (
    <section id="fonctionnalites" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Tout ce que la serre peut <span className="text-gradient">faire</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un système complet pour gérer automatiquement votre environnement de culture.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group glass rounded-2xl p-6 hover-lift text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-4 inline-flex">
                <div className="relative">
                  <div className={`absolute inset-0 ${feature.color} opacity-20 rounded-xl blur-lg group-hover:opacity-40 transition-opacity`} />
                  <div className="relative bg-muted/50 rounded-xl p-4">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold font-display mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
