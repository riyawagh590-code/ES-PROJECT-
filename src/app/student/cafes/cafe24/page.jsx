"use client";

import React, { useState, useEffect } from "react";
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
  Coffee,
  CheckCircle2,
  Plus,
  Sparkles,
} from "lucide-react";

export default function Cafe24DetailsPage() {
  const router = useRouter();
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewsList, setReviewsList] = useState([]);

  // Base fallback reviews
  const defaultReviews = [
    {
      id: "base-1",
      reviewer: "Sneha P.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      reviewText: "Amazing cold coffee & cheesy fries! Best place to hang out.",
      rating: 5,
      date: "Oct 10, 2026",
      tag: "① 🥤🍟😁",
    },
    {
      id: "base-2",
      reviewer: "Rajat M.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      reviewText: "Affordable prices, very friendly staff.",
      rating: 4.5,
      date: "Oct 8, 2026",
      tag: "② 👤👍😊",
    },
    {
      id: "base-3",
      reviewer: "Kabir D.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      reviewText: "Waffles are worth every rupee. Super fast service!",
      rating: 5,
      date: "Oct 5, 2026",
      tag: "③ 👤🧇⚡",
    },
  ];

  // Dynamic review loading from LocalStorage
  // Dynamic review loading from LocalStorage
  useEffect(() => {
    try {
      // 1. Get currently logged-in student name dynamically
      const sessionUser = JSON.parse(
        localStorage.getItem("current_user") ||
        localStorage.getItem("currentUser") ||
        "{}"
      );
      const currentStudentName = sessionUser.fullName || sessionUser.name || "Verified Student";
      const currentStudentAvatar = localStorage.getItem("profile_avatar") || sessionUser.avatar;

      const stored = JSON.parse(localStorage.getItem("student_reviews") || "[]");
      
      // Filter reviews specific to Cafe 24 or show general ones
      const cafeReviews = stored
        .filter((r) => !r.vendor || r.vendor === "Cafe 24")
        .map((r) => ({
          id: r.id,
          reviewer: r.reviewer || (r.anonymous ? "Anonymous Student" : currentStudentName),
          avatar: r.anonymous
            ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
            : (r.avatar || currentStudentAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"),
          reviewText: r.reviewText,
          rating: r.rating || 5,
          date: r.date || "Just now",
          categoryRatings: r.categoryRatings,
          tag: "Verified Student ★",
        }));

      setReviewsList([...cafeReviews, ...defaultReviews]);
    } catch (e) {
      console.error(e);
      setReviewsList(defaultReviews);
    }
  }, []);

  const combos = [
    {
      id: "fuel",
      title: "Student Fuel Combo",
      subtitle: "Maggie 🍜 + Coffee ☕",
      price: "₹99",
      badge: "Best Seller",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "chill",
      title: "Evening Chill Combo",
      subtitle: "Veg Burger 🍔 + French Fries",
      price: "₹120",
      badge: "Special Offer",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "sweet",
      title: "Sweet Treat Combo",
      subtitle: "Choco Waffle 🧇 + Ice Cream",
      price: "₹140",
      badge: "Craving Buster",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
      image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&auto=format&fit=crop&q=80",
    },
  ];

  const handleOrderCombo = (combo) => {
    setSelectedCombo(combo);

    const newBooking = {
      id: `BK-CF-${Date.now()}`,
      service: "Cafe",
      vendor: "Cafe 24",
      item: combo.title,
      price: combo.price,
      slot: "Grab between 3:00 PM - 6:00 PM",
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

    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#F6F0FF] to-[#E8F5FF] text-[#14244A] font-sans flex antialiased selection:bg-purple-200">
      {/* 1. LEFT SIDEBAR */}
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
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-4 h-4 shrink-0 text-slate-400" />
                <span>Dashboard</span>
              </div>
            </Link>

            <Link
              href="/bookings"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <CalendarDays className="w-4 h-4 shrink-0 text-slate-400" />
              <span>My Bookings</span>
            </Link>

            {/* Ratings & Review (Points to review page) */}
            <Link
              href="/student/cafes/cafe24/review"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold bg-[#6C47FF] text-white shadow-md shadow-purple-200 transition"
            >
              <div className="flex items-center gap-3">
                <MessageSquarePlus className="w-4 h-4 shrink-0 text-white" />
                <span>Ratings &amp; Review</span>
              </div>
              <span className="text-sm">✍️</span>
            </Link>

            <Link
              href="/pass"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <Settings className="w-4 h-4 shrink-0 text-slate-400" />
              <span>Freshers Pass</span>
            </Link>

            <Link
              href="/student/profile"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <Settings className="w-4 h-4 shrink-0 text-slate-400" />
              <span>Profile</span>
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

      {/* 2. MAIN CONTENT VIEWPORT */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-purple-100/60 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[#F4F5F9] p-1.5 rounded-2xl border border-slate-200/50" />

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-2 bg-white/90 rounded-xl w-64 border border-purple-100/80 shadow-sm">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
  type="text"
  placeholder="Search cafes, menu items..."
  className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
  suppressHydrationWarning
  data-lpignore="true"
  autoComplete="off"
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
            href="/student/cafes"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-purple-100 text-xs font-bold text-slate-700 hover:text-[#6C47FF] shadow-sm transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Cafes &amp; Restaurants</span>
          </Link>

          {/* HERO CARD */}
          <div className="relative rounded-[32px] bg-gradient-to-br from-white/90 via-[#FDF8FF]/95 to-[#F1F6FF]/90 p-6 sm:p-8 border border-purple-100 shadow-[0_15px_40px_rgba(108,71,255,0.06)] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-black text-[#14244A] tracking-tight flex items-center gap-2">
                  <span>Cafe 24</span>
                  <span className="text-amber-400 text-xl">✨</span>
                </h1>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F8EE] text-[#0FAF53] text-xs font-extrabold border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF5DC] text-[#D98200] text-xs font-black border border-amber-100">
                  4.6 ★ <span className="text-slate-500 font-medium">({reviewsList.length * 75 + 9} reviews)</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 text-slate-600 text-xs font-semibold shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Main Campus Food Court • Distance: 100 m
                </span>
              </div>

              <Link
                href="/student/cafes/cafe24/review"
                className="px-5 py-2.5 rounded-2xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-black shadow-md shadow-purple-200 transition flex items-center gap-2"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Write a Review</span>
              </Link>
            </div>

            {/* Gallery + Price Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              <div className="lg:col-span-5 h-[280px] rounded-3xl overflow-hidden shadow-sm relative group bg-white border border-purple-100/60 p-2">
                <div className="absolute top-1 left-2 w-14 h-6 bg-gradient-to-r from-pink-400 to-purple-400 opacity-80 -rotate-12 rounded-sm shadow-sm z-10" />
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80"
                  alt="Cafe 24 Ambient Seating"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-purple-600/90 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm -rotate-3">
                  Campus Chill Corner ッ
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3.5 h-[280px]">
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm border border-purple-50">
                  <img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80"
                    alt="Cheese Pizza"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm relative border border-purple-50">
                  <img
                    src="https://images.unsplash.com/photo-1572442388796-11668ba67e53?w=500&auto=format&fit=crop&q=80"
                    alt="Cappuccino Cup"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-black backdrop-blur-[2px]">
                    View Cafe Photos (+12)
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 rounded-3xl p-6 bg-gradient-to-br from-[#FF9E44] via-[#F87171] to-[#8B5CF6] text-white shadow-lg shadow-orange-100 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                  Avg. Cost:
                </span>
                <h3 className="text-3xl font-black text-white tracking-tight mt-1">
                  ₹150 for two
                </h3>
                <div className="mt-4 pt-3 border-t border-white/20 w-full">
                  <p className="text-xs font-bold text-white/90">Type:</p>
                  <p className="text-sm font-black text-white mt-0.5 flex items-center justify-center gap-1.5">
                    <Coffee className="w-4 h-4 inline" /> Fast Food, Beverages, Cafe
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 CATEGORY PERFORMANCE STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Taste & Food Quality", icon: "🍔", val: "4.9/5", bar: "w-[98%]" },
              { label: "Drinks & Beverages", icon: "☕", val: "4.8/5", bar: "w-[96%]" },
              { label: "Value for Money", icon: "💰", val: "4.7/5", bar: "w-[94%]" },
              { label: "Speed & Service", icon: "⚡", val: "4.9/5", bar: "w-[98%]" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-purple-100/70 shadow-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base">{stat.icon}</span>
                  <span className="text-xs font-black text-[#6C47FF]">{stat.val}</span>
                </div>
                <p className="text-[11px] font-bold text-slate-700">{stat.label}</p>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className={`bg-[#6C47FF] h-full rounded-full ${stat.bar}`} />
                </div>
              </div>
            ))}
          </div>

          {/* MENU & REVIEWS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Menu Highlights (6 Cols) */}
            <div className="lg:col-span-6 bg-white/90 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-4">
              <div>
                <h3 className="text-base font-black text-[#14244A] flex items-center gap-1.5">
                  Menu &amp; Service description ッ
                </h3>
                <p className="text-xs font-bold text-slate-400 mt-0.5">
                  Customized menu highlights
                </p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm font-bold text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-xl">☕</span>
                  <div>
                    <h4 className="font-black text-slate-900">Artisanal Beverages</h4>
                    <p className="text-xs font-medium text-slate-500">Premium Espresso, Chai, Iced Lattes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">🍔</span>
                  <div>
                    <h4 className="font-black text-slate-900">Quick Bites</h4>
                    <p className="text-xs font-medium text-slate-500">Burgers, Sandwiches, Fries, Pizzas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">🧇</span>
                  <div>
                    <h4 className="font-black text-slate-900">Desserts &amp; Waffles</h4>
                    <p className="text-xs font-medium text-slate-500">Choco Waffles, Pastries</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📦</span>
                  <div>
                    <h4 className="font-black text-slate-900">Hostels Door Delivery</h4>
                    <p className="text-xs font-medium text-slate-500">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Customer Reviews (6 Cols) */}
            <div className="lg:col-span-6 bg-white/90 backdrop-blur-sm rounded-[32px] p-7 border border-purple-100/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black text-[#14244A]">
                  Customer Reviews ({reviewsList.length})
                </h3>
                <Link
                  href="/student/cafes/cafe24/review"
                  className="text-xs font-extrabold text-[#6C47FF] hover:underline"
                >
                  + Add Review
                </Link>
              </div>

              <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                {reviewsList.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-3.5 rounded-2xl bg-gradient-to-r from-[#F7F9FF] to-[#FAF7FF] border border-blue-100/60 flex items-start justify-between gap-3 shadow-sm"
                  >
                    <div className="text-xs font-bold text-slate-800 space-y-1">
                      <p className="text-xs leading-relaxed font-semibold text-slate-700">
                        &quot;{rev.reviewText}&quot;
                      </p>
                      <div className="flex items-center gap-2 pt-1 text-[10px] text-slate-400 font-bold">
                        <span className="text-amber-500">★ {rev.rating}/5</span>
                        <span>•</span>
                        <span>{rev.date}</span>
                        <span>•</span>
                        <span className="text-purple-600 font-extrabold">{rev.tag}</span>
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
          </div>

          {/* TODAY'S SPECIAL COMBOS SECTION */}
          <div className="space-y-4 pt-2">
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-black text-[#14244A] flex items-center justify-center gap-2">
                <span>ッ Today&apos;s Special Combos 🍕 ッ</span>
              </h2>
              <p className="text-xs sm:text-sm font-bold text-slate-500">
                Limited Time Offers • Grab yours between 3:00 PM - 6:00 PM <br />
                <span className="text-purple-600 font-extrabold">(Between Lunch &amp; Dinner)</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {combos.map((combo) => (
                <div
                  key={combo.id}
                  className="bg-white/95 backdrop-blur-sm rounded-[32px] p-5 border border-purple-100/80 shadow-md shadow-purple-100/40 flex flex-col justify-between space-y-4 group hover:shadow-xl hover:border-purple-200 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-base font-black text-[#14244A]">
                        {combo.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-500 mt-0.5">
                        {combo.subtitle}
                      </p>
                      <p className="text-2xl font-black text-[#14244A] mt-1">
                        {combo.price}
                      </p>
                    </div>

                    <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                      <img
                        src={combo.image}
                        alt={combo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className={`absolute bottom-2.5 left-2.5 text-[10px] font-black px-2.5 py-1 rounded-full border shadow-sm ${combo.badgeColor}`}>
                        {combo.badge}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOrderCombo(combo)}
                    className="w-full py-3.5 rounded-2xl bg-[#6C47FF] hover:bg-[#5835E5] text-white text-xs font-black shadow-md shadow-purple-200 transition active:scale-[0.99] flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                    <span>Order Combo</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* 3. ORDER CONFIRMATION MODAL */}
      {isModalOpen && selectedCombo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center text-3xl shadow-sm">
              🍕
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#14244A]">
                Combo Ordered Successfully!
              </h3>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                You have ordered <span className="text-slate-900 font-bold">{selectedCombo.title}</span> ({selectedCombo.subtitle}) for{" "}
                <span className="text-slate-900 font-bold">{selectedCombo.price}</span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50 text-left text-xs font-bold text-[#6C47FF] space-y-1">
              <p>✦ Grab between: 3:00 PM - 6:00 PM today at Cafe 24 counter</p>
              <p className="text-slate-500 font-semibold text-[11px]">
                Order ticket saved to your student dashboard bookings.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3 rounded-2xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
              >
                Done
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