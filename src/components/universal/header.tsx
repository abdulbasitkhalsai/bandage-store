'use client'

import { navItems } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import React, { ReactNode, useState } from 'react'

const Header = ({children} : {children? : ReactNode}) => {
  const [toogle, SetToogle] = useState(false)

  // const router = useRouter();
  // const backgroundColor = router.pathname === '/product-list' ? 'green' : 'black';
  return (
    <header className='font-[sans-serif] min-h-[40px] tracking-wide relative z-50'>
    {children}
    <div className='wrapper'>
      <div className='flex flex-wrap items-center py-3 bg-[#FFFFFF] lg:gap-y-4 gap-y-6 gap-x-4 justify-between'>
        <div><Link href={"/"} className='text-[#252B42] font-bold text-2xl tracking-[0.1px]'>Bandage</Link></div>
        <div className='flex flex-1 w-full lg:w-auto justify-end lg:justify-between items-center ml-4'>      
        <div id="collapseMenu"
          className="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50 justify-end">
          <ul className='hidden lg:flex space-x-6 ml-10 font-bold text-sm leading-5 tracking-[0.2px] text-[#737373]'>
            {navItems.map((item, index) => (<li key={index} className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'><Link href={item.link}>{item.title}</Link></li>))} 
          </ul>
        </div>
        <div className='flex items-center max-sm:ml-auto'>
          <div className='lg:flex items-center gap-[5px] p-[15px] hidden'>
            <Image className='w-3 h-3' src={"/images/Icn-User.png"} alt='User' width={12} height={12}></Image>
            <span>Login / Register</span>
          </div>
          <ul className="flex space-x-4 items-center">
            <li
              className="relative px-1 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <Image src={"/images/Icn-Search.png"} width={16} height={16} alt='Search'></Image>
            </li>
            <li
              className="relative px-1 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <span className="relative">
                <Image className='cursor-pointer inline-block h-4 w-auto' src={"/images/Icn-Cart.png"} width={16} height={16} layout='fixed' alt='Cart'></Image>
                <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
              </span>
            </li>
            <li
              className="relative px-1 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <span className="relative">
                <Image className='cursor-pointer inline-block ' src={"/images/Icn-Fav.png"} width={16} height={16} alt='Favorites'></Image>
                <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
              </span>
            </li>
          </ul>

    {/* <div className='relative w-auto'>
          <button id="toggleOpen" className='lg:hidden ml-6' onClick={() => SetToogle(prev => !prev)}>
            <Image src="/images/Icn-Menu.png" alt="Menu" width={24} height={13.71} className="object-contain"/>
          </button> */}
          {/* {toogle && 
          <div className={`absolute top-[10%] left-[-100%] w-[80%] h-[80%] bg-[#FFFFFF] border border-gray-300 rounded-lg text-xl flex flex-col justify-center items-center z-50 transition-all duration-300`} style={{ transform: toogle ? "translateX(100%)" : "translateX(0)" }}>
            <ul className='space-y-2 text-center'>
              {navItems.map((item, index) => (<li key={index}><Link className='text-lg font-medium' href={item.link}>{item.title}</Link></li>))}
            </ul>
          </div>} */}
{/* 
<div
  className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FFFFFF] border border-gray-300 rounded-lg text-xl flex flex-col justify-center items-center z-50 transition-transform duration-300 ${
    toogle ? "scale-100" : "scale-0"
  }`}
>
  <ul className="space-y-4 text-center">
    {navItems.map((item, index) => (
      <li key={index}>
        <Link className="text-lg font-medium" href={item.link}>
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
</div> */}
{/* <div className="relative w-auto">
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
      className="object-contain"
    />
  </button>
  {toogle && (
    <div
      className={`absolute top-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] rounded-md shadow-lg border border-gray-300 w-[90%] max-w-sm p-4 z-[50] transition-transform duration-300 ${
        toogle ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}
    >
      <button
        className="absolute top-2 right-2 bg-gray-100 p-2 rounded-full shadow-md"
        onClick={() => SetToogle(false)}
      >
        <Image
          src="/images/Icn-Close.png"
          alt="Close"
          width={20}
          height={20}
        />
      </button>
      <ul className="space-y-4 text-center">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              className="text-lg font-medium hover:text-gray-700"
              href={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div> */}

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
      className="object-contain"
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
              onClick={() => SetToogle(false)} // Close menu on link click
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

      {/* </div>     */}
        </div>
      </div>
      </div>
    </div>
          
  </header>
  )
}

export default Header
