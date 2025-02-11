'use client';

import Link from "next/link";
import { navItems } from "@/constant";
import Image from "next/image";
import { useLoginContext } from "@/context/loginContextProvider";
import { ReactNode, useState } from "react";
import Modals from "./modals";
import { useSession, signOut } from "next-auth/react";
import { UserCircleIcon } from "lucide-react";
import WishlistHeader from "../buttons/wishlistHeader";
import CartHeader from "../buttons/cartHeader";


const Header = ({ children }: { children?: ReactNode }) => {
  const { data: session, status } = useSession(); // No 'loading' check - Navbar renders immediately
  const [toggle, setToggle] = useState(false);
  const {setOpen, setModalType } = useLoginContext();

  const handleModalOpen = (type: 'login' | 'signup') => {
    setModalType(type);
    setOpen(true);
  };
  if (status === "loading") return null;
  return (
    <header className="font-[sans-serif] min-h-[40px] tracking-wide z-50 shadow-md sticky top-0 w-full bg-[#FFFFFF]">
      <div>{children}</div>
      <div className="wrapper">
        <div className="flex flex-wrap items-center py-3 px-4 gap-y-4 gap-x-4 justify-between w-full overflow-hidden">
          {/* Brand Logo */}
          <Link href="/" className="text-[#252B42] font-bold text-2xl tracking-[0.1px]">
            Bandage
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex flex-1 w-fit lg:w-auto justify-end lg:justify-between items-center sm:ml-4">
            <ul className="hidden lg:flex space-x-6 ml-10 font-bold text-sm leading-5 tracking-[0.2px] text-[#737373]">
              {navItems.map((item, index) => (
                <li key={index} className="relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
                  <Link href={item.link} className="hover:text-black">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* User Authentication */}
            <div className="flex items-center max-sm:ml-auto ml-6 gap-4">
              <WishlistHeader/>
              <CartHeader userId="USER001"/>
              {/* <WishlistArray/> */}
              {session ? (
                <div className="flex items-center gap-4">
                  {/* User Avatar */}
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="User Avatar"
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                  ) : (
                    <Image
                      src="/images/default-avatar.png" // Fallback icon
                      alt="Default Avatar"
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                  )}

                  {/* Username */}
                  <span className="font-medium">Hey, {session.user?.name}!</span>

                  {/* Logout Button */}
                  <button onClick={() => signOut()} className="text-red-500 hover:underline">
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  {/* Default User Icon when logged out */}
                  {/* Login/Signup Buttons */}
                  <button onClick={() => handleModalOpen('login')} className="text-blue-500 hover:underline flex gap-1">
                  <UserCircleIcon className="w-6 h-6 text-gray-500" />
                    Login
                  </button>
                  <button onClick={() => handleModalOpen('signup')} className="text-blue-500 hover:underline">
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden" onClick={() => setToggle((prev) => !prev)}>
            <Image src="/images/Icn-Menu.png" alt="Menu" width={24} height={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {toggle && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} onClick={() => setToggle(false)} className="text-lg font-medium text-[#252B42] hover:text-black">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              Hello
            {/* <WishlistArray/> */}
            </div>
            {/* Mobile Authentication */}
            {!session && (
              <div className="flex flex-col items-center py-4 space-y-2">
                <button onClick={() => { handleModalOpen('login'); setToggle(false); }} className="text-blue-500 hover:underline">
                  Login
                </button>
                <button onClick={() => { handleModalOpen('signup'); setToggle(false); }} className="text-blue-500 hover:underline">
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
  );
};

export default Header;
