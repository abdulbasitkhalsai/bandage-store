'use client'
// import React, { createContext, useContext, useState, ReactNode } from "react";


// const LoginContext = createContext<any>(null);

// export const LoginContextProvider = ({ children }: { children: ReactNode }) => {
//   // Declare the state for open and modalType
//   const [open, setOpen] = useState(false);
//   const [modalType, setModalType] = useState(""); // Change initial value to ""
//   console.log('LoginContextProvider is rendering with:', { open, modalType });

//   const onClose = (close: boolean) => {
//     console.log('Closing modal, setting open to:', close);
//     setOpen(close);
//     if (!close) setModalType(""); // Reset modalType when closing
//   };

//   return (
//     <LoginContext.Provider value={{ open, setOpen, modalType, setModalType, onClose }}>
//       {children}
//     </LoginContext.Provider>
//   );
// };

// export const useLoginContext = () => {
//   const context = useContext(LoginContext);
//   if (!context) {
//     throw new Error("useLoginContext must be used within a LoginContextProvider");
//   }
//   return context;
// };

// // loginContextProvider.tsx
// import React, { createContext, useContext, useState } from 'react';

// interface LoginContextType {
//   open: boolean;
//   modalType: 'login' | 'signup' | null;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   setModalType: React.Dispatch<React.SetStateAction<'login' | 'signup' | null>>;
// }

// const LoginContext = createContext<LoginContextType | undefined>(undefined);

// export const useLoginContext = () => {
//   const context = useContext(LoginContext);
//   if (!context) {
//     throw new Error('useLoginContext must be used within a LoginContextProvider');
//   }
//   return context;
// };

// export const LoginContextProvider = ({ children }: { children: React.ReactNode }) => {
//   const [open, setOpen] = useState(false);
//   const [modalType, setModalType] = useState<'login' | 'signup' | null>(null);

//   return (
//     <LoginContext.Provider value={{ open, modalType, setOpen, setModalType }}>
//       {children}
//     </LoginContext.Provider>
//   );
// };


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
