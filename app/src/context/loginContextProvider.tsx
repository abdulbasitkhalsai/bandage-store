'use client'

import React, { createContext, useContext, useState } from 'react';

interface LoginContextType {
  open: boolean;
  modalType: 'login' | 'signup' | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<'login' | 'signup' | null>>;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLoginContext must be used within a LoginContextProvider');
  }
  return context;
};

export const LoginContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<'login' | 'signup' | null>(null);

  return (
    <LoginContext.Provider value={{ open, modalType, setOpen, setModalType }}>
      {children}
    </LoginContext.Provider>
  );
};
