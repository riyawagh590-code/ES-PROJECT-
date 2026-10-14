"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Search,
  Coffee,
  MapPin,
  Clock,
  Phone,
  Star,
  ChevronDown,
  RotateCcw,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Home as HomeIcon,
  Utensils,
  Building,
  Shirt,
  Users,
  Award,
  Bell,
  User,
  Settings,
  MessageCircle,
  Loader2,
} from "lucide-react";

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80",
];

export default function StudentCafesPage() {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [foodType, setFoodType] = useState({ veg: true, nonVeg: true, both: true });
  const [selectedFoodType, setSelectedFoodType] = useState("All Types");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All Ranges");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [selectedSort, setSelectedSort] = useState("Rating");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPrice, setMaxPrice] = useState(400);
  useEffect(() => {
    async function fetchCafes() {
      try {
        setLoading(true);
        const res = await fetch("/api/cafes");
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setCafes(json.data);
        } else {
          setError(json.message || "Failed to load cafes.");
        }
      } catch (err) {
        setError(err.message || "Network error loading cafes.");
      } finally {
        setLoading(false);
      }
    }

    fetchCafes();
  }, []);

  const sidebarLinks = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "Mess", href: "/student/mess", icon: Utensils },
    { label: "Hostel / PG", href: "/student/pg", icon: Building },
    { label: "Cafe", href: "/student/cafes", icon: Coffee, active: true },
    { label: "Laundry", href: "/student/laundry", icon: Shirt },
    { label: "Housekeeping", href: "/student/cleaning", icon: Sparkles },
    { label: "Roommate Finder", href: "/student/roommates", icon: Users },
    { label: "Freshers Pass", href: "/pass", icon: Award },
    { label: "About", href: "/student/about", icon: Bell },
    { label: "Profile", href: "/student/profile", icon: User },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  // Client-side filtering over MongoDB live data
