
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Anchor, Ship, Info } from 'lucide-react';

const Heimatrevier = () => {
  React.useEffect(() => {
    document.title = "Heimatrevier - Berliner Insel";
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    {
      name: "Templiner See",
      description: "Ruhiges Gewässer mit idyllischen Buchten und Ankermöglichkeiten.",
      coordinates: "52.3841° N, 13.0564° O"
    },
    {
      name: "Schwielowsee",
      description: "Großer See mit schönen Badestellen und malerischen Ufern.",
      coordinates: "52.3336° N, 13.0960° O"
    },
    {
      name: "Werder (Havel)",
      description: "Charmante Inselstadt mit historischem Stadtkern und Restaurants.",
      coordinates: "52.3637° N, 12.9339° O"
    },
    {
      name: "Caputh",
      description: "Idyllischer Ort mit Schloss Caputh und Einsteins Sommerhaus.",
      coordinates: "52.3371° N, 13.0125° O"
    },
    {
      name: "Potsdam Zentrum",
      description: "Historische Innenstadt mit Schlössern und Parks.",
      coordinates: "52.3906° N, 13.0645° O"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-houseboat-darkblue font-playfair">Heimatrevier</h1>
          
          <div className="mb-12">
            <Card className="shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-6 lg:p-8">
                  <h2 className="text-2xl font-bold mb-4 text-houseboat-darkblue">Die Potsdamer Havelseen</h2>
                  <p className="mb-4 text-muted-foreground">
                    Das Heimatrevier der Berliner Insel umfasst die wunderschönen Potsdamer Havelseen - ein vielseitiges Wassersportgebiet mit zahlreichen Seen, Buchten und Wasserwegen. Von der Potsdam Marina aus können Sie (mit Führerschein oder nach einer Einweisung) eine Vielzahl attraktiver Ziele erreichen.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Die Potsdamer Havelseen sind ein perfektes Revier für gemütliche Ausflüge, mit vielen geschützten Ankerbuchten, Badestellen und Anlegemöglichkeiten. Das Gebiet ist übersichtlich und auch für Wassersport-Neulinge gut geeignet.
                  </p>
                  <p className="text-muted-foreground">
                    Das Befahren ist mit unserem Charter-Schein nach entsprechender Einweisung auch ohne Sportbootführerschein möglich (für Pakete 1-3).
                  </p>
                </div>
                <div className="lg:h-auto">
                  <img 
                    src="/lovable-uploads/a0a7dad5-9ca5-4102-88e3-42916110dd60.png" 
                    alt="Potsdamer Havelseen" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="shadow-md h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-houseboat-darkblue">Revierbesonderheiten</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-houseboat-teal mr-4 mt-1">
                        <Navigation size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-houseboat-darkblue">Vielseitiges Fahrgebiet</h3>
                        <p className="text-muted-foreground">
                          Das Revier bietet eine Mischung aus großen offenen Wasserflächen und geschützten Buchten. Sie können sowohl entspannte Ankertage in ruhigen Gewässern als auch längere Touren über die größeren Seen genießen.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-houseboat-teal mr-4 mt-1">
                        <Anchor size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-houseboat-darkblue">Ankerbuchten & Häfen</h3>
                        <p className="text-muted-foreground">
                          Zahlreiche natürliche Buchten laden zum Ankern ein. Alternativ können Sie an den gut ausgestatteten Sportboothäfen in Werder, Caputh oder Potsdam festmachen (gegen Gebühr).
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-houseboat-teal mr-4 mt-1">
                        <Ship size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-houseboat-darkblue">Anfängerfreundlich</h3>
                        <p className="text-muted-foreground">
                          Die Gewässer sind übersichtlich und leicht zu navigieren. Die Wassertiefe ist in den meisten Bereichen ausreichend für unser Hausboot, und starke Strömungen kommen praktisch nicht vor.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-houseboat-teal mr-4 mt-1">
                        <Info size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-houseboat-darkblue">Besondere Hinweise</h3>
                        <p className="text-muted-foreground">
                          Beachten Sie die lokalen Geschwindigkeitsbegrenzungen und Naturschutzgebiete. In den Sommermonaten kann es auf den Hauptwasserwegen mehr Verkehr geben. Eine detaillierte Reviereinweisung erhalten Sie vor Ihrer Abfahrt.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="shadow-md h-full">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6 text-houseboat-darkblue flex items-center">
                    <MapPin className="mr-2 text-houseboat-teal" />
                    Highlights im Revier
                  </h2>
                  
                  <div className="space-y-6">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <h3 className="font-medium text-houseboat-darkblue mb-1">{highlight.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{highlight.description}</p>
                        <p className="text-xs text-gray-400">{highlight.coordinates}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className="shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-houseboat-darkblue">Revierkarte</h2>
              <p className="mb-6 text-muted-foreground">
                Übersicht über das Heimatrevier der Berliner Insel mit den wichtigsten Gewässern und Anlegemöglichkeiten.
              </p>
              
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/d/embed?mid=1ZLMPf4wGRYVlPRQUGHR5iuJQYPUeWws&ehbc=2E312F" 
                  width="100%" 
                  height="480"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Heimatrevier;
