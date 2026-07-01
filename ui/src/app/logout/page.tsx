"use client";

import { signOut } from "next-auth/react";
import { LogOut, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function LogoutPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    await signOut({ callbackUrl: "/login" });
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-error-container rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-container rounded-full blur-[120px] opacity-20"></div>

      <div className="w-full max-w-[448px] bg-surface-container-lowest/80 backdrop-blur-xl border border-outline-variant rounded-2xl shadow-xl p-8 z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-error-container text-error rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-error/10">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="font-headline-lg text-headline-lg font-bold text-primary mb-2 text-center">Sign Out</h1>
          <p className="font-body-md text-body-md text-on-surface-variant text-center">
            Are you sure you want to sign out of your CampusXP session?
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className="w-full bg-error hover:bg-error/90 text-on-error py-4 px-6 rounded-xl font-label-lg font-bold transition-all shadow-md flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-on-error border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <LogOut className="w-6 h-6" />
            )}
            {isLoading ? "Signing out..." : "Yes, Sign out"}
          </button>
          
          <button
            onClick={handleCancel}
            disabled={isLoading}
            className="w-full bg-surface-container-high hover:bg-surface-variant text-on-surface py-4 px-6 rounded-xl font-label-lg font-bold transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
