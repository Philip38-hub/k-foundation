import React, { useState, useEffect, useRef } from 'react';

const OurWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardContainerRef = useRef(null);

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
    const container = cardContainerRef.current;
    
    // Add animation classes
    container.classList.add('animate-slide-out');
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % workItems.length);
      container.classList.remove('animate-slide-out');
      container.classList.add('animate-slide-in');
      
      setTimeout(() => {
        container.classList.remove('animate-slide-in');
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const container = cardContainerRef.current;
    
    // Add animation classes
    container.classList.add('animate-slide-out-reverse');
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + workItems.length) % workItems.length);
      container.classList.remove('animate-slide-out-reverse');
      container.classList.add('animate-slide-in-reverse');
      
      setTimeout(() => {
        container.classList.remove('animate-slide-in-reverse');
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  return (
    <section id="our-work" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600">Making a difference in our community through dedicated programs and initiatives.</p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none"
            disabled={isAnimating}
          >
            <i className="fas fa-chevron-left text-gray-600"></i>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none"
            disabled={isAnimating}
          >
            <i className="fas fa-chevron-right text-gray-600"></i>
          </button>

          {/* Cards Container */}
          <div 
            ref={cardContainerRef}
            className="relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
              {workItems.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 ${
                    index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="text-center mb-4">
                    <i className={`${item.icon} text-4xl text-orange-500`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="text-sm font-medium text-orange-500">{item.stats}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {workItems.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-500 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
