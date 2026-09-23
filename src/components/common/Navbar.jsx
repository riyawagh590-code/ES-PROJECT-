"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Search } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/student/services" },
    { label: "Fresher Pass", href: "/pass" },
    { label: "Profile", href: "/student/profile" },
    { label: "Vendors", href: "/vendors" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-purple-50 px-6 h-20 flex items-center justify-between">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-[#6C47FF] flex items-center justify-center text-white shadow-md shadow-purple-200">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xl font-black text-slate-900 tracking-tight block leading-none">
            Studentica.
          </span>
          <span className="text-[10px] font-bold text-[#6C47FF] tracking-wide uppercase">
            Campus Concierge
          </span>
        </div>
      </Link>

      {/* Center Nav Links */}
      <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-600">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname?.startsWith(link.href));

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors py-1 ${
                isActive
                  ? "text-[#6C47FF] font-extrabold border-b-2 border-[#6C47FF]"
                  : "hover:text-[#6C47FF]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Right Controls: Search, Login, Get Started */}
      <div className="flex items-center gap-3">
        <button
          aria-label="Search"
          className="p-2 text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition"
        >
          <Search className="w-4 h-4" />
        </button>

        <Link
          href="/login"
          className="px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-xl transition bg-white"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="px-5 py-2.5 text-xs font-bold text-white bg-[#6C47FF] hover:bg-[#5835e5] rounded-xl shadow-md shadow-purple-200 transition"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}