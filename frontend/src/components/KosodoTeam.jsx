import React from 'react';

const KosodoTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/team/member1.jpg",
      bio: "Passionate about community development and social impact."
    },
    {
      name: "Jane Smith",
      role: "Operations Director",
      image: "/team/member2.jpg",
      bio: "Expert in nonprofit management with 10+ years experience."
    },
    {
      name: "Mike Johnson",
      role: "Community Outreach",
      image: "/team/member3.jpg",
      bio: "Dedicated to building strong community relationships."
    },
    // Add more team members as needed
  ];

  return (
    <section id="kosodo-team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet K'Osodo</h2>
          <p className="text-xl text-gray-600">The passionate individuals behind our mission</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KosodoTeam;
