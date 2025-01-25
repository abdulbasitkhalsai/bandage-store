import React from 'react'
import Image from 'next/image'
import ProductGrid from '../universal/productgrid'

const Products = () => {
  return (
    <div>
      <div className='flex justify-around py-8 gap-20 items-center flex-wrap'>
        <span>Showing all 12 results</span>
        <span className='flex gap-[15px] items-center'>
          <span>Views:</span>
          <Image src={"/images/btn-row.png"} alt='Button' width={46} height={46}></Image>
          <Image src={"/images/btn-grid.png"} alt='Button' width={46} height={46}></Image>
        </span>
        <span className='flex gap-[15px]'>
          <button className='border border-s rounded-[5px] py-[10px] px-5 bg-[#F9F9F9] border-[#DDDDDD] flex items-center'>
            <span className='font-normal text-sm leading-7 tracking-[0.2px]'>Popularity</span>
            <span className='rotate-90'> &gt; </span>
            </button>
          <button className='py-[10px] px-5 bg-[#23A6F0] border border-s rounded-[5px]'>Filter</button>
        </span>
      </div>
      <ProductGrid/>
      <div className='py-12'>
        <ul className="flex mx-auto border-2 divide-x-2 rounded-lg overflow-hidden w-max font-[sans-serif]">
        <li className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 mr-2" viewBox="0 0 55.753 55.753">
            <path
              d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
              data-original="#000000" />
          </svg>
          Previous
        </li>
        <li
          className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-base font-bold text-gray-500">
          1
        </li>
        <li
          className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 !bg-gray-100 cursor-pointer text-base font-bold text-gray-800">
          2
        </li>
        <li
          className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-base font-bold text-gray-500">
          3
        </li>
        <li className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-800">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 ml-2 rotate-180" viewBox="0 0 55.753 55.753">
            <path
              d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
              data-original="#000000" />
          </svg>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Products
