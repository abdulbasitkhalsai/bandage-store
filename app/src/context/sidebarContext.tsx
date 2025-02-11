// "use client";
// import { createContext, useContext, useState } from "react";

// interface SidebarContextType {
//   isOpen: boolean;
//   activeType: "wishlist" | "cart" | "";
//   openSidebar: (type: "wishlist" | "cart") => void;
//   closeSidebar: () => void;
// }

// const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// export function SidebarProvider({ children }: { children: React.ReactNode }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeType, setActiveType] = useState<"wishlist" | "cart" | "">("");

//   const openSidebar = (type: "wishlist" | "cart") => {
//     console.log(`Opening sidebar: ${type}`);
//     setActiveType(type);
//     setIsOpen(true);
//   };

//   const closeSidebar = () => {
//     console.log("Closing sidebar");
//     setIsOpen(false);
//     setActiveType(null);
//   };

//   return (
//     <SidebarContext.Provider value={{ isOpen, activeType, openSidebar, closeSidebar }}>
//       {children}
//     </SidebarContext.Provider>
//   );
// }

// export function useSidebar() {
//   const context = useContext(SidebarContext);
//   if (!context) {
//     throw new Error("useSidebar must be used within a SidebarProvider");
//   }
//   return context;
// }

"use client";
import { createContext, useContext, useState } from "react";

interface SidebarContextType {
  isOpen: boolean;
  activeType: "wishlist" | "cart" | "";
  openSidebar: (type: "wishlist" | "cart") => void;
  closeSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeType, setActiveType] = useState<"wishlist" | "cart" | "">("");

  const openSidebar = (type: "wishlist" | "cart") => {
    console.log(`🔓 Opening sidebar: ${type}`);
    setIsOpen(true);
    setActiveType(type);
  };

  const closeSidebar = () => {
    console.log("🔒 Closing sidebar");
    setIsOpen(false);
    setActiveType("");
  };

  return (
    <SidebarContext.Provider value={{ isOpen, activeType, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
