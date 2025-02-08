

// import sanityClient from "@/sanity/sanity.client";
// import NextAuth, { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { User, Account, Profile } from "next-auth";

// interface GoogleProfile extends Profile {
//   email_verified?: boolean;
//   given_name?: string;
//   family_name?: string;
//   picture?: string;
// }

// export const authOptions: NextAuthOptions = {
//   debug: false,
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async signIn({
//       user,
//       account,
//       profile,
//     }: {
//       user: User;
//       account: Account | null;
//       profile?: GoogleProfile;
//     }) {
//       try {
//         if (!profile || !account) {
//           console.error("Profile or account is missing.");
//           return false;
//         }

//         // Fetch existing user
//         let existingUser = await sanityClient.fetch(
//           `*[_type == "user" && email == $email][0]`,
//           { email: user.email }
//         );

//         if (!existingUser) {
//           // Generate next sequential userId
//           const lastUser = await sanityClient.fetch(
//             `*[_type == "user"] | order(userId desc) [0]`
//           );
//           let nextUserId = "USER0001";

//           if (lastUser?.userId) {
//             const lastNumber = parseInt(
//               lastUser.userId.replace("USER", ""),
//               10
//             );
//             nextUserId = `USER${String(lastNumber + 1).padStart(4, "0")}`;
//           }

//           // Create new user in Sanity
//           existingUser = await sanityClient.create({
//             _type: "user",
//             userId: nextUserId,
//             name: user.name || profile.name,
//             email: user.email,
//             phone: "",
//             address: "",
//             wishlist: [],
//             role: "user",
//             createdAt: new Date().toISOString(),
//             provider: "google",
//             providerId: profile.sub,
//             emailVerified: profile.email_verified || false,
//             givenName: profile.given_name || "",
//             familyName: profile.family_name || "",
//             picture: user.image || profile.picture,
//             accessToken: account.access_token,
//             refreshToken: account.refresh_token,
//             tokenExpiry: new Date((account.expires_at || 0) * 1000).toISOString(),
//             updatedAt: new Date().toISOString(),
//           });
//         } else {
//           // Update user data
//           const updateData: Record<string, unknown> = {
//             provider: "google",
//             providerId: profile.sub,
//             accessToken: account.access_token,
//             refreshToken: account.refresh_token,
//             tokenExpiry: new Date((account.expires_at || 0) * 1000).toISOString(),
//             updatedAt: new Date().toISOString(),
//             picture: user.image || profile.picture,
//           };

//           if (existingUser.name !== (user.name || profile.name))
//             updateData.name = user.name || profile.name;
//           if (existingUser.email !== user.email) updateData.email = user.email;
//           if (existingUser.givenName !== profile.given_name)
//             updateData.givenName = profile.given_name;
//           if (existingUser.familyName !== profile.family_name)
//             updateData.familyName = profile.family_name;

//           await sanityClient.patch(existingUser._id).set(updateData).commit();
//         }

//         return true;
//       } catch (error) {
//         console.error("Sanity user creation/update error:", error);
//         return false;
//       }
//     },

//     // Include `_id` in JWT
//     async jwt({ token, user }) {
//       if (user) {
//         const existingUser = await sanityClient.fetch(
//           `*[_type == "user" && email == $email][0]`,
//           { email: user.email }
//         );
//         if (existingUser) {
//           token.id = existingUser._id; // Store `_id` for Sanity reference
//           token.userId = existingUser.userId; // Store userId
//         }
//       }
//       return token;
//     },

//     // Attach `_id` to session
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.userId ?? ""; // Ensure it's always a string
//         session.user.sanityId = token.id ?? ""; // Ensure it's always a string
//       }
//       return session;
//     },
//   },
// };

// export const runtime = "nodejs";

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


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
      if (session.user) {
        session.user.id = token.userId ?? "";
        session.user.sanityId = token.id ?? "";
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
