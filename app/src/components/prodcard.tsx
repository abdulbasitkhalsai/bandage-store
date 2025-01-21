'use client'
import { IProductProp } from '@/interfaces'
import { GetProductData } from '@/sanity/sanity.query'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'


const ProdCard = () => {
    const [favStatus, SetFavStatus] = useState(false)
    const [product , setProduct] = useState<IProductProp[]>([])
    useEffect(() => {
        const fetchProduct = async () => {
            const product = await GetProductData()
            setProduct(product)
        };
        fetchProduct();
    }, []);

    const handleFav = () => {
        SetFavStatus(!favStatus)
    }
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
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-[#8B8B8B] font-medium text-[18px] leading-[32px] h-auto w-fit mx-auto justify-center'>
                 {product.map((product, index) => (<li key={index} className='relative w-fit lg:w-[239px] h-auto hover:scale-105 transition-transform ease-in-out duration-300 underline-offset-8'>
                   <Link href={`/products/${product._id}`}>
                   <div>
                    <Image className='w-[348px] h-[300px]' src={product.imageUrl} alt="Image" width={348} height={427}></Image>
                        {favStatus && <button className='absolute top-2 right-2' onClick={()=>handleFav()}><Image className='cursor-pointer inline-block' src={"/images/Icn-Fav.png"} width={16} height={16} alt='Favorites'></Image></button>}
                        {!favStatus && <button className='absolute top-2 right-2' onClick={()=>handleFav()} ><Image className='cursor-pointer inline-block' src={"/images/fav.jpg"} width={16} height={16} alt='Favorites'></Image></button>}
                   </div>
                   <div className='px-[5px] pt-[25px] pb-[35px] gap-[10px] flex flex-col text-center'>
                        <h5 className='text-base font-bold tracking-[0.1px] text-[#252B42] hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2 '>{product.title}</h5>
                        <p className='text-sm leading-8 text-[#737373] tracking-[0.2px] line-clamp-2 hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2'>{product.description}</p>
                        <div className=''>
                        {/* <span className='text-base text-[#BDBDBD] font-bold tracking-[0.1px]'>{"$"+(product.price)}</span> */}
                        <span className='text-base font-bold tracking-[0.1px] text-[#23856D] hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2'>{"$"+(product.price)}</span>
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
