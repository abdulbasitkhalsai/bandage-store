// 'use client';

// import { IProductProp } from '@/interfaces';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { X, Heart } from 'lucide-react';
// import { useWishlist } from '@/context/wishListContextProvider';
// import Link from 'next/link';

// interface QuickViewModalProps {
//   product: IProductProp;
//   onClose: () => void;
// }

// const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
//   // Randomly assign a rating from 3 to 5 stars
//   const randomRating = Math.floor(Math.random() * 3) + 3; // Random value between 3 and 5
  
//   const handleWishlistClick = () => {
//     if (wishlist.some((item) => item.productId === product.productId)) {
//       removeFromWishlist(product.productId);
//     } else {
//       addToWishlist(product);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg shadow-lg relative w-fit h-fit max-w-[1000px] max-h-[700px] p-6 flex flex-col lg:flex-row items-start justify-between gap-6 overflow-y-auto">
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-gray-600 hover:text-black"
//           onClick={onClose}
//         >
//           <X className="w-6 h-6" />
//         </button>

//         {/* Left Side (Image) */}
//         <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
//           <Image
//             className="w-full h-auto object-cover rounded-md"
//             src={product.imageUrl || '/images/ProdCard-1.png'}
//             alt={product.title}
//             width={500}
//             height={400}
//           />
//         </div>

//         {/* Right Side (Title, Description, Price, Wishlist, Rating, Add to Cart, View More) */}
//         <div className="flex flex-col lg:w-1/2 space-y-4">
//           {/* Title */}
//           <h3 className="text-lg font-bold">{product.title}</h3>

//           {/* Description with line-clamp */}
//           <p className="text-sm text-gray-700 line-clamp-4">{product.description}</p>

//           {/* Price */}
//           <span className="block text-lg font-bold text-green-600">
//             Price: ${product.price}
//           </span>

//           {/* Wishlist and Rating */}
//           <div className="flex items-center justify-center space-x-4">
//             <button onClick={handleWishlistClick} className="p-2 rounded-full hover:bg-gray-200">
//               <Heart
//                 className={`w-5 h-5 ${
//                   wishlist.some((item) => item.productId === product.productId)
//                     ? 'text-red-500 fill-red-500'  // Fills red when added to wishlist
//                     : 'text-gray-600 fill-none'    // Default empty heart
//                 }`}
//               />
//             </button>
//             {/* Rating Stars */}
//             <div className="flex text-yellow-400">
//               {[...Array(5)].map((_, i) => (
//                 <span key={i} className={`text-xl ${i < randomRating ? 'text-yellow-400' : 'text-gray-300'}`}>
//                   ★
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart and View More Buttons */}
//           <div className="flex justify-center space-x-4 mt-4">
//             <button className="bg-[#23856D] text-white py-2 px-4 rounded-md">Add to Cart</button>
//             <Link href={`/products/${product.slug.current}`} passHref>
//               <button className="border border-gray-300 py-2 px-4 rounded-md text-gray-600">View More</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuickViewModal;

'use client';

import { IProductProp } from '@/interfaces';
import Image from 'next/image';
import React from 'react';
import { X, Heart } from 'lucide-react';
import { useWishlist } from '@/context/wishlistContext';
import Link from 'next/link';

interface QuickViewModalProps {
  product: IProductProp;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
  const handleWishlistClick = () => {
    if (wishlist.some((item) => item.productId === product.productId)) {
      removeFromWishlist(product.productId);
    } else {
      addToWishlist(product);
    }
  };
//   const handleWishlistClick = () => {
//     if (wishlist.some((item) => item.productId === product.productId)) {
//       removeFromWishlist(product.productId);
//     } else {
//       addToWishlist(product);
//     }
//   };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg relative w-fit h-fit max-w-[1000px] max-h-[700px] p-6 flex flex-col lg:flex-row items-start justify-between gap-6 overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side (Image) */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <Image
            className="w-full h-auto object-cover rounded-md"
            src={product.imageUrl || '/images/ProdCard-1.png'}
            alt={product.title}
            width={500}
            height={400}
          />
        </div>

        {/* Right Side (Title, Description, Price, Wishlist, Rating, Add to Cart, View More) */}
        <div className="flex flex-col lg:w-1/2 space-y-4">
          {/* Title */}
          <h3 className="text-lg font-bold">{product.title}</h3>

          {/* Description with line-clamp */}
          <p className="text-sm text-gray-700 line-clamp-4">{product.description}</p>

          {/* Price */}
          <span className="block text-lg font-bold text-green-600">
            Price: ${product.price}
          </span>

          {/* Wishlist and Rating */}
          <div className="flex items-center justify-center space-x-4">
            <button onClick={handleWishlistClick} className="p-2 rounded-full hover:bg-gray-200">
              <Heart
                className={`w-5 h-5 ${
                  wishlist.some((item) => item.productId === product.productId)
                    ? 'text-red-500 fill-red-500'  // Fills red when added to wishlist
                    : 'text-gray-600 fill-none'    // Default empty heart
                }`}
              />
            </button>
          </div>

          {/* Add to Cart and View More Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-[#23856D] text-white py-2 px-4 rounded-md">Add to Cart</button>
            <Link href={`/products/${product.slug.current}`} passHref>
              <button className="border border-gray-300 py-2 px-4 rounded-md text-gray-600">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
