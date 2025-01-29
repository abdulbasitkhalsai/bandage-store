// // components/Modals.tsx
'use client';

// const Modals = () => {
//   const { modalType, open } = useLoginContext();

//   if (!open) return null; // Ensure modal is only rendered when open

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       {modalType === 'login' && <Login />}
//       {modalType === 'signup' && <Signup />}
//     </div>
//   );
// };

// export default Modals;

// const Modals = () => {
//   const { modalType, open, onClose } = useLoginContext();
//   console.log("Modals - open:", open);
//   console.log("Modals - modalType:", modalType);
//   if (!open) return null;

//   return (
    
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="relative bg-white rounded-lg p-4 shadow-lg">
//         {modalType === 'login' && <Login />}
//         {modalType === 'signup' && <Signup />}
//         <button
//           onClick={() => onClose(false)} // Close modal
//           className="absolute top-2 right-2 text-red-500 hover:text-red-700"
//         >
//           ✕
//         </button>
//       </div>
//     </div>
//   .);
// };
// export default Modals;

import React from 'react';
import { useLoginContext } from '@/context/loginContextProvider'; // No need to wrap with LoginContextProvider here
import Login from './login';
import Signup from './signup';

const Modals = () => {
  const { open, modalType, setOpen } = useLoginContext();
  if (open || modalType !== "") {
    console.log("Rendering Modals: ", { open, modalType });
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-40 bg-black bg-opacity-50">
      <div className="bg-white relative z-50 w-[300px] h-[400px] flex flex-col justify-center items-center rounded-md shadow-lg">
        <button
          className="absolute top-2 right-2 text-red-700"
          onClick={() => setOpen(false)} // Close the modal on button click
        >
          ✖
        </button>
        {modalType === 'login' && <Login />}
        {modalType === 'signup' && <Signup />}
      </div>
    </div>
  );
};

export default Modals;
