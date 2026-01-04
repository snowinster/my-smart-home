import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const prerequisites = [
  "ESP32 DevKit v1 ou équivalent",
  "Capteur DHT22 (température/humidité)",
  "Capteur d'humidité du sol",
  "Capteur de luminosité (LDR ou BH1750)",
  "Module relais 4 canaux",
  "Pompe à eau 5V",
  "Ventilateur 12V",
  "Câbles jumper et breadboard",
  "Alimentation adaptée (5V/12V)",
  "Accès WiFi"
];

const steps = [
  {
    id: "step-1",
    title: "Étape 1 : Préparation du matériel",
    content: `Rassemblez tous les composants nécessaires. Vérifiez que votre ESP32 est fonctionnel en le connectant à votre ordinateur via USB. Installez l'environnement Arduino IDE ou PlatformIO pour programmer le microcontrôleur.`,
    code: null
  },
  {
    id: "step-2",
    title: "Étape 2 : Câblage des capteurs",
    content: `Connectez les capteurs à l'ESP32 selon le schéma suivant :`,
    code: `// Connexions ESP32
DHT22:
  - VCC → 3.3V
  - GND → GND
  - DATA → GPIO4

Capteur Sol:
  - VCC → 3.3V
  - GND → GND
  - AO → GPIO34

Capteur Lumière:
  - VCC → 3.3V
  - GND → GND
  - AO → GPIO35`
  },
  {
    id: "step-3",
    title: "Étape 3 : Câblage des actionneurs",
    content: `Connectez le module relais pour contrôler la pompe et le ventilateur :`,
    code: `// Connexions Relais
Module Relais:
  - VCC → 5V (externe)
  - GND → GND (commun)
  - IN1 → GPIO25 (Pompe)
  - IN2 → GPIO26 (Ventilateur)

// ATTENTION: Utilisez une alimentation 
// externe pour les actionneurs`
  },
  {
    id: "step-4",
    title: "Étape 4 : Configuration WiFi",
    content: `Configurez la connexion WiFi dans votre code pour permettre la transmission des données :`,
    code: `#include <WiFi.h>

const char* ssid = "VotreSSID";
const char* password = "VotreMotDePasse";

void setup() {
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("Connecté!");
  Serial.println(WiFi.localIP());
}`
  },
  {
    id: "step-5",
    title: "Étape 5 : Lecture des capteurs",
    content: `Implémentez la lecture des différents capteurs :`,
    code: `#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

void loop() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  int soil = analogRead(34);
  int light = analogRead(35);
  
  // Traitement des données...
  delay(2000);
}`
  },
  {
    id: "step-6",
    title: "Étape 6 : Logique d'automatisation",
    content: `Implémentez les règles d'automatisation pour le contrôle des actionneurs :`,
    code: `#define PUMP_PIN 25
#define FAN_PIN 26

void controlActuators(float temp, int soil) {
  // Arrosage si sol trop sec
  if (soil < 30) {
    digitalWrite(PUMP_PIN, HIGH);
    delay(5000);
    digitalWrite(PUMP_PIN, LOW);
  }
  
  // Ventilation si température trop élevée
  if (temp > 30) {
    digitalWrite(FAN_PIN, HIGH);
  } else if (temp < 25) {
    digitalWrite(FAN_PIN, LOW);
  }
}`
  }
];

const DocumentationSection = () => {
  return (
    <section id="documentation" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-accent text-sm font-medium mb-4">
            Tutoriel
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Documentation <span className="text-gradient">Complète</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guide étape par étape pour reproduire ce projet de serre connectée.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Prerequisites */}
          <div className="lg:col-span-1">
            <div className="glass-strong rounded-2xl p-6 sticky top-8">
              <h3 className="text-xl font-semibold font-display mb-6 flex items-center gap-2">
                <Badge className="bg-gradient-primary text-primary-foreground">Prérequis</Badge>
              </h3>
              <ul className="space-y-3">
                {prerequisites.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              {steps.map((step) => (
                <AccordionItem 
                  key={step.id} 
                  value={step.id}
                  className="glass rounded-2xl px-6 border-none"
                >
                  <AccordionTrigger className="text-lg font-semibold font-display hover:no-underline py-6">
                    {step.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground mb-4">{step.content}</p>
                    {step.code && (
                      <div className="relative">
                        <pre className="bg-foreground/5 rounded-xl p-4 overflow-x-auto text-sm">
                          <code className="text-foreground/80">{step.code}</code>
                        </pre>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
