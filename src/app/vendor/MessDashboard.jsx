"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  Save,
  Check,
  Plus,
} from "lucide-react";

export default function MessDashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [activeOrderTab, setActiveOrderTab] = useState("All");
  const [showNotifications, setShowNotifications] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Modal State for Menu Update Popup
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [menuSavedSuccess, setMenuSavedSuccess] = useState(false);

  // Live Menu State
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

  const [editableMenu, setEditableMenu] = useState(defaultMenu);

  // Form strings for the modal textareas/inputs
  const [bfTiming, setBfTiming] = useState("08:00 AM - 10:00 AM");
  const [bfItemsText, setBfItemsText] = useState("Poha - Upma, Upma - Dosa, Unlimited Chai / Coffee");
  
  const [lunchTiming, setLunchTiming] = useState("12:00 PM - 03:00 PM");
  const [lunchItemsText, setLunchItemsText] = useState("Paneer - Tomato, Tomato, Chapati, Rice, [Special: Gulab Jamun on Sunday]");
  
  const [dinnerTiming, setDinnerTiming] = useState("07:00 PM - 10:00 PM");
  const [dinnerItemsText, setDinnerItemsText] = useState("Chole, Veg Pulav, Roti, Salad, [Healthy Buttermilk Included]");

  // Static Fallback Orders
  const defaultOrders = [
    {
      id: "#MS0128",
      student: "Priya Sharma",
      meal: "Veg Thali",
      time: "Today, 12:30 PM",
      amount: "₹100",
      status: "Pending",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "#MS0127",
      student: "Rohan Patil",
      meal: "Full Meal",
      time: "Today, 12:15 PM",
      amount: "₹120",
      status: "Confirmed",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "#MS0126",
      student: "Sneha Kulkarni",
      meal: "Special Thali",
      time: "Today, 11:50 AM",
      amount: "₹130",
      status: "Preparing",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: "#MS0125",
      student: "Aditya More",
      meal: "Veg Thali",
      time: "Today, 11:20 AM",
      amount: "₹100",
      status: "Completed",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      id: "#MS0124",
      student: "Neha Deshmukh",
      meal: "Full Meal",
      time: "Today, 11:05 AM",
      amount: "₹120",
      status: "Completed",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
  ];

  const [allOrders, setAllOrders] = useState(defaultOrders);

  // Sync Orders and Menu from LocalStorage
  const loadDataFromStorage = useCallback(() => {
    try {
      // 1. Read Menu
      const savedMenu = localStorage.getItem("annapurna_menu");
      if (savedMenu) {
        const parsed = JSON.parse(savedMenu);
        setEditableMenu(parsed);
        if (parsed.breakfast) {
          setBfTiming(parsed.breakfast.timing || "08:00 AM - 10:00 AM");
          setBfItemsText((parsed.breakfast.items || []).join(", "));
        }
        if (parsed.lunch) {
          setLunchTiming(parsed.lunch.timing || "12:00 PM - 03:00 PM");
          setLunchItemsText((parsed.lunch.items || []).join(", "));
        }
        if (parsed.dinner) {
          setDinnerTiming(parsed.dinner.timing || "07:00 PM - 10:00 PM");
          setDinnerItemsText((parsed.dinner.items || []).join(", "));
        }
      }

      // 2. Read Student Bookings
      const rawBookings = JSON.parse(localStorage.getItem("student_bookings") || "[]");
      
      // Match any Mess or Annapurna booking made on Studentica
      const studentMessOrders = rawBookings
        .filter(
          (b) =>
            b.service === "Mess" ||
            (b.vendor && b.vendor.toLowerCase().includes("annapurna")) ||
            (b.id && b.id.includes("MES"))
        )
        .map((b) => ({
          id: b.id.length > 8 ? `#${b.id.slice(-6)}` : b.id,
          student: b.student || b.reviewer || "Riya Wagh (Verified Student)",
          meal: b.item || `${b.vendor} Booking`,
          time: b.date ? `${b.date}` : "Just now",
          amount: b.price || "₹1,900",
          status: b.status || "Confirmed",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        }));

      // Combine dynamic orders at the top
      setAllOrders([...studentMessOrders, ...defaultOrders]);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    loadDataFromStorage();

    // Listen for storage events across tabs or local triggers
    window.addEventListener("storage", loadDataFromStorage);
    return () => {
      window.removeEventListener("storage", loadDataFromStorage);
    };
  }, [loadDataFromStorage]);

  // Open popup and ensure form fields match current menu state
  const handleOpenUpdateModal = () => {
    setBfTiming(editableMenu.breakfast.timing);
    setBfItemsText(editableMenu.breakfast.items.join(", "));
    setLunchTiming(editableMenu.lunch.timing);
    setLunchItemsText(editableMenu.lunch.items.join(", "));
    setDinnerTiming(editableMenu.dinner.timing);
    setDinnerItemsText(editableMenu.dinner.items.join(", "));
    setIsMenuModalOpen(true);
  };

  // Save changes from popup to LocalStorage
  const handleSaveMenuChanges = (e) => {
    e.preventDefault();

    const newMenuData = {
      breakfast: {
        timing: bfTiming.trim() || "08:00 AM - 10:00 AM",
        items: bfItemsText.split(",").map((s) => s.trim()).filter(Boolean),
      },
      lunch: {
        timing: lunchTiming.trim() || "12:00 PM - 03:00 PM",
        items: lunchItemsText.split(",").map((s) => s.trim()).filter(Boolean),
      },
      dinner: {
        timing: dinnerTiming.trim() || "07:00 PM - 10:00 PM",
        items: dinnerItemsText.split(",").map((s) => s.trim()).filter(Boolean),
      },
    };

    try {
      localStorage.setItem("annapurna_menu", JSON.stringify(newMenuData));
      setEditableMenu(newMenuData);
      window.dispatchEvent(new Event("storage"));

      setMenuSavedSuccess(true);
      setTimeout(() => {
        setMenuSavedSuccess(false);
        setIsMenuModalOpen(false);
      }, 1200);
    } catch (err) {
      console.error(err);
    }
  };

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "My Mess", icon: CalendarDays },
    { name: "Orders", icon: ClipboardList, badge: String(allOrders.length) },
    { name: "Menu & Schedule", icon: Utensils },
    { name: "Subscription Plans", icon: CreditCard },
    { name: "Reviews", icon: Star },
    { name: "Reports", icon: BarChart3 },
    { name: "Profile", icon: UserRound },
    { name: "Settings", icon: Settings },
  ];

  const stats = [
    {
      title: "Total Orders",
      value: String(allOrders.length + 120),
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
      value: "4.5",
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

  const filteredOrders =
    activeOrderTab === "All"
      ? allOrders
      : allOrders.filter((order) => {
          if (activeOrderTab === "Pending") return order.status === "Pending";
          if (activeOrderTab === "Confirmed") return order.status === "Confirmed";
          if (activeOrderTab === "Preparing") return order.status === "Preparing";
          if (activeOrderTab === "Completed") return order.status === "Completed";
          return true;
        });

  const statusStyle = (status) => {
    if (status === "Completed") return "bg-purple-50 text-purple-700 border border-purple-200";
    if (status === "Confirmed") return "bg-emerald-50 text-emerald-600 border border-emerald-200";
    if (status === "Preparing") return "bg-blue-50 text-blue-600 border border-blue-200";
    return "bg-orange-50 text-orange-600 border border-orange-200";
  };

  return (
    <div className="min-h-screen bg-[#f8f9fd] text-[#14245c] relative">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[200px] flex-col overflow-hidden bg-[#11162f] text-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[88px] items-center gap-3 px-5">
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-[#7350ff] to-[#9b68ff] shadow-lg shadow-purple-900/40">
            <span className="text-[27px]">🎓</span>
          </div>

          <div>
            <div className="text-[17px] font-extrabold">Studentica.</div>
            <div className="mt-1 text-[11px] text-white/65">Campus Hub</div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto rounded-lg p-1 text-white/70 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

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
                    if (item.name === "Menu & Schedule") {
                      handleOpenUpdateModal();
                    }
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[12px] transition cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-[#7043ed] to-[#4c35c8] font-semibold shadow-lg shadow-purple-900/30"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={19} strokeWidth={1.8} />
                  <span className="flex-1 whitespace-nowrap">{item.name}</span>
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

        <div className="relative mt-auto h-[240px] overflow-hidden">
          <div className="absolute left-[32px] top-[20px] rotate-[-7deg] text-[18px] font-semibold italic leading-tight text-[#b98cff]">
            Good Food<br />Happy Students<br />
            <span className="ml-12 text-[22px]">⌣</span>
          </div>
          <div className="absolute bottom-[35px] left-[38px] text-[28px]">🍲</div>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <main className="min-h-screen lg:ml-[200px]">
        {/* HEADER */}
        <header className="sticky top-0 z-30 flex h-[74px] items-center gap-4 border-b border-[#ececf4] bg-white/95 px-4 backdrop-blur sm:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl p-2 hover:bg-[#f3f1ff] lg:hidden"
          >
            <Menu size={22} />
          </button>

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

          <div className="ml-auto flex items-center gap-4">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-[#f5f2ff] cursor-pointer"
            >
              <Bell size={21} className="text-[#17245d]" />
              <span className="absolute right-[3px] top-[1px] flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#e7284d] px-1 text-[9px] font-bold text-white">
                {allOrders.length}
              </span>
            </button>

            <div className="hidden h-8 w-px bg-[#e7e8ef] sm:block" />

            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Ramesh Patil"
                className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
              />
              <div className="hidden sm:block">
                <div className="text-[12px] font-bold text-[#182c72]">Ramesh Patil</div>
                <div className="text-[10px] text-[#66749d]">Annapurna Owner</div>
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT BODY */}
        <div className="px-4 py-4 sm:px-5 lg:px-6">
          <div
            className="grid items-start gap-4"
            style={{ gridTemplateColumns: "minmax(0,1fr) 220px" }}
          >
            {/* LEFT MAIN COLUMN */}
            <div className="min-w-0 space-y-4">
              {/* HERO BANNER */}
              <section className="relative min-h-[220px] overflow-hidden rounded-2xl border border-[#f0dfcf] bg-gradient-to-r from-[#ffbf61] via-[#ffca72] to-[#ffae45] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
                  alt="Indian thali food"
                  className="absolute right-[12%] top-0 h-full w-[53%] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffc76d] via-[#ffc36a]/90 to-transparent" />

                <div className="relative z-10 flex min-h-[220px] flex-col justify-center px-5 py-6 sm:px-7">
                  <div className="mb-3 inline-flex w-fit items-center rounded-full bg-white/20 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-sm">
                    MESS VENDOR DASHBOARD
                  </div>

                  <h1 className="max-w-[420px] text-[25px] font-extrabold leading-tight text-[#14245c] sm:text-[29px]">
                    Welcome back, Ramesh!
                    <span className="ml-2">👋</span>
                  </h1>

                  <p className="mt-2 max-w-[390px] text-[12px] font-medium leading-relaxed text-[#24325f]">
                    Manage your mess, track orders and keep your students happy!
                  </p>

                  <div className="mt-4 flex w-fit items-center gap-3 rounded-2xl bg-white/90 px-3 py-2.5 shadow-sm backdrop-blur">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff3e1]">
                      <MapPin size={18} className="text-[#4e39c7]" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-[#2a3767]">Annapurna Mess</div>
                      <div className="mt-0.5 text-[9px] text-[#69779e]">Near Main Gate</div>
                    </div>
                    <span className="ml-2 flex items-center gap-1 rounded-full bg-[#dcfaeb] px-2 py-1 text-[8px] font-bold text-[#15935c]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#20bd72]" />
                      Active
                    </span>
                  </div>
                </div>

                <div className="absolute right-[15px] top-[36px] hidden w-[170px] rounded-2xl bg-[#5b3bd1]/95 p-4 text-white shadow-xl lg:block">
                  <div className="flex items-center gap-2">
                    <div className="text-[25px]">👨‍🍳</div>
                    <div className="text-[14px] font-extrabold">Keep It Fresh!</div>
                  </div>
                  <p className="mt-2 text-[10px] leading-relaxed text-white/90">
                    Healthy food builds brighter futures.
                  </p>
                  <button
                    type="button"
                    onClick={handleOpenUpdateModal}
                    className="mt-4 flex w-full items-center justify-center gap-1 rounded-full bg-[#32239d] hover:bg-[#251885] py-2 text-[9px] font-bold transition cursor-pointer"
                  >
                    View Menu →
                  </button>
                </div>
              </section>

              {/* STATS */}
              <section className="grid grid-cols-4 gap-3">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.title}
                      className={`relative min-w-0 overflow-hidden rounded-2xl border border-white bg-gradient-to-br ${stat.cardBg} p-4 shadow-sm`}
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${stat.iconBg}`}>
                        <Icon size={20} className={stat.iconColor} />
                      </div>
                      <div className="mt-3 text-[11px] font-semibold text-[#25366b]">{stat.title}</div>
                      <div className="mt-1 text-[26px] font-extrabold text-[#14245c]">{stat.value}</div>
                      <div className="mt-2 flex items-center gap-1.5 text-[8px]">
                        {stat.direction === "up" ? (
                          <TrendingUp size={11} className="text-[#17a76a]" />
                        ) : (
                          <TrendingDown size={11} className="text-[#e52f54]" />
                        )}
                        <span className={stat.direction === "up" ? "font-bold text-[#17a76a]" : "font-bold text-[#e52f54]"}>
                          {stat.change}
                        </span>
                        <span className="text-[#7c89aa]">{stat.changeText}</span>
                      </div>
                      <div className="absolute bottom-2 right-4 text-[42px] opacity-20">{stat.decoration}</div>
                    </div>
                  );
                })}
              </section>

              {/* MIDDLE AREA: ORDERS & MENU */}
              <section className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-3">
                {/* RECENT ORDERS (Includes Dynamic Bookings From Studentica) */}
                <div className="min-w-0 rounded-2xl border border-[#e7e8f2] bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="flex items-center gap-2 text-[14px] font-extrabold text-[#16255d]">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-100">
                          <ClipboardList size={15} className="text-pink-600" />
                        </span>
                        Recent Orders
                      </h2>
                      <p className="mt-1 text-[9px] text-[#8a96b1]">Latest orders &amp; pass bookings from students</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveOrderTab("All")}
                      className="flex items-center gap-1 text-[9px] font-semibold text-[#4935cf] cursor-pointer hover:underline"
                    >
                      View All →
                    </button>
                  </div>

                  <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1">
                    {["All", "Pending", "Confirmed", "Preparing", "Completed"].map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveOrderTab(tab)}
                        className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[8px] font-bold cursor-pointer ${
                          activeOrderTab === tab ? "bg-[#5a3bd1] text-white" : "bg-[#f5f5fb] text-[#66749b]"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="mt-2 space-y-1 max-h-[310px] overflow-y-auto pr-1">
                    {filteredOrders.slice(0, 7).map((order, idx) => (
                      <div
                        key={order.id || idx}
                        className="flex items-center gap-2.5 border-b border-[#f0f0f5] py-2.5 last:border-0"
                      >
                        <img
                          src={order.image}
                          alt={order.student}
                          className="h-9 w-9 rounded-full object-cover ring-2 ring-purple-100 shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-[10px] font-bold text-[#253568]">{order.student}</div>
                          <div className="text-[8px] text-[#8190ae] truncate">{order.meal}</div>
                          <div className="text-[7px] text-[#9aa4bd]">{order.time}</div>
                        </div>
                        <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[8px] font-bold ${statusStyle(order.status)}`}>
                          {order.status}
                        </span>
                        <div className="w-[50px] text-right text-[10px] font-bold text-[#1f3370] shrink-0">{order.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TODAY MENU */}
                <div className="grid min-w-0 grid-rows-[auto_auto] gap-3">
                  <div className="rounded-2xl border border-[#e7e8f2] bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="flex items-center gap-2 text-[14px] font-extrabold text-[#16255d]">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100">
                            <CalendarDays size={15} className="text-purple-600" />
                          </span>
                          Today&apos;s Menu
                        </h2>
                      </div>

                      <button
                        type="button"
                        onClick={handleOpenUpdateModal}
                        className="flex items-center gap-1 text-[8px] font-semibold text-[#4935cf] cursor-pointer hover:underline"
                      >
                        View Full Menu →
                      </button>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {/* Breakfast */}
                      <div className="overflow-hidden rounded-xl border border-[#f1dfc5] bg-[#fff8e9]/50 p-2.5">
                        <div className="text-[9px] font-black text-orange-600">Breakfast</div>
                        <div className="text-[7px] text-[#7180a2] mt-0.5">{editableMenu.breakfast.timing}</div>
                        <div className="mt-2 space-y-0.5">
                          {editableMenu.breakfast.items.map((item, idx) => (
                            <div key={idx} className="truncate text-[7px] font-medium text-[#40517f]">
                              • {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Lunch */}
                      <div className="overflow-hidden rounded-xl border border-[#f1dfc5] bg-[#fff2eb]/50 p-2.5">
                        <div className="text-[9px] font-black text-orange-600">Lunch</div>
                        <div className="text-[7px] text-[#7180a2] mt-0.5">{editableMenu.lunch.timing}</div>
                        <div className="mt-2 space-y-0.5">
                          {editableMenu.lunch.items.map((item, idx) => (
                            <div key={idx} className="truncate text-[7px] font-medium text-[#40517f]">
                              • {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dinner */}
                      <div className="overflow-hidden rounded-xl border border-[#e3d8fa] bg-[#f8efff]/50 p-2.5">
                        <div className="text-[9px] font-black text-purple-600">Dinner</div>
                        <div className="text-[7px] text-[#7180a2] mt-0.5">{editableMenu.dinner.timing}</div>
                        <div className="mt-2 space-y-0.5">
                          {editableMenu.dinner.items.map((item, idx) => (
                            <div key={idx} className="truncate text-[7px] font-medium text-[#40517f]">
                              • {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BAR CHART: ORDERS OVERVIEW */}
                  <div className="rounded-2xl border border-[#e7e8f2] bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h2 className="flex items-center gap-2 text-[14px] font-extrabold text-[#16255d]">
                        <BarChart3 size={18} className="text-purple-600" />
                        Orders Overview
                      </h2>
                    </div>

                    <div className="mt-4 flex items-end justify-between gap-2 h-24 px-2">
                      {[
                        { day: "Mon", h: "45%" },
                        { day: "Tue", h: "70%" },
                        { day: "Wed", h: "55%" },
                        { day: "Thu", h: "85%" },
                        { day: "Fri", h: "60%" },
                        { day: "Sat", h: "95%" },
                        { day: "Sun", h: "75%" },
                      ].map((bar) => (
                        <div key={bar.day} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                          <div
                            style={{ height: bar.h }}
                            className="w-full bg-[#633ce2] rounded-t-lg transition-all duration-500"
                          />
                          <span className="text-[8px] font-bold text-[#8a96af]">{bar.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT ASIDE: QUICK ACTIONS & OFFERS */}
            <aside className="min-w-0 space-y-3">
              {/* QUICK ACTIONS */}
              <section className="rounded-2xl border border-[#e7e8f2] bg-white p-3.5 shadow-sm">
                <h2 className="flex items-center gap-1.5 text-xs font-black text-[#16255d]">
                  <span className="text-amber-500">⚡</span>
                  Quick Actions
                </h2>

                <div className="mt-3 space-y-2">
                  {/* Action 1: Update Menu Popup Trigger */}
                  <button
                    type="button"
                    onClick={handleOpenUpdateModal}
                    className="group flex w-full items-center gap-2.5 rounded-xl border border-[#e8e9f1] bg-white p-2.5 text-left transition hover:border-[#d5cdfb] hover:bg-[#faf9ff] cursor-pointer"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                      <ClipboardCheck size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[9px] font-black text-[#26366d]">Update Menu</div>
                      <div className="truncate text-[7px] text-[#8994ad]">Change today&apos;s menu</div>
                    </div>
                  </button>

                  {/* Action 2: Manage Orders */}
                  <button
                    type="button"
                    onClick={() => setActiveOrderTab("All")}
                    className="group flex w-full items-center gap-2.5 rounded-xl border border-[#e8e9f1] bg-white p-2.5 text-left transition hover:border-[#d5cdfb] hover:bg-[#faf9ff] cursor-pointer"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                      <ClipboardList size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[9px] font-black text-[#26366d]">Manage Orders</div>
                      <div className="truncate text-[7px] text-[#8994ad]">View &amp; update orders</div>
                    </div>
                  </button>

                  {/* Action 3: Add Special Offer */}
                  <button
                    type="button"
                    onClick={() => alert("Special student offer applied to student page!")}
                    className="group flex w-full items-center gap-2.5 rounded-xl border border-[#e8e9f1] bg-white p-2.5 text-left transition hover:border-[#d5cdfb] hover:bg-[#faf9ff] cursor-pointer"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                      <Users size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[9px] font-black text-[#26366d]">Add Special Offer</div>
                      <div className="truncate text-[7px] text-[#8994ad]">Attract more students</div>
                    </div>
                  </button>
                </div>
              </section>

              {/* SPECIAL OFFER CARD */}
              <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#fff1dd] to-[#fff8ed] p-4 shadow-sm border border-orange-100">
                <span className="inline-flex rounded-full bg-[#ff3b30] px-2 py-0.5 text-[8px] font-black text-white">
                  SPECIAL OFFER
                </span>
                <h3 className="mt-2 text-base font-black text-[#19285f]">
                  10% OFF
                </h3>
                <p className="text-[10px] font-bold text-slate-500">on all meals</p>

                <div className="mt-3 h-24 rounded-xl overflow-hidden border border-orange-100">
                  <img
                    src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&auto=format&fit=crop&q=80"
                    alt="Indian Thali"
                    className="w-full h-full object-cover"
                  />
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>

      {/* =====================================================
          POPUP MODAL: UPDATE DAILY MENU (BREAKFAST / LUNCH / DINNER)
      ====================================================== */}
      {isMenuModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full border border-slate-100 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-xl shadow-xs">
                  🍳
                </div>
                <div>
                  <h3 className="text-base font-black text-[#14245c]">
                    Update Daily Menu
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold">
                    Updates sync directly to Annapurna Mess page on Studentica
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
              {/* Breakfast Block */}
              <div className="p-3.5 rounded-2xl bg-[#fff8e9]/80 border border-orange-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-black">🥞 Breakfast Dishes</span>
                  <input
                    type="text"
                    value={bfTiming}
                    onChange={(e) => setBfTiming(e.target.value)}
                    placeholder="Timing"
                    className="text-[10px] bg-white border border-orange-200 rounded-lg px-2 py-0.5 text-slate-600 w-36 text-right font-semibold"
                  />
                </div>
                <textarea
                  rows={2}
                  value={bfItemsText}
                  onChange={(e) => setBfItemsText(e.target.value)}
                  placeholder="Dishes (comma separated e.g. Poha, Upma, Tea)"
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#7043ed]"
                />
              </div>

              {/* Lunch Block */}
              <div className="p-3.5 rounded-2xl bg-[#fff2eb]/80 border border-red-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-black">🍲 Lunch Dishes</span>
                  <input
                    type="text"
                    value={lunchTiming}
                    onChange={(e) => setLunchTiming(e.target.value)}
                    placeholder="Timing"
                    className="text-[10px] bg-white border border-red-200 rounded-lg px-2 py-0.5 text-slate-600 w-36 text-right font-semibold"
                  />
                </div>
                <textarea
                  rows={2}
                  value={lunchItemsText}
                  onChange={(e) => setLunchItemsText(e.target.value)}
                  placeholder="Dishes (comma separated e.g. Paneer Bhurji, Dal Tadka, Chapati)"
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#7043ed]"
                />
              </div>

              {/* Dinner Block */}
              <div className="p-3.5 rounded-2xl bg-[#f8efff]/80 border border-purple-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-black">🍛 Dinner Dishes</span>
                  <input
                    type="text"
                    value={dinnerTiming}
                    onChange={(e) => setDinnerTiming(e.target.value)}
                    placeholder="Timing"
                    className="text-[10px] bg-white border border-purple-200 rounded-lg px-2 py-0.5 text-slate-600 w-36 text-right font-semibold"
                  />
                </div>
                <textarea
                  rows={2}
                  value={dinnerItemsText}
                  onChange={(e) => setDinnerItemsText(e.target.value)}
                  placeholder="Dishes (comma separated e.g. Chole Masala, Veg Pulav, Roti)"
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#7043ed]"
                />
              </div>

              {/* Form Buttons */}
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
                  className={`flex-1 py-3 rounded-2xl text-white font-extrabold shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    menuSavedSuccess ? "bg-emerald-600" : "bg-[#7043ed] hover:bg-[#5a32d1]"
                  }`}
                >
                  {menuSavedSuccess ? (
                    <>
                      <Check size={16} />
                      <span>Updated &amp; Broadcasted!</span>
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      <span>Save &amp; Publish Menu</span>
                    </>
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