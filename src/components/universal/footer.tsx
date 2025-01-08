import { footerData, socialIcons } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer className='flex flex-col h-auto bg-[#FAFAFA]'>
      <div className='wrapper'>
        <div className=' py-10 gap-[11.5px] flex flex-col md:flex-row md:justify-around'>
            <h3 className='font-bold text-2xl tracking-[0.1px] text-[#252B42]'>Bandage</h3>
            <ul className='flex gap-5'>
              {socialIcons.map((icon, index) => (<li key={index}><Link href={icon.hrefIcon}><Image src={icon.srcIcon} height={24} width={24} alt={icon.altIcon}></Image></Link></li>))}
            </ul>
        </div>
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-6">
    {footerData.map((section, index) => (
      <div key={index} className="flex flex-col">
        <h5 className="font-bold text-lg text-gray-900 mb-4">{section.title}</h5>
        {section.links.length > 0 ? (
          <ul className="flex flex-col gap-2">
            {section.links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        ) : section.extra ? (
          <div>
            <div className="flex flex-col sm:flex-row items-stretch gap-2 w-full mb-4">
              <input
                type="email"
                placeholder={section.extra.inputPlaceholder}
                className="p-2 border rounded-l-md flex-grow text-gray-700"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
                {section.extra.buttonText}
              </button>
            </div>
            <p className="text-sm text-gray-500">{section.extra.description}</p>
          </div>
        ) : null}
      </div>
    ))}
  </div>

                </div>
    </footer>
  )
}

export default Footer
