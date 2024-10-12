import React from 'react';
import config from '../config/index.json';

const formatLinkText = (text: string) => {
  return text
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
};

const Contact = () => {
  const { contactInformation, links } = config.additionalInfo;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-red-600">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            If you have any questions or need further information, feel free to
            contact us at
            <a
              href={`mailto:${contactInformation}`}
              className="text-primary hover:text-blue-500 ml-1"
            >
              {contactInformation}
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="text-center w-full">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Other Helpful Links
            </h3>
          </div>
          <ul className="w-full max-w-md text-left mx-auto">
            {Object.entries(links).map(([key, url]) => (
              <li key={key} className="mb-4">
                <a
                  href={url}
                  className="text-lg text-gray-700 hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  • {formatLinkText(key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
