"use client";

import Link from "next/link";
import { Menu, X, UserRound } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5dddd] bg-[#fffdfd]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-[#514b55] transition hover:text-[#7357d9]"
          >
            Home
          </Link>

          <Link
            href="/student/services"
            className="text-sm font-semibold text-[#514b55] transition hover:text-[#7357d9]"
          >
            Services
          </Link>

          <Link
            href="/pass"
            className="text-sm font-semibold text-[#514b55] transition hover:text-[#7357d9]"
          >
            Fresher Pass
          </Link>

          <Link
            href="/roomate"
            className="text-sm font-semibold text-[#514b55] transition hover:text-[#7357d9]"
          >
            Find Roommate
          </Link>

          <Link
            href="/vendor"
            className="text-sm font-semibold text-[#514b55] transition hover:text-[#7357d9]"
          >
            For Vendors
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login">
            <button className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-[#424b55] hover:bg-[#f4f0f0]">
              <UserRound size={17} />
              Login
            </button>
          </Link>

          <Link href="/register">
            <Button variant="purple">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-[#ddd4d4] p-2 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-[#e5dddd] bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link
              href="/student/services"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>

            <Link href="/pass" onClick={() => setOpen(false)}>
              Fresher Pass
            </Link>

            <Link href="/roomate" onClick={() => setOpen(false)}>
              Find Roommate
            </Link>

            <Link href="/vendor" onClick={() => setOpen(false)}>
              For Vendors
            </Link>

            <hr />

            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>

            <Link href="/register" onClick={() => setOpen(false)}>
              <Button className="w-full" variant="purple">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}