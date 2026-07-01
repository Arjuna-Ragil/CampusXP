"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, UserCircle, BarChart2, Gift } from "lucide-react";

export default function SidebarNav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/student/submission", label: "Portfolio", icon: UserCircle },
    { href: "/student/leaderboard", label: "Leaderboard", icon: BarChart2 },
    { href: "/student/rewards", label: "Rewards", icon: Gift },
  ];

  return (
    <nav className="flex flex-col gap-base grow">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-sm px-md py-sm rounded-lg transition-all ${
              isActive 
                ? "bg-primary text-on-primary font-bold shadow-sm" 
                : "text-on-surface-variant hover:bg-surface-variant hover:text-on-surface hover:bg-opacity-80"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-label-md text-label-md">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
