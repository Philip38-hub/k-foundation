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
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">About Kosodo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                La mission de Kosodo est de mettre fin à l'itinérance dans la région de Central Lake en exploitant l'attention, les ressources et l'expertise de la communauté. Nous travaillons à briser le cycle de la pauvreté et à mettre fin au sans-abrisme dans la région de Central Lake grâce à une approche globale qui fournit un abri d'urgence, une aide au logement, une formation aux compétences de vie et d'autres services essentiels.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                Nous pensons que chaque individu mérite un endroit sûr et sécurisé où vivre et la possibilité de construire un avenir meilleur. Notre approche globale répond à la fois aux besoins immédiats et aux solutions à long terme pour aider les familles à atteindre une stabilité et une autonomie durables.
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
                    <span className="text-gray-700">Success rate</span>
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
