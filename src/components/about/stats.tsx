import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-col bg-[#FFFFFF] justify-items-center'>
        <div className='flex flex-col md:flex-row py-8 wrapper justify-center w-screen items-center text-wrap'>
        <span className='py-8 flex flex-col gap-[24px] justify-center'> 
            <span className='text-[#E74040] font-normal text-sm tracking-[0.2px]'>Problems trying</span>
            <span className='text-#252B42 font-bold text-2xl tracking-[0.1px]'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</span>
        </span>
        <span className='text-[#737373] font-normal text-sm tracking-[0.2px] max-w-[529px] text-start justify-center'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</span>
        </div>
        <div className='flex flex-wrap gap-[50px] py-20 justify-between wrapper w-screen items-center '>
            <span className='flex-col flex'>
                <span className='font-bold text-[58px] leading-[80px] tracking-[0.2px] text-center'>15K</span>
                <span className='text-center text-[#737373] font-bold text-base tracking-[0.1px]'>Happy Customers</span>
            </span>
            <span className='flex-col flex'>
                <span className='font-bold text-[58px] leading-[80px] tracking-[0.2px] text-center'>150K</span>
                <span className='text-center text-[#737373] font-bold text-base tracking-[0.1px]'>Monthly Visitors</span>
            </span>
            <span className='flex-col flex'>
                <span className='font-bold text-[58px] leading-[80px] tracking-[0.2px] text-center'>15</span>
                <span className='text-center text-[#737373] font-bold text-base tracking-[0.1px]'>Countries Worldwide</span>
            </span>
            <span className='flex-col flex'>
                <span className='font-bold text-[58px] leading-[80px] tracking-[0.2px] text-center'>100+</span>
                <span className='text-center text-[#737373] font-bold text-base tracking-[0.1px]'>Top Partners</span>
            </span>
        </div>
    </div>
  )
}

export default Stats
