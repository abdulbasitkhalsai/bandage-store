import Image from 'next/image'
import React from 'react'

const Hero2 = () => {
  return (
    <div className='bg-[##FAFAFA] justify-items-center mx-[195px] bg-[##FAFAFA] py-20 gap-12 flex flex-col'>
      <div className='justify-items-center'>
      <span className='flex flex-col text-2xl font-bold '>EDITOR’S PICK</span>
      <span className='text-sm font-normal'>Problems trying to resolve the conflict between </span>
      </div>
      <div className='flex justify-center gap-[30px]'>
        <div>
            <Image className='relative' src={"/images/Hero2-1.png"} alt='Men Collection' width={509} height={500}></Image>
            
        </div>
        <div><Image src={"/images/Hero2-2.png"} alt='Women Collection' width={239} height={500}></Image></div>
        <div className='flex flex-col gap-4'>
                <div><Image src={"/images/Hero2-3.png"} alt='Men' width={239} height={242}></Image></div>
                <div><Image src={"/images/Hero2-4.png"} alt='Men' width={239} height={242}></Image></div>
        </div>
      </div>
    </div>
  )
}

export default Hero2
