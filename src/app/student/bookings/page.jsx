"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Bell,
  UtensilsCrossed,
  Shirt,
  Coffee,
  Building2,
  QrCode,
  RotateCcw,
  Clock,
  ShieldCheck,
  Check,
  Download,
  MapPin,
  ExternalLink,
  MessageCircle,
  X,
} from "lucide-react";

export default function MyBookingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentStatus, setCurrentStatus] = useState("active");
  const [currentCategory, setCurrentCategory] = useState("all");
  const [dinnerSkipped, setDinnerSkipped] = useState(false);
  const [mealsRemaining, setMealsRemaining] = useState(42);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "Digital Counter QR",
    subtitle: "Student ID: STU-2026-8942",
    meta: "Present this code to the mess or shop counter",
    qrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=STU-2026-8942-VERIFIED-TOKEN",
  });

  // Toast State
  const [toastText, setToastText] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastText(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  const copyCode = (text, label) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    showToast(`${label} ${text} copied to clipboard!`);
  };

  const toggleSkipMeal = () => {
    if (!dinnerSkipped) {
      setDinnerSkipped(true);
      setMealsRemaining((prev) => prev + 1);
      showToast("Dinner marked as skipped! 1 token credited to your account.");
    } else {
      setDinnerSkipped(false);
      setMealsRemaining((prev) => prev - 1);
      showToast("Meal skip reverted. Dinner will be prepared tonight.");
    }
  };

  const openMealQrModal = (title, orderId) => {
    setModalData({
      title: `${title} • Pass`,
      subtitle: `Order: #${orderId} • Tokens Left: ${mealsRemaining + (dinnerSkipped ? 1 : 0)}`,
      meta: "Show to mess attendance counter to check in.",
      qrUrl: `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${orderId}-MEAL-TOKEN`,
    });
    setModalOpen(true);
  };

  const openFullscreenQr = () => {
    setModalData({
      title: "Digital Student Campus Pass",
      subtitle: "Riya Wagh • STU-2026-8942",
      meta: "Valid at MIT AOE partner messes, cafes & laundry counters.",
      qrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=STU-2026-8942-CAMPUS-PASS-ACTIVE",
    });
    setModalOpen(true);
  };

  // Card items dataset
  const bookings = [
    {
      id: "annapurna",
      category: "mess",
      status: "active",
      searchTerms: "annapurna mess monthly pass veg meal #mes-4421",
      icon: "🍽️",
      iconBg: "bg-purple-50 text-[#5D42CE] border-purple-100/60",
      typeLabel: "Mess & Tiffin Service",
      orderId: "Order #MES-4421",
      title: "Annapurna Mess (Monthly Pass)",
      subtitle: "Valid till 31 Oct 2026 • 19 days left",
      badgeText: "Veg Unlimited",
      badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      content: (
        <div className="space-y-4">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-600 font-medium">
              <span className="text-slate-400 font-bold">Today's Meal Schedule:</span>
              <span className="font-bold text-slate-800">Lunch (12:30 - 3:00 PM)</span>
              <span className="text-slate-300">|</span>
              <span className="font-bold text-slate-800">Dinner (7:30 - 10:00 PM)</span>
            </div>
            <div className="text-[11px] font-extrabold text-[#5D42CE] bg-white px-2.5 py-1 rounded-xl border border-slate-200 shadow-2xs">
              {mealsRemaining} Meals Remaining
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={() => openMealQrModal("Annapurna Mess", "MES-4421")}
              className="py-3 px-4 rounded-2xl bg-[#5D42CE] hover:bg-[#4D34B5] text-white text-xs font-black shadow-sm shadow-indigo-200 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <QrCode className="w-4 h-4" />
              <span>Show Meal QR</span>
            </button>
            <button
              type="button"
              onClick={toggleSkipMeal}
              className={`py-3 px-4 rounded-2xl border text-xs font-extrabold transition flex items-center justify-center gap-2 cursor-pointer ${
                dinnerSkipped
                  ? "bg-amber-50 text-amber-700 border-amber-300"
                  : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
              }`}
            >
              <RotateCcw className="w-4 h-4 text-slate-400" />
              <span>{dinnerSkipped ? "Dinner Skipped (+1 Token Added)" : "Skip Tonight's Meal (+1 Token)"}</span>
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "quickwash",
      category: "laundry",
      status: "active",
      searchTerms: "quickwash laundry wash dry fold #lnd-9241",
      icon: "🧺",
      iconBg: "bg-blue-50 text-blue-600 border-blue-100/60",
      typeLabel: "Campus Laundry",
      orderId: "Order #LND-9241",
      title: "QuickWash Laundry",
      subtitle: "Picked up today at 11:30 AM • 4.5 kg (14 clothes)",
      badgeText: "Ready by 5:00 PM",
      badgeStyle: "bg-blue-50 text-blue-700 border-blue-200/60",
      content: (
        <div className="space-y-4">
          <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-100 space-y-3">
            <div className="flex items-center justify-between text-[11px] font-bold">
              <div className="flex items-center gap-1.5 text-emerald-600 font-black">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Received
              </div>
              <div className="flex items-center gap-1.5 text-[#5D42CE] font-black">
                <span className="w-2 h-2 rounded-full bg-[#5D42CE] animate-ping" /> Washing &amp; Drying
              </div>
              <div className="text-slate-400 font-medium">Ironing &amp; Fold</div>
              <div className="text-slate-400 font-medium">Ready for Pickup</div>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-[#5D42CE] h-full w-[55%] rounded-full transition-all duration-700" />
            </div>
            <p className="text-[10px] text-slate-500 font-semibold text-right">Estimated completion: Today at 5:00 PM</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={() => showToast("Laundry batch status: Currently inside gentle tumble drying cycle.")}
              className="py-3 px-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-extrabold transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Track Detailed Status</span>
            </button>
            <button
              type="button"
              onClick={() => copyCode("4892", "Pickup OTP code")}
              className="py-3 px-4 rounded-2xl bg-[#140E36] hover:bg-[#1E1747] text-white text-xs font-black shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                Pickup OTP: <span className="tracking-widest text-emerald-400 underline decoration-dotted">4892</span>
              </span>
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "cafe",
      category: "cafe",
      status: "active",
      searchTerms: "campus bean cafe coffee sandwich #42",
      icon: "☕",
      iconBg: "bg-amber-50 text-amber-600 border-amber-100/60",
      typeLabel: "Cafe & Quick Bites",
      orderId: "Order #42",
      title: "Campus Bean Cafe",
      subtitle: "1× Cold Coffee, 1× Paneer Grilled Sandwich",
      badgeText: "Preparing • Ready in 8 mins",
      badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200/60 animate-pulse",
      content: (
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
          <div className="text-slate-500 font-medium">
            Counter Token: <span className="font-black text-slate-900 text-sm ml-1">#TOKEN-42</span>
          </div>
          <button
            type="button"
            onClick={() => showToast("Counter bill #42 downloaded as student invoice.")}
            className="text-xs font-bold text-[#5D42CE] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Download E-Receipt</span>
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      ),
    },
    {
      id: "pg-visit",
      category: "hostel",
      status: "active",
      searchTerms: "om shanti girls pg hostel scheduled visit room inspection #vst-108",
      icon: "🏢",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100/60",
      typeLabel: "Hostel & PG Inspection",
      orderId: "Booking #VST-108",
      title: "Om Shanti Girls PG (Room Visit)",
      subtitle: "Scheduled for Tomorrow, 4:30 PM • 2-Sharing AC Room",
      badgeText: "Scheduled Visit",
      badgeStyle: "bg-purple-50 text-[#5D42CE] border-purple-100",
      content: (
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-medium">
            Host Contact: <strong>Mrs. Sharma (+91 98223 11420)</strong>
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => showToast("Opening Google Maps location pin for Om Shanti PG...")}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-200 px-3 py-1.5 rounded-xl hover:bg-slate-50 cursor-pointer"
            >
              Directions 📍
            </button>
            <button
              type="button"
              onClick={() => showToast("Visit reschedule request forwarded to the PG warden.")}
              className="text-xs font-bold text-[#5D42CE] bg-purple-50 px-3 py-1.5 rounded-xl hover:bg-purple-100 cursor-pointer"
            >
              Reschedule
            </button>
          </div>
        </div>
      ),
    },
  ];

  // Filter items
  const filteredBookings = bookings.filter((item) => {
    const matchCat = currentCategory === "all" || item.category === currentCategory;
    const matchStat = currentStatus === "all" || item.status === currentStatus;
    const searchLow = searchQuery.toLowerCase().trim();
    const matchSearch =
      !searchLow ||
      item.searchTerms.toLowerCase().includes(searchLow) ||
      item.title.toLowerCase().includes(searchLow);
    return matchCat && matchStat && matchSearch;
  });

  return (
    <div className="bg-[#F1F4FA] text-slate-800 antialiased font-sans selection:bg-purple-100 selection:text-[#5D42CE] min-h-screen">
      
      {/* Top Navigation & Branding Bar */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-xs">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#5D42CE] to-[#8C62FF] flex items-center justify-center text-white font-black text-lg shadow-md shadow-purple-200">
              S.
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black tracking-wider uppercase text-[#6C47FF]">Studentica</span>
                <span className="text-slate-300 text-xs">/</span>
                <span className="text-xs font-bold text-slate-400">Campus Hub</span>
              </div>
              <h2 className="text-sm font-black text-slate-900 leading-tight">Student Dashboard</h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => showToast("Campus notification: Mess dinner tokens renewed!")}
              className="relative p-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition border border-slate-200/70 cursor-pointer"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500" />
            </button>

            <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                  alt="Riya Wagh"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-purple-100 shadow-xs"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div className="hidden sm:block text-left leading-tight">
                <p className="text-xs font-black text-slate-900">Riya Wagh</p>
                <p className="text-[10px] font-semibold text-slate-400">STU-2026-8942</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Sub-header Bar: Page Name, Order Search, and Back Trigger */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 w-full md:w-auto">
            <Link
              href="/student"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#5D42CE] hover:bg-[#4D34B5] text-white text-xs font-extrabold shadow-sm shadow-indigo-200 transition cursor-pointer self-start sm:self-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                My Bookings
              </h1>
              <p className="text-xs font-medium text-slate-400 mt-1">
                View, track, and redeem your active campus subscriptions &amp; orders
              </p>
            </div>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Order ID (e.g. #LND, #42)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5D42CE]/20 focus:border-[#5D42CE] transition"
            />
          </div>
        </div>

        {/* Metric Stat Counter Cards */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4" aria-label="Quick metrics">
          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-purple-200 transition">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">Active Bookings</span>
              <span className="w-8 h-8 rounded-xl bg-purple-50 text-[#5D42CE] flex items-center justify-center font-bold text-xs">
                ⚡
              </span>
            </div>
            <div className="mt-3">
              <span className="text-3xl font-black text-[#5D42CE] tracking-tight">3</span>
              <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Across Mess, Laundry &amp; Cafe</p>
            </div>
            <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-purple-50/50 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-emerald-200 transition">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">Meals Left</span>
              <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                🍲
              </span>
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-emerald-600 tracking-tight">{mealsRemaining}</span>
                <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Unlimited</span>
              </div>
              <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Valid till 31 Oct 2026</p>
            </div>
            <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-emerald-50/50 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-blue-200 transition">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">Laundry Quota</span>
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                🧺
              </span>
            </div>
            <div className="mt-3">
              <span className="text-3xl font-black text-blue-600 tracking-tight">8 kg</span>
              <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Monthly weight allowance</p>
            </div>
            <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-blue-50/50 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-amber-200 transition">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">Total Saved</span>
              <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                🏷️
              </span>
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-slate-900 tracking-tight">₹1,450</span>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">Saved</span>
              </div>
              <p className="text-[11px] text-emerald-600 font-bold mt-0.5">Via Active Freshers Pass</p>
            </div>
            <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-amber-50/50 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          </div>
        </section>

        {/* Filter Tabs and Service Chips */}
        <div className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {[
              { id: "all", label: "All Bookings" },
              { id: "active", label: "Active (3)" },
              { id: "completed", label: "Completed" },
              { id: "cancelled", label: "Cancelled & Expired" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setCurrentStatus(tab.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                  currentStatus === tab.id
                    ? "bg-[#5D42CE] text-white shadow-xs shadow-indigo-100 font-extrabold"
                    : "text-slate-500 hover:text-slate-800 bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {[
              { id: "all", label: "All Services" },
              { id: "mess", label: "🍽️ Mess & Food" },
              { id: "laundry", label: "🧺 Laundry" },
              { id: "cafe", label: "☕ Cafe & Quick Bites" },
              { id: "hostel", label: "🏢 PG & Hostel Visits" },
            ].map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => setCurrentCategory(chip.id)}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold border transition cursor-pointer whitespace-nowrap ${
                  currentCategory === chip.id
                    ? "border-[#5D42CE] bg-purple-50 text-[#5D42CE] font-extrabold"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT COLUMN: ACTIVE BOOKING CARDS (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-4">
            {filteredBookings.map((card) => (
              <article
                key={card.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-purple-200 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border text-xl ${card.iconBg}`}>
                      {card.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">{card.typeLabel}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-[10px] font-bold text-slate-500">{card.orderId}</span>
                      </div>
                      <h3 className="text-base font-black text-slate-900 tracking-tight mt-0.5">{card.title}</h3>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">{card.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black border inline-flex items-center gap-1 ${card.badgeStyle}`}>
                      {card.badgeText}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-purple-50 text-[#5D42CE] text-[10px] font-black border border-purple-100">
                      Active
                    </span>
                  </div>
                </div>

                {card.content}
              </article>
            ))}

            {filteredBookings.length === 0 && (
              <div className="bg-white rounded-3xl p-10 text-center border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#5D42CE] flex items-center justify-center mx-auto text-2xl">
                  🔍
                </div>
                <h4 className="text-sm font-black text-slate-900">No matching bookings found</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto font-medium">
                  Try adjusting your search query or reset the service filter chips above.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentStatus("active");
                    setCurrentCategory("all");
                  }}
                  className="px-4 py-2 bg-[#5D42CE] text-white text-xs font-bold rounded-xl cursor-pointer hover:bg-[#4D34B5]"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: QUICK QR SCANNER & LIVE PASS (lg:col-span-4) */}
          <aside className="lg:col-span-4 space-y-5 sticky top-24">
            
            {/* Live Pass Card */}
            <div className="bg-[#140E36] rounded-[32px] p-6 text-white text-center border border-purple-950 shadow-lg relative overflow-hidden">
              <div className="pb-3 border-b border-white/10">
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-300">Digital Student Pass</span>
                <h3 className="text-sm font-black mt-0.5">Quick Counter Redeem</h3>
              </div>

              <div
                className="bg-white rounded-3xl p-5 inline-block mx-auto mt-5 shadow-inner cursor-pointer group"
                onClick={openFullscreenQr}
              >
                <div className="w-40 h-40 mx-auto bg-slate-50 flex items-center justify-center p-2 rounded-2xl border border-slate-100 relative group-hover:scale-102 transition-transform">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=STU-2026-8942-CAMPUS-PASS-ACTIVE"
                    alt="Studentica Verification QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-slate-900 font-black text-xs mt-3 tracking-wider">STU-2026-8942</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  Tap to expand full-screen
                </p>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-bold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active Campus Access • MIT AOE</span>
              </div>

              <p className="text-[10px] text-purple-200/80 mt-1">
                Show this scannable QR when picking up meals, laundry, or cafe snacks.
              </p>
            </div>

            {/* Need Help / Support Aside */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#5D42CE] flex items-center justify-center text-base">
                  💬
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 leading-tight">Need Help?</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">Immediate assistance for your orders</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <button
                  type="button"
                  onClick={() => showToast("Connecting you to Annapurna Mess WhatsApp counter...")}
                  className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-extrabold transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Chat with Vendor</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </button>
                <button
                  type="button"
                  onClick={() => showToast("Campus student support ticket created. We will call you within 15 mins.")}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#5D42CE] hover:bg-[#4D34B5] text-white font-extrabold shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Connect with Campus Support</span>
                </button>
              </div>
            </div>

          </aside>

        </div>

      </main>

      {/* MODAL: Full Screen QR / Meal QR */}
      {modalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-slate-100 shadow-2xl text-center space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-black text-slate-900">{modalData.title}</h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="w-48 h-48 mx-auto bg-slate-50 p-3 rounded-2xl border border-slate-100 flex items-center justify-center">
              <img src={modalData.qrUrl} alt="Scannable QR" className="w-full h-full object-contain" />
            </div>

            <div>
              <p className="text-xs font-extrabold text-slate-900">{modalData.subtitle}</p>
              <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{modalData.meta}</p>
            </div>

            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-[#5D42CE] text-white text-xs font-black hover:bg-[#4D34B5] transition cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      <div
        className={`fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl text-xs font-bold flex items-center gap-2.5 transition-all duration-300 pointer-events-none ${
          toastVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <span className="text-emerald-400 text-base">✓</span>
        <span>{toastText}</span>
      </div>

    </div>
  );
}