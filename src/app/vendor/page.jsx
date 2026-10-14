"use client";

import React, { Suspense, useEffect, useState,useCallback } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  GraduationCap,
  Search,
  Bell,
  ChevronDown,
  LayoutDashboard,
  UtensilsCrossed,
  Utensils,
  ShoppingBag,
  CalendarDays,
  CreditCard,
  Star,
  BarChart3,
  User,
  Settings,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  MapPin,
  ChevronRight,
  ChefHat,
  Zap,
  WashingMachine,
  Clock3,
  Clock,
  CheckCircle2,
  XCircle,
  FileText,
  Tag,
  Leaf,
  Heart,
  IndianRupee,
  Calendar,
  UserCheck,
  Award,
  Phone,
  MessageCircle,
  Home,
  BedDouble,
  Users,
  Sparkles,
  HelpCircle,
  Pencil,
  Hourglass,
  Save,
  Check,
  X,
} from "lucide-react";

const DEMO_VENDORS = {
  "mess-01": {
    name: "Annapurna Dining Hall",
    displayName: "Annapurna Mess",
    service: "Mess Vendor",
    dashboardTitle: "Mess Vendor Dashboard",
    welcomeName: "Ramesh",
    location: "Near Main Gate",
    rating: "4.5",
    badge: "Mess",
  },
  "laundry-01": {
    name: "Express Dhobi & Dry Cleaners",
    displayName: "CottonSpa",
    service: "Laundry Vendor",
    dashboardTitle: "Laundry Vendor Dashboard",
    welcomeName: "Rahul Sharma",
    location: "Dehu Phata",
    rating: "4.2",
    badge: "Laundry",
  },
  "cleaning-01": {
    name: "CleanSpace Weekend Service",
    displayName: "Housekeeping",
    service: "House Cleaning Vendor",
    dashboardTitle: "House Cleaning Vendor Dashboard",
    welcomeName: "Shital Patil",
    location: "Hostels A & B",
    rating: "4.6",
    badge: "Cleaning",
  },
  "hostel-01": {
    name: "Sai Residency",
    displayName: "Manas Girls Hostel",
    service: "Hostel / PG Vendor",
    dashboardTitle: "Hostel / PG Vendor Dashboard",
    welcomeName: "Rohit Sharma",
    location: "Campus Crossroad",
    rating: "4.3",
    badge: "Hostel / PG",
  },
  "cafe-03": {
    name: "THE CAFE 24",
    displayName: "THE CAFE 24",
    service: "Café Vendor",
    dashboardTitle: "Café Vendor Dashboard",
    welcomeName: "Rahul Sharma",
    location: "Tapkir Nagar Dehu-phata, MIT AOE College Road, Alandi 412105",
    rating: "4.5",
    badge: "Café",
  },
};

const TYPE_TO_VENDOR_ID = {
  mess: "mess-01",
  food: "mess-01",
  "mess-01": "mess-01",
  annapurna: "mess-01",
  laundry: "laundry-01",
  "laundry-01": "laundry-01",
  cotton: "laundry-01",
  cottonspa: "laundry-01",
  cleaning: "cleaning-01",
  "cleaning-01": "cleaning-01",
  housekeeping: "cleaning-01",
  shital: "cleaning-01",
  hostel: "hostel-01",
  "hostel-01": "hostel-01",
  pg: "hostel-01",
  manas: "hostel-01",
  cafe: "cafe-03",
  "cafe-03": "cafe-03",
  cafe24: "cafe-03",
};

function VendorDashboardInner() {
  const [mounted, setMounted] = useState(false);
  const [vendorId, setVendorId] = useState("mess-01");
  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);

    // 1. Check URL parameters: ?type=... or ?vendor=...
    const urlType = searchParams.get("type");
    const urlVendor = searchParams.get("vendor");
    const targetQuery = (urlType || urlVendor || "").toLowerCase().trim();

    if (targetQuery && TYPE_TO_VENDOR_ID[targetQuery]) {
      setVendorId(TYPE_TO_VENDOR_ID[targetQuery]);
      return;
    }

    if (targetQuery && DEMO_VENDORS[targetQuery]) {
      setVendorId(targetQuery);
      return;
    }

    // 2. Fallback to localStorage ('currentUser' or 'current_user')
    try {
      const stored =
        localStorage.getItem("currentUser") ||
        localStorage.getItem("current_user");
      if (stored) {
        const parsed = JSON.parse(stored);
        const resolvedKey = (
          parsed.categoryKey ||
          parsed.type ||
          parsed.vendorId ||
          parsed.serviceCategory ||
          parsed.businessName ||
          ""
        ).toLowerCase();

        for (const [key, id] of Object.entries(TYPE_TO_VENDOR_ID)) {
          if (resolvedKey.includes(key)) {
            setVendorId(id);
            return;
          }
        }
      }
    } catch (e) {
      console.error(e);
    }

    setVendorId("mess-01");
  }, [searchParams]);

  const vendor = DEMO_VENDORS[vendorId] || DEMO_VENDORS["mess-01"];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FAF9FD] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#5835E5] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (vendorId === "laundry-01") {
    return <LaundryDashboard vendor={vendor} />;
  }

  if (vendorId === "cafe-03") {
    return <CafeDashboard vendor={vendor} />;
  }

  if (vendorId === "cleaning-01") {
    return <CleaningDashboard vendor={vendor} />;
  }

  if (vendorId === "hostel-01") {
    return <HostelDashboard vendor={vendor} />;
  }

  return <MessDashboard vendor={vendor} vendorId={vendorId} />;
}

export default function VendorDashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF9FD] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#5835E5] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <VendorDashboardInner />
    </Suspense>
  );
}

/* ============================================================
   HOUSEKEEPING / CLEANING DASHBOARD (SHITAL PATIL)
============================================================ */

