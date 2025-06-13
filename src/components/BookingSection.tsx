
import React from 'react';
import { Button } from '@/components/ui/button';

const BookingSection = () => {
  return <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-houseboat-darkblue mb-4 font-playfair">Buchungskalender</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Reservieren Sie Ihren exklusiven Hausboot-Aufenthalt noch heute
          </p>
        </div>
        
        <div className="flex justify-center w-full mb-12">
          <iframe src="https://api.belegungskalender-kostenlos.de/kalender.php?kid=56647" width="100%" height="450" frameBorder="0" title="Buchungskalender" className="max-w-3xl mx-auto"></iframe>
        </div>
        
        <div className="text-center">
          <Button className="bg-houseboat-wood hover:bg-houseboat-wood/90 text-white py-6 px-12 text-lg" asChild>
            <a href="https://tally.so/r/wzOKAq" target="_blank" rel="noopener noreferrer">
              Jetzt Buchen
            </a>
          </Button>
        </div>
      </div>
    </section>;
};

export default BookingSection;
