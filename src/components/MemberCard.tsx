import React from 'react';

import { members } from '../data';

export const MemberCard = ({ member }: { member: (typeof members)[0] }) => (
  <div className="m-6 flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg">
    <img
      src={member.headshot}
      alt={member.name}
      className="w-full h-64 object-contain" // Adjusted to cover the top part of the card fully
    />
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800">{member.name}</h2>
      <p className="text-md text-gray-600 mt-2">{member.about}</p>
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

export const MembersList = () => (
  <div className="flex flex-wrap justify-center">
    {members.map((member, index) => (
      <MemberCard key={index} member={member} />
    ))}
  </div>
);
