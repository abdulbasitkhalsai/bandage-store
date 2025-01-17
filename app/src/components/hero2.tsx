import Image from 'next/image'
import React from 'react'

const Hero2 = () => {
  return (
    <div className='bg-[##FAFAFA] flex flex-col gap-12 py-20 w-full items-center'>
       <div className='text-center gap-[10px] flex flex-col lg:w-[607px] mx-[40.5px] items-center xl:mx-[195px]'>
          <span><h2 className='text-2xl font-bold tracking-[0.1px] text-[##252B42]'>EDITOR’S PICK</h2></span>
          <span><p className='text-sm font-normal text-center tracking-[0.2px] text-[#737373] text-wrap min-w-[196px] sm:w-auto font-mono'>Problems trying to resolve the conflict between</p></span>
      </div>
      <div className='justify-center flex flex-wrap gap-[30px]'>
        <div className='relative gap-4'>
          <Image className='w-[325px] lg:w-[510px] h-[500px]' src={"/images/Hero2-1.1.png"} alt='Men Collection' width={510} height={500}></Image>
          <span className='absolute bottom-3 left-16 uppercase w-[170px] px-[26px] py-3 bg-[#FFFFFF] font-bold text-base tracking-[0.1px] text-center'>Men</span>
          </div>
        <div className='relative gap-4 max-h-[500px]'>
          <Image className='w-[325px] h-full lg-h-[500px] ' src={"/images/Hero2-2.png"} alt='Women Collection' width={325} height={500}></Image>
          <span className='absolute bottom-3 left-16 uppercase w-[136px] px-[26px] py-3 bg-[#FFFFFF] font-bold text-base tracking-[0.1px] text-center'>Women</span>
          </div>
        <div className='flex flex-col md:flex-row xl:flex-col  gap-4'>
                <div className='relative'>
                  <Image className='w-[324px] xl:w-[240px] h-auto' src={"/images/Hero2-3.png"} alt='Men' width={324} height={242}></Image>
                  <span className='absolute bottom-3 left-[14px] uppercase w-auto px-[26px] py-3 bg-[#FFFFFF] font-bold text-base tracking-[0.1px] text-center'>Accessories</span>
                  </div>
                <div className='relative gap-4'>
                  <Image className='w-[324px] xl:w-[240px] h-auto' src={"/images/Hero2-4.png"} alt='Men' width={324} height={242}></Image>
                  <span className='absolute bottom-3 left-[18px] uppercase w-auto px-[26px] py-3 bg-[#FFFFFF] font-bold text-base tracking-[0.1px] text-center'>Kids</span>
                  </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2