function CleaningDashboard() {
  const [isTimingModalOpen, setIsTimingModalOpen] = useState(false);
  const [timingSavedSuccess, setTimingSavedSuccess] = useState(false);

  // Dynamic Working Hours & Location States
  const [workingHours, setWorkingHours] = useState("9:00 AM - 5:00 PM");
  const [workingDays, setWorkingDays] = useState("Monday - Saturday");
  const [preferredLocations, setPreferredLocations] = useState("Alandi, Moshi, Dehu Phata");

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

  const staticBookings = [
    {
      id: "stat-1",
      date: "16 Sep 2026",
      time: "10:00 AM - 12:00 PM",
      location: "Alandi",
      workType: "Room Cleaning",
      status: "Confirmed",
      isStudentBooking: false,
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    },
    {
      id: "stat-2",
      date: "17 Sep 2026",
      time: "09:00 AM - 11:00 AM",
      location: "Moshi",
      workType: "Kitchen Cleaning",
      status: "Pending",
      isStudentBooking: false,
      statusStyle: "bg-amber-50 text-amber-600 border border-amber-200",
    },
    {
      id: "stat-3",
      date: "18 Sep 2026",
      time: "02:00 PM - 04:00 PM",
      location: "Dehu Phata",
      workType: "Bathroom Cleaning",
      status: "Confirmed",
      isStudentBooking: false,
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    },
    {
      id: "stat-4",
      date: "20 Sep 2026",
      time: "11:00 AM - 01:00 PM",
      location: "Alandi",
      workType: "Full House Cleaning",
      status: "Pending",
      isStudentBooking: false,
      statusStyle: "bg-amber-50 text-amber-600 border border-amber-200",
    },
    {
      id: "stat-5",
      date: "22 Sep 2026",
      time: "09:00 AM - 11:00 AM",
      location: "Moshi",
      workType: "Room Cleaning",
      status: "Confirmed",
      isStudentBooking: false,
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    },
  ];

  const [upcomingBookings, setUpcomingBookings] = useState(staticBookings);

  // Sync Student Bookings & Working Timings from localStorage
  const refreshCleaningData = useCallback(() => {
    if (typeof window === "undefined") return;

    try {
      // 1. Sync custom timings if saved
      const savedTimings = localStorage.getItem("shital_patil_timings");
      if (savedTimings) {
        const parsed = JSON.parse(savedTimings);
        if (parsed.hours) setWorkingHours(parsed.hours);
        if (parsed.days) setWorkingDays(parsed.days);
        if (parsed.locations) setPreferredLocations(parsed.locations);
      }

      // 2. Sync dynamic bookings from students
      const stored = JSON.parse(localStorage.getItem("student_bookings") || "[]");
      const dynamicHousekeeping = stored
        .filter(
          (b) =>
            b.service === "Housekeeping" ||
            (b.vendor && b.vendor.toLowerCase().includes("shital")) ||
            (b.id && b.id.includes("HSK"))
        )
        .map((b) => ({
          id: b.id,
          originalId: b.id,
          date: b.scheduledDate || b.day || "Upcoming",
          time: b.slot || "Session Slot",
          location: b.location || "Ganesh Colony",
          workType: "Deep Cleaning (Session)",
          studentName: b.student || "Riya Wagh (Student)",
          status: b.vendorConfirmed ? "Confirmed" : "Pending",
          isStudentBooking: true,
          statusStyle: b.vendorConfirmed
            ? "bg-emerald-50 text-emerald-600 border border-emerald-200 font-bold"
            : "bg-amber-50 text-amber-600 border border-amber-200 font-bold",
        }));

      setUpcomingBookings([...dynamicHousekeeping, ...staticBookings]);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    refreshCleaningData();
    window.addEventListener("storage", refreshCleaningData);
    window.addEventListener("focus", refreshCleaningData);

    return () => {
      window.removeEventListener("storage", refreshCleaningData);
      window.removeEventListener("focus", refreshCleaningData);
    };
  }, [refreshCleaningData]);

  // Handle Shital Patil Approving the Student Booking
  const handleApproveBooking = (booking) => {
    // 1. Instant UI update
    setUpcomingBookings((prev) =>
      prev.map((b) =>
        b.id === booking.id
          ? {
              ...b,
              status: "Confirmed",
              statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200 font-bold",
            }
          : b
      )
    );

    // 2. Persist to student_bookings in localStorage
    try {
      const stored = JSON.parse(localStorage.getItem("student_bookings") || "[]");
      const updated = stored.map((b) => {
        if (b.id === booking.id || b.id === booking.originalId) {
          return {
            ...b,
            status: "Confirmed",
            vendorConfirmed: true,
          };
        }
        return b;
      });
      localStorage.setItem("student_bookings", JSON.stringify(updated));
      window.dispatchEvent(new Event("storage"));
    } catch (e) {
      console.error(e);
    }
  };

  // Handle Saving Updated Timings from Modal
  const handleSaveTimings = (e) => {
    e.preventDefault();
    const payload = {
      hours: workingHours,
      days: workingDays,
      locations: preferredLocations,
    };

    localStorage.setItem("shital_patil_timings", JSON.stringify(payload));
    window.dispatchEvent(new Event("storage"));

    setTimingSavedSuccess(true);
    setTimeout(() => {
      setTimingSavedSuccess(false);
      setIsTimingModalOpen(false);
    }, 1000);
  };

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

  return (
    <div className="min-h-screen bg-[#F5F4FE] text-slate-900 font-sans flex antialiased relative">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#140E36] text-white shrink-0 sticky top-0 h-screen justify-between p-5 z-40 overflow-y-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-2xl bg-[#6C47FF] flex items-center justify-center text-white shadow-lg shadow-purple-900/50">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-tight leading-tight">
                Housekeeping
              </h2>
              <p className="text-[10px] text-purple-300 font-medium">
                Vendor Portal
              </p>
            </div>
          </div>

          <nav className="space-y-1">
            {sidebarLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    if (item.label.includes("Availability")) setIsTimingModalOpen(true);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
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
                      {upcomingBookings.length}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

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
              type="button"
              className="w-full py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Live Chat
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-purple-100/50 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200/70 rounded-2xl w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search bookings, staff, or services..."
              className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={refreshCleaningData}
              className="text-xs font-bold text-[#6C47FF] bg-purple-50 px-3.5 py-2 rounded-xl hover:bg-purple-100 transition cursor-pointer"
            >
              Sync Bookings 🔄
            </button>

            <button
              type="button"
              className="relative p-2.5 rounded-2xl bg-slate-50 text-slate-600 hover:text-slate-900 transition border border-slate-200/60"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[9px] font-black text-white flex items-center justify-center">
                {upcomingBookings.filter((b) => b.status === "Pending").length}
              </span>
            </button>

            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80"
                alt="Shital Patil"
                className="w-10 h-10 rounded-2xl object-cover ring-2 ring-purple-100"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-black text-slate-900 leading-tight">
                  Shital Patil
                </p>
                <p className="text-[10px] text-slate-400 font-semibold">
                  Housekeeping Staff
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </header>

        <main className="p-6 sm:p-8 space-y-6 max-w-7xl w-full mx-auto">
          {/* PROFILE CARD & PROMO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
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
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>

                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight flex items-center gap-2">
                    Shital Patil
                    <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                      ★ 4.6 <span className="text-slate-400 font-normal">(124 reviews)</span>
                    </span>
                  </h1>

                  <p className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#6C47FF]" />
                    Professional Housekeeping Staff • Rate: ₹300/session
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-600 pt-1">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-slate-400" /> 9000010002
                    </span>
                    <span>•</span>
                    <span className="text-purple-700 font-bold">
                      Working Hours: {workingHours}
                    </span>
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

              <div className="relative z-10 w-44 h-32 sm:w-52 sm:h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-white shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&auto=format&fit=crop&q=80"
                  alt="Housekeeping Basket"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-4 right-1/3 text-rose-500 text-[11px] font-black rotate-[-6deg] hidden xl:block select-none pointer-events-none">
                Reliable <br /> Housekeeping <br /> for a Better Tomorrow ♡
              </div>
            </div>

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
                type="button"
                onClick={() => setIsTimingModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-white text-[#C834A8] text-xs font-black flex items-center justify-center gap-1.5 transition mt-4 shadow-md hover:bg-slate-50 cursor-pointer"
              >
                <span>Update Timings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* METRIC BOXES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                  <span className="text-rose-500">📅</span> Total Bookings
                </p>
                <h3 className="text-2xl font-black text-slate-950 mt-1">{upcomingBookings.length}</h3>
                <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Live Synced</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                  <span className="text-blue-500">🕒</span> Working Hours
                </p>
                <h3 className="text-sm font-black text-slate-950 mt-1">
                  {workingHours}
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Active
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                  <span className="text-purple-500">₹</span> Charges / Session
                </p>
                <h3 className="text-2xl font-black text-slate-950 mt-1">₹300</h3>
                <p className="text-[11px] font-bold text-slate-400 mt-1">
                  1-2 hrs per session
                </p>
              </div>
            </div>

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

          {/* BOOKINGS TABLE & SCHEDULE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                <div>
                  <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                    <span className="text-rose-500">📅</span> Upcoming Bookings
                  </h3>
                  <p className="text-[10px] text-slate-400">Review and approve incoming student appointments</p>
                </div>
                <button
                  type="button"
                  onClick={refreshCleaningData}
                  className="text-xs font-bold text-[#6C47FF] hover:underline cursor-pointer"
                >
                  Refresh 🔄
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-slate-400 font-bold border-b border-slate-100 pb-2">
                      <th className="pb-2 font-bold">Date &amp; Time</th>
                      <th className="pb-2 font-bold">Location</th>
                      <th className="pb-2 font-bold">Work Type</th>
                      <th className="pb-2 font-bold">Status</th>
                      <th className="pb-2 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {upcomingBookings.map((b, idx) => {
                      const isPending = b.status === "Pending" || b.status === "Pending Approval";

                      return (
                        <tr key={b.id || idx} className="hover:bg-slate-50/50 transition">
                          <td className="py-3">
                            <p className="font-black text-slate-900">{b.date}</p>
                            <p className="text-[10px] text-slate-400 font-medium">
                              {b.time}
                            </p>
                            {b.studentName && (
                              <p className="text-[9px] text-[#6C47FF] font-bold">
                                {b.studentName}
                              </p>
                            )}
                          </td>
                          <td className="py-3 font-semibold text-slate-700">
                            {b.location}
                          </td>
                          <td className="py-3 font-semibold text-slate-700">
                            {b.workType}
                          </td>
                          <td className="py-3">
                            <span
                              className={`text-[10px] font-black px-2 py-0.5 rounded-full ${b.statusStyle}`}
                            >
                              {b.status}
                            </span>
                          </td>
                          <td className="py-3 text-right">
                            {isPending && b.isStudentBooking ? (
                              <button
                                type="button"
                                onClick={() => handleApproveBooking(b)}
                                className="px-3 py-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black shadow-xs transition active:scale-95 cursor-pointer whitespace-nowrap"
                              >
                                Approve ✓
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={() => alert(`Booking Details: ${b.workType} at ${b.location} (${b.date} • ${b.time})`)}
                                className="px-2.5 py-1 rounded-xl bg-purple-50 text-[#6C47FF] text-[10px] font-black hover:bg-[#6C47FF] hover:text-white transition cursor-pointer"
                              >
                                Details
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-500">📅</span> Work Schedule
                </h3>
                <button
                  type="button"
                  onClick={() => setIsTimingModalOpen(true)}
                  className="text-[11px] font-bold text-[#6C47FF] hover:underline cursor-pointer"
                >
                  Edit Hours →
                </button>
              </div>

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
                    <p className="text-[11px] text-slate-500 font-semibold">{workingHours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CalendarDays className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Working Days</p>
                    <p className="text-[11px] text-slate-500 font-semibold">{workingDays}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Preferred Locations</p>
                    <p className="text-[11px] text-slate-500 font-semibold">{preferredLocations}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-3">
              <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <span className="text-amber-500">⚡</span> Quick Actions
              </h4>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setIsTimingModalOpen(true)}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">📅</span>
                    <div>
                      <p className="text-xs font-black text-slate-900">Update Availability</p>
                      <p className="text-[9px] text-slate-400">Set your working hours</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={refreshCleaningData}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">📋</span>
                    <div>
                      <p className="text-xs font-black text-slate-900">Sync Bookings</p>
                      <p className="text-[9px] text-slate-400">View latest bookings</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={() => alert("Earnings report for this month: ₹12,600")}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">₹</span>
                    <div>
                      <p className="text-xs font-black text-slate-900">View Earnings</p>
                      <p className="text-[9px] text-slate-400">Check your earnings</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsTimingModalOpen(true)}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">👤</span>
                    <div>
                      <p className="text-xs font-black text-slate-900">Update Profile</p>
                      <p className="text-[9px] text-slate-400">Edit your details &amp; hours</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM EARNINGS + REVIEWS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-3 bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2">
                <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#6C47FF]" /> Earnings Overview
                </h4>
                <select className="text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-2 py-0.5">
                  <option>This Month</option>
                </select>
              </div>

              <div>
                <p className="text-xl font-black text-slate-950">
                  ₹12,600 <span className="text-[11px] font-bold text-emerald-600">↑ 18%</span>
                </p>
                <p className="text-[10px] text-slate-400 font-medium">vs last month</p>
              </div>

              <div className="pt-3">
                <div className="flex items-end justify-between h-20 gap-1 px-1">
                  {[20, 35, 60, 40, 75, 55, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-purple-100 rounded-t-lg">
                      <div
                        className="w-full bg-[#6C47FF] rounded-t-lg"
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
                type="button"
                onClick={() => setIsTimingModalOpen(true)}
                className="w-full py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-bold flex items-center justify-center gap-1 transition cursor-pointer"
              >
                <span>Update Availability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

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
                  <p className="text-[10px] text-slate-400 font-bold">Charges per Session</p>
                  <p className="font-extrabold text-slate-800">₹300</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold">Working Hours</p>
                  <p className="font-extrabold text-slate-800">{workingHours}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold">Working Days</p>
                  <p className="font-extrabold text-slate-800">{workingDays}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-1 border-b border-slate-50">
                  <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <span className="text-amber-500">★</span> Recent Reviews
                  </h4>
                  <button
                    type="button"
                    className="text-[10px] font-bold text-[#6C47FF] hover:underline cursor-pointer"
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
                          <p className="font-black text-slate-900 text-[11px] truncate">
                            {r.name}
                          </p>
                          <span className="text-[10px] text-amber-500 font-bold">
                            ★ {r.rating}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 truncate">
                          {r.comment}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

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

      {/* TIMING & AVAILABILITY MODAL */}
      {isTimingModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-[32px] p-6 sm:p-7 max-w-md w-full border border-slate-100 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 text-[#6C47FF] flex items-center justify-center text-xl">
                  🧹
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">
                    Update Availability &amp; Timings
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold">
                    Updates sync directly to student housekeeping page
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsTimingModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveTimings} className="space-y-4 text-xs font-bold text-slate-700">
              <div className="space-y-1">
                <label className="text-[11px] text-slate-500 font-bold uppercase">Working Hours</label>
                <input
                  type="text"
                  value={workingHours}
                  onChange={(e) => setWorkingHours(e.target.value)}
                  placeholder="e.g., 9:00 AM - 5:00 PM"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#6C47FF]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-slate-500 font-bold uppercase">Working Days</label>
                <input
                  type="text"
                  value={workingDays}
                  onChange={(e) => setWorkingDays(e.target.value)}
                  placeholder="e.g., Monday - Saturday"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#6C47FF]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-slate-500 font-bold uppercase">Service Locations</label>
                <input
                  type="text"
                  value={preferredLocations}
                  onChange={(e) => setPreferredLocations(e.target.value)}
                  placeholder="e.g., Alandi, Moshi, Dehu Phata"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#6C47FF]"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsTimingModalOpen(false)}
                  className="flex-1 py-3 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className={`flex-1 py-3 rounded-2xl text-white font-black shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    timingSavedSuccess ? "bg-emerald-600" : "bg-[#6C47FF] hover:bg-[#5835E5]"
                  }`}
                >
                  {timingSavedSuccess ? (
                    <>
                      <Check size={16} />
                      <span>Updated &amp; Broadcasted!</span>
                    </>
                  ) : (
                    <span>Save Availability</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   HOSTEL / PG VENDOR DASHBOARD (MANAS GIRLS HOSTEL)
============================================================ */

function HostelDashboard() {
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
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: "#BKG1023",
      studentName: "Aditi Shinde",
      roomNo: "Room 203",
      checkIn: "14 Sep 2026",
      status: "Confirmed",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: "#BKG1022",
      studentName: "Pooja Deshmukh",
      roomNo: "Room 105",
      checkIn: "12 Sep 2026",
      status: "Pending",
      statusStyle: "bg-amber-50 text-amber-600 border border-amber-200",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: "#BKG1021",
      studentName: "Rutuja Kale",
      roomNo: "Room 207",
      checkIn: "10 Sep 2026",
      status: "Confirmed",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: "#BKG1020",
      studentName: "Vaishnavi More",
      roomNo: "Room 101",
      checkIn: "08 Sep 2026",
      status: "Checked Out",
      statusStyle: "bg-purple-50 text-[#6C47FF] border border-purple-200",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    },
  ];

  const topRatedFeatures = [
    { title: "Clean & Hygienic Rooms", score: "4.8", icon: "🧼" },
    { title: "Homely Food", score: "4.6", icon: "🍲" },
    { title: "Wi-Fi Connectivity", score: "4.5", icon: "📶" },
    { title: "24/7 Security", score: "4.7", icon: "🛡️" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F6FE] text-slate-900 font-sans flex antialiased">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#140E36] text-white shrink-0 sticky top-0 h-screen justify-between p-5 z-40 overflow-y-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-2xl bg-[#E11D74] flex items-center justify-center text-white shadow-lg shadow-pink-900/50">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-tight leading-tight">
                HostelHub
              </h2>
              <p className="text-[10px] text-pink-300 font-medium">
                Vendor Portal
              </p>
            </div>
          </div>

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

        <div className="pt-4 space-y-4">
          <div className="text-center space-y-2">
            <p className="text-xs font-black text-pink-400 rotate-[-6deg]">
              Safe Stay, <br /> Bright Future ♡
            </p>
            <div className="w-24 h-24 mx-auto rounded-2xl bg-white/10 p-2 border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&auto=format&fit=crop&q=80"
                alt="Hostel Bed"
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
              type="button"
              suppressHydrationWarning
              className="w-full py-2 rounded-xl bg-[#E11D74] hover:bg-[#c21461] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Live Chat
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-purple-100/60 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200/70 rounded-2xl w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search students, bookings, rooms..."
              suppressHydrationWarning
              data-lpignore="true"
              autoComplete="off"
              className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
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
                <p className="text-xs font-black text-slate-900 leading-tight">
                  Rohit Sharma
                </p>
                <p className="text-[10px] text-slate-400 font-semibold">
                  Hostel Owner
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </header>

        <main className="p-6 sm:p-8 space-y-6 max-w-7xl w-full mx-auto">
          {/* BANNER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-9 relative rounded-[32px] bg-gradient-to-r from-[#FFF6E9] via-[#FFEED7] to-[#FCE6CB] p-6 sm:p-7 border border-orange-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
              <div className="flex items-center gap-5 z-10">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-4 border-white shadow-md bg-[#1B173E] flex flex-col items-center justify-center text-center p-2 text-white shrink-0">
                  <span className="text-xl">🪷</span>
                  <span className="text-xs font-black tracking-tight leading-tight mt-1">
                    MANAS
                  </span>
                  <span className="text-[8px] text-pink-300 font-semibold tracking-wider">
                    Girls Hostel
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{" "}
                    Active
                  </span>

                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight flex items-center gap-2">
                    Manas
                    <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] font-bold">
                      ✓
                    </span>
                  </h1>

                  <p className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E11D74]" /> Near
                    gajanan maharaj mandir
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-700 pt-0.5">
                    <span className="text-amber-500 font-black flex items-center gap-1">
                      ★ 4.3{" "}
                      <span className="text-slate-400 font-normal">
                        (48 reviews)
                      </span>
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

                  <div className="flex flex-wrap items-center gap-2 pt-2 text-[10px] font-bold text-slate-700">
                    <span className="px-2.5 py-1 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-1">
                      🛡️ Safe &amp; Secure
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

              <div className="relative z-10 w-48 h-32 sm:w-56 sm:h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-white shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80"
                  alt="Manas Girls Hostel Building"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-4 right-1/3 text-pink-600 text-[11px] font-black rotate-[-6deg] hidden xl:block select-none pointer-events-none">
                More than <br /> just a stay <br /> it's a home ♡
              </div>
            </div>

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
                type="button"
                suppressHydrationWarning
                className="w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-black flex items-center justify-center gap-1.5 transition border border-white/20 mt-4 backdrop-blur-sm"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-pink-500">👥</span> Total Bookings
              </p>
              <h3 className="text-2xl font-black text-slate-950">32</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 18%{" "}
                <span className="text-slate-400 font-medium">
                  vs last month
                </span>
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-purple-500">🛏️</span> Occupied Rooms
              </p>
              <h3 className="text-2xl font-black text-slate-950">26</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 12%{" "}
                <span className="text-slate-400 font-medium">
                  vs last month
                </span>
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-emerald-500">🛏️</span> Available Rooms
              </p>
              <h3 className="text-2xl font-black text-slate-950">6</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 33%{" "}
                <span className="text-slate-400 font-medium">
                  vs last month
                </span>
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-orange-500">₹</span> Monthly Revenue
              </p>
              <h3 className="text-2xl font-black text-slate-950">₹1,92,000</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 20%{" "}
                <span className="text-slate-400 font-medium">
                  vs last month
                </span>
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1 col-span-2 md:col-span-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-blue-500">🎖️</span> Average Rating
              </p>
              <h3 className="text-2xl font-black text-slate-950">4.3</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 5%{" "}
                <span className="text-slate-400 font-medium">
                  vs last month
                </span>
              </p>
            </div>
          </div>

          {/* LOWER GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                <div>
                  <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                    <span className="text-pink-500">📅</span> Recent Bookings
                  </h3>
                  <p className="text-[10px] text-slate-400 font-medium">
                    Latest student bookings to your hostel
                  </p>
                </div>
                <button
                  type="button"
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
                        <td className="py-3 font-semibold text-slate-400 text-[11px]">
                          {b.id}
                        </td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <img
                              src={b.avatar}
                              alt={b.studentName}
                              className="w-6 h-6 rounded-full object-cover shrink-0"
                            />
                            <span className="font-bold text-slate-900">
                              {b.studentName}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 font-semibold text-slate-700">
                          {b.roomNo}
                        </td>
                        <td className="py-3 font-medium text-slate-500">
                          {b.checkIn}
                        </td>
                        <td className="py-3">
                          <span
                            className={`text-[10px] font-black px-2 py-0.5 rounded-full ${b.statusStyle}`}
                          >
                            {b.status}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <button
                            type="button"
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

            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-1">
                  <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                    <span className="text-[#6C47FF]">📊</span> Room Occupancy
                  </h3>
                  <select
                    suppressHydrationWarning
                    className="text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-2 py-0.5"
                  >
                    <option>This Month</option>
                  </select>
                </div>

                <div className="flex items-center justify-center relative py-2">
                  <svg
                    className="w-32 h-32 transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
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
                    <span className="text-xl font-black text-slate-900 leading-none">
                      81%
                    </span>
                    <span className="text-[9px] text-slate-400 font-bold mt-1">
                      Occupied
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs font-semibold text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#6C47FF]" />{" "}
                      Occupied
                    </span>
                    <span className="font-bold text-slate-900">26</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />{" "}
                      Available
                    </span>
                    <span className="font-bold text-slate-900">6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />{" "}
                      Under Maintenance
                    </span>
                    <span className="font-bold text-slate-900">0</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <span className="text-pink-500">🏠</span> Room Overview
                  </h4>
                  <button
                    type="button"
                    suppressHydrationWarning
                    className="text-[10px] font-bold text-[#E11D74] hover:underline"
                  >
                    View All →
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center pt-1">
                  <div className="p-2.5 rounded-2xl bg-pink-50/70 border border-pink-100">
                    <span className="text-base">🛏️</span>
                    <p className="text-[9px] text-slate-500 font-bold mt-1">
                      Single
                    </p>
                    <p className="text-sm font-black text-slate-900">12</p>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-purple-50/70 border border-purple-100">
                    <span className="text-base">👥</span>
                    <p className="text-[9px] text-slate-500 font-bold mt-1">
                      Double
                    </p>
                    <p className="text-sm font-black text-slate-900">10</p>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-base">👨‍👩‍👧</span>
                    <p className="text-[9px] text-slate-500 font-bold mt-1">
                      Triple
                    </p>
                    <p className="text-sm font-black text-slate-900">4</p>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-blue-50/70 border border-blue-100">
                    <span className="text-base">🏢</span>
                    <p className="text-[9px] text-slate-500 font-bold mt-1">
                      Total
                    </p>
                    <p className="text-sm font-black text-slate-900">26</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
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
                        <p className="text-xs font-black text-slate-900">
                          Update Availability
                        </p>
                        <p className="text-[9px] text-slate-400">
                          Mark rooms available
                        </p>
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
                        <p className="text-xs font-black text-slate-900">
                          Manage Bookings
                        </p>
                        <p className="text-[9px] text-slate-400">
                          View & update bookings
                        </p>
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
                        <p className="text-xs font-black text-slate-900">
                          Student Details
                        </p>
                        <p className="text-[9px] text-slate-400">
                          Check student records
                        </p>
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
                        <p className="text-xs font-black text-slate-900">
                          Add Special Offer
                        </p>
                        <p className="text-[9px] text-slate-400">
                          Attract students
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-3">
                <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <span className="text-amber-500">★</span> Top Rated Features
                </h4>

                <div className="space-y-2 text-xs">
                  {topRatedFeatures.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 rounded-xl bg-slate-50/60"
                    >
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

          {/* BOTTOM STRIP */}
          <section className="relative rounded-[32px] bg-gradient-to-r from-[#FFF2F6] via-[#FFEAF1] to-[#FDE1EA] border border-pink-100 p-5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm overflow-hidden">
            <div className="flex items-center gap-4 z-10">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md border-2 border-white shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=200&auto=format&fit=crop&q=80"
                  alt="Hostel bedroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-black text-pink-600 rotate-[-1deg]">
                  Comfortable Stay <br /> Happy Students ♡
                </h3>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6 z-10 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-sm">
                  🛡️
                </span>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs">
                    Safe Environment
                  </p>
                  <p className="text-[10px] text-slate-500">24/7 Security</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-sm">
                  🍲
                </span>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs">
                    Nutritious Food
                  </p>
                  <p className="text-[10px] text-slate-500">Hygienic &amp; Tasty</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-sm">
                  🏢
                </span>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs">
                    Modern Facilities
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Wi-Fi, Laundry, Study
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
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

/* ============================================================
   MESS / ANNAPURNA DASHBOARD
============================================================ */

/* ============================================================
   MESS / ANNAPURNA DASHBOARD (CONNECTED LIVE TO STUDENT PORTAL)
============================================================ */

function MessDashboard({ vendor, vendorId }) {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  // Dynamic Live Menu State
  const defaultMenu = {
    breakfast: {
      timing: "08:00 AM - 10:00 AM",
      items: ["Poha - Upma", "Upma - Dosa", "Unlimited Chai / Coffee"],
    },
    lunch: {
      timing: "12:00 PM - 03:00 PM",
      items: ["Paneer - Tomato", "Tomato, Chapati, Rice", "Gulab Jamun"],
    },
    dinner: {
      timing: "07:00 PM - 10:00 PM",
      items: ["Chole", "Veg Pulav, Roti, Salad", "Healthy Buttermilk"],
    },
  };

  const [currentMenu, setCurrentMenu] = useState(defaultMenu);
  const [bfText, setBfText] = useState("Poha - Upma, Upma - Dosa, Unlimited Chai / Coffee");
  const [lunchText, setLunchText] = useState("Paneer - Tomato, Tomato, Chapati, Rice, Gulab Jamun");
  const [dinnerText, setDinnerText] = useState("Chole, Veg Pulav, Roti, Salad, Healthy Buttermilk");

  const staticOrders = [
    {
      id: "#MS0128",
      originalId: "static-1",
      name: "Priya Sharma",
      item: "Veg Thali",
      time: "Today, 12:30 PM",
      status: "Pending",
      price: "₹100",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    },
    {
      id: "#MS0127",
      originalId: "static-2",
      name: "Rohan Patil",
      item: "Full Meal",
      time: "Today, 12:15 PM",
      status: "Confirmed",
      price: "₹120",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80",
    },
    {
      id: "#MS0126",
      originalId: "static-3",
      name: "Sneha Kulkarni",
      item: "Special Thali",
      time: "Today, 11:50 AM",
      status: "Preparing",
      price: "₹130",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    },
  ];

  const [ordersList, setOrdersList] = useState(staticOrders);

  // Sync Live Orders from localStorage
  const refreshStorageData = () => {
    if (typeof window === "undefined") return;

    try {
      // 1. Fetch live bookings from students
      const storedBookings = JSON.parse(localStorage.getItem("student_bookings") || "[]");
      
      const liveMessBookings = storedBookings
        .filter((b) => {
          const s = (b.service || "").toLowerCase();
          const v = (b.vendor || "").toLowerCase();
          const id = (b.id || "").toLowerCase();
          return s.includes("mess") || v.includes("annapurna") || id.includes("mes");
        })
        .map((b) => ({
          id: b.id ? (b.id.length > 8 ? `#${b.id.slice(-6)}` : b.id) : "#BK-LIVE",
          originalId: b.id, // Store exact key to update back to localStorage
          name: b.student || "Riya Wagh (Verified Student)",
          item: b.item || "Annapurna Monthly Pass",
          time: b.date ? `${b.date}` : "Just now",
          price: b.price || "₹1,900",
          // Pending until confirmed by vendor owner
          status: b.vendorConfirmed ? "Confirmed" : (b.status === "Confirmed" && !b.vendorConfirmed ? "Pending" : (b.status || "Pending")),
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        }));

      setOrdersList([...liveMessBookings, ...staticOrders]);

      // 2. Fetch live menu
      const savedMenu = localStorage.getItem("annapurna_menu");
      if (savedMenu) {
        const parsed = JSON.parse(savedMenu);
        setCurrentMenu(parsed);
        if (parsed.breakfast) setBfText((parsed.breakfast.items || []).join(", "));
        if (parsed.lunch) setLunchText((parsed.lunch.items || []).join(", "));
        if (parsed.dinner) setDinnerText((parsed.dinner.items || []).join(", "));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    refreshStorageData();
    window.addEventListener("storage", refreshStorageData);
    window.addEventListener("focus", refreshStorageData);

    return () => {
      window.removeEventListener("storage", refreshStorageData);
      window.removeEventListener("focus", refreshStorageData);
    };
  }, []);

  // Handle Owner confirming student order
  const handleConfirmOrder = (targetOrder) => {
    // 1. Update UI state immediately
    setOrdersList((prev) =>
      prev.map((ord) =>
        ord.id === targetOrder.id || ord.originalId === targetOrder.originalId
          ? { ...ord, status: "Confirmed" }
          : ord
      )
    );

    // 2. Persist confirmation into localStorage student_bookings
    try {
      const storedBookings = JSON.parse(localStorage.getItem("student_bookings") || "[]");
      const updated = storedBookings.map((b) => {
        if (b.id === targetOrder.originalId || targetOrder.id.includes(b.id?.slice(-6))) {
          return { ...b, status: "Confirmed", vendorConfirmed: true };
        }
        return b;
      });
      localStorage.setItem("student_bookings", JSON.stringify(updated));
      window.dispatchEvent(new Event("storage"));
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveMenuChanges = (e) => {
    e.preventDefault();

    const updatedMenu = {
      breakfast: {
        timing: "08:00 AM - 10:00 AM",
        items: bfText.split(",").map((s) => s.trim()).filter(Boolean),
      },
      lunch: {
        timing: "12:00 PM - 03:00 PM",
        items: lunchText.split(",").map((s) => s.trim()).filter(Boolean),
      },
      dinner: {
        timing: "07:00 PM - 10:00 PM",
        items: dinnerText.split(",").map((s) => s.trim()).filter(Boolean),
      },
    };

    localStorage.setItem("annapurna_menu", JSON.stringify(updatedMenu));
    setCurrentMenu(updatedMenu);
    window.dispatchEvent(new Event("storage"));

    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      setIsMenuModalOpen(false);
    }, 1000);
  };

  const sidebarItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: `/vendor?vendor=${vendorId}`, active: true },
    { label: `My ${vendor.badge}`, icon: UtensilsCrossed, href: "#" },
    { label: "Orders", icon: ShoppingBag, href: "#", badge: String(ordersList.length) },
    { label: "Menu & Schedule", icon: CalendarDays, href: "#" },
    { label: "Subscription Plans", icon: CreditCard, href: "#" },
    { label: "Reviews", icon: Star, href: "#" },
    { label: "Reports", icon: BarChart3, href: "#" },
    { label: "Profile", icon: User, href: "#" },
    { label: "Settings", icon: Settings, href: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9FD] text-slate-900 font-sans flex relative">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-100 shrink-0 sticky top-0 h-screen justify-between p-5 z-40">
        <div className="space-y-6">
          <Link href="/vendor" className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-2xl bg-[#5835E5] flex items-center justify-center text-white shadow-md shadow-purple-200">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 tracking-tight block leading-none">
                Studentica.
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wide uppercase">
                Campus Hub
              </span>
            </div>
          </Link>

          <nav className="space-y-1">
            {sidebarItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    if (item.label.includes("Menu")) setIsMenuModalOpen(true);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                    item.active
                      ? "bg-[#5835E5] text-white shadow-md shadow-indigo-200"
                      : "text-slate-600 hover:bg-purple-50 hover:text-[#5835E5]"
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
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-100 text-center space-y-2">
          <p className="text-xs font-black text-[#5835E5] rotate-[-5deg]">
            Good Food <br /> Happy Students ♡
          </p>
          <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&auto=format&fit=crop&q=80"
              alt="Delicious Thali"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200/70 rounded-2xl w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search orders, students, menu..."
              className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={refreshStorageData}
              className="text-xs font-bold text-[#5835E5] bg-purple-50 px-3 py-2 rounded-xl hover:bg-purple-100 transition cursor-pointer"
            >
              Sync Orders 🔄
            </button>

            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                alt={vendor.welcomeName}
                className="w-10 h-10 rounded-2xl object-cover ring-2 ring-purple-100"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-black text-slate-900 leading-tight">
                  {vendor.welcomeName}
                </p>
                <p className="text-[10px] text-slate-400 font-semibold">
                  {vendor.service}
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </header>

        <main className="p-6 sm:p-8 space-y-6 max-w-7xl w-full mx-auto">
          {/* BANNER */}
          <section className="relative rounded-[32px] bg-gradient-to-r from-[#FFD88C] via-[#FFC773] to-[#FFAE64] p-6 sm:p-8 overflow-hidden shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-black/10 text-slate-900 text-[10px] font-extrabold uppercase tracking-wider">
                Mess Vendor Dashboard
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Welcome back, {vendor.welcomeName}! 👋
              </h1>
              <p className="text-xs font-semibold text-slate-800 leading-relaxed max-w-md">
                Manage your daily menu, confirm student orders, and track your mess service.
              </p>
              <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-white/90 shadow-sm border border-white/60 text-xs">
                <MapPin className="w-4 h-4 text-[#5835E5]" />
                <div className="text-left">
                  <p className="font-extrabold text-slate-900 text-xs">{vendor.displayName}</p>
                  <p className="text-[10px] text-slate-500 font-medium">{vendor.location}</p>
                </div>
                <span className="ml-2 flex items-center gap-1 text-[10px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                </span>
              </div>
            </div>

            <div className="w-full lg:w-56 rounded-2xl bg-gradient-to-br from-[#5333DC] to-[#391DBB] text-white p-5 shadow-xl space-y-3 z-10 shrink-0 text-center">
              <div className="w-10 h-10 rounded-xl bg-white/20 mx-auto flex items-center justify-center mb-2">
                <ChefHat className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black">Daily Kitchen Menu</h3>
              <p className="text-[10px] text-purple-200">Broadcasts in real-time to student portal.</p>
              <button
                type="button"
                onClick={() => setIsMenuModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-white text-[#5333DC] text-xs font-black flex items-center justify-center gap-1.5 shadow-md hover:bg-slate-100 transition cursor-pointer"
              >
                <span>Update Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </section>

          {/* STATS */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-slate-500">Total Orders</p>
                <h3 className="text-2xl font-black text-slate-950 mt-1">{ordersList.length}</h3>
                <p className="text-[11px] font-bold text-emerald-600 mt-1">↑ Live synced</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#5835E5] flex items-center justify-center text-xl">🛍️</div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-slate-500">Confirmed Orders</p>
                <h3 className="text-2xl font-black text-slate-950 mt-1">
                  {ordersList.filter((o) => o.status === "Confirmed").length}
                </h3>
                <p className="text-[11px] font-bold text-emerald-600 mt-1">Ready for meals</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">✓</div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-slate-500">Pending Orders</p>
                <h3 className="text-2xl font-black text-slate-950 mt-1">
                  {ordersList.filter((o) => o.status === "Pending").length}
                </h3>
                <p className="text-[11px] font-bold text-amber-600 mt-1">Awaiting your approval</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl">🕒</div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-slate-500">Rating</p>
                <h3 className="text-2xl font-black text-slate-950 mt-1">{vendor.rating}</h3>
                <p className="text-[11px] font-bold text-amber-500 mt-1">★ 120+ Student reviews</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl">★</div>
            </div>
          </section>

          {/* LOWER GRID */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* RECENT ORDERS WITH CONFIRM BUTTON */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-50">
                <div>
                  <h3 className="text-sm font-black flex items-center gap-1.5">
                    <span>📋</span> Recent Orders ({ordersList.length})
                  </h3>
                  <p className="text-[10px] text-slate-400">Review and confirm student orders</p>
                </div>
                <button
                  type="button"
                  onClick={refreshStorageData}
                  className="text-xs font-bold text-[#5835E5] hover:underline cursor-pointer"
                >
                  Refresh 🔄
                </button>
              </div>

              <div className="space-y-3 pt-3 max-h-[420px] overflow-y-auto pr-1">
                {ordersList.map((ord, idx) => {
                  const isPending = ord.status === "Pending";

                  return (
                    <div
                      key={ord.id || idx}
                      className="py-3 px-3.5 rounded-2xl bg-[#FAF9FD] border border-slate-100 flex items-center justify-between gap-3 shadow-2xs hover:bg-white transition"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={ord.avatar}
                          alt={ord.name}
                          className="w-10 h-10 rounded-2xl object-cover ring-2 ring-purple-100 shrink-0"
                        />
                        <div className="truncate">
                          <p className="text-xs font-black text-slate-900 truncate">{ord.name}</p>
                          <p className="text-[10px] font-bold text-[#5835E5] truncate">{ord.item}</p>
                          <p className="text-[9px] text-slate-400">{ord.time}</p>
                        </div>
                      </div>

                      <div className="text-right shrink-0 flex flex-col items-end gap-1.5">
                        <span className="text-xs font-black text-slate-900">{ord.price}</span>

                        {isPending ? (
                          <button
                            type="button"
                            onClick={() => handleConfirmOrder(ord)}
                            className="px-3 py-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black shadow-xs transition active:scale-95 cursor-pointer flex items-center gap-1"
                          >
                            <span>Confirm Order</span>
                            <span>✓</span>
                          </button>
                        ) : (
                          <span className="text-[9px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                            Confirmed
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TODAY'S MENU */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black">📅 Today&apos;s Menu (Live)</h3>
                  <button
                    type="button"
                    onClick={() => setIsMenuModalOpen(true)}
                    className="text-xs font-bold text-[#5835E5] hover:underline cursor-pointer"
                  >
                    Edit Menu →
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="rounded-2xl p-3 bg-orange-50 border border-orange-100">
                    <p className="text-[10px] font-black text-orange-600">Breakfast</p>
                    <p className="text-[8px] text-slate-400 font-bold mt-0.5">{currentMenu.breakfast.timing}</p>
                    <ul className="text-[9px] font-semibold text-slate-700 mt-2 space-y-1">
                      {currentMenu.breakfast.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl p-3 bg-red-50 border border-red-100">
                    <p className="text-[10px] font-black text-red-600">Lunch</p>
                    <p className="text-[8px] text-slate-400 font-bold mt-0.5">{currentMenu.lunch.timing}</p>
                    <ul className="text-[9px] font-semibold text-slate-700 mt-2 space-y-1">
                      {currentMenu.lunch.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl p-3 bg-purple-50 border border-purple-100">
                    <p className="text-[10px] font-black text-purple-600">Dinner</p>
                    <p className="text-[8px] text-slate-400 font-bold mt-0.5">{currentMenu.dinner.timing}</p>
                    <ul className="text-[9px] font-semibold text-slate-700 mt-2 space-y-1">
                      {currentMenu.dinner.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* ORDERS OVERVIEW */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-sm font-black flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#5835E5]" /> Orders Overview
                </h3>
                <div className="mt-5 h-28 flex items-end gap-3">
                  {[45, 70, 55, 85, 65, 90, 75].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#5835E5] rounded-t-lg transition-all"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[9px] text-slate-400 font-bold">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="lg:col-span-3 space-y-5">
              <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
                <h4 className="text-xs font-black mb-3">⚡ Quick Actions</h4>

                <button
                  type="button"
                  onClick={() => setIsMenuModalOpen(true)}
                  className="w-full text-left p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/70 mb-2 transition cursor-pointer"
                >
                  <p className="text-xs font-black text-emerald-800">📝 Update Menu</p>
                  <p className="text-[9px] text-emerald-600 font-semibold">Change today&apos;s menu (Instant popup)</p>
                </button>

                <button
                  type="button"
                  onClick={refreshStorageData}
                  className="w-full text-left p-3 rounded-2xl bg-rose-50 hover:bg-rose-100/70 mb-2 transition cursor-pointer"
                >
                  <p className="text-xs font-black text-rose-800">📦 Sync Orders</p>
                  <p className="text-[9px] text-rose-600 font-semibold">Fetch student bookings</p>
                </button>

                <button
                  type="button"
                  onClick={() => alert("Student discount active for this month!")}
                  className="w-full text-left p-3 rounded-2xl bg-orange-50 hover:bg-orange-100/70 transition cursor-pointer"
                >
                  <p className="text-xs font-black text-orange-800">🏷️ Add Special Offer</p>
                  <p className="text-[9px] text-orange-600 font-semibold">Attract more students</p>
                </button>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-[#FFF5EE] to-[#FFE8D6] p-5 border border-orange-100">
                <span className="text-[9px] font-black px-2 py-1 rounded-full bg-rose-500 text-white">
                  SPECIAL OFFER
                </span>
                <h4 className="text-lg font-black mt-3">10% OFF</h4>
                <p className="text-xs font-bold text-slate-600">on monthly passes</p>
                <img
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&auto=format&fit=crop&q=80"
                  alt="Food"
                  className="w-full h-24 object-cover rounded-xl mt-3"
                />
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* =====================================================
          MENU UPDATE MODAL POPUP
      ====================================================== */}
      {isMenuModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-[32px] p-6 sm:p-7 max-w-lg w-full border border-slate-100 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-xl">
                  🍳
                </div>
                <div>
                  <h3 className="text-base font-black text-[#14245c]">
                    Update Daily Menu
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold">
                    Updates sync directly to Annapurna Mess on the student portal
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveMenuChanges} className="space-y-4 text-xs font-bold text-slate-700">
              <div className="p-3.5 rounded-2xl bg-[#fff8e9]/80 border border-orange-200 space-y-1.5">
                <span className="text-orange-600 font-black block">🥞 Breakfast (08:00 AM - 10:00 AM)</span>
                <textarea
                  rows={2}
                  value={bfText}
                  onChange={(e) => setBfText(e.target.value)}
                  placeholder="e.g. Poha - Upma, Upma - Dosa, Unlimited Chai"
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#7043ed]"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-[#fff2eb]/80 border border-red-200 space-y-1.5">
                <span className="text-red-600 font-black block">🍲 Lunch (12:00 PM - 03:00 PM)</span>
                <textarea
                  rows={2}
                  value={lunchText}
                  onChange={(e) => setLunchText(e.target.value)}
                  placeholder="e.g. Paneer - Tomato, Chapati, Rice, Gulab Jamun"
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#7043ed]"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-[#f8efff]/80 border border-purple-200 space-y-1.5">
                <span className="text-purple-600 font-black block">🍛 Dinner (07:00 PM - 10:00 PM)</span>
                <textarea
                  rows={2}
                  value={dinnerText}
                  onChange={(e) => setDinnerText(e.target.value)}
                  placeholder="e.g. Chole, Veg Pulav, Roti, Salad, Buttermilk"
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#7043ed]"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsMenuModalOpen(false)}
                  className="flex-1 py-3 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className={`flex-1 py-3 rounded-2xl text-white font-black shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    saveToast ? "bg-emerald-600" : "bg-[#7043ed] hover:bg-[#5a32d1]"
                  }`}
                >
                  {saveToast ? (
                    <>
                      <Check size={16} />
                      <span>Updated &amp; Broadcasted!</span>
                    </>
                  ) : (
                    <span>Save &amp; Broadcast Menu</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   CAFE DASHBOARD (THE CAFE 24)
============================================================ */

function CafeDashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [activePage, setActivePage] = useState(1);

  const sidebarLinks = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Orders", icon: ShoppingBag, badge: "12" },
    { label: "Menu & Food Items", icon: UtensilsCrossed },
    { label: "Offers & Discounts", icon: Tag },
    { label: "Reviews", icon: Star },
    { label: "Reports", icon: BarChart3 },
    { label: "Settings", icon: Settings },
  ];

  const recentOrders = [
    {
      id: "#ORD1045",
      student: "Ananya S.",
      items: "Paneer Butter Masala + Naan + Cold Coffee",
      amount: "₹280",
      status: "Preparing",
      statusStyle: "bg-[#FFF0E0] text-[#FF8A00]",
      time: "11:20 AM",
    },
    {
      id: "#ORD1044",
      student: "Rohan P.",
      items: "Veg Thali",
      amount: "₹180",
      status: "Pending",
      statusStyle: "bg-[#FFEAF0] text-[#FF4567]",
      time: "11:05 AM",
    },
    {
      id: "#ORD1043",
      student: "Sneha K.",
      items: "Pasta + Garlic Bread",
      amount: "₹240",
      status: "Completed",
      statusStyle: "bg-[#E7F9EE] text-[#0FAF53]",
      time: "10:48 AM",
    },
    {
      id: "#ORD1042",
      student: "Aditya M.",
      items: "Masala Dosa + Coffee",
      amount: "₹140",
      status: "Completed",
      statusStyle: "bg-[#E7F9EE] text-[#0FAF53]",
      time: "10:20 AM",
    },
    {
      id: "#ORD1041",
      student: "Neha D.",
      items: "Burger + Fries",
      amount: "₹110",
      status: "Preparing",
      statusStyle: "bg-[#FFF0E0] text-[#FF8A00]",
      time: "09:55 AM",
    },
  ];

  const salesBars = [
    { day: "Mon", salesHeight: "30%", orderHeight: "45%" },
    { day: "Tue", salesHeight: "38%", orderHeight: "30%" },
    { day: "Wed", salesHeight: "55%", orderHeight: "42%" },
    { day: "Thu", salesHeight: "68%", orderHeight: "55%" },
    { day: "Fri", salesHeight: "60%", orderHeight: "72%" },
    { day: "Sat", salesHeight: "75%", orderHeight: "58%" },
    { day: "Sun", salesHeight: "72%", orderHeight: "82%" },
  ];

  const topSelling = [
    {
      name: "Paneer Butter Masala",
      count: "42 orders",
      img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Veg Thali",
      count: "38 orders",
      img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Masala Dosa",
      count: "31 orders",
      img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Cold Coffee",
      count: "26 orders",
      img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Burger",
      count: "19 orders",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FB] text-slate-900 font-sans flex antialiased">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-[235px] bg-[#0E1528] text-white shrink-0 sticky top-0 h-screen justify-between p-3.5 z-40 overflow-y-auto">
        <div className="space-y-4">
          <Link href="/vendor" className="flex items-center gap-3 px-2 pt-2">
            <div className="w-10 h-10 rounded-2xl bg-[#090D1A] border border-amber-500/20 flex items-center justify-center text-xl shadow-inner">
              ☕
            </div>
            <div>
              <span className="text-lg font-black tracking-tight block leading-tight text-white">
                Studentica.
              </span>
              <span className="text-[10px] text-purple-300/70 font-semibold">
                Vendor Portal
              </span>
            </div>
          </Link>

          <nav className="space-y-1 pt-1">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.label;

              return (
                <button
                  key={item.label}
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setActiveMenu(item.label)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#F6AE2D] to-[#FCA019] text-[#131E3A] font-black shadow-md shadow-amber-500/20"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="w-4 h-4 rounded-full bg-[#E53935] text-white text-[9px] font-black flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="space-y-3 pt-2">
          <div className="text-center px-2">
            <p className="text-[13px] font-bold text-[#FFD15C] leading-snug rotate-[-5deg] select-none">
              Good Food <br /> Happy Students
              <br />
              <span className="text-sm">⌣</span>
            </p>
          </div>

          <div className="w-full h-28 rounded-2xl overflow-hidden shadow-lg border border-white/5 bg-[#172036]">
            <img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&auto=format&fit=crop&q=80"
              alt="Cup of Coffee & Sandwich"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl p-3 bg-white/5 border border-white/10 space-y-2 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-300">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Need Help?</span>
            </div>
            <p className="text-[10px] text-slate-400">Chat with us</p>
            <button
              type="button"
              suppressHydrationWarning
              className="w-full py-2 rounded-xl bg-gradient-to-r from-[#F6AE2D] to-[#FCA019] text-[#131E3A] text-xs font-black flex items-center justify-center gap-1.5 shadow-sm transition hover:brightness-105"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Live Chat</span>
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 sm:px-8 h-18 flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-2.5 px-4 py-2 bg-[#F3F5FA] border border-slate-200/60 rounded-xl w-full max-w-md">
            <Search className="w-4 h-4 text-[#5D45F9] shrink-0" />
            <input
              type="text"
              placeholder="Search orders, menu, or customers..."
              suppressHydrationWarning
              data-lpignore="true"
              autoComplete="off"
              className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              suppressHydrationWarning
              className="relative p-2.5 rounded-xl bg-[#F3F5FA] text-slate-600 hover:text-slate-900 transition"
            >
              <Bell className="w-4 h-4 text-[#14234B]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E53935] text-[9px] font-black text-white flex items-center justify-center">
                3
              </span>
            </button>

            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80"
                alt="Rahul Sharma"
                className="w-9 h-9 rounded-xl object-cover ring-2 ring-purple-100"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-black text-[#14234B] leading-tight">
                  Rahul Sharma
                </p>
                <p className="text-[10px] text-slate-400 font-semibold">
                  Cafe Owner
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </header>

        <main className="p-5 sm:p-6 space-y-4 w-full">
          {/* HERO BANNER + SPECIAL OFFER */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_260px] gap-4 items-stretch">
            <div className="relative rounded-[26px] overflow-hidden bg-gradient-to-r from-[#FDE8D4] via-[#FCEFDE] to-[#FCE6D2] p-6 border border-orange-200/50 shadow-sm flex flex-col justify-between min-h-[190px]">
              <div className="absolute right-0 top-0 bottom-0 w-[42%] overflow-hidden pointer-events-none hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80"
                  alt="Latte Coffee and Food"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FDE8D4] via-[#FDE8D4]/60 to-transparent" />
              </div>

              <div className="relative z-10 space-y-2.5 max-w-xl">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#DCF9E8] text-[#0FAF53] text-[10px] font-black">
                  <CheckCircle2 className="w-3 h-3" />
                  Open
                </span>

                <div className="flex items-center gap-4 pt-1">
                  <div className="w-20 h-20 rounded-full bg-[#18141F] border-2 border-amber-300/30 flex flex-col items-center justify-center text-center text-white shadow-md shrink-0">
                    <span className="text-base leading-none">☕</span>
                    <span className="text-[10px] font-black tracking-tight leading-tight mt-0.5">
                      THE CAFE
                    </span>
                    <span className="text-xs font-black text-amber-400 leading-none">
                      24
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-black text-[#14234B] tracking-tight">
                        THE CAFE 24
                      </h1>
                      <Pencil className="w-3.5 h-3.5 text-slate-500 cursor-pointer" />
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-semibold mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>
                        Tapkir Nagar Dehu-phata, MIT AOE College Road, Alandi
                        412105
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-600 font-semibold mt-1.5">
                      <span className="flex items-center gap-1 text-[#F29F05] font-black">
                        ★ 4.5{" "}
                        <span className="text-slate-500 font-medium">
                          (120 reviews)
                        </span>
                      </span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#DCF9E8] text-[#0FAF53] text-[10px] font-black">
                        🌿 Veg
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium mt-1">
                      <span>Contact: 9822012024</span>
                      <span>|</span>
                      <span>Price Range: ₹200 - 400</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[26px] overflow-hidden bg-gradient-to-br from-[#5D42CE] to-[#472BB3] p-5 text-white shadow-sm flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-amber-400 text-purple-950 flex items-center justify-center font-black">
                    <Tag className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-extrabold text-white/90">
                    Special Offer
                  </span>
                </div>

                <div className="pt-3">
                  <h3 className="text-3xl font-black tracking-tight text-white">
                    10% OFF
                  </h3>
                  <p className="text-xs text-purple-200">on all items</p>
                </div>
              </div>

              <button
                type="button"
                suppressHydrationWarning
                className="w-full py-2.5 rounded-xl bg-[#F6AE2D] hover:bg-[#efa118] text-[#131E3A] text-xs font-black flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <span>View Offer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4 STAT CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-[#FFEAF3] text-[#EE3876] flex items-center justify-center mb-2">
                <FileText className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-bold text-slate-500">Total Orders</p>
              <h3 className="text-2xl font-black text-[#14234B] mt-0.5">36</h3>
              <p className="text-[10px] font-bold text-[#0FAF53] flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> 12%{" "}
                <span className="text-slate-400 font-medium">vs yesterday</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-[#E8F3FF] text-[#2F80ED] flex items-center justify-center mb-2">
                <Clock3 className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-bold text-slate-500">
                Pending Orders
              </p>
              <h3 className="text-2xl font-black text-[#14234B] mt-0.5">10</h3>
              <p className="text-[10px] font-bold text-[#0FAF53] flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> 5%{" "}
                <span className="text-slate-400 font-medium">vs yesterday</span>
              </p>
              <Hourglass className="absolute right-3 top-3 w-12 h-12 text-blue-100/70 pointer-events-none" />
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-[#DCF9E8] text-[#0FAF53] flex items-center justify-center mb-2">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-bold text-slate-500">
                Completed Orders
              </p>
              <h3 className="text-2xl font-black text-[#14234B] mt-0.5">24</h3>
              <p className="text-[10px] font-bold text-[#0FAF53] flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> 18%{" "}
                <span className="text-slate-400 font-medium">vs yesterday</span>
              </p>
              <ShoppingBag className="absolute right-3 top-3 w-12 h-12 text-emerald-100/70 pointer-events-none" />
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-[#F0EAFE] text-[#7E42F5] flex items-center justify-center font-black mb-2">
                ₹
              </div>
              <p className="text-[11px] font-bold text-slate-500">
                Today&apos;s Revenue
              </p>
              <h3 className="text-2xl font-black text-[#14234B] mt-0.5">₹8,450</h3>
              <p className="text-[10px] font-bold text-[#0FAF53] flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> 25%{" "}
                <span className="text-slate-400 font-medium">vs yesterday</span>
              </p>
              <TrendingUp className="absolute right-3 top-3 w-12 h-12 text-purple-100/70 pointer-events-none" />
            </div>
          </div>

          {/* MAIN 3-COLUMN DASHBOARD GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)_280px] gap-4 items-start">
            {/* 1. RECENT ORDERS TABLE */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FFEAF3] text-[#EE3876] flex items-center justify-center">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-[#14234B]">
                      Recent Orders
                    </h3>
                    <p className="text-[9px] text-slate-400">
                      Latest orders from students
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  suppressHydrationWarning
                  className="text-[10px] font-bold text-[#5D45F9] flex items-center gap-1 hover:underline"
                >
                  View All <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[480px]">
                  <thead>
                    <tr className="text-slate-400 font-semibold border-b border-slate-100 text-[10px] pb-2">
                      <th className="pb-2">Order ID</th>
                      <th className="pb-2">Student Name</th>
                      <th className="pb-2">Items</th>
                      <th className="pb-2">Amount</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2">Time</th>
                      <th className="pb-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {recentOrders.map((ord) => (
                      <tr
                        key={ord.id}
                        className="hover:bg-slate-50/50 transition"
                      >
                        <td className="py-2.5 font-bold text-slate-500 text-[10px]">
                          {ord.id}
                        </td>
                        <td className="py-2.5 font-extrabold text-slate-800 text-[11px]">
                          {ord.student}
                        </td>
                        <td className="py-2.5 text-slate-500 text-[10px] truncate max-w-[130px]">
                          {ord.items}
                        </td>
                        <td className="py-2.5 font-black text-[#14234B] text-[11px]">
                          {ord.amount}
                        </td>
                        <td className="py-2.5">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${ord.statusStyle}`}
                          >
                            {ord.status}
                          </span>
                        </td>
                        <td className="py-2.5 text-slate-400 text-[10px]">
                          {ord.time}
                        </td>
                        <td className="py-2.5 text-right">
                          <button
                            type="button"
                            suppressHydrationWarning
                            className="px-2 py-0.5 rounded-lg border border-purple-200 text-[#5D45F9] text-[9px] font-bold hover:bg-[#5D45F9] hover:text-white transition"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between pt-2 text-[10px] text-slate-400">
                <span>Showing 5 of 36 orders</span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    suppressHydrationWarning
                    className="w-5 h-5 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center"
                  >
                    ‹
                  </button>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      suppressHydrationWarning
                      onClick={() => setActivePage(n)}
                      className={`w-5 h-5 rounded-full font-bold flex items-center justify-center ${
                        activePage === n
                          ? "bg-[#5D45F9] text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    type="button"
                    suppressHydrationWarning
                    className="w-5 h-5 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            {/* 2. SALES OVERVIEW + PROMO BANNER */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-1">
                  <h3 className="text-xs font-black text-[#14234B] flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-[#5D45F9]" /> Sales
                    Overview
                  </h3>
                  <select
                    suppressHydrationWarning
                    className="text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2 py-0.5"
                  >
                    <option>This Week</option>
                  </select>
                </div>

                <div className="flex items-end gap-2 pt-2 border-b border-slate-100 pb-2">
                  <div className="flex flex-col justify-between h-36 text-[8px] font-bold text-slate-400 pb-2">
                    <span>10K</span>
                    <span>8K</span>
                    <span>6K</span>
                    <span>2K</span>
                    <span>0</span>
                  </div>

                  <div className="flex-1 flex items-end justify-between gap-1.5 h-36">
                    {salesBars.map((b) => (
                      <div
                        key={b.day}
                        className="flex-1 flex flex-col items-center justify-end h-full gap-1.5"
                      >
                        <div className="flex items-end gap-1 h-28 w-full justify-center">
                          <div
                            className="w-1.5 rounded-t-sm bg-[#784BF6]"
                            style={{ height: b.salesHeight }}
                          />
                          <div
                            className="w-1.5 rounded-t-sm bg-[#EE3876]"
                            style={{ height: b.orderHeight }}
                          />
                        </div>
                        <span className="text-[9px] font-bold text-slate-400">
                          {b.day}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-5 text-[9px] font-bold text-slate-600">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#784BF6]" /> Total
                    Sales
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#EE3876]" /> Orders
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-[#EEE7FE] to-[#F7EEFD] p-4 border border-purple-100 flex items-center justify-between relative overflow-hidden">
                <div className="space-y-1.5 max-w-[190px] z-10">
                  <h4 className="text-xs font-black text-[#3A1D8D] leading-snug rotate-[-2deg]">
                    Keep Your <br /> Cafe Running Smoothly!
                  </h4>
                  <p className="text-[9px] text-slate-500 font-medium">
                    Manage orders, update menu, track earnings and more.
                  </p>
                  <button
                    type="button"
                    suppressHydrationWarning
                    className="px-3 py-1.5 rounded-xl bg-[#5D45F9] hover:bg-[#4b35e0] text-white text-[10px] font-black flex items-center gap-1 shadow-sm transition"
                  >
                    <span>Manage Menu</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="w-20 h-20 rounded-full overflow-hidden shadow-sm shrink-0 border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop&q=80"
                    alt="Salad Bowl"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 3. RIGHT COLUMN WIDGETS */}
            <div className="space-y-3.5">
              <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                  <Clock3 className="w-3.5 h-3.5 text-[#5D45F9]" />
                  <span>Restaurant Timings</span>
                </div>

                <div className="flex items-center justify-between pt-0.5">
                  <span className="text-xs font-black text-[#14234B]">
                    10:00 AM - 9:00 PM
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#DCF9E8] text-[#0FAF53] text-[9px] font-bold flex items-center gap-1">
                    ✓ Open
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm space-y-2.5">
                <h4 className="text-xs font-black text-[#14234B] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Quick
                  Actions
                </h4>

                <div className="space-y-1.5">
                  <button
                    type="button"
                    suppressHydrationWarning
                    className="w-full flex items-center justify-between p-2 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-left"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#DCF9E8] text-[#0FAF53] flex items-center justify-center shrink-0">
                        <Utensils className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-800">
                          Update Menu
                        </p>
                        <p className="text-[8px] text-slate-400">
                          Add / modify food items
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </button>

                  <button
                    type="button"
                    suppressHydrationWarning
                    className="w-full flex items-center justify-between p-2 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-left"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#FFEAF3] text-[#EE3876] flex items-center justify-center shrink-0">
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-800">
                          Manage Orders
                        </p>
                        <p className="text-[8px] text-slate-400">
                          View & update orders
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </button>

                  <button
                    type="button"
                    suppressHydrationWarning
                    className="w-full flex items-center justify-between p-2 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-left"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#F0EAFE] text-[#784BF6] flex items-center justify-center shrink-0">
                        <Star className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-800">
                          View Reviews
                        </p>
                        <p className="text-[8px] text-slate-400">
                          Check student feedback
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </button>

                  <button
                    type="button"
                    suppressHydrationWarning
                    className="w-full flex items-center justify-between p-2 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-left"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#FFF2DE] text-[#F09923] flex items-center justify-center shrink-0">
                        <Tag className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-800">
                          Add Special Offer
                        </p>
                        <p className="text-[8px] text-slate-400">
                          Attract more students
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-[#14234B] flex items-center gap-1">
                    <span>👑</span> Top Selling Items
                  </h4>
                  <button
                    type="button"
                    suppressHydrationWarning
                    className="text-[9px] font-bold text-[#5D45F9] hover:underline"
                  >
                    View All →
                  </button>
                </div>

                <div className="space-y-1.5 pt-1">
                  {topSelling.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between text-xs py-1 border-b border-slate-50 last:border-0"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-6 h-6 rounded-md object-cover"
                        />
                        <span className="text-[10px] font-extrabold text-slate-800 truncate max-w-[120px]">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-[9px] text-slate-400 font-bold">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM FULL WIDTH BANNER */}
          <section className="relative rounded-2xl bg-gradient-to-r from-[#FFF2E0] via-[#FCEFDC] to-[#FBE7D4] border border-orange-200/60 p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 z-10">
              <span className="text-2xl text-[#5D45F9]">♧</span>
              <h3 className="text-xs font-black text-[#3E2319] leading-tight rotate-[-2deg]">
                Fresh Ingredients <br /> Great Taste
              </h3>
            </div>

            <div className="w-16 h-16 rounded-full overflow-hidden shadow-md border-2 border-white shrink-0 z-10 hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80"
                alt="Fresh Salad Dish"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden lg:flex items-center gap-8 z-10 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#5D45F9] flex items-center justify-center text-sm">
                  🛍️
                </div>
                <div>
                  <p className="font-extrabold text-[#14234B] text-[11px]">
                    More Orders
                  </p>
                  <p className="text-[9px] text-slate-500">Bigger Reach</p>
                </div>
              </div>

              <div className="w-px h-6 bg-slate-300" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#5D45F9] flex items-center justify-center text-sm">
                  🛡️
                </div>
                <div>
                  <p className="font-extrabold text-[#14234B] text-[11px]">
                    Quality Food
                  </p>
                  <p className="text-[9px] text-slate-500">Happy Customers</p>
                </div>
              </div>

              <div className="w-px h-6 bg-slate-300" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#5D45F9] flex items-center justify-center text-sm">
                  📈
                </div>
                <div>
                  <p className="font-extrabold text-[#14234B] text-[11px]">
                    Grow Your Business
                  </p>
                  <p className="text-[9px] text-slate-500">With Studentica</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              suppressHydrationWarning
              className="px-5 py-2.5 rounded-xl bg-[#5D45F9] hover:bg-[#4b35e0] text-white text-xs font-black flex items-center gap-1.5 transition shadow-sm z-10 shrink-0"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>View Reports →</span>
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}

/* ============================================================
   LAUNDRY DASHBOARD (COTTONSPA)
============================================================ */

/* ============================================================
   LAUNDRY DASHBOARD (COTTONSPA - FULL REAL-TIME SYNC)
============================================================ */

function LaundryDashboard() {
  const [activeTab, setActiveTab] = useState("All");

  // Modals state
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [saveToast, setSaveToast] = useState("");

  // 1. Dynamic Pricing for all 4 services
  const defaultPrices = {
    normalWash: "₹100/load (Max 7kg)",
    ironing: "₹30/item",
    dryCleaning: "₹80/item",
    premiumWash: "₹150/item",
  };
  const [servicePrices, setServicePrices] = useState(defaultPrices);

  // 2. Dynamic Availability & Working Days
  const defaultAvailability = {
    timings: "8:00 AM - 10:00 PM",
    days: "Monday, Wednesday, Friday",
    activeDays: ["Mon", "Wed", "Fri"],
    locationCoverage: "MIT-AOE Gate, Dehu Phata, Girls Hostel A & B",
  };
  const [availability, setAvailability] = useState(defaultAvailability);

  // 3. Static fallback orders
  const staticLaundryOrders = [
    {
      id: "#LD0018",
      name: "Priya Sharma",
      items: "3 Clothes",
      amount: "₹180",
      status: "In Progress",
      statusClass: "bg-[#fff3e4] text-[#ea7f12] border border-[#fbdcb2]",
      time: "10:30 AM",
      isStudentBooking: false,
    },
    {
      id: "#LD0017",
      name: "Rohan Patil",
      items: "5 Clothes",
      amount: "₹300",
      status: "Pending",
      statusClass: "bg-[#ffeef4] text-[#ee3d7a] border border-[#fccfdf]",
      time: "09:45 AM",
      isStudentBooking: false,
    },
    {
      id: "#LD0016",
      name: "Sneha Kulkarni",
      items: "2 Bedsheets",
      amount: "₹200",
      status: "Completed",
      statusClass: "bg-[#e5faee] text-[#11a965] border border-[#c4f3d7]",
      time: "09:20 AM",
      isStudentBooking: false,
    },
    {
      id: "#LD0015",
      name: "Aditya More",
      items: "4 Clothes",
      amount: "₹240",
      status: "Completed",
      statusClass: "bg-[#e5faee] text-[#11a965] border border-[#c4f3d7]",
      time: "08:50 AM",
      isStudentBooking: false,
    },
  ];

  const [allOrders, setAllOrders] = useState(staticLaundryOrders);

  // Sync Live Data from LocalStorage
  const refreshStorageData = useCallback(() => {
    if (typeof window === "undefined") return;

    try {
      // Load saved prices
      const savedPrices = localStorage.getItem("cotton_spa_prices");
      if (savedPrices) setServicePrices(JSON.parse(savedPrices));

      // Load saved availability
      const savedAvail = localStorage.getItem("cotton_spa_availability");
      if (savedAvail) setAvailability(JSON.parse(savedAvail));

      // Load live student orders
      const storedBookings = JSON.parse(localStorage.getItem("student_bookings") || "[]");
      const liveLaundryBookings = storedBookings
        .filter(
          (b) =>
            b.service === "Laundry" ||
            (b.vendor && b.vendor.toLowerCase().includes("cotton")) ||
            (b.id && b.id.includes("LND"))
        )
        .map((b) => ({
          id: b.id ? (b.id.length > 8 ? `#${b.id.slice(-6)}` : b.id) : "#BK-LND",
          originalId: b.id,
          name: b.student || "Riya Wagh (Student)",
          items: b.item || "CottonSpa Laundry Pickup",
          amount: b.price || "₹60/kg",
          time: b.bookedOn || b.date || "Just now",
          status: b.vendorConfirmed ? "Confirmed" : "Pending",
          statusClass: b.vendorConfirmed
            ? "bg-[#e5faee] text-[#11a965] border border-[#c4f3d7] font-bold"
            : "bg-[#ffeef4] text-[#ee3d7a] border border-[#fccfdf] font-bold",
          isStudentBooking: true,
        }));

      setAllOrders([...liveLaundryBookings, ...staticLaundryOrders]);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    refreshStorageData();
    window.addEventListener("storage", refreshStorageData);
    window.addEventListener("focus", refreshStorageData);
    return () => {
      window.removeEventListener("storage", refreshStorageData);
      window.removeEventListener("focus", refreshStorageData);
    };
  }, [refreshStorageData]);

  // Handle owner confirming student booking
  const handleConfirmOrder = (order) => {
    setAllOrders((prev) =>
      prev.map((o) =>
        o.id === order.id
          ? {
              ...o,
              status: "Confirmed",
              statusClass: "bg-[#e5faee] text-[#11a965] border border-[#c4f3d7] font-bold",
            }
          : o
      )
    );

    try {
      const stored = JSON.parse(localStorage.getItem("student_bookings") || "[]");
      const updated = stored.map((b) => {
        if (b.id === order.id || b.id === order.originalId) {
          return { ...b, status: "Confirmed", vendorConfirmed: true };
        }
        return b;
      });
      localStorage.setItem("student_bookings", JSON.stringify(updated));
      window.dispatchEvent(new Event("storage"));
      setSaveToast("Order approved & confirmed!");
      setTimeout(() => setSaveToast(""), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  // Save 4 service prices
  const handleSavePrices = (e) => {
    e.preventDefault();
    localStorage.setItem("cotton_spa_prices", JSON.stringify(servicePrices));
    window.dispatchEvent(new Event("storage"));
    setSaveToast("All 4 service prices updated!");
    setTimeout(() => {
      setSaveToast("");
      setIsPriceModalOpen(false);
    }, 1200);
  };

  // Save availability & operational days
  const handleSaveAvailability = (e) => {
    e.preventDefault();
    localStorage.setItem("cotton_spa_availability", JSON.stringify(availability));
    window.dispatchEvent(new Event("storage"));
    setSaveToast("Availability & pickup schedule updated!");
    setTimeout(() => {
      setSaveToast("");
      setIsAvailabilityModalOpen(false);
    }, 1200);
  };

  const filteredOrders =
    activeTab === "All"
      ? allOrders
      : allOrders.filter((ord) => ord.status === activeTab);

  const chartData = [
    { day: "Mon", completed: 8, pending: 9, cancelled: 2 },
    { day: "Tue", completed: 10, pending: 11, cancelled: 3 },
    { day: "Wed", completed: 13, pending: 11, cancelled: 2 },
    { day: "Thu", completed: 17, pending: 7, cancelled: 1 },
    { day: "Fri", completed: 12, pending: 9, cancelled: 3 },
    { day: "Sat", completed: 14, pending: 6, cancelled: 2 },
    { day: "Sun", completed: 15, pending: 7, cancelled: 4 },
  ];

  const sidebarLinks = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Orders", icon: ShoppingBag, badge: String(allOrders.length) },
    { label: "Earnings", icon: CreditCard },
    { label: "Customers", icon: Users },
    { label: "Profile", icon: User },
    { label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FC] text-slate-900 font-sans flex antialiased relative">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-[240px] bg-[#121631] text-white shrink-0 sticky top-0 h-screen justify-between p-4 z-40 overflow-y-auto">
        <div className="space-y-6">
          <Link href="/vendor" className="flex items-center gap-3 px-2 pt-2">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#684bf5] to-[#996eff] flex items-center justify-center text-white shadow-lg shadow-purple-950/40">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight block leading-tight">Studentica.</span>
              <span className="text-[10px] text-purple-200/70 font-medium">Vendor Portal</span>
            </div>
          </Link>

          <nav className="space-y-1.5">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  type="button"
                  className={`flex w-full items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition text-left ${
                    item.active
                      ? "bg-[#5D45F9] text-white shadow-md shadow-purple-950/40"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="w-5 h-5 rounded-full bg-[#FA3E57] text-white text-[10px] font-black flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="space-y-3 pb-2 text-center">
          <p className="text-[15px] font-black text-[#D379FA] rotate-[-7deg] leading-tight select-none">
            Clean Clothes <br /> Happy Students
            <br />
            <span className="text-xl">⌣</span>
          </p>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 sm:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#F6F7FD] border border-slate-200/70 rounded-2xl w-full max-w-md">
            <Search className="w-4 h-4 text-[#5D45F9] shrink-0" />
            <input
              type="text"
              placeholder="Search laundry orders, students..."
              className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={refreshStorageData}
              className="text-xs font-bold text-[#5D45F9] bg-purple-50 px-3.5 py-2 rounded-xl hover:bg-purple-100 transition cursor-pointer"
            >
              Sync Student Pickups 🔄
            </button>

            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80"
                alt="Rahul Sharma"
                className="w-10 h-10 rounded-2xl object-cover ring-2 ring-purple-100"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-black text-[#152857] leading-tight">Rahul Sharma</p>
                <p className="text-[10px] text-slate-400 font-semibold">CottonSpa Owner</p>
              </div>
            </div>
          </div>
        </header>

        <main className="p-5 sm:p-7 space-y-5 max-w-[1450px] w-full mx-auto">
          {/* HERO BANNER */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_280px] gap-4 items-stretch">
            <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-r from-[#EDE8FF] via-[#F4F0FF] to-[#EAE3FF] p-6 sm:p-7 border border-purple-100/60 shadow-sm flex flex-col justify-between min-h-[200px]">
              <div className="relative z-10 space-y-3 max-w-xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E3DCFF] text-[#5D45F9] text-[10px] font-black">
                  <WashingMachine className="w-3.5 h-3.5" /> Laundry Vendor Portal
                </span>

                <div className="flex items-center gap-3 pt-1">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-purple-100 shadow-md flex items-center justify-center text-[#5D45F9] shrink-0">
                    <WashingMachine className="w-8 h-8" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-black text-[#152758] tracking-tight">CottonSpa</h1>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                      Dehu Phata • Operating Hours: {availability.timings}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-bold text-[#182C5D] pt-1">
                  Manage student pickups, update rates for all 4 services, and configure operational days.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] overflow-hidden bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
              <div className="bg-gradient-to-r from-[#7B58FA] to-[#9963F9] p-4 text-white flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <span className="text-xs font-black tracking-wide">Today&apos;s Status</span>
              </div>
              <div className="p-5 space-y-1">
                <p className="text-xs font-bold text-slate-400">Total Bookings</p>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-black text-[#152758]">{allOrders.length}</span>
                  <span className="text-xs font-black text-[#11A866] flex items-center gap-0.5">
                    <TrendingUp className="w-3.5 h-3.5" /> Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 STAT CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-2">
              <p className="text-xs font-bold text-slate-500">Total Orders</p>
              <h3 className="text-2xl font-black text-[#152857]">{allOrders.length}</h3>
              <p className="text-[11px] font-bold text-[#11A866]">↑ Live synced</p>
            </div>
            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-2">
              <p className="text-xs font-bold text-slate-500">Completed</p>
              <h3 className="text-2xl font-black text-[#152857]">
                {allOrders.filter((o) => o.status === "Completed").length + 14}
              </h3>
              <p className="text-[11px] font-bold text-[#11A866]">↑ 8% vs yesterday</p>
            </div>
            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-2">
              <p className="text-xs font-bold text-slate-500">Pending Approvals</p>
              <h3 className="text-2xl font-black text-[#EA7F12]">
                {allOrders.filter((o) => o.status === "Pending").length}
              </h3>
              <p className="text-[11px] font-bold text-[#EA7F12]">Requires Confirmation</p>
            </div>
            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-2">
              <p className="text-xs font-bold text-slate-500">Rating</p>
              <h3 className="text-2xl font-black text-[#784BF6]">4.2 ★</h3>
              <p className="text-[11px] font-bold text-[#11A866]">180+ Student Reviews</p>
            </div>
          </div>

          {/* ORDERS TABLE + CHART + QUICK ACTIONS */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)_280px] gap-4 items-start">
            {/* ORDERS TABLE WITH LIVE APPROVAL ACTION */}
            <div className="bg-white rounded-[26px] p-5 border border-slate-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-1">
                <div>
                  <h3 className="text-base font-black text-[#152758]">Recent Orders</h3>
                  <p className="text-[10px] text-slate-400 font-semibold">Incoming student pickup bookings</p>
                </div>
                <button
                  type="button"
                  onClick={refreshStorageData}
                  className="text-xs font-bold text-[#5D45F9] hover:underline cursor-pointer"
                >
                  Refresh 🔄
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[500px]">
                  <thead>
                    <tr className="text-slate-400 font-bold border-b border-slate-100 text-[10px] uppercase pb-2">
                      <th className="pb-2">Order ID</th>
                      <th className="pb-2">Student Name</th>
                      <th className="pb-2">Items</th>
                      <th className="pb-2">Amount</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filteredOrders.map((ord) => {
                      const isPending = ord.status === "Pending";

                      return (
                        <tr key={ord.id} className="hover:bg-slate-50/50 transition">
                          <td className="py-3 font-black text-[#162758]">{ord.id}</td>
                          <td className="py-3 font-extrabold text-slate-800">{ord.name}</td>
                          <td className="py-3 text-slate-500 font-medium truncate max-w-[130px]">{ord.items}</td>
                          <td className="py-3 font-black text-[#162758]">{ord.amount}</td>
                          <td className="py-3">
                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-black ${ord.statusClass}`}>
                              {ord.status}
                            </span>
                          </td>
                          <td className="py-3 text-right">
                            {isPending && ord.isStudentBooking ? (
                              <button
                                type="button"
                                onClick={() => handleConfirmOrder(ord)}
                                className="px-3 py-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black shadow-xs transition active:scale-95 cursor-pointer whitespace-nowrap"
                              >
                                Confirm Order ✓
                              </button>
                            ) : (
                              <span className="text-[10px] text-slate-400 font-semibold">{ord.time}</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CHART */}
            <div className="space-y-4">
              <div className="bg-white rounded-[26px] p-5 border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-1">
                  <h3 className="text-sm font-black text-[#152758] flex items-center gap-1.5">
                    <Clock3 className="w-4 h-4 text-[#5D45F9]" /> Orders Overview
                  </h3>
                  <span className="text-[10px] font-bold text-slate-400">Weekly Performance</span>
                </div>

                <div className="h-44 flex items-end justify-between gap-2 pt-4 px-1 border-b border-slate-100">
                  {chartData.map((d) => (
                    <div key={d.day} className="flex-1 flex flex-col items-center justify-end h-full gap-1.5">
                      <div className="flex items-end gap-1 h-32 w-full justify-center">
                        <div className="w-1.5 rounded-t-sm bg-[#16B774]" style={{ height: `${(d.completed / 20) * 100}%` }} />
                        <div className="w-1.5 rounded-t-sm bg-[#F09923]" style={{ height: `${(d.pending / 20) * 100}%` }} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">{d.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* QUICK ACTIONS & LIVE PRICING */}
            <div className="space-y-4">
              <div className="bg-white rounded-[26px] p-5 border border-slate-100 shadow-sm space-y-3">
                <h4 className="text-xs font-black text-[#152758]">⚡ Quick Actions</h4>
                <button
                  type="button"
                  onClick={() => setIsPriceModalOpen(true)}
                  className="w-full text-left p-2.5 rounded-2xl bg-purple-50 hover:bg-purple-100/70 transition border border-purple-100 cursor-pointer"
                >
                  <p className="text-xs font-black text-[#5D45F9]">🏷️ Update Service Prices</p>
                  <p className="text-[10px] text-slate-500">Normal, Ironing, Dry Clean, Premium</p>
                </button>
                <button
                  type="button"
                  onClick={() => setIsAvailabilityModalOpen(true)}
                  className="w-full text-left p-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100/70 transition border border-amber-100 cursor-pointer"
                >
                  <p className="text-xs font-black text-amber-800">📅 Operational Days</p>
                  <p className="text-[10px] text-slate-500">Configure pickup days &amp; coverage</p>
                </button>
              </div>

              {/* LIVE PRICING CARD */}
              <div className="bg-white rounded-[26px] p-5 border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#EA7F12]">
                    <Tag className="w-4 h-4" /> Live Pricing
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Live</span>
                </div>

                <div className="space-y-1 text-xs font-semibold text-slate-700">
                  <p>• Normal: <strong className="text-slate-900">{servicePrices.normalWash}</strong></p>
                  <p>• Ironing: <strong className="text-slate-900">{servicePrices.ironing}</strong></p>
                  <p>• Dry Clean: <strong className="text-slate-900">{servicePrices.dryCleaning}</strong></p>
                  <p>• Premium: <strong className="text-slate-900">{servicePrices.premiumWash}</strong></p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPriceModalOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-[#5D45F9] text-white text-xs font-black hover:bg-[#4b35e0] transition cursor-pointer"
                >
                  Update Price
                </button>
              </div>
            </div>
          </div>

          {/* =====================================================
              AVAILABILITY & OPERATIONAL DAYS SECTION (RED-OUTLINED AREA)
          ====================================================== */}
          <div className="bg-white rounded-[28px] p-6 border border-slate-100 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-black text-[#152758] flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-[#5D45F9]" />
                  Operational Schedule &amp; Pickup Days
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  Broadcasted live to student CottonSpa booking page
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsAvailabilityModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-[#5D45F9] hover:bg-[#472ecc] text-white text-xs font-black shadow-sm transition flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
              >
                <span>Edit Availability &amp; Days</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#5D45F9]">Operating Pickup Days</span>
                <h4 className="text-sm font-black text-slate-900">{availability.days}</h4>
                <div className="flex gap-1.5 pt-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <span
                      key={day}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        availability.activeDays?.includes(day)
                          ? "bg-[#5D45F9] text-white"
                          : "bg-white text-slate-400 border border-slate-200"
                      }`}
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-orange-600">Working Hours</span>
                <h4 className="text-sm font-black text-slate-900">{availability.timings}</h4>
                <p className="text-[11px] text-slate-500 font-medium pt-2">
                  Morning (9-10 AM) • Afternoon (2-3 PM) • Evening (6-7 PM)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">Pickup Coverage</span>
                <h4 className="text-sm font-black text-slate-900">{availability.locationCoverage}</h4>
                <p className="text-[11px] text-emerald-600 font-bold pt-2">
                  ✓ Doorstep campus delivery included
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* =====================================================
          1. MODAL: UPDATE 4 SERVICE PRICES
      ====================================================== */}
      {isPriceModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-[32px] p-6 sm:p-7 max-w-md w-full border border-slate-100 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 text-[#5D45F9] flex items-center justify-center text-xl">
                  🏷️
                </div>
                <div>
                  <h3 className="text-base font-black text-[#152758]">Update Service Rates</h3>
                  <p className="text-[10px] text-slate-400 font-bold">Syncs to student CottonSpa page</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsPriceModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSavePrices} className="space-y-3.5 text-xs font-bold text-slate-700">
              <div>
                <label className="text-[11px] text-slate-500 uppercase block mb-1">1. Normal Wash</label>
                <input
                  type="text"
                  value={servicePrices.normalWash}
                  onChange={(e) => setServicePrices({ ...servicePrices, normalWash: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-bold text-slate-800"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-500 uppercase block mb-1">2. Ironing / Pressing</label>
                <input
                  type="text"
                  value={servicePrices.ironing}
                  onChange={(e) => setServicePrices({ ...servicePrices, ironing: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-bold text-slate-800"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-500 uppercase block mb-1">3. Dry Cleaning</label>
                <input
                  type="text"
                  value={servicePrices.dryCleaning}
                  onChange={(e) => setServicePrices({ ...servicePrices, dryCleaning: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-bold text-slate-800"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-500 uppercase block mb-1">4. Premium Wash</label>
                <input
                  type="text"
                  value={servicePrices.premiumWash}
                  onChange={(e) => setServicePrices({ ...servicePrices, premiumWash: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-bold text-slate-800"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsPriceModalOpen(false)}
                  className="flex-1 py-3 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3 rounded-2xl bg-[#5D45F9] hover:bg-[#472ecc] text-white font-black shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Rates</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================
          2. MODAL: UPDATE AVAILABILITY & OPERATIONAL DAYS
      ====================================================== */}
      {isAvailabilityModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-[32px] p-6 sm:p-7 max-w-md w-full border border-slate-100 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl">
                  📅
                </div>
                <div>
                  <h3 className="text-base font-black text-[#152758]">Operational Days &amp; Hours</h3>
                  <p className="text-[10px] text-slate-400 font-bold">Broadcasted to students</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsAvailabilityModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveAvailability} className="space-y-3.5 text-xs font-bold text-slate-700">
              <div>
                <label className="text-[11px] text-slate-500 uppercase block mb-1">Operational Days Text</label>
                <input
                  type="text"
                  value={availability.days}
                  onChange={(e) => setAvailability({ ...availability, days: e.target.value })}
                  placeholder="e.g. Monday, Wednesday, Friday"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-bold text-slate-800"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-500 uppercase block mb-1">Working Hours</label>
                <input
                  type="text"
                  value={availability.timings}
                  onChange={(e) => setAvailability({ ...availability, timings: e.target.value })}
                  placeholder="e.g. 8:00 AM - 10:00 PM"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-bold text-slate-800"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-500 uppercase block mb-1">Pickup Coverage Locations</label>
                <input
                  type="text"
                  value={availability.locationCoverage}
                  onChange={(e) => setAvailability({ ...availability, locationCoverage: e.target.value })}
                  placeholder="e.g. MIT-AOE Gate, Dehu Phata, Girls Hostel"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-bold text-slate-800"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAvailabilityModalOpen(false)}
                  className="flex-1 py-3 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3 rounded-2xl bg-[#5D45F9] hover:bg-[#472ecc] text-white font-black shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Schedule</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TOAST FEEDBACK */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#140E36] text-white px-5 py-3 rounded-2xl shadow-xl text-xs font-bold flex items-center gap-2 border border-purple-800 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{saveToast}</span>
        </div>
      )}
    </div>
  );
}