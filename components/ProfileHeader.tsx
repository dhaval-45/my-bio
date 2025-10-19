
import React from 'react';

interface ProfileHeaderProps {
  avatarUrl: string;
  name: string;
  bio: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ avatarUrl, name, bio }) => {
  return (
    <header className="flex flex-col items-center text-center">
      <img
        src={avatarUrl}
        alt="Profile Avatar"
        className="w-28 h-28 rounded-full object-cover border-4 border-cyan-400 shadow-xl shadow-black/50 mb-4"
      />
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
        {name}
      </h1>
      <p className="text-slate-300 mt-2 text-sm">{bio}</p>
    </header>
  );
};
