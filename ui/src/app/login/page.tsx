"use client";

import { signIn } from "next-auth/react";
import { LogIn, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if there is an error in the URL (e.g. from a failed signIn)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("error")) {
      setError(urlParams.get("error"));
    }
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);
    const callbackUrl = new URLSearchParams(window.location.search).get("callbackUrl") || "/";
    await signIn("authentik", { callbackUrl });
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-container rounded-full blur-[120px] opacity-50"></div>

      <div className="w-full max-w-[448px] bg-surface-container-lowest/80 backdrop-blur-xl border border-outline-variant rounded-2xl shadow-xl p-8 z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="font-headline-lg text-headline-lg font-bold text-primary mb-2 text-center">Talent Hub</h1>
          <p className="font-body-md text-body-md text-on-surface-variant text-center">
            Sign in to access your student portal and manage your skills portfolio.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-lg border border-error/20">
            <p className="font-label-md font-bold mb-1">Authentication Error</p>
            <p className="font-body-sm text-sm">{error}</p>
          </div>
        )}

        <button
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full bg-primary hover:bg-secondary text-on-primary py-4 px-6 rounded-xl font-label-lg font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <LogIn className="w-6 h-6" />
          )}
          {isLoading ? "Redirecting..." : "Sign In with Authentik"}
        </button>

        <p className="mt-8 text-center font-label-sm text-on-surface-variant/70">
          Secure Single Sign-On provided by CampusXP
        </p>
      </div>
    </div>
  );
}
