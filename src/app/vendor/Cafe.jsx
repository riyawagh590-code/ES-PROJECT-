"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  ShoppingBag,
  CalendarDays,
  Star,
  BarChart3,
  User,
  Settings,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  MapPin,
  Clock3,
  Tag,
  Zap,
  CheckCircle2,
  Utensils,
  Coffee,
  Gift,
  FileText,
  X,
} from "lucide-react";

export default function Cafe() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeOrderTab, setActiveOrderTab] = useState("All");

  const cafe = {
    id: "cafe-03",
    name: "THE CAFE 24",
    service: "Cafe Owner",
    owner: "Rahul Sharma",
    location:
      "Tapkir Nagar Dehu-phata, MIT AOE College Road, Alandi 412105",
    rating: "4.5",
    reviews: "120 reviews",
    contact: "nhavta tithe",
    priceRange: "₹200 - 400",
  };

  const sidebarItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Orders",
      icon: ShoppingBag,
      badge: "12",
    },
    {
      label: "Menu & Food Items",
      icon: Utensils,
    },
    {
      label: "Offers & Discounts",
      icon: Tag,
    },
    {
      label: "Reviews",
      icon: Star,
    },
    {
      label: "Reports",
      icon: BarChart3,
    },
    {
      label: "Settings",
      icon: Settings,
    },
  ];

  const orders = [
    {
      id: "#ORD1045",
      student: "Ananya S.",
      items: "Paneer Butter Masala + Naan + Cold Coffee",
      amount: "₹280",
      status: "Preparing",
      time: "11:20 AM",
    },
    {
      id: "#ORD1044",
      student: "Rohan P.",
      items: "Veg Thali",
      amount: "₹180",
      status: "Pending",
      time: "11:05 AM",
    },
    {
      id: "#ORD1043",
      student: "Sneha K.",
      items: "Pasta + Garlic Bread",
      amount: "₹240",
      status: "Completed",
      time: "10:48 AM",
    },
    {
      id: "#ORD1042",
      student: "Aditya M.",
      items: "Masala Dosa + Coffee",
      amount: "₹140",
      status: "Completed",
      time: "10:20 AM",
    },
    {
      id: "#ORD1041",
      student: "Neha D.",
      items: "Burger + Fries",
      amount: "₹110",
      status: "Preparing",
      time: "09:55 AM",
    },
  ];

  const filteredOrders =
    activeOrderTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeOrderTab);

  const statusStyle = (status) => {
    if (status === "Completed") {
      return "bg-emerald-50 text-emerald-600 border border-emerald-100";
    }

    if (status === "Pending") {
      return "bg-pink-50 text-pink-500 border border-pink-100";
    }

    return "bg-orange-50 text-orange-600 border border-orange-100";
  };

  const topSellingItems = [
    {
      name: "Paneer Butter Masala",
      orders: "42 orders",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Veg Thali",
      orders: "38 orders",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Masala Dosa",
      orders: "31 orders",
      image:
        "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Cold Coffee",
      orders: "26 orders",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Burger",
      orders: "19 orders",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9fd] text-[#13285c]">
      {/* =========================================================
          SIDEBAR
      ========================================================= */}

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[244px] flex-col bg-[#10172f] text-white lg:flex">
        {/* LOGO */}

        <div className="flex h-[90px] items-center gap-4 px-7">
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-[#6f48ef] to-[#4b2ac5] shadow-lg shadow-purple-950/40">
            <GraduationCap size={29} />
          </div>

          <div>
            <div className="text-[20px] font-extrabold tracking-tight">
              Studentica.
            </div>

            <div className="mt-1 text-[13px] text-white/70">
              Vendor Portal
            </div>
          </div>
        </div>

        {/* NAVIGATION */}

        <nav className="mt-3 flex-1 px-3">
          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const active = activeMenu === item.label;

              return (
                <button
                  key={item.label}
                  onClick={() => setActiveMenu(item.label)}
                  className={`flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-[13px] transition ${
                    active
                      ? "bg-gradient-to-r from-[#6840e6] to-[#5632d5] font-bold shadow-lg shadow-purple-950/30"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={20} strokeWidth={1.9} />

                  <span className="flex-1 whitespace-nowrap">
                    {item.label}
                  </span>

                  {item.badge && (
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ff4558] px-1.5 text-[10px] font-extrabold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* SIDEBAR CAFE ART */}

        <div className="relative h-[300px] overflow-hidden px-5">
          <div className="absolute left-[34px] top-[24px] rotate-[-6deg] text-[20px] font-semibold italic leading-tight text-[#ffc13b]">
            Good Food
            <br />
            Happy Students
            <br />
            <span className="ml-12 text-[27px]">⌣</span>
          </div>

          <div className="absolute bottom-[40px] left-[30px] h-[145px] w-[175px] overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=85"
              alt="Cafe coffee"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-[28px] right-[20px] text-[20px] text-[#ffc13b]">
            ✦ ✧
          </div>
        </div>
      </aside>

      {/* =========================================================
          MAIN
      ========================================================= */}

      <main className="min-h-screen lg:ml-[244px]">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="sticky top-0 z-30 flex h-[76px] items-center gap-5 border-b border-[#e9e9f1] bg-white/95 px-5 backdrop-blur-md lg:px-7">
          {/* SEARCH */}

          <div className="relative max-w-[470px] flex-1">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4b35cf]"
            />

            <input
              type="text"
              placeholder="Search orders, menu, or customers..."
              className="h-[43px] w-full rounded-2xl border border-[#ebeaf5] bg-[#f7f5ff] pl-11 pr-4 text-[12px] text-[#1c2b5d] outline-none placeholder:text-[#8c98bb] focus:border-[#866ef0] focus:ring-2 focus:ring-[#866ef0]/10"
            />
          </div>

          <div className="ml-auto flex items-center gap-4">
            {/* NOTIFICATION */}

            <div className="relative">
              <button
                onClick={() =>
                  setShowNotifications(!showNotifications)
                }
                className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-[#f4f1ff]"
              >
                <Bell size={21} className="text-[#17255d]" />

                <span className="absolute right-[2px] top-[1px] flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#ec3151] px-1 text-[9px] font-extrabold text-white">
                  3
                </span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-12 w-[270px] rounded-2xl border border-[#e9e9f1] bg-white p-4 shadow-xl">
                  <div className="text-[13px] font-extrabold text-[#17255d]">
                    Notifications
                  </div>

                  <div className="mt-3 rounded-xl bg-[#f5f1ff] p-3 text-[10px] text-[#667398]">
                    You have 3 new cafe order updates.
                  </div>
                </div>
              )}
            </div>

            <div className="hidden h-9 w-px bg-[#e6e7ee] sm:block" />

            {/* OWNER */}

            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Rahul Sharma"
                className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
              />

              <div className="hidden sm:block">
                <div className="text-[13px] font-extrabold text-[#182b68]">
                  Rahul Sharma
                </div>

                <div className="text-[10px] text-[#69769a]">
                  Cafe Owner
                </div>
              </div>

              <ChevronDown
                size={17}
                className="hidden text-[#182b68] sm:block"
              />
            </div>
          </div>
        </header>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="p-4 sm:p-5 lg:p-6">
          {/* ===================================================
              HERO + OFFER
          =================================================== */}

          <section className="grid grid-cols-[minmax(0,1fr)_255px] gap-3">
            {/* HERO */}

            <div className="relative min-h-[205px] overflow-hidden rounded-2xl border border-[#f1dfc9] bg-gradient-to-r from-[#ffe2a8] via-[#ffedce] to-[#ffe8cb]">
              {/* IMAGE */}

              <img
                src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1000&q=85"
                alt="Cafe food and coffee"
                className="absolute right-0 top-0 h-full w-[58%] object-cover"
              />

              {/* BLEND */}

              <div className="absolute inset-0 bg-gradient-to-r from-[#ffe3b1] via-[#ffe5bc]/95 to-transparent" />

              <div className="relative z-10 flex min-h-[205px] items-center px-6">
                <div className="max-w-[600px]">
                  {/* OPEN */}

                  <span className="inline-flex items-center gap-1 rounded-full bg-[#d9f8e6] px-3 py-1 text-[9px] font-bold text-[#168c58]">
                    <CheckCircle2 size={11} />
                    Open
                  </span>

                  {/* TITLE */}

                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex h-[112px] w-[112px] shrink-0 items-center justify-center overflow-hidden rounded-full border-[5px] border-[#2b1d2c] bg-[#251c2c] shadow-lg">
                      <div className="text-center text-white">
                        <div className="text-[25px]">☕</div>

                        <div className="text-[14px] font-extrabold">
                          THE CAFE
                        </div>

                        <div className="text-[13px] font-extrabold text-[#ffc34b]">
                          24
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h1 className="text-[30px] font-extrabold tracking-tight text-[#102658]">
                          THE CAFE 24
                        </h1>

                        <span className="text-[17px]">✎</span>
                      </div>

                      <div className="mt-2 flex items-start gap-1 text-[10px] font-medium text-[#43547d]">
                        <MapPin size={13} />

                        <span className="max-w-[330px]">
                          {cafe.location}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-4">
                        <span className="flex items-center gap-1 text-[11px] font-extrabold text-[#273968]">
                          <Star
                            size={17}
                            fill="currentColor"
                            className="text-[#f39a0b]"
                          />
                          {cafe.rating}
                          <span className="font-medium">
                            ({cafe.reviews})
                          </span>
                        </span>

                        <span className="flex items-center gap-1 rounded-full bg-[#d8f8e5] px-3 py-1 text-[9px] font-bold text-[#168e5a]">
                          <span className="text-[12px]">✓</span>
                          Veg
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-4 text-[10px] text-[#344875]">
                        <span className="flex items-center gap-1">
                          <Clock3 size={13} />
                          Contact: {cafe.contact}
                        </span>

                        <span className="h-4 w-px bg-[#b5a68d]" />

                        <span className="flex items-center gap-1">
                          <Tag size={13} />
                          Price Range: {cafe.priceRange}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HANDWRITTEN TEXT */}

                <div className="absolute right-[22%] top-[32px] hidden -rotate-6 text-[23px] font-semibold italic leading-tight text-[#6b241b] lg:block">
                  Good Food
                  <br />
                  Good Vibes!
                  <span className="ml-1">✓</span>
                </div>
              </div>
            </div>

            {/* SPECIAL OFFER */}

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#6941dc] to-[#4824bb] p-5 text-white shadow-sm">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffb92e] text-[#5630c8]">
                      <Tag size={20} />
                    </div>

                    <span className="text-[15px] font-extrabold">
                      Special Offer
                    </span>
                  </div>

                  <div className="mt-5 text-[24px] font-extrabold">
                    10% OFF
                  </div>

                  <div className="mt-1 text-[12px] text-white/85">
                    on all items
                  </div>
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ffbd32] py-2.5 text-[10px] font-extrabold text-[#36216d]">
                  View Offer
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </section>

          {/* ===================================================
              STATS + TIMINGS
          =================================================== */}

          <section className="mt-4 grid grid-cols-[repeat(4,minmax(0,1fr))_275px] gap-3">
            {/* TOTAL */}

            <div className="relative overflow-hidden rounded-2xl border border-[#f4dbe5] bg-gradient-to-br from-[#fff5f8] to-[#fff0f5] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-pink-500">
                <FileText size={19} />
              </div>

              <div className="mt-3 text-[11px] font-bold text-[#253568]">
                Total Orders
              </div>

              <div className="mt-1 text-[27px] font-extrabold text-[#15265c]">
                36
              </div>

              <div className="mt-1 flex items-center gap-2 text-[9px]">
                <TrendingUp
                  size={12}
                  className="text-[#12a668]"
                />

                <span className="font-bold text-[#12a668]">
                  12%
                </span>

                <span className="text-[#7c89aa]">
                  vs yesterday
                </span>
              </div>
            </div>

            {/* PENDING */}

            <div className="relative overflow-hidden rounded-2xl border border-[#d9e8fa] bg-gradient-to-br from-[#f3f9ff] to-[#edf7ff] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Clock3 size={19} />
              </div>

              <div className="mt-3 text-[11px] font-bold text-[#253568]">
                Pending Orders
              </div>

              <div className="mt-1 text-[27px] font-extrabold text-[#15265c]">
                10
              </div>

              <div className="mt-1 flex items-center gap-2 text-[9px]">
                <TrendingUp
                  size={12}
                  className="text-[#12a668]"
                />

                <span className="font-bold text-[#12a668]">
                  5%
                </span>

                <span className="text-[#7c89aa]">
                  vs yesterday
                </span>
              </div>
            </div>

            {/* COMPLETED */}

            <div className="relative overflow-hidden rounded-2xl border border-[#d8f0df] bg-gradient-to-br from-[#f1fff5] to-[#e9fff0] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <CheckCircle2 size={19} />
              </div>

              <div className="mt-3 text-[11px] font-bold text-[#253568]">
                Completed Orders
              </div>

              <div className="mt-1 text-[27px] font-extrabold text-[#15265c]">
                24
              </div>

              <div className="mt-1 flex items-center gap-2 text-[9px]">
                <TrendingUp
                  size={12}
                  className="text-[#12a668]"
                />

                <span className="font-bold text-[#12a668]">
                  18%
                </span>

                <span className="text-[#7c89aa]">
                  vs yesterday
                </span>
              </div>
            </div>

            {/* REVENUE */}

            <div className="relative overflow-hidden rounded-2xl border border-[#ddd5fb] bg-gradient-to-br from-[#f8f4ff] to-[#f1ebff] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                ₹
              </div>

              <div className="mt-3 text-[11px] font-bold text-[#253568]">
                Today&apos;s Revenue
              </div>

              <div className="mt-1 text-[27px] font-extrabold text-[#15265c]">
                ₹8,450
              </div>

              <div className="mt-1 flex items-center gap-2 text-[9px]">
                <TrendingUp
                  size={12}
                  className="text-[#12a668]"
                />

                <span className="font-bold text-[#12a668]">
                  25%
                </span>

                <span className="text-[#7c89aa]">
                  vs yesterday
                </span>
              </div>
            </div>

            {/* TIMINGS */}

            <div className="rounded-2xl border border-[#e2e5f0] bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f5f1ff]">
                  <Clock3
                    size={15}
                    className="text-[#6541db]"
                  />
                </div>

                <h3 className="text-[11px] font-extrabold text-[#182b68]">
                  Restaurant Timings
                </h3>
              </div>

              <div className="mt-5 flex items-center justify-between gap-2">
                <span className="text-[15px] font-extrabold text-[#192e68]">
                  10:00 AM - 9:00 PM
                </span>

                <span className="flex items-center gap-1 rounded-full bg-[#dcf9e8] px-2.5 py-1 text-[8px] font-bold text-[#148d58]">
                  <CheckCircle2 size={11} />
                  Open
                </span>
              </div>
            </div>
          </section>

          {/* ===================================================
              MAIN CONTENT GRID
          =================================================== */}

          <section className="mt-4 grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.65fr)_275px] gap-3">
            {/* =================================================
                RECENT ORDERS
            ================================================= */}

            <div className="min-w-0 rounded-2xl border border-[#e5e7f0] bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="flex items-center gap-2 text-[14px] font-extrabold text-[#16255d]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-100">
                      <FileText
                        size={16}
                        className="text-pink-500"
                      />
                    </span>
                    Recent Orders
                  </h2>

                  <p className="mt-1 text-[9px] text-[#8792ad]">
                    Latest orders from students
                  </p>
                </div>

                <button className="flex items-center gap-1 text-[9px] font-bold text-[#4c35d0]">
                  View All
                  <ChevronRight size={12} />
                </button>
              </div>

              {/* TABLE */}

              <div className="mt-4 overflow-hidden">
                <div className="grid grid-cols-[72px_1fr_1.3fr_55px_75px_60px_45px] gap-2 border-b border-[#eef0f5] px-1 pb-2 text-[8px] font-semibold text-[#7482a4]">
                  <span>Order ID</span>
                  <span>Student Name</span>
                  <span>Items</span>
                  <span>Amount</span>
                  <span>Status</span>
                  <span>Time</span>
                  <span>Action</span>
                </div>

                <div>
                  {filteredOrders.map((order) => (
                    <div
                      key={order.id}
                      className="grid grid-cols-[72px_1fr_1.3fr_55px_75px_60px_45px] items-center gap-2 border-b border-[#f0f1f5] px-1 py-3 last:border-0"
                    >
                      <span className="text-[8px] font-bold text-[#5264a0]">
                        {order.id}
                      </span>

                      <span className="truncate text-[8px] font-semibold text-[#253568]">
                        {order.student}
                      </span>

                      <span className="truncate text-[8px] text-[#7180a1]">
                        {order.items}
                      </span>

                      <span className="text-[8px] font-bold text-[#33477c]">
                        {order.amount}
                      </span>

                      <span
                        className={`w-fit whitespace-nowrap rounded-full px-2 py-1 text-[7px] font-semibold ${statusStyle(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>

                      <span className="text-[8px] text-[#7180a1]">
                        {order.time}
                      </span>

                      <button className="rounded-full border border-[#cfc8fa] px-2 py-1 text-[7px] font-bold text-[#5d43d5]">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[8px] text-[#8792ad]">
                <span>Showing 5 of 36 orders</span>

                <div className="flex items-center gap-1">
                  <button className="flex h-6 w-6 items-center justify-center rounded-full border border-[#dfe2ee]">
                    ‹
                  </button>

                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-[8px] font-bold ${
                        page === 1
                          ? "bg-[#5835E5] text-white"
                          : "border border-[#dfe2ee] bg-white text-[#667398]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button className="flex h-6 w-6 items-center justify-center rounded-full border border-[#dfe2ee]">
                    ›
                  </button>
                </div>
              </div>
            </div>

            {/* =================================================
                SALES OVERVIEW
            ================================================= */}

            <div className="min-w-0 rounded-2xl border border-[#e5e7f0] bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-[14px] font-extrabold text-[#16255d]">
                  <BarChart3
                    size={18}
                    className="text-[#6942dd]"
                  />
                  Sales Overview
                </h2>

                <button className="flex items-center gap-1 rounded-xl border border-[#e2e4ef] bg-white px-3 py-2 text-[8px] font-semibold text-[#4c5b80]">
                  This Week
                  <ChevronDown size={11} />
                </button>
              </div>

              {/* BAR CHART */}

              <div className="mt-5 flex h-[185px] items-end justify-between gap-2 border-b border-[#edf0f5] px-2 pb-1">
                {[
                  { day: "Mon", a: 35, b: 25 },
                  { day: "Tue", a: 45, b: 30 },
                  { day: "Wed", a: 62, b: 42 },
                  { day: "Thu", a: 73, b: 61 },
                  { day: "Fri", a: 67, b: 48 },
                  { day: "Sat", a: 82, b: 58 },
                  { day: "Sun", a: 92, b: 72 },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex h-full flex-1 flex-col items-center justify-end"
                  >
                    <div className="flex h-[140px] items-end gap-[3px]">
                      <div
                        className="w-[9px] rounded-t-md bg-[#7549e8]"
                        style={{
                          height: `${item.a}%`,
                        }}
                      />

                      <div
                        className="w-[9px] rounded-t-md bg-[#ec4e98]"
                        style={{
                          height: `${item.b}%`,
                        }}
                      />
                    </div>

                    <span className="mt-2 text-[8px] text-[#7885a4]">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-5 text-[8px] text-[#68779b]">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#7549e8]" />
                  Total Sales
                </span>

                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#ec4e98]" />
                  Orders
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT COLUMN
            ================================================= */}

            <aside className="min-w-0 space-y-3">
              {/* QUICK ACTIONS */}

              <div className="rounded-2xl border border-[#e5e7f0] bg-white p-3 shadow-sm">
                <h2 className="flex items-center gap-2 text-[13px] font-extrabold text-[#182b68]">
                  <Zap
                    size={17}
                    className="text-[#f3a817]"
                    fill="currentColor"
                  />
                  Quick Actions
                </h2>

                <div className="mt-3 space-y-2">
                  {/* UPDATE MENU */}

                  <button className="group flex w-full items-center gap-3 rounded-xl border border-[#e8e9f1] bg-white p-2.5 text-left hover:bg-[#faf9ff]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                      <Utensils size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-bold text-[#27376d]">
                        Update Menu
                      </div>

                      <div className="mt-0.5 text-[7px] text-[#8995ae]">
                        Add / modify food items
                      </div>
                    </div>

                    <ChevronRight
                      size={13}
                      className="text-[#9aa5bd]"
                    />
                  </button>

                  {/* MANAGE ORDERS */}

                  <button className="group flex w-full items-center gap-3 rounded-xl border border-[#e8e9f1] bg-white p-2.5 text-left hover:bg-[#faf9ff]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                      <ShoppingBag size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-bold text-[#27376d]">
                        Manage Orders
                      </div>

                      <div className="mt-0.5 text-[7px] text-[#8995ae]">
                        View & update orders
                      </div>
                    </div>

                    <ChevronRight
                      size={13}
                      className="text-[#9aa5bd]"
                    />
                  </button>

                  {/* REVIEWS */}

                  <button className="group flex w-full items-center gap-3 rounded-xl border border-[#e8e9f1] bg-white p-2.5 text-left hover:bg-[#faf9ff]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                      <Star size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-bold text-[#27376d]">
                        View Reviews
                      </div>

                      <div className="mt-0.5 text-[7px] text-[#8995ae]">
                        Check student feedback
                      </div>
                    </div>

                    <ChevronRight
                      size={13}
                      className="text-[#9aa5bd]"
                    />
                  </button>

                  {/* SPECIAL OFFER */}

                  <button className="group flex w-full items-center gap-3 rounded-xl border border-[#e8e9f1] bg-white p-2.5 text-left hover:bg-[#faf9ff]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                      <Gift size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-bold text-[#27376d]">
                        Add Special Offer
                      </div>

                      <div className="mt-0.5 text-[7px] text-[#8995ae]">
                        Attract more students
                      </div>
                    </div>

                    <ChevronRight
                      size={13}
                      className="text-[#9aa5bd]"
                    />
                  </button>
                </div>
              </div>

              {/* TOP SELLING */}

              <div className="rounded-2xl border border-[#e5e7f0] bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-[12px] font-extrabold text-[#182b68]">
                    Top Selling Items
                  </h2>

                  <button className="text-[8px] font-bold text-[#5338d4]">
                    View All →
                  </button>
                </div>

                <div className="mt-3 space-y-1">
                  {topSellingItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 border-b border-[#f0f1f5] py-2 last:border-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-8 w-8 rounded-lg object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="truncate text-[8px] font-bold text-[#27376d]">
                          {item.name}
                        </div>
                      </div>

                      <span className="whitespace-nowrap text-[7px] text-[#7684a5]">
                        {item.orders}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </section>

          {/* ===================================================
              KEEP CAFE RUNNING CARD
          =================================================== */}

          <section className="grid grid-cols-[1fr_340px] gap-3">
            <div className="relative min-h-[150px] overflow-hidden rounded-2xl border border-[#e0d7fa] bg-gradient-to-br from-[#f5efff] via-[#f7f3ff] to-[#f2ecff] p-5">
              <div className="relative z-10 max-w-[400px]">
                <h2 className="rotate-[-3deg] text-[21px] font-semibold italic leading-tight text-[#5235cf]">
                  Keep Your
                  <br />
                  Cafe Running Smoothly!
                </h2>

                <p className="mt-3 text-[9px] leading-relaxed text-[#66759b]">
                  Manage orders, update menu, track earnings and
                  more.
                </p>

                <button className="mt-3 flex items-center gap-2 rounded-full bg-[#5835E5] px-4 py-2 text-[8px] font-bold text-white shadow-md">
                  Manage Menu
                  <ArrowRight size={11} />
                </button>
              </div>

              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=85"
                alt="Cafe food"
                className="absolute bottom-[-18px] right-[-8px] h-[150px] w-[220px] rounded-[40%] object-cover"
              />

              <div className="absolute right-[38%] top-[15px] text-[22px] text-[#7a52e9]">
                ✦
              </div>

              <div className="absolute right-[30%] top-[40px] text-[17px] text-[#e84c91]">
                ♡
              </div>
            </div>

            {/* EMPTY BALANCE SPACE FOR SAME SCREEN PROPORTION */}

            <div className="rounded-2xl border border-transparent" />
          </section>

          {/* ===================================================
              BOTTOM FULL WIDTH BANNER
          =================================================== */}

          <section className="relative min-h-[105px] overflow-hidden rounded-2xl border border-[#f1ddca] bg-gradient-to-r from-[#fff1df] via-[#ffead6] to-[#fff0e7]">
            <div className="absolute left-7 top-1/2 -translate-y-1/2">
              <div className="flex items-center gap-3">
                <div className="text-[30px] text-[#643ee0]">
                  ♧
                </div>

                <div className="rotate-[-4deg] text-[17px] font-semibold italic leading-tight text-[#5335d0]">
                  Fresh Ingredients
                  <br />
                  Great Taste
                </div>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=450&q=85"
              alt="Fresh cafe food"
              className="absolute left-[22%] top-[-15px] h-[135px] w-[180px] rounded-[50%] object-cover"
            />

            <div className="absolute left-[42%] top-1/2 flex -translate-y-1/2 items-center gap-10">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#efe8ff] text-[#6240dd]">
                  <ShoppingBag size={18} />
                </div>

                <div>
                  <div className="text-[10px] font-extrabold text-[#24346a]">
                    More Orders
                  </div>

                  <div className="text-[8px] text-[#7785a5]">
                    Bigger Reach
                  </div>
                </div>
              </div>

              <div className="h-10 w-px bg-[#d9cfc7]" />

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#efe8ff] text-[#6240dd]">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <div className="text-[10px] font-extrabold text-[#24346a]">
                    Quality Food
                  </div>

                  <div className="text-[8px] text-[#7785a5]">
                    Happy Customers
                  </div>
                </div>
              </div>

              <div className="h-10 w-px bg-[#d9cfc7]" />

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#efe8ff] text-[#6240dd]">
                  <BarChart3 size={18} />
                </div>

                <div>
                  <div className="text-[10px] font-extrabold text-[#24346a]">
                    Grow Your Business
                  </div>

                  <div className="text-[8px] text-[#7785a5]">
                    With Studentica
                  </div>
                </div>
              </div>
            </div>

            <button className="absolute right-5 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-full bg-[#5835E5] px-6 py-3 text-[9px] font-bold text-white shadow-md">
              <BarChart3 size={13} />
              View Reports
              <ArrowRight size={12} />
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}