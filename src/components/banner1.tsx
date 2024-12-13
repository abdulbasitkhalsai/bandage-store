import Image from 'next/image'
import React from 'react'

const Banner1 = () => {
  return (
    <div className='w-full h-auto border-[1px] items-center lg:items-end pt-12 rounded-[5px] md:justify-end relative border-[#DEDEDE] bg-[#23856D] flex flex-col lg:justify-around lg:flex-row'>
        <div className='pt-[112px] px-[80px] gap-20'>
            <div className='py-12 gap-[30px] justify-center  w-fit'>
                <div className='gap-[35px] flex text-wrap items-center lg:items-start text-center lg:text-left flex-col text-[#FFFFFF]'>
                    <h5 className='uppercase text-xl w-fit leading-[30px] tracking-[0.2px] font-normal'>Summer 2020</h5>
                    <h2 className='text-[40px] lg:text-[58px] lg:leading-[80px] leading-[50px] w-fit tracking-[0.2px] font-bold'>Vita Classic Product</h2>
                    <p className='text-xl lg:text-sm leading-[30px] tracking-[0.2px] w-fit font-normal'>We know how large objects will act, but things on a small scale.</p>
                    <span className='flex flex-col gap-5 lg:gap-[34px] lg:items-start items-center'>
                        <h5 className='text-2xl font-bold tracking-[0.1px]'>$16.48</h5>
                        <button className='uppercase rounded-[5px] bg-[#2DC071] text-sm leading-[22px] font-bold tracking-[0.2px] text-center py-[15px] px-10 w-fit h-fit'>Add to Cart</button>
                    </span>
                </div>
            </div>
        </div>
      <div className='justify-center'>
      <Image className='sm-custom:hidden' src={"/images/Banner1.png"} height={681} width={416} alt='Shopping'></Image>
      <Image className='hidden sm-custom:block' src={"/images/Banner1-1.png"} height={685} width={443} alt='Shopping'></Image>
      </div>
    </div>
  )
}

export default Banner1
