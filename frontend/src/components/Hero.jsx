import React from 'react';
import '../styles/buttons.css';

const Hero = ({ onOpenAuth, onOpenDonation, onOpenContact }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-orange-500/10 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 opacity-0 animate-fadeInUp">
            <span className="block mb-2">HELPING</span>
            <span className="block mb-2">FAMILIES BREAK</span>
            <span className="block mb-2">THE CYCLE OF</span>
            <span className="block text-orange-500">POVERTY</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-500">
            Join us in our mission to create lasting change in our community through compassion, support, and empowerment.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center opacity-0 animate-fadeInUp animation-delay-1000">
            <button 
              onClick={onOpenContact}
              className="group relative px-8 py-4 w-full md:w-auto overflow-hidden rounded-lg bg-blue-600 text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/25 hover:scale-105"
            >
              <span className="relative z-10">CONTACT US</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* <button 
              onClick={() => onOpenAuth('signup')}
              className="group relative px-8 py-4 w-full md:w-auto overflow-hidden rounded-lg bg-blue-500 text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-400/25 hover:scale-105"
            >
              <span className="relative z-10">GET INVOLVED</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
             */}
            <button 
              onClick={onOpenDonation}
              className="group relative px-8 py-4 w-full md:w-auto overflow-hidden rounded-lg bg-orange-500 text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/25 hover:scale-105"
            >
              <span className="relative z-10">GIVE TODAY</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white opacity-0 animate-fadeInUp animation-delay-1500">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-2">1,000+</div>
              <div className="text-lg">Families Helped</div>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-2">$2M+</div>
              <div className="text-lg">Funds Raised</div>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-lg">Community Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-75 hover:opacity-100 transition-opacity duration-300">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
