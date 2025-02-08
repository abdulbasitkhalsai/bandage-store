
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string; // Restore `id` to avoid TypeScript errors
    userId: string; // Custom userId field from Sanity
    sanityId: string; // Sanity `_id`
  }

  interface Session extends DefaultSession {
    user: User; // Ensuring the session includes `userId` and `sanityId`
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    userId: string;
    sanityId: string;
  }
}
