import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onOpenAuth, onOpenDonation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDonate = () => {
    onOpenDonation();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-50">
            <a href="#" className="block">
              <div className="w-28 h-28 md:w-40 md:h-40 flex items-center justify-center -mt-4 md:-mt-8 -mb-4 md:-mb-8">
                <img 
                  src="/klogo2.jpg"
                  alt="K Logo"
                  className="w-24 h-24 md:w-36 md:h-36 object-contain"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                  }}
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#about" className={`text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium ${isScrolled ? '' : 'text-white hover:text-gray-200'}`}>
              ABOUT
            </a>
            <a href="#news" className={`text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium ${isScrolled ? '' : 'text-white hover:text-gray-200'}`}>
              NEWS & EVENTS
            </a>
            <a href="#our-work" className={`text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium ${isScrolled ? '' : 'text-white hover:text-gray-200'}`}>
              OUR WORK
            </a>
            <a href="#contact" className={`text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium ${isScrolled ? '' : 'text-white hover:text-gray-200'}`}>
              CONTACT US
            </a>
            <button
              onClick={handleDonate}
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
            >
              DONATE
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none ${isScrolled ? '' : 'text-white hover:text-gray-200'}`}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700">
            ABOUT
          </a>
          <a href="#news" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700">
            NEWS & EVENTS
          </a>
          <a href="#our-work" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700">
            OUR WORK
          </a>
          <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700">
            CONTACT US
          </a>
          <button
            onClick={handleDonate}
            className="block w-full text-left px-3 py-2 text-base font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-md"
          >
            DONATE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
