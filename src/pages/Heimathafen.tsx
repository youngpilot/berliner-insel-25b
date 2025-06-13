
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Anchor, Coffee, Utensils, Car, Sailboat, ShoppingBag } from 'lucide-react';

const Heimathafen = () => {
  React.useEffect(() => {
    document.title = "Heimathafen - Berliner Insel";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-houseboat-darkblue font-playfair">Heimathafen</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="shadow-md overflow-hidden h-full">
                <div className="relative h-64 sm:h-80">
                  <img 
                    src="/lovable-uploads/9a3d207c-9504-4104-9782-6aaf12d69dd8.png" 
                    alt="Potsdam Marina - Heimathafen der Berliner Insel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-houseboat-darkblue">Potsdam Marina - Unser Heimathafen</h2>
                  <p className="mb-4 text-muted-foreground">
                    Die Berliner Insel liegt in der modernen Potsdam Marina - einem idyllischen Heimathafen mit perfekter Infrastruktur am malerischen Templiner See. Von hier aus haben Sie direkten Zugang zu den Potsdamer Havelseen und zahlreichen Sehenswürdigkeiten.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Der Liegeplatz in erster Reihe bietet einen unverbaubaren Blick auf den See und direkten Zugang zum Wasser. Die Marina verfügt über moderne Sanitäranlagen, Restaurants, Einkaufsmöglichkeiten und bequeme Parkplätze.
                  </p>
                  <p className="text-muted-foreground">
                    Adresse: Tschudistraße 8, 14476 Potsdam, Linker Steg, Liegeplatz 10
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="shadow-md h-full">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6 text-houseboat-darkblue">Ausstattung & Umgebung</h2>
                  
                  <div className="space-y-5">
                    <AmenityItem 
                      icon={<Anchor />}
                      title="Moderne Marina"
                      description="Sichere Liegeplätze mit Strom- und Wasseranschluss"
                    />
                    
                    <AmenityItem 
                      icon={<Utensils />}
                      title="Gastronomie"
                      description="Restaurants und Cafés in direkter Nähe"
                    />
                    
                    <AmenityItem 
                      icon={<Coffee />}
                      title="Café & Bäckerei"
                      description="Frische Backwaren jeden Morgen"
                    />
                    
                    <AmenityItem 
                      icon={<ShoppingBag />}
                      title="Einkaufsmöglichkeiten"
                      description="Supermärkte und Shops in der Umgebung"
                    />
                    
                    <AmenityItem 
                      icon={<Sailboat />}
                      title="Bootsverleih"
                      description="Zusätzliche Wassersportangebote in der Marina"
                    />
                    
                    <AmenityItem 
                      icon={<Car />}
                      title="Parkplätze"
                      description="Bequeme Parkmöglichkeiten direkt an der Marina"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className="shadow-md overflow-hidden mb-12">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-houseboat-darkblue">Anreise</h2>
              <p className="mb-6 text-muted-foreground">
                Die Potsdam Marina ist sowohl mit dem Auto als auch mit öffentlichen Verkehrsmitteln gut zu erreichen. Von Berlin aus sind es nur etwa 30 Minuten Fahrzeit.
              </p>
              
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.5344114323296!2d13.056890776871799!3d52.39601824430271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f5966ea5ee1f%3A0xc3c3e25da90aab0!2sPotsdam%20Marina!5e0!3m2!1sde!2sde!4v1653473914233!5m2!1sde!2sde" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
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

const AmenityItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex items-start">
      <div className="text-houseboat-teal mr-3">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-houseboat-darkblue">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Heimathafen;
