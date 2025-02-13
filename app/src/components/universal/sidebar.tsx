"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState, useRef } from "react";
import { useSidebar } from "@/context/sidebarContext";
import Link from "next/link";
import Image from "next/image";

type APIResponseItem = {
  _id: string;
  productid: string;
  title: string;
  price: number;
  imageUrl?: string;
  slug?: string;
  product?: { _id: string; title: string; price: number; imageUrl?: string; slug?: { current: string } };
  quantity?: number;
};


interface SidebarItem {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
  quantity?: number; // Add quantity for cart items
}

export default function Sidebar({ userId }: { userId: string }) {
  const { isOpen, activeType, closeSidebar } = useSidebar();
  const [items, setItems] = useState<SidebarItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const updateCartQuantity = async (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
  
    const updatedItems = items.map((item) =>
      item._id === productId ? { ...item, quantity: newQuantity } : item
    );
  
    try {
      const response = await fetch("/api/updateCart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId, quantity: newQuantity }),
      });
  
      if (!response.ok) throw new Error("Failed to update cart");
  
      setItems(updatedItems); // Update state only if API succeeds
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };
  


  useEffect(() => {
    if (!activeType || !userId) return;
  
    setLoading(true);
    fetch(`/api/${activeType}Array?userId=${userId}`)
      .then((res) => res.json())
      .then((data : APIResponseItem[]) => {
        console.log("API Response:", data);
  
        const formattedItems = data.map((item: APIResponseItem) => {
          if (activeType === "cart" && item.product) {
            // Cart items contain product object & quantity
            return {
              _id: item.product._id,
              title: item.product.title,
              price: item.product.price,
              imageUrl: item.product.imageUrl || "/placeholder.jpg",
              slug: item.product.slug?.current || item.product._id,
              quantity: item.quantity, // Cart has quantity
            };
          } else if (activeType === "wishlist") {
            // Wishlist returns an array of products (no wrapping product object)
            return {
              _id: item._id,
              title: item.title,
              price: item.price,
              imageUrl: item.imageUrl || "/placeholder.jpg",
              slug: `/products/${item._id}`,
            };
          }
        });
  
        setItems(formattedItems.filter((item): item is SidebarItem => item !== undefined));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [activeType, userId]);
  
      
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (sidebarRef.current && isOpen) {
        const { current: sidebar } = sidebarRef;
        const isHovering = sidebar.contains(event.target as Node);

        if (isHovering) {
          const atTop = sidebar.scrollTop === 0;
          const atBottom = sidebar.scrollHeight - sidebar.scrollTop === sidebar.clientHeight;

          if ((event.deltaY < 0 && atTop) || (event.deltaY > 0 && atBottom)) {
            event.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (isOpen) {
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      setShowCursor(false);
      document.removeEventListener("mousemove", handleMouseMove);
    }

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 cursor-none"
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
          onClick={closeSidebar}
        >
          {showCursor && (
            <div
              className="absolute w-10 h-10 flex items-center justify-center bg-white text-black text-lg font-bold rounded-full pointer-events-none shadow-lg"
              style={{
                top: `${cursorPosition.y}px`,
                left: `${cursorPosition.x}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              ✖
            </div>
          )}
        </div>
      )}

      <div
        ref={sidebarRef}
        className={`fixed top-[40px] right-0 h-[calc(100vh-40px)] w-[320px] md:w-[400px] lg:w-[500px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 flex justify-between items-center bg-gray-100 pt-10 p-4 border-b z-10">
          <h2 className="text-xl font-bold">
            {activeType === "wishlist" ? "Wishlist" : "Cart"} ({items.length})
          </h2>
          <button onClick={closeSidebar} className="p-1 rounded-full hover:bg-gray-200">
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <div className="p-5 space-y-4 overflow-y-auto flex-1">
          {loading ? (
            <p className="text-gray-500 text-sm">Loading...</p>
          ) : items.length > 0 ? (
            items.map((item) => (
              <div key={item._id} className="relative flex border-b pb-3">
                <button className="absolute top-0 right-0 p-1 rounded-full hover:bg-gray-200">
                  <XMarkIcon className="h-5 w-5 text-gray-500" />
                </button>

                <Link href={`/products/${item.slug}`} className="flex gap-3 w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="h-16 w-16 md:h-20 md:w-20 object-cover rounded"
                  />
                  <div className="flex flex-col flex-1 py-1">
                    <p className="text-sm font-medium tracking-wider">{item.title}</p>
                    <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <button 
                        className="bg-gray-200 px-2 rounded text-lg" 
                        onClick={() => updateCartQuantity(item._id, item.quantity! - 1)}
                        disabled={item.quantity === 1} // Prevent going below 1
                      >-</button>
                      <p className="text-xs font-medium">{item.quantity}</p>
                      <button 
                        className="bg-gray-200 px-2 rounded text-lg" 
                        onClick={() => updateCartQuantity(item._id, item.quantity! + 1)}
                      >+</button>
                    </div>

                      <button
                        className="cta-button"
                        onClick={() => console.log(`Added ${item.title} to cart`)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">Your {activeType} is empty.</p>
          )}
        </div>
      </div>
    </>
  );
}
