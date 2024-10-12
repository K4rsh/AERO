import React from 'react';
import config from '../config/index.json';

const About = () => {
  const { company, navigation } = config;
  const { logo, name: companyName } = company;

  return (
    <div id="about" className="mx-auto container px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
          {navigation.map((navItem, index) => (
            <a
              key={`${navItem.name}-${index}`}
              href={`#${navItem.href}`}
              className="text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white hover:text-red-600 hover:text-lg transition-all duration-200"
            >
              {navItem.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
