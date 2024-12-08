import React from 'react';
import '../styles/buttons.css';

const Hero = () => {
  return (
    <section className="hero relative h-[80vh]">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/assets/images/hero-image.jpg")'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="hero-content text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold leading-tight mb-10">
            HELPING<br />
            FAMILIES BREAK<br />
            THE CYCLE OF<br />
            POVERTY
          </h1>
          <div className="cta-buttons flex flex-wrap gap-5">
            <a 
              href="#get-help" 
              className="cta-button help px-8 py-3 rounded text-lg font-medium text-white"
              style={{ backgroundColor: 'var(--accent-color)' }}
            >
              GET HELP
            </a>
            <a 
              href="#get-involved" 
              className="cta-button involved px-8 py-3 rounded text-lg font-medium text-white"
              style={{ backgroundColor: 'var(--secondary-color)' }}
            >
              GET INVOLVED
            </a>
            <a 
              href="#donate" 
              className="cta-button donate px-8 py-3 rounded text-lg font-medium text-white"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              GIVE TODAY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
