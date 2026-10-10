"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
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
  ClipboardList,
  IndianRupee,
  Coffee,
  BadgePercent,
  Calendar,
  UserCheck,
  Award,
  Phone,
  MessageCircle,
  Home,
  BedDouble,
  Users,
  Sparkles,
  Gift,
  HelpCircle,
  Pencil,
  Hourglass,
} from "lucide-react";
export default function VendorDashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [vendorId, setVendorId] = useState("mess-01");

  const demoVendors = {
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

  useEffect(() => {
    setMounted(true);

    const params = new URLSearchParams(window.location.search);
    const urlVendor = params.get("vendor");

    if (urlVendor && demoVendors[urlVendor]) {
      setVendorId(urlVendor);
      return;
    }

    try {
      const stored = localStorage.getItem("currentUser");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.vendorId && demoVendors[parsed.vendorId]) {
          setVendorId(parsed.vendorId);
          return;
        }
      }
    } catch (e) {
      console.error(e);
    }

    setVendorId("mess-01");
  }, []);

  const vendor = demoVendors[vendorId] || demoVendors["mess-01"];

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

/* ============================================================
   HOUSEKEEPING / CLEANING DASHBOARD (SHITAL PATIL)
============================================================ */

function CleaningDashboard() {
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

  return (
    <div className="min-h-screen bg-[#F5F4FE] text-slate-900 font-sans flex antialiased">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#140E36] text-white shrink-0 sticky top-0 h-screen justify-between p-5 z-40 overflow-y-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-2xl bg-[#6C47FF] flex items-center justify-center text-white shadow-lg shadow-purple-900/50">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-tight leading-tight">Housekeeping</h2>
              <p className="text-[10px] text-purple-300 font-medium">Vendor Portal</p>
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
            <button className="w-full py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition shadow-sm">
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
            <button className="relative p-2.5 rounded-2xl bg-slate-50 text-slate-600 hover:text-slate-900 transition border border-slate-200/60">
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
                    Professional Housekeeping Staff
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-600 pt-1">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-slate-400" /> 9000010002
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

              <button className="w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-black flex items-center justify-center gap-1.5 transition border border-white/20 mt-4 backdrop-blur-sm">
                <span>View Offer</span>
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
                <h3 className="text-2xl font-black text-slate-950 mt-1">48</h3>
                <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>12%</span>
                  <span className="text-slate-400 font-medium">vs last month</span>
                </p>
              </div>
            </div>

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
                <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                  <span className="text-rose-500">📅</span> Upcoming Bookings
                </h3>
                <button className="text-xs font-bold text-[#6C47FF] hover:underline">
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
                          <button className="px-2.5 py-1 rounded-xl bg-purple-50 text-[#6C47FF] text-[10px] font-black hover:bg-[#6C47FF] hover:text-white transition">
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white rounded-3xl p-6 border border-purple-100/50 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-500">📅</span> Work Schedule
                </h3>
                <button className="text-[11px] font-bold text-[#6C47FF] hover:underline">
                  View Calendar →
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
                      <div className="w-full bg-[#6C47FF] rounded-t-lg" style={{ height: `${h}%` }} />
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
              <button className="w-full py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-bold flex items-center justify-center gap-1 transition">
                <span>Update Profile</span>
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

            <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-1 border-b border-slate-50">
                  <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <span className="text-amber-500">★</span> Recent Reviews
                  </h4>
                  <button className="text-[10px] font-bold text-[#6C47FF] hover:underline">
                    View All →
                  </button>
                </div>
                <div className="space-y-2">
                  {recentReviews.map((r, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <img src={r.avatar} alt={r.name} className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5" />
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
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: "#BKG1023",
      studentName: "Aditi Shinde",
      roomNo: "Room 203",
      checkIn: "14 Sep 2026",
      status: "Confirmed",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: "#BKG1022",
      studentName: "Pooja Deshmukh",
      roomNo: "Room 105",
      checkIn: "12 Sep 2026",
      status: "Pending",
      statusStyle: "bg-amber-50 text-amber-600 border border-amber-200",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: "#BKG1021",
      studentName: "Rutuja Kale",
      roomNo: "Room 207",
      checkIn: "10 Sep 2026",
      status: "Confirmed",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: "#BKG1020",
      studentName: "Vaishnavi More",
      roomNo: "Room 101",
      checkIn: "08 Sep 2026",
      status: "Checked Out",
      statusStyle: "bg-purple-50 text-[#6C47FF] border border-purple-200",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
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
              <h2 className="text-base font-black tracking-tight leading-tight">HostelHub</h2>
              <p className="text-[10px] text-pink-300 font-medium">Vendor Portal</p>
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
            <button className="w-full py-2 rounded-xl bg-[#E11D74] hover:bg-[#c21461] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition shadow-sm">
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
              className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2.5 rounded-2xl bg-slate-50 text-slate-600 hover:text-slate-900 transition border border-slate-200/60">
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
                <p className="text-xs font-black text-slate-900 leading-tight">Rohit Sharma</p>
                <p className="text-[10px] text-slate-400 font-semibold">Hostel Owner</p>
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
                  <span className="text-xs font-black tracking-tight leading-tight mt-1">MANAS</span>
                  <span className="text-[8px] text-pink-300 font-semibold tracking-wider">Girls Hostel</span>
                </div>

                <div className="space-y-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                  </span>

                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight flex items-center gap-2">
                    Manas
                    <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] font-bold">
                      ✓
                    </span>
                  </h1>

                  <p className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E11D74]" /> Near gajanan maharaj mandir
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-700 pt-0.5">
                    <span className="text-amber-500 font-black flex items-center gap-1">
                      ★ 4.3 <span className="text-slate-400 font-normal">(48 reviews)</span>
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
                      🛡️ Safe & Secure
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

              <button className="w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-black flex items-center justify-center gap-1.5 transition border border-white/20 mt-4 backdrop-blur-sm">
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
                <TrendingUp className="w-3.5 h-3.5" /> 18% <span className="text-slate-400 font-medium">vs last month</span>
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-purple-500">🛏️</span> Occupied Rooms
              </p>
              <h3 className="text-2xl font-black text-slate-950">26</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 12% <span className="text-slate-400 font-medium">vs last month</span>
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-emerald-500">🛏️</span> Available Rooms
              </p>
              <h3 className="text-2xl font-black text-slate-950">6</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 33% <span className="text-slate-400 font-medium">vs last month</span>
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-orange-500">₹</span> Monthly Revenue
              </p>
              <h3 className="text-2xl font-black text-slate-950">₹1,92,000</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 20% <span className="text-slate-400 font-medium">vs last month</span>
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-purple-100/50 shadow-sm space-y-1 col-span-2 md:col-span-1">
              <p className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                <span className="text-blue-500">🎖️</span> Average Rating
              </p>
              <h3 className="text-2xl font-black text-slate-950">4.3</h3>
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 5% <span className="text-slate-400 font-medium">vs last month</span>
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
                  <p className="text-[10px] text-slate-400 font-medium">Latest student bookings to your hostel</p>
                </div>
                <button className="text-xs font-bold text-[#E11D74] hover:underline">
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
                        <td className="py-3 font-semibold text-slate-400 text-[11px]">{b.id}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <img
                              src={b.avatar}
                              alt={b.studentName}
                              className="w-6 h-6 rounded-full object-cover shrink-0"
                            />
                            <span className="font-bold text-slate-900">{b.studentName}</span>
                          </div>
                        </td>
                        <td className="py-3 font-semibold text-slate-700">{b.roomNo}</td>
                        <td className="py-3 font-medium text-slate-500">{b.checkIn}</td>
                        <td className="py-3">
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${b.statusStyle}`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <button className="px-2.5 py-1 rounded-xl bg-pink-50 text-[#E11D74] text-[10px] font-black hover:bg-[#E11D74] hover:text-white transition">
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
                  <select className="text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-2 py-0.5">
                    <option>This Month</option>
                  </select>
                </div>

                <div className="flex items-center justify-center relative py-2">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#F1F0FB" strokeWidth="12" fill="none" />
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
                    <span className="text-xl font-black text-slate-900 leading-none">81%</span>
                    <span className="text-[9px] text-slate-400 font-bold mt-1">Occupied</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs font-semibold text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#6C47FF]" /> Occupied
                    </span>
                    <span className="font-bold text-slate-900">26</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Available
                    </span>
                    <span className="font-bold text-slate-900">6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Under Maintenance
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
                  <button className="text-[10px] font-bold text-[#E11D74] hover:underline">
                    View All →
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center pt-1">
                  <div className="p-2.5 rounded-2xl bg-pink-50/70 border border-pink-100">
                    <span className="text-base">🛏️</span>
                    <p className="text-[9px] text-slate-500 font-bold mt-1">Single</p>
                    <p className="text-sm font-black text-slate-900">12</p>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-purple-50/70 border border-purple-100">
                    <span className="text-base">👥</span>
                    <p className="text-[9px] text-slate-500 font-bold mt-1">Double</p>
                    <p className="text-sm font-black text-slate-900">10</p>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-base">👨‍👩‍👧</span>
                    <p className="text-[9px] text-slate-500 font-bold mt-1">Triple</p>
                    <p className="text-sm font-black text-slate-900">4</p>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-blue-50/70 border border-blue-100">
                    <span className="text-base">🏢</span>
                    <p className="text-[9px] text-slate-500 font-bold mt-1">Total</p>
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
                        <p className="text-xs font-black text-slate-900">Update Availability</p>
                        <p className="text-[9px] text-slate-400">Mark rooms available</p>
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
                        <p className="text-xs font-black text-slate-900">Manage Bookings</p>
                        <p className="text-[9px] text-slate-400">View & update bookings</p>
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
                        <p className="text-xs font-black text-slate-900">Student Details</p>
                        <p className="text-[9px] text-slate-400">Check student records</p>
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
                        <p className="text-xs font-black text-slate-900">Add Special Offer</p>
                        <p className="text-[9px] text-slate-400">Attract students</p>
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
                    <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-slate-50/60">
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
                  <p className="font-extrabold text-slate-900 text-xs">Safe Environment</p>
                  <p className="text-[10px] text-slate-500">24/7 Security</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-sm">
                  🍲
                </span>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs">Nutritious Food</p>
                  <p className="text-[10px] text-slate-500">Hygienic & Tasty</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-sm">
                  🏢
                </span>
                <div>
                  <p className="font-extrabold text-slate-900 text-xs">Modern Facilities</p>
                  <p className="text-[10px] text-slate-500">Wi-Fi, Laundry, Study</p>
                </div>
              </div>
            </div>

            <button className="px-6 py-2.5 rounded-2xl bg-[#E11D74] hover:bg-[#c21461] text-white text-xs font-black flex items-center gap-2 transition shadow-md shadow-pink-200 shrink-0 z-10">
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

function MessDashboard({ vendor, vendorId }) {
  const sidebarItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: `/vendor?vendor=${vendorId}`, active: true },
    { label: `My ${vendor.badge}`, icon: UtensilsCrossed, href: "/vendor/mess" },
    { label: "Orders", icon: ShoppingBag, href: "/vendor/orders", badge: "12" },
    { label: "Menu & Schedule", icon: CalendarDays, href: "/vendor/menu" },
    { label: "Subscription Plans", icon: CreditCard, href: "/vendor/plans" },
    { label: "Reviews", icon: Star, href: "/vendor/reviews" },
    { label: "Reports", icon: BarChart3, href: "/vendor/reports" },
    { label: "Profile", icon: User, href: "/vendor/profile" },
    { label: "Settings", icon: Settings, href: "/vendor/settings" },
  ];

  const recentOrders = [
    {
      id: "ord-1",
      name: "Priya Sharma",
      item: "Veg Thali",
      time: "Today, 12:30 PM",
      status: "Pending",
      statusColor: "bg-amber-100 text-amber-700",
      price: "₹100",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    },
    {
      id: "ord-2",
      name: "Rohan Patil",
      item: "Full Meal",
      time: "Today, 12:15 PM",
      status: "Confirmed",
      statusColor: "bg-emerald-100 text-emerald-700",
      price: "₹120",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80",
    },
    {
      id: "ord-3",
      name: "Sneha Kulkarni",
      item: "Special Thali",
      time: "Today, 11:50 AM",
      status: "Preparing",
      statusColor: "bg-blue-100 text-blue-700",
      price: "₹130",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    },
    {
      id: "ord-4",
      name: "Aditya More",
      item: "Veg Thali",
      time: "Today, 11:20 AM",
      status: "Completed",
      statusColor: "bg-purple-100 text-[#6C47FF]",
      price: "₹100",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    },
    {
      id: "ord-5",
      name: "Neha Deshmukh",
      item: "Full Meal",
      time: "Today, 11:05 AM",
      status: "Completed",
      statusColor: "bg-purple-100 text-[#6C47FF]",
      price: "₹120",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9FD] text-slate-900 font-sans flex" suppressHydrationWarning>
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
                <Link
                  key={idx}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
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
                </Link>
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
            <button className="relative p-2.5 rounded-2xl bg-slate-50 text-slate-600 border border-slate-200/60">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[9px] font-black text-white flex items-center justify-center">
                3
              </span>
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
                <p className="text-[10px] text-slate-400 font-semibold">{vendor.service}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </header>

        <main className="p-6 sm:p-8 space-y-6 max-w-7xl w-full mx-auto">
          <section className="relative rounded-[32px] bg-gradient-to-r from-[#FFD88C] via-[#FFC773] to-[#FFAE64] p-6 sm:p-8 overflow-hidden shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-black/10 text-slate-900 text-[10px] font-extrabold uppercase tracking-wider">
                Mess Vendor Dashboard
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Welcome back, {vendor.welcomeName}! 👋
              </h1>
              <p className="text-xs font-semibold text-slate-800 leading-relaxed max-w-md">
                Manage your mess, track orders and keep your students happy!
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

            <div className="relative z-10 w-64 h-44 sm:w-72 sm:h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&auto=format&fit=crop&q=80"
                alt="Mess food"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full lg:w-56 rounded-2xl bg-gradient-to-br from-[#5333DC] to-[#391DBB] text-white p-5 shadow-xl space-y-3 z-10 shrink-0 text-center">
              <div className="w-10 h-10 rounded-xl bg-white/20 mx-auto flex items-center justify-center mb-2">
                <ChefHat className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black">Keep It Fresh!</h3>
              <p className="text-[10px] text-purple-200">
                Healthy food builds brighter futures.
              </p>
              <Link
                href="/vendor/menu"
                className="w-full py-2 rounded-xl bg-white/10 text-white text-xs font-black flex items-center justify-center gap-1.5 border border-white/20"
              >
                View Menu <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MessStat title="Total Orders" value="128" icon="🛍️" change="12%" />
            <MessStat title="Completed Orders" value="118" icon="✓" change="10%" />
            <MessStat title="Pending Orders" value="10" icon="🕒" change="5%" />
            <MessStat title="Rating" value={vendor.rating} icon="★" change="0.1" />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-50">
                <div>
                  <h3 className="text-sm font-black">📋 Recent Orders</h3>
                  <p className="text-[10px] text-slate-400">Latest orders from students</p>
                </div>
                <Link href="/vendor/orders" className="text-xs font-bold text-[#5835E5]">
                  View All →
                </Link>
              </div>

              <div>
                {recentOrders.map((ord) => (
                  <div
                    key={ord.id}
                    className="py-4 flex items-center justify-between gap-3 border-b border-slate-50"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={ord.avatar}
                        alt={ord.name}
                        className="w-9 h-9 rounded-2xl object-cover"
                      />
                      <div>
                        <p className="text-xs font-black">{ord.name}</p>
                        <p className="text-[10px] text-slate-400">{ord.item}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-black px-2 py-1 rounded-full ${ord.statusColor}`}>
                        {ord.status}
                      </span>
                      <span className="text-xs font-black">{ord.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black">📅 Today's Menu</h3>
                  <Link href="/vendor/menu" className="text-xs font-bold text-[#5835E5]">
                    View Full Menu →
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <MenuBox
                    title="Breakfast"
                    time="8:00 AM - 9:30 AM"
                    items={["Poha", "Upma", "Tea / Coffee"]}
                  />
                  <MenuBox
                    title="Lunch"
                    time="12:00 PM - 2:00 PM"
                    items={["Dal Rice", "Bhindi Sabzi", "Chapati"]}
                  />
                  <MenuBox
                    title="Dinner"
                    time="7:00 PM - 8:30 PM"
                    items={["Veg Pulao", "Paneer Curry", "Sweet"]}
                  />
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-sm font-black flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#5835E5]" /> Orders Overview
                </h3>
                <div className="mt-5 h-28 flex items-end gap-3">
                  {[45, 70, 55, 85, 65, 90, 75].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#5835E5] rounded-t-lg"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[9px] text-slate-400">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-5">
              <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
                <h4 className="text-xs font-black mb-3">⚡ Quick Actions</h4>
                <Link href="/vendor/menu" className="block p-3 rounded-2xl bg-emerald-50 mb-2">
                  <p className="text-xs font-black">📝 Update Menu</p>
                  <p className="text-[9px] text-slate-400">Change today's menu</p>
                </Link>
                <Link href="/vendor/orders" className="block p-3 rounded-2xl bg-rose-50 mb-2">
                  <p className="text-xs font-black">📦 Manage Orders</p>
                  <p className="text-[9px] text-slate-400">View & update orders</p>
                </Link>
                <Link href="/vendor/offers" className="block p-3 rounded-2xl bg-orange-50">
                  <p className="text-xs font-black">🏷️ Add Special Offer</p>
                  <p className="text-[9px] text-slate-400">Attract more students</p>
                </Link>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-[#FFF5EE] to-[#FFE8D6] p-5 border border-orange-100">
                <span className="text-[9px] font-black px-2 py-1 rounded-full bg-rose-500 text-white">
                  SPECIAL OFFER
                </span>
                <h4 className="text-lg font-black mt-3">10% OFF</h4>
                <p className="text-xs font-bold text-slate-600">on all meals</p>
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
    </div>
  );
}

function MessStat({ title, value, icon, change }) {
  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-xs font-extrabold text-slate-500">{title}</p>
        <h3 className="text-2xl font-black text-slate-950 mt-1">{value}</h3>
        <p className="text-[11px] font-bold text-emerald-600 mt-1">
          ↑ {change} <span className="text-slate-400 font-medium">vs last week</span>
        </p>
      </div>
      <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#5835E5] flex items-center justify-center text-xl">
        {icon}
      </div>
    </div>
  );
}

function MenuBox({ title, time, items }) {
  return (
    <div className="rounded-2xl p-3 bg-purple-50 border border-purple-100">
      <p className="text-[10px] font-black">{title}</p>
      <p className="text-[8px] text-slate-400 font-bold mt-1">{time}</p>
      <ul className="text-[9px] font-semibold text-slate-700 mt-2 space-y-1">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   CAFE & LAUNDRY DASHBOARD MODULES
============================================================ */
/* ============================================================
   CAFE DASHBOARD (THE CAFE 24 - EXACT MATCH IMPLEMENTATION)
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
      {/* =====================================================
          1. DARK LEFT SIDEBAR
      ===================================================== */}
      <aside className="hidden lg:flex flex-col w-[235px] bg-[#0E1528] text-white shrink-0 sticky top-0 h-screen justify-between p-3.5 z-40 overflow-y-auto">
        <div className="space-y-4">
          {/* Logo */}
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

          {/* Menu items */}
          <nav className="space-y-1 pt-1">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.label;

              return (
                <button
                  key={item.label}
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

        {/* Doodle + Sandwich / Coffee artwork */}
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

          {/* Need help box */}
          <div className="rounded-2xl p-3 bg-white/5 border border-white/10 space-y-2 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-300">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Need Help?</span>
            </div>
            <p className="text-[10px] text-slate-400">Chat with us</p>
            <button className="w-full py-2 rounded-xl bg-gradient-to-r from-[#F6AE2D] to-[#FCA019] text-[#131E3A] text-xs font-black flex items-center justify-center gap-1.5 shadow-sm transition hover:brightness-105">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Live Chat</span>
            </button>
          </div>
        </div>
      </aside>

      {/* =====================================================
          2. MAIN CONTENT AREA
      ===================================================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 sm:px-8 h-18 flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-2.5 px-4 py-2 bg-[#F3F5FA] border border-slate-200/60 rounded-xl w-full max-w-md">
            <Search className="w-4 h-4 text-[#5D45F9] shrink-0" />
            <input
              type="text"
              placeholder="Search orders, menu, or customers..."
              className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2.5 rounded-xl bg-[#F3F5FA] text-slate-600 hover:text-slate-900 transition">
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

        {/* Dashboard Body */}
        {/* Dashboard Body */}
          <main className="p-5 sm:p-6 space-y-4 w-full">
          {/* ===================================================
              HERO BANNER + SPECIAL OFFER
          =================================================== */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_260px] gap-4 items-stretch">
            {/* HERO BANNER */}
            <div className="relative rounded-[26px] overflow-hidden bg-gradient-to-r from-[#FDE8D4] via-[#FCEFDE] to-[#FCE6D2] p-6 border border-orange-200/50 shadow-sm flex flex-col justify-between min-h-[190px]">
              {/* Coffee Latte & Food Spread image on right */}
              <div className="absolute right-0 top-0 bottom-0 w-[42%] overflow-hidden pointer-events-none hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80"
                  alt="Latte Coffee and Food"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FDE8D4] via-[#FDE8D4]/60 to-transparent" />
              </div>

              <div className="relative z-10 space-y-2.5 max-w-xl">
                {/* Open Tag */}
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#DCF9E8] text-[#0FAF53] text-[10px] font-black">
                  <CheckCircle2 className="w-3 h-3" />
                  Open
                </span>

                <div className="flex items-center gap-4 pt-1">
                  {/* Black Circular Badge THE CAFE 24 */}
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
                        Tapkir Nagar Dehu-phata, MIT AOE College Road, Alandi 412105
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
                      <span>Contact: nhavta tithe</span>
                      <span>|</span>
                      <span>Price Range: ₹200 - 400</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doodle in banner */}
              <div className="absolute right-[36%] top-5 hidden 2xl:block text-center rotate-[-8deg] text-[#3E2519] font-black text-sm select-none">
                Good Food <br /> Good Vibes ⌣
              </div>
            </div>

            {/* SPECIAL OFFER CARD */}
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

              <button className="w-full py-2.5 rounded-xl bg-[#F6AE2D] hover:bg-[#efa118] text-[#131E3A] text-xs font-black flex items-center justify-center gap-1.5 transition shadow-sm">
                <span>View Offer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ===================================================
              4 STAT CARDS
          =================================================== */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* 1. Total Orders */}
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

            {/* 2. Pending Orders (Hourglass watermark) */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-[#E8F3FF] text-[#2F80ED] flex items-center justify-center mb-2">
                <Clock3 className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-bold text-slate-500">Pending Orders</p>
              <h3 className="text-2xl font-black text-[#14234B] mt-0.5">10</h3>
              <p className="text-[10px] font-bold text-[#0FAF53] flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> 5%{" "}
                <span className="text-slate-400 font-medium">vs yesterday</span>
              </p>
              <Hourglass className="absolute right-3 top-3 w-12 h-12 text-blue-100/70 pointer-events-none" />
            </div>

            {/* 3. Completed Orders (Shopping Bag watermark) */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-[#DCF9E8] text-[#0FAF53] flex items-center justify-center mb-2">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-bold text-slate-500">Completed Orders</p>
              <h3 className="text-2xl font-black text-[#14234B] mt-0.5">24</h3>
              <p className="text-[10px] font-bold text-[#0FAF53] flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> 18%{" "}
                <span className="text-slate-400 font-medium">vs yesterday</span>
              </p>
              <ShoppingBag className="absolute right-3 top-3 w-12 h-12 text-emerald-100/70 pointer-events-none" />
            </div>

            {/* 4. Today's Revenue (Trending graph watermark) */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-[#F0EAFE] text-[#7E42F5] flex items-center justify-center font-black mb-2">
                ₹
              </div>
              <p className="text-[11px] font-bold text-slate-500">Today&apos;s Revenue</p>
              <h3 className="text-2xl font-black text-[#14234B] mt-0.5">₹8,450</h3>
              <p className="text-[10px] font-bold text-[#0FAF53] flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> 25%{" "}
                <span className="text-slate-400 font-medium">vs yesterday</span>
              </p>
              <TrendingUp className="absolute right-3 top-3 w-12 h-12 text-purple-100/70 pointer-events-none" />
            </div>
          </div>

          {/* ===================================================*/}
          {/* MIDDLE ROW: RECENT ORDERS + SALES OVERVIEW + RIGHT COLUMN*/}
            {/* ===================================================  */}
          
    
          {/* Promo Banner: Keep Your Cafe Running Smoothly! */}
           <div className="flex-1 rounded-2xl bg-gradient-to-r from-[#EEE7FE] to-[#F7EEFD] p-4 border border-purple-100 flex items-center justify-between relative overflow-hidden">
            {/* 1. RECENT ORDERS TABLE */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FFEAF3] text-[#EE3876] flex items-center justify-center">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-[#14234B]">Recent Orders</h3>
                    <p className="text-[9px] text-slate-400">Latest orders from students</p>
                  </div>
                </div>
                <button className="text-[10px] font-bold text-[#5D45F9] flex items-center gap-1 hover:underline">
                  View All <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              {/* Table */}
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
                      <tr key={ord.id} className="hover:bg-slate-50/50 transition">
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
                          <button className="px-2 py-0.5 rounded-lg border border-purple-200 text-[#5D45F9] text-[9px] font-bold hover:bg-[#5D45F9] hover:text-white transition">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between pt-2 text-[10px] text-slate-400">
                <span>Showing 5 of 36 orders</span>
                <div className="flex items-center gap-1">
                  <button className="w-5 h-5 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center">
                    ‹
                  </button>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
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
                  <button className="w-5 h-5 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center">
                    ›
                  </button>
                </div>
              </div>
            </div>

            {/* 2. SALES OVERVIEW + KEEP RUNNING PROMO */}
            {/* 2. SALES OVERVIEW + KEEP RUNNING PROMO */}
              <div className="flex flex-col justify-between space-y-4">
              {/* Sales Overview Card */}
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-1">
                  <h3 className="text-xs font-black text-[#14234B] flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-[#5D45F9]" /> Sales Overview
                  </h3>
                  <select className="text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2 py-0.5">
                    <option>This Week</option>
                  </select>
                </div>

                {/* Y-Axis numbers + Bars */}
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
                          {/* Purple Total Sales */}
                          <div
                            className="w-1.5 rounded-t-sm bg-[#784BF6]"
                            style={{ height: b.salesHeight }}
                          />
                          {/* Pink Orders */}
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

                {/* Chart Legend */}
                <div className="flex items-center justify-center gap-5 text-[9px] font-bold text-slate-600">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#784BF6]" /> Total Sales
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#EE3876]" /> Orders
                  </span>
                </div>
              </div>

              {/* Promo Banner: Keep Your Cafe Running Smoothly! */}
              {/* Promo Banner: Keep Your Cafe Running Smoothly! */}
              <div className="flex-1 rounded-2xl bg-gradient-to-r from-[#EEE7FE] to-[#F7EEFD] p-4 border border-purple-100 flex items-center justify-between relative overflow-hidden">
                <div className="space-y-1.5 max-w-[190px] z-10">
                  <h4 className="text-xs font-black text-[#3A1D8D] leading-snug rotate-[-2deg]">
                    Keep Your <br /> Cafe Running Smoothly!
                  </h4>
                  <p className="text-[9px] text-slate-500 font-medium">
                    Manage orders, update menu, track earnings and more.
                  </p>
                  <button className="px-3 py-1.5 rounded-xl bg-[#5D45F9] hover:bg-[#4b35e0] text-white text-[10px] font-black flex items-center gap-1 shadow-sm transition">
                    <span>Manage Menu</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="w-24 h-24 rounded-full overflow-hidden shadow-sm shrink-0 border-2 border-white">
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
              {/* Restaurant Timings Card */}
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

              {/* Quick Actions Card */}
              <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm space-y-2.5">
                <h4 className="text-xs font-black text-[#14234B] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Quick Actions
                </h4>

                <div className="space-y-1.5">
                  <button className="w-full flex items-center justify-between p-2 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#DCF9E8] text-[#0FAF53] flex items-center justify-center shrink-0">
                        <Utensils className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-800">Update Menu</p>
                        <p className="text-[8px] text-slate-400">Add / modify food items</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </button>

                  <button className="w-full flex items-center justify-between p-2 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#FFEAF3] text-[#EE3876] flex items-center justify-center shrink-0">
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-800">Manage Orders</p>
                        <p className="text-[8px] text-slate-400">View & update orders</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </button>

                  <button className="w-full flex items-center justify-between p-2 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#F0EAFE] text-[#784BF6] flex items-center justify-center shrink-0">
                        <Star className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-800">View Reviews</p>
                        <p className="text-[8px] text-slate-400">Check student feedback</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </button>

                  <button className="w-full flex items-center justify-between p-2 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#FFF2DE] text-[#F09923] flex items-center justify-center shrink-0">
                        <Tag className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-800">Add Special Offer</p>
                        <p className="text-[8px] text-slate-400">Attract more students</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Top Selling Items Card */}
              <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-[#14234B] flex items-center gap-1">
                    <span>👑</span> Top Selling Items
                  </h4>
                  <button className="text-[9px] font-bold text-[#5D45F9] hover:underline">
                    View All →
                  </button>
                </div>

                <div className="space-y-1.5 pt-1">
                  {topSelling.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-xs py-1 border-b border-slate-50 last:border-0">
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

          {/* ===================================================
              BOTTOM FULL WIDTH BANNER: FRESH INGREDIENTS
          =================================================== */}
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
                  <p className="font-extrabold text-[#14234B] text-[11px]">More Orders</p>
                  <p className="text-[9px] text-slate-500">Bigger Reach</p>
                </div>
              </div>

              <div className="w-px h-6 bg-slate-300" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#5D45F9] flex items-center justify-center text-sm">
                  🛡️
                </div>
                <div>
                  <p className="font-extrabold text-[#14234B] text-[11px]">Quality Food</p>
                  <p className="text-[9px] text-slate-500">Happy Customers</p>
                </div>
              </div>

              <div className="w-px h-6 bg-slate-300" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#5D45F9] flex items-center justify-center text-sm">
                  📈
                </div>
                <div>
                  <p className="font-extrabold text-[#14234B] text-[11px]">Grow Your Business</p>
                  <p className="text-[9px] text-slate-500">With Studentica</p>
                </div>
              </div>
            </div>

            <button className="px-5 py-2.5 rounded-xl bg-[#5D45F9] hover:bg-[#4b35e0] text-white text-xs font-black flex items-center gap-1.5 transition shadow-sm z-10 shrink-0">
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
   LAUNDRY DASHBOARD (COTTONSPA - EXACT SCREENSHOT LAYOUT)
============================================================ */

function LaundryDashboard() {
  const [activeTab, setActiveTab] = useState("All");

  const sidebarLinks = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Orders", icon: ShoppingBag, badge: "12" },
    { label: "Earnings", icon: CreditCard },
    { label: "Customers", icon: Users },
    { label: "Profile", icon: User },
    { label: "Settings", icon: Settings },
  ];

  const laundryOrders = [
    {
      id: "#LD0018",
      name: "Priya Sharma",
      items: "3 Clothes",
      amount: "₹180",
      status: "In Progress",
      statusClass: "bg-[#fff3e4] text-[#ea7f12] border border-[#fbdcb2]",
      time: "10:30 AM",
    },
    {
      id: "#LD0017",
      name: "Rohan Patil",
      items: "5 Clothes",
      amount: "₹300",
      status: "Pending",
      statusClass: "bg-[#ffeef4] text-[#ee3d7a] border border-[#fccfdf]",
      time: "09:45 AM",
    },
    {
      id: "#LD0016",
      name: "Sneha Kulkarni",
      items: "2 Bedsheets",
      amount: "₹200",
      status: "Completed",
      statusClass: "bg-[#e5faee] text-[#11a965] border border-[#c4f3d7]",
      time: "09:20 AM",
    },
    {
      id: "#LD0015",
      name: "Aditya More",
      items: "4 Clothes",
      amount: "₹240",
      status: "Completed",
      statusClass: "bg-[#e5faee] text-[#11a965] border border-[#c4f3d7]",
      time: "08:50 AM",
    },
    {
      id: "#LD0014",
      name: "Neha Deshmukh",
      items: "6 Clothes",
      amount: "₹360",
      status: "In Progress",
      statusClass: "bg-[#fff3e4] text-[#ea7f12] border border-[#fbdcb2]",
      time: "08:15 AM",
    },
  ];

  const filteredOrders =
    activeTab === "All"
      ? laundryOrders
      : laundryOrders.filter((ord) => ord.status === activeTab);

  const chartData = [
    { day: "Mon", completed: 8, pending: 9, cancelled: 2 },
    { day: "Tue", completed: 10, pending: 11, cancelled: 3 },
    { day: "Wed", completed: 13, pending: 11, cancelled: 2 },
    { day: "Thu", completed: 17, pending: 7, cancelled: 1 },
    { day: "Fri", completed: 12, pending: 9, cancelled: 3 },
    { day: "Sat", completed: 14, pending: 6, cancelled: 2 },
    { day: "Sun", completed: 15, pending: 7, cancelled: 4 },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FC] text-slate-900 font-sans flex antialiased">
      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside className="hidden lg:flex flex-col w-[240px] bg-[#121631] text-white shrink-0 sticky top-0 h-screen justify-between p-4 z-40 overflow-y-auto">
        <div className="space-y-6">
          {/* Logo */}
          <Link href="/vendor" className="flex items-center gap-3 px-2 pt-2">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#684bf5] to-[#996eff] flex items-center justify-center text-white shadow-lg shadow-purple-950/40">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight block leading-tight">
                Studentica.
              </span>
              <span className="text-[10px] text-purple-200/70 font-medium">
                Vendor Portal
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="space-y-1.5">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`flex w-full items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition ${
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

        {/* Sidebar Art */}
        <div className="space-y-3 pb-2 text-center">
          <p className="text-[15px] font-black text-[#D379FA] rotate-[-7deg] leading-tight select-none">
            Clean Clothes <br /> Happy Students
            <br />
            <span className="text-xl">⌣</span>
          </p>

          <div className="relative w-36 h-36 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=400&q=80"
              alt="Folded Laundry Basket"
              className="w-full h-full object-cover rounded-2xl shadow-lg border border-purple-900/30"
            />
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN BODY
      ===================================================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 sm:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#F6F7FD] border border-slate-200/70 rounded-2xl w-full max-w-md">
            <Search className="w-4 h-4 text-[#5D45F9] shrink-0" />
            <input
              type="text"
              placeholder="Search orders, students..."
              className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2.5 rounded-2xl bg-[#F6F7FD] text-slate-600 hover:text-slate-900 transition">
              <Bell className="w-4 h-4 text-[#162758]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FA3E57] text-[9px] font-black text-white flex items-center justify-center">
                3
              </span>
            </button>

            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80"
                alt="Rahul Sharma"
                className="w-10 h-10 rounded-2xl object-cover ring-2 ring-purple-100"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-black text-[#152857] leading-tight">
                  Rahul Sharma
                </p>
                <p className="text-[10px] text-slate-400 font-semibold">
                  Laundry Vendor
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-5 sm:p-7 space-y-5 max-w-[1450px] w-full mx-auto">
          {/* ===================================================
              TOP ROW: HERO BANNER + TODAY'S STATUS
          =================================================== */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_280px] gap-4 items-stretch">
            {/* HERO BANNER */}
            <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-r from-[#EDE8FF] via-[#F4F0FF] to-[#EAE3FF] p-6 sm:p-7 border border-purple-100/60 shadow-sm flex flex-col justify-between min-h-[200px]">
              {/* Background Laundry Photo overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-[48%] overflow-hidden pointer-events-none hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80"
                  alt="Washing machines and laundry basket"
                  className="w-full h-full object-cover object-center opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#EDE8FF] via-[#EDE8FF]/70 to-transparent" />
              </div>

              <div className="relative z-10 space-y-3 max-w-xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E3DCFF] text-[#5D45F9] text-[10px] font-black">
                  <WashingMachine className="w-3.5 h-3.5" />
                  Laundry Service
                </span>

                <div className="flex items-center gap-3 pt-1">
                  {/* Washing Machine Icon Square */}
                  <div className="w-14 h-14 rounded-2xl bg-white border border-purple-100 shadow-md flex items-center justify-center text-[#5D45F9] shrink-0">
                    <WashingMachine className="w-8 h-8" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-3xl font-black text-[#152758] tracking-tight">
                        CottonSpa
                      </h1>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#DCF9E8] text-[#11A866] text-[10px] font-bold">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold mt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        Dehu Phata
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#F29F05] font-black">
                        ★ 4.2{" "}
                        <span className="text-slate-400 font-medium">
                          (125 reviews)
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm font-bold text-[#182C5D]">
                    Fresh clothes, happy vibes!
                  </p>
                  <div className="w-14 h-1 bg-[#182C5D] rounded-full mt-0.5" />
                </div>
              </div>

              {/* Handwritten Note in Banner */}
              <div className="absolute right-[36%] top-6 hidden 2xl:block text-center rotate-[-10deg] text-[#6942EC] font-black text-xs select-none">
                Clean <br /> Fresh <br /> On Time ⌣
              </div>
            </div>

            {/* TODAY'S STATUS */}
            <div className="rounded-[28px] overflow-hidden bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
              <div className="bg-gradient-to-r from-[#7B58FA] to-[#9963F9] p-4 text-white flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <span className="text-xs font-black tracking-wide">
                  Today's Status
                </span>
              </div>

              <div className="p-5 space-y-1">
                <p className="text-xs font-bold text-slate-400">Total Orders</p>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-black text-[#152758]">18</span>
                  <span className="text-xs font-black text-[#11A866] flex items-center gap-0.5">
                    <TrendingUp className="w-3.5 h-3.5" /> 12%
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium text-right">
                  vs yesterday
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================
              4 STAT CARDS
          =================================================== */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#FFEAF3] text-[#EE3876] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-slate-500">Total Orders</p>
              <h3 className="text-2xl font-black text-[#152857]">18</h3>
              <p className="text-[11px] font-bold text-[#11A866] flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 12%{" "}
                <span className="text-slate-400 font-medium">vs yesterday</span>
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#DCF9E8] text-[#11A866] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-slate-500">Completed</p>
              <h3 className="text-2xl font-black text-[#152857]">14</h3>
              <p className="text-[11px] font-bold text-[#11A866] flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 8%{" "}
                <span className="text-slate-400 font-medium">vs yesterday</span>
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF2DE] text-[#EA7F12] flex items-center justify-center">
                <Clock3 className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-slate-500">In Progress</p>
              <h3 className="text-2xl font-black text-[#152857]">3</h3>
              <p className="text-[11px] font-bold text-[#EA7F12] flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 1%{" "}
                <span className="text-slate-400 font-medium">vs yesterday</span>
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#EFE7FE] text-[#784BF6] flex items-center justify-center">
                <XCircle className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-slate-500">Cancelled</p>
              <h3 className="text-2xl font-black text-[#152857]">1</h3>
              <p className="text-[11px] font-bold text-[#EE3876] flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" /> 2%{" "}
                <span className="text-slate-400 font-medium">vs yesterday</span>
              </p>
            </div>
          </div>

          {/* ===================================================
              MAIN MIDDLE GRID: ORDERS + OVERVIEW + RIGHT ACTIONS
          =================================================== */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)_280px] gap-4 items-start">
            {/* 1. RECENT ORDERS TABLE */}
            <div className="bg-white rounded-[26px] p-5 border border-slate-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-1">
                <h3 className="text-base font-black text-[#152758]">
                  Recent Orders
                </h3>
                <button className="text-xs font-bold text-[#5D45F9] flex items-center gap-1 hover:underline">
                  View All <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-1.5 text-xs font-bold">
                {["All (18)", "Pending (3)", "In Progress (3)", "Completed (14)", "Cancelled (1)"].map(
                  (tab) => {
                    const rawTab = tab.split(" ")[0];
                    const active =
                      (rawTab === "All" && activeTab === "All") ||
                      activeTab === rawTab;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(rawTab)}
                        className={`px-3 py-1.5 rounded-full transition text-[11px] font-extrabold ${
                          active
                            ? "bg-[#5D45F9] text-white shadow-sm"
                            : "bg-[#F3F4FB] text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {tab}
                      </button>
                    );
                  }
                )}
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[500px]">
                  <thead>
                    <tr className="text-slate-400 font-bold border-b border-slate-100 text-[10px] uppercase pb-2">
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
                    {filteredOrders.map((ord) => (
                      <tr key={ord.id} className="hover:bg-slate-50/50 transition">
                        <td className="py-3 font-black text-[#162758]">
                          {ord.id}
                        </td>
                        <td className="py-3 font-extrabold text-slate-800">
                          {ord.name}
                        </td>
                        <td className="py-3 text-slate-500 font-medium">
                          {ord.items}
                        </td>
                        <td className="py-3 font-black text-[#162758]">
                          {ord.amount}
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[9px] font-black ${ord.statusClass}`}
                          >
                            {ord.status}
                          </span>
                        </td>
                        <td className="py-3 text-slate-400 font-medium text-[11px]">
                          {ord.time}
                        </td>
                        <td className="py-3 text-right">
                          <button className="px-2.5 py-1 rounded-full border border-purple-200 text-[#5D45F9] text-[10px] font-black hover:bg-[#5D45F9] hover:text-white transition">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                <span>Showing 5 of 18 orders</span>
                <div className="flex items-center gap-1">
                  <button className="w-6 h-6 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center text-xs">
                    ‹
                  </button>
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                        n === 1
                          ? "bg-[#5D45F9] text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <button className="w-6 h-6 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center text-xs">
                    ›
                  </button>
                </div>
              </div>
            </div>

            {/* 2. ORDERS OVERVIEW + KEEP RUNNING PROMO */}
            <div className="space-y-4">
              {/* Chart Card */}
              <div className="bg-white rounded-[26px] p-5 border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-1">
                  <h3 className="text-sm font-black text-[#152758] flex items-center gap-1.5">
                    <Clock3 className="w-4 h-4 text-[#5D45F9]" /> Orders Overview
                  </h3>
                  <select className="text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1">
                    <option>This Week</option>
                  </select>
                </div>

                {/* Bar Chart Representation */}
                <div className="h-44 flex items-end justify-between gap-2 pt-4 px-1 border-b border-slate-100">
                  {chartData.map((d) => (
                    <div
                      key={d.day}
                      className="flex-1 flex flex-col items-center justify-end h-full gap-1.5"
                    >
                      <div className="flex items-end gap-1 h-32 w-full justify-center">
                        {/* Completed (Green) */}
                        <div
                          className="w-1.5 rounded-t-sm bg-[#16B774]"
                          style={{ height: `${(d.completed / 20) * 100}%` }}
                        />
                        {/* Pending (Amber) */}
                        <div
                          className="w-1.5 rounded-t-sm bg-[#F09923]"
                          style={{ height: `${(d.pending / 20) * 100}%` }}
                        />
                        {/* Cancelled (Pink) */}
                        <div
                          className="w-1.5 rounded-t-sm bg-[#EE3876]"
                          style={{ height: `${(d.cancelled / 20) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">
                        {d.day}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-slate-600">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#16B774]" /> Completed
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#F09923]" /> Pending
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#EE3876]" /> Cancelled
                  </span>
                </div>
              </div>

              {/* Promo Banner */}
              <div className="rounded-[26px] bg-gradient-to-r from-[#EEE9FE] to-[#F5EDFD] p-5 border border-purple-100 space-y-3 relative overflow-hidden">
                <h4 className="text-sm font-black text-[#152758] leading-tight max-w-[180px]">
                  Keep Your Laundry Business Running Smoothly!
                </h4>

                <div className="flex items-center gap-3 text-[10px] font-bold text-slate-600 pt-1">
                  <span className="flex items-center gap-1">
                    ⏱️ Fast Service
                  </span>
                  <span className="flex items-center gap-1">
                    😊 Happy Students
                  </span>
                  <span className="flex items-center gap-1">
                    📦 More Orders
                  </span>
                </div>

                <button className="px-4 py-2 rounded-xl bg-[#5D45F9] hover:bg-[#4b35e0] text-white text-[11px] font-black flex items-center gap-1 shadow-sm transition">
                  Update Services <ArrowRight className="w-3 h-3" />
                </button>

                <div className="absolute right-3 bottom-3 w-20 h-20 opacity-80 pointer-events-none">
                  <img
                    src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=200&q=80"
                    alt="Laundry"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* 3. RIGHT COLUMN WIDGETS */}
            <div className="space-y-4">
              {/* Quick Actions */}
              <div className="bg-white rounded-[26px] p-5 border border-slate-100 shadow-sm space-y-3">
                <h4 className="text-xs font-black text-[#152758] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#5D45F9]" /> Quick Actions
                </h4>

                <div className="space-y-2">
                  <button className="w-full flex items-center gap-3 p-2.5 rounded-2xl border border-slate-100 hover:bg-slate-50 transition text-left">
                    <div className="w-9 h-9 rounded-xl bg-[#FFF2DE] text-[#F09923] flex items-center justify-center shrink-0">
                      <Clock3 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#152857]">Update Timings</p>
                      <p className="text-[10px] text-slate-400">Change your working hours</p>
                    </div>
                  </button>

                  <button className="w-full flex items-center gap-3 p-2.5 rounded-2xl border border-slate-100 hover:bg-slate-50 transition text-left">
                    <div className="w-9 h-9 rounded-xl bg-[#FFEAF3] text-[#EE3876] flex items-center justify-center shrink-0">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#152857]">Manage Orders</p>
                      <p className="text-[10px] text-slate-400">View & update order status</p>
                    </div>
                  </button>

                  <button className="w-full flex items-center gap-3 p-2.5 rounded-2xl border border-slate-100 hover:bg-slate-50 transition text-left">
                    <div className="w-9 h-9 rounded-xl bg-[#FDEAF7] text-[#D836A3] flex items-center justify-center shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#152857]">Add Special Offer</p>
                      <p className="text-[10px] text-slate-400">Attract more students</p>
                    </div>
                  </button>

                  <button className="w-full flex items-center gap-3 p-2.5 rounded-2xl border border-slate-100 hover:bg-slate-50 transition text-left">
                    <div className="w-9 h-9 rounded-xl bg-[#FFF2DE] text-[#F09923] flex items-center justify-center shrink-0">
                      <Star className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#152857]">View Reviews</p>
                      <p className="text-[10px] text-slate-400">See customer feedback</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Laundry Timings */}
              <div className="bg-white rounded-[26px] p-5 border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#5D45F9]">
                  <Clock3 className="w-4 h-4" /> Laundry Timings
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-black text-[#152857]">
                    8:00 AM - 10:00 PM
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#DCF9E8] text-[#11A866] text-[10px] font-black flex items-center gap-1">
                    ✓ Open
                  </span>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-[#5D45F9] text-white text-xs font-black hover:bg-[#4b35e0] transition">
                  Update Timings
                </button>
              </div>

              {/* Pricing */}
              <div className="bg-white rounded-[26px] p-5 border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#EA7F12]">
                  <Tag className="w-4 h-4" /> Pricing
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#152857]">
                    ₹60 <span className="text-xs font-normal text-slate-500">per kg</span>
                  </h3>
                  <p className="text-[10px] text-slate-400 font-medium">(Starting from)</p>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-[#5D45F9] text-white text-xs font-black hover:bg-[#4b35e0] transition">
                  Update Price
                </button>
              </div>
            </div>
          </div>

          {/* ===================================================
              BOTTOM SECTION: 4 QUICK STATS + GO GREEN BANNER
          =================================================== */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_280px] gap-4 items-stretch">
            {/* Quick Stats Grid */}
            <div className="bg-white rounded-[26px] p-5 border border-slate-100 shadow-sm space-y-4">
              <h4 className="text-xs font-black text-[#152857] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#5D45F9]" /> Quick Stats
              </h4>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#EFE8FF] text-[#5D45F9] flex items-center justify-center font-black">
                    ₹
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold">Total Revenue</p>
                    <p className="text-sm font-black text-[#152857]">₹8,450</p>
                    <p className="text-[9px] text-[#11A866] font-bold">↑ 15% this week</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#DCF9E8] text-[#11A866] flex items-center justify-center">
                    🛍️
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold">Average Order Value</p>
                    <p className="text-sm font-black text-[#152857]">₹235</p>
                    <p className="text-[9px] text-[#11A866] font-bold">↑ 10% this week</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#FFF2DE] text-[#F09923] flex items-center justify-center">
                    👥
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold">Active Students</p>
                    <p className="text-sm font-black text-[#152857]">142</p>
                    <p className="text-[9px] text-[#11A866] font-bold">↑ 8% this week</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#EFE7FE] text-[#784BF6] flex items-center justify-center">
                    ⏱️
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold">Repeat Customers</p>
                    <p className="text-sm font-black text-[#152857]">68</p>
                    <p className="text-[9px] text-[#11A866] font-bold">↑ 12% this week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Go Green Save Water */}
            <div className="rounded-[26px] bg-gradient-to-r from-[#DCF9E8] to-[#E8FCEF] p-5 border border-emerald-100 flex items-center justify-between">
              <div className="space-y-1 max-w-[150px]">
                <div className="w-7 h-7 rounded-xl bg-white text-[#11A866] flex items-center justify-center">
                  <Leaf className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black text-[#0B7D4B] leading-tight pt-1">
                  Go Green <br /> Save Water
                </h4>
                <p className="text-[9px] text-[#478768] font-semibold leading-tight pt-1">
                  Eco-friendly laundry for a better tomorrow
                </p>
              </div>

              <div className="text-4xl text-right select-none opacity-80">
                🌿
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

