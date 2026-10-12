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
  CheckCircle2,
  MapPin,
  ChevronDown,
  Shirt,
  Sparkles,
  Check,
} from "lucide-react";

export default function CottonSpaLaundryPage() {
  const router = useRouter();

  const [selectedLocation, setSelectedLocation] = useState("MIT-AOE Gate");
  const [selectedDay, setSelectedDay] = useState("Mon");
  const [selectedSlot, setSelectedSlot] = useState("Morning");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const deliveryMapping = {
    Mon: "Wed, Oct 14 at 05:00 PM",
    Wed: "Fri, Oct 16 at 05:00 PM",
    Fri: "Sun, Oct 18 at 05:00 PM",
  };

  const handleConfirmBooking = () => {
    const newBooking = {
      id: `BK-LND-${Date.now()}`,
      service: "Laundry",
      vendor: "Cotton Spa Laundry",
      location: selectedLocation,
      pickupDay: selectedDay,
      pickupSlot: selectedSlot,
      deliveryTime: deliveryMapping[selectedDay] || "Wed, Oct 14 at 05:00 PM",
      price: "₹100/load",
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
    <div className="min-h-screen bg-[#F4F6FC] text-[#14244A] font-sans flex antialiased">
      {/* =====================================================
          1. LEFT SIDEBAR
      ====================================================== */}
      <aside className="hidden lg:flex flex-col w-[230px] bg-white border-r border-slate-100 p-4 shrink-0 justify-between sticky top-0 h-screen z-30">
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
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <LayoutDashboard className="w-4 h-4 shrink-0 text-slate-400" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/bookings"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <CalendarDays className="w-4 h-4 shrink-0 text-slate-400" />
              <span>My Bookings</span>
            </Link>

            

           {/* Replace the Add Review link inside the sidebar <nav> */}
          <Link
          href="/student/laundry/cotton-spa/review"
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
              <span>Settings</span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center justify-center pb-2">
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-center rotate-[-10deg] opacity-70">
            <span className="text-[10px] font-black leading-tight text-slate-400">
              hand-drawn<br />badge
            </span>
          </div>
        </div>
      </aside>

      {/* =====================================================
          2. MAIN BODY
      ====================================================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[#F4F5F9] p-1.5 rounded-2xl border border-slate-200/50">
            <Link
              href="/student"
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 transition"
            >
              Home
            </Link>
            <Link
              href="/bookings"
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 transition"
            >
              My Bookings
            </Link>
            <Link
              href="/pass"
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 transition"
            >
              Freshers Pass
            </Link>
            <Link
              href="/student/profile"
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 transition"
            >
              Profile
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-2 bg-[#F3F5FA] rounded-xl w-64 border border-slate-200/60">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search campus, services..."
                className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
            </div>

            <button
              type="button"
              className="relative p-2.5 rounded-xl bg-[#F3F5FA] text-slate-600 hover:text-slate-900 transition"
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
                className="w-9 h-9 rounded-full object-cover ring-2 ring-purple-100"
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
            href="/student/laundry"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#6C47FF] shadow-sm transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Laundry Services</span>
          </Link>

          {/* ===================================================
              HERO CARD SECTION
          ==================================================== */}
          <div className="relative rounded-[32px] bg-gradient-to-br from-[#EEF5FF]/80 via-[#F8FBFF] to-[#F3ECFF]/80 p-6 sm:p-8 border border-sky-100 shadow-[0_15px_40px_rgba(20,36,74,0.04)] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-black text-[#14244A] tracking-tight">
                  Cotton Spa Laundry
                </h1>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EEFF] text-[#2F80ED] text-xs font-extrabold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF5DC] text-[#D98200] text-xs font-black">
                  4.7 ★ <span className="text-slate-500 font-medium">(180 reviews)</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/60 text-slate-600 text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Ganesh Colony • Distance from College: 400 m
                </span>
              </div>
            </div>

            {/* Gallery + Quick Service Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              <div className="lg:col-span-7 h-[280px] rounded-2xl overflow-hidden shadow-sm relative group">
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=900&auto=format&fit=crop&q=80"
                  alt="Laundromat Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="lg:col-span-2 flex flex-col gap-3.5 h-[280px]">
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400&auto=format&fit=crop&q=80"
                    alt="Towels"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm relative">
                  <img
                    src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&auto=format&fit=crop&q=80"
                    alt="Washing Machines"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-black backdrop-blur-[2px]">
                    View All Photos (+8)
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#6C47FF] flex items-center justify-center mb-3">
                  <Shirt className="w-6 h-6" />
                </div>
                <span className="text-sm font-extrabold text-[#14244A]">
                  Quick Service:
                </span>
                <span className="text-xs font-extrabold text-slate-500 mt-0.5">
                  Starts at
                </span>
                <h3 className="text-3xl font-black text-[#14244A] tracking-tight mt-1">
                  ₹100<span className="text-sm font-semibold text-slate-400">/load</span>
                </h3>
              </div>
            </div>
          </div>

          {/* ===================================================
              OUR SERVICES (4 CARDS)
          ==================================================== */}
          <div className="space-y-3.5">
            <h2 className="text-lg font-black text-[#14244A]">Our Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-3xl p-3 border border-slate-100 shadow-sm space-y-3">
                <div className="h-36 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400&auto=format&fit=crop&q=80"
                    alt="Normal Wash"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center pb-1">
                  <h4 className="text-sm font-black text-[#14244A]">Normal Wash</h4>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-3 border border-slate-100 shadow-sm space-y-3">
                <div className="h-36 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400&auto=format&fit=crop&q=80"
                    alt="Premium Wash"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center pb-1">
                  <h4 className="text-sm font-black text-[#14244A]">Premium Wash</h4>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-3 border border-slate-100 shadow-sm space-y-3">
                <div className="h-36 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&auto=format&fit=crop&q=80"
                    alt="Ironing / Pressing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center pb-1">
                  <h4 className="text-sm font-black text-[#14244A]">Ironing / Pressing</h4>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-3 border border-slate-100 shadow-sm space-y-3">
                <div className="h-36 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&auto=format&fit=crop&q=80"
                    alt="Dry Cleaning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center pb-1">
                  <h4 className="text-sm font-black text-[#14244A]">Dry Cleaning</h4>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              PRICING DETAILS & CONFIRM & SCHEDULE YOUR PICKUP
          ==================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
              {/* Pricing Details */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                <h3 className="text-base font-black text-[#14244A]">Pricing Details</h3>
                <div className="space-y-3 text-xs font-bold text-slate-700">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-50">
                    <span>Normal Wash</span>
                    <span className="font-black text-slate-900">
                      ₹100/load <span className="text-[10px] text-slate-400 font-normal">(Max 7kg)</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-1 border-b border-slate-50">
                    <span>Ironing</span>
                    <span className="font-black text-slate-900">₹50/item</span>
                  </div>
                  <div className="flex items-center justify-between pb-1 border-b border-slate-50">
                    <span>Dry Cleaning</span>
                    <span className="font-black text-slate-900">₹80/item</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Premium Wash</span>
                    <span className="font-black text-slate-900">₹150/item</span>
                  </div>
                </div>
              </div>

              {/* Operational Pickup Days */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-3">
                <h3 className="text-base font-black text-[#14244A]">Operational Pickup Days</h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDay("Mon")}
                      className={`w-full py-2.5 rounded-2xl text-xs font-black transition ${
                        selectedDay === "Mon" ? "bg-[#C7D9EE] text-[#14244A]" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      Mon
                    </button>
                    <p className="text-xs font-bold text-slate-700">Mon</p>
                  </div>

                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDay("Wed")}
                      className={`w-full py-2.5 rounded-2xl text-xs font-black transition ${
                        selectedDay === "Wed" ? "bg-[#C7D9EE] text-[#14244A]" : "bg-[#D8E6F5] text-slate-700"
                      }`}
                    >
                      Wed
                    </button>
                    <p className="text-xs font-bold text-slate-700">Wed</p>
                  </div>

                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDay("Fri")}
                      className="w-full py-2.5 rounded-2xl text-xs font-black bg-[#5833B6] text-white shadow-md shadow-purple-200"
                    >
                      Fri
                    </button>
                    <p className="text-xs font-bold text-slate-700">Fri</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (7 Cols): Confirm & Schedule Your Pickup */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-base font-black text-[#14244A]">
                  Confirm &amp; Schedule Your Pickup
                </h3>

                {/* Dropdown Container */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 block">
                    Select Pickup Location
                  </label>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                    <div className="p-3.5 flex items-center justify-between border-b border-slate-100">
                      <span className="text-xs font-bold text-slate-800">{selectedLocation}</span>
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="bg-[#EAE6F9]/60 px-3.5 py-2 text-xs font-bold text-slate-800 border-b border-slate-100">
                      MIT-AOE Gate
                    </div>
                    <div className="px-3.5 py-2 text-xs font-medium text-slate-600">
                      Dehu Phata
                    </div>
                  </div>
                </div>

                {/* Day & Slots */}
                <div className="space-y-2 pt-1">
                  <label className="text-xs font-black text-slate-700 block">
                    Select Pickup Day &amp; Time
                  </label>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                    <span className="w-12">Days</span>
                    <span>Pickup slots (set)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-4 py-3 rounded-2xl bg-[#C7D9EE] text-xs font-black text-[#14244A]">
                      Mon
                    </span>

                    <div className="grid grid-cols-3 gap-2 flex-1">
                      <button
                        type="button"
                        onClick={() => setSelectedSlot("Morning")}
                        className={`p-2.5 rounded-2xl border text-center transition ${
                          selectedSlot === "Morning"
                            ? "bg-[#ECE7FD] border-[#6C47FF] text-[#6C47FF]"
                            : "bg-slate-50 border-slate-100 text-slate-700"
                        }`}
                      >
                        <p className="text-xs font-black">Morning</p>
                        <p className="text-[10px] font-semibold text-slate-500">9:00 - 10:00 AM</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedSlot("Afternoon")}
                        className={`p-2.5 rounded-2xl border text-center transition ${
                          selectedSlot === "Afternoon"
                            ? "bg-[#ECE7FD] border-[#6C47FF] text-[#6C47FF]"
                            : "bg-slate-50 border-slate-100 text-slate-700"
                        }`}
                      >
                        <p className="text-xs font-black">Afternoon</p>
                        <p className="text-[10px] font-semibold text-slate-500">2:00 - 3:00 PM</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedSlot("Evening")}
                        className={`p-2.5 rounded-2xl border text-center transition ${
                          selectedSlot === "Evening"
                            ? "bg-[#ECE7FD] border-[#6C47FF] text-[#6C47FF]"
                            : "bg-slate-50 border-slate-100 text-slate-700"
                        }`}
                      >
                        <p className="text-xs font-black">Evening</p>
                        <p className="text-[10px] font-semibold text-slate-500">6:00 - 7:00 PM</p>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pickup & Est. Delivery Boxes */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 text-xs">
                  <div className="w-full sm:flex-1 space-y-1">
                    <span className="font-bold text-slate-700 text-xs">Pickup:</span>
                    <div className="p-3 rounded-2xl border border-slate-200 bg-white font-bold text-slate-800 text-center shadow-sm">
                      Mon, Oct 12 at 09:30 AM
                    </div>
                  </div>

                  <span className="font-black text-slate-400 self-center sm:pt-4">&amp;</span>

                  <div className="w-full sm:flex-1 space-y-1">
                    <span className="font-bold text-slate-700 text-xs">Est. Delivery:</span>
                    <div className="p-3 rounded-2xl border border-slate-200 bg-white font-bold text-slate-800 text-center shadow-sm">
                      Wed, Oct 14 at 05:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              BOTTOM BAR: CONFIRM & BOOK PICKUP
          ==================================================== */}
          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h3 className="text-base font-black text-[#14244A]">
                Confirm &amp; Book Pickup →
              </h3>
            </div>

            <div className="text-xs font-bold text-slate-600 text-center sm:text-left">
              <p>Estimated summary/Notes: → ₹50/item</p>
              <p>
                <span className="font-black text-slate-900">Delivery:</span> Wed, Oct 14 at 05:00 PM
              </p>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={handleConfirmBooking}
                className="px-8 py-3.5 rounded-2xl bg-[#5833B6] hover:bg-[#49279D] text-white text-xs font-black shadow-lg shadow-purple-200 transition active:scale-[0.99] flex items-center gap-1.5"
              >
                <span>Confirm &amp; Book Pickup</span>
                <span className="text-sm">→</span>
              </button>

              {/* Hand Cursor Illustration */}
              <div className="absolute right-4 -bottom-4 pointer-events-none">
                <span className="text-2xl drop-shadow">👆</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* =====================================================
          3. SUCCESS POPUP MODAL (CONNECTS TO MY BOOKINGS)
      ====================================================== */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl shadow-sm">
              🧺
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#14244A]">
                Pickup Booked Successfully!
              </h3>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                Cotton Spa Laundry will pick up your items at{" "}
                <span className="text-slate-900 font-bold">{selectedLocation}</span> on{" "}
                <span className="text-slate-900 font-bold">
                  {selectedDay} ({selectedSlot})
                </span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50 text-left text-xs font-bold text-[#6C47FF] space-y-1">
              <p>✦ Delivery estimated: Wed, Oct 14 at 05:00 PM</p>
              <p className="text-slate-500 font-semibold text-[11px]">
                Your booking is synchronized with your student dashboard.
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