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
  Phone,
  Droplet,
  Wifi,
  Shirt,
  UtensilsCrossed,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function ManasHostelDetailsPage() {
  const router = useRouter();
  const [contactNumber, setContactNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendInquiry = (e) => {
    e.preventDefault();
    if (!contactNumber.trim()) {
      alert("Please enter your contact number.");
      return;
    }

    const newInquiry = {
      id: `INQ-HST-${Date.now()}`,
      service: "Hostel / PG",
      vendor: "Manas Hostel",
      contact: contactNumber,
      rent: "₹65,000 / yr (3 Sharing)",
      deposit: "₹10,000 / yr",
      status: "Inquiry Sent",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("student_bookings") || "[]");
      localStorage.setItem("student_bookings", JSON.stringify([newInquiry, ...existing]));
    } catch (err) {
      console.error(err);
    }

    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#F6F0FF] to-[#E8F5FF] text-[#14244A] font-sans flex antialiased selection:bg-purple-200">
      {/* =====================================================
          1. LEFT SIDEBAR
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
              href="/student/pg/manas/review"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
              >
            <MessageSquarePlus className="w-4 h-4 shrink-0 text-slate-400" />
             <span>Add Review</span>
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

        {/* Bottom Badge Stamp */}
        <div className="flex items-center justify-center pb-2">
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-purple-300 flex items-center justify-center text-center rotate-[-10deg] opacity-80">
            <span className="text-[10px] font-black leading-tight text-purple-400">
              hand-drawn<br />badge
            </span>
          </div>
        </div>
      </aside>

      {/* =====================================================
          2. MAIN CONTENT VIEWPORT
      ====================================================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-purple-100/60 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[#F4F5F9] p-1.5 rounded-2xl border border-slate-200/50">
            <Link
              href="/student"
              className="px-4 py-2 rounded-xl text-xs font-extrabold text-[#6C47FF] bg-[#EAE4FE] shadow-sm transition"
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
            <div className="hidden md:flex items-center gap-2 px-3.5 py-2 bg-white/90 rounded-xl w-64 border border-purple-100/80 shadow-sm">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search hostels, rooms..."
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
            href="/student/pg"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-purple-100 text-xs font-bold text-slate-700 hover:text-[#6C47FF] shadow-sm transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Hostels</span>
          </Link>

          {/* ===================================================
              HERO CARD SECTION
          ==================================================== */}
          <div className="relative rounded-[32px] bg-gradient-to-br from-white/90 via-[#FDF8FF]/95 to-[#F1F6FF]/90 p-6 sm:p-8 border border-purple-100 shadow-[0_15px_40px_rgba(108,71,255,0.06)] space-y-6">
            {/* Header Titles & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-black text-[#14244A] tracking-tight">
                  Manas Hostel
                </h1>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F8EE] text-[#0FAF53] text-xs font-extrabold border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF5DC] text-[#D98200] text-xs font-black border border-amber-100">
                  4.8 ★ <span className="text-slate-500 font-medium">(120 reviews)</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-purple-600" />
              <span>Distance from College: 350 m</span>
            </div>

            {/* Gallery + Hostel ID Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              {/* Photo 1: Primary Hostel Room with Washi Tape */}
              <div className="lg:col-span-5 h-[280px] rounded-3xl overflow-hidden shadow-sm relative group bg-white border border-purple-100/60 p-2">
                <div className="absolute top-1 left-2 w-14 h-6 bg-gradient-to-r from-pink-400 to-purple-400 opacity-80 -rotate-12 rounded-sm shadow-sm z-10" />
                <div className="absolute bottom-2 right-2 w-16 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-80 rotate-12 rounded-sm shadow-sm z-10" />

                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80"
                  alt="Manas Hostel Room Interior"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Photo 2 & 3: Building Exterior & Lounge */}
              <div className="lg:col-span-4 flex flex-col gap-3.5 h-[280px]">
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm border border-purple-50">
                  <img
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=500&auto=format&fit=crop&q=80"
                    alt="Hostel Exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm relative border border-purple-50">
                  <img
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=80"
                    alt="Common Area"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-black backdrop-blur-[2px]">
                    View Work Photos (+12)
                  </div>
                </div>
              </div>

              {/* Hostel ID / Gender Card */}
              <div className="lg:col-span-3 rounded-3xl p-6 bg-gradient-to-br from-[#FF9E44] via-[#F87171] to-[#8B5CF6] text-white shadow-lg shadow-orange-100 flex flex-col justify-center items-start text-left relative overflow-hidden">
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                  Hostel ID:
                </span>
                <h3 className="text-3xl font-black text-white tracking-tight mt-0.5">
                  M-102
                </h3>

                <div className="mt-5 pt-3 border-t border-white/20 w-full">
                  <p className="text-xs font-bold text-white/90">Gender:</p>
                  <p className="text-xl font-black text-white mt-0.5 leading-snug">
                  Girls Only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              BASIC INFO & SHARING TYPE
          ==================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Basic Information (8 Cols) */}
            <div className="lg:col-span-8 bg-white/90 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-4">
              <h3 className="text-lg font-black text-[#14244A]">
                Basic Information
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm font-bold text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-900 font-black">Location: </span>
                    <span className="text-slate-600">Near Campus Main Gate, Ganesh Colony</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-purple-600 shrink-0" />
                  <div>
                    <span className="text-slate-900 font-black">Owner Contact: </span>
                    <span className="text-slate-600">+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-base shrink-0">🧭</span>
                  <div>
                    <span className="text-slate-900 font-black">Dist. from College: </span>
                    <span className="text-slate-600">350 meters</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sharing Type (4 Cols) */}
            <div className="lg:col-span-4 bg-white/90 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-4">
              <h3 className="text-lg font-black text-[#14244A]">
                Sharing Type
              </h3>

              <div className="flex flex-col gap-2.5">
                <div className="px-4 py-2.5 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs font-bold text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  <span>2 Sharing </span>
                </div>
                <div className="px-4 py-2.5 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs font-bold text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  <span>3 Sharing </span>
                </div>
                <div className="px-4 py-2.5 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs font-bold text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  <span>4 Sharing </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              AMENITIES & AVAILABLE BEDS
          ==================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Amenities (6 Cols) */}
            <div className="lg:col-span-6 bg-white/90 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-4">
              <h3 className="text-lg font-black text-[#14244A]">
                Amenities
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm font-bold text-slate-700">
                <div className="flex items-start gap-3">
                  <Droplet className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>① RO Water <span className="text-slate-500 font-semibold">(24x7 purification)</span></span>
                </div>

                <div className="flex items-start gap-3">
                  <Wifi className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>② Wifi <span className="text-slate-500 font-semibold">(High-speed campus network)</span></span>
                </div>

                <div className="flex items-start gap-3">
                  <Shirt className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <div>
                    <span>③ Washing</span>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">(Laundry/washing machine room ...)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <UtensilsCrossed className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span>⑤ Food fac.</span>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">(Mess facilities available inside)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Beds (6 Cols) */}
            <div className="lg:col-span-6 bg-white/90 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-5 flex flex-col justify-between">
              <h3 className="text-lg font-black text-[#14244A]">
                Available Beds
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 to-purple-50/50 border border-blue-100/70 flex items-center justify-between">
                  <div className="text-sm font-black text-slate-800">
                    <span className="text-[#2F80ED]">3 Sharing</span> → 3 Bed Room
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black">
                    (Available)
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50/80 to-teal-50/50 border border-emerald-100/70 flex items-center justify-between">
                  <div className="text-sm font-black text-slate-800">
                    <span className="text-[#0FAF53]">2 Sharing</span> → 4 Bed Room
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black">
                    (Available)
                  </span>
                </div>
              </div>

              <div className="pt-2 text-right">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Verified Beds Tracker ✦
                </span>
              </div>
            </div>
          </div>

          {/* ===================================================
              RENT DETAILS & SEND INQUIRY DRAWER
          ==================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Rent Details (6 Cols) */}
            <div className="lg:col-span-6 bg-white/90 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-4">
              <h3 className="text-lg font-black text-[#14244A]">
                Rent Details
              </h3>

              <div className="space-y-3">
                <div className="text-base font-black text-slate-800">
                  3 Sharing: <span className="text-2xl text-[#6C47FF]">₹65,000</span> / yr
                </div>

                <div className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <span>💰</span>
                  <span>Deposit: <strong className="text-slate-900 font-black">₹10k</strong> / yr</span>
                </div>

                <div className="p-3.5 rounded-2xl border-2 border-dashed border-purple-200/90 bg-[#FBF9FE] text-xs font-black text-slate-700">
                  Note: Electricity included
                </div>
              </div>
            </div>

            {/* Send Inquiry Drawer (6 Cols) */}
            <div className="lg:col-span-6 bg-white rounded-[32px] p-7 border-2 border-purple-400 shadow-xl shadow-purple-100/50 space-y-4">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-black text-[#14244A]">
                  Send Inquiry
                </h3>
              </div>

              <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                Interested? Leave your number to speak with the owner of Manas Hostel.
              </p>

              <form onSubmit={handleSendInquiry} className="space-y-3.5 pt-1">
                <input
                  type="tel"
                  placeholder="Your Contact No."
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="w-full text-xs font-bold text-slate-800 bg-[#F8FAFD] border border-slate-200 rounded-2xl p-3.5 focus:outline-none focus:border-[#6C47FF] focus:ring-2 focus:ring-purple-100 transition"
                />

                <div className="relative">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#6C47FF] to-[#8B5CF6] hover:from-[#5835E5] hover:to-[#7C3AED] text-white font-black text-xs shadow-lg shadow-purple-200 transition active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Send Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="absolute right-4 -bottom-4 pointer-events-none">
                    <span className="text-2xl drop-shadow">👆</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>

      {/* =====================================================
          3. SUCCESS POPUP MODAL (SYNCED TO /BOOKINGS)
      ====================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-3xl bg-purple-100 text-[#6C47FF] mx-auto flex items-center justify-center text-3xl shadow-sm">
              🏡
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#14244A]">
                Inquiry Sent Successfully!
              </h3>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                The owner of <span className="text-slate-900 font-bold">Manas Hostel</span> will call you back at{" "}
                <span className="text-slate-900 font-bold">{contactNumber}</span> shortly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50 text-left text-xs font-bold text-[#6C47FF] space-y-1">
              <p>✦ Status: Inquiry Recorded in Student Hub</p>
              <p className="text-slate-500 font-semibold text-[11px]">
                You can view active inquiries under &quot;My Bookings&quot;.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
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