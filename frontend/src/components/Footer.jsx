import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 text-sm">
          © Dots Developers {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
