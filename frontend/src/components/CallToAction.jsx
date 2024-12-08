import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-600 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Get Help</h3>
            <p className="text-white mb-6">
              Find resources and support for housing, food assistance, and other essential services.
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="bg-blue-400 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Get Involved</h3>
            <p className="text-white mb-6">
              Volunteer, donate, or partner with us to make a difference in your community.
            </p>
            <button className="bg-white text-blue-400 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Join Us
            </button>
          </div>
          
          <div className="bg-orange-500 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Give Today</h3>
            <p className="text-white mb-6">
              Your donation helps provide housing and support to families in need.
            </p>
            <button className="bg-white text-orange-500 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
