// 'use client';

// import { IProductProp } from '@/interfaces';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { Heart, Eye } from 'lucide-react';
// import { useCart } from '@/context/cartContextProvider';
// import { useWishlist } from '@/context/wishListContextProvider';
// import QuickViewModal from './quickviewModal';


// interface ProdCardProps {
//   product: IProductProp;
// }

// const ProdCard = ({ product }: ProdCardProps) => {
//   const { addToCart } = useCart();
//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
//   const [isQuickViewOpen, setQuickViewOpen] = useState(false);

//   const toggleQuickView = () => {
//     setQuickViewOpen(!isQuickViewOpen);
//   };

//   const handleWishlistClick = () => {
//     if (wishlist.some((item) => item.productId === product.productId)) {
//       removeFromWishlist(product.productId);
//     } else {
//       addToWishlist(product);
//     }
//   };

//   return (
//     <>
//       <li className="relative w-fit lg:w-[239px] h-auto group hover:scale-105 transition-transform ease-in-out duration-300">
//         <div className="relative">
//           <Link href={`/products/${product.slug.current}`} className="block">
//             <Image
//               className="w-[348px] h-[300px]"
//               src={product.imageUrl || '/images/ProdCard-1.png'}
//               alt={product.title || 'Image'}
//               width={348}
//               height={427}
//             />
//           </Link>

//           {/* Wishlist & Quick View Buttons */}
//           <div className="absolute top-[5%] right-2 flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <button
//               onClick={handleWishlistClick}
//               className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
//             >
//               <Heart
//                 className={`w-5 h-5 ${
//                   wishlist.some((item) => item.productId === product.productId)
//                     ? 'text-red-500 fill-red-500'  // Fills red when added to wishlist
//                     : 'text-gray-600 fill-none'    // Default empty heart
//                 }`}
//               />
//             </button>

//             <button
//               onClick={toggleQuickView}
//               className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
//             >
//               <Eye className="w-5 h-5 text-gray-600" />
//             </button>
//           </div>

//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               e.stopPropagation();
//               addToCart({
//                 productId: product.productId,
//                 title: product.title,
//                 price: product.price,
//                 imageUrl: product.imageUrl,
//                 quantity: 1,
//               });
//             }}
//             className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#23856D] w-full text-white text-sm font-bold px-4 py-2 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </li>

//       {/* Quick View Modal - Passing necessary props */}
//       {isQuickViewOpen && (
//         <QuickViewModal product={product} onClose={toggleQuickView} />
//       )}
//     </>
//   );
// };
'use client';

import { IProductProp } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Heart, Eye } from 'lucide-react';
import { useCart } from '@/context/cartContextProvider';
import { useWishlist } from '@/context/wishlistContext';
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
  
  // const handleWishlistClick = () => {
  //   if (wishlist.some((item) => item.productId === product.productId)) {
  //     removeFromWishlist(product.productId);
  //   } else {
  //     addToWishlist(product);
  //   }
  // };

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
                    ? 'text-red-500 fill-red-500'
                    : 'text-gray-600 fill-none'
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

