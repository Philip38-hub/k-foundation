import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-500">Kosodo</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
            className="relative"
          >
            <img
              src="/about-image.jpg"
              alt="Our Mission"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl z-0"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-gray-900">
              Empowering Communities Since 2010
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Kosodo, we believe in the power of community and the potential within every individual. Our journey began with a simple vision: to break the cycle of poverty and create sustainable change in communities across Kenya.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through education, healthcare initiatives, and economic empowerment programs, we've helped thousands of families build better lives for themselves and their children.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-orange-500 mb-2">13+</div>
                <div className="text-gray-600">Years of Impact</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-orange-500 mb-2">20K+</div>
                <div className="text-gray-600">Lives Changed</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-heart text-2xl text-orange-500"></i>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h4>
            <p className="text-gray-600">
              To empower communities through sustainable development and create lasting positive change.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-eye text-2xl text-orange-500"></i>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h4>
            <p className="text-gray-600">
              A world where every community has the resources and opportunities to thrive.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-hands-helping text-2xl text-orange-500"></i>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h4>
            <p className="text-gray-600">
              Integrity, compassion, and dedication in everything we do to serve our communities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
