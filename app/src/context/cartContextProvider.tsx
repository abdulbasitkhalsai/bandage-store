"use client";

import React, { createContext, useContext, useState, ReactNode} from "react";

interface CartItem {
  productId: string;
  title: string;
  price: number;
  imageUrl?: string;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  syncCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    // Sync with backend or perform other actions
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    // Sync with backend or perform other actions
  };

  const clearCart = () => {
    setCart([]);
    // Sync with backend or perform other actions
  };

  const syncCart = () => {
    // Sync with the backend (optional)
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, syncCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
