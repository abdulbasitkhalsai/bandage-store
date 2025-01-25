
import { IProductProp } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProdCardProps {
    product: IProductProp; // Properly type the product prop
  }
  
  const ProdCard = ({ product }: ProdCardProps) => {  return (
    <li className="relative w-fit lg:w-[239px] h-auto hover:scale-105 transition-transform ease-in-out duration-300 underline-offset-8">
      {product.slug ? (
        <Link href={`/products/${product.slug.current}`}>
          <div>
            <Image
              className="w-[348px] h-[300px]"
              src={product.imageUrl || "images/ProdCard-1.png"}
              alt={product.title || "Image"}
              width={348}
              height={427}
            />
          </div>
          <div className="px-[5px] pt-[25px] pb-[35px] gap-[10px] flex flex-col text-center">
            <h5 className="text-base font-bold tracking-[0.1px] text-[#252B42] hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2">
              {product.title}
            </h5>
            <p className="text-sm leading-8 text-[#737373] tracking-[0.2px] line-clamp-2 hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2">
              {product.description}
            </p>
            <div className="">
              <span className="text-base font-bold tracking-[0.1px] text-[#23856D] hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2">
                {"$" + product.price}
              </span>
            </div>
          </div>
          <div className="flex space-x-2 items-center justify-center">
            <div className="rounded-full h-4 w-4 bg-[#23A6F0]"></div>
            <div className="rounded-full h-4 w-4 bg-[#23856D]"></div>
            <div className="rounded-full h-4 w-4 bg-[#E77C40]"></div>
            <div className="rounded-full h-4 w-4 bg-[#252B42]"></div>
          </div>
        </Link>
      ) : (
        <div>Product Not available</div>
      )}
    </li>
  );
};

export default ProdCard;
