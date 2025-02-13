"use client";

import { useState, useEffect } from "react";
import { CartContext } from "./cartContext";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
  quantity: number;
}


interface CartProviderProps {
  userId: string;
  children: React.ReactNode;
}

export const CartProvider = ({ userId, children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]); // ✅ Define type for cart

  useEffect(() => {
    if (!userId) return;
    fetch(`/api/cart?userId=${userId}`)
      .then((res) => res.json())
      .then((data: CartItem[]) => setCart(data || []))
      .catch(console.error);
  }, [userId]);

  const addToCart = async (item: CartItem) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);

    await fetch(`/api/cart?userId=${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: item._id, // Ensure this matches the schema in Sanity
        title: item.title,
        price: item.price,
        imageUrl: item.imageUrl,
        slug: item.slug,
        quantity: item.quantity,
      }),
    });
    ;
  };

  const removeFromCart = async (itemId: string) => {
    const updatedCart = cart.filter((item) => item._id !== itemId);
    setCart(updatedCart);

    await fetch(`/api/cart?userId=${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productIds: cart.map((item) => item._id) }),
    });    
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item._id === itemId ? { ...item, quantity } : item
    );
    setCart(updatedCart);

    await fetch(`/api/cart?userId=${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: itemId, quantity }),
    });
  };

  const clearCart = async () => {
    setCart([]);

    await fetch(`/api/cart?userId=${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clear: true }),
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
