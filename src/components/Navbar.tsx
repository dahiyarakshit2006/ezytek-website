import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, Download, Hexagon } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import LiquidButton from './LiquidButton';

interface NavbarProps {
  onQuoteClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="relative px-4 md:px-6 py-3 md:py-4">
          <div
            className={`max-w-6xl mx-auto rounded-full px-4 md:px-5 py-2 flex items-center justify-between transition-all duration-500 border border-white/10 backdrop-blur-xl ${
              scrolled ? 'bg-black/80' : 'bg-black/50'
            }`}
          >
            {/* Left */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center bg-white/10 rounded-md p-1">
                <Hexagon className="text-white fill-white" size={16} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-base md:text-lg text-white leading-none">EzyTek Clean</span>
                <span className="text-[8px] tracking-[0.15em] text-white/30 hidden lg:block">EST. 2012</span>
              </div>
            </Link>

            {/* Center */}
            <div className="hidden lg:flex items-center gap-2 relative">
              <Link to="/" className="text-sm font-sans text-white/70 hover:text-white transition-colors px-3 py-1">Home</Link>
              <Link to="/about" className="text-sm font-sans text-white/70 hover:text-white transition-colors px-3 py-1">About Us</Link>
              
              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <div className="flex items-center cursor-pointer text-sm font-sans text-white/70 hover:text-white transition-colors px-3 py-1">
                  Products <ChevronDown size={14} className="ml-1" />
                </div>
                {/* Invisible hover bridge to prevent menu from closing when moving mouse */}
                {megaMenuOpen && (
                  <div className="absolute top-full left-0 w-full h-8 bg-transparent z-40" />
                )}
                {/* Desktop Mega Menu Container */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 cursor-default">
                  <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
                </div>
              </div>
              
              <Link to="/car-wash-setup" className="text-sm font-sans text-white/70 hover:text-white transition-colors px-3 py-1">Car Washing Setup</Link>
              <Link to="/videos" className="text-sm font-sans text-white/70 hover:text-white transition-colors px-3 py-1">Videos</Link>
              <Link to="/contact" className="text-sm font-sans text-white/70 hover:text-white transition-colors px-3 py-1">Contact</Link>
            </div>

            {/* Right */}
            <div className="hidden lg:flex items-center gap-3">
              <LiquidButton variant="glass" size="sm" icon={<Download size={16} />}>
                Download Catalogue
              </LiquidButton>
              <LiquidButton variant="solid" size="sm" onClick={onQuoteClick}>
                Request a Quote
              </LiquidButton>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onQuoteClick={onQuoteClick}
      />
    </>
  );
};

export default Navbar;
