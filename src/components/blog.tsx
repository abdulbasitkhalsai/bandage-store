import { blog } from '@/constant'
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export function ButtonIcon() {
    return (
      <Button variant="outline" 
      className=" border-none shadow-none p-0 bg-transparent hover:bg-transparent"
      size="icon"
      >
        <ChevronRight />
      </Button>
    )
  }
const Blog = () => {
  return (
    <div className='flex flex-col py-20 gap-20 w-full h-auto bg-[#FFFFFF] justify-center items-center'>
        <div className='flex flex-col gap-[10px] text-center text-wrap'>
            <h6 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#23A6F0]'>Practice Advice</h6>
            <h3 className='font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]'>Featured Products</h3>
            <p className='font-normal text-sm tracking-[0.2px] text-[#737373]'>Problems trying to resolve the conflict between the two major </p>
        </div>
        <ul className='flex bg-[#FFFFFF] items-center flex-wrap justify-center gap-[30px]'>
                {blog.map((item, index)=>(<li  key={index}>
                    <div className='shadow-custom w-fit max-w-[330px] justify-center'>
                    <div className='relative w-fit h-auto justify-center'>
                    <Image src={item.image} alt={item.altImage} width={330} height={300} className='w-[330px] h-auto items-center'></Image>
                    <div className='absolute top-5 left-5 px-[10px] text-sm leading-3 bg-[#E74040]'>New</div>
                    </div>
                    <div className='text-wrap flex flex-col gap-[10px] pt-[25px] pb-[35px] px-[25px]'>
                        <ul className='flex gap-[15px]'>
                            <li className='font-normal text-xs tracking-[0.2px] text-[#8EC2F2]'>Google</li>
                            <li className='font-normal text-xs tracking-[0.2px] text-[#737373]'>Trending</li>
                            <li className='font-normal text-xs tracking-[0.2px] text-[#737373]'>New</li>
                        </ul>
                        <h4 className='font-normal text-xl leading-[30px] tracking-[0.2px] text-[#252B42]'>Loudest à la Madison #1 Lintegral</h4>
                        <p className='font-normal text-sm tracking-[0.2px] text-[#737373]'>We focus on ergonomics and meeting you where you work. Its only a keystroke away.</p>
                        <div></div>
                        <div className='flex justify-between'>
                        <div className='flex gap-[5px]  text-[#737373] text-xs tracking-[0.2px]'>
                            <Image src={"/images/Vector-Bell.png"} width={16} height={14.67} alt='Bell'></Image>
                            <span>{item.postingdate}</span>        
                        </div>
                        <div className='flex gap-[5px] text-[#737373] text-xs tracking-[0.2px]'>
                            <Image src={"/images/Vector-Img.png"} width={16} height={16} alt='Image-Icon'></Image>
                            <span>{item.commentCount} Comments</span>
                        </div>
                        </div>
                        <Link href={"/"} className='hover:bg-gray-100 w-fit rounded-md px-2'>
                        <div className='flex'>
                            <button className='mt-[-4px] font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Learn More</button>
                            <ButtonIcon key={"Learn More"}/>
                        </div></Link>
                    </div>
                    </div>
                    </li>))}
        </ul>
        
    </div>
  )
}

export default Blog
