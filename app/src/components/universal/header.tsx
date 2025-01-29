'use client';

import Link from "next/link";
import { navItems } from "@/constant";
import Image from "next/image";
import { useUserContext } from "@/context/userContextProvider";
import {useLoginContext } from "@/context/loginContextProvider";
import { ReactNode, useState } from "react";
import Modals from "./modals";
const Header = ({children} : {children? : ReactNode}) => {
  const [toggle, setToggle] = useState(false); // Mobile menu toggle state
  const { User, isAuthenticated } = useUserContext();
  const { open, modalType, setOpen, setModalType } = useLoginContext(); // Use context directly

  console.log("Login Context in Header:", { open, modalType, setOpen, setModalType });

  const handleModalOpen = (type: 'login' | 'signup') => {
    console.log("Opening Modal for:", type); // Add this line
    console.log("type: " + type)
    setModalType(type); // Set modal type (login or signup)
    setOpen(true); // Open the modal
  };
  return (
    <header className="font-[sans-serif] min-h-[40px] tracking-wide z-50 shadow-md sticky top-0 w-full bg-[#FFFFFF]">
    <div>{children}</div>
      <div className="wrapper">
        <div className="flex flex-wrap items-center py-3 px-4 gap-y-4 gap-x-4 justify-between w-full overflow-hidden">
          <Link href="/" className="text-[#252B42] font-bold text-2xl tracking-[0.1px]">Bandage</Link>
          {/* Desktop Navigation */}
          <div className="flex flex-1 w-fit lg:w-auto justify-end lg:justify-between items-center sm:ml-4">
            <div className="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50 justify-end">
            <ul className="hidden lg:flex space-x-6 ml-10 font-bold text-sm leading-5 tracking-[0.2px] text-[#737373]">
              {navItems.map((item, index) => (
                <li key={index} className="max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
                  <Link href={item.link} className="hover:text-black">
                    {item.title}
                  </Link>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all"></span>
                </li>
              ))}
            </ul>
          </div>
            {/* User Authentication Links */}
            <div className="flex items-center max-sm:ml-auto">
            {isAuthenticated ? (
              <span className="font-medium">Hey, {User}!</span>
            ) : (
              <div className="flex gap-4">
                <button
                  onClick={() => handleModalOpen('login')}
                  className="text-blue-500 hover:underline"
                  >
                  Login
                </button>
                <button
                  onClick={() => handleModalOpen('signup')}
                  className="text-blue-500 hover:underline"
                  >
                  Sign Up
                </button>
              </div>
            )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setToggle((prev) => !prev)}
          >
            <Image
              src="/images/Icn-Menu.png"
              alt="Menu"
              width={24}
              height={24}
              />
          </button>
        </div>

        {/* Mobile Navigation */}
        {toggle && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    onClick={() => setToggle(false)}
                    className="text-lg font-medium text-[#252B42] hover:text-black"
                    >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Authentication Links */}
            {!isAuthenticated && (
              <div className="flex flex-col items-center py-4 space-y-2">
                <button
                  onClick={() => {
                    handleModalOpen('login');
                    setToggle(false); // Close mobile menu
                  }}
                  className="text-blue-500 hover:underline"
                  >
                  Login
                </button>
                <button
                  onClick={() => {
                    handleModalOpen('signup');
                    setToggle(false); // Close mobile menu
                  }}
                  className="text-blue-500 hover:underline"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal for Login/Signup */}
      <Modals />
    </header>
            // </LoginContextProvider>
  );
};

export default Header;

  