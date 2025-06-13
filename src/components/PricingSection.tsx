import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ParkingCircle, Shirt, Fuel, Anchor, Clock, Ship } from 'lucide-react';

const PricingSection = () => {
  return <section id="pricing" className="py-20 bg-houseboat-teal/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-houseboat-darkblue mb-4 font-playfair">
            Preise & Leistungen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Die Berliner Insel wird wöchentlich, jeweils Sonntag 12–14 bis Samstag 10–12 Uhr, für 1–4 Personen vermietet.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <PriceCard season="Hauptsaison" period="15. Mai–15. September" originalPrice="3.360 €" discountedPrice="2.688 €" discount="20% Eröffnungsrabatt" highlight={true} />
          
          <PriceCard season="Nebensaison" period="1. April–14. Mai & 16. September–31. Oktober" originalPrice="2.800 €" />
          
          <PriceCard season="Winter" period="1. November–31. März" originalPrice="2.200 €" note="nur Paket 1, stationär am Steg" />
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-houseboat-darkblue mb-4">+ 1000 € Kaution</h3>
          <p className="text-lg text-muted-foreground">Rückerstattung innerhalb 7 Tagen nach einwandfreier Rückgabe</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-md bg-white h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-houseboat-darkblue mb-6 flex items-center">
                <Check className="mr-2 text-houseboat-teal" size={24} />
                Inklusiv-Leistungen
              </h3>
              <ul className="space-y-3">
                {inclusiveServices.map((service, index) => <ServiceItem key={index} text={service} />)}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md bg-white h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-houseboat-darkblue mb-6 flex items-center">
                <Check className="mr-2 text-houseboat-teal" size={24} />
                Optionale Extras
              </h3>
              <ul className="space-y-3">
                {optionalExtras.map((extra, index) => <ServiceItem key={index} text={extra.text} icon={extra.icon} />)}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Zahlungs- und Stornobedingungen finden Sie im Mietvertrag.
          </p>
        </div>
      </div>
    </section>;
};

const PriceCard = ({
  season,
  period,
  originalPrice,
  discountedPrice,
  discount,
  note,
  highlight = false
}: {
  season: string;
  period: string;
  originalPrice: string;
  discountedPrice?: string;
  discount?: string;
  note?: string;
  highlight?: boolean;
}) => {
  return <Card className={`h-full shadow-md ${highlight ? 'ring-2 ring-houseboat-teal' : ''}`}>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-houseboat-darkblue mb-2">{season}</h3>
        <p className="text-muted-foreground mb-6">{period}</p>
        
        <div className="mb-4">
          <p className="text-lg font-medium">Basispreis pro Woche:</p>
          <div className="flex items-baseline">
            {discountedPrice ? <>
                <span className="text-gray-400 line-through text-xl mr-2">{originalPrice}</span>
                <span className="text-3xl font-bold text-houseboat-wood">{discountedPrice}</span>
              </> : <span className="text-3xl font-bold">{originalPrice}</span>}
          </div>
          
          {discount && <div className="mt-2 inline-block bg-houseboat-teal/10 text-houseboat-teal px-3 py-1 rounded-full text-sm font-medium">
              {discount}
            </div>}
        </div>
        
        {note && <p className="text-sm text-muted-foreground mt-4 italic">{note}</p>}
      </CardContent>
    </Card>;
};

const ServiceItem = ({
  text,
  icon
}: {
  text: string;
  icon?: React.ReactNode;
}) => {
  return <li className="flex items-start">
      <div className="flex-shrink-0 mr-3 text-houseboat-teal mt-1">
        {icon || <Anchor size={18} />}
      </div>
      <span>{text}</span>
    </li>;
};

const inclusiveServices = ["Elektrisches Beiboot für 4 Personen", "2 Stand-Up-Paddle-Boards, 2 Wasserhängematten", "Weber Gas-Grill (inkl. Gaskartusche)", "Pelletofen (15 kg Pellets)", "DeLonghi Kaffeevollautomat (inkl. Bohnen)", "Große Geschirrspülmaschine, Kühlschrank mit Eisfach", "Infrarotsauna für 2 Personen", "600L Frischwassertank & Umweltfreundliches Toilettenpapier", "Mini-Waschmaschine (inkl. Waschmittel)", "Schnelles unbegrenztes 5G-WiFi", "Kran mit schwebendem Relaxsessel", "Sicherheitsausrüstung (Alarmanlage, Rettungswesten, Safe, Feuerlöscher)"];

const optionalExtras = [{
  text: "Parkplatz (Marina): 10 €/Tag",
  icon: <ParkingCircle size={18} />
}, {
  text: "Handtücher: 10 €/Person/Buchung",
  icon: <Shirt size={18} />
}, {
  text: "Bettwäsche: 10 €/Person/Buchung",
  icon: <Shirt size={18} />
}, {
  text: "Kraftstoff (Diesel/Benzin): 2,50 €/Liter (nach Verbrauch)",
  icon: <Fuel size={18} />
}, {
  text: "Skipper-Service: 75 €/Stunde",
  icon: <Ship size={18} />
}];

export default PricingSection;
