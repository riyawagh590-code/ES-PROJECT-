"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  CalendarDays,
  Wallet,
  Headphones,
  Settings,
} from "lucide-react";

export default function StudentSidebar() {
  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/student", active: true },
    { label: "My Bookings", icon: CalendarDays, href: "/bookings", active: false },
    { label: "Wallet", icon: Wallet, href: "/student/wallet", active: false },
    { label: "Support", icon: Headphones, href: "/support", active: false },
    { label: "Settings", icon: Settings, href: "/student/settings", active: false },
  ];

  return (
    <aside className="w-56 bg-white border-r border-slate-100 flex flex-col justify-between py-6 px-4 shrink-0 min-h-[calc(100vh-80px)]">
      {/* Top Nav Items */}
      <div className="space-y-1.5">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                item.active
                  ? "bg-purple-50 text-[#6C47FF] shadow-sm shadow-purple-100"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Icon className={`w-4 h-4 ${item.active ? "text-[#6C47FF]" : "text-slate-400"}`} />
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Bottom Campus Illustration & Doodle */}
      <div className="relative pt-6 border-t border-slate-100 text-center">
        {/* Doodle text */}
        <div className="mb-2 text-[#4F46E5] font-bold text-[11px] leading-tight rotate-[-4deg] pointer-events-none select-none">
          Happy <br />
          Campus Life <br />
          Starts Here!
          <div className="text-sm mt-0.5">☺ ✦</div>
        </div>

        {/* Campus Landmark Vector Art */}
        <div className="w-full h-36 rounded-2xl overflow-hidden bg-gradient-to-t from-purple-100 via-pink-50 to-transparent flex items-end justify-center p-2">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&auto=format&fit=crop&q=80"
            alt="Campus Clocktower"
            className="w-full h-32 object-cover rounded-xl shadow-sm"
          />
        </div>
      </div>
    </aside>
  );
}