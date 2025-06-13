
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How many guests can the houseboat accommodate?",
      answer: "Our houseboat can comfortably accommodate up to 6 guests. It features a master bedroom, a second bedroom with two single beds, and a convertible sofa in the living area."
    },
    {
      question: "Is the houseboat stationary or can it be moved?",
      answer: "Our houseboat is primarily stationary, moored at a dedicated slip with beautiful water views. However, guided excursions can be arranged with advance notice and are subject to weather conditions and availability."
    },
    {
      question: "Do I need boating experience to stay on the houseboat?",
      answer: "No boating experience is required for staying on our houseboat. It's designed to provide all the comforts of a luxury accommodation while offering the unique experience of being on the water."
    },
    {
      question: "Is the houseboat connected to utilities?",
      answer: "Yes, our houseboat is connected to shore power, fresh water, and waste disposal systems. You'll have all the modern conveniences including electricity, running water, heating/cooling, and internet access."
    },
    {
      question: "What amenities are included?",
      answer: "Our houseboat includes a fully equipped kitchen, air conditioning/heating, WiFi, smart TV, luxury linens and towels, outdoor seating area, BBQ grill, and complimentary paddleboards and kayaks."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we provide complimentary parking for two vehicles in our secure marina parking lot, located just a short walk from the houseboat."
    },
    {
      question: "What happens in case of severe weather?",
      answer: "The houseboat is securely moored and designed to handle normal weather conditions. In case of severe weather warnings, our team will contact you with safety instructions or alternative accommodation arrangements if necessary."
    },
    {
      question: "Is the houseboat accessible for people with mobility challenges?",
      answer: "While we strive to be as accommodating as possible, the nature of houseboat access involves gangways and steps that may present challenges for guests with mobility issues. Please contact us directly to discuss your specific needs before booking."
    },
    {
      question: "Are life jackets provided?",
      answer: "Yes, we provide USCG-approved life jackets in various sizes for all guests. Safety is our top priority, especially for water activities."
    },
    {
      question: "Can we fish from the houseboat?",
      answer: "Yes, fishing is permitted from designated areas of the houseboat. A valid fishing license may be required according to local regulations. Please practice catch and release to support sustainable fishing."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-32 flex-grow">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link to="/" className="text-houseboat-blue hover:text-houseboat-darkblue transition-colors">
                &larr; Back to Home
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-houseboat-darkblue mb-8">
              Frequently Asked Questions
            </h1>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground">
                Find answers to the most common questions about staying on our luxury houseboat. If you don't see the answer to your question, please don't hesitate to contact us.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg p-1"
                >
                  <AccordionTrigger className="text-left font-medium text-houseboat-darkblue px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-4 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-houseboat-darkblue mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                We're here to help make your houseboat experience perfect. Contact us directly for any other questions you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/#contact" 
                  className="bg-houseboat-blue text-white px-6 py-3 rounded-lg hover:bg-houseboat-blue/90 transition-colors text-center"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/#booking" 
                  className="bg-houseboat-teal text-white px-6 py-3 rounded-lg hover:bg-houseboat-teal/90 transition-colors text-center"
                >
                  Book Your Stay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
