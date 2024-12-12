import { FeaturedProd } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProdCard = () => {
  return (
    <div className='flex flex-col px-[43px] lg:px-0 py-20 gap-12 lg:gap-20 mx-auto max-w-[1124px]'>
        <div>
            <div className='flex flex-col gap-[10px]'>
                <div className='flex flex-col text-center' >
                    <h2 className='font-normal text-xl leading-[30px] tracking-[0.2px] text-[#737373] '>Featured Products</h2>
                    <h3 className='text-2xl uppercase font-bold tracking-[0.1px]'>Best Seller Products</h3>
                    <p className='text-sm tracking-[0.2px] font-normal'>Problems trying to resolve the conflict between</p>
                </div>
            </div>
        </div>
        <div className='bg-[#FFFFFF]'>
            <div className='flex flex-wrap py-8'>
                <ul className='flex gap-8 text-[#8B8B8B] font-medium text-[18px] leading-[32px] flex-wrap h-auto w-fit justify-center'>
                 {FeaturedProd.map((item, index) => (<li key={index} className='w-fit lg:w-[239px] h-auto hover:underline hover:scale-105 transition-transform ease-in-out duration-300 underline-offset-8 hover:decoration-amber-400 hover:text-black hover:decoration-2'>
                   <Link href={"/"}> 
                   <Image src={item.image} alt={item.altImage} width={348} height={427}></Image>
                   <div className='px-[25px] pt-[25px] pb-[35px] gap-[10px] flex flex-col text-center'>
                        <h5 className='text-base font-bold tracking-[0.1px] text-[#252B42]'>Graphic Design</h5>
                        <p className='text-sm leading-6 text-[#737373] tracking-[0.2px]'>English Department</p>
                        <div className=''>
                        <span className='text-base text-[#BDBDBD] font-bold tracking-[0.1px]'>{"$"+(item.price)}</span><span className='text-base font-bold tracking-[0.1px] text-[#23856D]'>{"$"+(item.price)}</span>
                        </div></div>
                        <div className='flex space-x-2 items-center justify-center'>
                            <div className='rounded-full h-4 w-4 bg-[#23A6F0]'></div>
                            <div className='rounded-full h-4 w-4 bg-[#23856D]'></div>
                            <div className='rounded-full h-4 w-4 bg-[#E77C40]'></div>
                            <div className='rounded-full h-4 w-4 bg-[#252B42]'></div>
                        </div>
                        </Link>
                    </li>))}
      </ul>
            </div>
        </div>
      
    </div>
  )
}

export default ProdCard
