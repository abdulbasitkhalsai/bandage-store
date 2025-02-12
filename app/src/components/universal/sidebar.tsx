"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState, useRef } from "react";
import { useSidebar } from "@/context/sidebarContext";
import Link from "next/link";
import Image from "next/image";

interface SidebarItem {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
}

export default function Sidebar({ userId }: { userId: string }) {
  const { isOpen, activeType, closeSidebar } = useSidebar();
  const [items, setItems] = useState<SidebarItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeType || !userId) return;

    setLoading(true);
    fetch(`/api/${activeType}Array?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setItems(data || []))
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
                      <p className="text-xs text-gray-500">{item.price} PKR</p>
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
