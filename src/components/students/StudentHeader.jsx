"use client";

import {
  Bell,
  Search,
} from "lucide-react";

export default function StudentHeader({
  studentName = "Student",
  onSearch,
  onNotification,
}) {
  return (
    <header className="bg-white border-b border-gray-100 px-5 md:px-8 py-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500">
            Welcome back,
          </p>

          <h1 className="text-xl md:text-2xl font-black text-gray-900">
            {studentName}
          </h1>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-md mx-6 relative">
          <Search className="absolute left-4 w-5 h-5 text-gray-400" />

          <input
            type="text"
            placeholder="Search campus services..."
            onChange={(e) => onSearch?.(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-purple-400"
          />
        </div>

        <button
          onClick={onNotification}
          className="relative w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-purple-50 transition"
        >
          <Bell className="w-5 h-5 text-gray-600" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-orange-500" />
        </button>
      </div>
    </header>
  );
}