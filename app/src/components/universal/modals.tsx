'use client';

import { useLoginContext } from '@/context/loginContextProvider';
import LoginForm from './loginForm';
import SignUpForm from './signupForm';

const Modals = () => {
  const { open, modalType, setOpen } = useLoginContext();

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Close modal when clicking outside the modal content
  const handleOutsideClick = (e: React.MouseEvent) => {
    // If the click is on the background overlay (not the modal form)
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={handleOutsideClick} // Close when clicking outside modal
        >
          <div
            className="max-w-sm w-full bg-white shadow-lg p-6 rounded-lg transform transition-all relative border border-gray-300"
            onClick={(e) => e.stopPropagation()} // Prevent click event from reaching the overlay
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-xl font-bold text-slate-700 hover:text-gray-500 transition duration-200"
            >
              X
            </button>

            {modalType === 'login' ? (
              <LoginForm handleClose={handleClose} />
            ) : (
              <SignUpForm handleClose={handleClose} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;
