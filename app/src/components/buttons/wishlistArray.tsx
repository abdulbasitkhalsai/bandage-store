'use client';

import { useEffect, useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function WishlistArray() {
  const { data: session, status } = useSession();
  const [wishlistCount, setWishlistCount] = useState(0);
  const userId = session?.user?.id;
  
    useEffect(() => {
      if (!userId) return;
  // Prevent rendering until session is loaded
  
  
  const fetchWishlist = async () => {
      try {
          const res = await fetch(`/api/sanity/getWishlistCount?userId=${userId}`);
          const data = await res.json();
          if (res.ok) setWishlistCount(data.count);
        } catch (error) {
            console.error('Error fetching wishlist count:', error);
        }
    };

    fetchWishlist();
}, [userId]);

   if (status === 'loading') return null;
   if (!session) {
    return (
      <Link href="/wishlist">
        <div className="relative flex items-center">
          <HeartIcon className="h-6 w-6 text-gray-400" />
          <span className="text-xs text-gray-500">Login to see wishlist</span>
        </div>
      </Link>
    );
  }

return (
    <Link href="/wishlist">
      <div className="relative flex items-center">
        <HeartIcon className="h-6 w-6 text-red-500" />
        {wishlistCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            {wishlistCount}
          </span>
        )}
      </div>
    </Link>
  );
}
