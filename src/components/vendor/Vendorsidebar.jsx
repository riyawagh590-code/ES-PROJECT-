"use client";

import {
  LayoutDashboard,
  ShoppingBag,
  CalendarDays,
  Store,
  Wallet,
  UserCircle,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/vendor",
    icon: LayoutDashboard,
  },
  {
    label: "Orders",
    href: "/vendor/orders",
    icon: ShoppingBag,
  },
  {
    label: "Availability",
    href: "/vendor/availability",
    icon: CalendarDays,
  },
  {
    label: "Services",
    href: "/vendor/services",
    icon: Store,
  },
  {
    label: "Earnings",
    href: "/vendor/earnings",
    icon: Wallet,
  },
  {
    label: "Profile",
    href: "/vendor/profile",
    icon: UserCircle,
  },
];

export default function Vendorsidebar({
  active,
  onNavigate,
  onLogout,
}) {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col">
      <div className="px-6 py-6 border-b border-gray-100">
        <h2 className="text-xl font-black text-gray-900">
          Campus
          <span className="text-purple-600">
            {" "}
            Concierge
          </span>
        </h2>

        <p className="text-xs text-gray-400 mt-1">
          Vendor Portal
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
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