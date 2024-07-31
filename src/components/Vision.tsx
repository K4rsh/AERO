import React from 'react';

import config from '../config/index.json';

const Vision = () => {
  const { product } = config;

  return (
    <section
      id="vision"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <h2 className="text-3xl font-extrabold text-red-600 sm:text-4xl text-center">
        {product.title}
      </h2>
      <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">
        {product.description}
      </h3>
      <div className="mt-6 space-y-6">
        {product.items.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg text-gray-800">•{item.title}</h3>
            <p className="mt-2 text-base text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
