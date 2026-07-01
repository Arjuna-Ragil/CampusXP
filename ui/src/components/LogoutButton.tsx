"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: "/" })}
      className="flex items-center gap-sm px-md py-sm text-error hover:bg-error/10 rounded-lg transition-all w-full text-left"
    >
      <LogOut className="w-5 h-5" />
      <span className="font-label-md text-label-md">Logout</span>
    </button>
  );
}
