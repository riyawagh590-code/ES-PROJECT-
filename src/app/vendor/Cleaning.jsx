"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  LayoutDashboard,
  Calendar,
  UserCheck,
  Clock,
  IndianRupee,
  Star,
  Tag,
  BarChart3,
  Settings,
  Search,
  Bell,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  ShieldCheck,
  Award,
  Phone,
  CalendarDays,
  MapPin,
  ChevronRight,
  MessageCircle,
  Eye,
} from "lucide-react";

export default function CleaningVendorDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sidebarLinks = [
    { label: "Dashboard", icon: LayoutDashboard, href: "#", active: true },
    { label: "Bookings", icon: Calendar, href: "#", badge: "6" },
    { label: "Staff Profile", icon: UserCheck, href: "#" },
    { label: "Availability", icon: Clock, href: "#" },
    { label: "Earnings", icon: IndianRupee, href: "#" },
    { label: "Reviews & Ratings", icon: Star, href: "#" },
    { label: "Offers & Discounts", icon: Tag, href: "#" },
    { label: "Reports", icon: BarChart3, href: "#" },
    { label: "Settings", icon: Settings, href: "#" },
  ];

  const upcomingBookings = [
    {
      date: "16 Sep 2026",
      time: "10:00 AM - 12:00 PM",
      location: "Alandi",
      workType: "Room Cleaning",
      status: "Confirmed",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    },
    {
      date: "17 Sep 2026",
      time: "09:00 AM - 11:00 AM",
      location: "Moshi",
      workType: "Kitchen Cleaning",
      status: "Pending",
      statusStyle: "bg-amber-50 text-amber-600 border border-amber-200",
    },
    {
      date: "18 Sep 2026",
      time: "02:00 PM - 04:00 PM",
      location: "Dehu Phata",
      workType: "Bathroom Cleaning",
      status: "Confirmed",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    },
    {
      date: "20 Sep 2026",
      time: "11:00 AM - 01:00 PM",
      location: "Alandi",
      workType: "Full House Cleaning",
      status: "Pending",
      statusStyle: "bg-amber-50 text-amber-600 border border-amber-200",
    },
    {
      date: "22 Sep 2026",
      time: "09:00 AM - 11:00 AM",
      location: "Moshi",
      workType: "Room Cleaning",
      status: "Confirmed",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    },
  ];

  const scheduleDays = [
    { day: "Mon", active: true },
    { day: "Tue", active: true },
    { day: "Wed", active: true },
    { day: "Thu", active: true },
    { day: "Fri", active: true },
    { day: "Sat", active: true },
    { day: "Sun", active: false },
  ];

  const recentReviews = [
    {
      name: "Priya Deshmukh",
      rating: "5.0",
      comment: "Very punctual and does excellent work. Highly recommended!",
      date: "12 Sep 2026",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    },
    {
      name: "Sneha Kadam",
      rating: "4.5",
      comment: "Clean and professional. Very polite.",
      date: "08 Sep 2026",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
    },
    {
      name: "Rohan Patil",
      rating: "4.8",
      comment: "Great service! Will book again.",
      date: "28 Aug 2026",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80",
    },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#F5F4FE] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#6C47FF] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F4FE] text-slate-900 font-sans flex antialiased" suppressHydrationWarning>
      {/* ================= 1. LEFT DARK PURPLE SIDEBAR ================= */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#140E36] text-white shrink-0 sticky top-0 h-screen justify-between p-5 z-40 overflow-y-auto">
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-2xl bg-[#6C47FF] flex items-center justify-center text-white shadow-lg shadow-purple-900/50">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-tight leading-tight">Housekeeping</h2>
              <p className="text-[10px] text-purple-300 font-medium">Vendor Portal</p>
            </div>
          </div>

          {/* Nav List */}
          <nav className="space-y-1">
            {sidebarLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                    item.active
                      ? "bg-[#6C47FF] text-white shadow-md shadow-purple-900/40"
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

        {/* Sidebar Footer Doodles & Help Card */}
        <div className="pt-4 space-y-4">
          <div className="text-center space-y-2">
            <p className="text-xs font-black text-pink-400 rotate-[-6deg]">
              Clean Spaces <br /> Happy Faces ♡
            </p>
            <div className="w-24 h-24 mx-auto rounded-2xl bg-white/10 p-2 border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&auto=format&fit=crop&q=80"
                alt="Cleaning Products Bucket"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="rounded-2xl p-3.5 bg-white/5 border border-white/10 space-y-2 text-center">
            <div className="flex items-center justify-center gap-2 text-purple-200 text-xs font-bold">
              <MessageCircle className="w-4 h-4 text-[#6C47FF]" />
              <span>Need Help?</span>
            </div>
            <p className="text-[10px] text-purple-300/70">Chat with us</p>
            <button
              suppressHydrationWarning
              className="w-full py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Live Chat
            </button>
          </div>
        </div>
      </aside>

      {/* ================= 2. MAIN CONTENT ================= */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-purple-100/50 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200/70 rounded-2xl w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search bookings, staff, or services..."
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
                3
              </span>
            </button>

            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80"
                alt="Rohit Sharma"
                className="w-10 h-10 rounded-2xl object-cover ring-2 ring-purple-100"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-black text-slate-900 leading-tight">Rohit Sharma</p>
                <p className="text-[10px] text-slate-400 font-semibold">Vendor Owner</p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="p-6 sm:p-8 space-y-6 max-w-7xl w-full mx-auto">
          {/* Top Row: Staff Card & Special Offer Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Shital Patil Staff Profile Hero */}
            <div className="lg:col-span-9 relative rounded-[32px] bg-gradient-to-r from-[#FFF2EB] via-[#FFEADB] to-[#FCE5D4] p-6 sm:p-7 border border-orange-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
              <div className="flex items-center gap-5 z-10">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-4 border-white shadow-md bg-white shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
                    alt="Shital Patil"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight flex items-center gap-2">
                    Shital Patil
                    <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                      ★ 4.6 <span className="text-slate-400 font-normal">(124 reviews)</span>
                    </span>
                  </h1>

                  <p className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#6C47FF]" />
                    Professional Housekeeping Staff
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-600 pt-1">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-slate-400" />
                      9000010002
                    </span>
                    <span>•</span>
                    <span className="text-slate-500">Available at your service</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2 text-[10px] font-bold">
                    <span className="px-2 py-0.5 rounded-lg bg-pink-100 text-pink-700 border border-pink-200">
                      🛡️ Trusted
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-700 border border-emerald-200">
                      ✓ Background Verified
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-purple-100 text-purple-700 border border-purple-200">
                      ✨ Experienced
                    </span>
                  </div>
                </div>
              </div>

              {/* Center Cleaning Supplies Image */}
              <div className="relative z-10 w-44 h-32 sm:w-52 sm:h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-white shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&auto=format&fit=crop&q=80"
                  alt="Housekeeping Basket"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Hand-drawn note */}
              <div className="absolute top-4 right-1/3 text-rose-500 text-[11px] font-black rotate-[-6deg] hidden xl:block select-none pointer-events-none">
                Reliable <br /> Housekeeping <br /> for a Better Tomorrow ♡
              </div>
            </div>

            {/* Special Offer Magenta Banner */}
            <div className="lg:col-span-3 rounded-[32px] bg-gradient-to-br from-[#FF458A] via-[#C834A8] to-[#6C47FF] p-6 text-white shadow-xl flex flex-col justify-between text-center relative overflow-hidden">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-white/20 mx-auto flex items-center justify-center text-xl shadow-inner">
                  👑
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/80">
                  Special Offer
                </span>
                <h3 className="text-2xl font-black tracking-tight">10% OFF</h3>
                <p className="text-xs text-white/90">on next booking</p>
              </div>

              <button
                suppressHydrationWarning
                className="w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-black flex items-center justify-center gap-1.5 transition border border-white/20 mt-4 backdrop-blur-sm"
              >
                <span>View Offer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4 Key Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Bookings */}
            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                  <span className="text-rose-500">📅</span> Total Bookings
                </p>
                <h3 className="text-2xl font-black text-slate-950 mt-1">48</h3>
                <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>12%</span>
                  <span className="text-slate-400 font-medium">vs last month</span>
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                  <span className="text-blue-500">🕒</span> Working Hours
                </p>
                <h3 className="text-lg font-black text-slate-950 mt-1">9:00 AM - 5:00 PM</h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Active
                </span>
              </div>
            </div>

            {/* Charges / Hour */}
            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                  <span className="text-purple-500">₹</span> Charges / Hour
                </p>
                <h3 className="text-2xl font-black text-slate-950 mt-1">₹300</h3>
                <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>5%</span>
                  <span className="text-slate-400 font-medium">vs last month</span>
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                  <span className="text-amber-500">★</span> Rating
                </p>
                <h3 className="text-2xl font-black text-slate-950 mt-1">4.6</h3>
                <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>8%</span>
                  <span className="text-slate-400 font-medium">vs last month</span>
                </p>
              </div>
            </div>
          </div>

          {/* Center Split: Bookings Table + Work Schedule + Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT 6 COLS: UPCOMING BOOKINGS TABLE */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                  <span className="text-rose-500">📅</span>
                  Upcoming Bookings
                </h3>
                <button
                  suppressHydrationWarning
                  className="text-xs font-bold text-[#6C47FF] hover:underline"
                >
                  View All →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-slate-400 font-bold border-b border-slate-100 pb-2">
                      <th className="pb-2 font-bold">Date & Time</th>
                      <th className="pb-2 font-bold">Location</th>
                      <th className="pb-2 font-bold">Work Type</th>
                      <th className="pb-2 font-bold">Status</th>
                      <th className="pb-2 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {upcomingBookings.map((b, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition">
                        <td className="py-3">
                          <p className="font-black text-slate-900">{b.date}</p>
                          <p className="text-[10px] text-slate-400 font-medium">{b.time}</p>
                        </td>
                        <td className="py-3 font-semibold text-slate-700">{b.location}</td>
                        <td className="py-3 font-semibold text-slate-700">{b.workType}</td>
                        <td className="py-3">
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${b.statusStyle}`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <button
                            suppressHydrationWarning
                            className="px-2.5 py-1 rounded-xl bg-purple-50 text-[#6C47FF] text-[10px] font-black hover:bg-[#6C47FF] hover:text-white transition"
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MIDDLE 3 COLS: WORK SCHEDULE */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-500">📅</span>
                  Work Schedule
                </h3>
                <button
                  suppressHydrationWarning
                  className="text-[11px] font-bold text-[#6C47FF] hover:underline"
                >
                  View Calendar →
                </button>
              </div>

              {/* Day Pills */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {scheduleDays.map((d, i) => (
                  <div
                    key={i}
                    className={`rounded-xl py-2 px-1 text-[10px] font-black ${
                      d.active
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                        : "bg-rose-50 text-rose-500 border border-rose-100"
                    }`}
                  >
                    <p className="text-[9px] text-slate-500">{d.day}</p>
                    <p className="mt-1">{d.active ? "✓" : "Off"}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Working Hours</p>
                    <p className="text-[11px] text-slate-500">9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CalendarDays className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Working Days</p>
                    <p className="text-[11px] text-slate-500">Monday - Saturday</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Preferred Locations</p>
                    <p className="text-[11px] text-slate-500">Alandi, Moshi, Dehu Phata</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 3 COLS: QUICK ACTIONS */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-3">
              <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <span className="text-amber-500">⚡</span> Quick Actions
              </h4>

              <div className="space-y-2">
                <Link
                  href="#"
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">📅</span>
                    <div>
                      <p className="text-xs font-black text-slate-900">Update Availability</p>
                      <p className="text-[9px] text-slate-400">Set your working hours</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="#"
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100"
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
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">₹</span>
                    <div>
                      <p className="text-xs font-black text-slate-900">View Earnings</p>
                      <p className="text-[9px] text-slate-400">Check your earnings</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="#"
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">👤</span>
                    <div>
                      <p className="text-xs font-black text-slate-900">Update Profile</p>
                      <p className="text-[9px] text-slate-400">Edit your details</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Grid: Earnings + Promotion + Quick Info + Reviews & Thank You */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Earnings Bar Chart */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2">
                <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#6C47FF]" />
                  Earnings Overview
                </h4>
                <select
                  suppressHydrationWarning
                  className="text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-2 py-0.5"
                >
                  <option>This Month</option>
                </select>
              </div>

              <div>
                <p className="text-xl font-black text-slate-950">
                  ₹12,600{" "}
                  <span className="text-[11px] font-bold text-emerald-600">↑ 18%</span>
                </p>
                <p className="text-[10px] text-slate-400 font-medium">vs last month</p>
              </div>

              {/* Bar Graph SVG */}
              <div className="pt-3">
                <div className="flex items-end justify-between h-20 gap-1 px-1">
                  {[20, 35, 60, 40, 75, 55, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-purple-100 rounded-t-lg relative group">
                      <div
                        className="w-full bg-[#6C47FF] rounded-t-lg transition-all"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[9px] text-slate-400 font-bold mt-1.5">
                  <span>1</span>
                  <span>5</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                  <span>25</span>
                  <span>30</span>
                </div>
              </div>
            </div>

            {/* More Bookings More Earnings Banner */}
            <div className="lg:col-span-3 rounded-3xl bg-gradient-to-br from-[#FFF5F1] to-[#FFE9E1] p-5 border border-orange-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-2">
                <h4 className="text-sm font-black text-slate-900 leading-tight">
                  More Bookings <br /> More Earnings!
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Keep your profile updated and get more requests.
                </p>
              </div>

              <div className="w-full h-24 rounded-2xl overflow-hidden shadow-sm my-2">
                <img
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&auto=format&fit=crop&q=80"
                  alt="Clean room"
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                suppressHydrationWarning
                className="w-full py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-bold flex items-center justify-center gap-1 transition"
              >
                <span>Update Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Info Box */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-3">
              <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <span className="text-blue-500">ℹ️</span> Quick Info
              </h4>

              <div className="space-y-2 text-xs">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold">Contact Number</p>
                  <p className="font-extrabold text-slate-800">9000010002</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold">Charges per Hour</p>
                  <p className="font-extrabold text-slate-800">₹300</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold">Working Hours</p>
                  <p className="font-extrabold text-slate-800">9:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold">Working Days</p>
                  <p className="font-extrabold text-slate-800">Monday - Saturday</p>
                </div>
              </div>
            </div>

            {/* Recent Reviews + Thank You Graphic */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-1 border-b border-slate-50">
                  <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <span className="text-amber-500">★</span> Recent Reviews
                  </h4>
                  <button
                    suppressHydrationWarning
                    className="text-[10px] font-bold text-[#6C47FF] hover:underline"
                  >
                    View All →
                  </button>
                </div>

                <div className="space-y-2">
                  {recentReviews.map((r, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <img
                        src={r.avatar}
                        alt={r.name}
                        className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-black text-slate-900 text-[11px] truncate">{r.name}</p>
                          <span className="text-[10px] text-amber-500 font-bold">★ {r.rating}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 truncate">{r.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thank You Card */}
              <div className="mt-3 p-3 rounded-2xl bg-[#FFF3F8] border border-pink-100 flex items-center justify-between gap-2">
                <div className="text-[11px] font-black text-pink-600 rotate-[-3deg]">
                  Thank you <br /> for keeping <br /> spaces clean! ♡
                </div>
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-white shadow-sm shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=150&auto=format&fit=crop&q=80"
                    alt="Housekeeper towels"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}