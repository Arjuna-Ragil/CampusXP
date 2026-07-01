import Link from "next/link";
import React from "react";
import ChatbotFAB from "@/components/chat/ChatbotFAB";
import SidebarNav from "./SidebarNav";
import { 
  LayoutDashboard, 
  UserCircle, 
  BarChart2, 
  Gift, 
  HelpCircle, 
  Settings, 
  Menu, 
  Star, 
  Bell, 
  Award, 
  Globe, 
  MessageSquare, 
  Plus,
  LogOut
} from "lucide-react";

import { serverFetch } from "@/lib/api/serverApi";

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  let profile = null;
  try {
    const res = await serverFetch("/students/profile");
    profile = res;
  } catch (err) {
    console.error("Failed to fetch profile in layout", err);
  }

  const user = profile?.profile?.user;
  const fullName = profile?.profile?.full_name || user?.username || "Student";
  const initials = fullName.charAt(0).toUpperCase();
  const pfp = user?.pfp_url;
  const points = profile?.total_points || 0;

  return (
    <div className="flex min-h-screen">
      {/* SideNavBar Component */}
      <aside className="h-screen w-64 flex-col hidden lg:flex bg-surface-container-low dark:bg-surface-container-highest border-r border-outline-variant sticky top-0 shrink-0 p-md gap-base">
        <div className="mb-lg px-xs">
          <h1 className="font-display-sm text-display-sm font-bold text-primary">Campus XP</h1>
          <p className="font-label-md text-label-md text-on-surface-variant">Student Portal</p>
        </div>
        <SidebarNav />
        <div className="mt-auto flex flex-col gap-base">
          <a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error/10 rounded-lg transition-all" href="/api/auth/signout">
            <LogOut className="w-5 h-5" />
            <span className="font-label-md text-label-md">Logout</span>
          </a>
        </div>
      </aside>
      
      {/* Main Canvas */}
      <main className="grow flex flex-col min-w-0">
        {/* TopNavBar Component */}
        <header className="bg-surface-container-lowest shadow-sm w-full h-16 sticky top-0 z-50 flex justify-between items-center px-gutter">
          <div className="flex items-center gap-md">
            <button className="lg:hidden p-base rounded-full hover:bg-surface-variant">
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex items-center gap-base">
            </div>
          </div>
          <div className="flex items-center gap-lg">
            <div className="flex items-center gap-xs bg-tertiary-container/10 px-sm py-xs rounded-full border border-tertiary-container/20">
              <Star className="text-tertiary w-5 h-5 fill-tertiary" />
              <span className="font-label-md text-label-md text-tertiary">{points} pts</span>
            </div>
            <div className="flex items-center gap-md">
              <button className="text-on-surface-variant hover:bg-surface-variant p-base rounded-full transition-colors flex items-center justify-center">
                <Bell className="w-6 h-6" />
              </button>
              <button className="text-on-surface-variant hover:bg-surface-variant p-base rounded-full transition-colors flex items-center justify-center">
                <Award className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-sm cursor-pointer hover:bg-surface-variant px-sm py-xs rounded-full transition-colors">
                <span className="font-label-md text-label-md hidden sm:block">{fullName}</span>
                <div className="w-8 h-8 rounded-full overflow-hidden bg-primary flex items-center justify-center text-on-primary font-bold">
                  {pfp ? (
                    <img className="w-full h-full object-cover" data-alt="Student avatar" src={pfp}/>
                  ) : (
                    <span>{initials}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className="p-margin max-w-max_width mx-auto w-full">
          {children}
        </div>
        
        {/* Footer Component */}
        <footer className="mt-xl bg-surface-container dark:bg-surface-container-highest w-full py-xl border-t border-outline-variant">
          <div className="flex flex-col md:flex-row justify-between items-center px-margin max-w-max_width mx-auto gap-lg">
            <div className="flex flex-col items-center md:items-start gap-xs">
              <span className="font-label-md text-label-md font-bold text-primary">Talent Hub</span>
              <p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 University Talent Hub. All rights reserved.</p>
            </div>
            <div className="flex gap-lg">
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Campus Links</a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Legal</a>
            </div>
            <div className="flex gap-md">
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                <Globe className="w-5 h-5" />
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </main>
      
      {/* Floating Action Button / Chatbot for Students */}
      <ChatbotFAB />
    </div>
  );
}
