
import React from 'react';
import { MapPin, Home, Car, Ship } from 'lucide-react';
const LocationSection = () => {
  return <section id="location" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-houseboat-darkblue mb-6">
              Premiumlage am Jungfernsee
            </h2>
            <p className="text-lg text-muted-foreground mb-6">Die Berliner Insel liegt in der idyllischen Potsdam Marina direkt am Jungfernsee. Genießen Sie natürliche Ruhe und Privatsphäre auf dem Wasser und können trotzdem Potsdam gut erreichen.</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 bg-houseboat-teal rounded-full p-2">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-houseboat-darkblue">Adresse</h3>
                  <p className="text-muted-foreground">Tschudistraße 8/9, 14476 Potsdam</p>
                  <p className="text-muted-foreground">Linker Steg, Liegeplatz 10</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 bg-houseboat-blue rounded-full p-2">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-houseboat-darkblue">Sehenswürdigkeiten in der Nähe</h3>
                  <ul className="list-disc ml-5 text-muted-foreground">
                    <li>Berühmter Schlosspark Sanssouci</li>
                    <li>Historische Potsdamer Innenstadt</li>
                    <li>Neuer Garten Schloss Cecilienhof</li>
                    <li>Holländisches Viertel</li>
                    <li>Jungfernsee und Krampnitzsee</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 bg-houseboat-sand rounded-full p-2">
                  <Car className="w-5 h-5 text-gray-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-houseboat-darkblue">Mobilität & Verkehr</h3>
                  <ul className="list-disc ml-5 text-muted-foreground">
                    <li>Parkplätze in der Marina</li>
                    <li>Potsdam Hauptbahnhof in 30 Minuten mit Öffis </li>
                    <li>BER Flughafen in 45 Minuten mit Auto/Taxi</li>
                    <li>Separates Beiboot zur Versorgung und Erkundung</li>
                    <li>Skipper-Service nach Vereinbarung</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <a href="https://www.google.com/maps/place/Berliner+Insel+Hausboot+Potsdam/@52.4395929,13.0476554,17z/data=!4m6!3m5!1s0x47a8f7ab2806e4d3:0x4ae6579d63fb3a40!8m2!3d52.4395929!4d13.0502303!16s%2Fg%2F11ycj1ln1j?entry=tts&g_ep=EgoyMDI1MDUxNS4wIPu8ASoASAFQAw%3D%3D&skid=5653d863-da0e-4d11-a3a1-326a5740631a" target="_blank" rel="noopener noreferrer" className="inline-block bg-houseboat-teal text-white py-3 px-6 rounded-lg font-medium hover:bg-houseboat-teal/90 transition-colors">
              Wegbeschreibung anzeigen
            </a>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77829.8679648396!2d12.897794997265624!3d52.43959289999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f7ab2806e4d3%3A0x4ae6579d63fb3a40!2sBerliner%20Insel%20Hausboot%20Potsdam!5e0!3m2!1sde!2sde!4v1747846667564!5m2!1sde!2sde" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hausboot Lage"></iframe>
          </div>
        </div>
      </div>
    </section>;
};
export default LocationSection;
