import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-4">
          {/* Empty columns for logo space */}
          <div className="col-span-1 lg:col-span-2"></div>
          
          {/* Main content aligned with logo */}
          <div className="col-span-10 lg:col-span-9 px-4 sm:px-0">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">About HomeFront</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  HomeFront's mission is to end homelessness in Central New Jersey by harnessing the caring, resources, and expertise of the community. We work to break the cycle of poverty and end homelessness in Central New Jersey through a comprehensive approach that provides emergency shelter, housing assistance, life skills training, and other essential services.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We believe that every individual deserves a safe, secure place to call home and the opportunity to build a better future. Our comprehensive approach addresses both immediate needs and long-term solutions to help families achieve lasting stability and self-sufficiency.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-3xl font-bold text-orange-500 mr-4">1K+</span>
                    <span className="text-gray-700">Families helped annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-3xl font-bold text-orange-500 mr-4">90%</span>
                    <span className="text-gray-700">Success rate in permanent housing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-3xl font-bold text-orange-500 mr-4">30+</span>
                    <span className="text-gray-700">Years serving the community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
