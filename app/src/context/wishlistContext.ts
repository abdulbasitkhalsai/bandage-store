// 'use client';

// import { createContext, useContext } from 'react';
// import { IProductProp } from '@/interfaces';

// export interface WishlistContextType {
//   wishlist: IProductProp[];
//   addToWishlist: (product: IProductProp) => void;
//   removeFromWishlist: (productId: string) => void;
// }

// export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error('useWishlist must be used within a WishlistProvider');
//   }
//   return context;
// };

'use client';

import { createContext, useContext } from 'react';
import { IProductProp } from '@/interfaces';

export interface WishlistContextType {
  wishlist: IProductProp[];
  addToWishlist: (product: IProductProp) => void;
  removeFromWishlist: (productId: string) => void;
  updateWishlist: () => void; // ✅ Implemented properly
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
