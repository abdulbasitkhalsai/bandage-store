// 'use client'

// import { IProductProp } from '@/interfaces';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { Heart, Eye } from 'lucide-react'; // Import icons
// import { useCart } from '@/context/cartContextProvider';

// interface ProdCardProps {
//   product: IProductProp; // Properly type the product prop
// }

// const ProdCard = ({ product }: ProdCardProps) => {
//   const { addToCart} = useCart();
//   return (
//     <li className="relative w-fit lg:w-[239px] h-auto group hover:scale-105 transition-transform ease-in-out duration-300 underline-offset-8">
//       {product.slug ? (
//         <Link href={`/products/${product.slug.current}`} className="block relative">
//           {/* Product Image */}
//           <div className="relative">
//             <Image
//               className="w-[348px] h-[300px]"
//               src={product.imageUrl || "images/ProdCard-1.png"}
//               alt={product.title || "Image"}
//               width={348}
//               height={427}
//             />

//             {/* Add to Cart Button */}
//             <button onClick={(e) => {e.preventDefault(); addToCart({productId:product.productId, title: product.title, price:product.price, imageUrl: product.imageUrl, quantity:1})}} className="absolute bottom-[-3%] left-1/2 -translate-x-1/2 bg-[#23856D] w-full text-white text-sm font-bold px-4 py-2 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               Add to Cart
//             </button>

//             {/* Wishlist and Quick View Icons */}
//             <div className="absolute top-[20%] right-2 flex flex-col items-center space-y-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//                 <Heart className="w-5 h-5 text-gray-600" />
//               </button>
//               <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//                 <Eye className="w-5 h-5 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="px-[5px] pt-[10px] pb-[15px] gap-[5px] flex flex-col text-center">
//             <h5 className="text-base font-bold tracking-[0.1px] text-[#252B42] hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2">
//               {product.title}
//             </h5>
//             <p className="text-sm leading-7 text-[#737373] tracking-[0.2px] line-clamp-2 hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2 ">
//               {product.description}
//             </p>
//             <div className="">
//               <span className="text-base font-bold tracking-[0.1px] text-[#23856D] hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2">
//                 {"$" + product.price}
//               </span>
//             </div>
//           </div>

//           {/* Color Indicators */}
//           <div className="flex space-x-2 items-center justify-center">
//             <div className="rounded-full h-4 w-4 bg-[#23A6F0]"></div>
//             <div className="rounded-full h-4 w-4 bg-[#23856D]"></div>
//             <div className="rounded-full h-4 w-4 bg-[#E77C40]"></div>
//             <div className="rounded-full h-4 w-4 bg-[#252B42]"></div>
//           </div>
//         </Link>
//       ) : (
//         <div>Product Not available</div>
//       )}
//     </li>
//   );
// };

// export default ProdCard;
// 'use client';

// import { IProductProp } from '@/interfaces';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { Heart, Eye } from 'lucide-react';
// import { useCart } from '@/context/cartContextProvider';

// interface ProdCardProps {
//   product: IProductProp;
// }

// const ProdCard = ({ product }: ProdCardProps) => {
//   const { addToCart } = useCart();

//   // Function to handle adding product to wishlist
//   const addToWishlist = (product: IProductProp) => {
//     console.log('Added to Wishlist:', product);
//   };

//   // Function to handle quick view
//   const openQuickView = (product: IProductProp) => {
//     console.log('Quick View:', product);
//   };

//   return (
//     <li className="relative w-fit lg:w-[239px] h-auto group hover:scale-105 transition-transform ease-in-out duration-300">
//       <div className="relative">
//         <Link href={`/products/${product.slug.current}`} className="block">
//           {/* Product Image */}
//           <Image
//             className="w-[348px] h-[300px]"
//             src={product.imageUrl || '/images/ProdCard-1.png'}
//             alt={product.title || 'Image'}
//             width={348}
//             height={427}
//           />
//         </Link>

//         {/* Wishlist & Quick View Buttons - Placed Outside Link */}
//         <div className="absolute top-[5%] right-2 flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <button
//             onClick={() => addToWishlist(product)}
//             className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
//           >
//             <Heart className="w-5 h-5 text-gray-600" />
//           </button>

//           <button
//             onClick={() => openQuickView(product)}
//             className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
//           >
//             <Eye className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>

//         {/* Add to Cart Button - Moved Inside Image Container */}
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             addToCart({
//               productId: product.productId,
//               title: product.title,
//               price: product.price,
//               imageUrl: product.imageUrl,
//               quantity: 1,
//             });
//           }}
//           className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#23856D] w-full text-white text-sm font-bold px-4 py-2 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>

//       {/* Product Info */}
//       <div className="px-[5px] pt-[10px] pb-[15px] flex flex-col text-center">
//         <Link href={`/products/${product.slug.current}`}>
//           <h5 className="text-base font-bold tracking-[0.1px] text-[#252B42] hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2">
//             {product.title}
//           </h5>
//         </Link>
//         <p className="text-sm leading-7 text-[#737373] tracking-[0.2px] line-clamp-2 hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2">
//           {product.description}
//         </p>
//         <span className="text-base font-bold tracking-[0.1px] text-[#23856D] hover:underline hover:decoration-amber-400 hover:text-black hover:decoration-2">
//           {'$' + product.price}
//         </span>
//       </div>
//     </li>
//   );
// };

// export default ProdCard;
'use client';

import { IProductProp } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Heart, Eye } from 'lucide-react';
import { useCart } from '@/context/cartContextProvider';
import { useWishlist } from '@/context/wishListContextProvider';
import QuickViewModal from './quickviewModal';


interface ProdCardProps {
  product: IProductProp;
}

const ProdCard = ({ product }: ProdCardProps) => {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);

  const toggleQuickView = () => {
    setQuickViewOpen(!isQuickViewOpen);
  };

  const handleWishlistClick = () => {
    if (wishlist.some((item) => item.productId === product.productId)) {
      removeFromWishlist(product.productId);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <>
      <li className="relative w-fit lg:w-[239px] h-auto group hover:scale-105 transition-transform ease-in-out duration-300">
        <div className="relative">
          <Link href={`/products/${product.slug.current}`} className="block">
            <Image
              className="w-[348px] h-[300px]"
              src={product.imageUrl || '/images/ProdCard-1.png'}
              alt={product.title || 'Image'}
              width={348}
              height={427}
            />
          </Link>

          {/* Wishlist & Quick View Buttons */}
          <div className="absolute top-[5%] right-2 flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleWishlistClick}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <Heart
                className={`w-5 h-5 ${
                  wishlist.some((item) => item.productId === product.productId)
                    ? 'text-red-500 fill-red-500'  // Fills red when added to wishlist
                    : 'text-gray-600 fill-none'    // Default empty heart
                }`}
              />
            </button>

            <button
              onClick={toggleQuickView}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <Eye className="w-5 h-5 text-gray-600" />
            </button>
          </div>

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
        </div>
      </li>

      {/* Quick View Modal - Passing necessary props */}
      {isQuickViewOpen && (
        <QuickViewModal product={product} onClose={toggleQuickView} />
      )}
    </>
  );
};

export default ProdCard;
