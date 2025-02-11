// "use client";

// import { XMarkIcon } from "@heroicons/react/24/outline";
// import { useEffect, useState } from "react";
// import { useSidebar } from "@/context/sidebarContext";
// import Link from "next/link";
// import Image from "next/image";

// interface SidebarItem {
//     _id: string;
//     title: string;
//     price: number;
//     imageUrl: string;
//     slug: string;
// }

// export default function Sidebar({ userId }: { userId: string }) {
//   const { isOpen, activeType, closeSidebar } = useSidebar();

// const [items, setItems] = useState<SidebarItem[]>([]);
// //   const [items, setItems] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [showCursor, setShowCursor] = useState(false);

//   useEffect(() => {
//     if (!activeType || !userId) {
//       console.warn("⚠️ Missing activeType or userId! Sidebar may not work properly.");
//       return;
//     }

//     console.log(`📡 Fetching ${activeType} items for user: ${userId}`);
//     setLoading(true);

//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/api/${activeType}Array?userId=${userId}`);
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//         const data = await response.json();
//         console.log(`✅ Fetched ${activeType} items:`, data);
//         setItems(data || []);
//       } catch (error) {
//         console.error(`❌ Fetch Error for ${activeType}:`, error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [activeType, userId]);

//   // Track mouse position & show custom cursor
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     if (isOpen) {
//       document.addEventListener("mousemove", handleMouseMove);
//     } else {
//       setShowCursor(false);
//       document.removeEventListener("mousemove", handleMouseMove);
//     }

//     return () => document.removeEventListener("mousemove", handleMouseMove);
//   }, [isOpen]);

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 cursor-none"
//           onMouseEnter={() => setShowCursor(true)}
//           onMouseLeave={() => setShowCursor(false)}
//           onClick={() => {
//             console.log("⛔ Sidebar background clicked, closing...");
//             closeSidebar();
//           }}
//         >
//           {/* Custom Cursor that Follows Mouse */}
//           {showCursor && (
//             <div
//               className="absolute w-10 h-10 flex items-center justify-center bg-white text-black text-lg font-bold rounded-full pointer-events-none shadow-lg"
//               style={{
//                 top: `${cursorPosition.y}px`,
//                 left: `${cursorPosition.x}px`,
//                 transform: "translate(-50%, -50%)",
//               }}
//             >
//               ✖
//             </div>
//           )}
//         </div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-[40px] right-0 h-[calc(100vh-40px)] w-[320px] md:w-[400px] lg:w-[500px] bg-white shadow-lg py-8 px-5 transform transition-transform duration-300 ease-in-out z-50 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-bold">
//             {activeType === "wishlist" ? "Wishlist" : "Cart"} ({items.length})
//           </h2>
//           <button
//             onClick={() => {
//               console.log("🔴 Close button clicked, closing sidebar...");
//               closeSidebar();
//             }}
//             className="p-1 rounded-full hover:bg-gray-200"
//           >
//             <XMarkIcon className="h-6 w-6 text-gray-500" />
//           </button>
//         </div>

//         <div className="mt-5 space-y-4">
//           {loading ? (
//             <p className="text-gray-500 text-sm">Loading...</p>
//           ) : items.length > 0 ? (
//             items.map((item) => (
//               <div key={item._id} className="flex items-center justify-between border-b pb-3">
//                 {/* Larger Image */}
//                 <Image src={item.imageUrl} alt={item.title} className="h-16 w-16 md:h-20 md:w-20 object-cover rounded" />
//                 <div className="flex-1 ml-3">
//                   <p className="text-sm font-medium">{item.title}</p>
//                   <p className="text-xs text-gray-500">{item.price} PKR</p>
//                 </div>

//                 {/* Styled View Button */}
//                 <Link
//                   href={`/products/${item.slug}`}
//                   className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition"
//                 >
//                   View
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-sm">Your {activeType} is empty.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
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
//   const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    if (!activeType || !userId) {
      console.warn("⚠️ Missing activeType or userId! Sidebar may not work properly.");
      return;
    }

    console.log(`📡 Fetching ${activeType} items for user: ${userId}`);
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${activeType}Array?userId=${userId}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log(`✅ Fetched ${activeType} items:`, data);
        setItems(data || []);
      } catch (error) {
        console.error(`❌ Fetch Error for ${activeType}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeType, userId]);

  // Track mouse position & show custom cursor
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

  // Remove item from list
  const handleRemoveItem = (itemId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    console.log(`🗑️ Removed item with ID: ${itemId}`);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 cursor-none"
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
          onClick={() => {
            console.log("⛔ Sidebar background clicked, closing...");
            closeSidebar();
          }}
        >
          {/* Custom Cursor that Follows Mouse */}
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

      {/* Sidebar */}
      <div
        className={`fixed top-[40px] right-0 h-[calc(100vh-40px)] w-[320px] md:w-[400px] lg:w-[500px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with Background */}
        <div className="flex justify-between items-center bg-gray-100 p-4 border-b">
          <h2 className="text-xl font-bold">
            {activeType === "wishlist" ? "Wishlist" : "Cart"} ({items.length})
          </h2>
          <button
            onClick={() => {
              console.log("🔴 Close button clicked, closing sidebar...");
              closeSidebar();
            }}
            className="p-1 rounded-full hover:bg-gray-200"
          >
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Product List */}
        <div className="p-5 space-y-4">
          {loading ? (
            <p className="text-gray-500 text-sm">Loading...</p>
          ) : items.length > 0 ? (
            items.map((item) => (
              <div key={item._id} className="flex items-center justify-between border-b pb-3 relative">
                {/* Larger Image */}
                <Image src={item.imageUrl} alt={item.title} width={16} height={16} className="h-16 w-16 md:h-20 md:w-20 object-cover rounded" />
                
                {/* Product Details */}
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.price} PKR</p>
                </div>

                {/* Remove (X) Button */}
                <button
                  onClick={() => handleRemoveItem(item._id)}
                  className="absolute top-0 right-10 p-1 text-gray-500 hover:text-red-500 transition"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>

                {/* View Button */}
                <Link
                  href={`/products/${item.slug}`}
                  className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition"
                >
                  View
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
