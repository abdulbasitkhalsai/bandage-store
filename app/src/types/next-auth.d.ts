
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth"; // Import NextAuth for type declarations

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}