"use client";

import {
  Bell,
  Menu,
} from "lucide-react";

export default function VendorHeader({
  vendorName = "Vendor",
  onMenuClick,
  onNotification,
}) {
  return (
    <header className="bg-white border-b border-gray-100 px-5 md:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>

          <div>
            <p className="text-xs text-gray-400 uppercase font-bold tracking-wide">
              Vendor portal
            </p>

            <h1 className="text-xl font-black text-gray-900">
              {vendorName}
            </h1>
          </div>
        </div>

        <button
          onClick={onNotification}
          className="relative w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-purple-50"
        >
          <Bell className="w-5 h-5 text-gray-600" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-orange-500" />
        </button>
      </div>
    </header>
  );
}