
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div id="home" className="relative h-screen w-full">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
        backgroundImage: 'url("/lovable-uploads/29080415-b0d0-4955-8154-ef97b694468b.png")'
      }}>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        <div className="animate-float">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 max-w-4xl font-playfair" style={{
            textShadow: '0 0 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.4)'
          }}>
            Willkommen auf der Berliner Insel
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto" style={{
            textShadow: '0 0 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 6px 12px rgba(0, 0, 0, 0.7)'
          }}>Genießen Sie ihren Traumurlaub auf unserem Premium-Hausboot in der idyllischen Potsdam Marina direkt am Jungfernsee</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-houseboat-blue hover:bg-houseboat-blue/90 text-white text-lg px-8 py-6" asChild>
              <a href="https://tally.so/r/wzOKAq" target="_blank" rel="noopener noreferrer">
                Jetzt Buchen
              </a>
            </Button>
            <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30 text-lg px-8 py-6" asChild>
              <a href="#gallery">
                Rundgang Starten
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white flex flex-col items-center animate-pulse">
        <span className="text-sm mb-2" style={{
          textShadow: '0 0 20px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.4)'
        }}>Nach unten scrollen</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
