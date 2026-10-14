"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  Clock,
  Sparkles,
  Sun,
  Moon,
  Calendar as CalendarIcon,
} from "lucide-react";

export default function ShitalPatilHousekeepingPage() {
  const router = useRouter();

  // Booking states
  const [selectedDay, setSelectedDay] = useState("Wed");
  const [selectedDate, setSelectedDate] = useState(14);
  const [selectedSlot, setSelectedSlot] = useState("Evening");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Dynamic Availability & Schedule from Shital Patil's Vendor Dashboard
  const [workingHours, setWorkingHours] = useState("11:00 AM - 6:00 PM");
  const [workingDays, setWorkingDays] = useState("Monday - Friday");
  const [preferredLocations, setPreferredLocations] = useState("Alandi, Moshi, Dehu Phata");

  // Review synchronization state
  const [reviewsList, setReviewsList] = useState([]);

  const defaultReviews = [
    {
      id: "rev-1",
      reviewer: "Preeti J.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      reviewText: "Very Good!",
      rating: 5,
      date: "Oct 10, 2026",
      tag: "① 👤✨",
    },
    {
      id: "rev-2",
      reviewer: "Tanmay K.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      reviewText: "Proper Cleaning, highly professional.",
      rating: 4.8,
      date: "Oct 8, 2026",
      tag: "② 👤🧹",
    },
    {
      id: "rev-3",
      reviewer: "Arnav S.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      reviewText: "Worth it to pay, completely hassle-free.",
      rating: 5,
      date: "Oct 4, 2026",
      tag: "③ 👤⚡",
    },
  ];

  // Sync Live Timings & Reviews from LocalStorage
  const loadLivePageData = useCallback(() => {
    try {
      // 1. Load Live Timings from Shital's Vendor Dashboard
      const savedTimings = localStorage.getItem("shital_patil_timings");
      if (savedTimings) {
        const parsed = JSON.parse(savedTimings);
        if (parsed.hours) setWorkingHours(parsed.hours);
        if (parsed.days) setWorkingDays(parsed.days);
        if (parsed.locations) setPreferredLocations(parsed.locations);
      }

      // 2. Load Reviews
      const stored = JSON.parse(localStorage.getItem("student_reviews") || "[]");
      const housekeepingReviews = stored
        .filter(
          (r) =>
            !r.vendor ||
            r.vendor.toLowerCase().includes("shital") ||
            r.service === "Housekeeping"
        )
        .map((r) => ({
          id: r.id,
          reviewer: r.reviewer || (r.anonymous ? "Anonymous Student" : "Riya Wagh"),
          avatar: r.anonymous
            ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
            : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
          reviewText: r.reviewText,
          rating: r.rating || 5,
          date: r.date || "Recently",
          tag: "Verified Student ★",
        }));

      setReviewsList([...housekeepingReviews, ...defaultReviews]);
    } catch (e) {
      console.error(e);
      setReviewsList(defaultReviews);
    }
  }, []);

  useEffect(() => {
    loadLivePageData();
    window.addEventListener("storage", loadLivePageData);
    window.addEventListener("focus", loadLivePageData);

    return () => {
      window.removeEventListener("storage", loadLivePageData);
      window.removeEventListener("focus", loadLivePageData);
    };
  }, [loadLivePageData]);

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
      scheduledDate: `Oct ${selectedDate}, 2026 (${selectedDay})`,
      slot: `${selectedSlot} (${slotDetails[selectedSlot]})`,
      rate: "₹300 per session",
      duration: "1-2 hrs",
      status: "Pending Approval",
      vendorConfirmed: false,
      bookedOn: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("student_bookings") || "[]");
      localStorage.setItem("student_bookings", JSON.stringify([newBooking, ...existing]));
      window.dispatchEvent(new Event("storage"));
    } catch (e) {
      console.error(e);
    }

    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#F6F0FF] to-[#E8F5FF] text-[#14244A] font-sans flex antialiased selection:bg-purple-200">
      {/* 1. LEFT SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-[230px] bg-white/80 backdrop-blur-md border-r border-purple-100/60 p-4 shrink-0 justify-between sticky top-0 h-screen z-30">
        <div className="space-y-6">
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
              href="/student/bookings"
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
              <span>Ratings &amp; Review</span>
            </Link>

            <Link
              href="/student/profile"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <Settings className="w-4 h-4 shrink-0 text-slate-400" />
              <span>Profile</span>
            </Link>
            <Link
              href="/pass"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <Settings className="w-4 h-4 shrink-0 text-slate-400" />
              <span>Freshers Pass</span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center justify-center pb-2">
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-purple-300 flex items-center justify-center text-center rotate-[-10deg] opacity-80">
            <span className="text-[10px] font-black leading-tight text-purple-400">
              hand-drawn<br />badge
            </span>
          </div>
        </div>
      </aside>

      {/* 2. MAIN BODY */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-purple-100/60 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[#F4F5F9] p-1.5 rounded-2xl border border-slate-200/50" />

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

        <main className="p-6 sm:p-8 space-y-6 max-w-[1350px] w-full mx-auto">
          {/* Back Pill Button */}
          <Link
            href="/student/cleaning"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-purple-100 text-xs font-bold text-slate-700 hover:text-[#6C47FF] shadow-sm transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Housekeeping &amp; Cleaning</span>
          </Link>

          {/* HERO CARD */}
          <div className="relative rounded-[32px] bg-gradient-to-br from-white/90 via-[#FDF8FF]/95 to-[#F1F6FF]/90 p-6 sm:p-8 border border-purple-100 shadow-[0_15px_40px_rgba(108,71,255,0.06)] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-black text-[#14244A] tracking-tight">
                  Shital Patil - Housekeeping Service
                </h1>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F8EE] text-[#0FAF53] text-xs font-extrabold border border-emerald-100">
                  🌱 Verified
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF5DC] text-[#D98200] text-xs font-black border border-amber-100">
                  4.8 ★ <span className="text-slate-500 font-medium">({reviewsList.length + 93} reviews)</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 text-slate-600 text-xs font-semibold shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Ganesh Colony • Distance from College: 350 m
                </span>
              </div>
            </div>

            {/* Gallery + Rate/Duration Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              <div className="lg:col-span-5 h-[280px] rounded-3xl overflow-hidden shadow-sm relative group bg-white border border-purple-100/60 p-2">
                <div className="absolute top-1 left-2 w-14 h-6 bg-gradient-to-r from-pink-400 to-purple-400 opacity-80 -rotate-12 rounded-sm shadow-sm z-10" />
                
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                  alt="Shital Patil Housekeeper"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute bottom-4 left-4 bg-pink-500/90 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm -rotate-6">
                  Top Rated ッ
                </div>
                <div className="absolute top-4 right-4 text-xl">
                  ✨
                </div>
              </div>

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

          {/* SERVICE DESCRIPTION & REVIEWS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
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
                  <span>Floor cleaning (high-pressure mopping/sweeping)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">✨</span>
                  <span>Dusting (all surfaces, shelves, appliances)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">🚽</span>
                  <span>Bathroom cleaning (deep sanitation)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">🗑️</span>
                  <span>Waste disposal (trash collection &amp; dumping)</span>
                </div>
              </div>
            </div>

            {/* Dynamic Customer Reviews */}
            <div className="lg:col-span-6 bg-white/90 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black text-[#14244A]">
                  Customer Reviews ({reviewsList.length})
                </h3>
                <span className="text-xs font-bold text-amber-500 tracking-wider">
                  ★★★★★
                </span>
              </div>

              <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                {reviewsList.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-3.5 rounded-2xl bg-gradient-to-r from-[#F7F9FF] to-[#FAF7FF] border border-blue-100/60 flex items-center justify-between gap-3 shadow-sm"
                  >
                    <div className="text-xs sm:text-sm font-bold text-slate-800 space-y-0.5">
                      <p className="text-xs font-semibold text-slate-700">
                        &quot;{rev.reviewText}&quot;
                      </p>
                      <div className="flex items-center gap-2 pt-0.5 text-[10px] text-slate-400 font-bold">
                        <span className="text-amber-500">★ {rev.rating}/5</span>
                        <span>•</span>
                        <span>{rev.date}</span>
                        <span>•</span>
                        <span className="text-purple-600 font-extrabold">{rev.tag}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <img
                        src={rev.avatar}
                        alt={rev.reviewer}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-purple-100 shadow-sm"
                      />
                      <span className="text-[10px] font-bold text-slate-500 hidden sm:inline">
                        {rev.reviewer}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===================================================
              BOOK OUR SLOT: CALENDAR + TIME SLOTS + STAFF TIMINGS
          ==================================================== */}
          <div className="bg-white/95 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-black text-[#14244A]">Book Our Slot</h3>
                  <span className="text-base">✨</span>
                </div>
                <p className="text-xs font-bold text-slate-500 mt-0.5">
                  Select a date from the calendar and choose your convenient time slot
                </p>
              </div>

              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-black text-[#6C47FF]">
                <CalendarIcon className="w-3.5 h-3.5" />
                <span>Selected: {selectedDay}, Oct {selectedDate}, 2026</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Side: Interactive Month Calendar (6 Cols) */}
              <div className="lg:col-span-6 bg-[#FAF9FD] rounded-3xl p-5 border border-purple-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#6C47FF]" />
                    <h4 className="text-sm font-black text-slate-900">October 2026</h4>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-100 px-2 py-0.5 rounded-md">
                    Slots Open
                  </span>
                </div>

                {/* Calendar Days Header */}
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-extrabold text-slate-400 uppercase tracking-wider py-1 border-b border-purple-100">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>

                {/* Calendar Date Matrix */}
                <div className="grid grid-cols-7 gap-1.5 text-center text-xs font-bold">
                  <span className="py-2 text-slate-300 pointer-events-none select-none">27</span>
                  <span className="py-2 text-slate-300 pointer-events-none select-none">28</span>
                  <span className="py-2 text-slate-300 pointer-events-none select-none">29</span>
                  <span className="py-2 text-slate-300 pointer-events-none select-none">30</span>
                  <span className="py-2 text-slate-300 pointer-events-none select-none">1</span>
                  <span className="py-2 text-slate-300 pointer-events-none select-none">2</span>
                  <span className="py-2 text-slate-300 pointer-events-none select-none">3</span>

                  {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((d) => (
                    <span key={d} className="py-2 text-slate-300 select-none">
                      {d}
                    </span>
                  ))}

                  {[
                    { d: 14, dayName: "Wed" },
                    { d: 15, dayName: "Thu" },
                    { d: 16, dayName: "Fri" },
                    { d: 17, dayName: "Sat" },
                    { d: 18, dayName: "Sun" },
                    { d: 19, dayName: "Mon" },
                    { d: 20, dayName: "Tue" },
                    { d: 21, dayName: "Wed" },
                    { d: 22, dayName: "Thu" },
                    { d: 23, dayName: "Fri" },
                    { d: 24, dayName: "Sat" },
                    { d: 25, dayName: "Sun" },
                    { d: 26, dayName: "Mon" },
                    { d: 27, dayName: "Tue" },
                    { d: 28, dayName: "Wed" },
                    { d: 29, dayName: "Thu" },
                    { d: 30, dayName: "Fri" },
                    { d: 31, dayName: "Sat" },
                  ].map(({ d, dayName }) => {
                    const isSelected = selectedDate === d;
                    return (
                      <button
                        key={d}
                        type="button"
                        onClick={() => {
                          setSelectedDate(d);
                          setSelectedDay(dayName);
                        }}
                        className={`py-2 rounded-xl text-xs font-black transition-all flex flex-col items-center justify-center cursor-pointer ${
                          isSelected
                            ? "bg-[#6C47FF] text-white shadow-md shadow-purple-200 scale-105"
                            : "bg-white text-slate-700 hover:bg-purple-100/60 border border-purple-50"
                        }`}
                      >
                        <span>{d}</span>
                        <span className={`text-[8px] font-semibold ${isSelected ? "text-purple-200" : "text-slate-400"}`}>
                          {dayName}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 pt-1 border-t border-purple-100">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6C47FF]" /> Selected Day
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white border border-slate-300" /> Available
                  </span>
                </div>
              </div>

              {/* Right Side: Time Slots, Booking Summary, and Live Working Timings (6 Cols) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 block">
                    Choose Time Slot:
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedSlot("Morning")}
                      className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
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

                    <button
                      type="button"
                      onClick={() => setSelectedSlot("Afternoon")}
                      className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
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

                    <button
                      type="button"
                      onClick={() => setSelectedSlot("Evening")}
                      className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
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
                    </button>
                  </div>
                </div>

                {/* Booking Summary */}
                <div className="rounded-2xl p-4 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 space-y-2">
                  <h5 className="text-xs font-black text-[#14244A] flex items-center gap-1.5">
                    <span>📅</span> Your Booking Summary
                  </h5>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-600 pt-1">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Date</span>
                      <span className="text-slate-900 font-black">{selectedDay}, Oct {selectedDate}, 2026</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Slot</span>
                      <span className="text-slate-900 font-black">{selectedSlot} ({slotDetails[selectedSlot]})</span>
                    </div>
                  </div>
                </div>

                {/* ===================================================
                    NEW ADDED CARD: STAFF LIVE SCHEDULE & TIMINGS
                    (Directly synced from Shital Patil's Dashboard)
                ==================================================== */}
                <div className="rounded-2xl p-4 bg-white border border-purple-100/90 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-purple-50">
                    <span className="text-xs font-black text-[#14244A] flex items-center gap-1.5">
                      <span>🧹</span> Staff Availability &amp; Timings
                    </span>
                    <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Live Schedule
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    {/* Working Hours */}
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#6C47FF] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-extrabold text-slate-900">Working Hours</p>
                        <p className="text-[11px] font-semibold text-slate-600 mt-0.5">
                          {workingHours}
                        </p>
                      </div>
                    </div>

                    {/* Working Days */}
                    <div className="flex items-start gap-2.5">
                      <CalendarDays className="w-4 h-4 text-[#6C47FF] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-extrabold text-slate-900">Working Days</p>
                        <p className="text-[11px] font-semibold text-slate-600 mt-0.5">
                          {workingDays}
                        </p>
                      </div>
                    </div>

                    {/* Preferred Locations */}
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#6C47FF] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-extrabold text-slate-900">Preferred Locations</p>
                        <p className="text-[11px] font-semibold text-slate-600 mt-0.5">
                          {preferredLocations}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONFIRM BOOKING BOTTOM BAR */}
          <div className="bg-gradient-to-r from-[#6355F6] via-[#7B59F6] to-[#E2558E] rounded-3xl p-5 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-0.5 text-center sm:text-left">
              <h3 className="text-base font-black tracking-tight flex items-center justify-center sm:justify-start gap-1.5">
                Confirm Booking slot →
              </h3>
              <p className="text-xs font-semibold text-white/90">
                Total Rate: ₹300 per session • Duration: 1-2 hrs • ({selectedDay}, Oct {selectedDate} • {selectedSlot})
              </p>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={handleConfirmBooking}
                className="px-8 py-3.5 rounded-2xl bg-[#5833B6] hover:bg-[#49279D] text-white text-xs font-black shadow-lg transition active:scale-[0.99] flex items-center gap-2 border border-white/20 cursor-pointer"
              >
                <span>Confirm Slot</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* 3. SUCCESS MODAL */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-3xl bg-purple-100 text-[#6C47FF] mx-auto flex items-center justify-center text-3xl shadow-sm">
              🧹
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#14244A]">
                Housekeeping Slot Requested!
              </h3>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                Your request has been forwarded to Shital Patil for{" "}
                <span className="text-slate-900 font-bold">
                  {selectedDay}, Oct {selectedDate} during {selectedSlot} ({slotDetails[selectedSlot]})
                </span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 text-left text-xs font-bold text-amber-800 space-y-1 border border-amber-200">
              <p>✦ Status: Awaiting Staff Approval</p>
              <p className="text-slate-600 font-semibold text-[11px]">
                Once Shital Patil approves this booking on her dashboard, it will be marked as Confirmed in your dashboard.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="flex-1 py-3 rounded-2xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => router.push("/student/bookings")}
                className="flex-1 py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835E5] text-white text-xs font-black shadow-md shadow-purple-200 transition cursor-pointer"
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