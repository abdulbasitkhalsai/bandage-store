"use client";
import { createContext, useContext, useState } from "react";

interface WishlistSidebarContextType {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const WishlistSidebarContext = createContext<WishlistSidebarContextType | undefined>(undefined);

export const useWishlistSidebar = () => {
  const context = useContext(WishlistSidebarContext);
  console.log("📢 useWishlistSidebar called, context:", context);
  if (!context) {
    throw new Error("useWishlistSidebar must be used within a WishlistSidebarProvider");
  }
  return context;
};

export const WishlistSidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  console.log("WishlistSidebarProvider rendered, isSidebarOpen:", isSidebarOpen);

  return (
    <WishlistSidebarContext.Provider
      value={{
        isSidebarOpen,
        openSidebar: () => {
          console.log("openSidebar called, setting isSidebarOpen to true");
          setIsSidebarOpen(true);
        },
        closeSidebar: () => {
          console.log("closeSidebar called, setting isSidebarOpen to false");
          setIsSidebarOpen(false);
        },
      }}
    >
      {children}
    </WishlistSidebarContext.Provider>
  );
};
