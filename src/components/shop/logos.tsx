import { logos } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logos = () => {
  return (
    <ul className='flex justify-center gap-[30px] bg-[#FAFAFA] items-center py-[50px]'>
      {logos.map(item => (<li><Link className='' href={"/"}><Image src={item.image} height={72} width={153} alt={item.altImage}></Image></Link></li>))}
    </ul>
)
}

export default Logos
