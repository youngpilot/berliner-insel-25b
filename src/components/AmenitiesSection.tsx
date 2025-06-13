
import React from 'react';
import { cn } from '@/lib/utils';

const amenities = [
  {
    category: "Innenbereich",
    items: [
      "18 m² großes Wohnzimmer mit Panoramafenstern",
      "Voll ausgestattete Küche mit DeLonghi-Kaffeevollautomat",
      "OLED Fernseher mit Internet für Ihre Streaming-Dienste",
      "Zwei gemütliche 160x200 cm Doppelbetten mit Seeblick",
      "Infrarotsauna mit LED-Sternenhimmel und Verdampfer",
      "Schnelles & unbegrenztes 5G-Internet (250Mbit) mit WLAN",
      "Große Geschirrspülmaschine und Mini-Waschmaschine",
      "App-gesteuerter Pelletofen für gemütliche Abende"
    ]
  },
  {
    category: "Außenbereich",
    items: [
      "32 m² Außendeck mit zwei Badeplattformen",
      "29 m² großes Oberdeck mit gepolsterten XXL-Liegen",
      "Elektrisches Beiboot für 4 Personen (führerscheinfrei)",
      "Zwei Stand-up-Paddleboards (SUPs) inklusive",
      "2,80 m hoher Lastenkran mit Hängesessel über dem Wasser",
      "Weber-Gasgrill im Hinterschiff",
      "Warme Außendusche direkt neben der Badeleiter",
      "Wasserhängematten für entspannten Badespaß",
      "Viele Sitzmöglichkeiten mit atemberaubendem Ausblick"
    ]
  },
  {
    category: "Technik & Sicherheit",
    items: [
      "3200W Solarpanels und 18kWh Batteriekapazität",
      "Automatisiertes Bord-System für mühelosen Komfort",
      "Garmin-GPS-Navigationssystem mit Echolot",
      "Zertifizierte Alarmanlage und Rauchmelder",
      "Schwimmwesten für Erwachsene und Kinder",
      "Proportionales Heck- und Bugstrahlruder",
      "Elektrische Ankerwinde mit 40kg Bruce-Anker",
      "Steiner Commander 50 Fernglas für Naturbeobachtungen"
    ]
  }
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-houseboat-darkblue mb-4">
            Luxuriöse Ausstattung
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Jedes Detail unseres Hausboots wurde sorgfältig für Ihren Komfort gestaltet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {amenities.map((category, index) => (
            <div 
              key={index} 
              className={cn(
                "p-8 rounded-lg",
                index === 0 ? "bg-houseboat-blue text-white" : 
                index === 1 ? "bg-houseboat-teal text-white" : 
                "bg-houseboat-sand text-gray-800"
              )}
            >
              <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg 
                      className="w-5 h-5 mr-2 mt-1 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
