"use client";
import { useEffect, useState } from "react";
import { ShoppingCartIcon } from "lucide-react";
import sanityClient from "@/sanity/sanity.client";
import { useSidebar } from "@/context/sidebarContext";

export default function CartHeader({ userId }: { userId: string }) {
  const { openSidebar } = useSidebar();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      console.log("Fetching cart count...");
      const query = `*[_type == "user" && _id == $userId][0].cart`;
      const cart = await sanityClient.fetch(query, { userId });
      console.log("Cart count fetched:", cart?.length);
      setCount(cart?.length || 0);
    };
    fetchCartCount();
  }, [userId]);

  return (
    <button className="relative p-2" onClick={() => { 
      console.log("Cart button clicked");
      openSidebar("cart");
    }}>
      <ShoppingCartIcon className="w-6 h-6 text-blue-500" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}
