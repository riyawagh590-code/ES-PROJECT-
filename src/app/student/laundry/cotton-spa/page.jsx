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
  ChevronDown,
  CheckCircle2,
  Calendar as CalendarIcon,
  Shirt,
  Phone,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";

export default function CottonSpaDetailsPage() {
  const router = useRouter();

  // Booking states
  const [selectedLocation, setSelectedLocation] = useState("MIT-AOE Gate");
  const [selectedDay, setSelectedDay] = useState("Mon");
  const [selectedSlot, setSelectedSlot] = useState("Morning");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Dynamic Live Availability & Timings from CottonSpa Owner
  const [availability, setAvailability] = useState({
    timings: "8:00 AM - 10:00 PM",
    days: "Monday, Wednesday, Friday, Saturday",
    activeDays: ["Mon", "Wed", "Fri", "Sat"],
    locationCoverage: "MIT-AOE Gate, Dehu Phata, Hostels",
  });

  // Dynamic Live Service Rates from CottonSpa Owner
  const [servicePrices, setServicePrices] = useState({
    normalWash: "₹100/load (Max 7kg)",
    ironing: "₹30/item",
    dryCleaning: "₹80/item",
    premiumWash: "₹150/item",
  });

  // Reviews state (Synced with LocalStorage)
  const defaultReviews = [
    {
      id: "rev-lnd-1",
      reviewer: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      reviewText: "Clothes were washed, neatly folded, and delivered right on time!",
      rating: 5,
      date: "Oct 12, 2026",
      tag: "Verified Student ★",
    },
    {
      id: "rev-lnd-2",
      reviewer: "Rohan Patil",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      reviewText: "Very reasonable pricing at ₹60/kg. Crisp ironing on formals.",
      rating: 4.8,
      date: "Oct 9, 2026",
      tag: "Verified Student ★",
    },
    {
      id: "rev-lnd-3",
      reviewer: "Sneha Kulkarni",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
      reviewText: "Convenient pickup from college gate. Best laundry service in Dehu Phata.",
      rating: 4.5,
      date: "Oct 6, 2026",
      tag: "Verified Student ★",
    },
  ];

  const [reviewsList, setReviewsList] = useState(defaultReviews);

  // Sync Live Data from LocalStorage
  const loadLiveData = useCallback(() => {
    try {
      // 1. Fetch Dynamic Availability & Days
      const savedAvail = localStorage.getItem("cotton_spa_availability");
      if (savedAvail) {
        setAvailability(JSON.parse(savedAvail));
      }

      // 2. Fetch Dynamic Pricing
      const savedPrices = localStorage.getItem("cotton_spa_prices");
      if (savedPrices) {
        setServicePrices(JSON.parse(savedPrices));
      }

      // 3. Fetch Dynamic Reviews
      const stored = JSON.parse(localStorage.getItem("student_reviews") || "[]");
      const laundryReviews = stored
        .filter(
          (r) =>
            !r.vendor ||
            r.vendor.toLowerCase().includes("cotton") ||
            r.service?.toLowerCase().includes("laundry")
        )
        .map((r) => ({
          id: r.id,
          reviewer: r.reviewer || (r.anonymous ? "Anonymous Student" : "Riya Wagh"),
          avatar: r.anonymous
            ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
            : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
          reviewText: r.reviewText,
          rating: r.rating || 5,
          date: r.date || "Just now",
          tag: "Verified Student ★",
        }));

      setReviewsList([...laundryReviews, ...defaultReviews]);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    loadLiveData();
    window.addEventListener("storage", loadLiveData);
    window.addEventListener("focus", loadLiveData);
    return () => {
      window.removeEventListener("storage", loadLiveData);
      window.removeEventListener("focus", loadLiveData);
    };
  }, [loadLiveData]);

  const slotTimingDetails = {
    Morning: "9:00 - 10:00 AM",
    Afternoon: "2:00 - 3:00 PM",
    Evening: "6:00 - 7:00 PM",
  };

  const dayDates = {
    Mon: "Mon, Oct 12 at 09:30 AM",
    Tue: "Tue, Oct 13 at 09:30 AM",
    Wed: "Wed, Oct 14 at 09:30 AM",
    Thu: "Thu, Oct 15 at 09:30 AM",
    Fri: "Fri, Oct 16 at 09:30 AM",
    Sat: "Sat, Oct 17 at 09:30 AM",
  };

  const deliveryEstimates = {
    Mon: "Wed, Oct 14 at 05:00 PM",
    Tue: "Thu, Oct 15 at 05:00 PM",
    Wed: "Fri, Oct 16 at 05:00 PM",
    Thu: "Sat, Oct 17 at 05:00 PM",
    Fri: "Sun, Oct 18 at 05:00 PM",
    Sat: "Mon, Oct 19 at 05:00 PM",
  };

  const handleConfirmPickup = () => {
    const newBooking = {
      id: `BK-LND-${Date.now()}`,
      service: "Laundry",
      vendor: "CottonSpa",
      location: selectedLocation,
      item: `CottonSpa Laundry Pickup (${selectedDay})`,
      price: "₹60/kg (₹100/load min)",
      rate: "₹60/kg",
      slot: `${selectedDay} ${selectedSlot} (${slotTimingDetails[selectedSlot]})`,
      pickupTime: dayDates[selectedDay] || "Scheduled Pickup",
      deliveryTime: deliveryEstimates[selectedDay] || "Within 48 hours",
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
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-4 h-4 shrink-0 text-slate-400" />
                <span>Dashboard</span>
              </div>
            </Link>

            <Link
              href="/student/bookings"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <CalendarDays className="w-4 h-4 shrink-0 text-slate-400" />
              <span>My Bookings</span>
            </Link>

            <Link
              href="/student/laundry/cotton-spa/review"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold bg-[#6C47FF] text-white shadow-md shadow-purple-200 transition"
            >
              <div className="flex items-center gap-3">
                <MessageSquarePlus className="w-4 h-4 shrink-0 text-white" />
                <span>Ratings &amp; Review</span>
              </div>
              <span className="text-xs">✍️</span>
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
                placeholder="Search laundry, pickups..."
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
            href="/student/laundry"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-purple-100 text-xs font-bold text-slate-700 hover:text-[#6C47FF] shadow-sm transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Laundry Services</span>
          </Link>

          {/* ===================================================
              TOP HERO CARD SECTION (PRICING DETAILS BESIDE PHOTOS)
          ==================================================== */}
          <div className="relative rounded-[32px] bg-gradient-to-br from-white/90 via-[#FDF8FF]/95 to-[#F1F6FF]/90 p-6 sm:p-8 border border-purple-100 shadow-[0_15px_40px_rgba(108,71,255,0.06)] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-black text-[#14244A] tracking-tight">
                  Cotton Spa Laundry
                </h1>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F8EE] text-[#0FAF53] text-xs font-extrabold border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF5DC] text-[#D98200] text-xs font-black border border-amber-100">
                  4.7 ★ <span className="text-slate-500 font-medium">({reviewsList.length + 177} reviews)</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 text-slate-600 text-xs font-semibold shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Ganesh Colony • Distance from College: 400 m
                </span>
              </div>
            </div>

            {/* Gallery + Dynamic Pricing Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              <div className="lg:col-span-5 h-[280px] rounded-3xl overflow-hidden shadow-sm relative group bg-white border border-purple-100/60 p-2">
                <div className="absolute top-1 left-2 w-14 h-6 bg-gradient-to-r from-pink-400 to-purple-400 opacity-80 -rotate-12 rounded-sm shadow-sm z-10" />
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&auto=format&fit=crop&q=80"
                  alt="Laundromat washing machines"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="lg:col-span-3 flex flex-col gap-3.5 h-[280px]">
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm border border-purple-50">
                  <img
                    src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&auto=format&fit=crop&q=80"
                    alt="Neatly folded clothes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm relative border border-purple-50">
                  <img
                    src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=500&auto=format&fit=crop&q=80"
                    alt="Laundry basket"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-black backdrop-blur-[2px]">
                    View All Photos (+8)
                  </div>
                </div>
              </div>

              {/* DYNAMIC PRICING DETAILS BOX */}
              <div className="lg:col-span-4 bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-purple-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-purple-50">
                    <h3 className="text-sm font-black text-[#14244A] flex items-center gap-1.5">
                      <span>🏷️</span> Pricing Details
                    </h3>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Live Rates
                    </span>
                  </div>

                  <div className="space-y-3 pt-3 text-xs font-bold text-slate-700">
                    <div className="flex items-center justify-between">
                      <span>Normal Wash</span>
                      <span className="font-black text-slate-900">{servicePrices.normalWash}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Ironing / Pressing</span>
                      <span className="font-black text-slate-900">{servicePrices.ironing}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Dry Cleaning</span>
                      <span className="font-black text-slate-900">{servicePrices.dryCleaning}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Premium Wash</span>
                      <span className="font-black text-slate-900">{servicePrices.premiumWash}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-purple-50 flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span className="text-emerald-600">✓ Free Campus Pickup</span>
                  <span>48-hr Turnaround</span>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              OUR SERVICES SECTION
          ==================================================== */}
          <div className="space-y-3">
            <h2 className="text-lg font-black text-[#14244A]">Our Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-3xl p-3 border border-purple-100/80 shadow-sm text-center space-y-2">
                <div className="h-28 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400&auto=format&fit=crop&q=80"
                    alt="Normal Wash"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xs font-black text-slate-900">Normal Wash</h4>
              </div>

              <div className="bg-white rounded-3xl p-3 border border-purple-100/80 shadow-sm text-center space-y-2">
                <div className="h-28 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&auto=format&fit=crop&q=80"
                    alt="Premium Wash"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xs font-black text-slate-900">Premium Wash</h4>
              </div>

              <div className="bg-white rounded-3xl p-3 border border-purple-100/80 shadow-sm text-center space-y-2">
                <div className="h-28 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400&auto=format&fit=crop&q=80"
                    alt="Ironing / Pressing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xs font-black text-slate-900">Ironing / Pressing</h4>
              </div>

              <div className="bg-white rounded-3xl p-3 border border-purple-100/80 shadow-sm text-center space-y-2">
                <div className="h-28 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&auto=format&fit=crop&q=80"
                    alt="Dry Cleaning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xs font-black text-slate-900">Dry Cleaning</h4>
              </div>
            </div>
          </div>

          {/* ===================================================
              TWO COLUMN SECTION:
              LEFT: DYNAMIC REVIEWS
              RIGHT: CONFIRM & SCHEDULE PICKUP + VENDOR SCHEDULE CARD
          ==================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT: REVIEWS */}
            <div className="lg:col-span-5 bg-white/90 backdrop-blur-sm rounded-[32px] p-6 border border-purple-100/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-purple-50">
                <div>
                  <h3 className="text-base font-black text-[#14244A] flex items-center gap-1.5">
                    <span>💬</span> Customer Reviews ({reviewsList.length})
                  </h3>
                  <span className="text-xs font-bold text-amber-500">
                    ★★★★★ (4.7 Rating)
                  </span>
                </div>
                <Link
                  href="/student/laundry/cotton-spa/review"
                  className="px-3 py-1 rounded-xl bg-purple-50 text-[#6C47FF] text-xs font-black hover:bg-purple-100 transition"
                >
                  + Add Review
                </Link>
              </div>

              <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                {reviewsList.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-3.5 rounded-2xl bg-gradient-to-r from-[#F7F9FF] to-[#FAF7FF] border border-blue-100/60 flex items-start justify-between gap-3 shadow-2xs"
                  >
                    <div className="text-xs font-bold text-slate-800 space-y-1">
                      <p className="text-xs font-semibold text-slate-700 leading-snug">
                        &quot;{rev.reviewText}&quot;
                      </p>
                      <div className="flex items-center gap-2 pt-0.5 text-[10px] text-slate-400 font-bold">
                        <span className="text-amber-500">★ {rev.rating}/5</span>
                        <span>•</span>
                        <span>{rev.date}</span>
                        <span>•</span>
                        <span className="text-purple-600 font-extrabold">{rev.tag || "Verified Student"}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <img
                        src={rev.avatar}
                        alt={rev.reviewer}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-purple-100 shadow-sm"
                      />
                      <span className="text-[11px] font-bold text-slate-600 hidden sm:inline">
                        {rev.reviewer}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: CONFIRM & SCHEDULE PICKUP + LIVE VENDOR AVAILABILITY CARD */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-5">
                <div className="space-y-1">
                  <h3 className="text-lg font-black text-[#14244A]">
                    Confirm &amp; Schedule Your Pickup
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold">
                    Choose your pickup point, preferred day of the week, and timing slot
                  </p>
                </div>

                {/* Pickup Location Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700 block">
                    Select Pickup Location:
                  </label>
                  <div className="relative">
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full bg-[#FAF9FD] border border-purple-100 rounded-2xl p-3.5 pr-10 text-xs font-bold text-slate-800 appearance-none focus:outline-none focus:border-[#6C47FF] cursor-pointer"
                    >
                      <option>MIT-AOE Gate</option>
                      <option>Dehu Phata (Opp. Gajanan Maharaj)</option>
                      <option>Girls Hostel A &amp; B</option>
                      <option>Ganesh Colony Main Road</option>
                      <option>Vishweshwar Nagar</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Pickup Day Dropdown & Timing Slots */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 block">
                    Select Pickup Day &amp; Time Slot:
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
                    {/* Days Dropdown */}
                    <div className="relative">
                      <select
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}
                        className="w-full bg-purple-50 border border-purple-200 text-[#6C47FF] rounded-2xl p-3.5 pr-8 text-xs font-black appearance-none focus:outline-none cursor-pointer"
                      >
                        <option value="Mon">Monday (Mon)</option>
                        <option value="Tue">Tuesday (Tue)</option>
                        <option value="Wed">Wednesday (Wed)</option>
                        <option value="Thu">Thursday (Thu)</option>
                        <option value="Fri">Friday (Fri)</option>
                        <option value="Sat">Saturday (Sat)</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-[#6C47FF] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    {/* Morning */}
                    <button
                      type="button"
                      onClick={() => setSelectedSlot("Morning")}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        selectedSlot === "Morning"
                          ? "bg-[#6C47FF] text-white border-[#6C47FF] shadow-md shadow-purple-200"
                          : "bg-white text-slate-700 border-purple-100 hover:border-purple-300"
                      }`}
                    >
                      <Sun className={`w-3.5 h-3.5 mx-auto mb-0.5 ${selectedSlot === "Morning" ? "text-amber-300" : "text-amber-500"}`} />
                      <p className="text-xs font-black">Morning</p>
                      <p className={`text-[9px] font-semibold ${selectedSlot === "Morning" ? "text-purple-100" : "text-slate-400"}`}>
                        9:00 - 10:00 AM
                      </p>
                    </button>

                    {/* Afternoon */}
                    <button
                      type="button"
                      onClick={() => setSelectedSlot("Afternoon")}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        selectedSlot === "Afternoon"
                          ? "bg-[#6C47FF] text-white border-[#6C47FF] shadow-md shadow-purple-200"
                          : "bg-white text-slate-700 border-purple-100 hover:border-purple-300"
                      }`}
                    >
                      <Sparkles className={`w-3.5 h-3.5 mx-auto mb-0.5 ${selectedSlot === "Afternoon" ? "text-amber-300" : "text-amber-500"}`} />
                      <p className="text-xs font-black">Afternoon</p>
                      <p className={`text-[9px] font-semibold ${selectedSlot === "Afternoon" ? "text-purple-100" : "text-slate-400"}`}>
                        2:00 - 3:00 PM
                      </p>
                    </button>

                    {/* Evening */}
                    <button
                      type="button"
                      onClick={() => setSelectedSlot("Evening")}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        selectedSlot === "Evening"
                          ? "bg-[#5833B6] text-white border-[#5833B6] shadow-md shadow-purple-200"
                          : "bg-white text-slate-700 border-purple-100 hover:border-purple-300"
                      }`}
                    >
                      <Moon className={`w-3.5 h-3.5 mx-auto mb-0.5 ${selectedSlot === "Evening" ? "text-purple-200" : "text-purple-500"}`} />
                      <p className="text-xs font-black">Evening</p>
                      <p className={`text-[9px] font-semibold ${selectedSlot === "Evening" ? "text-purple-200" : "text-slate-400"}`}>
                        6:00 - 7:00 PM
                      </p>
                    </button>
                  </div>
                </div>

                {/* Pickup & Est. Delivery Dates Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-[#FAF9FD] border border-purple-100 space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pickup:</span>
                    <p className="text-xs font-black text-slate-900">
                      {dayDates[selectedDay] || "Scheduled Pickup"}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF9FD] border border-purple-100 space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Est. Delivery:</span>
                    <p className="text-xs font-black text-emerald-600">
                      {deliveryEstimates[selectedDay] || "Within 48 hours"}
                    </p>
                  </div>
                </div>
              </div>

              {/* ===================================================
                  LIVE VENDOR AVAILABILITY CARD (RED-OUTLINED AREA)
              ==================================================== */}
              <div className="rounded-[28px] p-5 bg-white border border-purple-100/90 shadow-sm space-y-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-purple-50">
                  <span className="text-xs font-black text-[#14244A] flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4 text-[#6C47FF]" />
                    <span>CottonSpa Operational Availability &amp; Timings</span>
                  </span>
                  <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Live Schedule
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  {/* Working Hours */}
                  <div className="p-3 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase">
                      <Clock className="w-3 h-3 text-[#6C47FF]" />
                      <span>Working Hours</span>
                    </div>
                    <p className="font-black text-slate-900 text-xs">
                      {availability.timings || "8:00 AM - 10:00 PM"}
                    </p>
                  </div>

                  {/* Operational Pickup Days */}
                  <div className="p-3 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase">
                      <CalendarIcon className="w-3 h-3 text-[#6C47FF]" />
                      <span>Pickup Days</span>
                    </div>
                    <p className="font-black text-slate-900 text-xs truncate">
                      {availability.days || "Mon, Wed, Fri, Sat"}
                    </p>
                  </div>

                  {/* Location Coverage */}
                  <div className="p-3 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase">
                      <MapPin className="w-3 h-3 text-[#6C47FF]" />
                      <span>Service Area</span>
                    </div>
                    <p className="font-black text-slate-900 text-xs truncate">
                      {availability.locationCoverage || "MIT-AOE Gate, Dehu Phata"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              CONFIRM & BOOK PICKUP BOTTOM BAR
          ==================================================== */}
          <div className="bg-gradient-to-r from-[#6355F6] via-[#7B59F6] to-[#E2558E] rounded-3xl p-5 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-0.5 text-center sm:text-left">
              <h3 className="text-base font-black tracking-tight flex items-center justify-center sm:justify-start gap-1.5">
                Confirm &amp; Book Pickup →
              </h3>
              <p className="text-xs font-semibold text-white/90">
                Estimated summary: Starting at ₹60/kg • Delivery: {deliveryEstimates[selectedDay]} • ({selectedLocation})
              </p>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={handleConfirmPickup}
                className="px-8 py-3.5 rounded-2xl bg-[#5833B6] hover:bg-[#49279D] text-white text-xs font-black shadow-lg transition active:scale-[0.99] flex items-center gap-2 border border-white/20 cursor-pointer"
              >
                <span>Confirm &amp; Book Pickup</span>
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
              🧺
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#14244A]">
                Pickup Scheduled!
              </h3>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                Your laundry pickup from <span className="text-slate-900 font-bold">{selectedLocation}</span> has been requested for{" "}
                <span className="text-slate-900 font-bold">
                  {selectedDay} during {selectedSlot} ({slotTimingDetails[selectedSlot]})
                </span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 text-left text-xs font-bold text-amber-800 space-y-1 border border-amber-200">
              <p>✦ Status: Awaiting CottonSpa Confirmation</p>
              <p className="text-slate-600 font-semibold text-[11px]">
                The owner of CottonSpa will approve your request and it will be updated to Confirmed on your dashboard.
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