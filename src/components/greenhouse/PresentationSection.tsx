import { Cpu, Wifi, Thermometer, Droplets, Sun, Zap } from "lucide-react";

const features = [
  {
    icon: Thermometer,
    title: "Température",
    description: "Surveillance en temps réel de la température ambiante"
  },
  {
    icon: Droplets,
    title: "Humidité",
    description: "Mesure précise du taux d'humidité de l'air et du sol"
  },
  {
    icon: Sun,
    title: "Luminosité",
    description: "Détection du niveau de lumière pour optimiser la croissance"
  },
  {
    icon: Wifi,
    title: "Connectivité",
    description: "Transmission des données via WiFi vers une interface web"
  },
  {
    icon: Cpu,
    title: "Automatisation",
    description: "Contrôle automatique de l'arrosage et de la ventilation"
  },
  {
    icon: Zap,
    title: "Alertes",
    description: "Notifications en cas de conditions anormales"
  }
];

const PresentationSection = () => {
  return (
    <section id="presentation" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
            À Propos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Qu'est-ce que la <span className="text-gradient">SerreCoSystem</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un système intelligent qui combine capteurs, microcontrôleur et interface web 
            pour créer un environnement de culture optimal et automatisé.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group glass rounded-2xl p-8 hover-lift cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 relative inline-block">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-primary/10 rounded-xl p-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-display mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
