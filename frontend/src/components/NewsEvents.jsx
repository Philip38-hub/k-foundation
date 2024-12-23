import React from 'react';
import { motion } from 'framer-motion';

const NewsEvents = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const news = [
    {
      title: "Annual Charity Gala 2024",
      date: "March 15, 2024",
      category: "Upcoming Event",
      image: "/event-gala.jpg",
      description: "Join us for an evening of celebration and support as we raise funds for our community programs."
    },
    {
      title: "New Education Center Opens",
      date: "February 1, 2024",
      category: "News",
      image: "/news-education.jpg",
      description: "We're proud to announce the opening of our new education center, serving over 200 students."
    },
    {
      title: "Community Health Initiative",
      date: "January 20, 2024",
      category: "Program Launch",
      image: "/news-health.jpg",
      description: "Launching our new healthcare initiative to provide free medical checkups to underserved communities."
    }
  ];

  const upcomingEvents = [
    {
      title: "Volunteer Training Workshop",
      date: "January 30, 2024",
      time: "9:00 AM - 2:00 PM",
      location: "Kosodo Community Center"
    },
    {
      title: "Youth Leadership Summit",
      date: "February 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "City Conference Hall"
    },
    {
      title: "Community Cleanup Drive",
      date: "February 28, 2024",
      time: "8:00 AM - 12:00 PM",
      location: "Central Lake Park"
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
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
            News & <span className="text-orange-500">Events</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest news, upcoming events, and community initiatives.
          </p>
        </motion.div>

        {/* Featured News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {news.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              variants={fadeInUp}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={fadeInUp}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900">Upcoming Events</h3>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-orange-500">
                    <i className="far fa-calendar text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-500">{event.date}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h4>
                <div className="text-gray-600 text-sm space-y-2">
                  <div className="flex items-center">
                    <i className="far fa-clock mr-2"></i>
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          variants={fadeInUp}
          className="mt-16 text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about our work, upcoming events,
              and ways to get involved.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-orange-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsEvents;
