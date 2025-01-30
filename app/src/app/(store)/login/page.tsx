'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          className="block w-full px-3 py-2 border rounded mb-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="block w-full px-3 py-2 border rounded mb-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
