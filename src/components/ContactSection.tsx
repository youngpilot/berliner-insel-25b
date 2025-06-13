import React from 'react';
import { Calendar, Clock, Mail, Phone, MapPin } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-houseboat-sand/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-houseboat-darkblue mb-6">
              Kontakt
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Haben Sie Fragen zu unserem Hausboot oder möchten Sie eine besondere Anfrage stellen? Wir sind für Sie da, um Ihren Aufenthalt perfekt zu gestalten.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 bg-houseboat-blue rounded-full p-2">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-houseboat-darkblue">Telefon</h3>
                  <p className="text-muted-foreground">0170 9118465</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 bg-houseboat-teal rounded-full p-2">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-houseboat-darkblue">E-Mail</h3>
                  <p className="text-muted-foreground">ahoi@berliner-insel.de</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 bg-houseboat-darkblue rounded-full p-2">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-houseboat-darkblue">Adresse</h3>
                  <p className="text-muted-foreground">Tschudistraße 8/9, 14476 Potsdam</p>
                  <p className="text-muted-foreground">Linker Steg, Liegeplatz 10</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 bg-houseboat-sand rounded-full p-2">
                  <Clock className="w-5 h-5 text-gray-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-houseboat-darkblue">Übergabe-Zeiten</h3>
                  <p className="text-muted-foreground">Check-in: Sonntag 12-14 Uhr</p>
                  <p className="text-muted-foreground">Check-out: Samstag 10-12 Uhr</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 bg-houseboat-wood rounded-full p-2">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-houseboat-darkblue">Besichtigung</h3>
                  <p className="text-muted-foreground">Nach Absprache Samstags 17-18 Uhr</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <iframe data-tally-src="https://tally.so/embed/mKyBBD?hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="455" frameBorder="0" marginHeight={0} marginWidth={0} title="Kontaktformular" className="mx-auto"></iframe>
            <script dangerouslySetInnerHTML={{
            __html: `
                var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
              `
          }} />
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;