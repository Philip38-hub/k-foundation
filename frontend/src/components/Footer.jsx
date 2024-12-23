import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ onOpenDonation }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const quickLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "NEWS & EVENTS", href: "#news" },
    { name: "OUR WORK", href: "#our-work" },
    { name: "CONTACT US", href: "#contact" }
  ];

  const contactInfo = [
    { icon: "fas fa-map-marker-alt", text: "123 Charity Road, Nairobi, Kenya" },
    { icon: "fas fa-phone", text: "+254 123 456 789" },
    { icon: "fas fa-envelope", text: "info@kosodo.org" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <img src="/klogo2.jpg" alt="Kosodo Logo" className="h-16 w-auto" />
            <p className="text-gray-400 leading-relaxed">
              Empowering communities and transforming lives through sustainable development
              and compassionate support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenDonation}
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right text-xs mr-2"></i>
                  DONATE
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info.text} className="flex items-start">
                  <i className={`${info.icon} text-orange-500 mt-1 mr-3`}></i>
                  <span className="text-gray-400">{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-gray-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Kosodo. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
