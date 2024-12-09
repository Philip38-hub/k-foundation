import React from 'react';
import '../styles/buttons.css';

const Hero = ({ openAuthModal }) => {
  return (
    <section className="hero relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/assets/images/hero-image.jpg")',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-12 gap-4">
            {/* Empty columns for logo space */}
            <div className="col-span-1 lg:col-span-2"></div>
            
            {/* Main content aligned with logo */}
            <div className="col-span-10 lg:col-span-9 px-4 sm:px-0">
              <div className="hero-content text-white">
                <h1 className="font-playfair text-5xl md:text-7xl font-bold leading-tight mb-12">
                  <span className="block transform transition-all duration-500 hover:translate-x-2">La devise</span>
                  <span className="block transform transition-all duration-500 hover:translate-x-2">va être</span>
                  <span className="block transform transition-all duration-500 hover:translate-x-2">ici</span>
                </h1>
                <div className="flex flex-row flex-nowrap gap-6">
                  <a 
                    href="#get-help" 
                    className="cta-button help whitespace-nowrap px-8 py-4 rounded-lg text-lg font-medium text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                  >
                    GET HELP
                  </a>
                  <button 
                    className="cta-button involved whitespace-nowrap px-8 py-4 rounded-lg text-lg font-medium text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--secondary-color)' }}
                    onClick={() => openAuthModal('signup')}
                  >
                    GET INVOLVED
                  </button>
                  <a 
                    href="#donate" 
                    className="cta-button donate whitespace-nowrap px-8 py-4 rounded-lg text-lg font-medium text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--primary-color)' }}
                  >
                    GIVE TODAY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down opacity-75"></i>
      </div>
    </section>
  );
};

export default Hero;
