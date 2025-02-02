
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string;
    wishlist?: any[]; // Adjust type as needed (e.g., product references)
  }

  interface Session {
    user: User;
  }
}
