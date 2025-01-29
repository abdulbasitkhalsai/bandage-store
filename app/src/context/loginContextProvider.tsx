'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";


const LoginContext = createContext<any>(null);

export const LoginContextProvider = ({ children }: { children: ReactNode }) => {
  // Declare the state for open and modalType
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // Change initial value to ""
  console.log('LoginContextProvider is rendering with:', { open, modalType });

  const onClose = (close: boolean) => {
    console.log('Closing modal, setting open to:', close);
    setOpen(close);
    if (!close) setModalType(""); // Reset modalType when closing
  };

  return (
    <LoginContext.Provider value={{ open, setOpen, modalType, setModalType, onClose }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContext must be used within a LoginContextProvider");
  }
  return context;
};
