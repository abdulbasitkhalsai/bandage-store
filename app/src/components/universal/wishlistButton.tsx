// "use client";

// import { useState} from "react";
// import { useSession } from "next-auth/react";
// import { HeartIcon } from "@heroicons/react/24/solid";
// import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";

// interface WishlistButtonProps {
//   productId: string;
// }

// export default function WishlistButton({ productId }: WishlistButtonProps) {
//   const { data: session } = useSession();
//   console.log("Session " + session?.user);
//   const userId = "USER0001"
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     console.log("Session Data:", session); // Debug session data
//   }, [session]);

//   const handleWishlist = async () => {
//     if (!userId) {
//       console.error("User not logged in");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("/api/sanity/addToWishlist", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ userId, productId }),
//       });

//       const data = await res.json();
//       console.log("Wishlist API Response:", data);

//       if (res.ok) {
//         setIsWishlisted(true);
//       } else {
//         console.error("Failed to add to wishlist:", data);
//       }
//     } catch (error) {
//       console.error("Error adding to wishlist:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button onClick={handleWishlist} disabled={loading} className="p-2">
//       {isWishlisted ? (
//         <HeartIcon className="h-6 w-6 text-red-500" />
//       ) : (
//         <OutlineHeartIcon className="h-6 w-6 text-gray-500" />
//       )}
//     </button>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";

interface WishlistButtonProps {
  productId: string;
}

export default function WishlistButton({ productId }: WishlistButtonProps) {
  const { data: session } = useSession();
  const userId = session?.user?.id; // Get the user ID from session
  console.log("session :" + session)
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWishlistStatus = async () => {
      if (!userId) return;
      try {
        const res = await fetch(`/api/sanity/checkWishlist?userId=${encodeURIComponent(userId)}&productId=${encodeURIComponent(productId)}`);
        const data = await res.json();
        if (res.ok) {
          setIsWishlisted(data.isWishlisted);
        } else {
          console.error("Error fetching wishlist status:", data);
        }
      } catch (error) {
        console.error("Error checking wishlist status:", error);
      }
    };

    fetchWishlistStatus();
  }, [userId, productId]);

  const handleWishlist = async () => {
    if (!userId) {
      console.error("User not logged in");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/sanity/toggleWishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsWishlisted(data.isWishlisted);
      } else {
        console.error("Failed to update wishlist:", data);
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleWishlist} disabled={loading} className="p-2">
      {isWishlisted ? (
        <HeartIcon className="h-6 w-6 text-red-500" />
      ) : (
        <OutlineHeartIcon className="h-6 w-6 text-gray-500" />
      )}
    </button>
  );
}
