'use client';

import { IProductProp } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { useCart } from '@/context/cartContextProvider';
import QuickViewModal from './quickviewModal';
import WishlistButton from '../buttons/wishlistButton';

interface ProdCardProps {
  product: IProductProp;
}

const ProdCard = ({ product }: ProdCardProps) => {
  const { addToCart } = useCart();
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);

  const toggleQuickView = () => {
    setQuickViewOpen(!isQuickViewOpen);
  };

  return (
    <>
      <li className="relative w-fit lg:w-[300px] h-auto group hover:scale-105 transition-transform ease-in-out duration-300">
        <Link href={`/products/${product.slug.current}`} className="block">
          <div className='relative'>

            <Image
              className="w-[300px] h-[300px]"
              src={product.imageUrl || '/images/ProdCard-1.png'}
              alt={product.title || 'Image'}
              width={300}
              height={427}
              />
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart({
                productId: product.productId,
                title: product.title,
                price: product.price,
                imageUrl: product.imageUrl,
                quantity: 1,                                                                                            
              });
            }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#23856D] w-full text-white text-sm font-bold px-4 py-2 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Add to Cart
          </button>
          <div className="absolute top-[5%] right-2 flex flex-col items-center space-y-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <WishlistButton productId={product.productId} />

            <button onClick={ (e)=>{
              e.preventDefault();
              e.stopPropagation();
              toggleQuickView();
            }} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
              <Eye className="w-5 h-5 text-gray-600" />
            </button>
          </div>
              </div>
            <span className='text-base font-bold tracking-[0.1px] text-[#252B42] hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2'>{product.title}</span>
            <span className='text-sm leading-8 text-[#737373] tracking-[0.2px] line-clamp-2 hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2'>{product.description}</span>
            <span className='text-base text-[#23856D] font-bold tracking-[0.1px]'>${product.price}</span>
          </Link>
      </li>

      {/* Quick View Modal */}
      {isQuickViewOpen && <QuickViewModal product={product} onClose={toggleQuickView} />}
    </>
  );
};

export default ProdCard;
