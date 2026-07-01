import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
    signOut: "/logout",
  }
});

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Protect all routes except next internals, api routes (nextauth handles its own api), and static files
    "/((?!api/auth|_next/static|_next/image|favicon.ico|login|logout).*)"
  ]
};
