'use client'

import { navItems } from '@/constant'
import LoginContext from '@/context/loginContext'
import UserContext from '@/context/userContext'
import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import React, { ReactNode, useContext, useState } from 'react'

const Header = ({children} : {children? : ReactNode}) => {
  const [toogle, SetToogle] = useState(false)
  const {User} = useContext(UserContext)
  const pop = useContext(LoginContext)

  return (
    <header className='font-[sans-serif] min-h-[40px] tracking-wide relative z-50'>
    <div>{children}</div>
    <div className='wrapper'>
      <div className='flex flex-wrap items-center py-3 px-4 bg-[#FFFFFF] gap-y-4 gap-x-4 justify-between w-full overflow-hidden'>
        <div><Link href={"/"} className='text-[#252B42] font-bold text-2xl tracking-[0.1px]'>Bandage</Link></div>
        <div className='flex flex-1 w-fit lg:w-auto justify-end lg:justify-between items-center sm:ml-4'>      
        <div id="collapseMenu"
          className="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50 justify-end">
          <ul className='hidden lg:flex space-x-6 ml-10 font-bold text-sm leading-5 tracking-[0.2px] text-[#737373]'>
            {navItems.map((item, index) => (<li key={index} className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'><Link href={item.link}>{item.title}</Link></li>))}
          </ul>
        </div>
        <div className='flex items-center max-sm:ml-auto'>
         <div>{User && `Hey ${User}`}</div>
         <div>{!User && <div className='sm:flex items-center gap-[5px] p-[15px] hidden'>
              <Image className='w-3 h-3' src={"/images/Icn-User.png"} alt='User' width={12} height={12}></Image>
              <button className='' onClick={()=> pop?.onClose(true)}>Log In</button>
              <div>/</div>
              <button className='' onClick={()=> pop?.onClose(true)}>Register</button>
            </div>
              }</div>
          <ul className="flex space-x-4 items-center w-auto">
            <li
              className="relative px-1 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <Image src={"/images/Icn-Search.png"} className='min-w-4 h-4 hidden sm:visible' width={16} height={16} alt='Search'></Image>
            </li>
            <li
              className="relative px-1 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <span className="relative">
                <Image className='cursor-pointer inline-block h-4 w-4' src={"/images/Icn-Cart.png"} width={16} height={16} alt='Cart'></Image>
                <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
              </span>
            </li>
            <li
              className="relative px-1 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <span className="relative">
                <Image className='cursor-pointer inline-block min-w-4 h-4' src={"/images/Icn-Fav.png"} width={16} height={16} alt='Favorites'></Image>
                <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
                {/* <span className="absolute -top-1 right-0 rounded-full bg-red-500 px-[6px] py-[1px] text-[10px] leading-none text-white flex items-center justify-center min-w-[16px] max-w-[24px] overflow-hidden">0</span> */}
              </span>
            </li>
          </ul>

    
<div className="relative w-auto">
  <button
    id="toggleOpen"
    className="lg:hidden ml-6 z-[60]"
    onClick={() => SetToogle((prev) => !prev)}
  >
    <Image
      src="/images/Icn-Menu.png"
      alt="Menu"
      width={24}
      height={13.71}
      className="object-contain min-w-4"
    />
  </button>
  {toogle && (
    <div
      className="absolute top-[100%] right-0 w-screen bg-[#FFFFFF] rounded-md shadow-lg border border-gray-300 z-[50] transition-transform duration-300 overflow-hidden"
    >
      <ul className="p-4 space-y-4 text-center">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              className="text-lg font-medium hover:text-gray-700"
              href={item.link}
              onClick={() => SetToogle(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
        </div>
      </div>
      </div>
    </div>
  </header>
  )
}

export default Header
