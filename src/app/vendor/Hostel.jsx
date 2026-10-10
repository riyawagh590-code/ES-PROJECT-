"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  LayoutDashboard,
  Calendar,
  BedDouble,
  Users,
  Star,
  Tag,
  BarChart3,
  Settings,
  Search,
  Bell,
  ChevronDown,
  MapPin,
  Phone,
  ShieldCheck,
  Utensils,
  Wifi,
  Headphones,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  MessageCircle,
  Eye,
  Percent,
} from "lucide-react";

export default function HostelVendorDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sidebarLinks = [
    { label: "Dashboard", icon: LayoutDashboard, href: "#", active: true },
    { label: "Bookings", icon: Calendar, href: "#", badge: "12" },
    { label: "Rooms & Availability", icon: BedDouble, href: "#" },
    { label: "Student Details", icon: Users, href: "#" },
    { label: "Reviews & Ratings", icon: Star, href: "#" },
    { label: "Offers & Discounts", icon: Tag, href: "#" },
    { label: "Reports", icon: BarChart3, href: "#" },
    { label: "Settings", icon: Settings, href: "#" },
  ];

  const recentBookings = [
    {
      id: "#BKG1024",
      studentName: "Sneha Patil",
      roomNo: "Room 101",
      checkIn: "15 Sep 2026",
      status: "Confirmed",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: "#BKG1023",
      studentName: "Aditi Shinde",
      roomNo: "Room 203",
      checkIn: "14 Sep 2026",
      status: "Confirmed",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: "#BKG1022",
      studentName: "Pooja Deshmukh",
      roomNo: "Room 105",
      checkIn: "12 Sep 2026",
      status: "Pending",
      statusStyle: "bg-amber-50 text-amber-600 border border-amber-200",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: "#BKG1021",
      studentName: "Rutuja Kale",
      roomNo: "Room 207",
      checkIn: "10 Sep 2026",
      status: "Confirmed",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: "#BKG1020",
      studentName: "Vaishnavi More",
      roomNo: "Room 101",
      checkIn: "08 Sep 2026",
      status: "Checked Out",
      statusStyle: "bg-purple-50 text-[#6C47FF] border border-purple-200",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    },
  ];

  const topRatedFeatures = [
    { title: "Clean & Hygienic Rooms", score: "4.8", icon: "🧼" },
    { title: "Homely Food", score: "4.6", icon: "🍲" },
    { title: "Wi-Fi Connectivity", score: "4.5", icon: "📶" },
    { title: "24/7 Security", score: "4.7", icon: "🛡️" },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#F5F4FE] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#E11D74] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F6FE] text-slate-900 font-sans flex antialiased" suppressHydrationWarning>
      {/* ================= 1. LEFT SIDEBAR ================= */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#140E36] text-white shrink-0 sticky top-0 h-screen justify-between p-5 z-40 overflow-y-auto">
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-2xl bg-[#E11D74] flex items-center justify-center text-white shadow-lg shadow-pink-900/50">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-tight leading-tight">HostelHub</h2>
              <p className="text-[10px] text-pink-300 font-medium">Vendor Portal</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {sidebarLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                    item.active
                      ? "bg-[#E11D74] text-white shadow-md shadow-pink-900/40"
                      : "text-purple-200/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bed Artwork & Help Section */}
        <div className="pt-4 space-y-4">
          <div className="text-center space-y-2">
            <p className="text-xs font-black text-pink-400 rotate-[-6deg]">
              Safe Stay, <br /> Bright Future ♡
            </p>
            <div className="w-24 h-24 mx-auto rounded-2xl bg-white/10 p-2 border border-white/10 flex items-center justify-center overflow-hidden shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&auto=format&fit=crop&q=80"
                alt="Cozy Hostel Bed"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="rounded-2xl p-3.5 bg-white/5 border border-white/10 space-y-2 text-center">
            <div className="flex items-center justify-center gap-2 text-purple-200 text-xs font-bold">
              <MessageCircle className="w-4 h-4 text-[#E11D74]" />
              <span>Need Help?</span>
            </div>
            <p className="text-[10px] text-purple-300/70">Chat with us</p>
            <button
              suppressHydrationWarning
              className="w-full py-2 rounded-xl bg-[#E11D74] hover:bg-[#c21461] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Live Chat
            </button>
          </div>
        </div>
      </aside>

      {/* ================= 2. MAIN CONTENT ================= */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-purple-100/60 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200/70 rounded-2xl w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search students, bookings, rooms..."
              suppressHydrationWarning
              className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              suppressHydrationWarning
              className="relative p-2.5 rounded-2xl bg-slate-50 text-slate-600 hover:text-slate-900 transition border border-slate-200/60"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[9px] font-black text-white flex items-center justify-center">
                9
              </span>
            </button>

            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80"
                alt="Rohit Sharma"
                className="w-10 h-10 rounded-2xl object-cover ring-2 ring-pink-100"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-black text-slate-900 leading-tight">Rohit Sharma</p>
                <p className="text-[10px] text-slate-400 font-semibold">Hostel Owner</p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="p-6 sm:p-8 space-y-6 max-w-7xl w-full mx-auto">
          {/* Top Row: Manas Girls Hostel Hero Banner & Special Offer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Manas Girls Hostel Hero */}
            <div className="lg:col-span-9 relative rounded-[32px] bg-gradient-to-r from-[#FFF6E9] via-[#FFEED7] to-[#FCE6CB] p-6 sm:p-7 border border-orange-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
              <div className="flex items-center gap-5 z-10">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-4 border-white shadow-md bg-[#1B173E] flex flex-col items-center justify-center text-center p-2 text-white shrink-0">
                  <span className="text-xl">🪷</span>
                  <span className="text-xs font-black tracking-tight leading-tight mt-1">MANAS</span>
                  <span className="text-[8px] text-pink-300 font-semibold tracking-wider">Girls Hostel</span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight flex items-center gap-2">
                    Manas
                    <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] font-bold">
                      ✓
                    </span>
                  </h1>

                  <p className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E11D74]" />
                    Near gajanan maharaj mandir
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-700 pt-0.5">
                    <span className="text-amber-500 font-black flex items-center gap-1">
                      ★ 4.3 <span className="text-slate-400 font-normal">(48 reviews)</span>
                    </span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded-full bg-pink-100 text-[#E11D74] font-black text-[10px]">
                      👤 Girls
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-bold text-slate-600">
                      <Phone className="w-3 h-3 text-slate-400" /> 9511880533
                    </span>
                  </div>

                  {/* Feature Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 text-[10px] font-bold text-slate-700">
                    <span className="px-2.5 py-1 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-1">
                      🛡️ Safe & Secure
                    </span>
                    <span className="px-2.5 py-1 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-1">
                      🍲 Hygienic Food
                    </span>
                    <span className="px-2.5 py-1 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-1">
                      📶 Wi-Fi
                    </span>
                    <span className="px-2.5 py-1 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-1">
                      🎧 24/7 Support
                    </span>
                  </div>
                </div>
              </div>

              {/* Building Facade Graphic */}
              <div className="relative z-10 w-48 h-32 sm:w-56 sm:h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-white shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80"
                  alt="Manas Girls Hostel Building"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Doodle Note */}
              <div className="absolute top-4 right-1/3 text-pink-600 text-[11px] font-black rotate-[-6deg] hidden xl:block select-none pointer-events-none">
                More than <br /> just a stay <br /> it's a home ♡
              </div>
            </div>

            {/* Special Offer Pink/Purple Card */}
            <div className="lg:col-span-3 rounded-[32px] bg-gradient-to-br from-[#FF4E98] via-[#CF36A2] to-[#7135F2] p-6 text-white shadow-xl flex flex-col justify-between text-center relative overflow-hidden">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-white/20 mx-auto flex items-center justify-center text-xl shadow-inner">
                  👑
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/80">
                  Special Offer
                </span>
                <h3 className="text-2xl font-black tracking-tight">10% OFF</h3>
                <p className="text-xs text-white/90">on first month rent</p>
              </div>

              <button
                suppressHydrationWarning
                className="w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-black flex items-center justify-center gap-1.5 transition border border-white/20 mt-4 backdrop-blur-sm"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 5 Key Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Total Bookings */}
            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-pink-500">👥</span> Total Bookings
              </p>
              <h3 className="text-2xl font-black text-slate-950">32</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 18% <span className="text-slate-400 font-medium">vs last month</span>
              </p>
            </div>

            {/* Occupied Rooms */}
            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-purple-500">🛏️</span> Occupied Rooms
              </p>
              <h3 className="text-2xl font-black text-slate-950">26</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 12% <span className="text-slate-400 font-medium">vs last month</span>
              </p>
            </div>

            {/* Available Rooms */}
            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-emerald-500">🛏️</span> Available Rooms
              </p>
              <h3 className="text-2xl font-black text-slate-950">6</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 33% <span className="text-slate-400 font-medium">vs last month</span>
              </p>
            </div>

            {/* Monthly Revenue */}
            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-orange-500">₹</span> Monthly Revenue
              </p>
              <h3 className="text-2xl font-black text-slate-950">₹1,92,000</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 20% <span className="text-slate-400 font-medium">vs last month</span>
              </p>
            </div>

            {/* Average Rating */}
            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1 col-span-2 md:col-span-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-blue-500">🎖️</span> Average Rating
              </p>
              <h3 className="text-2xl font-black text-slate-950">4.3</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 5% <span className="text-slate-400 font-medium">vs last month</span>
              </p>
            </div>
          </div>

          {/* Lower Grid: Recent Bookings + Room Occupancy + Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT 6 COLS: RECENT BOOKINGS TABLE */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                <div>
                  <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                    <span className="text-pink-500">📅</span>
                    Recent Bookings
                  </h3>
                  <p className="text-[10px] text-slate-400 font-medium">Latest student bookings to your hostel</p>
                </div>
                <button
                  suppressHydrationWarning
                  className="text-xs font-bold text-[#E11D74] hover:underline"
                >
                  View All →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-slate-400 font-bold border-b border-slate-100 pb-2">
                      <th className="pb-2 font-bold">ID</th>
                      <th className="pb-2 font-bold">Student Name</th>
                      <th className="pb-2 font-bold">Room No.</th>
                      <th className="pb-2 font-bold">Check-in Date</th>
                      <th className="pb-2 font-bold">Status</th>
                      <th className="pb-2 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {recentBookings.map((b, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition">
                        <td className="py-3 font-semibold text-slate-400 text-[11px]">{b.id}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <img
                              src={b.avatar}
                              alt={b.studentName}
                              className="w-6 h-6 rounded-full object-cover shrink-0"
                            />
                            <span className="font-bold text-slate-900">{b.studentName}</span>
                          </div>
                        </td>
                        <td className="py-3 font-semibold text-slate-700">{b.roomNo}</td>
                        <td className="py-3 font-medium text-slate-500">{b.checkIn}</td>
                        <td className="py-3">
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${b.statusStyle}`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <button
                            suppressHydrationWarning
                            className="px-2.5 py-1 rounded-xl bg-pink-50 text-[#E11D74] text-[10px] font-black hover:bg-[#E11D74] hover:text-white transition"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MIDDLE 3 COLS: ROOM OCCUPANCY & ROOM OVERVIEW */}
            <div className="lg:col-span-3 space-y-6">
              {/* Donut Occupancy Card */}
              <div className="bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-1">
                  <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                    <span className="text-[#6C47FF]">📊</span>
                    Room Occupancy
                  </h3>
                  <select
                    suppressHydrationWarning
                    className="text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-2 py-0.5"
                  >
                    <option>This Month</option>
                  </select>
                </div>

                {/* SVG Donut Circle */}
                <div className="flex items-center justify-center relative py-2">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#F1F0FB"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#6C47FF"
                      strokeWidth="12"
                      strokeDasharray="251.2"
                      strokeDashoffset="47.7"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-xl font-black text-slate-900 leading-none">81%</span>
                    <span className="text-[9px] text-slate-400 font-bold mt-1">Occupied</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs font-semibold text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#6C47FF]" /> Occupied
                    </span>
                    <span className="font-bold text-slate-900">26</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Available
                    </span>
                    <span className="font-bold text-slate-900">6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Under Maintenance
                    </span>
                    <span className="font-bold text-slate-900">0</span>
                  </div>
                </div>
              </div>

              {/* Room Overview Breakdown */}
              <div className="bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <span className="text-pink-500">🏠</span> Room Overview
                  </h4>
                  <button
                    suppressHydrationWarning
                    className="text-[10px] font-bold text-[#E11D74] hover:underline"
                  >
                    View All →
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center pt-1">
                  <div className="p-2.5 rounded-2xl bg-pink-50/70 border border-pink-100">
                    <span className="text-base">🛏️</span>
                    <p className="text-[9px] text-slate-500 font-bold mt-1">Single Rooms</p>
                    <p className="text-sm font-black text-slate-900">12</p>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-purple-50/70 border border-purple-100">
                    <span className="text-base">👥</span>
                    <p className="text-[9px] text-slate-500 font-bold mt-1">Double Sharing</p>
                    <p className="text-sm font-black text-slate-900">10</p>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-base">👨‍👩‍👧</span>
                    <p className="text-[9px] text-slate-500 font-bold mt-1">Triple Sharing</p>
                    <p className="text-sm font-black text-slate-900">4</p>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-blue-50/70 border border-blue-100">
                    <span className="text-base">🏢</span>
                    <p className="text-[9px] text-slate-500 font-bold mt-1">Total Rooms</p>
                    <p className="text-sm font-black text-slate-900">26</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 3 COLS: QUICK ACTIONS & TOP RATED FEATURES */}
            <div className="lg:col-span-3 space-y-6">
              {/* Quick Actions List */}
              <div className="bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-3">
                <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <span className="text-amber-500">⚡</span> Quick Actions
                </h4>

                <div className="space-y-2">
                  <Link
                    href="#"
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-pink-50 transition border border-slate-100"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">📅</span>
                      <div>
                        <p className="text-xs font-black text-slate-900">Update Room Availability</p>
                        <p className="text-[9px] text-slate-400">Mark rooms as available/unavailable</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-pink-50 transition border border-slate-100"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">📋</span>
                      <div>
                        <p className="text-xs font-black text-slate-900">Manage Bookings</p>
                        <p className="text-[9px] text-slate-400">View & update bookings</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-pink-50 transition border border-slate-100"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">👤</span>
                      <div>
                        <p className="text-xs font-black text-slate-900">View Student Details</p>
                        <p className="text-[9px] text-slate-400">Check student information</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-pink-50 transition border border-slate-100"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">🏷️</span>
                      <div>
                        <p className="text-xs font-black text-slate-900">Add Special Offer</p>
                        <p className="text-[9px] text-slate-400">Attract more students</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Top Rated Features */}
              <div className="bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-3">
                <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <span className="text-amber-500">★</span> Top Rated Features
                </h4>

                <div className="space-y-2 text-xs">
                  {topRatedFeatures.map((f, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-slate-50/60">
                      <span className="flex items-center gap-2 font-semibold text-slate-700 text-[11px]">
                        <span>{f.icon}</span> {f.title}
                      </span>
                      <span className="text-amber-500 font-black text-[11px] flex items-center gap-0.5">
                        ★ {f.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Strip: Comfortable Stay, Happy Students ♡ */}
          <section className="relative rounded-[32px] bg-gradient-to-r from-[#FFF2F6] via-[#FFEAF1] to-[#FDE1EA] border border-pink-100 p-5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm overflow-hidden">
            <div className="flex items-center gap-4 z-10">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md border-2 border-white shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=200&auto=format&fit=crop&q=80"
                  alt="Hostel bedroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-black text-pink-600 rotate-[-1deg]">
                  Comfortable Stay <br /> Happy Students ♡
                </h3>
              </div>
            </div>

            {/* 3 Facility Highlights */}
            <div className="hidden lg:flex items-center gap-6 z-10 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-sm">
                  🛡️
                </span>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs">Safe Environment</p>
                  <p className="text-[10px] text-slate-500">24/7 Security</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-sm">
                  🍲
                </span>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs">Nutritious Food</p>
                  <p className="text-[10px] text-slate-500">Hygienic & Tasty</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-sm">
                  🏢
                </span>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs">Modern Facilities</p>
                  <p className="text-[10px] text-slate-500">Wi-Fi, Laundry, Study Area</p>
                </div>
              </div>
            </div>

            <button
              suppressHydrationWarning
              className="px-6 py-2.5 rounded-2xl bg-[#E11D74] hover:bg-[#c21461] text-white text-xs font-black flex items-center gap-2 transition shadow-md shadow-pink-200 shrink-0 z-10"
            >
              <BarChart3 className="w-4 h-4" />
              <span>View Reports →</span>
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}