import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, navigation } = config;
  const { logo, name: companyName } = company;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {navigation.map((navItem, index) => (
            <a
              key={`${navItem.name}-${index}`}
              href={`#${navItem.href}`} // Use href as ID for in-page navigation
              className="text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white hover:text-red-600 hover:text-lg transition-all duration-200"
            >
              {navItem.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8"></div>
      </div>
    </div>
  );
};

export default About;
