'use client';

import React, { useState } from 'react';
import { useLoginContext } from '@/context/loginContextProvider';

const Signup = () => {
  const { onClose } = useLoginContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Signup successful!');
        onClose(false); // Close the modal
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (err) {
      console.error('Error during signup:', err);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-40 bg-black bg-opacity-50">
      <div className="bg-white relative z-50 w-[400px] p-6 rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
            />
          <input
            type="text"
            name="phone"
            placeholder="Phone (+1234567890)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
            />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
            />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
            />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </form>
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={() => onClose(false)}
          >
          Close
        </button>
      </div>
    </div>
        
  );
};

export default Signup;
