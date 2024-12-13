import Image from 'next/image'
import React from 'react'

const Banner2 = () => {
  return (
    <div className='pt-[120px] bg-[#FFFFFF] justify-center flex flex-col lg:flex-row-reverse items-center'>
      <div className='flex flex-col gap-[28.1px] items-center'>
        <div className='flex flex-col gap-[32.78px] text-center lg:text-left text-wrap'>
            <h5 className='uppercase text-[#BDBDBD] font-bold text-base tracking-[0.1px]'>Summer 2020</h5>
            <h2 className='font-bold text-[40px] leading-[50px] tracking-[0.2px] '>Part of the Neural Universe</h2>
            <h4 className='font-normal text-xl leading-[30px] tracking-[0.2px]'>We know how large objects will act, but things on a small scale.</h4>
            <div className='flex flex-col gap-[25px] items-center '>
                <button className='w-fit uppercase font-bold text-sm leading-[22px] tracking-[0.2px] text-[#FFFFFF] bg-[#23A6F0] rounded-[5px] px-10 py-[15px]'>Buy Now</button>
                <button className='w-fit font-bold text-sm leading-[22px] tracking-[0.2px] text-[#23A6F0] rounded-[5px]'>Learn More</button>
            </div>
        </div>
      </div>
      <div className=''>
        <Image className='' src={"/images/Banner2.png"} alt='Shopping' width={463} height={403}></Image>
      </div>
    </div>
  )
}

export default Banner2
