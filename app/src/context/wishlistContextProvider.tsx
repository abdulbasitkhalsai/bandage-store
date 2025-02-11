// 'use client';

// import React, { useState, useEffect } from 'react';
// import { WishlistContext } from './wishlistContext';
// import { useSession } from 'next-auth/react';
// import { IProductProp } from '@/interfaces';
// import { getUserWishlist, addToUserWishlist, removeFromUserWishlist, fetchProductsByIds } from '@/sanity/sanity.query';
// import { useLoginContext } from '@/context/loginContextProvider';

// export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
//   const { data: session } = useSession();
//   const userId = session?.user?.id; // Use user._id instead of email
//   console.log("Session User:", session);
//   console.log("Session User:", session?.user);
//   const [wishlist, setWishlist] = useState<IProductProp[]>([]);
//   const { setOpen, setModalType } = useLoginContext();

//   // Load wishlist from Sanity or localStorage
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       if (userId) {
//         const productIds = await getUserWishlist(userId);
//         if (productIds.length > 0) {
//           const products = await fetchProductsByIds(productIds);
//           setWishlist(products);
//         }
//       } else {
//         const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
//         setWishlist(storedWishlist);
//       }
//     };
//     fetchWishlist();
//   }, [userId]);

//   // Sync localStorage for guests
//   useEffect(() => {
//     if (!userId) {
//       localStorage.setItem('wishlist', JSON.stringify(wishlist));
//     }
//   }, [wishlist, userId]);

//   const addToWishlist = async (product: IProductProp) => {
//     if (!userId) {
//       setOpen(true);
//       setModalType('login'); // Open login modal if user is not logged in
//       return;
//     }
  
//     if (!wishlist.some((item) => item.productId === product.productId)) {
//       const updatedWishlist = [...wishlist, product];
//       setWishlist(updatedWishlist);
  
//       try {
//         console.log("Attempting to add product to Sanity wishlist...");
  
//         // Make sure `addToUserWishlist` exists and is correctly imported from sanity.query.ts
//         const response = await addToUserWishlist(userId, product.productId);
//         console.log("Response from addToUserWishlist:", response);
  
//         const productIds = await getUserWishlist(userId);
//         console.log("Fetched user wishlist product IDs:", productIds);
  
//         const updatedProducts = await fetchProductsByIds(productIds);
//         console.log("Updated products fetched from Sanity:", updatedProducts);
  
//         setWishlist(updatedProducts); // Update the wishlist with the latest products
//       } catch (error: unknown) {
//         if (error instanceof Error) {
//           console.error("Error adding to wishlist:", error.message);
//           console.log("Error details:", error.stack);
//         } else {
//           console.log("An unknown error occurred:", error);
//         }
//       }
//     }
//   };
  

//   // Remove product from wishlist
//   const removeFromWishlist = async (productId: string) => {
//     if (!userId) {
//       setOpen(true);
//       setModalType('login');
//       return;
//     }

//     const updatedWishlist = wishlist.filter((item) => item.productId !== productId);
//     setWishlist(updatedWishlist);

//     await removeFromUserWishlist(userId, productId);
//     const productIds = await getUserWishlist(userId);
//     const updatedProducts = await fetchProductsByIds(productIds);
//     setWishlist(updatedProducts);
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { WishlistContext } from './wishlistContext';
// import { useSession } from 'next-auth/react';
// import { IProductProp } from '@/interfaces';
// import { getUserWishlist, addToUserWishlist, removeFromUserWishlist, fetchProductsByIds } from '@/sanity/sanity.query';
// import { useLoginContext } from '@/context/loginContextProvider';

// export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
//   const { data: session } = useSession();
//   const userId = session?.user?.id;
//   const [wishlist, setWishlist] = useState<IProductProp[]>([]);
//   const { setOpen, setModalType } = useLoginContext();

//   useEffect(() => {
//     const fetchWishlist = async () => {
//       if (userId) {
//         const productIds = await getUserWishlist(userId);
//         if (productIds.length > 0) {
//           const products = await fetchProductsByIds(productIds);
//           setWishlist(products);
//         } else {
//           setWishlist([]); // Ensures state consistency
//         }
//       } else if (typeof window !== 'undefined') {
//         const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
//         setWishlist(storedWishlist);
//       }
//     };
//     fetchWishlist();
//   }, [userId]);

//   useEffect(() => {
//     if (typeof window !== 'undefined' && !userId) {
//       localStorage.setItem('wishlist', JSON.stringify(wishlist));
//     }
//   }, [wishlist, userId]);

//   const addToWishlist = async (product: IProductProp) => {
//     if (!userId) {
//       setOpen(true);
//       setModalType('login');
//       return;
//     }

//     if (!wishlist.some((item) => item._id === product._id)) {
//       setWishlist([...wishlist, product]);

//       try {
//         await addToUserWishlist(userId, product._id);
//         updateWishlist(); // ✅ Ensuring sync
//       } catch (error) {
//         console.error("Error adding to wishlist:", error);
//       }
//     }
//   };

//   const removeFromWishlist = async (productId: string) => {
//     if (!userId) {
//       setOpen(true);
//       setModalType('login');
//       return;
//     }

//     setWishlist(wishlist.filter((item) => item._id !== productId));
//     await removeFromUserWishlist(userId, productId);
//     updateWishlist(); // ✅ Ensuring sync
//   };

//   const updateWishlist = async () => {
//     if (!userId) return;
//     const productIds = await getUserWishlist(userId);
//     const updatedProducts = await fetchProductsByIds(productIds);
//     setWishlist(updatedProducts);
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, updateWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// "use client";

// import React, { useState, useEffect, createContext, useContext } from "react";
// import { useSession } from "next-auth/react";
// import { IProductProp } from "@/interfaces";
// import { getUserWishlist, addToUserWishlist, removeFromUserWishlist, fetchProductsByIds } from "@/sanity/sanity.query";

// interface WishlistContextType {
//   wishlist: IProductProp[];
//   addToWishlist: (product: IProductProp) => void;
//   removeFromWishlist: (productId: string) => void;
//   updateWishlist: () => void;
// }

// export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) throw new Error("useWishlist must be used within a WishlistProvider");
//   return context;
// };

// export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
//   const { data: session } = useSession();
//   const userId = session?.user?.id;
//   const [wishlist, setWishlist] = useState<IProductProp[]>([]);

//   // Fetch wishlist from Sanity
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       if (!userId) {
//         setWishlist([]); // Reset wishlist if user logs out
//         return;
//       }

//       try {
//         const productIds = await getUserWishlist(userId);
//         if (productIds.length > 0) {
//           const products = await fetchProductsByIds(productIds);
//           setWishlist(products);
//         } else {
//           setWishlist([]);
//         }
//       } catch (error) {
//         console.error("Error fetching wishlist:", error);
//       }
//     };

//     fetchWishlist();
//   }, [userId]);

//   // Add product to wishlist
//   const addToWishlist = async (product: IProductProp) => {
//     if (!userId) return;
//     setWishlist((prev) => [...prev, product]); // Optimistic update
//     await addToUserWishlist(userId, product._id);
//   };

//   // Remove product from wishlist
//   const removeFromWishlist = async (productId: string) => {
//     if (!userId) return;
//     setWishlist((prev) => prev.filter((item) => item._id !== productId)); // Optimistic update
//     await removeFromUserWishlist(userId, productId);
//   };

//   // Force refresh wishlist
//   const updateWishlist = async () => {
//     if (!userId) return;
//     const productIds = await getUserWishlist(userId);
//     const updatedProducts = await fetchProductsByIds(productIds);
//     setWishlist(updatedProducts);
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, updateWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { IProductProp } from "@/interfaces";
import { getUserWishlist, addToUserWishlist, removeFromUserWishlist, fetchProductsByIds } from "@/sanity/sanity.query";


export interface WishlistContextType {
  wishlist: IProductProp[];
  addToWishlist: (product: IProductProp) => void;
  removeFromWishlist: (productId: string) => void;
  updateWishlist: () => void;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id?? "";
  const [wishlist, setWishlist] = useState<IProductProp[]>([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!userId) return; // Ensure we don't fetch data with an invalid userId
      const productIds = await getUserWishlist(userId);
      const products = productIds.length > 0 ? await fetchProductsByIds(productIds) : [];
      setWishlist(products);
    };
  
    fetchWishlist();
  }, [userId]);

const addToWishlist = async (product: IProductProp) => {
  if (!userId) return;
  if (!wishlist.some((item) => item._id === product._id)) {
    setWishlist([...wishlist, product]);
    await addToUserWishlist(userId, product._id);
  }
};

const removeFromWishlist = async (productId: string) => {
  if (!userId) return;
  setWishlist(wishlist.filter((item) => item._id !== productId));
  await removeFromUserWishlist(userId, productId);
};

const updateWishlist = async () => {
    const productIds = await getUserWishlist(userId);
    setWishlist(await fetchProductsByIds(productIds));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, updateWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
