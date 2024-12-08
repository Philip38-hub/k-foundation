import React from 'react';
import '../styles/buttons.css';

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="top-bar bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          <div className="contact-info">
            <a href="tel:609-989-9417" className="text-gray-600">
              609-989-9417
            </a>
          </div>
          <div className="utility-nav flex items-center space-x-6">
            <a href="#" className="text-gray-600">
              Newsletter Sign-up
            </a>
            <a href="#" className="text-gray-600">
              Translate
            </a>
            <button className="text-gray-600">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="HomeFront" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              <a href="#about" className="nav-link text-gray-900 px-3 py-2 text-sm font-medium">
                ABOUT
              </a>
              <a href="#our-work" className="nav-link text-gray-900 px-3 py-2 text-sm font-medium">
                OUR WORK
              </a>
              <a href="#get-involved" className="nav-link text-gray-900 px-3 py-2 text-sm font-medium">
                GET INVOLVED
              </a>
              <a href="#get-help" className="nav-link text-gray-900 px-3 py-2 text-sm font-medium">
                GET HELP
              </a>
              <a href="#news" className="nav-link text-gray-900 px-3 py-2 text-sm font-medium">
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
