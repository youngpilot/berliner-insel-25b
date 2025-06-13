import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Anchor, Compass, Sailboat } from 'lucide-react';

const ExperiencePackagesSection = () => {
  return <section id="packages" className="py-20 bg-houseboat-sand/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-houseboat-darkblue mb-4 font-playfair">
            Erlebnis-Pakete
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Wählen Sie Ihr gewünschtes Erlebnis aus vier verschiedenen Paketen</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <PackageCard 
            number="1" 
            title="Heimathafen" 
            subtitle="Komfort ohne Führerschein" 
            description="Genießen Sie das Hausboot in der Premiumlage der Potsdam Marina. Die Berliner Insel bleibt festgemacht. Das Beiboot ist nach Einweisung nutzbar." 
            price="Basispreis" 
            icon={<MapPin className="w-12 h-12 text-houseboat-blue" />} 
          />
          
          <PackageCard 
            number="2" 
            title="Ankerplatz" 
            subtitle="Natur pur ohne Führerschein" 
            description="Ein Skipper bringt die Berliner Insel zu einem malerischen Ankerplatz nahe der Marina, wo sie für die Woche bleibt. Erkundung und Verpflegung sind mit dem Beiboot möglich." 
            price="Basispreis + 200 € Skipper-Service" 
            icon={<Anchor className="w-12 h-12 text-houseboat-blue" />} 
          />
          
          <PackageCard 
            number="3" 
            title="Charter-Schein" 
            subtitle="Selbstständig auf dem Wasser im Heimatrevier" 
            description="Nach umfassender Einweisung steuern Sie die &quot;Berliner Insel&quot; selbst im Heimatrevier – auch ohne Sportbootführerschein." 
            price="Basispreis + 350 € Einweisung" 
            icon={<Sailboat className="w-12 h-12 text-houseboat-blue" />} 
          />
          
          <PackageCard 
            number="4" 
            title="Kapitän mit SBF Binnen" 
            subtitle="Freiheit auf den Berliner Gewässern entdecken" 
            description="Mit einem Sportbootführerschein Binnen können Sie ihre eigene Route fahren und nach Belieben an geeigneten Stellen ankern." 
            price="Basispreis + 200 € Einweisung" 
            icon={<Compass className="w-12 h-12 text-houseboat-blue" />} 
          />
        </div>
      </div>
    </section>;
};

const PackageCard = ({
  number,
  title,
  subtitle,
  description,
  price,
  icon
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}) => {
  return <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-houseboat-blue">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="mr-4 flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-houseboat-darkblue">Paket {number}: {title}</h3>
            <p className="text-houseboat-teal font-medium">{subtitle}</p>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <div className="font-medium flex items-center">
            <span className="text-houseboat-wood mr-2">Preis:</span> 
            <span>{price}</span>
          </div>
        </div>
      </CardContent>
    </Card>;
};

export default ExperiencePackagesSection;
