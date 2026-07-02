"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LineChart, Users, UserCheck, Settings } from "lucide-react";

export default function AdminSidebarNav() {
  const pathname = usePathname();

  const links = [
    { href: "/admin/dashboard", label: "Overview", icon: LineChart },
    { href: "/admin/directory", label: "Talent Pool", icon: Users },
    { href: "/admin/verification", label: "Verification", icon: UserCheck },
    { href: "/admin/rewards", label: "Rewards Management", icon: Settings },
  ];

  return (
    <nav className="grow flex flex-col gap-2">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive 
                ? "text-on-primary bg-primary/50 font-bold" 
                : "text-on-primary/70 hover:text-on-primary hover:bg-primary/50"
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
