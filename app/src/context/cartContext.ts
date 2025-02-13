// context/CartContext.ts
"use client";

import { createContext, useContext } from "react";

// interface CartItem {
//   _id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
//   slug: string;
//   quantity: number;
// }

interface CartItem {
    _id: string;
    title: string;
    price: number;
    imageUrl: string;
    slug: string;
    quantity: number;
  }
  


interface CartContextType {

  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
