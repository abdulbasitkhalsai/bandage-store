// "use client";
// import { useSidebar } from "@/context/SidebarContextProvider";
// import { useWishlist } from "@/context/wishlistContextProvider";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect } from "react";

// export default function Sidebar() {
//   const { wishlist } = useWishlist();
//   const { isSidebarOpen, closeSidebar } = useSidebar();

//   // Handle escape key to close sidebar
//   useEffect(() => {
//     const handleEsc = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         closeSidebar();
//       }
//     };

//     if (isSidebarOpen) {
//       document.addEventListener("keydown", handleEsc);
//     } else {
//       document.removeEventListener("keydown", handleEsc);
//     }

//     return () => document.removeEventListener("keydown", handleEsc);
//   }, [isSidebarOpen, closeSidebar]);

//   return (
//     <>
//       {/* Background overlay to close sidebar when clicking outside */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
//           onClick={closeSidebar}
//         ></div>
//       )}

//       {/* Sidebar (starts below header) */}
//       <div
//         className={`fixed top-[40px] right-0 h-[calc(100vh-40px)] w-[300px] bg-white shadow-lg py-8 px-5 transform transition-transform duration-300 ease-in-out z-50 ${
//           isSidebarOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-bold">Wishlist ({wishlist.length})</h2>
//           <button
//             onClick={closeSidebar}
//             className="p-1 rounded-full hover:bg-gray-200 transition"
//           >
//             <XMarkIcon className="h-6 w-6 text-gray-500" />
//           </button>
//         </div>

//         {/* Wishlist Items */}
//         <div className="mt-5 space-y-3">
//           {wishlist.length > 0 ? (
//             wishlist.map((item) => (
//               <div key={item._id} className="flex items-center space-x-3">
//                 <Image
//                   src={item.imageUrl}
//                   alt={item.title}
//                   className="h-12 w-12 object-cover rounded"
//                 />
//                 <div>
//                   <p className="text-sm font-medium">{item.title}</p>
//                   <p className="text-xs text-gray-500">{item.price} PKR</p>
//                 </div>
//                 <Link href={`/product/${item.slug}`} className="text-blue-500 text-sm">
//                   View
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-sm">Your wishlist is empty.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
