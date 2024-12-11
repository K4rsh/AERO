import React from 'react';
import config from '../config/index.json';

const Partners = () => {
  // Access the partners array from the config JSON
  const { partners } = config;

  return (
    <div className="partners-section bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Our Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card text-center">
              <a href={partner.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="mx-auto h-24 w-auto mb-4"
                />
                <h3 className="text-lg font-medium text-gray-700">{partner.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
