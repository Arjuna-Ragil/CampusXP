import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl;
    const role = req.nextauth.token?.role;

    // Redirect admin trying to access student routes
    if (role === "ADMIN" && (pathname === "/" || pathname.startsWith("/student"))) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }

    // Protect admin routes from non-admins
    if (pathname.startsWith("/admin") && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    pages: {
      signIn: "/login",
      signOut: "/logout",
    },
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Protect all routes except next internals, api routes (nextauth handles its own api), and static files
    "/((?!api/auth|_next/static|_next/image|favicon.ico|login|logout).*)"
  ]
};
