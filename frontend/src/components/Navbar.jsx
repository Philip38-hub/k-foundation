import React, { useState, useEffect } from 'react';
import Auth from './Auth';
import ContactForm from './ContactForm';
import DonationModal from './DonationModal';
import '../styles/buttons.css';

const Navbar = ({ openAuthModal }) => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [donationModal, setDonationModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetInvolved = () => {
    openAuthModal('signup');
  };

  const handleGetHelp = () => {
    setContactModal(true);
  };

  const handleDonate = (e) => {
    e.preventDefault();
    setDonationModal(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar */}
        <div id="top-bar" className="bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-end items-center h-8"> 
              {/* Social Links */}
              <div className="contact-info flex items-center space-x-3 text-sm">
                <a href="https://www.facebook.com/homefrontnj/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="mailto:info@homefrontnj.org" className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://twitter.com/homefrontnj" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/homefront-nj/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/homefrontnj/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              
              <div className="border-l border-gray-200 h-4 mx-4"></div>
              
              {/* Utility Nav */}
              <div className="utility-nav flex items-center space-x-4 text-sm">
                <button
                  onClick={() => openAuthModal('signin')}
                  className="text-gray-500 hover:text-gray-700 flex items-center space-x-2"
                >
                  <i className="fas fa-lock text-xs"></i>
                  <span className="hidden md:inline">Sign in</span>
                </button>
                <button
                  onClick={() => openAuthModal('signup')}
                  className="text-gray-500 hover:text-gray-700 flex items-center space-x-2"
                >
                  <i className="fas fa-user-plus text-xs"></i>
                  <span className="hidden md:inline">Sign up</span>
                </button>
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
                <a href="#about" className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-600 px-3 py-2 text-sm font-medium`}>
                  ABOUT
                </a>
                <a href="#our-work" className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-600 px-3 py-2 text-sm font-medium`}>
                  OUR WORK
                </a>
                <button
                  onClick={handleGetInvolved}
                  className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-600 px-3 py-2 text-sm font-medium`}
                >
                  GET INVOLVED
                </button>
                <button
                  onClick={handleGetHelp}
                  className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-600 px-3 py-2 text-sm font-medium`}
                >
                  GET HELP
                </button>
                <a href="#news" className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-600 px-3 py-2 text-sm font-medium`}>
                  NEWS & EVENTS
                </a>
                <a 
                  href="#donate" 
                  onClick={handleDonate}
                  className="cta-button donate px-6 py-2 rounded-md text-sm font-medium text-white"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  DONATE
                </a>
              </div>

              {/* Mobile Navigation Button */}
              <div className="sm:hidden flex items-center">
                <button 
                  className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-600`}
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
                <button
                  onClick={handleGetInvolved}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  GET INVOLVED
                </button>
                <button
                  onClick={handleGetHelp}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  GET HELP
                </button>
                <a href="#news" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
                  NEWS & EVENTS
                </a>
                <a 
                  href="#donate" 
                  onClick={handleDonate}
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

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={contactModal}
        onClose={() => setContactModal(false)}
      />

      {/* Donation Modal */}
      <DonationModal
        isOpen={donationModal}
        onClose={() => setDonationModal(false)}
      />
    </>
  );
};

export default Navbar;
