
import React from 'react';
import { cn } from '@/lib/utils';
import { Bed, Ship, Compass, Sun, Coffee, Waves } from 'lucide-react';

const features = [
  {
    icon: Ship,
    title: 'Hochwertiges Vollstahlschiff',
    description: 'Mit 27 Tonnen liegt der Stahlrumpf besonders ruhig im Wasser und bietet mit 14,7 Metern Länge und 5 Metern Breite wirklich viel Platz.'
  },
  {
    icon: Sun,
    title: 'Nachhaltige Technologie',
    description: '3200W Solarpanels, 6kW Stromaggregat und 18kWh Batteriekapazität für vollkommen autarke Stromversorgung mit automatisiertem Bord-System.'
  },
  {
    icon: Coffee,
    title: 'Premium Ausstattung',
    description: 'Bodentiefe Panoramafenster, Infrarot-Sauna mit Sternenhimmel, OLED-TV und eine komplett ausgestattete Küche mit DeLonghi-Kaffeevollautomat.'
  },
  {
    icon: Waves,
    title: 'Wasserspaß garantiert',
    description: 'Ein separates Beiboot mit Torqeedo Elektromotor (führerscheinfrei), zwei SUPs, Wasserhängematten und ein freischwebender Hängesessel über dem Wasser.'
  },
  {
    icon: Compass,
    title: 'Erstklassige Lage',
    description: 'Der Liegeplatz im Heimathafen ist in erster Reihe mit direktem Blick auf den See und in die Natur. Natürlich kann auch an geeigneten Stellen in der Nähe geankert werden.'
  },
  {
    icon: Bed,
    title: 'Komfortabler Schlafbereich',
    description: 'Zwei 160x200cm Doppelbetten und flexible Plissees bieten erholsamen Schlaf für bis zu 4 Personen.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-houseboat-darkblue mb-4">
            Luxus auf dem Wasser
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Die Berliner Insel vereint modernen Komfort, nachhaltige Technologie und maritimes Flair zu einem einzigartigen Erlebnis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }: { feature: { icon: any; title: string; description: string } }) => {
  const Icon = feature.icon;
  
  return (
    <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-houseboat-teal flex-shrink-0">
          <Icon size={36} />
        </div>
        <h3 className="text-xl font-bold text-houseboat-darkblue">{feature.title}</h3>
      </div>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  );
};

export default FeaturesSection;
