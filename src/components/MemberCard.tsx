import React from 'react';

// Define the Member type directly in this file
interface Member {
  name: string;
  headshot: string;
  about: string;
  link?: string; // Optional field
  publications: string[];
}

// Import members from data.ts
import { members } from '../data';

// Define the MemberCard component
export const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  // Function to render about text with a link
  const renderAboutText = () => {
    if (member.link) {
      // Replace the placeholder '[link]' with the actual link
      const aboutWithLink = member.about.replace(
        '[link]',
        `<a href="${member.link}" class="text-blue-500 hover:underline">link</a>`
      );
      return (
        <p
          className="text-md text-gray-600 mt-2"
          dangerouslySetInnerHTML={{ __html: aboutWithLink }}
        />
      );
    }
    return <p className="text-md text-gray-600 mt-2">{member.about}</p>;
  };

  return (
    <div className="m-4 flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-xs"> {/* Adjusted for responsiveness */}
      <img
        src={member.headshot}
        alt={member.name}
        className="w-full h-64 object-cover" // Adjusted to cover the top part of the card fully
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{member.name}</h2>
        {renderAboutText()}
        <ul className="mt-4">
          {member.publications.map((publication, index) => (
            <li key={index} className="text-md text-gray-600">
              {publication}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Define the MembersList component
export const MembersList: React.FC = () => (
  <div className="flex flex-wrap justify-center">
    {members.map((member, index) => (
      <MemberCard key={index} member={member} />
    ))}
  </div>
);
