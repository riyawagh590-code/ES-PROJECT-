"use client";

import Link from "next/link";
import { GraduationCap, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-purple-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-200">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black text-slate-900 tracking-tight block leading-none">
              Studentica.
            </span>
            <span className="text-[11px] font-semibold text-purple-600 tracking-wide">
              Campus Concierge
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <Link href="/" className="text-purple-600 font-bold border-b-2 border-purple-600 pb-1">
            Home
          </Link>
          <Link href="/services" className="hover:text-purple-600 transition-colors">
            Services
          </Link>
          <Link href="/pass" className="hover:text-purple-600 transition-colors">
            Fresher Pass
          </Link>
          <Link href="/roommate" className="hover:text-purple-600 transition-colors">
            Roommate Finder
          </Link>
          <Link href="#about" className="hover:text-purple-600 transition-colors">
            About
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="p-2 text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition"
          >
            <Search className="w-5 h-5" />
          </button>
          <Link
            href="/login"
            className="px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-xl transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-xl shadow-md shadow-purple-200 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}