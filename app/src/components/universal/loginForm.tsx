

// 'use client';

// import { signIn } from 'next-auth/react';

// const LoginForm = ({ handleClose }: { handleClose: () => void }) => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <button
//         onClick={() => signIn("google")}
//         className="w-full py-2 bg-red-500 text-white rounded-md"
//       >
//         Login with Google
//       </button>
//     </div>
//   );
// };

// export default LoginForm;
'use client';

import { signIn } from 'next-auth/react';

const LoginForm = ({ handleClose }: { handleClose: () => void }) => {
  const handleLogin = async () => {
    await signIn("google");
    handleClose(); // Close modal after login
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <button
        onClick={handleLogin}
        className="w-full py-2 bg-red-500 text-white rounded-md"
      >
        Login with Google
      </button>
    </div>
  );
};

export default LoginForm;
