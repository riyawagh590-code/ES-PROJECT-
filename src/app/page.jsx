"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Search,
  Sparkles,
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
  Shirt,
  Coffee,
  UserCheck,
  Clock,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const serviceCategories = [
    {
      title: "Mess",
      desc: "Hygienic & affordable meal plans",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop",
      icon: UtensilsCrossed,
      color: "bg-orange-500 text-white",
      href: "/student/mess",
    },
    {
      title: "Laundry",
      desc: "Clean clothes, less stress",
      img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&auto=format&fit=crop",
      icon: Shirt,
      color: "bg-sky-500 text-white",
      href: "/student/laundry",
    },
    {
      title: "Cleaning",
      desc: "A cleaner space, a better you",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop",
      icon: Sparkles,
      color: "bg-emerald-500 text-white",
      href: "/student/cleaning",
    },
    {
      title: "PGs & Hostels",
      desc: "Safe & verified stays",
      img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop",
      icon: Home,
      color: "bg-purple-600 text-white",
      href: "/student/pg",
    },
    {
      title: "Cafes & Restaurants",
      desc: "Great food, close by",
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop",
      icon: Coffee,
      color: "bg-amber-500 text-white",
      href: "/student/cafes",
    },
    {
      title: "Roommate Finder",
      desc: "Find your perfect match",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop",
      icon: UserCheck,
      color: "bg-indigo-600 text-white",
      href: "/student/roommates",
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf9fc] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
      {/* 1. TOP NAVBAR */}
      <nav className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-purple-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
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

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16">
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

            {/* Hyperlocal Search Bar */}
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

            {/* Value Props */}
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

            {/* Action CTAs */}
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

          {/* Right Column: Exact Mockup Graphic + Live Concierge Widget */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Student Photo Card with CSS Illustration Match */}
            <div className="relative">
              {/* Top-Right Doodles */}
              <div className="absolute -top-10 -right-2 hidden sm:flex flex-col items-center rotate-3 pointer-events-none z-10">
                <span className="text-xs font-bold text-indigo-600 tracking-tight">
                  Better Services
                </span>
                <span className="text-xs font-bold text-indigo-600 tracking-tight">
                  Bigger Smiles ッ
                </span>
                <span className="text-purple-400 text-lg leading-none mt-0.5">⤹</span>
              </div>

              <div className="absolute -top-6 -left-6 text-purple-400 font-black text-2xl rotate-[-20deg] pointer-events-none select-none">
                ✦
              </div>

              {/* Exact Photo Container */}
              <div className="relative w-[320px] sm:w-[390px] h-[460px] sm:h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-[5px] border-white bg-[#efe8fd]">
                {/* Fallback resilient image loader */}
                <picture>
                  <source
                    srcSet="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
                    type="image/jpeg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
                    alt="Student smiling holding notebooks"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </picture>
              </div>
            </div>

            {/* Floating Live Widget */}
            <div className="absolute -bottom-6 -right-2 sm:right-2 md:right-4 w-[285px] bg-white rounded-3xl p-5 shadow-2xl border border-purple-50 space-y-4 z-20">
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

              {/* 2x2 Services */}
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

              {/* Booking Pill */}
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

      {/* 3. EXPLORE SERVICES CARDS & METRIC HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <span className="text-xs font-extrabold uppercase text-purple-600 tracking-wider">
            Explore Services
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 mt-1">
            Everything you need, <br />
            all in one place.
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            From food to friends, we&apos;ve got your campus life covered.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {serviceCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group bg-white rounded-3xl p-3 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-9 h-9 rounded-xl ${item.color} flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-extrabold text-slate-900 text-sm mt-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-tight mb-2">
                  {item.desc}
                </p>
              </Link>
            );
          })}
        </div>

        {/* 4 Bottom Metric Highlights */}
        <div className="mt-12 bg-purple-50/70 border border-purple-100 rounded-3xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-purple-200/60">
          <div className="flex items-center gap-4 justify-center">
            <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900">5+</h4>
              <p className="text-xs font-semibold text-slate-500">Campus Services</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center pt-4 md:pt-0">
            <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900">24/7</h4>
              <p className="text-xs font-semibold text-slate-500">Digital Access</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center pt-4 md:pt-0">
            <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center">
              <IndianRupee className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900">₹199</h4>
              <p className="text-xs font-semibold text-slate-500">Fresher Pass Starts</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center pt-4 md:pt-0">
            <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900">100%</h4>
              <p className="text-xs font-semibold text-slate-500">Student Focused</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}