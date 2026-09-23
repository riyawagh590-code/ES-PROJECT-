"use client";

import Link from "next/link";
import {
  GraduationCap,
  Home,
  LayoutGrid,
  CalendarDays,
  Bell,
  User,
  Search,
} from "lucide-react";

export default function StudentHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-purple-50 px-6 h-20 flex items-center justify-between">
      {/* Brand Logo */}
      <Link href="/student" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-[#6C47FF] flex items-center justify-center text-white shadow-md shadow-purple-200">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xl font-black text-slate-900 tracking-tight block leading-none">
            Studentica.
          </span>
          <span className="text-[10px] font-bold text-slate-400 tracking-wide uppercase">
            Campus Hub
          </span>
        </div>
      </Link>

      {/* Nav Tabs */}
      <nav className="hidden md:flex items-center gap-2 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/50">
        <Link
          href="/student"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#6C47FF] shadow-sm transition"
        >
          <Home className="w-4 h-4" />
          Home
        </Link>
        <Link
          href="/student/services"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
        >
          <LayoutGrid className="w-4 h-4" />
          Services
        </Link>
        <Link
          href="/bookings"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
        >
          <CalendarDays className="w-4 h-4" />
          My Bookings
        </Link>
        <Link
          href="/student/notices"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
        >
          <Bell className="w-4 h-4" />
          Notices
        </Link>
        <Link
          href="/student/profile"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
        >
          <User className="w-4 h-4" />
          Profile
        </Link>
      </nav>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-2 bg-slate-100/80 rounded-xl w-60 border border-slate-200/50">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search services, amenities..."
            className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition">
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink-500 text-[9px] font-black text-white flex items-center justify-center">
            3
          </span>
        </button>

        {/* User Pill */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
            alt="Riya"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-purple-200"
          />
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold text-slate-900 leading-tight">Hi, Riya!</p>
            <p className="text-[10px] text-slate-400 font-medium">Student</p>
          </div>
        </div>
      </div>
    </header>
  );
}