import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import bcrypt from "bcryptjs";

// Temporary in-memory user store (replace with a database)
const users = [
  { id: "1", email: "test@example.com", password: bcrypt.hashSync("password", 10) }
];

const authOptions: AuthOptions = {
  providers: [
    // Credentials provider
    // Google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // You can specify redirectUri if needed (optional)
      // redirectUri: "http://localhost:3000/api/auth/callback/google",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Only attempt to authenticate with credentials if Google/Facebook are not used
        if (credentials?.email && credentials?.password) {
          const user = users.find(u => u.email === credentials.email);
          if (user && await bcrypt.compare(credentials.password, user.password)) {
            return { id: user.id, email: user.email };
          }
          throw new Error("Invalid email or password");
        }
        // If credentials are missing, return null (will trigger Google/Facebook flow instead)
        return null;
      }
    }),

    
    // Facebook provider
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      // You can specify redirectUri if needed (optional)
      // redirectUri: "http://localhost:3000/api/auth/callback/facebook",
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.sub || "";
        session.user.name = token.name || "Guest"; // Add a fallback for the name
      }
      return session;
    },
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true, // Enable debug mode to track the process more closely
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
