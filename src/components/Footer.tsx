
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-houseboat-darkblue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">Berliner Insel</h3>
            <p className="text-gray-300 mb-6">
              Die Berliner Insel ist ein luxuriöses Hausboot mit erstklassiger Ausstattung, das Ihnen einen einzigartigen Urlaub auf dem Wasser ermöglicht. Genießen Sie die perfekte Kombination aus modernem Komfort und Naturerlebnis inmitten der malerischen Gewässer von Potsdam und Berlin.
            </p>
            
            {/* Social Media Buttons */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Berliner Insel auf...</h4>
              <div className="flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  className="w-full max-w-xs bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all"
                  asChild
                >
                  <a 
                    href="https://www.youtube.com/@BerlinerInsel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full max-w-xs bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all"
                  asChild
                >
                  <a 
                    href="https://www.airbnb.de/rooms/1400773459343699335?source_impression_id=p3_1748185317_P3TqvjSq2AF31XFJ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Airbnb
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full max-w-xs bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all"
                  asChild
                >
                  <a 
                    href="https://www.clickandboat.com/de/boot-mieten/potsdam/hausboot/berliner-insel-individuell-9zve77b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Click&Boat
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Schnelllinks</h4>
            <ul className="space-y-4">
              <li><a href="/#gallery" className="text-gray-300 hover:text-white transition-colors">Galerie</a></li>
              <li><a href="/#amenities" className="text-gray-300 hover:text-white transition-colors">Ausstattung</a></li>
              <li><a href="/#location" className="text-gray-300 hover:text-white transition-colors">Standort</a></li>
              <li><a href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">Bewertungen</a></li>
              <li><a href="/#packages" className="text-gray-300 hover:text-white transition-colors">Pakete</a></li>
              <li><a href="/#pricing" className="text-gray-300 hover:text-white transition-colors">Preise & Leistungen</a></li>
              <li><a href="/#booking" className="text-gray-300 hover:text-white transition-colors">Kalender</a></li>
              <li><a href="https://tally.so/r/wzOKAq" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Jetzt Buchen</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Weiterführende Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/dokumente" className="text-gray-300 hover:text-white transition-colors">
                  Dokumente
                </Link>
              </li>
              <li>
                <a href="https://www.youtube.com/@BerlinerInsel" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Videos & Tutorials
                </a>
              </li>
              <li>
                <Link to="/heimathafen" className="text-gray-300 hover:text-white transition-colors">
                  Heimathafen
                </Link>
              </li>
              <li>
                <Link to="/heimatrevier" className="text-gray-300 hover:text-white transition-colors">
                  Heimatrevier
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} Berliner Insel. Alle Rechte vorbehalten.
          </div>
          <div>
            <Link to="/impressum" className="text-gray-400 hover:text-white text-sm transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
