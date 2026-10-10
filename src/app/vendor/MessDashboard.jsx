"use client";

import React, { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  CalendarDays,
  ShoppingBag,
  Users,
  UserRound,
  Settings,
  LayoutDashboard,
  ClipboardList,
  WalletCards,
  Star,
  Clock3,
  Heart,
  FileText,
  Tag,
  CheckCircle2,
  CircleDollarSign,
  Sparkles,
  MapPin,
  TrendingUp,
  TrendingDown,
  Menu,
  X,
  Utensils,
  ChefHat,
  ClipboardCheck,
  Gift,
  BarChart3,
  CreditCard,
  Soup,
  Coffee,
  Moon,
  Sun,
} from "lucide-react";

export default function MessDashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [activeOrderTab, setActiveOrderTab] = useState("All");
  const [showNotifications, setShowNotifications] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* =========================================================
     DEMO MESS DATA
     ========================================================= */

  const orders = [
    {
      id: "#MS0128",
      student: "Priya Sharma",
      meal: "Veg Thali",
      time: "Today, 12:30 PM",
      amount: "₹100",
      status: "Pending",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "#MS0127",
      student: "Rohan Patil",
      meal: "Full Meal",
      time: "Today, 12:15 PM",
      amount: "₹120",
      status: "Confirmed",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "#MS0126",
      student: "Sneha Kulkarni",
      meal: "Special Thali",
      time: "Today, 11:50 AM",
      amount: "₹130",
      status: "Preparing",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: "#MS0125",
      student: "Aditya More",
      meal: "Veg Thali",
      time: "Today, 11:20 AM",
      amount: "₹100",
      status: "Completed",
      image:
        "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      id: "#MS0124",
      student: "Neha Deshmukh",
      meal: "Full Meal",
      time: "Today, 11:05 AM",
      amount: "₹120",
      status: "Completed",
      image:
        "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: "#MS0123",
      student: "Omkar Shinde",
      meal: "Veg Thali",
      time: "Today, 10:50 AM",
      amount: "₹100",
      status: "Completed",
      image:
        "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Mess",
      icon: CalendarDays,
    },
    {
      name: "Orders",
      icon: ClipboardList,
      badge: "12",
    },
    {
      name: "Menu & Schedule",
      icon: Utensils,
    },
    {
      name: "Subscription Plans",
      icon: CreditCard,
    },
    {
      name: "Reviews",
      icon: Star,
    },
    {
      name: "Reports",
      icon: BarChart3,
    },
    {
      name: "Profile",
      icon: UserRound,
    },
    {
      name: "Settings",
      icon: Settings,
    },
  ];

  const stats = [
    {
      title: "Total Orders",
      value: "128",
      change: "12%",
      changeText: "vs last week",
      direction: "up",
      icon: Users,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      cardBg: "from-[#fff6e9] to-[#fff0df]",
      decoration: "🛍️",
    },
    {
      title: "Completed Orders",
      value: "118",
      change: "10%",
      changeText: "vs last week",
      direction: "up",
      icon: CheckCircle2,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      cardBg: "from-[#eafff7] to-[#e5fbf4]",
      decoration: "🛍️",
    },
    {
      title: "Pending Orders",
      value: "10",
      change: "5%",
      changeText: "vs last week",
      direction: "down",
      icon: Clock3,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
      cardBg: "from-[#f5f0ff] to-[#f0ebff]",
      decoration: "◷",
    },
    {
      title: "Rating",
      value: "4.2",
      change: "0.1",
      changeText: "from last month",
      direction: "up",
      icon: Star,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      cardBg: "from-[#fff0f6] to-[#ffedf5]",
      decoration: "★",
    },
  ];

  const quickActions = [
    {
      title: "Update Menu",
      subtitle: "Change today's menu",
      icon: ClipboardCheck,
      bg: "bg-emerald-100",
      color: "text-emerald-600",
    },
    {
      title: "Manage Orders",
      subtitle: "View & update orders",
      icon: ClipboardList,
      bg: "bg-pink-100",
      color: "text-pink-600",
    },
    {
      title: "View Subscriptions",
      subtitle: "Plan & manage plans",
      icon: Gift,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
    {
      title: "Add Special Offer",
      subtitle: "Attract more students",
      icon: Users,
      bg: "bg-orange-100",
      color: "text-orange-600",
    },
  ];

  const chartData = [
    { day: "Mon", orders: 18 },
    { day: "Tue", orders: 31 },
    { day: "Wed", orders: 39 },
    { day: "Thu", orders: 23 },
    { day: "Fri", orders: 47 },
    { day: "Sat", orders: 41 },
    { day: "Sun", orders: 58 },
  ];

  const filteredOrders =
    activeOrderTab === "All"
      ? orders
      : orders.filter((order) => {
          if (activeOrderTab === "Pending") {
            return order.status === "Pending";
          }

          if (activeOrderTab === "Confirmed") {
            return order.status === "Confirmed";
          }

          if (activeOrderTab === "Preparing") {
            return order.status === "Preparing";
          }

          if (activeOrderTab === "Completed") {
            return order.status === "Completed";
          }

          return true;
        });

  const statusStyle = (status) => {
    if (status === "Completed") {
      return "bg-purple-50 text-purple-700";
    }

    if (status === "Confirmed") {
      return "bg-emerald-50 text-emerald-600";
    }

    if (status === "Preparing") {
      return "bg-blue-50 text-blue-600";
    }

    return "bg-orange-50 text-orange-600";
  };

  return (
    <div className="min-h-screen bg-[#f8f9fd] text-[#14245c]">
      {/* =====================================================
          MOBILE OVERLAY
          ===================================================== */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* =====================================================
          SIDEBAR
          ===================================================== */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[200px] flex-col overflow-hidden bg-[#11162f] text-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* LOGO */}

        <div className="flex h-[88px] items-center gap-3 px-5">
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-[#7350ff] to-[#9b68ff] shadow-lg shadow-purple-900/40">
            <span className="text-[27px]">🎓</span>
          </div>

          <div>
            <div className="text-[17px] font-extrabold">
              Studentica.
            </div>

            <div className="mt-1 text-[11px] text-white/65">
              Campus Hub
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto rounded-lg p-1 text-white/70 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* MENU */}

        <nav className="flex-1 px-3">
          <div className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = activeMenu === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveMenu(item.name);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[12px] transition ${
                    active
                      ? "bg-gradient-to-r from-[#7043ed] to-[#4c35c8] font-semibold shadow-lg shadow-purple-900/30"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={19} strokeWidth={1.8} />

                  <span className="flex-1 whitespace-nowrap">
                    {item.name}
                  </span>

                  {item.badge && (
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ff4459] px-1.5 text-[10px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* SIDEBAR BOTTOM */}

        <div className="relative mt-auto h-[300px] overflow-hidden">
          <div className="absolute left-[32px] top-[28px] rotate-[-7deg] text-[20px] font-semibold italic leading-tight text-[#b98cff]">
            Good Food
            <br />
            Happy Students
            <br />
            <span className="ml-12 text-[25px]">⌣</span>
          </div>

          <div className="absolute bottom-[45px] left-[38px] text-[30px]">
            🍲
          </div>

          <div className="absolute bottom-[20px] left-[20px] text-[18px]">
            ✦ ✧
          </div>

          <div className="absolute bottom-[18px] right-[20px] text-[18px]">
            ✦
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN AREA
          ===================================================== */}

      <main className="min-h-screen lg:ml-[200px]">
        {/* ===================================================
            HEADER
            =================================================== */}

        <header className="sticky top-0 z-30 flex h-[74px] items-center gap-4 border-b border-[#ececf4] bg-white/95 px-4 backdrop-blur sm:px-6">
          {/* MOBILE MENU */}

          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl p-2 hover:bg-[#f3f1ff] lg:hidden"
          >
            <Menu size={22} />
          </button>

          {/* SEARCH */}

          <div className="relative max-w-[450px] flex-1">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4935ca]"
            />

            <input
              type="text"
              placeholder="Search orders, students, menu..."
              className="h-[43px] w-full rounded-2xl border border-[#eceaf9] bg-[#f7f5ff] pl-11 pr-4 text-[12px] text-[#172554] outline-none placeholder:text-[#91a0c6] focus:border-[#8b74f2] focus:ring-2 focus:ring-purple-100"
            />
          </div>

          {/* RIGHT HEADER */}

          <div className="ml-auto flex items-center gap-4">
            {/* NOTIFICATION */}

            <div className="relative">
              <button
                onClick={() =>
                  setShowNotifications(!showNotifications)
                }
                className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-[#f5f2ff]"
              >
                <Bell size={21} className="text-[#17245d]" />

                <span className="absolute right-[3px] top-[1px] flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#e7284d] px-1 text-[9px] font-bold text-white">
                  3
                </span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-12 w-[260px] rounded-2xl border border-[#ececf4] bg-white p-4 shadow-xl">
                  <div className="font-bold text-[#17245d]">
                    Notifications
                  </div>

                  <div className="mt-3 rounded-xl bg-[#f7f3ff] p-3 text-[11px] text-[#63719a]">
                    You have 3 new order updates.
                  </div>
                </div>
              )}
            </div>

            <div className="hidden h-8 w-px bg-[#e7e8ef] sm:block" />

            {/* VENDOR */}

            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Ramesh Patil"
                className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
              />

              <div className="hidden sm:block">
                <div className="text-[12px] font-bold text-[#182c72]">
                  Ramesh Patil
                </div>

                <div className="text-[10px] text-[#66749d]">
                  Mess Vendor
                </div>
              </div>

              <ChevronDown
                size={16}
                className="hidden text-[#18327b] sm:block"
              />
            </div>
          </div>
        </header>

        {/* ===================================================
            CONTENT
            =================================================== */}

        <div className="px-4 py-4 sm:px-5 lg:px-6">
          <div
            className="grid items-start gap-4"
            style={{
              gridTemplateColumns:
                "minmax(0,1fr) 220px",
            }}
          >
            {/* =================================================
                LEFT MAIN COLUMN
                ================================================= */}

            <div className="min-w-0 space-y-4">
              {/* =================================================
                  HERO
                  ================================================= */}

              <section className="relative min-h-[220px] overflow-hidden rounded-2xl border border-[#f0dfcf] bg-gradient-to-r from-[#ffbf61] via-[#ffca72] to-[#ffae45] shadow-sm">
                {/* HERO IMAGE */}

                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
                  alt="Indian thali food"
                  className="absolute right-[12%] top-0 h-full w-[53%] object-cover"
                />

                {/* IMAGE BLEND */}

                <div className="absolute inset-0 bg-gradient-to-r from-[#ffc76d] via-[#ffc36a]/90 to-transparent" />

                {/* HERO DECORATION */}

                <div className="absolute right-[27%] top-[20px] hidden text-[29px] lg:block">
                  🌿
                </div>

                <div className="absolute right-[20%] top-[55px] hidden text-[25px] lg:block">
                  🌿
                </div>

                {/* HERO CONTENT */}

                <div className="relative z-10 flex min-h-[220px] flex-col justify-center px-5 py-6 sm:px-7">
                  <div className="mb-3 inline-flex w-fit items-center rounded-full bg-white/20 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-sm">
                    Mess Vendor Dashboard
                  </div>

                  <h1 className="max-w-[420px] text-[25px] font-extrabold leading-tight text-[#14245c] sm:text-[29px]">
                    Welcome back, Ramesh!
                    <span className="ml-2">👋</span>
                  </h1>

                  <p className="mt-2 max-w-[390px] text-[12px] font-medium leading-relaxed text-[#24325f]">
                    Manage your mess, track orders and keep your
                    students happy with great food!
                  </p>

                  {/* LOCATION CARD */}

                  <div className="mt-4 flex w-fit items-center gap-3 rounded-2xl bg-white/90 px-3 py-2.5 shadow-sm backdrop-blur">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff3e1]">
                      <MapPin
                        size={18}
                        className="text-[#4e39c7]"
                      />
                    </div>

                    <div>
                      <div className="text-[9px] font-bold text-[#2a3767]">
                        Annapurna Mess
                      </div>

                      <div className="mt-0.5 text-[9px] text-[#69779e]">
                        MIT - AOE Road
                      </div>
                    </div>

                    <span className="ml-2 flex items-center gap-1 rounded-full bg-[#dcfaeb] px-2 py-1 text-[8px] font-bold text-[#15935c]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#20bd72]" />
                      Active
                    </span>
                  </div>
                </div>

                {/* HERO TEXT */}

                <div className="absolute left-[38%] top-[32px] hidden -rotate-6 text-[21px] font-semibold italic leading-tight text-[#8c1c1d] lg:block">
                  Good Food
                  <br />
                  Good Mood!
                  <span className="ml-1">☺</span>
                </div>

                {/* HERO RIGHT CARD */}

                <div className="absolute right-[15px] top-[36px] hidden w-[170px] rounded-2xl bg-[#5b3bd1]/95 p-4 text-white shadow-xl lg:block">
                  <div className="flex items-center gap-2">
                    <div className="text-[25px]">
                      👨‍🍳
                    </div>

                    <div className="text-[14px] font-extrabold">
                      Keep It Fresh!
                    </div>
                  </div>

                  <p className="mt-2 text-[10px] leading-relaxed text-white/90">
                    Healthy food builds brighter futures.
                    <span className="ml-1">☺</span>
                  </p>

                  <button className="mt-4 flex w-full items-center justify-center gap-1 rounded-full bg-[#32239d] py-2 text-[9px] font-bold">
                    View Menu
                    <ChevronRight size={12} />
                  </button>
                </div>
              </section>

              {/* =================================================
                  FOUR STATS
                  ================================================= */}

              <section className="grid grid-cols-4 gap-3">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.title}
                      className={`relative min-w-0 overflow-hidden rounded-2xl border border-white bg-gradient-to-br ${stat.cardBg} p-4 shadow-sm`}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${stat.iconBg}`}
                      >
                        <Icon
                          size={20}
                          className={stat.iconColor}
                        />
                      </div>

                      <div className="mt-3 text-[11px] font-semibold text-[#25366b]">
                        {stat.title}
                      </div>

                      <div className="mt-1 text-[26px] font-extrabold text-[#14245c]">
                        {stat.value}
                      </div>

                      <div className="mt-2 flex items-center gap-1.5 text-[8px]">
                        {stat.direction === "up" ? (
                          <TrendingUp
                            size={11}
                            className="text-[#17a76a]"
                          />
                        ) : (
                          <TrendingDown
                            size={11}
                            className="text-[#e52f54]"
                          />
                        )}

                        <span
                          className={
                            stat.direction === "up"
                              ? "font-bold text-[#17a76a]"
                              : "font-bold text-[#e52f54]"
                          }
                        >
                          {stat.change}
                        </span>

                        <span className="text-[#7c89aa]">
                          {stat.changeText}
                        </span>
                      </div>

                      <div className="absolute bottom-2 right-4 text-[42px] opacity-20">
                        {stat.decoration}
                      </div>
                    </div>
                  );
                })}
              </section>

              {/* =================================================
                  MIDDLE AREA
                  RECENT ORDERS + TODAY MENU + ORDERS OVERVIEW
                  ================================================= */}

              <section className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-3">
                {/* RECENT ORDERS */}

                <div className="min-w-0 rounded-2xl border border-[#e7e8f2] bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="flex items-center gap-2 text-[14px] font-extrabold text-[#16255d]">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-100">
                          <ClipboardList
                            size={15}
                            className="text-pink-600"
                          />
                        </span>
                        Recent Orders
                      </h2>

                      <p className="mt-1 text-[9px] text-[#8a96b1]">
                        Latest orders from students
                      </p>
                    </div>

                    <button className="flex items-center gap-1 text-[9px] font-semibold text-[#4935cf]">
                      View All
                      <ChevronRight size={12} />
                    </button>
                  </div>

                  {/* TABS */}

                  <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1">
                    {[
                      "All",
                      "Pending",
                      "Confirmed",
                      "Preparing",
                      "Completed",
                    ].map((tab) => {
                      const count =
                        tab === "All"
                          ? 128
                          : tab === "Pending"
                          ? 10
                          : tab === "Confirmed"
                          ? 18
                          : tab === "Preparing"
                          ? 8
                          : 118;

                      return (
                        <button
                          key={tab}
                          onClick={() =>
                            setActiveOrderTab(tab)
                          }
                          className={`whitespace-nowrap rounded-full px-2 py-1 text-[7px] font-semibold ${
                            activeOrderTab === tab
                              ? "bg-[#5a3bd1] text-white"
                              : "bg-[#f5f5fb] text-[#66749b]"
                          }`}
                        >
                          {tab} ({count})
                        </button>
                      );
                    })}
                  </div>

                  {/* ORDER LIST */}

                  <div className="mt-2">
                    {filteredOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center gap-2 border-b border-[#f0f0f5] py-2.5 last:border-0"
                      >
                        <img
                          src={order.image}
                          alt={order.student}
                          className="h-9 w-9 rounded-full object-cover"
                        />

                        <div className="min-w-0 flex-1">
                          <div className="truncate text-[9px] font-bold text-[#253568]">
                            {order.student}
                          </div>

                          <div className="mt-0.5 text-[8px] text-[#8190ae]">
                            {order.meal}
                          </div>

                          <div className="text-[7px] text-[#9aa4bd]">
                            {order.time}
                          </div>
                        </div>

                        <span
                          className={`whitespace-nowrap rounded-full px-2 py-1 text-[7px] font-semibold ${statusStyle(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>

                        <div className="w-[38px] text-center text-[9px] font-bold text-[#1f3370]">
                          {order.amount}
                        </div>

                        <button className="rounded-lg border border-[#dcd9fb] px-2 py-1 text-[7px] font-semibold text-[#5843d2]">
                          View
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[7px] text-[#8a96af]">
                    <span>Showing 6 of 128 orders</span>

                    <div className="flex items-center gap-1">
                      <button className="flex h-5 w-5 items-center justify-center rounded-full border border-[#e1e3ed]">
                        1
                      </button>

                      <button className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5a3bd1] text-white">
                        2
                      </button>

                      <button className="flex h-5 w-5 items-center justify-center rounded-full border border-[#e1e3ed]">
                        3
                      </button>

                      <button className="flex h-5 w-5 items-center justify-center rounded-full border border-[#e1e3ed]">
                        4
                      </button>
                    </div>
                  </div>
                </div>

                {/* RIGHT MIDDLE */}

                <div className="grid min-w-0 grid-rows-[auto_auto] gap-3">
                  {/* TODAY MENU */}

                  <div className="rounded-2xl border border-[#e7e8f2] bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="flex items-center gap-2 text-[14px] font-extrabold text-[#16255d]">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100">
                            <CalendarDays
                              size={15}
                              className="text-purple-600"
                            />
                          </span>
                          Today&apos;s Menu
                        </h2>

                        <p className="mt-1 text-[8px] text-[#8792ad]">
                          Mon, 16 Jun 2025
                        </p>
                      </div>

                      <button className="flex items-center gap-1 text-[8px] font-semibold text-[#4935cf]">
                        View Full Menu
                        <ChevronRight size={11} />
                      </button>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {/* BREAKFAST */}

                      <div className="overflow-hidden rounded-xl border border-[#f1dfc5]">
                        <div className="bg-[#fff8e9] p-2">
                          <Sun
                            size={19}
                            className="text-orange-500"
                          />

                          <div className="mt-1 text-[9px] font-bold text-orange-600">
                            Breakfast
                          </div>

                          <div className="mt-1 text-[7px] text-[#7180a2]">
                            8:00 AM - 9:30 AM
                          </div>
                        </div>

                        <div className="p-2">
                          {[
                            "Poha",
                            "Upma",
                            "Tea / Coffee",
                            "Banana",
                          ].map((item) => (
                            <div
                              key={item}
                              className="mb-1 flex items-center gap-1 text-[7px] text-[#40517f]"
                            >
                              <span className="h-1 w-1 rounded-full bg-orange-500" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* LUNCH */}

                      <div className="overflow-hidden rounded-xl border border-[#f1dfc5]">
                        <div className="bg-[#fff2eb] p-2">
                          <Utensils
                            size={19}
                            className="text-orange-600"
                          />

                          <div className="mt-1 text-[9px] font-bold text-orange-600">
                            Lunch
                          </div>

                          <div className="mt-1 text-[7px] text-[#7180a2]">
                            12:00 PM - 2:00 PM
                          </div>
                        </div>

                        <div className="p-2">
                          {[
                            "Dal Rice",
                            "Bhindi Sabzi",
                            "Chapati",
                            "Salad",
                            "Curd",
                          ].map((item) => (
                            <div
                              key={item}
                              className="mb-1 flex items-center gap-1 text-[7px] text-[#40517f]"
                            >
                              <span className="h-1 w-1 rounded-full bg-red-500" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* DINNER */}

                      <div className="overflow-hidden rounded-xl border border-[#e3d8fa]">
                        <div className="bg-[#f8efff] p-2">
                          <Moon
                            size={19}
                            className="text-purple-600"
                          />

                          <div className="mt-1 text-[9px] font-bold text-purple-600">
                            Dinner
                          </div>

                          <div className="mt-1 text-[7px] text-[#7180a2]">
                            7:00 PM - 8:30 PM
                          </div>
                        </div>

                        <div className="p-2">
                          {[
                            "Veg Pulao",
                            "Paneer Curry",
                            "Chapati",
                            "Salad",
                            "Sweet",
                          ].map((item) => (
                            <div
                              key={item}
                              className="mb-1 flex items-center gap-1 text-[7px] text-[#40517f]"
                            >
                              <span className="h-1 w-1 rounded-full bg-purple-600" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ORDERS OVERVIEW */}

                  <div className="rounded-2xl border border-[#e7e8f2] bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h2 className="flex items-center gap-2 text-[14px] font-extrabold text-[#16255d]">
                        <BarChart3
                          size={18}
                          className="text-purple-600"
                        />
                        Orders Overview
                      </h2>

                      <button className="flex items-center gap-1 rounded-xl border border-[#e5e6ef] px-2.5 py-1.5 text-[8px] font-semibold text-[#3e4e7a]">
                        This Week
                        <ChevronDown size={10} />
                      </button>
                    </div>

                    {/* SIMPLE LINE CHART */}

                    <div className="relative mt-4 h-[125px]">
                      {[60, 40, 20, 0].map((line) => (
                        <div
                          key={line}
                          className="absolute left-0 right-0 flex items-center"
                          style={{
                            bottom: `${(line / 60) * 100}%`,
                          }}
                        >
                          <span className="w-6 text-[7px] text-[#8590aa]">
                            {line}
                          </span>

                          <div className="h-px flex-1 bg-[#eef0f6]" />
                        </div>
                      ))}

                      <svg
                        viewBox="0 0 500 120"
                        className="absolute left-7 top-0 h-full w-[calc(100%-28px)] overflow-visible"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="messChartGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#7657e9"
                              stopOpacity="0.24"
                            />

                            <stop
                              offset="100%"
                              stopColor="#7657e9"
                              stopOpacity="0.02"
                            />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 83 L83 58 L166 46 L250 70 L333 39 L416 50 L500 15 L500 120 L0 120 Z"
                          fill="url(#messChartGradient)"
                        />

                        <path
                          d="M0 83 L83 58 L166 46 L250 70 L333 39 L416 50 L500 15"
                          fill="none"
                          stroke="#633ce2"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {[
                          [0, 83],
                          [83, 58],
                          [166, 46],
                          [250, 70],
                          [333, 39],
                          [416, 50],
                          [500, 15],
                        ].map(([cx, cy], index) => (
                          <circle
                            key={index}
                            cx={cx}
                            cy={cy}
                            r="4"
                            fill="#633ce2"
                          />
                        ))}
                      </svg>
                    </div>

                    <div className="ml-7 mt-1 flex justify-between text-[7px] text-[#7986a4]">
                      {chartData.map((item) => (
                        <span key={item.day}>
                          {item.day}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* =================================================
                  BOTTOM PROMOTIONAL BANNER
                  ================================================= */}

              <section className="relative min-h-[100px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#ffe4bd] via-[#ffedcf] to-[#fff3df]">
                <div className="absolute left-6 top-5 rotate-[-5deg] text-[18px] font-semibold italic leading-tight text-[#2333a7]">
                  Good Food
                  <br />
                  Happy Students
                  <span className="ml-1">⌣</span>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=500&q=85"
                  alt="Indian food"
                  className="absolute left-[23%] top-0 h-full w-[25%] object-cover"
                />

                <div className="absolute left-[48%] top-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-2">
                    <span className="text-[25px]">💡</span>

                    <span className="text-[14px] font-extrabold text-[#1c2d69]">
                      Your food keeps them going!
                    </span>
                  </div>

                  <p className="mt-1 text-[8px] text-[#68779d]">
                    Fresh meals. Happy students. A better campus life.
                  </p>
                </div>

                <button className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-[#5232cf] px-5 py-2.5 text-[9px] font-bold text-white shadow-md">
                  Manage Menu
                  <ChevronRight
                    size={12}
                    className="ml-1 inline-block"
                  />
                </button>
              </section>
            </div>

            {/* =================================================
                RIGHT COLUMN
                THIS STAYS BESIDE THE MAIN CONTENT
                ================================================= */}

            <aside className="min-w-0 space-y-3">
              {/* QUICK ACTIONS */}

              <section className="rounded-2xl border border-[#e7e8f2] bg-white p-3 shadow-sm">
                <h2 className="flex items-center gap-2 text-[14px] font-extrabold text-[#16255d]">
                  <span className="text-[20px]">⚡</span>
                  Quick Actions
                </h2>

                <div className="mt-3 space-y-2">
                  {quickActions.map((action) => {
                    const Icon = action.icon;

                    return (
                      <button
                        key={action.title}
                        className="group flex w-full items-center gap-2 rounded-xl border border-[#e8e9f1] bg-white p-2.5 text-left transition hover:border-[#d5cdfb] hover:bg-[#faf9ff]"
                      >
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${action.bg}`}
                        >
                          <Icon
                            size={15}
                            className={action.color}
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="truncate text-[8px] font-bold text-[#26366d]">
                            {action.title}
                          </div>

                          <div className="mt-0.5 truncate text-[6px] text-[#8994ad]">
                            {action.subtitle}
                          </div>
                        </div>

                        <ChevronRight
                          size={11}
                          className="shrink-0 text-[#8c99b5]"
                        />
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* SPECIAL OFFER */}

              <section className="relative min-h-[145px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#fff1dd] to-[#fff8ed] p-3 shadow-sm">
                <div className="relative z-10">
                  <span className="inline-flex rounded-full bg-[#ff693d] px-2 py-1 text-[6px] font-bold text-white">
                    Special Offer
                  </span>

                  <h3 className="mt-3 text-[17px] font-extrabold leading-tight text-[#19285f]">
                    10% OFF
                    <br />
                    <span className="text-[11px]">
                      on all meals
                    </span>
                  </h3>

                  <button className="mt-3 rounded-full bg-[#5633d4] px-3 py-1.5 text-[7px] font-bold text-white">
                    Update Offers
                    <ChevronRight
                      size={9}
                      className="ml-1 inline-block"
                    />
                  </button>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=85"
                  alt="Special food offer"
                  className="absolute bottom-[-5px] right-[-35px] h-[100px] w-[125px] rounded-full object-cover"
                />
              </section>

              {/* TODAY'S STATUS */}

              <section className="rounded-2xl border border-[#e7e8f2] bg-white p-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f0e7ff]">
                    <CalendarDays
                      size={15}
                      className="text-[#633de0]"
                    />
                  </div>

                  <h2 className="text-[11px] font-extrabold text-[#16255d]">
                    Today&apos;s Status
                  </h2>
                </div>

                <div className="mt-4">
                  <div className="text-[8px] text-[#7582a0]">
                    Total Orders
                  </div>

                  <div className="mt-1 flex items-end justify-between">
                    <span className="text-[23px] font-extrabold text-[#16255d]">
                      128
                    </span>

                    <span className="flex items-center gap-1 text-[7px] font-bold text-[#16a66a]">
                      <TrendingUp size={9} />
                      12%
                    </span>
                  </div>

                  <div className="mt-0.5 text-right text-[6px] text-[#8994ae]">
                    vs last week
                  </div>
                </div>
              </section>

              {/* MESS TIMING */}

              <section className="rounded-2xl border border-[#e7e8f2] bg-white p-3 shadow-sm">
                <h2 className="flex items-center gap-2 text-[11px] font-extrabold text-[#16255d]">
                  <Clock3
                    size={14}
                    className="text-[#613bd7]"
                  />
                  Mess Timings
                </h2>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-[#fff8e9] px-2 py-2">
                    <span className="text-[7px] font-semibold text-[#6d7898]">
                      Breakfast
                    </span>

                    <span className="text-[7px] font-bold text-[#e27c1a]">
                      8:00 - 9:30
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-[#fff3ec] px-2 py-2">
                    <span className="text-[7px] font-semibold text-[#6d7898]">
                      Lunch
                    </span>

                    <span className="text-[7px] font-bold text-[#e27c1a]">
                      12:00 - 2:00
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-[#f5efff] px-2 py-2">
                    <span className="text-[7px] font-semibold text-[#6d7898]">
                      Dinner
                    </span>

                    <span className="text-[7px] font-bold text-[#6841d4]">
                      7:00 - 8:30
                    </span>
                  </div>
                </div>
              </section>

              {/* RATING */}

              <section className="rounded-2xl border border-[#e7e8f2] bg-white p-3 shadow-sm">
                <h2 className="flex items-center gap-2 text-[11px] font-extrabold text-[#16255d]">
                  <Star
                    size={14}
                    className="fill-[#f3ad18] text-[#f3ad18]"
                  />
                  Customer Rating
                </h2>

                <div className="mt-3 flex items-center gap-2">
                  <div className="text-[26px] font-extrabold text-[#16255d]">
                    4.2
                  </div>

                  <div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={10}
                          className={
                            star <= 4
                              ? "fill-[#f4ad1d] text-[#f4ad1d]"
                              : "text-[#d8dbea]"
                          }
                        />
                      ))}
                    </div>

                    <div className="mt-1 text-[7px] text-[#8995ad]">
                      125 reviews
                    </div>
                  </div>
                </div>

                <button className="mt-3 flex w-full items-center justify-center rounded-lg border border-[#dedafa] py-1.5 text-[7px] font-bold text-[#5d42ce]">
                  View Reviews
                </button>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}