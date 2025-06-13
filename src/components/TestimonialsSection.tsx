
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [{
  quote: "Ein wahres Schmuckstück auf dem Wasser! Die Berliner Insel übertrifft alle unsere Erwartungen. Der Schwebesessel über dem Wasser, das durchdachte Design und der atemberaubende Blick vom Oberdeck haben unseren Urlaub unvergesslich gemacht.",
  author: "Familie Trepper",
  image: "/lovable-uploads/6d569762-5ecc-47fe-afbf-1b6161434d77.png",
  location: "Hannover",
  rating: 5
}, {
  quote: "Wir haben uns einen romantischen Kurzurlaub auf der Berliner Insel gegönnt und sind begeistert. Die Infrarotsauna, das elektrische Beiboot, der Hängesessel über dem Wasser und der gemütliche Kamin sind absolute Highlights. Ein luxuriöser Rückzugsort mitten in der Natur!",
  author: "Thomas & Anna Börner",
  image: "/lovable-uploads/e342a754-4f0c-442f-9a91-f67bbc40f82c.png",
  location: "Hamburg",
  rating: 5
}, {
  quote: "Wir haben auf der Berliner Insel halbtags remote gearbeitet, und die ersehnte Balance zwischen Arbeit und Erholung gefunden. Das schnelle Internet, der große Esstisch als Arbeitsplatz und die Möglichkeit, direkt ins Wasser zu springen, waren perfekt. Wir kommen definitiv wieder!",
  author: "Claudia & Michael Wagner",
  image: "/lovable-uploads/ae5a3240-6148-4c04-b779-96cf15d5b51c.png",
  location: "Berlin",
  rating: 5
}];

const TestimonialsSection = () => {
  return <section id="testimonials" className="py-20 bg-houseboat-pearl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-houseboat-darkblue mb-4">
            Gästeerfahrungen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Was unsere Gäste von ihrer Woche auf der Berliner Insel berichten</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="relative overflow-hidden border-none shadow-lg bg-white">
              <div className="absolute top-0 left-0 w-2 h-full bg-houseboat-teal"></div>
              <CardContent className="p-8">
                <div className="mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => <svg key={i} className="inline-block w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>)}
                </div>
                
                <blockquote className="text-lg italic text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ')[0][0]}{testimonial.author.split(' ').length > 1 ? testimonial.author.split(' ')[1][0] : ''}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-houseboat-darkblue">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};

export default TestimonialsSection;
