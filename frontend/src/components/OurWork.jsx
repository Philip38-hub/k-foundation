import React, { useState, useEffect } from 'react';

const OurWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const workItems = [
    {
      title: "Emergency Housing",
      description: "Providing immediate shelter and support to families in crisis.",
      icon: "fas fa-home",
      stats: "500+ families housed"
    },
    {
      title: "Food Security",
      description: "Ensuring no one goes hungry through our food bank and meal programs.",
      icon: "fas fa-utensils",
      stats: "10,000+ meals served"
    },
    {
      title: "Education Support",
      description: "Empowering through education with tutoring and scholarship programs.",
      icon: "fas fa-graduation-cap",
      stats: "200+ students supported"
    },
    {
      title: "Healthcare Access",
      description: "Connecting families with essential medical care and resources.",
      icon: "fas fa-heartbeat",
      stats: "1,000+ medical visits"
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
    <section id="our-work" className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600">Making a difference in our community through dedicated programs and initiatives.</p>
        </div>

        <div className="relative h-[400px]">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none transition-all duration-300"
            disabled={isAnimating}
          >
            <i className="fas fa-chevron-left text-gray-600"></i>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none transition-all duration-300"
            disabled={isAnimating}
          >
            <i className="fas fa-chevron-right text-gray-600"></i>
          </button>

          {/* Cards Container */}
          <div className="relative w-full h-full">
            {workItems.map((item, index) => (
              <div
                key={index}
                className="absolute left-1/2 top-0 w-full max-w-md bg-white rounded-xl shadow-lg p-6"
                style={getCardStyles(index)}
              >
                <div className="text-center mb-4">
                  <div className="inline-block p-3 rounded-full bg-orange-100">
                    <i className={`${item.icon} text-3xl text-orange-500`}></i>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{item.description}</p>
                <div className="text-sm font-medium text-orange-500 text-center">{item.stats}</div>
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
      </div>
    </section>
  );
};

export default OurWork;
