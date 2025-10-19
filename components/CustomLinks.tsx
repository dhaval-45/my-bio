import React, { useState } from 'react';
import type { Link } from '../types';
import { LinkButton } from './LinkButton';

interface CustomLinksProps {
  links: Link[];
  onAddLink: (url: string, text: string) => void;
  onDeleteLink: (id: number) => void;
  onUpdateLink: (id: number, url: string, text: string) => void;
}

export const CustomLinks: React.FC<CustomLinksProps> = ({ links, onAddLink, onDeleteLink, onUpdateLink }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingLink, setEditingLink] = useState<Link | null>(null);

  // State for form inputs (used for both adding and editing)
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentText, setCurrentText] = useState('');

  const resetAllForms = () => {
    setIsAdding(false);
    setEditingLink(null);
    setCurrentUrl('');
    setCurrentText('');
  };

  const handleStartAdding = () => {
    resetAllForms();
    setIsAdding(true);
  };

  const handleStartEditing = (link: Link) => {
    resetAllForms();
    setEditingLink(link);
    setCurrentUrl(link.url);
    setCurrentText(link.text);
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUrl.trim() && currentText.trim()) {
      const fullUrl = currentUrl.startsWith('http://') || currentUrl.startsWith('https://') ? currentUrl : `https://${currentUrl}`;
      onAddLink(fullUrl, currentText);
      resetAllForms();
    }
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUrl.trim() && currentText.trim() && editingLink) {
      const fullUrl = currentUrl.startsWith('http://') || currentUrl.startsWith('https://') ? currentUrl : `https://${currentUrl}`;
      onUpdateLink(editingLink.id, fullUrl, currentText);
      resetAllForms();
    }
  };

  return (
    <div className="my-8 p-6 bg-slate-900/60 rounded-xl border border-slate-700">
      <h2 className="text-lg font-bold text-slate-200 mb-4 text-center">My Links</h2>
      <div className="space-y-4">
        {links.map(link => (
          <div key={link.id}>
            {editingLink?.id === link.id ? (
              <form onSubmit={handleUpdateSubmit} className="p-4 bg-slate-800/60 rounded-xl space-y-3">
                 <input
                    type="text"
                    value={currentText}
                    onChange={(e) => setCurrentText(e.target.value)}
                    placeholder="Link Title"
                    required
                    className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                  <input
                    type="text" 
                    value={currentUrl}
                    onChange={(e) => setCurrentUrl(e.target.value)}
                    placeholder="URL"
                    required
                    className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                  <div className="flex space-x-2 pt-1">
                    <button type="submit" className="flex-grow px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:scale-105 transition-transform">
                      Save
                    </button>
                    <button type="button" onClick={resetAllForms} className="px-4 py-2 rounded-lg font-bold bg-slate-700 hover:bg-slate-600 transition-colors">
                      Cancel
                    </button>
                  </div>
              </form>
            ) : (
              <div className="flex items-center space-x-2 group">
                <div className="flex-grow">
                  <LinkButton href={link.url} text={link.text} />
                </div>
                <button
                  onClick={() => handleStartEditing(link)}
                  aria-label={`Edit link to ${link.text}`}
                  disabled={isAdding || !!editingLink}
                  className="p-2 rounded-full bg-slate-700/50 text-slate-400 opacity-0 group-hover:opacity-100 
                             transition-all duration-300 ease-in-out hover:bg-cyan-500/30 hover:text-cyan-400 focus:opacity-100 transform hover:scale-110
                             disabled:opacity-0 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={() => onDeleteLink(link.id)}
                  aria-label={`Delete link to ${link.text}`}
                  disabled={isAdding || !!editingLink}
                  className="p-2 rounded-full bg-slate-700/50 text-slate-400 opacity-0 group-hover:opacity-100 
                             transition-all duration-300 ease-in-out hover:bg-red-500/30 hover:text-red-400 focus:opacity-100 transform hover:scale-110
                             disabled:opacity-0 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {isAdding ? (
        <form onSubmit={handleAddSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            placeholder="Link Title (e.g., My Website)"
            required
            className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="text" 
            value={currentUrl}
            onChange={(e) => setCurrentUrl(e.target.value)}
            placeholder="URL (e.g., my-portfolio.com)"
            required
            className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <div className="flex space-x-2">
            <button type="submit" className="flex-grow px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:scale-105 transition-transform">
              Save Link
            </button>
            <button type="button" onClick={resetAllForms} className="px-4 py-2 rounded-lg font-bold bg-slate-700 hover:bg-slate-600 transition-colors">
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={handleStartAdding}
          disabled={!!editingLink}
          className="w-full mt-6 px-6 py-3 rounded-xl font-bold text-slate-300 border-2 border-dashed border-slate-600
                     hover:bg-slate-700/50 hover:text-white hover:border-slate-500 transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        >
          + Add New Link
        </button>
      )}
    </div>
  );
};