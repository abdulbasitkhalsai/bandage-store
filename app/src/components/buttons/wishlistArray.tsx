// // // 

// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { HeartIcon } from '@heroicons/react/24/outline';
// // import Link from 'next/link';
// // import { useSession } from 'next-auth/react';

// // export default function WishlistArray() {
// //   const { data: session, status } = useSession();
// //   const [wishlistCount, setWishlistCount] = useState<number>(0);
// //   const userId = session?.user?.id;
  
// // console.log("Session12:", session);
// // console.log("Session User12:", session?.user);
// // console.log("Session status12:", status);

// // //   console.log("Session User on Wishlist Array"+ session?.user);
// // //   console.log("Session status on wishlist Array"+status);
  
// //   useEffect(() => {
// //       if (!userId || status === 'loading') return;
      
// //       const fetchWishlist = async () => {
// //           try {
// //               const res = await fetch(`/api/sanity/getWishlistCount?userId=${userId}`);
// //               if (!res.ok) throw new Error("Failed to fetch wishlist count");
              
// //               const data = await res.json();
// //               setWishlistCount(data.count || 0); // Ensure count is always a number
// //             } catch (error) {
// //                 console.error('Error fetching wishlist count:', error);
// //                 setWishlistCount(0); // Fallback to 0 if error occurs
// //             }
// //         };
        
// //         fetchWishlist();
// //     }, [userId, status]);
    
// //     // Hide component while session is loading or user is not logged in
// //     if (status === 'loading' || !session) return null;
// //   return (
// //     <Link href="/wishlist">
// //       <div className="relative flex items-center">
// //         {/* Red outline heart with white fill */}
// //         <HeartIcon className="h-6 w-6 text-red-500 stroke-red-500 fill-white" />
        
// //         {/* Wishlist count in a circular badge */}
// //         {wishlistCount > -1 && (
// //           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// //             {wishlistCount}
// //           </span>
// //         )}
// //       </div>
// //     </Link>
// //   );
// // }
// 'use client';

// import { useEffect, useState } from 'react';
// import { HeartIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import { useSession } from 'next-auth/react';

// export default function WishlistArray() {
//   const { data: session, status } = useSession();
//   const [wishlistCount, setWishlistCount] = useState<number>(0);
//   const userId = session?.user?.id;

//   // ✅ Log session & status on component mount
//   useEffect(() => {
//     console.log("✅ WishlistArray Mounted");
//     console.log("Session at mount:", session);
//     console.log("Session User at mount:", session?.user);
//     console.log("Session status at mount:", status);
//   }, [session, status]);

//   useEffect(() => {
//     if (!userId || status === 'loading') return;

//     console.log("✅ Fetching Wishlist Count...");
//     console.log("User ID:", userId);

//     const fetchWishlist = async () => {
//       try {
//         const res = await fetch(`/api/sanity/wishlistCount?userId=${userId}`);
//         if (!res.ok) throw new Error("Failed to fetch wishlist count");

//         const data = await res.json();
//         console.log("Wishlist Data:", data);
//         setWishlistCount(data.count || 0);
//       } catch (error) {
//         console.error('Error fetching wishlist count:', error);
//         setWishlistCount(0);
//       }
//     };

//     fetchWishlist();
//   }, [userId, status]);

//   // ✅ Log when the component renders
//   console.log("✅ Component Rendering...");
//   console.log("Session in render:", session);
//   console.log("Session User in render:", session?.user);
//   console.log("Session status in render:", status);

//   // Hide component while session is loading or user is not logged in
//   if (status === 'loading' || !session) return null;

//   return (
//     <Link href="/wishlist">
//       <div className="relative flex items-center">
//         <HeartIcon className="h-6 w-6 text-red-500 stroke-red-500 fill-white" />
//         {wishlistCount > -1 && (
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//             {wishlistCount}
//           </span>
//         )}
//       </div>
//     </Link>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useWishlist } from "@/context/wishlistContext";

export default function WishlistArray() {
  const { data: session, status } = useSession();
  const { wishlist } = useWishlist();
  const userId = session?.user?.id;
  const [wishlistCount, setWishlistCount] = useState<number>(0);

  // Fetch wishlist count once on login
  useEffect(() => {
    if (!userId || status !== "authenticated") return;

    const fetchWishlist = async () => {
      try {
        const res = await fetch(`/api/sanity/wishlistCount?userId=${userId}`);
        if (!res.ok) throw new Error("Failed to fetch wishlist count");

        const data = await res.json();
        setWishlistCount(data.count || 0);
      } catch (error) {
        console.error("Error fetching wishlist count:", error);
        setWishlistCount(0);
      }
    };

    fetchWishlist();
  }, [userId, status]); // Run only when user logs in

  // Sync count with wishlist context changes
  useEffect(() => {
    setWishlistCount(wishlist.length);
  }, [wishlist]);

  if (status === "loading" || !session) return null;

  return (
    <Link href="/wishlist">
      <div className="relative flex items-center">
        <HeartIcon className="h-6 w-6 text-red-500 stroke-red-500 fill-white" />
        {wishlistCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </div>
    </Link>
  );
}
