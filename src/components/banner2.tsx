import Image from 'next/image'
import React from 'react'

const Banner2 = () => {
  return (
    <div className='pt-[120px] lg:pt-0 bg-[#FFFFFF] gap-[28.1px] lg:[30px] h-auto justify-center flex flex-col lg:flex-row-reverse items-center'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-[32.78px] w-fit text-center items-center lg:items-start lg:text-left text-wrap'>
            <h5 className='uppercase text-[#BDBDBD] font-bold text-base tracking-[0.1px]'>Summer 2020</h5>
            <h2 className='font-bold text-[40px] w-fit text-[#252B42] leading-[50px] tracking-[0.2px] '>Part of the Neural Universe</h2>
            <h4 className='font-normal text-xl w-fit text-[#737373] leading-[30px] tracking-[0.2px]'>We know how large objects will act, but things on a small scale.</h4>
            <div className='flex flex-col gap-[25px] items-center w-fit'>
                <button className='uppercase w-fit font-bold text-sm leading-[22px] tracking-[0.2px] text-[#FFFFFF] bg-[#23A6F0] rounded-[5px] px-10 py-[15px]'>Buy Now</button>
                <button className='w-fit font-bold text-sm leading-[22px] border-[1px] border-[#23A6F0] tracking-[0.2px]  text-[#23A6F0] rounded-[5px] px-10 py-[15px]'>Learn More</button>
            </div>
        </div>
      </div>
      
        <Image className='' src={"/images/Banner2.png"} alt='Shopping' width={463} height={403}></Image>
    </div>
  )
}

export default Banner2
