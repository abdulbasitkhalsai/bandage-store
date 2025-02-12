"use client";
import { createContext, useContext, useState } from "react";

interface SidebarContextType {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  console.log("📢 useWishlistSidebar called, context:", context);
  if (!context) {
    throw new Error("useWishlistSidebar must be used within a WishlistSidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  console.log("WishlistSidebarProvider rendered, isSidebarOpen:", isSidebarOpen);

  return (
    <SidebarContext.Provider
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
    </SidebarContext.Provider>
  );
};
