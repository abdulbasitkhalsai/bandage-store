import { useSidebar } from "@/context/sidebarContext";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function WishlistHeader() {
  const { openSidebar } = useSidebar();

  return (
    <button
      onClick={() => {
        console.log("🛒 Wishlist button clicked");
        openSidebar("wishlist");
      }}
      className="relative p-2 text-white"
    >
      <HeartIcon className="w-6 h-6 text-red-500" />
         <span className="absolute top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
           0
         </span>
    </button>
  );
}
