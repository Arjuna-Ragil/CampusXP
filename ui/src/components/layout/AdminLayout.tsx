import Link from "next/link";
import React from "react";
import { 
  LineChart, 
  Users, 
  UserCheck, 
  Settings, 
  Menu, 
  Search, 
  Bell, 
  Award 
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-on-background min-h-screen flex overflow-hidden">
      {/* Sidebar Navigation (Admin Panel Mapping) */}
      <aside className="h-screen w-64 bg-primary-container dark:bg-primary flex-col gap-base p-md hidden lg:flex shadow-md sticky top-0 z-50">
        <div className="mb-lg px-xs">
          <h1 className="font-headline-md text-headline-md text-on-primary-container">Admin Panel</h1>
          <p className="font-label-sm text-label-sm text-on-primary-container/70 mt-1">Management Console</p>
        </div>
        <nav className="grow flex flex-col gap-2">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 hover:text-on-primary hover:bg-primary/50 text-on-primary-container/80 rounded-lg transition-colors">
            <LineChart className="w-5 h-5" />
            <span className="font-label-md text-label-md">Overview</span>
          </Link>
          <Link href="/admin/directory" className="flex items-center gap-3 px-4 py-3 text-on-primary-container/80 hover:text-on-primary hover:bg-primary/50 rounded-lg transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-label-md text-label-md">Talent Pool</span>
          </Link>
          <Link href="/admin/verification" className="flex items-center gap-3 px-4 py-3 text-on-primary-container/80 hover:text-on-primary hover:bg-primary/50 rounded-lg transition-colors">
            <UserCheck className="w-5 h-5" />
            <span className="font-label-md text-label-md">Verification</span>
          </Link>
          <Link href="/admin/rewards" className="flex items-center gap-3 px-4 py-3 text-on-primary-container/80 hover:text-on-primary hover:bg-primary/50 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-label-md text-label-md">Rewards Management</span>
          </Link>
        </nav>
        <div className="mt-auto pt-lg border-t border-on-primary-container/20">
          <div className="flex items-center gap-3 px-2">
            <img className="w-10 h-10 rounded-full border-2 border-on-primary-container/30 object-cover" data-alt="Admin User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxvCdEC4i2A7mmNJIadewOrf5p5pgSXsdYck6uh3E15SlCcAIdhs6Hyi1Es1dUZBkZMuZkyJu0fNBN5xHwvaIkX1Pzmu5jQ0KQbPlPTK9_e5W2Xy58YJFTTAojeFZL6E07BUYWjQ7iZY5poMBierfHLO5ePSIVmGOqeTZDXFHehKanXfM0Kj5dN0EIrOQ8l2u3lKBQ3d8eKK1kiFgc4FDJf_L317_obL3_G8xkXrgLbFGqbmv22vD_mkSbeebgr7dSKv7h888XSS4"/>
            <div>
              <p className="font-label-md text-label-md text-on-primary-container font-bold">Admin User</p>
              <p className="font-label-sm text-label-sm text-on-primary-container/60">System Director</p>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main Content Canvas */}
      <main className="grow overflow-y-auto custom-scrollbar h-screen flex flex-col">
        {/* Top Navigation (Mobile/Universal) */}
        <header className="bg-surface-container-lowest shadow-sm flex justify-between items-center px-gutter w-full h-16 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 hover:bg-surface-variant rounded-full transition-colors flex items-center justify-center">
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="font-headline-md text-headline-md font-bold text-primary">Dashboard Overview</h2>
          </div>
          <div className="flex items-center gap-md">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
              <input className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-label-md focus:ring-2 focus:ring-secondary transition-all w-64" placeholder="Search analytics..." type="text"/>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-surface-variant rounded-full transition-colors relative flex items-center justify-center">
                <Bell className="text-on-surface-variant w-6 h-6" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-surface-variant rounded-full transition-colors flex items-center justify-center">
                <Award className="text-on-surface-variant w-6 h-6" />
              </button>
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
