// context/wishlistContextProvider.tsx
'use client';

import React, { useState, useContext } from 'react';
import { IProductProp } from '@/interfaces';
import { WishlistContext } from './wishListContext';

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<IProductProp[]>([]);

  const addToWishlist = (product: IProductProp) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.productId === product.productId)) {
        return prev; // Prevent duplicate entries
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item.productId !== productId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom Hook to Access Wishlist Context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
