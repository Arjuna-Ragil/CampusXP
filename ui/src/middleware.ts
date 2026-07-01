import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    // We can define custom pages here if we want,
    // but without it, it will default to the provider's sign in page.
  }
});

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Protect all routes except next internals, api routes (nextauth handles its own api), and static files
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)"
  ]
};
