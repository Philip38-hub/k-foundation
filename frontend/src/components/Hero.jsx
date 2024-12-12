import React from 'react';
import '../styles/buttons.css';

const Hero = ({ onOpenAuth, onOpenDonation, onOpenContact }) => {
  return (
    <section className="hero relative h-screen">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 h-screen">
          <div className="flex items-center h-full">
            <div className="w-full max-w-4xl">
              <div className="text-white">
                <h1 className="text-6xl font-bold mb-8">
                  <span className="block transform transition-all duration-500 hover:translate-x-2">La devise</span>
                  <span className="block transform transition-all duration-500 hover:translate-x-2">va être</span>
                  <span className="block transform transition-all duration-500 hover:translate-x-2">ici</span>
                </h1>
                <div className="flex flex-row flex-nowrap gap-6">
                  <button 
                    className="cta-button help whitespace-nowrap px-8 py-4 rounded-lg text-lg font-medium text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                    onClick={onOpenContact}
                  >
                    GET HELP
                  </button>
                  <button 
                    className="cta-button involved whitespace-nowrap px-8 py-4 rounded-lg text-lg font-medium text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--secondary-color)' }}
                    onClick={() => onOpenAuth('signup')}
                  >
                    GET INVOLVED
                  </button>
                  <button 
                    className="cta-button donate whitespace-nowrap px-8 py-4 rounded-lg text-lg font-medium text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--primary-color)' }}
                    onClick={onOpenDonation}
                  >
                    GIVE TODAY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
