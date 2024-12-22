import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='bg-[#FAFAFA] py-10 gap-[11.5px] flex flex-col px-11'>
            <h3 className='font-bold text-2xl tracking-[0.1px] text-[#252B42]'>Bandage</h3>
            <ul className='flex gap-5'>
                <li><Link href={"https://www.facebook.com/"}><Image src={"/images/facebook.png"} alt='Facebook' width={24} height={24}></Image></Link></li>
                <li><Link href={"https://www.facebook.com/"}><Image src={"/images/instagram.png"} alt='Instagram' width={24} height={24}></Image></Link></li>
                <li><Link href={"https://www.facebook.com/"}><Image src={"/images/twitter.png"} alt='Twitter' width={24} height={24}></Image></Link></li>
            </ul>
        </div>
        <div className='bg-[#FFFFFF] flex flex-wrap'>
            <div>
                <h5>Company Info</h5>
            </div>
            <div>
                <h5>Legal</h5>
            </div>
            <div>
                <h5>Features</h5>
            </div>
            <div>
                <h5>Resources</h5>
            </div>
            <div>
                <h5>Get In Touch</h5>
            </div>
        </div>
        <div></div>
    </footer>
  )
}

export default Footer
