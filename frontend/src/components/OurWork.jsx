import React from 'react';

const OurWork = () => {
  return (
    <section id="our-work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-4">
          {/* Empty columns for logo space */}
          <div className="col-span-1 lg:col-span-2"></div>
          
          {/* Main content aligned with logo */}
          <div className="col-span-10 lg:col-span-9 px-4 sm:px-0">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12">Our Work</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Emergency Services */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-home text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Emergency Services</h3>
                <p className="text-gray-600">
                  Providing immediate shelter, food, and essential supplies to families in crisis.
                </p>
              </div>

              {/* Housing Assistance */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-key text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Housing Assistance</h3>
                <p className="text-gray-600">
                  Help with finding and maintaining stable, affordable housing solutions.
                </p>
              </div>

              {/* Education & Training */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Education & Training</h3>
                <p className="text-gray-600">
                  Skills development and educational programs for long-term success.
                </p>
              </div>

              {/* Children's Programs */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-child text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Children's Programs</h3>
                <p className="text-gray-600">
                  Supporting children's education, health, and development needs.
                </p>
              </div>

              {/* Healthcare Support */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-heartbeat text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Healthcare Support</h3>
                <p className="text-gray-600">
                  Access to medical care and mental health services.
                </p>
              </div>

              {/* Employment Services */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-briefcase text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Employment Services</h3>
                <p className="text-gray-600">
                  Job training, placement, and career development support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
