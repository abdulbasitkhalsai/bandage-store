import Image from 'next/image'
import React from 'react'

const Hero1 = () => {
  return (
     <div className=" relative w-screen h-[753px] lg:h-[716px] px-2">
      <div className="flex flex-col py-28 lg:py-28 gap-20 text-[#FAFAFA] absolute z-10">
        <div className=' gap-[30px] lg:mt-12 lg:ml-[197.5px]'>
          <div className='flex flex-col w-auto h-fit lg:items-start items-center justify-between text-wrap gap-[35px]'>
            <span className='uppercase font-bold text-base tracking-[0.1px] h-auto'>Summer 2020</span>
            <span className='uppercase h-auto text-wrap text-center font-bold text-[40px] lg:text-[58px] tracking-[0.2px] leading-[50px] lg:leading-[80px]'>New Collection</span>
            <span className='text-wrap h-auto font-mono max-w-[376px] font-normal text-center lg:text-left tracking-[0.2px] leading-[30px] text-xl'>We know how large objects will act, but things on a small scale.</span>
            <div className='gap-[10px]'><button className='uppercase bg-[#2DC071] py-[15px] leading-8 rounded-[5px] px-[40px] font-bold text-2xl'>Shop Now</button></div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0'>
        <Image className='xl:object-fill object-cover  w-full h-full' src={"/images/Hero1.jpg"} alt='Shopping' height={753} width={3180}></Image>
      
      </div>
    </div>

  )
}

export default Hero1
