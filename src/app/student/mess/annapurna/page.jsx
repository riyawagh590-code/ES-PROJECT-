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
  CheckCircle2,
  MapPin,
  Music,
  Fan,
  Droplet,
  Wifi,
  Heart,
  Check,
} from "lucide-react";

export default function AnnapurnaDetailsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Monthly");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookedPlan, setBookedPlan] = useState(null);

  // Dynamic Menu State (Owner synchronized)
  const defaultMenu = {
    breakfast: {
      timing: "08:00 AM - 10:00 AM",
      items: ["Poha - Upma", "Upma - Dosa", "Unlimited Chai / Coffee"],
    },
    lunch: {
      timing: "12:00 PM - 03:00 PM",
      items: ["Paneer - Tomato", "Tomato, Chapati, Rice", "[Special: Gulab Jamun on Sunday]"],
    },
    dinner: {
      timing: "07:00 PM - 10:00 PM",
      items: ["Chole", "Veg Pulav, Roti, Salad", "[Healthy Buttermilk Included]"],
    },
  };
  const [menu, setMenu] = useState(defaultMenu);

  // Dynamic Reviews State
  const defaultReviews = [
    {
      id: "rev-mes-1",
      reviewer: "Snehal K.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      reviewText: "Very good! Highly recommended homestyle food.",
      rating: 5,
      date: "Oct 12, 2026",
    },
    {
      id: "rev-mes-2",
      reviewer: "Abhishek S.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      reviewText: "Healthy meal, feels just like home food.",
      rating: 4.8,
      date: "Oct 9, 2026",
    },
  ];
  const [reviewsList, setReviewsList] = useState(defaultReviews);

  // Load live menu updates and reviews from localStorage
  useEffect(() => {
    try {
      // 1. Check for owner menu updates
      const savedMenu = localStorage.getItem("annapurna_menu");
      if (savedMenu) {
        setMenu(JSON.parse(savedMenu));
      }

      // 2. Check for student reviews
      const storedReviews = JSON.parse(localStorage.getItem("student_reviews") || "[]");
      const messReviews = storedReviews
        .filter(
          (r) =>
            !r.vendor ||
            r.vendor.toLowerCase().includes("annapurna") ||
            r.service?.toLowerCase().includes("mess")
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
        }));

      if (messReviews.length > 0) {
        setReviewsList([...messReviews, ...defaultReviews]);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Pricing structure based on plan
  const planDetails = {
    Monthly: {
      price: "₹1,900",
      unit: "/month",
      rateSubtext: "Daily: ₹80/meal (Save 20%)",
      meals: "Unlimited Veg Meals",
    },
    Weekly: {
      price: "₹550",
      unit: "/week",
      rateSubtext: "Valid for 7 days (14 meals)",
      meals: "14 Meals Pass",
    },
    Daily: {
      price: "₹80",
      unit: "/thali",
      rateSubtext: "Single Meal Ticket (Lunch or Dinner)",
      meals: "1 Full Veg Thali",
    },
  };

  const handleBookPass = () => {
    const selected = planDetails[activeTab];
    const newBooking = {
      id: `BK-MES-${Date.now()}`,
      service: "Mess",
      vendor: "Annapurna Mess",
      item: `Annapurna ${activeTab} Pass`,
      price: `${selected.price} ${selected.unit}`,
      slot: activeTab === "Daily" ? "Valid for Today's Meal" : "Valid till 30 days",
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
      setBookedPlan({ ...selected, tab: activeTab });
      setIsModalOpen(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F6FC] text-[#14244A] font-sans flex antialiased">
      {/* 1. LEFT SIDEBAR */}
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
                Campus Feeds
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
              href="/student/bookings"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <CalendarDays className="w-4 h-4 shrink-0 text-slate-400" />
              <span>My Bookings</span>
            </Link>

            <Link
              href="/student/mess/annapurna/review"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold bg-[#6C47FF] text-white shadow-md shadow-purple-200 transition"
            >
              <div className="flex items-center gap-3">
                <MessageSquarePlus className="w-4 h-4 shrink-0 text-white" />
                <span>Rating &amp; Review</span>
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

        <div className="p-3 rounded-2xl bg-purple-50/60 border border-purple-100/50 text-center">
          <p className="text-[11px] font-black text-[#6C47FF]">
            Studentica Concierge
          </p>
          <p className="text-[9px] text-slate-400 font-semibold mt-0.5">
            Verified Campus Living ✦
          </p>
        </div>
      </aside>

      {/* 2. MAIN BODY */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[#F4F5F9] p-1.5 rounded-2xl border border-slate-200/50" />

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
                <p className="text-xs font-black text-[#14244A] leading-tight">
                  Hi, Riya!
                </p>
                <p className="text-[10px] text-slate-400 font-semibold">Student</p>
              </div>
            </Link>
          </div>
        </header>

        <main className="p-6 sm:p-8 space-y-6 max-w-[1350px] w-full mx-auto">
          <Link
            href="/student/mess"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#6C47FF] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Messes</span>
          </Link>

          {/* HERO CARD */}
          <div className="relative rounded-[32px] bg-gradient-to-br from-[#FFF2E6]/70 via-[#FFF9F3] to-[#F3ECFF]/80 p-6 sm:p-8 border border-orange-100 shadow-[0_15px_40px_rgba(20,36,74,0.04)] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-black text-[#14244A] tracking-tight">
                  Annapurna Monthly Mess
                </h1>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E3F9EC] text-[#0FAF53] text-xs font-black">
                  🌱 Veg
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EEFF] text-[#2F80ED] text-xs font-extrabold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Badge
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF5DC] text-[#D98200] text-xs font-black">
                  4.5 ★ <span className="text-slate-500 font-medium">({reviewsList.length * 50 + 20} reviews)</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/60 text-slate-600 text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Distance From College: 500 m
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C2C24] text-[#4ADE80] text-[11px] font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                Serves Monthly &amp; Daily basis (Closes 10:00 PM)
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              <div className="lg:col-span-7 h-[280px] rounded-2xl overflow-hidden shadow-sm relative group">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&auto=format&fit=crop&q=80"
                  alt="Mess Dining Area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="lg:col-span-2 flex flex-col gap-3.5 h-[280px]">
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format&fit=crop&q=80"
                    alt="Paneer Gravy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm relative">
                  <img
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80"
                    alt="Rice Dish"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-black backdrop-blur-[2px]">
                    View All Photos (+12)
                  </div>
                </div>
              </div>

              {/* Dynamic Pricing Box */}
              <div className="lg:col-span-3 bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center bg-[#F3F5FA] p-1 rounded-xl text-xs font-bold text-slate-500">
                    {["Monthly", "Weekly", "Daily"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setActiveTab(t)}
                        className={`flex-1 py-1.5 rounded-lg text-center transition ${
                          activeTab === t
                            ? "bg-white text-[#14244A] shadow-sm font-extrabold"
                            : "hover:text-slate-800"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-[#14244A] tracking-tight">
                      {planDetails[activeTab].price}
                      <span className="text-sm font-semibold text-slate-400">
                        {planDetails[activeTab].unit}
                      </span>
                    </h3>
                    <p className="text-xs font-bold text-slate-600 mt-1">
                      {planDetails[activeTab].rateSubtext}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-4">
                  <button
                    type="button"
                    onClick={handleBookPass}
                    className="w-full py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835E5] text-white text-xs font-black shadow-md shadow-purple-200 transition active:scale-[0.99] flex items-center justify-center gap-1.5"
                  >
                    <span>Book {activeTab} Pass</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-[#0FAF53]">🌱 Student Verified Food</span>
                    <button
                      type="button"
                      onClick={() => setActiveTab(activeTab === "Daily" ? "Monthly" : "Daily")}
                      className="text-slate-500 hover:text-slate-900 cursor-pointer underline"
                    >
                      {activeTab === "Daily" ? "Switch to Monthly" : "Book Daily (₹80)"}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-1 border-t border-slate-100 text-[10px] font-black text-slate-500">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">UPI</span>
                    <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700">GPay</span>
                    <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700">Card</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TODAY'S MENU (Owner synced) */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-[#14244A]">Today&apos;s Menu</h2>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                ● Live Updates from Kitchen
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Breakfast */}
              <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF1D9] flex items-center justify-center text-xl">
                    🥞
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#14244A]">Breakfast</h3>
                    <p className="text-[11px] text-slate-400 font-bold">{menu.breakfast.timing}</p>
                  </div>
                </div>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1.5 border-t border-slate-50">
                  {menu.breakfast.items.map((it, idx) => (
                    <p key={idx} className={idx === menu.breakfast.items.length - 1 ? "text-[#6C47FF]" : ""}>
                      • {it}
                    </p>
                  ))}
                </div>
              </div>

              {/* Lunch */}
              <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFEAF0] flex items-center justify-center text-xl">
                    🍲
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#14244A]">Lunch</h3>
                    <p className="text-[11px] text-slate-400 font-bold">{menu.lunch.timing}</p>
                  </div>
                </div>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1.5 border-t border-slate-50">
                  {menu.lunch.items.map((it, idx) => (
                    <p key={idx} className={idx === menu.lunch.items.length - 1 ? "text-[#E11D48]" : ""}>
                      • {it}
                    </p>
                  ))}
                </div>
              </div>

              {/* Dinner */}
              <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#EAF0FE] flex items-center justify-center text-xl">
                    🍛
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#14244A]">Dinner</h3>
                    <p className="text-[11px] text-slate-400 font-bold">{menu.dinner.timing}</p>
                  </div>
                </div>
                <div className="pt-2 text-xs font-bold text-slate-700 space-y-1.5 border-t border-slate-50">
                  {menu.dinner.items.map((it, idx) => (
                    <p key={idx} className={idx === menu.dinner.items.length - 1 ? "text-[#0FAF53]" : ""}>
                      • {it}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TIMINGS, AMENITIES, REVIEWS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-[#14244A]">Timings Tracker</h3>

              <div className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-purple-200">
                <div className="relative flex items-center justify-between text-xs font-bold">
                  <span className="absolute -left-6 w-4 h-4 rounded-full bg-[#6C47FF] text-white flex items-center justify-center text-[9px]">
                    ✓
                  </span>
                  <span className="text-slate-800">Breakfast</span>
                  <span className="text-slate-500 font-semibold">8:00–10:00</span>
                </div>

                <div className="relative flex items-center justify-between text-xs font-bold">
                  <span className="absolute -left-6 w-4 h-4 rounded-full bg-[#6C47FF] text-white flex items-center justify-center text-[9px]">
                    ✓
                  </span>
                  <span className="text-slate-800">Lunch</span>
                  <span className="text-slate-500 font-semibold">12:00–3:00</span>
                </div>

                <div className="relative flex items-center justify-between text-xs font-bold">
                  <span className="absolute -left-6 w-4 h-4 rounded-full bg-purple-300" />
                  <span className="text-slate-800">Dinner</span>
                  <span className="text-slate-500 font-semibold">7:00–10:00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-[#14244A]">Amenities</h3>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100/80">
                  <span className="text-base">🪑</span>
                  <p className="text-[10px] font-bold text-slate-700 mt-1">Table</p>
                </div>
                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100/80">
                  <span className="text-base">🛋️</span>
                  <p className="text-[10px] font-bold text-slate-700 mt-1">Chair</p>
                </div>
                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100/80">
                  <Fan className="w-4 h-4 mx-auto text-[#6C47FF]" />
                  <p className="text-[10px] font-bold text-slate-700 mt-1">Fan</p>
                </div>
                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100/80">
                  <Music className="w-4 h-4 mx-auto text-[#FF2E93]" />
                  <p className="text-[10px] font-bold text-slate-700 mt-1">Music</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center pt-1">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-700 text-[10px] font-bold flex items-center justify-center gap-1.5">
                  <Droplet className="w-3.5 h-3.5 text-blue-500" /> RO Water
                </div>
                <div className="p-2 rounded-xl bg-purple-50 text-purple-700 text-[10px] font-bold flex items-center justify-center gap-1.5">
                  <Wifi className="w-3.5 h-3.5 text-purple-500" /> Free Wi-Fi
                </div>
              </div>
            </div>

            {/* Dynamic Student Reviews Card */}
            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-[#14244A]">Student Reviews</h3>
                <Link
                  href="/student/mess/annapurna/review"
                  className="text-xs font-bold text-[#6C47FF] hover:underline"
                >
                  + Add
                </Link>
              </div>

              <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                {reviewsList.map((rev) => (
                  <div key={rev.id} className="text-xs space-y-0.5 border-b border-slate-50 pb-1.5 last:border-none">
                    <p className="font-bold text-slate-800 leading-snug">
                      &quot;{rev.reviewText}&quot;
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold">
                      <span className="text-amber-500 font-bold">★ {rev.rating}/5</span>
                      <span>- {rev.reviewer}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                <div className="text-amber-400 text-xs tracking-wider">
                  ★★★★★
                  <div className="text-[10px] text-slate-400 font-semibold">{reviewsList.length + 118} Verified ratings</div>
                </div>

                <div className="flex -space-x-2">
                  {reviewsList.slice(0, 3).map((r, i) => (
                    <img
                      key={i}
                      className="w-7 h-7 rounded-full ring-2 ring-white object-cover"
                      src={r.avatar}
                      alt={r.reviewer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BOOKING BAR */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-3 bg-white rounded-3xl p-4 border border-slate-100 shadow-sm space-y-1.5">
              <h4 className="text-[11px] font-black text-[#14244A]">Review Score Tracker</h4>
              <div className="space-y-1 text-[9px] font-bold text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span>5★</span>
                  <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full w-[85%]" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>4★</span>
                  <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-[#6C47FF] rounded-full w-[65%]" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>3★</span>
                  <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-slate-300 rounded-full w-[20%]" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>2★</span>
                  <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-slate-300 rounded-full w-[35%]" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>1★</span>
                  <div className="flex-1 h-1.5 rounded-full bg-slate-200 rounded-full w-[10%]" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-9 bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-black text-[#14244A] tracking-tight">
                  Book {activeTab} Pass →
                </h3>
              </div>

              <div className="flex items-center gap-5">
                <div className="text-right">
                  <span className="text-xl font-black text-[#14244A]">{planDetails[activeTab].price}</span>
                  <span className="text-xs text-slate-400 font-semibold"> {planDetails[activeTab].unit}</span>
                </div>

                <button
                  type="button"
                  onClick={handleBookPass}
                  className="px-7 py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835E5] text-white text-xs font-black shadow-md shadow-purple-200 transition active:scale-[0.99] cursor-pointer"
                >
                  Book {activeTab} Pass
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* CONFIRMATION MODAL */}
      {isModalOpen && bookedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl shadow-sm">
              🍲
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#14244A]">
                Pass Booked Successfully!
              </h3>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                You have activated the <span className="text-slate-900 font-bold">{bookedPlan.tab} Meal Pass</span> ({bookedPlan.meals}) for{" "}
                <span className="text-slate-900 font-bold">{bookedPlan.price}</span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50 text-left text-xs font-bold text-[#6C47FF] space-y-1">
              <p>✦ Status: Active Meal Pass Token Generated</p>
              <p className="text-slate-500 font-semibold text-[11px]">
                Show digital QR code at Annapurna Mess counter during lunch/dinner.
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
                onClick={() => router.push("/student/bookings")}
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