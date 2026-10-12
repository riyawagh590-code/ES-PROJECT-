"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  LayoutDashboard,
  CalendarDays,
  Star,
  MessageSquarePlus,
  Settings,
  ArrowLeft,
  Search,
  Bell,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Clock,
  Sparkles,
  Sun,
  Moon,
  Check,
} from "lucide-react";

export default function ShitalPatilHousekeepingPage() {
  const router = useRouter();

  // State management
  const [selectedDay, setSelectedDay] = useState("Mon");
  const [isDayDropdownOpen, setIsDayDropdownOpen] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState("Evening");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const daysList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const slotDetails = {
    Morning: "9:00 - 11:00 AM",
    Afternoon: "2:00 - 4:00 PM",
    Evening: "6:00 - 8:00 PM",
  };

  const handleConfirmBooking = () => {
    const newBooking = {
      id: `BK-HSK-${Date.now()}`,
      service: "Housekeeping",
      vendor: "Shital Patil",
      location: "Ganesh Colony",
      day: selectedDay,
      slot: `${selectedSlot} (${slotDetails[selectedSlot]})`,
      rate: "₹300 per session",
      duration: "1-2 hrs",
      status: "Confirmed",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("student_bookings") || "[]");
      localStorage.setItem("student_bookings", JSON.stringify([newBooking, ...existing]));
    } catch (e) {
      console.error(e);
    }

    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#F6F0FF] to-[#E8F5FF] text-[#14244A] font-sans flex antialiased selection:bg-purple-200">
      {/* =====================================================
          1. LEFT SIDEBAR (LIGHT PURPLE/WHITE GRADIENT ACCENTS)
      ====================================================== */}
      <aside className="hidden lg:flex flex-col w-[230px] bg-white/80 backdrop-blur-md border-r border-purple-100/60 p-4 shrink-0 justify-between sticky top-0 h-screen z-30">
        <div className="space-y-6">
          {/* Logo */}
          <Link href="/student" className="flex items-center gap-3 px-2 pt-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#6C47FF] to-[#8C62FF] flex items-center justify-center text-white shadow-md shadow-purple-200">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-[#14244A] block leading-none">
                Studentica.
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-1 block">
                CAMPUS FEEDS
              </span>
            </div>
          </Link>

          {/* Navigation Items */}
          <nav className="space-y-1 pt-2">
            <Link
              href="/student"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold bg-[#6C47FF] text-white shadow-md shadow-purple-200 transition"
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-4 h-4 shrink-0 text-white" />
                <span>Dashboard</span>
              </div>
              <span className="text-sm">👆</span>
            </Link>

            <Link
              href="/bookings"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <CalendarDays className="w-4 h-4 shrink-0 text-slate-400" />
              <span>My Bookings</span>
            </Link>

            <Link
                 href="/student/cleaning/shital-patil/review"
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
                 >
                <MessageSquarePlus className="w-4 h-4 shrink-0 text-slate-400" />
                <span>Ratings & Review</span>
          </Link>

            <Link
              href="/student/profile"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <Settings className="w-4 h-4 shrink-0 text-slate-400" />
              <span>profile</span>
            </Link>
            <Link
              href="/pass"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <Settings className="w-4 h-4 shrink-0 text-slate-400" />
              <span>freshers pass</span>
            </Link>
          </nav>
        </div>

        {/* Bottom Stamp Badge */}
        <div className="flex items-center justify-center pb-2">
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-purple-300 flex items-center justify-center text-center rotate-[-10deg] opacity-80">
            <span className="text-[10px] font-black leading-tight text-purple-400">
              hand-drawn<br />badge
            </span>
          </div>
        </div>
      </aside>

      {/* =====================================================
          2. MAIN BODY VIEWPORT
      ====================================================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-purple-100/60 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[#F4F5F9] p-1.5 rounded-2xl border border-slate-200/50">
            
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-2 bg-white/90 rounded-xl w-64 border border-purple-100/80 shadow-sm">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search services, staff..."
                className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
            </div>

            <button
              type="button"
              className="relative p-2.5 rounded-xl bg-white text-slate-600 hover:text-slate-900 shadow-sm transition border border-purple-50"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FF3B7A] text-[9px] font-black text-white flex items-center justify-center">
                8
              </span>
            </button>

            <Link
              href="/student/profile"
              className="flex items-center gap-3 pl-3 border-l border-slate-200"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-purple-200"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-black text-[#14244A] leading-tight">Hi, Riya!</p>
                <p className="text-[10px] text-slate-400 font-semibold">Student</p>
              </div>
            </Link>
          </div>
        </header>

        {/* Content Body */}
        <main className="p-6 sm:p-8 space-y-6 max-w-[1350px] w-full mx-auto">
          {/* Back Pill Button */}
          <Link
            href="/student/cleaning"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-purple-100 text-xs font-bold text-slate-700 hover:text-[#6C47FF] shadow-sm transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Housekeeping &amp; Cleaning</span>
          </Link>

          {/* ===================================================
              HERO CARD SECTION
          ==================================================== */}
          <div className="relative rounded-[32px] bg-gradient-to-br from-white/90 via-[#FDF8FF]/95 to-[#F1F6FF]/90 p-6 sm:p-8 border border-purple-100 shadow-[0_15px_40px_rgba(108,71,255,0.06)] space-y-6">
            {/* Header Titles & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-black text-[#14244A] tracking-tight">
                  Shital Patil - Housekeeping Service
                </h1>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F8EE] text-[#0FAF53] text-xs font-extrabold border border-emerald-100">
                  🌱 Verified
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF5DC] text-[#D98200] text-xs font-black border border-amber-100">
                  4.8 ★ <span className="text-slate-500 font-medium">(96 reviews)</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 text-slate-600 text-xs font-semibold shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Ganesh Colony • Distance from College: 350 m
                </span>
              </div>
            </div>

            {/* Gallery + Rate/Duration Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              {/* Photo 1: Staff Member with Washi Tape Graphic */}
              <div className="lg:col-span-5 h-[280px] rounded-3xl overflow-hidden shadow-sm relative group bg-white border border-purple-100/60 p-2">
                {/* Washi Tape doodle top left */}
                <div className="absolute top-1 left-2 w-14 h-6 bg-gradient-to-r from-pink-400 to-purple-400 opacity-80 -rotate-12 rounded-sm shadow-sm z-10" />
                
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                  alt="Shital Patil Housekeeper"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Fun sticker doodles bottom left & right */}
                <div className="absolute bottom-4 left-4 bg-pink-500/90 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm -rotate-6">
                  Top Rated ッ
                </div>
                <div className="absolute top-4 right-4 text-xl">
                  ✨
                </div>
              </div>

              {/* Photo 2 & 3: Cleaning Supplies */}
              <div className="lg:col-span-4 flex flex-col gap-3.5 h-[280px]">
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm border border-purple-50">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop&q=80"
                    alt="Cleaning equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm relative border border-purple-50">
                  <img
                    src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&auto=format&fit=crop&q=80"
                    alt="Neat towels"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-black backdrop-blur-[2px]">
                    View Work Photos (+6)
                  </div>
                </div>
              </div>

              {/* Rate & Duration Box (Warm Vibrant Gradient) */}
              <div className="lg:col-span-3 rounded-3xl p-6 bg-gradient-to-br from-[#FF9E44] via-[#F87171] to-[#8B5CF6] text-white shadow-lg shadow-orange-100 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Clock className="w-5 h-5" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                  Rate:
                </span>
                <h3 className="text-4xl font-black text-white tracking-tight mt-1">
                  ₹300
                </h3>

                <div className="mt-4 pt-3 border-t border-white/20 w-full">
                  <p className="text-xs font-bold text-white/90">Duration:</p>
                  <p className="text-sm font-black text-white mt-0.5">
                    1-2 hours / Session
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              SERVICE DESCRIPTION & CUSTOMER REVIEWS
          ==================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Service Description (6 Cols) */}
            <div className="lg:col-span-6 bg-white/90 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-2">
                <span className="text-xl">🧹</span>
                <h3 className="text-base font-black text-[#14244A]">
                  Service Description
                </h3>
              </div>

              <div className="rounded-2xl border-2 border-dashed border-purple-200/80 p-5 bg-[#FBF9FE]/60 space-y-3.5 text-xs sm:text-sm font-bold text-slate-700">
                <div className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">🧹</span>
                  <span>
                    Floor cleaning (high-pressure mopping/sweeping)
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">✨</span>
                  <span>
                    Dusting (all surfaces, shelves, appliances)
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">🚽</span>
                  <span>
                    Bathroom cleaning (deep sanitation)
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">🗑️</span>
                  <span>
                    Waste disposal (trash collection &amp; dumping)
                  </span>
                </div>
              </div>
            </div>

            {/* Customer Reviews (6 Cols) */}
            <div className="lg:col-span-6 bg-white/90 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black text-[#14244A]">
                  Customer Reviews
                </h3>
                <span className="text-xs font-bold text-amber-500 tracking-wider">
                  ★★★★★
                </span>
              </div>

              <div className="space-y-2.5">
                {/* Review 1 */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#F7F9FF] to-[#FAF7FF] border border-blue-100/60 flex items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                    <span className="text-blue-500">👤</span>
                    <span>① &quot;Very Good!&quot; - Preeti J.</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                      alt="Preeti J."
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-purple-100"
                    />
                    <span className="text-[10px] font-bold text-slate-500 hidden sm:inline">Preeti J.</span>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#F7F9FF] to-[#FAF7FF] border border-blue-100/60 flex items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                    <span className="text-purple-500">👤</span>
                    <span>② &quot;Proper Cleaning, highly professional.&quot; - Tanmay K.</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                      alt="Tanmay K."
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-purple-100"
                    />
                    <span className="text-[10px] font-bold text-slate-500 hidden sm:inline">Tanmay K.</span>
                  </div>
                </div>

                {/* Review 3 */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#F7F9FF] to-[#FAF7FF] border border-blue-100/60 flex items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                    <span className="text-indigo-500">👤</span>
                    <span>③ &quot;Worth it to pay, completely hassle-free.&quot; - Arnav S.</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                      alt="Arnav S."
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-purple-100"
                    />
                    <span className="text-[10px] font-bold text-slate-500 hidden sm:inline">Arnav S.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              BOOK OUR SLOT (INTERACTIVE DROPDOWN & TIME SLOTS)
          ==================================================== */}
          <div className="bg-white/95 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-5">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black text-[#14244A]">Book Our Slot</h3>
              <span className="text-base">✨</span>
            </div>
            <p className="text-xs font-bold text-slate-500">
              Select Day &amp; Time to confirm the slot
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Days Dropdown (5 Cols) */}
              <div className="lg:col-span-5 space-y-2">
                <label className="text-xs font-black text-slate-700 block">
                  Days:
                </label>

                <div className="rounded-2xl border border-purple-200 overflow-hidden bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setIsDayDropdownOpen(!isDayDropdownOpen)}
                    className="w-full p-3.5 flex items-center justify-between text-xs font-bold text-slate-800 bg-[#FAF9FD] hover:bg-purple-50/50 transition"
                  >
                    <span>{selectedDay ? `Selected: ${selectedDay}` : "Select Day"}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isDayDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isDayDropdownOpen && (
                    <div className="divide-y divide-purple-50 bg-white">
                      {daysList.map((day) => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => {
                            setSelectedDay(day);
                            setIsDayDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-xs font-bold transition flex items-center justify-between ${
                            selectedDay === day
                              ? "bg-[#ECE7FE] text-[#6C47FF]"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span>{day}</span>
                          {selectedDay === day && (
                            <Check className="w-3.5 h-3.5 text-[#6C47FF]" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Time Slots (7 Cols) */}
              <div className="lg:col-span-7 space-y-2">
                <label className="text-xs font-black text-slate-700 block">
                  Time Slot:
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {/* Morning */}
                  <button
                    type="button"
                    onClick={() => setSelectedSlot("Morning")}
                    className={`p-4 rounded-2xl border text-center transition-all relative ${
                      selectedSlot === "Morning"
                        ? "bg-[#6C47FF] text-white border-[#6C47FF] shadow-md shadow-purple-200"
                        : "bg-white text-slate-700 border-purple-100 hover:border-purple-300"
                    }`}
                  >
                    <Sun className={`w-4 h-4 mx-auto mb-1 ${selectedSlot === "Morning" ? "text-amber-300" : "text-amber-500"}`} />
                    <p className="text-xs font-black">Morning</p>
                    <p className={`text-[10px] font-semibold mt-0.5 ${selectedSlot === "Morning" ? "text-purple-100" : "text-slate-400"}`}>
                      9:00 - 11:00 AM
                    </p>
                  </button>

                  {/* Afternoon */}
                  <button
                    type="button"
                    onClick={() => setSelectedSlot("Afternoon")}
                    className={`p-4 rounded-2xl border text-center transition-all relative ${
                      selectedSlot === "Afternoon"
                        ? "bg-[#6C47FF] text-white border-[#6C47FF] shadow-md shadow-purple-200"
                        : "bg-white text-slate-700 border-purple-100 hover:border-purple-300"
                    }`}
                  >
                    <Sparkles className={`w-4 h-4 mx-auto mb-1 ${selectedSlot === "Afternoon" ? "text-amber-300" : "text-amber-500"}`} />
                    <p className="text-xs font-black">Afternoon</p>
                    <p className={`text-[10px] font-semibold mt-0.5 ${selectedSlot === "Afternoon" ? "text-purple-100" : "text-slate-400"}`}>
                      2:00 - 4:00 PM
                    </p>
                  </button>

                  {/* Evening (Active in Image) */}
                  <button
                    type="button"
                    onClick={() => setSelectedSlot("Evening")}
                    className={`p-4 rounded-2xl border text-center transition-all relative ${
                      selectedSlot === "Evening"
                        ? "bg-[#5833B6] text-white border-[#5833B6] shadow-md shadow-purple-200"
                        : "bg-white text-slate-700 border-purple-100 hover:border-purple-300"
                    }`}
                  >
                    <Moon className={`w-4 h-4 mx-auto mb-1 ${selectedSlot === "Evening" ? "text-purple-200" : "text-purple-500"}`} />
                    <p className="text-xs font-black">Evening</p>
                    <p className={`text-[10px] font-semibold mt-0.5 ${selectedSlot === "Evening" ? "text-purple-200" : "text-slate-400"}`}>
                      6:00 - 8:00 PM
                    </p>

                    {/* Hand icon over Evening */}
                    <div className="absolute -bottom-3 right-2 text-base pointer-events-none">
                      👆
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              BOTTOM BAR: CONFIRM BOOKING SLOT
          ==================================================== */}
          <div className="bg-gradient-to-r from-[#6355F6] via-[#7B59F6] to-[#E2558E] rounded-3xl p-5 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-0.5 text-center sm:text-left">
              <h3 className="text-base font-black tracking-tight flex items-center justify-center sm:justify-start gap-1.5">
                Confirm Booking slot →
              </h3>
              <p className="text-xs font-semibold text-white/90">
                Total Rate: ₹300 per session • Duration: 1-2 hrs • ({selectedDay}, {selectedSlot})
              </p>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={handleConfirmBooking}
                className="px-8 py-3.5 rounded-2xl bg-[#5833B6] hover:bg-[#49279D] text-white text-xs font-black shadow-lg transition active:scale-[0.99] flex items-center gap-2 border border-white/20"
              >
                <span>Confirm Slot</span>
                <span className="text-sm">→</span>
              </button>

              {/* Hand Icon over Confirm Slot button */}
              <div className="absolute right-3 -bottom-4 pointer-events-none">
                <span className="text-2xl drop-shadow">👆</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* =====================================================
          3. SUCCESS POPUP MODAL (SYNCED TO LOCALSTORAGE)
      ====================================================== */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-3xl bg-purple-100 text-[#6C47FF] mx-auto flex items-center justify-center text-3xl shadow-sm">
              🧹
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#14244A]">
                Housekeeping Slot Confirmed!
              </h3>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                Shital Patil is scheduled to visit on{" "}
                <span className="text-slate-900 font-bold">
                  {selectedDay} during {selectedSlot} ({slotDetails[selectedSlot]})
                </span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50 text-left text-xs font-bold text-[#6C47FF] space-y-1">
              <p>✦ Total Rate: ₹300 (Pay after completion)</p>
              <p className="text-slate-500 font-semibold text-[11px]">
                Slot details saved to your student bookings hub.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="flex-1 py-3 rounded-2xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => router.push("/bookings")}
                className="flex-1 py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835E5] text-white text-xs font-black shadow-md shadow-purple-200 transition"
              >
                View in My Bookings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}