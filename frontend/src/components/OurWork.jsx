import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OurWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const workItems = [
    {
      title: "Education Support",
      description: "Providing quality education and resources to underprivileged children",
      icon: "fa-graduation-cap",
      stats: "500+ Students Supported",
      image: "/education-project.jpg"
    },
    {
      title: "Healthcare Access",
      description: "Ensuring communities have access to essential healthcare services",
      icon: "fa-heartbeat",
      stats: "1000+ Medical Consultations",
      image: "/healthcare-project.jpg"
    },
    {
      title: "Economic Empowerment",
      description: "Supporting small businesses and entrepreneurship initiatives",
      icon: "fa-hand-holding-usd",
      stats: "200+ Businesses Launched",
      image: "/economic-project.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workItems.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + workItems.length) % workItems.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getCardStyles = (index) => {
    const diff = (index - currentIndex + workItems.length) % workItems.length;
    let transform = '';
    let opacity = 0;
    let zIndex = 0;

    if (diff === 0) { // Current card
      transform = 'translateX(-50%) scale(1)';
      opacity = 1;
      zIndex = 3;
    } else if (diff === 1 || diff === -3) { // Next card
      transform = 'translateX(20%) scale(0.85)';
      opacity = 0.5;
      zIndex = 2;
    } else if (diff === workItems.length - 1 || diff === -1) { // Previous card
      transform = 'translateX(-120%) scale(0.85)';
      opacity = 0.5;
      zIndex = 1;
    } else { // Other cards
      transform = 'translateX(-50%) scale(0.7)';
      opacity = 0;
      zIndex = 0;
    }

    return {
      transform,
      opacity,
      zIndex,
      transition: 'all 0.5s ease-in-out'
    };
  };

  return (
    <section id="our-work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Work</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through our various programs and initiatives, we're making a lasting impact
            in communities across Kenya.
          </p>
        </motion.div>

        {/* Animated Cards */}
        <div className="relative h-[500px] mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none transition-all duration-300"
            disabled={isAnimating}
          >
            <i className="fas fa-chevron-left text-gray-600"></i>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none transition-all duration-300"
            disabled={isAnimating}
          >
            <i className="fas fa-chevron-right text-gray-600"></i>
          </button>

          {/* Cards Container */}
          <div className="relative w-full h-full">
            {workItems.map((item, index) => (
              <div
                key={index}
                className="absolute left-1/2 top-0 w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden"
                style={getCardStyles(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 relative">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 -mt-12 relative z-10 mx-auto">
                    <i className={`fas ${item.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {item.description}
                  </p>
                  <div className="text-center text-orange-500 font-semibold">
                    {item.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center space-x-2">
            {workItems.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-500 w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-orange-500 mb-2">85%</div>
            <div className="text-gray-600">Program Success Rate</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-orange-500 mb-2">12K+</div>
            <div className="text-gray-600">People Impacted</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-orange-500 mb-2">30+</div>
            <div className="text-gray-600">Active Programs</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-orange-500 mb-2">95%</div>
            <div className="text-gray-600">Community Satisfaction</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default OurWork;
