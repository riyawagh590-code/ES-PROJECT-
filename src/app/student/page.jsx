"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Home,
  LayoutGrid,
  CalendarDays,
  Bell,
  User,
  Search,
  LayoutDashboard,
  Wallet,
  Headphones,
  Settings,
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
  Coffee,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export default function StudentDashboardPage() {
  const [searchVal, setSearchVal] = useState("");

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/student", active: true },
    { label: "My Bookings", icon: CalendarDays, href: "/bookings", active: false },
    { label: "Wallet", icon: Wallet, href: "/student/wallet", active: false },
    { label: "Support", icon: Headphones, href: "/support", active: false },
    { label: "Settings", icon: Settings, href: "/student/settings", active: false },
  ];

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
      href: "/student/roommates",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FD] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
      {/* 1. TOP HEADER */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-purple-50 px-6 h-20 flex items-center justify-between">
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

        {/* Right Search & Profile */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-2 bg-slate-100/80 rounded-xl w-60 border border-slate-200/50">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search services, amenities..."
              className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <button className="relative p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition">
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink-500 text-[9px] font-black text-white flex items-center justify-center">
              3
            </span>
          </button>

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

      <div className="flex w-full">
        {/* 2. LEFT SIDEBAR */}
        <aside className="w-56 bg-white border-r border-slate-100 hidden md:flex flex-col justify-between py-6 px-4 shrink-0 min-h-[calc(100vh-80px)]">
          <div className="space-y-1.5">
            {menuItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                    item.active
                      ? "bg-purple-50 text-[#6C47FF] shadow-sm shadow-purple-100"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${item.active ? "text-[#6C47FF]" : "text-slate-400"}`} />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="relative pt-6 border-t border-slate-100 text-center">
            <div className="mb-2 text-[#4F46E5] font-bold text-[11px] leading-tight rotate-[-4deg] pointer-events-none select-none">
              Happy <br />
              Campus Life <br />
              Starts Here!
              <div className="text-sm mt-0.5">☺ ✦</div>
            </div>

            <div className="w-full h-36 rounded-2xl overflow-hidden bg-gradient-to-t from-purple-100 via-pink-50 to-transparent flex items-end justify-center p-2">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&auto=format&fit=crop&q=80"
                alt="Campus Clocktower"
                className="w-full h-32 object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </aside>

        {/* 3. MAIN DASHBOARD CONTENT */}
        <main className="flex-1 p-6 md:p-8 space-y-8 overflow-y-auto">
          {/* Top Row: Hero Banner & Right Greeting Card */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            {/* Banner (8 Cols) */}
            <div className="xl:col-span-8 relative bg-gradient-to-r from-[#203a74] via-[#2a5298] to-[#1e3c72] rounded-[32px] overflow-hidden p-8 md:p-10 text-white shadow-xl shadow-blue-900/10 min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=80"
                  alt="Campus Background"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Student cutout on banner */}
              <div className="absolute bottom-0 right-4 md:right-8 w-[220px] md:w-[280px] h-[92%] hidden sm:block pointer-events-none z-10">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80"
                  alt="Student smiling"
                  className="w-full h-full object-cover object-top rounded-t-[32px]"
                />
                <div className="absolute top-8 -left-12 rotate-[-8deg] text-xs font-bold text-pink-200">
                  Better Services <br /> Bigger Smiles ッ
                </div>
              </div>

              <div className="relative z-20 space-y-4 max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white">
                  <span>Welcome Back, Riya! 👋</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Your Campus Life, <br />
                  <span className="text-[#FF4DB8]">Our Priority!</span>
                </h1>

                <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-sm">
                  Explore and access all essential services designed to make your campus experience easier, safer and better.
                </p>
              </div>

              <div className="relative z-20 flex flex-wrap items-center gap-3 pt-6">
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
            <div className="xl:col-span-4 space-y-4">
              <div className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-[32px] p-6 text-white shadow-xl shadow-indigo-500/10">
                <div className="mb-4">
                  <h3 className="text-base font-extrabold flex items-center gap-1.5">
                    Good Morning, Riya! ☀️
                  </h3>
                  <p className="text-xs text-white/70">Keep going, you're doing great!</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white rounded-2xl p-3.5 text-slate-800">
                    <div className="flex items-center gap-2 text-indigo-600 mb-1">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 block leading-none">2</span>
                    <span className="text-[10px] text-slate-500 font-bold">Upcoming Bookings</span>
                  </div>

                  <div className="bg-white rounded-2xl p-3.5 text-slate-800">
                    <div className="flex items-center gap-2 text-amber-500 mb-1">
                      <Star className="w-4 h-4 fill-amber-500" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 block leading-none">₹450</span>
                    <span className="text-[10px] text-slate-500 font-bold">Wallet Balance</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 flex items-center justify-between text-xs cursor-pointer hover:bg-white/20 transition">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center">
                      <Headphones className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold leading-tight">Need help?</p>
                      <p className="text-[10px] text-white/70">Our support team is always here for you.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/80" />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: Services Grid (8 Cols) & Quick Links (4 Cols) */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            {/* Services Grid (8 Cols) */}
            <div className="xl:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#6C47FF]" />
                    Our Services
                  </h2>
                  <p className="text-xs text-slate-400">Everything you need, all in one place.</p>
                </div>
                <Link
                  href="/student/services"
                  className="px-4 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-[#6C47FF] hover:bg-white flex items-center gap-1 transition"
                >
                  View All Services <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* 6 Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-3xl p-3.5 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-3">
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
                            className={`absolute -bottom-3 left-4 w-9 h-9 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-md`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <div className="pt-2 px-1">
                          <h3 className="text-sm font-extrabold text-slate-900">{item.title}</h3>
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
                          <span className="text-xs font-black text-slate-900">{item.price}</span>
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

            {/* Quick Links & Promos (4 Cols) */}
            <div className="xl:col-span-4 space-y-4">
              <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900">Quick Links</h3>

                <div className="space-y-2">
                  <Link
                    href="/student/services"
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#6C47FF] flex items-center justify-center">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">Book a Service</p>
                        <p className="text-[10px] text-slate-400">Mess, Laundry, Cleaning & more</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/map"
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">Campus Map</p>
                        <p className="text-[10px] text-slate-400">Find services near you</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/support"
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                        <Headphones className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">Help & Support</p>
                        <p className="text-[10px] text-slate-400">Get assistance, 24/7</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Small Steps Big Dreams Card */}
              <div className="relative rounded-3xl overflow-hidden p-5 bg-[#FFF4EE] border border-orange-100 shadow-sm flex flex-col justify-between min-h-[140px]">
                <div className="relative z-10 space-y-1">
                  <div className="text-[11px] font-bold text-indigo-600 -rotate-2">
                    Small Steps <br /> Big Dreams ↗
                  </div>
                  <h4 className="text-sm font-black text-slate-900 leading-tight pt-1">
                    Make the most of your <br /> campus life!
                  </h4>
                </div>
                <div className="relative z-10 flex items-center justify-between pt-3">
                  <span className="text-[10px] text-slate-500 font-semibold">Explore. Book. Enjoy.</span>
                  <Link
                    href="/student/services"
                    className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 hover:bg-[#6C47FF] hover:text-white transition"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Need Help Support Banner */}
              <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#6C47FF] shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 leading-tight">Need Help?</h5>
                    <p className="text-[10px] text-slate-400">Our support team is just a click away.</p>
                  </div>
                </div>
                <Link
                  href="/support"
                  className="px-3.5 py-1.5 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-[11px] font-bold transition shadow-sm shrink-0"
                >
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>

          {/* 4. BOTTOM STATS BAR */}
          <div className="bg-white border border-slate-100 rounded-3xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 shadow-sm">
            <div className="flex items-center gap-3.5 justify-center">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#6C47FF] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 leading-tight">5+</h4>
                <p className="text-[10px] font-bold text-slate-400">Campus Services</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center pt-3 md:pt-0">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 leading-tight">24/7</h4>
                <p className="text-[10px] font-bold text-slate-400">Service Availability</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center pt-3 md:pt-0">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 leading-tight">100%</h4>
                <p className="text-[10px] font-bold text-slate-400">Student Verified</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center pt-3 md:pt-0">
              <div className="text-center font-bold text-[11px] text-[#4F46E5] rotate-[-2deg]">
                Your comfort <br />
                Our Service ッ
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}