import React from 'react';

// Assuming `members` is an array of Member objects
import { members } from '../data';

// Define the structure of a single member
interface Member {
  name: string;
  headshot?: string; // Optional property
  about: string;
  publications: string[];
}

// Update the MemberCard component to use the Member interface for its props
interface MemberCardProps {
  member: Member;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => (
  <div className="member-card">
    {member.headshot && (
      <img
        src={member.headshot}
        alt={`Headshot of ${member.name}`}
        className="member-headshot"
      />
    )}
    <h2>{member.name}</h2>
    <p>{member.about}</p>
    {member.publications.length > 0 && (
      <ul>
        {member.publications.map((publication, index) => (
          <li key={index}>{publication}</li>
        ))}
      </ul>
    )}
  </div>
);

export const MembersList: React.FC = () => (
  <div className="flex flex-wrap justify-center">
    {members.map((member, index) => (
      <MemberCard key={index} member={member} />
    ))}
  </div>
);

export default MembersList;
