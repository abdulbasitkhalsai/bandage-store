import Image from 'next/image'
import React from 'react'

const Hero1 = () => {
  return (
    <div className='flex flex-col '>
      <Image className='w-full relative' src={"/images/Hero1.jpg"} height={716} width={1440} alt='Shop'></Image>
      <div className='absolute text-white my-12 mx-[197.5px] w-auto py-28'>
        <div className='py-12 flex gap-[35px] w-[599px] flex-col'>
        <span className='text-base font-bold'>SUMMER 2020</span>
        <span className='text-[58px] font-bold'>NEW COLLECTION</span>
        <span className='flex flex-wrap text-xl w-[376px] font-normal'>We know how large objects will act, but things on a small scale.</span>
        <button className='w-[221px] h-[62px] rounded-[5px] text-2xl font-bold bg-[#2DC071]'>SHOP NOW</button>
        </div>
      </div>


    </div>
  )
}

export default Hero1
