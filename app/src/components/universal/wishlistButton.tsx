"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import SanityClient from "@/sanity/sanity.client";

interface WishlistButtonProps {
  productId: string;
}

export default function WishlistButton({ productId }: WishlistButtonProps) {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [isWishlisted, setIsWishlisted] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch Wishlist Status on Load
  useEffect(() => {
    if (!userId) return;

    const fetchWishlistStatus = async () => {
      try {
        const res = await fetch(`/api/sanity/checkWishlist?userId=${userId}&productId=${productId}`);
        const data = await res.json();
        if (res.ok) setIsWishlisted(data.isWishlisted);
      } catch (error) {
        console.error("Error checking wishlist:", error);
        setIsWishlisted(false);
      }
    };

    fetchWishlistStatus();
  }, [userId, productId]);

  // ✅ Real-time Sync with Sanity
  useEffect(() => {
    if (!userId) return;

    const subscription = SanityClient.listen(`*[_type == "user" && _id == $userId][0].wishlist`, { userId })
      .subscribe((update) => {
        const wishlist = update.result?.wishlist || [];
        setIsWishlisted(wishlist.includes(productId));
      });

    return () => subscription.unsubscribe();
  }, [userId, productId]);

  const handleWishlist = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents Link navigation
    e.stopPropagation(); // Stops event bubbling
  
    if (!userId || loading) return;
  
    setLoading(true);
    setIsWishlisted((prev) => !prev); // Optimistic UI update
  
    try {
      const res = await fetch("/api/sanity/toggleWishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId }),
      });
  
      const data = await res.json();
      if (!res.ok) {
        console.error("Failed to update wishlist:", data);
        setIsWishlisted((prev) => !prev); // Revert UI if failed
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
      setIsWishlisted((prev) => !prev); // Revert UI if error occurs
    } finally {
      setLoading(false);
    }
  };
  return (
    <button onClick={handleWishlist} disabled={loading} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
      {isWishlisted === null ? (
        <OutlineHeartIcon className="h-5 w-5 text-gray-600 animate-pulse" />
      ) : isWishlisted ? (
        <HeartIcon className="h-5 w-5 text-red-500 transition-all duration-200 ease-in-out" />
      ) : (
        <OutlineHeartIcon className="h-5 w-5 text-gray-600 transition-all duration-200 ease-in-out" />
      )}
    </button>
  );
}
