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
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {navItem.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          {/* Social media links can be added here */}
        </div>
        {/* <div className="mt-6">
          <h2 className="text-2xl font-bold">{mainHero.title}</h2>
          <p className="mt-4">{mainHero.description}</p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
