
import React from 'react';

interface LinkButtonProps {
  href: string;
  text: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center p-4 rounded-xl bg-slate-700/50 border border-slate-600 font-semibold text-lg
                 text-slate-100 transform transition-all duration-300 ease-in-out
                 hover:bg-cyan-500/20 hover:text-cyan-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20
                 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
    >
      {text}
    </a>
  );
};
