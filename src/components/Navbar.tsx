
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-collagen-deep-purple font-bold text-2xl">Collagène Extra</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#benefits" className="text-gray-700 hover:text-collagen-purple transition-colors">
            Bienfaits
          </a>
          <a href="#ingredients" className="text-gray-700 hover:text-collagen-purple transition-colors">
            Ingrédients
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-collagen-purple transition-colors">
            Témoignages
          </a>
          <a href="#faq" className="text-gray-700 hover:text-collagen-purple transition-colors">
            FAQ
          </a>
          <Button className="bg-collagen-purple hover:bg-collagen-deep-purple text-white">
            Acheter
          </Button>
        </nav>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
