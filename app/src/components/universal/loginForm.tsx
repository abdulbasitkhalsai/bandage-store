// 'use client';

// import { useState } from 'react';

// const LoginForm = ({ handleClose }: { handleClose: () => void }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle login here
//     console.log('Logging in with:', { email, password });
//     handleClose(); // Close modal after login
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">Login</button>
//       </form>
//     </div>
//   );
// };

// // export default LoginForm;
// 'use client';

// import { signIn } from 'next-auth/react';
// import { useState } from 'react';

// const LoginForm = ({ handleClose }: { handleClose: () => void }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setErrorMessage('Please fill out both fields.');
//       return;
//     }

//     // Handle login here
//     console.log('Logging in with:', { email, password });
//     setErrorMessage(null); // Reset any error message
//     handleClose(); // Close modal after login
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         {errorMessage && (
//           <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
//         )}
//         <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
//           Login
//         </button>

//         <div className="mt-4">
//         <button
//           onClick={() => signIn("google")}
//           className="w-full py-2 bg-red-500 text-white rounded-md"
//         >
//           Login with Google
//         </button>
//         <button
//           onClick={() => signIn("facebook")}
//           className="w-full py-2 bg-blue-600 text-white rounded-md mt-2"
//         >
//           Login with Facebook
//         </button>
//       </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

'use client';

import { signIn } from 'next-auth/react';

const LoginForm = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <button
        onClick={() => signIn("google")}
        className="w-full py-2 bg-red-500 text-white rounded-md"
      >
        Login with Google
      </button>
    </div>
  );
};

export default LoginForm;