// Client-side filtering over MongoDB live data (All filters connected)
  // Combined Search, Food Type, Rating & Price Filtering
  const filteredCafes = cafes.filter((c) => {
    // 1. Search (Matches cafe_name or location)
    const cleanSearch = searchTerm.trim().toLowerCase();
    const nameMatch = (c.cafe_name || "").toLowerCase().includes(cleanSearch);
    const locationMatch = (c.location || "").toLowerCase().includes(cleanSearch);
    const matchesSearch = cleanSearch === "" || nameMatch || locationMatch;

    // 2. Food Type (Dropdown + Checkboxes)
    const rawType = (c.food_type || "veg").trim().toLowerCase();
    let matchesDropdown = true;
    if (
      selectedFoodType !== "All Types" &&
      selectedFoodType !== "Food Type" &&
      selectedFoodType !== ""
    ) {
      matchesDropdown = rawType.includes(selectedFoodType.toLowerCase());
    }

    // Checkbox support (Veg / Non-Veg / Both)
    let matchesCheckbox = false;
    if (foodType.veg && foodType.nonVeg && foodType.both) {
      matchesCheckbox = true;
    } else {
      if (foodType.veg && rawType.includes("veg") && !rawType.includes("non")) matchesCheckbox = true;
      if (foodType.nonVeg && rawType.includes("non")) matchesCheckbox = true;
      if (foodType.both && (rawType.includes("both") || rawType === "")) matchesCheckbox = true;
    }

    const matchesFoodType = matchesDropdown && matchesCheckbox;

    // 3. Rating Dropdown ("All Ratings", "4.5 & above", "4.0 & above")
    let matchesRating = true;
    const ratingNum = parseFloat(c.rating) || 0;
    if (selectedRating === "4.5 & above") {
      matchesRating = ratingNum >= 4.5;
    } else if (selectedRating === "4.0 & above") {
      matchesRating = ratingNum >= 4.0;
    }

    // 4. Price Slider
    let matchesPrice = true;
    if (c.price_range) {
      const numbers = c.price_range.match(/\d+/g);
      if (numbers && numbers.length > 0) {
        const highestPrice = Number(numbers[numbers.length - 1]);
        matchesPrice = highestPrice <= maxPrice;
      }
    }

    return matchesSearch && matchesFoodType && matchesRating && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-[#FAF9FD] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
      {/* HERO BANNER */}
      <section className="max-w-[1550px] mx-auto px-4 md:px-6 pt-5 pb-3">
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#FFF1F2] via-[#FDF2F8] to-[#F5F3FF] border border-rose-100/70 p-8 md:p-10 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="absolute top-6 left-1/3 hidden md:block text-[#6C47FF] font-bold text-xs rotate-[-8deg] pointer-events-none select-none">
            Good Food <br /> Better Mood ッ
          </div>

          <div className="space-y-4 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider">
              <Coffee className="w-3.5 h-3.5" />
              Food & Dining
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Explore the Best Cafes <br />
              <span className="text-[#6C47FF]">Near Your Campus</span>
            </h1>

            <p className="text-xs md:text-sm font-medium text-slate-600 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Great food</span> • 
              <span>Chill vibes</span> • 
              <span>Student friendly prices</span>
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-8 ring-amber-100/60 bg-amber-50">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"
                alt="Cafe Latte Art with Cake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-72 rounded-[28px] bg-gradient-to-br from-[#818CF8] via-[#6366F1] to-[#4F46E5] p-6 text-white shadow-xl space-y-2 z-10 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                <Coffee className="w-4 h-4 text-white" />
              </div>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 block pt-1">
              Student Special
            </span>

            <h4 className="text-base font-black leading-tight">
              Get <span className="text-amber-300">10% OFF</span> <br />
              on your first order!
            </h4>

            <div className="pt-2">
              <Link
                href="/student/cafes"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition backdrop-blur-md"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN WORKSPACE */}
      <section className="max-w-[1550px] mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          
          {/* Left Sidebar: Filters */}
          <aside className="xl:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-slate-900 font-extrabold text-sm">
                <SlidersHorizontal className="w-4 h-4 text-[#6C47FF]" />
                Filters
              </div>

              {/* Food Type */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-800 block">Food Type</label>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={foodType.veg}
                      onChange={(e) => setFoodType({ ...foodType, veg: e.target.checked })}
                      className="rounded accent-[#6C47FF]"
                    />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                    <span>Veg</span>
                  </label>

                  <label className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={foodType.nonVeg}
                      onChange={(e) => setFoodType({ ...foodType, nonVeg: e.target.checked })}
                      className="rounded accent-[#6C47FF]"
                    />
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span>Non-Veg</span>
                  </label>

                  <label className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={foodType.both}
                      onChange={(e) => setFoodType({ ...foodType, both: e.target.checked })}
                      className="rounded accent-[#6C47FF]"
                    />
                    <span className="w-3 h-3 rounded-full bg-purple-500 inline-block" />
                    <span>Both</span>
                  </label>
                </div>
              </div>

              {/* Price Range */}
              {/* Price Range */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-800 block">
                  Price Range <span className="font-normal text-[10px] text-slate-400">(per person)</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="400"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#6C47FF] cursor-pointer"
                />
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span>Up to ₹{maxPrice}</span>
                  <span>₹400</span>
                </div>
              </div>

              <button
              onClick={() => {
              setSearchTerm("");
              setSelectedFoodType("All Types");
              setSelectedRating("All Ratings");
              setMaxPrice(400);
              setFoodType({ veg: true, nonVeg: true, both: true });
  }}
  className="w-full py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-extrabold shadow-md shadow-purple-200 transition"
>
  Reset Filters
</button>
            </div>

            <div className="rounded-3xl p-5 bg-[#FFF4EE] border border-orange-100 text-center space-y-2 shadow-sm">
              <div className="text-xs font-bold text-rose-500 rotate-[-4deg]">
                Good Food <br /> Good Vibes! ッ
              </div>
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">
                ☕
              </div>
            </div>
          </aside>

          {/* Center Main: Cafes */}
          <main className="xl:col-span-7 space-y-5">
            {/* Search Bar & Dropdowns */}
            <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200/70 rounded-xl flex-1 min-w-[180px]">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search cafes by name or location..."
                  className="w-full text-xs font-semibold text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                />
              </div>

              <div className="relative min-w-[120px]">
                <select
                  value={selectedFoodType}
                  onChange={(e) => setSelectedFoodType(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
                >
                  <option>All Types</option>
                  <option>Veg</option>
                  <option>Non-Veg</option>
                  <option>Both</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
              </div>

              <div className="relative min-w-[120px]">
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
                >
                  <option>All Ratings</option>
                  <option>4.5 & above</option>
                  <option>4.0 & above</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">
                {filteredCafes.length} Cafes Available
              </span>
            </div>

            {/* Loading / Error / Data View */}
            {loading ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 flex flex-col items-center justify-center gap-3">
                <Loader2 className="w-6 h-6 animate-spin text-[#6C47FF]" />
                <p className="text-xs font-bold text-slate-500">Loading cafes from MongoDB Atlas...</p>
              </div>
            ) : error ? (
              <div className="bg-rose-50 text-rose-600 rounded-3xl p-6 text-center text-xs font-bold border border-rose-100">
                {error}
              </div>
            ) : filteredCafes.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100">
                <p className="text-xs font-bold text-slate-500">No cafes match your current search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCafes.map((item, idx) => (
                  <div
                    key={item._id || item.custom_id || idx}
                    className="bg-white rounded-3xl p-3.5 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Container */}
                      <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-3">
                        <img
                          src={FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length]}
                          alt={item.cafe_name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Food Type Badge */}
                        <span className="absolute top-2.5 left-2.5 flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-md bg-emerald-600 text-white shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          {item.food_type ? item.food_type.toUpperCase() : "VEG"}
                        </span>

                        {/* Rating Pill */}
                        <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md rounded-full px-2.5 py-0.5 flex items-center gap-1 shadow-sm">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                          <span className="text-[11px] font-black text-slate-900">
                            {Number(item.rating || 5).toFixed(1)}
                          </span>
                        </div>
                      </div>

                      {/* Cafe Info */}
                      <div className="px-1 space-y-1.5">
                        <h4 className="text-sm font-black text-slate-900 leading-snug line-clamp-1">
                          {item.cafe_name}
                        </h4>
                        <p className="text-[11px] text-slate-400 flex items-start gap-1 line-clamp-2 leading-relaxed">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                          <span>{item.location}</span>
                        </p>

                        <div className="pt-1 space-y-1 text-[11px] text-slate-500 font-medium">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                            <span>{item.timings || "Open Now"}</span>
                            <span className="text-slate-300">•</span>
                            <span className="font-bold text-slate-700">
                              {item.price_range || "₹100-300"}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500 truncate">
                            <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                            <span>{item.contact || "Direct Visit"}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 px-1 grid grid-cols-2 gap-2">
                      <Link
                       href="/student/cafes/cafe24"
                      className="w-full py-2.5 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition shadow-sm"
                      >
                     <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                       </Link>
                      <a
                        href={item.contact && item.contact.startsWith("+") ? `tel:${item.contact}` : "#"}
                        className="py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold flex items-center justify-center gap-1 transition"
                      >
                        <Phone className="w-3 h-3 text-slate-500" />
                        Call
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>

          {/* Right Sidebar: Quick Nav */}
          <aside className="hidden xl:flex flex-col w-64 bg-white rounded-3xl p-5 border border-slate-100 shadow-sm shrink-0 sticky top-24 space-y-6">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 px-2">
                Quick Nav
              </h4>
              <nav className="space-y-1">
                {sidebarLinks.map((navItem, idx) => {
                  const Icon = navItem.icon;
                  return (
                    <Link
                      key={idx}
                      href={navItem.href}
                      className={`flex items-center gap-3 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all ${
                        navItem.active
                          ? "bg-[#6C47FF] text-white shadow-md shadow-purple-200"
                          : "text-slate-600 hover:bg-purple-50 hover:text-[#6C47FF]"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{navItem.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="rounded-2xl p-4 bg-purple-50 border border-purple-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <h4 className="text-xs font-black text-slate-900">Need Help?</h4>
                  <p className="text-[10px] text-slate-500">Chat with us</p>
                </div>
              </div>
              <Link
                href="/support"
                className="w-full py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Live Chat
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-white border-t border-slate-100 py-8 px-6 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#6C47FF] flex items-center justify-center text-white">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="font-black text-slate-900 text-sm block">Studentica.</span>
              <span className="text-[10px] text-slate-400">Campus Hub</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-900 transition">About Us</Link>
            <Link href="/support" className="hover:text-slate-900 transition">Help & Support</Link>
            <Link href="/privacy" className="hover:text-slate-900 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}