// 'use client';

// import React, { useState, useEffect, useContext } from 'react';
// import { IProductProp } from '@/interfaces';
// import { WishlistContext } from './wishlistContext';
// import { useSession } from 'next-auth/react';
// import sanityClient from '@/sanity/sanity.client';

// const LOCAL_STORAGE_KEY = 'wishlist';

// export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
//   const { data: session } = useSession();
//   const userId = session?.user?.email || ''; // Using email as user ID for simplicity
//   const [wishlist, setWishlist] = useState<IProductProp[]>([]);

//   // Fetch wishlist from Sanity or LocalStorage on mount
//   useEffect(() => {
//     const loadWishlist = async () => {
//       if (userId) {
//         // Fetch from Sanity for logged-in users
//         const data = await sanityClient.fetch(
//           `*[_type == "user" && email == $userId]{wishlist}`,
//           { userId }
//         );
//         setWishlist(data?.[0]?.wishlist || []);
//       } else {
//         // Load from LocalStorage for guests
//         const storedWishlist = localStorage.getItem(LOCAL_STORAGE_KEY);
//         setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
//       }
//     };
//     loadWishlist();
//   }, [userId]);

//   // Sync wishlist to LocalStorage when updated (for guests)
//   useEffect(() => {
//     if (!userId) {
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishlist));
//     }
//   }, [wishlist, userId]);

//   // Add to wishlist
//   const addToWishlist = async (product: IProductProp) => {
//     const updatedWishlist = [...wishlist, product];
//     setWishlist(updatedWishlist);

//     if (userId) {
//       await sanityClient.patch(userId).set({ wishlist: updatedWishlist }).commit();
//     }
//   };

//   // Remove from wishlist
//   const removeFromWishlist = async (productId: string) => {
//     const updatedWishlist = wishlist.filter(item => item.productId !== productId);
//     setWishlist(updatedWishlist);

//     if (userId) {
//       await sanityClient.patch(userId).set({ wishlist: updatedWishlist }).commit();
//     }
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error('useWishlist must be used within a WishlistProvider');
//   }
//   return context;
// };

'use client';

import React, { useState, useEffect, useContext } from 'react';
import { useSession } from 'next-auth/react';
import { IProductProp } from '@/interfaces';
import { WishlistContext } from './wishlistContext';
import { getUserWishlist, addToUserWishlist, removeFromUserWishlist } from '@/sanity/sanity.query';

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const [wishlist, setWishlist] = useState<IProductProp[]>([]);

  // Load wishlist from Sanity or localStorage on mount
  useEffect(() => {
    if (userEmail) {
      getUserWishlist(userEmail).then((data) => setWishlist(data || []));
    } else {
      const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setWishlist(storedWishlist);
    }
  }, [userEmail]);

  // Update localStorage whenever the wishlist changes (only for guest users)
  useEffect(() => {
    if (!userEmail) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist, userEmail]);

  const addToWishlist = async (product: IProductProp) => {
    setWishlist((prev) => {
      const updatedWishlist = [...prev, product];
      if (!userEmail) localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });

    if (userEmail) {
      await addToUserWishlist(userEmail, product.productId);
    }
  };

  const removeFromWishlist = async (productId: string) => {
    setWishlist((prev) => {
      const updatedWishlist = prev.filter((item) => item.productId !== productId);
      if (!userEmail) localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });

    if (userEmail) {
      await removeFromUserWishlist(userEmail, productId);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
