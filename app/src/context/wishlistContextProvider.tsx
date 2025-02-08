'use client';

import React, { useState, useEffect } from 'react';
import { WishlistContext } from './wishlistContext';
import { useSession } from 'next-auth/react';
import { IProductProp } from '@/interfaces';
import { getUserWishlist, addToUserWishlist, removeFromUserWishlist, fetchProductsByIds } from '@/sanity/sanity.query';
import { useLoginContext } from '@/context/loginContextProvider';

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id; // Use user._id instead of email
  console.log("Session User:", session);
  console.log("Session User:", session?.user);
  const [wishlist, setWishlist] = useState<IProductProp[]>([]);
  const { setOpen, setModalType } = useLoginContext();

  // Load wishlist from Sanity or localStorage
  useEffect(() => {
    const fetchWishlist = async () => {
      if (userId) {
        const productIds = await getUserWishlist(userId);
        if (productIds.length > 0) {
          const products = await fetchProductsByIds(productIds);
          setWishlist(products);
        }
      } else {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setWishlist(storedWishlist);
      }
    };
    fetchWishlist();
  }, [userId]);

  // Sync localStorage for guests
  useEffect(() => {
    if (!userId) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist, userId]);

  const addToWishlist = async (product: IProductProp) => {
    if (!userId) {
      setOpen(true);
      setModalType('login'); // Open login modal if user is not logged in
      return;
    }
  
    if (!wishlist.some((item) => item.productId === product.productId)) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
  
      try {
        console.log("Attempting to add product to Sanity wishlist...");
  
        // Make sure `addToUserWishlist` exists and is correctly imported from sanity.query.ts
        const response = await addToUserWishlist(userId, product.productId);
        console.log("Response from addToUserWishlist:", response);
  
        const productIds = await getUserWishlist(userId);
        console.log("Fetched user wishlist product IDs:", productIds);
  
        const updatedProducts = await fetchProductsByIds(productIds);
        console.log("Updated products fetched from Sanity:", updatedProducts);
  
        setWishlist(updatedProducts); // Update the wishlist with the latest products
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error adding to wishlist:", error.message);
          console.log("Error details:", error.stack);
        } else {
          console.log("An unknown error occurred:", error);
        }
      }
    }
  };
  

  // Remove product from wishlist
  const removeFromWishlist = async (productId: string) => {
    if (!userId) {
      setOpen(true);
      setModalType('login');
      return;
    }

    const updatedWishlist = wishlist.filter((item) => item.productId !== productId);
    setWishlist(updatedWishlist);

    await removeFromUserWishlist(userId, productId);
    const productIds = await getUserWishlist(userId);
    const updatedProducts = await fetchProductsByIds(productIds);
    setWishlist(updatedProducts);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
