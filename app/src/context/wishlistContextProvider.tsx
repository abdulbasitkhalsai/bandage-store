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

// 'use client';

// import React, { useState, useEffect, useContext } from 'react';
// import { useSession } from 'next-auth/react';
// import { IProductProp } from '@/interfaces';
// import { WishlistContext } from './wishlistContext';
// import { getUserWishlist, addToUserWishlist, removeFromUserWishlist } from '@/sanity/sanity.query';

// export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
//   const { data: session } = useSession();
//   const userEmail = session?.user?.email;
//   const [wishlist, setWishlist] = useState<IProductProp[]>([]);

//   // Load wishlist from Sanity or localStorage on mount
//   useEffect(() => {
//     if (userEmail) {
//       getUserWishlist(userEmail).then((data) => setWishlist(data || []));
//     } else {
//       const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
//       setWishlist(storedWishlist);
//     }
//   }, [userEmail]);

//   // Update localStorage whenever the wishlist changes (only for guest users)
//   useEffect(() => {
//     if (!userEmail) {
//       localStorage.setItem('wishlist', JSON.stringify(wishlist));
//     }
//   }, [wishlist, userEmail]);

//   const addToWishlist = async (product: IProductProp) => {
//     setWishlist((prev) => {
//       const updatedWishlist = [...prev, product];
//       if (!userEmail) localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//       return updatedWishlist;
//     });

//     if (userEmail) {
//       await addToUserWishlist(userEmail, product.productId);
//     }
//   };

//   const removeFromWishlist = async (productId: string) => {
//     setWishlist((prev) => {
//       const updatedWishlist = prev.filter((item) => item.productId !== productId);
//       if (!userEmail) localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//       return updatedWishlist;
//     });

//     if (userEmail) {
//       await removeFromUserWishlist(userEmail, productId);
//     }
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
// import { getUserWishlist, addToUserWishlist, removeFromUserWishlist } from '@/sanity/sanity.query';

// export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
//   const { data: session } = useSession();
//   const userEmail = session?.user?.email;
//   const [wishlist, setWishlist] = useState<IProductProp[]>([]);

//   // Load wishlist from Sanity for logged-in users or localStorage for guests
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       if (userEmail) {
//         const userWishlist = await getUserWishlist(userEmail);
//         setWishlist(userWishlist || []);
//       } else {
//         const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
//         setWishlist(storedWishlist);
//       }
//     };
//     fetchWishlist();
//   }, [userEmail]);

//   // Sync localStorage for guests
//   useEffect(() => {
//     if (!userEmail) {
//       localStorage.setItem('wishlist', JSON.stringify(wishlist));
//     }
//   }, [wishlist, userEmail]);

//   // Add product to wishlist
//   const addToWishlist = async (product: IProductProp) => {
//     if (!wishlist.some((item) => item.productId === product.productId)) {
//       const updatedWishlist = [...wishlist, product];
//       setWishlist(updatedWishlist);

//       if (userEmail) {
//         await addToUserWishlist(userEmail, product.productId);
//       } else {
//         localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//       }
//     }
//   };

//   // Remove product from wishlist
//   const removeFromWishlist = async (productId: string) => {
//     const updatedWishlist = wishlist.filter((item) => item.productId !== productId);
//     setWishlist(updatedWishlist);

//     if (userEmail) {
//       await removeFromUserWishlist(userEmail, productId);
//     } else {
//       localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//     }
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

// export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
//   const { data: session } = useSession();
//   const userEmail = session?.user?.email;
//   const [wishlist, setWishlist] = useState<IProductProp[]>([]);

//   // Load wishlist from Sanity or localStorage
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       if (userEmail) {
//         const productIds = await getUserWishlist(userEmail); // Fetch stored product IDs
//         if (productIds.length > 0) {
//           const products = await fetchProductsByIds(productIds); // Fetch product details
//           setWishlist(products);
//         }
//       } else {
//         const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
//         setWishlist(storedWishlist);
//       }
//     };
//     fetchWishlist();
//   }, [userEmail]);

//   // Sync localStorage for guests
//   useEffect(() => {
//     if (!userEmail) {
//       localStorage.setItem('wishlist', JSON.stringify(wishlist));
//     }
//   }, [wishlist, userEmail]);

//   // Add product to wishlist
//   const addToWishlist = async (product: IProductProp) => {
//     if (!wishlist.some((item) => item.productId === product.productId)) {
//       const updatedWishlist = [...wishlist, product];
//       setWishlist(updatedWishlist);

//       if (userEmail) {
//         await addToUserWishlist(userEmail, product.productId); // Store only product ID in Sanity
//         const productIds = await getUserWishlist(userEmail);
//         const updatedProducts = await fetchProductsByIds(productIds);
//         setWishlist(updatedProducts);
//       } else {
//         localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//       }
//     }
//   };

//   // Remove product from wishlist
//   const removeFromWishlist = async (productId: string) => {
//     const updatedWishlist = wishlist.filter((item) => item.productId !== productId);
//     setWishlist(updatedWishlist);

//     if (userEmail) {
//       await removeFromUserWishlist(userEmail, productId);
//       const productIds = await getUserWishlist(userEmail);
//       const updatedProducts = await fetchProductsByIds(productIds);
//       setWishlist(updatedProducts);
//     } else {
//       localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//     }
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
//   const userId = session?.user?.id; // Use user._id instead of email
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

//   // Add product to wishlist
//   const addToWishlist = async (product: IProductProp) => {
//     if (!userId) {
//       setOpen(true);
//       setModalType('login'); // Open login modal if user is not logged in
//       return;
//     }

//     if (!wishlist.some((item) => item.productId === product.productId)) {
//       const updatedWishlist = [...wishlist, product];
//       setWishlist(updatedWishlist);

//       await addToUserWishlist(userId, product.productId);
//       const productIds = await getUserWishlist(userId);
//       const updatedProducts = await fetchProductsByIds(productIds);
//       setWishlist(updatedProducts);
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
