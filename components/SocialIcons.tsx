
import React from 'react';
import type { SocialLink } from '../types';

interface SocialIconsProps {
  links: SocialLink[];
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ links }) => {
  return (
    <div className="flex justify-center items-center space-x-6 mt-8">
      {links.map(link => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};
