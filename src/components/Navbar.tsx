
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const textColor = isHomePage && !isScrolled ? "text-white text-shadow-lg" : "text-houseboat-darkblue";
  
  const navbarBackground = isScrolled || !isHomePage 
    ? 'bg-houseboat-pearl/95 shadow-md backdrop-blur-sm' 
    : '';
  
  // Helper function to determine the correct link format
  const getSectionLink = (section: string) => {
    return isHomePage ? `#${section}` : `/#${section}`;
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      // If on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to homepage
      window.location.href = '/';
    }
  };

  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4', navbarBackground)}>
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={handleLogoClick} className="flex items-center cursor-pointer">
          <img 
            src="/lovable-uploads/8effd43f-8ae9-4726-99b7-98210dd0a698.png" 
            alt="Berliner Insel Logo" 
            className="h-8 md:h-10 object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink href={getSectionLink("gallery")} isScrolled={isScrolled} isHomePage={isHomePage}>Galerie</NavLink>
          <NavLink href={getSectionLink("amenities")} isScrolled={isScrolled} isHomePage={isHomePage}>Ausstattung</NavLink>
          <NavLink href={getSectionLink("packages")} isScrolled={isScrolled} isHomePage={isHomePage}>Pakete</NavLink>
          <NavLink href={getSectionLink("pricing")} isScrolled={isScrolled} isHomePage={isHomePage}>Preise</NavLink>
          <NavLink href={getSectionLink("booking")} isScrolled={isScrolled} isHomePage={isHomePage}>Kalender</NavLink>
          <NavLink href={getSectionLink("location")} isScrolled={isScrolled} isHomePage={isHomePage}>Standort</NavLink>
          <Button className="bg-houseboat-blue hover:bg-houseboat-blue/90 text-white" asChild>
            <a href="https://tally.so/r/wzOKAq" target="_blank" rel="noopener noreferrer">
              Jetzt Buchen
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={cn("p-2 rounded-md", textColor)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-houseboat-pearl shadow-lg p-4">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href={getSectionLink("gallery")} onClick={() => setIsMobileMenuOpen(false)}>Galerie</MobileNavLink>
            <MobileNavLink href={getSectionLink("amenities")} onClick={() => setIsMobileMenuOpen(false)}>Ausstattung</MobileNavLink>
            <MobileNavLink href={getSectionLink("packages")} onClick={() => setIsMobileMenuOpen(false)}>Pakete</MobileNavLink>
            <MobileNavLink href={getSectionLink("pricing")} onClick={() => setIsMobileMenuOpen(false)}>Preise</MobileNavLink>
            <MobileNavLink href={getSectionLink("booking")} onClick={() => setIsMobileMenuOpen(false)}>Kalender</MobileNavLink>
            <MobileNavLink href={getSectionLink("location")} onClick={() => setIsMobileMenuOpen(false)}>Standort</MobileNavLink>
            <Button className="bg-houseboat-blue hover:bg-houseboat-blue/90 text-white w-full" asChild>
              <a href="https://tally.so/r/wzOKAq" target="_blank" rel="noopener noreferrer">
                Jetzt Buchen
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
  isScrolled,
  isHomePage
}: {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
  isHomePage: boolean;
}) => (
  <a href={href} className={cn(
    "font-medium hover:text-houseboat-blue transition-colors", 
    isHomePage && !isScrolled ? "text-white text-shadow" : "text-houseboat-darkblue"
  )}>
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  children,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a href={href} className="text-houseboat-darkblue font-medium py-2 border-b border-gray-100" onClick={onClick}>
    {children}
  </a>
);

export default Navbar;
