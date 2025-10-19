import React from 'react';
import type { Link, SocialLink } from './types';
import { GithubIcon, InstagramIcon, TwitterIcon, LinkedInIcon,  WhatsappIcon, FacebookIcon } from './components/Icons';

export const LINKS: Link[] = [
  { id: 1, url: '#', text: 'Portfolio & Gallery' },
  { id: 2, url: '#', text: 'Order Custom Art' },
  { id: 4, url: '#', text: 'Digital Asset Store' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  // FIX: Using JSX in a .ts file can be ambiguous with TypeScript's type assertion syntax.
  // Replaced JSX with React.createElement to resolve parsing errors.
  { id: 1, name: 'Instagram', url: 'https://www.instagram.com/dhaval_s_45?igsh=MTQ2cHdubWJnZzI1cw==', icon: React.createElement(InstagramIcon) },
  // { id: 2, name: 'Twitter', url: 'https://twitter.com/3DTextWizard', icon: React.createElement(TwitterIcon) },
  // { id: 3, name: 'Dribbble', url: 'https://dribbble.com/3DTextWizard', icon: React.createElement(DribbbleIcon) },
  { id: 4, name: 'GitHub', url: 'https://github.com/dhaval-45', icon: React.createElement(GithubIcon) },
  { id: 5, name: 'LinkedIn', url: 'https://www.linkedin.com/in/dhaval-sondigala-b69648350/', icon: React.createElement(LinkedInIcon) },
  // { id: 6, name: 'Behance', url: 'https://www.behance.net/3DTextWizard', icon: React.createElement(BehanceIcon) },
  // { id: 7, name: 'Pinterest', url: 'https://www.pinterest.com/3DTextWizard', icon: React.createElement(PinterestIcon) },
  { id: 8, name: 'Whastapp', url: 'https://wa.me/+917383541535', icon: React.createElement(WhatsappIcon) },
  { id: 9, name: 'Facebook', url: 'https://www.facebook.com/share/1DEY8Hi4ks/', icon: React.createElement(FacebookIcon) },
];