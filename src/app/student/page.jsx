"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Home,
  CalendarDays,
  Bell,
  User,
  Search,
  Headphones,
  ShieldCheck,
  Zap,
  Users,
  Calendar,
  Star,
  ChevronRight,
  MapPin,
  UtensilsCrossed,
  Shirt,
  Sparkle,
  Sparkles,
  Coffee,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export default function StudentDashboardPage() {
  const [searchVal, setSearchVal] = useState("");
  const [studentName, setStudentName] = useState("Student");
  const [activeBookingsCount, setActiveBookingsCount] = useState(2);

  const loadUserData = useCallback(() => {
    try {
      const stored =
        localStorage.getItem("current_user") ||
        localStorage.getItem("currentUser") ||
        localStorage.getItem("currentStudent") ||
        localStorage.getItem("campusConciergeLoggedIn");

      if (stored) {
        const parsed = JSON.parse(stored);
        const name = parsed.fullName || parsed.name || parsed.username || "";
        if (name && name.trim()) {
          setStudentName(name.trim().split(" ")[0]);
        }
      }

      const storedBookings = JSON.parse(
        localStorage.getItem("student_bookings") || "[]"
      );
      if (storedBookings && storedBookings.length > 0) {
        setActiveBookingsCount(storedBookings.length);
      }
    } catch (e) {
      console.error("Error loading student session:", e);
    }
  }, []);

  useEffect(() => {
    loadUserData();
    window.addEventListener("storage", loadUserData);
    window.addEventListener("focus", loadUserData);

    return () => {
      window.removeEventListener("storage", loadUserData);
      window.removeEventListener("focus", loadUserData);
    };
  }, [loadUserData]);

  const services = [
    {
      title: "Mess & Meals",
      desc: "Hygienic & tasty meals, verified mess providers, monthly plans.",
      price: "₹1200/month",
      btnText: "Book Now",
      btnColor: "bg-[#FF5A1F] hover:bg-[#e04a14]",
      badge: "Popular",
      badgeColor: "bg-[#FF2E93] text-white",
      icon: UtensilsCrossed,
      iconBg: "bg-[#FF5A1F] text-white",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
      href: "/student/mess",
    },
    {
      title: "Laundry",
      desc: "Clean clothes, fresh you. Pickup & delivery available.",
      price: "₹80/bag",
      btnText: "Book Now",
      btnColor: "bg-[#2563EB] hover:bg-[#1d4ed8]",
      badge: "Convenient",
      badgeColor: "bg-[#0EA5E9] text-white",
      icon: Shirt,
      iconBg: "bg-[#0EA5E9] text-white",
      img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&auto=format&fit=crop&q=80",
      href: "/student/laundry",
    },
    {
      title: "Room Cleaning",
      desc: "Keep your space fresh & clean with our professional team.",
      price: "₹200/visit",
      btnText: "Book Now",
      btnColor: "bg-[#6C47FF] hover:bg-[#5835e5]",
      badge: "Hassle Free",
      badgeColor: "bg-[#7C3AED] text-white",
      icon: Sparkle,
      iconBg: "bg-[#8B5CF6] text-white",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80",
      href: "/student/cleaning",
    },
    {
      title: "PG & Housing",
      desc: "Verified PGs, hostels and rental rooms near your campus.",
      price: "₹4500/month",
      btnText: "Explore",
      btnColor: "bg-[#059669] hover:bg-[#047857]",
      badge: "Verified",
      badgeColor: "bg-[#10B981] text-white",
      icon: Home,
      iconBg: "bg-[#10B981] text-white",
      img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80",
      href: "/student/pg",
    },
    {
      title: "Café Perks",
      desc: "Student discounts at your favourite cafes and restaurants.",
      price: "60% Off",
      pricePrefix: "Up to",
      btnText: "Explore",
      btnColor: "bg-[#EAB308] hover:bg-[#ca8a04]",
      badge: "Special Offers",
      badgeColor: "bg-[#F59E0B] text-white",
      icon: Coffee,
      iconBg: "bg-[#F59E0B] text-white",
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80",
      href: "/student/cafes",
    },
    {
      title: "Roommate Finder",
      desc: "Find compatible roommates based on your lifestyle.",
      price: "",
      btnText: "Find Now",
      btnColor: "bg-[#E11D48] hover:bg-[#be123c]",
      badge: "Trending",
      badgeColor: "bg-[#F43F5E] text-white",
      icon: UserCheck,
      iconBg: "bg-[#F43F5E] text-white",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
      href: "/student/roomates",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FD] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700 flex flex-col">
      {/* 1. TOP HEADER */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-purple-50 px-6 sm:px-8 h-20 flex items-center justify-between">
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

        {/* Center Nav Tabs */}
        <nav className="hidden md:flex items-center gap-2 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/50">
          <Link
            href="/student"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#6C47FF] shadow-sm transition"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <Link
            href="/student/bookings"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
          >
            <CalendarDays className="w-4 h-4" />
            My Bookings
          </Link>
          <Link
            href="/pass"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            Freshers Pass
          </Link>
          <Link
            href="/student/profile"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
          >
            <User className="w-4 h-4" />
            Profile
          </Link>
        </nav>

        {/* Right Search & Profile */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-2 bg-slate-100/80 rounded-xl w-60 border border-slate-200/50">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search services, amenities..."
              suppressHydrationWarning
              data-lpignore="true"
              autoComplete="off"
              className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <button
            type="button"
            suppressHydrationWarning
            className="relative p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink-500 text-[9px] font-black text-white flex items-center justify-center">
              3
            </span>
          </button>

          <Link
            href="/student/profile"
            className="flex items-center gap-3 pl-2 border-l border-slate-200 hover:opacity-85 transition"
          >
            <div className="w-9 h-9 rounded-full bg-purple-100 text-[#6C47FF] font-black text-xs flex items-center justify-center ring-2 ring-purple-200">
              {studentName ? studentName.charAt(0).toUpperCase() : "S"}
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-slate-900 leading-tight">
                Hi, {studentName}!
              </p>
              <p className="text-[10px] text-slate-400 font-medium">Student</p>
            </div>
          </Link>
        </div>
      </header>

      {/* BODY WRAPPER */}
      <div className="flex flex-1 w-full max-w-[1500px] mx-auto">
        <main className="flex-1 min-w-0 p-6 md:p-8 space-y-7">
          {/* Top Row: Hero Banner & Right Greeting Card */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
            {/* Banner (8 Cols) */}
            <div className="xl:col-span-8 relative bg-gradient-to-r from-[#203a74] via-[#2a5298] to-[#1e3c72] rounded-[32px] overflow-hidden p-7 md:p-9 text-white shadow-xl shadow-blue-900/10 min-h-[260px] flex flex-col justify-between">
              <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=80"
                  alt="Campus Background"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Student cutout on banner */}
              <div className="absolute bottom-0 right-4 md:right-8 w-[200px] md:w-[250px] h-[92%] hidden sm:block pointer-events-none z-10">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80"
                  alt="Student smiling"
                  className="w-full h-full object-cover object-top rounded-t-[32px]"
                />
                <div className="absolute top-6 -left-10 rotate-[-8deg] text-xs font-bold text-pink-200">
                  Better Services <br /> Bigger Smiles ッ
                </div>
              </div>

              <div className="relative z-20 space-y-3 max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white">
                  <span>Welcome Back, {studentName}! 👋</span>
                </div>

                <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
                  Your Campus Life, <br />
                  <span className="text-[#FF4DB8]">Our Priority!</span>
                </h1>

                <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-sm">
                  Explore and access all essential services designed to make
                  your campus experience easier, safer and better.
                </p>
              </div>

              <div className="relative z-20 flex flex-wrap items-center gap-2.5 pt-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-400/30 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  Trusted Services
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 backdrop-blur-md text-purple-200 border border-purple-400/30 text-xs font-semibold">
                  <Zap className="w-4 h-4" />
                  Quick Access
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 backdrop-blur-md text-cyan-200 border border-cyan-400/30 text-xs font-semibold">
                  <Users className="w-4 h-4" />
                  Student Focused
                </div>
              </div>
            </div>

            {/* Right Side Column (4 Cols) */}
            <div className="xl:col-span-4 flex flex-col justify-between">
              <div className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-[32px] p-6 text-white shadow-xl shadow-indigo-500/10 h-full flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-extrabold flex items-center gap-1.5">
                    Good Morning, {studentName}! ☀️
                  </h3>
                  <p className="text-xs text-white/70">
                    Keep going, you&apos;re doing great!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-2xl p-3.5 text-slate-800">
                    <div className="flex items-center gap-2 text-indigo-600 mb-1">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 block leading-none">
                      {activeBookingsCount}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold">
                      Upcoming Bookings
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl p-3.5 text-slate-800">
                    <div className="flex items-center gap-2 text-amber-500 mb-1">
                      <Star className="w-4 h-4 fill-amber-500" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 block leading-none">
                      ₹450
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold">
                      Wallet Balance
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 flex items-center justify-between text-xs cursor-pointer hover:bg-white/20 transition">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center">
                      <Headphones className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold leading-tight">Need help?</p>
                      <p className="text-[10px] text-white/70">
                        Our support team is always here for you.
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/80" />
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#6C47FF]" />
                  Our Services
                </h2>
                <p className="text-xs text-slate-400">
                  Everything you need, all in one place.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-3.5 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-3">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span
                          className={`absolute top-2.5 right-2.5 text-[10px] font-black px-2.5 py-0.5 rounded-full ${item.badgeColor} shadow-sm`}
                        >
                          {item.badge}
                        </span>
                        <div
                          className={`absolute -bottom-2.5 left-3.5 w-8 h-8 rounded-xl ${item.iconBg} flex items-center justify-center shadow-md`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="pt-2 px-1">
                        <h3 className="text-sm font-extrabold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 px-1 flex items-center justify-between border-t border-slate-50 mt-3">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold leading-tight">
                          {item.pricePrefix || "From"}
                        </span>
                        <span className="text-xs font-black text-slate-900">
                          {item.price}
                        </span>
                      </div>
                      <Link
                        href={item.href}
                        className={`px-4 py-1.5 rounded-xl text-white text-xs font-bold transition shadow-sm ${item.btnColor}`}
                      >
                        {item.btnText} →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}