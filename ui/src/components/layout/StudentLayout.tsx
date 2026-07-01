import Link from "next/link";
import React from "react";
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
  Plus 
} from "lucide-react";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* SideNavBar Component */}
      <aside className="h-screen w-64 flex-col hidden lg:flex bg-surface-container-low dark:bg-surface-container-highest border-r border-outline-variant sticky top-0 shrink-0 p-md gap-base">
        <div className="mb-lg px-xs">
          <h1 className="font-headline-md text-headline-md text-primary">Talent Hub</h1>
          <p className="font-label-md text-label-md text-on-surface-variant">Student Portal</p>
        </div>
        <nav className="flex flex-col gap-base grow">
          <Link href="/" className="flex items-center gap-sm px-md py-sm hover:bg-surface-variant text-on-surface-variant rounded-lg transition-all">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-label-md text-label-md">Dashboard</span>
          </Link>
          <Link href="/student/submission" className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all">
            <UserCircle className="w-5 h-5" />
            <span className="font-label-md text-label-md">Portfolio</span>
          </Link>
          <Link href="/student/leaderboard" className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all">
            <BarChart2 className="w-5 h-5" />
            <span className="font-label-md text-label-md">Leaderboard</span>
          </Link>
          <Link href="/student/rewards" className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all">
            <Gift className="w-5 h-5" />
            <span className="font-label-md text-label-md">Rewards</span>
          </Link>
        </nav>
        <div className="mt-auto flex flex-col gap-base">
          <button className="bg-primary text-on-primary rounded-lg py-sm px-md font-label-md text-label-md hover:bg-secondary transition-colors mb-md">
            View Careers
          </button>
          <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all" href="#">
            <HelpCircle className="w-5 h-5" />
            <span className="font-label-md text-label-md">Support</span>
          </a>
          <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all" href="#">
            <Settings className="w-5 h-5" />
            <span className="font-label-md text-label-md">Settings</span>
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
              <span className="font-body-md text-body-md text-primary font-bold">Talent Hub</span>
            </div>
          </div>
          <div className="flex items-center gap-lg">
            <div className="flex items-center gap-xs bg-tertiary-container/10 px-sm py-xs rounded-full border border-tertiary-container/20">
              <Star className="text-tertiary w-5 h-5 fill-tertiary" />
              <span className="font-label-md text-label-md text-tertiary">2,450 pts</span>
            </div>
            <div className="flex items-center gap-md">
              <button className="text-on-surface-variant hover:bg-surface-variant p-base rounded-full transition-colors flex items-center justify-center">
                <Bell className="w-6 h-6" />
              </button>
              <button className="text-on-surface-variant hover:bg-surface-variant p-base rounded-full transition-colors flex items-center justify-center">
                <Award className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-sm cursor-pointer hover:bg-surface-variant px-sm py-xs rounded-full transition-colors">
                <span className="font-label-md text-label-md hidden sm:block">Alex Johnson</span>
                <div className="w-8 h-8 rounded-full overflow-hidden bg-outline-variant">
                  <img className="w-full h-full object-cover" data-alt="Student avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzS3jzzk7wWhsBsKeQapkD6ZG5mBrKhUDFEwtzhyRW6aAWGO-22vGTTd-fO84i4wnUvhvIoHpVvUUPCeGGjS7vl-DmeFWVg9Mn9dDDEm_ptMpf4FGgezI-4ayL3IeeyKzb79Nwxhm3m0F-0XvXg2hvaCQPRxcTHZZUAZAd1RiW7ifRgUf4uX22Nj11xZlCa21hvxEBBUVfooDO3_i4fATMvOh5SZCFuFL2Ct37666TAqmo11kYV631CnMi2UUXmKhJ0uwb7uJhVzU"/>
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
      
      {/* Floating Action Button for Students */}
      <div className="fixed bottom-margin right-margin z-50">
        <button className="w-16 h-16 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform group relative">
          <Plus className="w-8 h-8" />
          <span className="absolute right-full mr-md py-xs px-sm bg-inverse-surface text-inverse-on-surface text-label-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Create New Project</span>
        </button>
      </div>
    </div>
  );
}
