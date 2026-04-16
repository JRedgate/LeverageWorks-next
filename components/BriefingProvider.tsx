'use client';

import React, { createContext, useContext, useState } from 'react';
import { BriefingModal } from './BriefingModal';

interface BriefingContextType {
  openBriefing: (message?: string) => void;
}

const BriefingContext = createContext<BriefingContextType>({ openBriefing: () => {} });

export function useBriefing() {
  return useContext(BriefingContext);
}

export function BriefingProvider({ children }: { children: React.ReactNode }) {
  const [briefingOpen, setBriefingOpen] = useState(false);
  const [briefingMessage, setBriefingMessage] = useState('');

  const openBriefing = (message?: string) => {
    if (message) setBriefingMessage(message);
    setBriefingOpen(true);
  };

  const closeBriefing = () => {
    setBriefingOpen(false);
    setBriefingMessage('');
  };

  return (
    <BriefingContext.Provider value={{ openBriefing }}>
      {children}
      <BriefingModal isOpen={briefingOpen} onClose={closeBriefing} initialMessage={briefingMessage} />
    </BriefingContext.Provider>
  );
}
