
'use client';

import React, { ReactNode, useState, useEffect, useContext } from 'react';
import UserContext from './userContext';

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [User, SetUser] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check for user in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      SetUser(savedUser);
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <UserContext.Provider value={{ User, SetUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};
