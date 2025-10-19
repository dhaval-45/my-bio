// Fix: Import React to resolve the 'React' namespace for React.ReactNode.
import React from 'react';

export interface Link {
  id: number;
  url: string;
  text: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode;
}
