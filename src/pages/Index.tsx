
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import GallerySection from '@/components/GallerySection';
import AmenitiesSection from '@/components/AmenitiesSection';
import LocationSection from '@/components/LocationSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ExperiencePackagesSection from '@/components/ExperiencePackagesSection';
import PricingSection from '@/components/PricingSection';
import BookingSection from '@/components/BookingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Set document title to Berliner Insel in German
  React.useEffect(() => {
    document.title = "Berliner Insel - Luxus Hausboot in Potsdam";
    
    // Initialize Tally forms
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <AmenitiesSection />
      
      {/* Apply a specific background color to LocationSection */}
      <div className="bg-houseboat-pastel/40">
        <LocationSection />
      </div>
      
      {/* Apply a lighter background color to TestimonialsSection */}
      <div className="bg-houseboat-pastel/50">
        <TestimonialsSection />
      </div>
      
      <ExperiencePackagesSection />
      <PricingSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
