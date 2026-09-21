"use client";

import {
  LayoutDashboard,
  Utensils,
  Shirt,
  Sparkles,
  Home,
  Coffee,
  Users,
  CalendarDays,
  CreditCard,
  UserCircle,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/student",
  },
  {
    label: "Mess",
    icon: Utensils,
    href: "/student/mess",
  },
  {
    label: "Laundry",
    icon: Shirt,
    href: "/student/laundry",
  },
  {
    label: "Cleaning",
    icon: Sparkles,
    href: "/student/cleaning",
  },
  {
    label: "PG & Hostels",
    icon: Home,
    href: "/student/pg",
  },
  {
    label: "Cafes",
    icon: Coffee,
    href: "/student/cafes",
  },
  {
    label: "Roommate Finder",
    icon: Users,
    href: "/student/roomate",
  },
  {
    label: "My Bookings",
    icon: CalendarDays,
    href: "/bookings",
  },
  {
    label: "Fresher Pass",
    icon: CreditCard,
    href: "/pass",
  },
  {
    label: "Profile",
    icon: UserCircle,
    href: "/student/profile",
  },
];

export default function StudentSidebar({
  active,
  onNavigate,
  onLogout,
}) {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col">
      <div className="px-6 py-6 border-b border-gray-100">
        <h2 className="text-xl font-black text-gray-900">
          Campus
          <span className="text-purple-600"> Concierge</span>
        </h2>

        <p className="text-xs text-gray-400 mt-1">
          Your campus life, sorted.
        </p>
      </div>

      <nav className="p-4 flex-1 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <button
              key={item.label}
              onClick={() => onNavigate?.(item.href)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                isActive
                  ? "bg-purple-50 text-purple-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}