import React from 'react';

const NewsEvents = () => {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-4">
          {/* Empty columns for logo space */}
          <div className="col-span-1 lg:col-span-2"></div>
          
          {/* Main content aligned with logo */}
          <div className="col-span-10 lg:col-span-9 px-4 sm:px-0">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12">News & Events</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* News Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Latest News</h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <span className="text-sm text-gray-500">December 1, 2023</span>
                    <h4 className="text-xl font-bold mt-2 mb-3">Annual Holiday Gift Drive Begins</h4>
                    <p className="text-gray-600">Help make the holidays special for families in need. Our annual gift drive is now accepting donations of toys, clothing, and essential items.</p>
                    <a href="#" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">Read more →</a>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <span className="text-sm text-gray-500">November 15, 2023</span>
                    <h4 className="text-xl font-bold mt-2 mb-3">New Housing Initiative Launched</h4>
                    <p className="text-gray-600">Kosodo announces new partnership with local property owners to provide affordable housing options for families in transition.</p>
                    <a href="#" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">Read more →</a>
                  </div>
                </div>
              </div>

              {/* Events Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-orange-500 text-white rounded-lg flex flex-col items-center justify-center mr-4">
                        <span className="text-sm">DEC</span>
                        <span className="text-2xl font-bold">15</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl">Holiday Celebration</h4>
                        <p className="text-gray-600">6:00 PM - Community Center</p>
                      </div>
                    </div>
                    <p className="text-gray-600">Join us for our annual holiday celebration featuring dinner, entertainment, and community awards.</p>
                    <a href="#" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">Register →</a>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-orange-500 text-white rounded-lg flex flex-col items-center justify-center mr-4">
                        <span className="text-sm">JAN</span>
                        <span className="text-2xl font-bold">10</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl">Volunteer Orientation</h4>
                        <p className="text-gray-600">5:30 PM - Main Office</p>
                      </div>
                    </div>
                    <p className="text-gray-600">Learn about volunteer opportunities and how you can make a difference in our community.</p>
                    <a href="#" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">Sign up →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
