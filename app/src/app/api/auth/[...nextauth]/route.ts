import sanityClient from "@/sanity/sanity.client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { User, Account, Profile } from "next-auth";

interface GoogleProfile extends Profile {
  email_verified?: boolean;
  given_name?: string;
  family_name?: string;
  picture?: string;
}

export const runtime = "nodejs";

const handler = NextAuth({
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
      profile,
    }: {
      user: User;
      account: Account | null;
      profile?: GoogleProfile;
    }) {
      if (!profile || !account) return false;

      let existingUser = await sanityClient.fetch(
        `*[_type == "user" && email == $email][0]`,
        { email: user.email }
      );

      if (!existingUser) {
        const lastUser = await sanityClient.fetch(
          `*[_type == "user"] | order(userId desc) [0]`
        );
        let nextUserId = "USER0001";

        if (lastUser?.userId) {
          const lastNumber = parseInt(
            lastUser.userId.replace("USER", ""),
            10
          );
          nextUserId = `USER${String(lastNumber + 1).padStart(4, "0")}`;
        }

        existingUser = await sanityClient.create({
          _type: "user",
          userId: nextUserId,
          name: user.name || profile.name,
          email: user.email,
          phone: "",
          address: "",
          wishlist: [],
          role: "user",
          createdAt: new Date().toISOString(),
          provider: "google",
          providerId: profile.sub,
          emailVerified: profile.email_verified || false,
          givenName: profile.given_name || "",
          familyName: profile.family_name || "",
          picture: user.image || profile.picture,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          tokenExpiry: new Date((account.expires_at || 0) * 1000).toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        const existingUser = await sanityClient.fetch(
          `*[_type == "user" && email == $email][0]`,
          { email: user.email }
        );
        if (existingUser) {
          token.id = existingUser._id;
          token.userId = existingUser.userId;
        }
      }
      return token;
    },

    async session({ session, token }) {
      // console.log("🟡 Token Data:", token); // Debug log
    
      if (session.user) {
        session.user.id = token.userId ?? "";
        session.user.sanityId = token.id ?? "";
      }
    
      // console.log("🟢 Final Session Object:", session); // Debug log
      return session;
    }
    
  },
});

export { handler as GET, handler as POST };
