import NextAuth from "next-auth";
import AuthentikProvider from "next-auth/providers/authentik";

const handler = NextAuth({
  providers: [
    AuthentikProvider({
      clientId: process.env.AUTHENTIK_CLIENT_ID as string,
      clientSecret: process.env.AUTHENTIK_CLIENT_SECRET as string,
      issuer: (process.env.AUTHENTIK_ISSUER as string)?.replace(/\/$/, ""),
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      (session as any).accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
});

export { handler as GET, handler as POST };
