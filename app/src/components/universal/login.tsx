'use client';

import React, { useState } from 'react';
import { useUserContext } from '@/context/userContextProvider';
import {  useLoginContext } from '@/context/loginContextProvider';

const Login = () => {
  // const { SetUser, setIsAuthenticated } = useUserContext();
  const { onClose } = useLoginContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onClose(false);
  }


  if (!open) return null;

  return (

    <div className="fixed inset-0 flex justify-center items-center z-40 bg-black bg-opacity-50">
      <div className="bg-white relative z-50 w-[300px] h-[400px] flex flex-col justify-center items-center rounded-md shadow-lg">
        <button
          className="absolute bottom-5 right-6 text-red-700 bg-white px-3 py-2"
          onClick={() => onClose(false)}
        >
          Close
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
          <input
            type="email"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-2"
            />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2"
            />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
