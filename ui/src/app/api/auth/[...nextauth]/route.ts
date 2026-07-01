import NextAuth, { NextAuthOptions } from "next-auth";
import AuthentikProvider from "next-auth/providers/authentik";

export const authOptions: NextAuthOptions = {
  providers: [
    AuthentikProvider({
      clientId: process.env.AUTHENTIK_CLIENT_ID as string,
      clientSecret: process.env.AUTHENTIK_CLIENT_SECRET as string,
      issuer: (process.env.AUTHENTIK_ISSUER as string)?.replace(/\/$/, ""),
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      if (token.accessToken && !token.role) {
        try {
          // Fetch the user's role from the backend
          const res = await fetch("http://127.0.0.1:8080/api/v1/users/me", {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          });
          if (res.ok) {
            const data = await res.json();
            token.role = data.role;
          }
        } catch (e) {
          console.error("Failed to fetch user role", e);
        }
      }
      return token;
    },
    async session({ session, token }) {
      (session as any).accessToken = token.accessToken;
      (session as any).role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
