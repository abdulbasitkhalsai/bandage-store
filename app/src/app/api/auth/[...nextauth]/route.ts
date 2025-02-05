
// export const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
// import sanityClient from "@/sanity/sanity.client";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { User, Account, Profile } from "next-auth";

// export const authOptions = {
//   debug: true,
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account, profile }: { user: User; account: Account | null; profile?: Profile }) {
//       try {
//         if (!profile || !account) {
//           console.error("Profile or account is missing.");
//           return false;
//         }

//         // Fetch existing user from Sanity
//         const existingUser = await sanityClient.fetch(
//           `*[_type == "user" && email == $email][0]`,
//           { email: user.email }
//         );

//         if (!existingUser) {
//           // Create new user if not found
//           await sanityClient.create({
//             _type: "user",
//             userId: profile.sub, // Google OAuth User ID
//             name: user.name || profile.name,
//             email: user.email,
//             phone: "", // Optional
//             address: "", // Optional
//             wishlist: [], // Empty wishlist
//             password: "", // No password for OAuth users
//             role: "user", // Default role
//             createdAt: new Date().toISOString(),
//             providerId: profile.sub, // 'sub' from Google OAuth
//             provider: "google",
//             emailVerified: (profile as any).email_verified || false,
//             givenName: (profile as any).given_name || "",
//             familyName: (profile as any).family_name || "",
//             picture: user.image || (profile as any).picture,
//             accessToken: account.access_token,
//             refreshToken: account.refresh_token,
//             tokenExpiry: new Date((account.expires_at || 0) * 1000).toISOString(),
//             updatedAt: new Date().toISOString(),
//           });
//         } else {
//           // Prepare update object
//           const updateData: Record<string, any> = {
//             provider: "google", // Always update provider
//             providerId: profile.sub, // Always update providerId
//             accessToken: account.access_token,
//             refreshToken: account.refresh_token,
//             tokenExpiry: new Date((account.expires_at || 0) * 1000).toISOString(),
//             updatedAt: new Date().toISOString(),
//             picture: user.image || (profile as any).picture, 
//           };

//           // Conditional updates: Only update if changed
//           if (existingUser.name !== (user.name || profile.name)) {
//             updateData.name = user.name || profile.name;
//           }
//           if (existingUser.email !== user.email) {
//             updateData.email = user.email;
//           }
//           if (existingUser.givenName !== (profile as any).given_name) {
//             updateData.givenName = (profile as any).given_name;
//           }
//           if (existingUser.familyName !== (profile as any).family_name) {
//             updateData.familyName = (profile as any).family_name;
//           }

//           // Update user in Sanity
//           await sanityClient.patch(existingUser._id).set(updateData).commit();
//         }

//         return true;
//       } catch (error) {
//         console.error("Sanity user creation/update error:", error);
//         return false;
//       }
//     },
//   },
// };

// export const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
import sanityClient from "@/sanity/sanity.client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { User, Account, Profile } from "next-auth";

export const authOptions = {
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }: { user: User; account: Account | null; profile?: Profile }) {
      try {
        if (!profile || !account) {
          console.error("Profile or account is missing.");
          return false;
        }

        // Fetch existing user
        const existingUser = await sanityClient.fetch(
          `*[_type == "user" && email == $email][0]`,
          { email: user.email }
        );

        if (!existingUser) {
          // Generate next sequential userId
          const lastUser = await sanityClient.fetch(`*[_type == "user"] | order(userId desc) [0]`);
          let nextUserId = "USER0001"; // Default first ID

          if (lastUser?.userId) {
            const lastNumber = parseInt(lastUser.userId.replace("USER", ""), 10);
            nextUserId = `USER${String(lastNumber + 1).padStart(4, "0")}`;
          }

          // Create new user
          await sanityClient.create({
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
            emailVerified: (profile as any).email_verified || false,
            givenName: (profile as any).given_name || "",
            familyName: (profile as any).family_name || "",
            picture: user.image || (profile as any).picture,
            accessToken: account.access_token,
            refreshToken: account.refresh_token,
            tokenExpiry: new Date((account.expires_at || 0) * 1000).toISOString(),
            updatedAt: new Date().toISOString(),
          });
        } else {
          // Update user data
          const updateData: Record<string, any> = {
            provider: "google",
            providerId: profile.sub,
            accessToken: account.access_token,
            refreshToken: account.refresh_token,
            tokenExpiry: new Date((account.expires_at || 0) * 1000).toISOString(),
            updatedAt: new Date().toISOString(),
            picture: user.image || (profile as any).picture,
          };

          if (existingUser.name !== (user.name || profile.name)) updateData.name = user.name || profile.name;
          if (existingUser.email !== user.email) updateData.email = user.email;
          if (existingUser.givenName !== (profile as any).given_name) updateData.givenName = (profile as any).given_name;
          if (existingUser.familyName !== (profile as any).family_name) updateData.familyName = (profile as any).family_name;

          await sanityClient.patch(existingUser._id).set(updateData).commit();
        }

        return true;
      } catch (error) {
        console.error("Sanity user creation/update error:", error);
        return false;
      }
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
