// context/wishlistContext.ts
import { createContext } from 'react';
import { IProductProp } from '@/interfaces';

interface WishlistContextType {
  wishlist: IProductProp[];
  addToWishlist: (product: IProductProp) => void;
  removeFromWishlist: (productId: string) => void;
}

export const WishlistContext = createContext<WishlistContextType | null>(null);
