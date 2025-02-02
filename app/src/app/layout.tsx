import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/cartContextProvider";
import { UserContextProvider } from "@/context/userContextProvider";
import { LoginContextProvider } from "@/context/loginContextProvider";
import SessionWrapper from "@/components/SessionWrapper";
import { WishlistProvider } from "@/context/wishlistContextProvider";

export const metadata: Metadata = {
  title: "BANDAGE STORE",
  description: "Generated by Abdul Basit Khalsai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      > 
        <SessionWrapper>
        <WishlistProvider>
        <LoginContextProvider>
        <UserContextProvider>
        <CartProvider>
        {children}
        </CartProvider>
        </UserContextProvider>
        </LoginContextProvider>
        </WishlistProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
