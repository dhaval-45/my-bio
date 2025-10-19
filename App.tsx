import React, { useState, useEffect } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkButton } from './components/LinkButton';
import { SocialIcons } from './components/SocialIcons';
import { CustomLinks } from './components/CustomLinks';
import { LINKS, SOCIAL_LINKS } from './constants';
import type { Link } from './types';
import ParticleBackground from './components/ParticleBackground';
import ProfileImage from "./assest/image/Dhaval.jpg";

const App: React.FC = () => {
  const [customLinks, setCustomLinks] = useState<Link[]>([]);

  useEffect(() => {
    try {
      const storedLinks = localStorage.getItem('customLinks');
      if (storedLinks) {
        setCustomLinks(JSON.parse(storedLinks));
      }
    } catch (e) {
      console.error("Failed to parse custom links from localStorage", e);
      setCustomLinks([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('customLinks', JSON.stringify(customLinks));
    } catch (e) {
      console.error("Failed to save custom links to localStorage", e);
    }
  }, [customLinks]);

  const handleAddLink = (url: string, text: string) => {
    const newLink: Link = {
      id: Date.now(),
      url,
      text,
    };
    setCustomLinks(prevLinks => [...prevLinks, newLink]);
  };

  const handleDeleteLink = (id: number) => {
    setCustomLinks(prevLinks => prevLinks.filter(link => link.id !== id));
  };

  const handleUpdateLink = (id: number, url: string, text: string) => {
    setCustomLinks(prevLinks =>
      prevLinks.map(link => (link.id === id ? { ...link, url, text } : link))
    );
  };

  return (
    <>
      <ParticleBackground />
      <div className="min-h-screen text-white font-sans flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl shadow-cyan-500/10 border border-slate-700">
            <ProfileHeader
              avatarUrl={ProfileImage}
              name="@DhavalSondigala"
              bio="Unreal Engine developer crafting immersive and polished real-time experiences."
            />

            <nav className="my-8 space-y-4">
              {LINKS.map(link => (
                <LinkButton key={link.id} href={link.url} text={link.text} />
              ))}
            </nav>

            {/* <CustomLinks
              links={customLinks}
              onAddLink={handleAddLink}
              onDeleteLink={handleDeleteLink}
              onUpdateLink={handleUpdateLink}
            /> */}

            <SocialIcons links={SOCIAL_LINKS} />
          </div>
          <footer className="text-center mt-6 text-slate-500 text-sm">
            <p>&copy; 2025 Dhaval Sondigala. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
