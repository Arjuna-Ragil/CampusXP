import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api/v1";

export async function serverFetch(endpoint: string, options: RequestInit = {}) {
  const session = await getServerSession(authOptions);
  const token = (session as any)?.accessToken;

  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  // To support mocking roles easily in dev without real tokens sometimes
  if (process.env.NODE_ENV === "development") {
    // You could inject mock roles here if desired, but we rely on NextAuth token now
  }

  const url = `${baseURL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let message = "An error occurred";
    try {
      const errorData = await response.json();
      message = errorData.error || message;
    } catch (e) {}
    throw new Error(message);
  }

  return response.json();
}
