'use client';

// import { ProdCategory1 } from '@/constant'
import { ICategoryProp } from '@/interfaces'
import { GetCategoriesData } from '@/sanity/sanity.query'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Category = () => {
    const [prodCategory , setProdCategory] = useState<ICategoryProp[]>([])
    useEffect(() => {
        const fetchProduct = async () => {
            const prodCategory = await GetCategoriesData()
            setProdCategory(prodCategory)
        };
        fetchProduct();
    }, []);
    const categoriesToShow = prodCategory.slice(0, 5);
  return (
    <div className='bg-[#FAFAFA]'>
      <div className='justify-around flex gap-[30px] p-6'>
        <div>Shop</div>
        <ul className="flex items-center justify-center font-[sans-serif] space-x-4">
      <li className="text-gray-800 text-base font-bold cursor-pointer">
        Home
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
          <path fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
      <li className="text-gray-500 text-base cursor-pointer">
        Shop
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
          <path fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd" data-original="#000000"></path>  
        </svg>
      </li>
    </ul>

      </div>
      <div className='pb-12'>
        <ul className='flex gap-[15px] justify-center flex-wrap'>
            {categoriesToShow.map((item, index) => (<li key={index}><Link href={`/categories/${item.slug.current}`}>
                <div className="relative group w-full overflow-hidden rounded-lg shadow-lg">
                    <Image className='transition-transform duration-300 group-hover:scale-110 w-[205px] h-[223px]' src={item.imageUrl} alt={item.slug.current} width={205} height={223}/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                        <h3 className="text-xl font-bold uppercase">{item.categoryName}</h3>
                        <p className="text-sm">{item.productCount} Items</p>
                     </div>
                </div>
            </Link></li>))}
        </ul>
      </div>
    </div>
  )
}

export default Category
