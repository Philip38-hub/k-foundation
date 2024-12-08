import React, { useState, useEffect } from 'react';
import '../styles/buttons.css';

const Navbar = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div id="top-bar" className="bg-white relative w-full md:w-1/2 ml-auto">
        <div className="absolute inset-0 hidden md:block" style={{ 
          background: 'white',
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 15% 100%)',
          left: '15%'
        }}></div>
        <div className="relative md:ml-[16%] md:w-[80%] w-full px-4 md:px-0">
          <div className="flex justify-between items-center h-10"> 
            {/* Social Links - Always visible */}
            <div className="contact-info flex items-center space-x-4">
              <a href="https://www.facebook.com/homefrontnj/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="mailto:info@homefrontnj.org" className="text-gray-600 hover:text-blue-600">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://twitter.com/homefrontnj" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/homefront-nj/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/homefrontnj/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            
            {/* Utility Nav - Always visible */}
            <div className="utility-nav flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center space-x-2">
                <i className="fas fa-lock"></i>
                <span className="hidden md:inline">Sign-in</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center space-x-2">
                <i className="fas fa-user-plus"></i>
                <span className="hidden md:inline">Sign-up</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="HomeFront" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              <a href="#about" className="nav-link text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">
                ABOUT
              </a>
              <a href="#our-work" className="nav-link text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">
                OUR WORK
              </a>
              <a href="#get-involved" className="nav-link text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">
                GET INVOLVED
              </a>
              <a href="#get-help" className="nav-link text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">
                GET HELP
              </a>
              <a href="#news" className="nav-link text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">
                NEWS & EVENTS
              </a>
              <a 
                href="#donate" 
                className="cta-button donate px-6 py-2 rounded-md text-sm font-medium text-white"
                style={{ backgroundColor: 'var(--primary-color)' }}
              >
                DONATE
              </a>
            </div>

            {/* Mobile Navigation Button */}
            <div className="sm:hidden flex items-center">
              <button 
                className="text-white hover:text-gray-200"
                onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
              >
                <i className={`fas ${isMainMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`sm:hidden transition-all duration-300 ease-in-out ${isMainMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white/90 backdrop-blur-sm rounded-b-lg`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
                ABOUT
              </a>
              <a href="#our-work" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
                OUR WORK
              </a>
              <a href="#get-involved" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
                GET INVOLVED
              </a>
              <a href="#get-help" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
                GET HELP
              </a>
              <a href="#news" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
                NEWS & EVENTS
              </a>
              <a 
                href="#donate" 
                className="block px-3 py-2 text-base font-medium text-white rounded-md"
                style={{ backgroundColor: 'var(--primary-color)' }}
              >
                DONATE
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
