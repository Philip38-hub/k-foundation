import React from 'react';

const SocialLinks = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 bg-white/80 backdrop-blur-sm shadow-lg rounded-l-lg p-3">
      <div className="flex flex-col space-y-4">
        <a 
          href="https://www.facebook.com/Kosodonj/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-500 hover:text-gray-700 hover:scale-110 transition-all duration-300"
          title="Facebook"
        >
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a 
          href="mailto:info@Kosodonj.org" 
          className="text-gray-500 hover:text-gray-700 hover:scale-110 transition-all duration-300"
          title="Email Us"
        >
          <i className="fas fa-envelope text-xl"></i>
        </a>
        <a 
          href="https://x.com/Kosodonj" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-500 hover:text-gray-700 hover:scale-110 transition-all duration-300"
          title="Follow us on X"
        >
          <i className="fa-brands fa-x text-xl font-bold"></i>
        </a>
        <a 
          href="https://wa.me/+254123456789" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-500 hover:text-green-600 hover:scale-110 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp text-xl"></i>
        </a>
        <a 
          href="tel:+254123456789" 
          className="text-gray-500 hover:text-blue-600 hover:scale-110 transition-all duration-300"
          title="Call Us"
        >
          <i className="fas fa-phone text-xl"></i>
        </a>
        <a 
          href="https://www.linkedin.com/company/kosodonj" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-500 hover:text-linkedin hover:scale-110 transition-all duration-300"
          title="Connect on LinkedIn"
        >
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
