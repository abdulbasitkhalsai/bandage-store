import Image from 'next/image'
import React from 'react'

const Hero3 = () => {
  return (
    <div className='flex justify-between wrapper'>
      <div className='flex flex-col gap-[35px] w-[376px] py-[112px]'>
        <span className='uppercase font-bold text-base tracking-[0.1px] text-[#252B42]'>About Company</span>
        <span className='uppercase font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]'>About Us</span>
        <span className='text-wrap font-normal text-xl leading-[30px] tracking-[0.2px] text-[#737373]'>We know how large objects will act, but things on a small scale</span>
        <button className='rounded-[5px] px-10 py-[15px] w-fit bg-[#23A6F0] font-bold text-sm leading-[22px] tracking-[0.2px] text-[#FFFFFF]'>Get Quote Now</button>
      </div>
      <div className='relative'>
        <Image className='z-10' src={"/images/hero-about.png"} alt='Shopping' width={571} height={668}></Image>
        <div className='w-[14.78px] h-[14.78px] absolute bg-[#977DF4] rounded-full top-[121.72px] left-[576.94px]'></div>
        <div className='w-[14.78px] h-[14.78px] absolute bg-[#977DF4] rounded-full top-[408.78px] left-[23.92px] '></div>
        <div className='w-[30.25px] h-[30.25px] absolute bg-[#FFE9EA] rounded-full top-[247.66px] left-[554.42px]'></div>
        <div className='w-[77.39px] h-[77.39px] absolute bg-[#FFE9EA] rounded-full top-[11.96px]'></div>
        <div className='w-[484.06px] h-[484.06px] absolute bg-[#FFE9EA] rounded-full top-[100px] left-[58.4px] z-[-1]'></div>
      </div>
    </div>
  )
}

export default Hero3
