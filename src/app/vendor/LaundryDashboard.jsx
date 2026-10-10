"use client";

import React, { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
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
  Leaf,
  CheckCircle2,
  CircleDollarSign,
  Sparkles,
  MapPin,
  TrendingUp,
  TrendingDown,
  Menu,
  X,
} from "lucide-react";

export default function LaundryDashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [activeOrderTab, setActiveOrderTab] = useState("All");
  const [showNotifications, setShowNotifications] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const orders = [
    {
      id: "#LD0018",
      student: "Priya Sharma",
      items: "3 Clothes",
      amount: "₹180",
      status: "In Progress",
      time: "10:30 AM",
    },
    {
      id: "#LD0017",
      student: "Rohan Patil",
      items: "5 Clothes",
      amount: "₹300",
      status: "Pending",
      time: "09:45 AM",
    },
    {
      id: "#LD0016",
      student: "Sneha Kulkarni",
      items: "2 Bedsheets",
      amount: "₹200",
      status: "Completed",
      time: "09:20 AM",
    },
    {
      id: "#LD0015",
      student: "Aditya More",
      items: "4 Clothes",
      amount: "₹240",
      status: "Completed",
      time: "08:50 AM",
    },
    {
      id: "#LD0014",
      student: "Neha Deshmukh",
      items: "6 Clothes",
      amount: "₹360",
      status: "In Progress",
      time: "08:15 AM",
    },
  ];

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Orders",
      icon: ClipboardList,
      badge: "12",
    },
    {
      name: "Earnings",
      icon: WalletCards,
    },
    {
      name: "Customers",
      icon: Users,
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

  const quickActions = [
    {
      title: "Update Timings",
      subtitle: "Change your working hours",
      icon: Clock3,
      bg: "bg-orange-100",
      color: "text-orange-500",
    },
    {
      title: "Manage Orders",
      subtitle: "View & update order status",
      icon: FileText,
      bg: "bg-pink-100",
      color: "text-pink-500",
    },
    {
      title: "Add Special Offer",
      subtitle: "Attract more students",
      icon: Heart,
      bg: "bg-fuchsia-100",
      color: "text-fuchsia-500",
    },
    {
      title: "View Reviews",
      subtitle: "See customer feedback",
      icon: Star,
      bg: "bg-amber-100",
      color: "text-amber-500",
    },
  ];

  const statusCards = [
    {
      title: "Total Orders",
      value: "18",
      change: "12%",
      direction: "up",
      icon: FileText,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
      cardBg: "bg-gradient-to-br from-white to-pink-50/40",
    },
    {
      title: "Completed",
      value: "14",
      change: "8%",
      direction: "up",
      icon: CheckCircle2,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-500",
      cardBg: "bg-gradient-to-br from-white to-emerald-50/50",
    },
    {
      title: "In Progress",
      value: "3",
      change: "1%",
      direction: "up",
      icon: Clock3,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      cardBg: "bg-gradient-to-br from-white to-orange-50/50",
    },
    {
      title: "Cancelled",
      value: "1",
      change: "2%",
      direction: "down",
      icon: X,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      cardBg: "bg-gradient-to-br from-white to-purple-50/40",
    },
  ];

  const chartData = [
    { day: "Mon", completed: 8, pending: 7, cancelled: 2 },
    { day: "Tue", completed: 9, pending: 8, cancelled: 2 },
    { day: "Wed", completed: 10, pending: 7, cancelled: 3 },
    { day: "Thu", completed: 16, pending: 6, cancelled: 4 },
    { day: "Fri", completed: 11, pending: 7, cancelled: 3 },
    { day: "Sat", completed: 13, pending: 8, cancelled: 4 },
    { day: "Sun", completed: 14, pending: 6, cancelled: 5 },
  ];

  const quickStats = [
    {
      title: "Total Revenue",
      value: "₹8,450",
      change: "15%",
      icon: CircleDollarSign,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Average Order Value",
      value: "₹235",
      change: "10%",
      icon: WalletCards,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      title: "Active Students",
      value: "142",
      change: "8%",
      icon: Users,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      title: "Repeat Customers",
      value: "68",
      change: "12%",
      icon: Heart,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const filteredOrders =
    activeOrderTab === "All"
      ? orders
      : orders.filter((order) => {
          if (activeOrderTab === "Pending") {
            return order.status === "Pending";
          }

          if (activeOrderTab === "In Progress") {
            return order.status === "In Progress";
          }

          if (activeOrderTab === "Completed") {
            return order.status === "Completed";
          }

          if (activeOrderTab === "Cancelled") {
            return order.status === "Cancelled";
          }

          return true;
        });

  const statusStyle = (status) => {
    if (status === "Completed") {
      return "bg-emerald-50 text-emerald-600 border border-emerald-100";
    }

    if (status === "Pending") {
      return "bg-pink-50 text-pink-500 border border-pink-100";
    }

    if (status === "In Progress") {
      return "bg-orange-50 text-orange-500 border border-orange-100";
    }

    return "bg-purple-50 text-purple-600 border border-purple-100";
  };

  const maxChartValue = 18;

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-[#172554]">
      {/* MOBILE SIDEBAR OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[200px] flex-col overflow-hidden bg-[#101631] text-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[82px] items-center gap-3 px-5">
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-[#7350ff] to-[#8e55ff] shadow-lg shadow-purple-900/30">
            <span className="text-[25px]">🎓</span>
          </div>

          <div>
            <div className="text-[17px] font-extrabold leading-tight">
              Studentica.
            </div>

            <div className="mt-1 text-[12px] text-white/70">
              Vendor Portal
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto rounded-lg p-1 text-white/70 hover:bg-white/10 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-5 flex-1 px-3">
          <div className="space-y-2">
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
                  className={`flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-[13px] transition ${
                    active
                      ? "bg-gradient-to-r from-[#7044f5] to-[#7750ff] font-semibold shadow-lg shadow-purple-900/20"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={20} strokeWidth={1.8} />

                  <span className="flex-1">{item.name}</span>

                  {item.badge && (
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ff5361] px-1.5 text-[11px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        <div className="relative mt-auto h-[310px] overflow-hidden px-4">
          <div className="absolute bottom-[165px] left-[20px] rotate-[-5deg] text-[20px] font-semibold italic leading-tight text-[#b86cff]">
            Clean Clothes
            <br />
            Happy Students
            <br />
            <span className="ml-8 text-[27px]">⌣</span>
          </div>

          <div className="absolute bottom-[12px] left-[20px] text-[11px] text-[#f5cf55]">
            ✦ ✦
          </div>

          <img
            src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=500&q=85"
            alt="Laundry"
            className="absolute bottom-[-30px] left-[-5px] h-[220px] w-[185px] rounded-[30px] object-cover opacity-95"
          />
        </div>
      </aside>

      {/* MAIN */}
      <main className="min-h-screen lg:ml-[200px]">
        {/* HEADER */}
        <header className="sticky top-0 z-30 flex h-[70px] items-center gap-4 border-b border-[#e9eaf3] bg-white/95 px-3 backdrop-blur sm:px-5 lg:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl p-2 text-[#172554] hover:bg-[#f3f1ff] lg:hidden"
          >
            <Menu size={22} />
          </button>

          <div className="relative max-w-[385px] flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#273dbe]"
            />

            <input
              type="text"
              placeholder="Search orders, students..."
              className="h-[43px] w-full rounded-2xl border border-[#e3e5f2] bg-[#f5f6fd] pl-11 pr-4 text-[13px] text-[#172554] outline-none transition placeholder:text-[#8190bb] focus:border-[#8c69ff] focus:ring-2 focus:ring-[#8c69ff]/10"
            />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() =>
                  setShowNotifications(!showNotifications)
                }
                className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-[#f4f2ff]"
              >
                <Bell size={21} className="text-[#18327b]" />

                <span className="absolute right-[5px] top-[3px] flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#ff4b57] px-1 text-[9px] font-bold text-white">
                  3
                </span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-12 w-[270px] rounded-2xl border border-[#ececf4] bg-white p-4 shadow-xl">
                  <div className="font-bold text-[#172554]">
                    Notifications
                  </div>

                  <div className="mt-3 rounded-xl bg-[#f7f4ff] p-3 text-xs text-[#51618b]">
                    You have 3 new order updates.
                  </div>
                </div>
              )}
            </div>

            <div className="hidden h-8 w-px bg-[#e7e8ef] sm:block" />

            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Rahul Sharma"
                className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
              />

              <div className="hidden sm:block">
                <div className="text-[13px] font-bold text-[#182c72]">
                  Rahul Sharma
                </div>

                <div className="text-[11px] text-[#66749d]">
                  Laundry Vendor
                </div>
              </div>

              <ChevronDown
                size={17}
                className="hidden text-[#18327b] sm:block"
              />
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="px-2 py-4 sm:px-3 lg:px-4">

          {/* =====================================================
              IMPORTANT:
              FIXED TWO COLUMN GRID
              LEFT = EVERYTHING MAIN
              RIGHT = SMALL FIXED SIDEBAR
              ===================================================== */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) 180px",
              columnGap: "16px",
              width: "100%",
              alignItems: "start",
            }}
          >
            {/* ==================================================
                LEFT COLUMN
                ================================================== */}

            <div className="min-w-0 space-y-4">

              {/* HERO */}
              <section className="relative min-h-[205px] overflow-hidden rounded-2xl border border-[#e7e8f2] bg-gradient-to-r from-[#f3f4ff] via-[#f8f6ff] to-[#eef9ff] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=85"
                  alt="Laundry service"
                  className="absolute inset-y-0 right-0 h-full w-[58%] object-cover opacity-85"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#f4f3ff] via-[#f6f5ff]/95 to-transparent" />

                <div className="relative z-10 flex h-full min-h-[205px] flex-col justify-center px-4 py-6 sm:px-6">
                  <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#e9e0ff] px-3 py-1.5 text-[11px] font-bold text-[#5d35d8]">
                    <ShoppingBag size={14} />
                    Laundry Service
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl border-2 border-[#4c6cf0] bg-white/80 text-[28px]">
                      🧺
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h1 className="text-[28px] font-extrabold tracking-tight text-[#18317c] sm:text-[31px]">
                          CottonSpa
                        </h1>

                        <span className="inline-flex items-center gap-1 rounded-full bg-[#d8f7e9] px-2.5 py-1 text-[10px] font-bold text-[#12955b]">
                          <CheckCircle2 size={12} />
                          Verified
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-[12px] text-[#60719a]">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          Dehu Phata
                        </span>

                        <span className="flex items-center gap-1 font-semibold text-[#314d8d]">
                          <Star
                            size={15}
                            fill="currentColor"
                            className="text-[#f6aa14]"
                          />
                          4.2 (125 reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 text-[15px] font-semibold text-[#233668]">
                    Fresh clothes, happy vibes!
                  </div>
                </div>

                <div className="absolute right-[30%] top-[30px] hidden -rotate-6 text-[19px] font-semibold italic leading-tight text-[#3152cf] lg:block">
                  Clean
                  <br />
                  Fresh
                  <br />
                  On Time
                  <span className="ml-2 text-[25px]">⌣</span>
                </div>
              </section>

              {/* STATUS CARDS */}
              <section className="grid grid-cols-4 gap-2">
                {statusCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className={`min-w-0 rounded-2xl border border-[#e9eaf3] p-3 shadow-sm ${card.cardBg}`}
                    >
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-xl ${card.iconBg}`}
                      >
                        <Icon size={17} className={card.iconColor} />
                      </div>

                      <div className="mt-2 truncate text-[10px] font-medium text-[#60719a]">
                        {card.title}
                      </div>

                      <div className="mt-1 text-[21px] font-extrabold text-[#18317c]">
                        {card.value}
                      </div>

                      <div className="mt-1 flex items-center gap-1 text-[8px]">
                        {card.direction === "up" ? (
                          <TrendingUp
                            size={10}
                            className="text-[#18a86b]"
                          />
                        ) : (
                          <TrendingDown
                            size={10}
                            className="text-[#ef4d63]"
                          />
                        )}

                        <span
                          className={
                            card.direction === "up"
                              ? "font-bold text-[#18a86b]"
                              : "font-bold text-[#ef4d63]"
                          }
                        >
                          {card.change}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </section>

              {/* ORDERS + OVERVIEW */}
              <section className="grid grid-cols-[minmax(0,1.35fr)_minmax(170px,0.8fr)] gap-4">

                {/* RECENT ORDERS */}
                <div className="min-w-0 rounded-2xl border border-[#e8e9f2] bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-[15px] font-extrabold text-[#18317c]">
                      Recent Orders
                    </h2>

                    <button className="flex items-center gap-1 text-[10px] font-semibold text-[#3154c9]">
                      View All
                      <ChevronRight size={13} />
                    </button>
                  </div>

                  <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1">
                    {[
                      "All",
                      "Pending",
                      "In Progress",
                      "Completed",
                      "Cancelled",
                    ].map((tab) => {
                      const count =
                        tab === "All"
                          ? 18
                          : tab === "Pending"
                          ? 3
                          : tab === "In Progress"
                          ? 3
                          : tab === "Completed"
                          ? 14
                          : 1;

                      return (
                        <button
                          key={tab}
                          onClick={() => setActiveOrderTab(tab)}
                          className={`whitespace-nowrap rounded-full px-2 py-1.5 text-[8px] font-semibold transition ${
                            activeOrderTab === tab
                              ? "bg-gradient-to-r from-[#7044f5] to-[#8255ff] text-white shadow-md"
                              : "bg-[#f5f6fb] text-[#53648e] hover:bg-[#ecebff]"
                          }`}
                        >
                          {tab} ({count})
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full min-w-[500px] border-collapse">
                      <thead>
                        <tr className="border-b border-[#ececf3] text-left text-[8px] text-[#68789f]">
                          <th className="px-1.5 py-2 font-semibold">
                            Order ID
                          </th>

                          <th className="px-1.5 py-2 font-semibold">
                            Student
                          </th>

                          <th className="px-1.5 py-2 font-semibold">
                            Items
                          </th>

                          <th className="px-1.5 py-2 font-semibold">
                            Amount
                          </th>

                          <th className="px-1.5 py-2 font-semibold">
                            Status
                          </th>

                          <th className="px-1.5 py-2 font-semibold">
                            Time
                          </th>

                          <th className="px-1.5 py-2 font-semibold">
                            Action
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {filteredOrders.map((order) => (
                          <tr
                            key={order.id}
                            className="border-b border-[#f0f0f5] last:border-0"
                          >
                            <td className="px-1.5 py-2 text-[8px] font-bold text-[#3550a4]">
                              {order.id}
                            </td>

                            <td className="px-1.5 py-2 text-[8px] font-semibold text-[#243565]">
                              {order.student}
                            </td>

                            <td className="px-1.5 py-2 text-[8px] text-[#7080a1]">
                              {order.items}
                            </td>

                            <td className="px-1.5 py-2 text-[8px] font-semibold text-[#33477c]">
                              {order.amount}
                            </td>

                            <td className="px-1.5 py-2">
                              <span
                                className={`inline-flex whitespace-nowrap rounded-full px-1.5 py-1 text-[7px] font-semibold ${statusStyle(
                                  order.status
                                )}`}
                              >
                                {order.status}
                              </span>
                            </td>

                            <td className="px-1.5 py-2 text-[8px] text-[#7180a0]">
                              {order.time}
                            </td>

                            <td className="px-1.5 py-2">
                              <button className="rounded-full border border-[#8e7aff] px-2 py-1 text-[7px] font-semibold text-[#6949df] hover:bg-[#f2efff]">
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[8px] text-[#8290ad]">
                    <span>Showing 5 of 18 orders</span>

                    <div className="flex items-center gap-1">
                      <button className="flex h-6 w-6 items-center justify-center rounded-full border border-[#dfe2ee] bg-white">
                        <ChevronLeft size={11} />
                      </button>

                      {[1, 2, 3, 4].map((page) => (
                        <button
                          key={page}
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-[8px] font-semibold ${
                            page === 1
                              ? "bg-[#7044f5] text-white"
                              : "border border-[#dfe2ee] bg-white text-[#647394]"
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      <button className="flex h-6 w-6 items-center justify-center rounded-full border border-[#dfe2ee] bg-white">
                        <ChevronRight size={11} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* ORDERS OVERVIEW */}
                <div className="min-w-0 rounded-2xl border border-[#e8e9f2] bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="flex items-center gap-1.5 text-[13px] font-extrabold text-[#18317c]">
                      <Clock3 size={15} />
                      Orders Overview
                    </h2>

                    <button className="rounded-xl border border-[#e3e5ef] bg-white px-2 py-1.5 text-[8px] font-semibold text-[#42547e]">
                      This Week
                      <ChevronDown
                        size={10}
                        className="ml-1 inline-block"
                      />
                    </button>
                  </div>

                  <div className="mt-4">
                    <div className="relative h-[180px]">
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[20, 15, 10, 5, 0].map((value) => (
                          <div
                            key={value}
                            className="flex items-center gap-1"
                          >
                            <span className="w-5 text-[7px] text-[#8490ac]">
                              {value}
                            </span>

                            <div className="h-px flex-1 bg-[#edf0f6]" />
                          </div>
                        ))}
                      </div>

                      <div className="absolute bottom-0 left-[26px] right-0 top-0 flex items-end justify-around gap-1 pl-1">
                        {chartData.map((item) => (
                          <div
                            key={item.day}
                            className="flex h-full flex-1 items-end justify-center gap-[2px]"
                          >
                            <div
                              className="w-[5px] rounded-t-full bg-[#31c98c]"
                              style={{
                                height: `${
                                  (item.completed / maxChartValue) * 100
                                }%`,
                              }}
                            />

                            <div
                              className="w-[5px] rounded-t-full bg-[#f4aa18]"
                              style={{
                                height: `${
                                  (item.pending / maxChartValue) * 100
                                }%`,
                              }}
                            />

                            <div
                              className="w-[5px] rounded-t-full bg-[#ee66a5]"
                              style={{
                                height: `${
                                  (item.cancelled / maxChartValue) * 100
                                }%`,
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="ml-[26px] mt-2 flex justify-around text-[7px] text-[#7583a3]">
                      {chartData.map((item) => (
                        <span key={item.day}>{item.day}</span>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[7px] text-[#657492]">
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#31c98c]" />
                        Completed
                      </span>

                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f4aa18]" />
                        Pending
                      </span>

                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ee66a5]" />
                        Cancelled
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* BUSINESS CARD */}
              <section className="overflow-hidden rounded-2xl border border-[#e5e0ff] bg-gradient-to-r from-[#f2edff] via-[#f7f3ff] to-[#eef7ff] p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="max-w-[300px] text-[15px] font-extrabold leading-tight text-[#18317c]">
                      Keep Your Laundry Business Running Smoothly!
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-3 text-[8px] font-semibold text-[#56678f]">
                      <span className="flex items-center gap-1">
                        <Sparkles size={11} className="text-[#6846e9]" />
                        Fast Service
                      </span>

                      <span className="flex items-center gap-1">
                        <Users size={11} className="text-[#3566dc]" />
                        Happy Students
                      </span>

                      <span className="flex items-center gap-1">
                        <ShoppingBag
                          size={11}
                          className="text-[#e5a315]"
                        />
                        More Orders
                      </span>
                    </div>

                    <button className="mt-3 rounded-xl bg-gradient-to-r from-[#7044f5] to-[#8254ff] px-4 py-2 text-[8px] font-bold text-white shadow-md">
                      Update Services
                      <ChevronRight
                        size={11}
                        className="ml-1 inline-block"
                      />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-[38px]">🧺</div>
                    <div className="text-[30px]">🫧</div>
                    <div className="text-[30px]">👕</div>
                  </div>
                </div>
              </section>

              {/* QUICK STATS */}
              <section className="rounded-2xl border border-[#e8e9f2] bg-white p-4 shadow-sm">
                <h2 className="flex items-center gap-2 text-[14px] font-extrabold text-[#18317c]">
                  <Sparkles
                    size={15}
                    className="text-[#7148ec]"
                  />
                  Quick Stats
                </h2>

                <div className="mt-3 grid grid-cols-4 gap-2">
                  {quickStats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                      <div
                        key={stat.title}
                        className="min-w-0 rounded-xl border border-[#e9ebf3] bg-gradient-to-br from-white to-[#fafaff] p-3"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${stat.iconBg}`}
                          >
                            <Icon
                              size={15}
                              className={stat.iconColor}
                            />
                          </div>

                          <div className="min-w-0">
                            <div className="truncate text-[7px] text-[#7584a4]">
                              {stat.title}
                            </div>

                            <div className="mt-1 text-[14px] font-extrabold text-[#1c337b]">
                              {stat.value}
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 flex items-center gap-1 text-[7px]">
                          <TrendingUp
                            size={10}
                            className="text-[#17a56b]"
                          />

                          <span className="font-bold text-[#17a56b]">
                            {stat.change}
                          </span>

                          <span className="text-[#8995ae]">
                            this week
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* ==================================================
                RIGHT COLUMN
                FIXED ON RIGHT SIDE
                ================================================== */}

            <div className="min-w-0">
              <aside className="space-y-4">

                {/* TODAY'S STATUS */}
                <section className="overflow-hidden rounded-2xl border border-[#e6e7f1] bg-white shadow-sm">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#9451ed] to-[#a959eb] px-3 py-3 text-white">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/20">
                      <CalendarDays size={14} />
                    </div>

                    <h2 className="text-[11px] font-bold">
                      Today&apos;s Status
                    </h2>
                  </div>

                  <div className="p-3">
                    <div className="text-[9px] font-semibold text-[#354778]">
                      Total Orders
                    </div>

                    <div className="mt-1 flex items-end justify-between">
                      <span className="text-[22px] font-extrabold text-[#173273]">
                        18
                      </span>

                      <div className="text-right">
                        <div className="flex items-center justify-end gap-1 text-[8px] font-bold text-[#16a66a]">
                          <TrendingUp size={10} />
                          12%
                        </div>

                        <div className="mt-0.5 text-[7px] text-[#8490ad]">
                          vs yesterday
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* QUICK ACTIONS */}
                <section className="rounded-2xl border border-[#e6e7f1] bg-white p-3 shadow-sm">
                  <h2 className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#18317c]">
                    <Sparkles
                      size={13}
                      className="text-[#7044f5]"
                    />
                    Quick Actions
                  </h2>

                  <div className="mt-2 space-y-1.5">
                    {quickActions.map((action) => {
                      const Icon = action.icon;

                      return (
                        <button
                          key={action.title}
                          className="group flex w-full items-center gap-2 rounded-xl border border-[#e8eaf2] bg-white p-2 text-left transition hover:border-[#cfc7ff] hover:bg-[#faf9ff]"
                        >
                          <div
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${action.bg}`}
                          >
                            <Icon
                              size={13}
                              className={action.color}
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="truncate text-[8px] font-bold text-[#24376f]">
                              {action.title}
                            </div>

                            <div className="mt-0.5 truncate text-[6px] text-[#8994ad]">
                              {action.subtitle}
                            </div>
                          </div>

                          <ChevronRight
                            size={11}
                            className="shrink-0 text-[#91a0bc]"
                          />
                        </button>
                      );
                    })}
                  </div>
                </section>

                {/* LAUNDRY TIMINGS */}
                <section className="rounded-2xl border border-[#e6e7f1] bg-white p-3 shadow-sm">
                  <h2 className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#6040dc]">
                    <Clock3 size={13} />
                    Laundry Timings
                  </h2>

                  <div className="mt-3 flex items-center justify-between gap-1">
                    <span className="text-[9px] font-extrabold text-[#193576]">
                      8:00 AM - 10:00 PM
                    </span>

                    <span className="flex items-center gap-1 rounded-full bg-[#dff8ec] px-1.5 py-0.5 text-[6px] font-bold text-[#169461]">
                      <CheckCircle2 size={8} />
                      Open
                    </span>
                  </div>

                  <button className="mt-3 flex h-7 w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#7044f5] to-[#7548ef] text-[7px] font-bold text-white shadow-md">
                    Update Timings
                  </button>
                </section>

                {/* PRICING */}
                <section className="rounded-2xl border border-[#e6e7f1] bg-white p-3 shadow-sm">
                  <h2 className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#18317c]">
                    <Tag
                      size={13}
                      className="text-[#f1a313]"
                    />
                    Pricing
                  </h2>

                  <div className="mt-3">
                    <div className="text-[15px] font-extrabold text-[#193576]">
                      ₹60

                      <span className="ml-1 text-[7px] font-medium text-[#68789e]">
                        per kg
                      </span>
                    </div>

                    <div className="mt-0.5 text-[6px] text-[#8a95ad]">
                      (Starting from)
                    </div>
                  </div>

                  <button className="mt-3 flex h-7 w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#7044f5] to-[#7548ef] text-[7px] font-bold text-white shadow-md">
                    Update Price
                  </button>
                </section>

                {/* GO GREEN */}
                <section className="relative min-h-[120px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#e8faed] to-[#d9f6e1] p-3 shadow-sm">
                  <div className="relative z-10 max-w-[110px]">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/70">
                        <Leaf
                          size={13}
                          className="text-[#29965c]"
                        />
                      </div>

                      <h2 className="text-[10px] font-extrabold leading-tight text-[#17613c]">
                        Go Green
                        <br />
                        Save Water
                      </h2>
                    </div>

                    <p className="mt-3 text-[7px] leading-relaxed text-[#52806a]">
                      Eco-friendly laundry for a better tomorrow.
                    </p>

                    <div className="mt-2 text-[17px] text-[#2c9a5d]">
                      ♡
                    </div>
                  </div>

                  <div className="absolute bottom-[-8px] right-[-4px] text-[55px] opacity-70">
                    🌿
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}