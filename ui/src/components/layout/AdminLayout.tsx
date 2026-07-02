import Link from "next/link";
import React from "react";
import AdminSidebarNav from "./AdminSidebarNav";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { 
  Menu, 
  Search, 
  Bell, 
  Award,
  LogOut 
} from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const username = user?.name || user?.email?.split('@')[0] || "Admin User";
  const initial = username.charAt(0).toUpperCase();

  return (
    <div className="bg-background text-on-background min-h-screen flex overflow-hidden">
      {/* Sidebar Navigation (Admin Panel Mapping) */}
      <aside className="h-screen w-64 bg-primary-container dark:bg-primary flex-col gap-base p-md hidden lg:flex shadow-md sticky top-0 z-50">
        <div className="mb-lg px-xs">
          <h1 className="font-display-sm text-display-sm font-bold text-on-primary">Campus XP</h1>
          <p className="font-label-md text-label-md text-on-primary/70 mt-1">Admin Panel</p>
        </div>
        <AdminSidebarNav />
        <div className="mt-auto pt-lg border-t border-on-primary-container/20">
          <Link href="/api/auth/signout" className="flex items-center gap-3 px-4 py-3 text-on-primary/70 hover:text-error hover:bg-error/10 rounded-lg transition-colors w-full">
            <LogOut className="w-5 h-5" />
            <span className="font-label-md text-label-md">Logout</span>
          </Link>
        </div>
      </aside>
      
      {/* Main Content Canvas */}
      <main className="grow overflow-y-auto custom-scrollbar h-screen flex flex-col">
        {/* Top Navigation (Mobile/Universal) */}
        <header className="bg-surface-container-lowest shadow-sm flex justify-between items-center px-gutter py-3 w-full h-20 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 hover:bg-surface-variant rounded-full transition-colors flex items-center justify-center">
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="font-headline-md text-headline-md font-bold text-primary">Dashboard Overview</h2>
          </div>
          <div className="flex items-center gap-md">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-surface-variant rounded-full transition-colors relative flex items-center justify-center">
                <Bell className="text-on-surface-variant w-6 h-6" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-surface-variant rounded-full transition-colors flex items-center justify-center">
                <Award className="text-on-surface-variant w-6 h-6" />
              </button>
            </div>
            <div className="h-8 w-px bg-outline-variant mx-2"></div>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-surface-variant p-2 rounded-lg transition-colors">
              <div className="hidden md:block text-right">
                <p className="font-label-md text-label-md text-on-surface font-bold leading-tight">{username}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">System Director</p>
              </div>
              {user?.image ? (
                <img className="w-10 h-10 rounded-full border-2 border-primary/20 object-cover" data-alt={username} src={user.image}/>
              ) : (
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg border-2 border-primary/20">
                  {initial}
                </div>
              )}
            </div>
          </div>
        </header>
        
        <div className="p-margin max-w-max_width mx-auto flex flex-col gap-lg w-full grow">
          {children}
        </div>
        
        {/* Footer */}
        <footer className="w-full py-xl border-t border-outline-variant bg-surface-container mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center px-margin max-w-max_width mx-auto">
            <p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 University Talent Hub. All rights reserved.</p>
            <div className="flex gap-lg mt-4 md:mt-0">
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Campus Links</a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Legal</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
