"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Search,
  CheckCircle2,
  MapPin,
  Users,
  ArrowRight,
  LogIn,
  UtensilsCrossed,
  ShoppingBag,
  Sparkle,
  Home,
  Calendar,
  Crown,
} from "lucide-react";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-white pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Search & Value Props */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Campus Concierge
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
            Your campus life, <br />
            <span className="text-purple-600">sorted.</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-lg leading-relaxed">
            Find trusted messes, laundry, room cleaning, PGs, cafes and roommates — all from one simple student platform.
          </p>

          {/* Search Bar */}
          <div className="p-2 bg-white rounded-2xl shadow-xl shadow-purple-500/5 border border-purple-100 flex items-center gap-3">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What do you need around campus?"
              className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
            />
            <Link
              href={`/services?q=${encodeURIComponent(searchQuery)}`}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-xl flex items-center gap-2 transition shadow-md shadow-purple-200 shrink-0"
            >
              Explore
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust Value Badges */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">Verified services</p>
                <p className="text-slate-500">Trusted & safe</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">Near campus</p>
                <p className="text-slate-500">Convenient & quick</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">Student-rated</p>
                <p className="text-slate-500">Real reviews</p>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <Link
              href="/register"
              className="px-7 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-purple-200 flex items-center gap-2 transition"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/login"
              className="px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-xl border border-slate-200 flex items-center gap-2 transition"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
          </div>
        </div>

        {/* Right Column: Hero SVG + Floating Concierge Widget */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          {/* Main Card displaying hero-campus.svg */}
          <div className="relative w-[340px] sm:w-[390px] h-[480px] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/images/hero-campus.svg"
              alt="Student Life Campus Concierge"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating UI Widget */}
          <div className="absolute -bottom-6 -right-2 sm:right-2 md:right-6 w-[290px] bg-white rounded-3xl p-5 shadow-2xl border border-purple-50 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Campus Concierge
                </p>
                <h4 className="text-sm font-extrabold text-slate-900">
                  What do you need today?
                </h4>
              </div>
              <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </span>
            </div>

            {/* 2x2 Services Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              <Link
                href="/student/mess"
                className="bg-orange-50/70 hover:bg-orange-100/70 p-3 rounded-2xl border border-orange-100 transition"
              >
                <UtensilsCrossed className="w-5 h-5 text-orange-600 mb-1" />
                <p className="text-xs font-bold text-slate-900">Mess</p>
                <p className="text-[10px] text-slate-500">From ₹2,600/mo</p>
              </Link>

              <Link
                href="/student/laundry"
                className="bg-sky-50/70 hover:bg-sky-100/70 p-3 rounded-2xl border border-sky-100 transition"
              >
                <ShoppingBag className="w-5 h-5 text-sky-600 mb-1" />
                <p className="text-xs font-bold text-slate-900">Laundry</p>
                <p className="text-[10px] text-slate-500">From ₹60/load</p>
              </Link>

              <Link
                href="/student/cleaning"
                className="bg-emerald-50/70 hover:bg-emerald-100/70 p-3 rounded-2xl border border-emerald-100 transition"
              >
                <Sparkle className="w-5 h-5 text-emerald-600 mb-1" />
                <p className="text-xs font-bold text-slate-900">Cleaning</p>
                <p className="text-[10px] text-slate-500">From ₹150/room</p>
              </Link>

              <Link
                href="/student/pg"
                className="bg-purple-50/70 hover:bg-purple-100/70 p-3 rounded-2xl border border-purple-100 transition"
              >
                <Home className="w-5 h-5 text-purple-600 mb-1" />
                <p className="text-xs font-bold text-slate-900">PGs & Hostels</p>
                <p className="text-[10px] text-slate-500">Safe stays</p>
              </Link>
            </div>

            {/* Upcoming Booking Pill */}
            <Link
              href="/bookings"
              className="bg-purple-50 hover:bg-purple-100/80 p-3 rounded-2xl flex items-center justify-between border border-purple-100 transition"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-900 leading-tight">
                    Weekend Room Cleaning
                  </p>
                  <p className="text-[10px] text-slate-500">Sat, 11:30 AM • ₹200</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-purple-600" />
            </Link>

            {/* Fresher Pass Pill */}
            <Link
              href="/pass"
              className="bg-slate-950 hover:bg-slate-900 text-white px-4 py-2.5 rounded-2xl flex items-center justify-between shadow-lg transition"
            >
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-400" />
                <span className="text-[11px] font-bold uppercase tracking-wide">
                  Fresher Pass
                </span>
              </div>
              <span className="text-xs font-extrabold text-amber-400">
                ₹199/month
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}