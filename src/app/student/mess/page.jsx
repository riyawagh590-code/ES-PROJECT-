"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import {
  GraduationCap,
  Search,
  Bell,
  MapPin,
  Star,
  Sparkles,
  Utensils,
  Headphones,
  SlidersHorizontal,
  Home as HomeIcon,
  Shirt,
  Sparkle,
  Coffee,
  UserCheck,
  Check,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Tag,
  ThumbsUp,
  Grid,
  Building,
  Users,
  Award,
  User,
  Settings,
  MessageCircle,
} from "lucide-react";

export default function StudentMessPage() {
  const [messType, setMessType] = useState({ veg: true, nonVeg: false, jain: false });
  const [priceRange, setPriceRange] = useState(3000);
  const [selectedSort, setSelectedSort] = useState("Rating");

  const sidebarLinks = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "Services", href: "/student/services", icon: Grid },
    { label: "Mess", href: "/student/mess", icon: Utensils, active: true },
    { label: "Hostel / PG", href: "/student/pg", icon: Building },
    { label: "Restaurant", href: "/student/cafes", icon: Utensils },
    { label: "Cafe", href: "/student/cafes", icon: Coffee },
    { label: "Laundry", href: "/student/laundry", icon: Shirt },
    { label: "Housekeeping", href: "/student/cleaning", icon: Sparkles },
    { label: "Roommate Finder", href: "/student/roommates", icon: Users },
    { label: "Freshers Pass", href: "/pass", icon: Award },
    { label: "Notices", href: "/student/notices", icon: Bell },
    { label: "Profile", href: "/student/profile", icon: User },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  const messes = [
    {
      id: "annapurna",
      name: "Annapurna Homely Mess",
      type: "Veg",
      tag: "Popular",
      tagColor: "bg-[#FF2E93] text-white",
      rating: "4.5",
      reviews: "312",
      location: "Opp. MIT - ACSC college",
      price: "1,900",
      features: ["Home Style Food", "Clean Hygienic", "Student Friendly"],
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "shree-sai",
      name: "Shree Sai Mess",
      type: "Veg",
      rating: "4.2",
      reviews: "198",
      location: "MIT- AOE Road",
      price: "1,800",
      features: ["Tasty Meals", "Clean Kitchen", "Good Location"],
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "sneham",
      name: "Sneham Mess",
      type: "Veg",
      rating: "4.0",
      reviews: "146",
      location: "Snesparsh Residency, DuDulgaon",
      price: "2,000",
      features: ["Homely Food", "Spacious Dining", "Student Friendly"],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "saatvik",
      name: "Saatvik Mess",
      type: "Veg",
      rating: "4.3",
      reviews: "210",
      location: "Near MIT girls hostel",
      price: "1,600",
      features: ["Pure Veg", "Hygienic", "Affordable"],
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "moms-kitchen",
      name: "Moms Kitchen",
      type: "Veg",
      rating: "4.1",
      reviews: "170",
      location: "MIT- AOE Road",
      price: "1,700",
      features: ["Healthy Food", "Regular Menu", "Friendly Staff"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "gokul-catering",
      name: "Gokul Mess & Catering",
      type: "Non-Veg",
      rating: "4.2",
      reviews: "156",
      location: "Dehu - Alandi Rd, Vishweshwar Nagar",
      price: "1,700",
      features: ["Veg & Non-Veg", "Tasty Food", "Good Hygiene"],
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "yadnya",
      name: "Yadnya Bhojnalay Mess",
      type: "Veg",
      rating: "4.0",
      reviews: "120",
      location: "MIT College Rd, Vishweshwar Nagar",
      price: "1,800",
      features: ["Homely Food", "Clean Kitchen", "Spacious"],
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "gokul-clean",
      name: "Gokul Mess & Catering",
      type: "Veg",
      rating: "4.2",
      reviews: "134",
      location: "Dehu - Alandi Rd, Vishweshwar Nagar",
      price: "1,700",
      features: ["Fresh Food", "Clean & Safe", "Affordable"],
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "swagat",
      name: "Swagat Mess",
      type: "Veg",
      rating: "4.1",
      reviews: "98",
      location: "Dehu Phata",
      price: "1,600",
      features: ["Home Style", "Hygienic", "Good Location"],
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "rudra",
      name: "Rudra Mess",
      type: "Veg",
      rating: "4.0",
      reviews: "92",
      location: "Indrayani Nagar, Pata, Alandi",
      price: "1,800",
      features: ["Tasty Food", "Clean Kitchen", "Friendly Staff"],
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "ruchira",
      name: "Ruchira Khanaval (Mess)",
      type: "Veg",
      rating: "4.2",
      reviews: "118",
      location: "Vishweshwar Nagar, Dehu Phata, Alandi",
      price: "1,700",
      features: ["Homely Food", "Clean Kitchen", "Good Hygiene"],
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "shedge",
      name: "SHEDGE Mess",
      type: "Veg",
      rating: "4.3",
      reviews: "105",
      location: "Near Devkrupa Petrol Pump, Vishweshwar Nagar",
      price: "1,800",
      features: ["Tasty Food", "Clean & Safe", "Affordable"],
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9FD] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
      {/* 1. TOP NAVBAR */}
      <Navbar />

      {/* 2. HERO BANNER */}
      <section className="max-w-[1550px] mx-auto px-4 md:px-6 pt-6 pb-4">
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#FFF1F2] via-[#FDF2F8] to-[#F5F3FF] border border-rose-100/60 p-8 md:p-12 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          {/* Decorative Doodles */}
          <div className="absolute top-6 left-1/3 hidden md:block text-rose-500 text-xs font-bold rotate-[-10deg]">
            Good Food <br /> Good Mood ッ
          </div>

          {/* Left Text */}
          <div className="space-y-4 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider">
              <Utensils className="w-3.5 h-3.5" />
              Food & Mess Services
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Find the Best Messes <br />
              <span className="text-[#6C47FF]">Near Your Campus</span>
            </h1>

            <p className="text-xs md:text-sm font-medium text-slate-600 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Delicious food</span> • 
              <span>Hygienic kitchens</span> • 
              <span>Verified messes</span> • 
              <span>Student-friendly prices</span>
            </p>
          </div>

          {/* Center Circular Indian Thali Graphic */}
          <div className="relative z-10 shrink-0">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-8 ring-rose-200/50">
              <img
                src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&auto=format&fit=crop&q=80"
                alt="Delicious Indian Thali"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Quick Search Box */}
          <div className="w-full lg:w-80 bg-white/90 backdrop-blur-md rounded-3xl p-5 border border-purple-100 shadow-xl space-y-3 z-10">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-2xl px-3 py-2.5">
              <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
              <input
                type="text"
                placeholder="Search messes near your campus..."
                className="w-full text-xs font-semibold text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
              <button className="w-8 h-8 rounded-xl bg-[#201B52] text-white flex items-center justify-center shrink-0 shadow-md">
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Pills */}
            <div className="grid grid-cols-3 gap-1.5 text-[10px] font-bold">
              <button className="py-2 px-1 rounded-xl bg-slate-100 hover:bg-purple-100 text-slate-700 flex items-center justify-center gap-1 transition">
                <MapPin className="w-3 h-3 text-[#6C47FF]" /> Near Me
              </button>
              <button className="py-2 px-1 rounded-xl bg-slate-100 hover:bg-purple-100 text-slate-700 flex items-center justify-center gap-1 transition">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> Best Rated
              </button>
              <button className="py-2 px-1 rounded-xl bg-slate-100 hover:bg-purple-100 text-slate-700 flex items-center justify-center gap-1 transition">
                <span>₹</span> Affordable
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2 text-slate-600">
                <Headphones className="w-3.5 h-3.5 text-[#6C47FF]" />
                <span>Need help? Our support team is always here for you.</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN WORKSPACE: LEFT FILTERS + CENTER MESS CARDS + RIGHT QUICK NAV */}
      <section className="max-w-[1550px] mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* LEFT SIDEBAR: FILTERS */}
          <aside className="xl:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-extrabold text-sm text-slate-900">Filter Messes</h3>
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
              </div>

              {/* Mess Type Checkboxes */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 block">Mess Type</label>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2 text-slate-700">
                      <span className="w-4 h-4 rounded-full border border-emerald-500 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </span>
                      Veg
                    </span>
                    <input
                      type="checkbox"
                      checked={messType.veg}
                      onChange={(e) => setMessType({ ...messType, veg: e.target.checked })}
                      className="rounded accent-[#6C47FF]"
                    />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2 text-slate-700">
                      <span className="w-4 h-4 rounded-full border border-rose-500 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                      </span>
                      Non-Veg
                    </span>
                    <input
                      type="checkbox"
                      checked={messType.nonVeg}
                      onChange={(e) => setMessType({ ...messType, nonVeg: e.target.checked })}
                      className="rounded accent-[#6C47FF]"
                    />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2 text-slate-700">
                      <span className="w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-purple-500" />
                      </span>
                      Jain Food
                    </span>
                    <input
                      type="checkbox"
                      checked={messType.jain}
                      onChange={(e) => setMessType({ ...messType, jain: e.target.checked })}
                      className="rounded accent-[#6C47FF]"
                    />
                  </label>
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 block">
                  Price Range (Monthly)
                </label>
                <input
                  type="range"
                  min="1500"
                  max="3000"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full accent-[#6C47FF] cursor-pointer"
                />
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span>₹1,500</span>
                  <span>₹{priceRange}+</span>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">Rating</label>
                <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                  <input type="checkbox" className="rounded accent-[#6C47FF]" />
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">4+ & above</span>
                </label>
              </div>

              {/* Location Select */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">Location</label>
                <div className="relative">
                  <select className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-2xl p-3 appearance-none focus:outline-none cursor-pointer">
                    <option>Select location</option>
                    <option>Alandi</option>
                    <option>MIT Campus Road</option>
                    <option>Dehu Phata</option>
                    <option>Vishweshwar Nagar</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-extrabold shadow-md shadow-purple-200 transition">
                Apply Filters
              </button>
            </div>

            {/* Bottom Left Doodle Box */}
            <div className="rounded-3xl p-5 bg-[#FFF4EE] border border-orange-100 text-center space-y-2 shadow-sm">
              <div className="text-xs font-extrabold text-indigo-700 rotate-[-4deg]">
                Good Food, Best Vibes! ッ
              </div>
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl">
                🍱
              </div>
              <p className="text-[11px] font-bold text-slate-500 leading-tight">
                Healthy food! <br />
                Happy student ッ <br />
                Better tomorrow!
              </p>
            </div>
          </aside>

          {/* CENTER CONTENT: MESS CARDS */}
          <main className="xl:col-span-7 space-y-5">
            {/* Top Bar with count & sort */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-xl bg-purple-100 text-[#6C47FF] flex items-center justify-center text-xs font-black">
                  🍱
                </span>
                <span className="text-sm font-extrabold text-slate-900">
                  {messes.length} Messes Found
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <span>Sort by</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option>Rating</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Mess Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {messes.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-3.5 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image & Header Tags */}
                    <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Veg / Non-Veg Badge */}
                      <span className="absolute top-2.5 left-2.5 flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-md bg-emerald-600 text-white shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        {item.type}
                      </span>

                      {/* Optional Popular Tag */}
                      {item.tag && (
                        <span
                          className={`absolute bottom-2.5 left-2.5 text-[9px] font-black px-2 py-0.5 rounded-full ${item.tagColor} shadow-sm`}
                        >
                          {item.tag}
                        </span>
                      )}

                      {/* Rating Pill */}
                      <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md rounded-full px-2.5 py-0.5 flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span className="text-[11px] font-black text-slate-900">{item.rating}</span>
                        <span className="text-[10px] text-slate-400">({item.reviews})</span>
                      </div>
                    </div>

                    {/* Title & Location */}
                    <div className="px-1 space-y-1">
                      <h4 className="text-sm font-black text-slate-900 leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        {item.location}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="px-1 pt-2 flex items-baseline gap-1">
                      <span className="text-lg font-black text-slate-900">₹{item.price}</span>
                      <span className="text-[10px] text-slate-400 font-semibold">/month</span>
                    </div>

                    {/* Feature Pills */}
                    <div className="px-1 pt-3 flex flex-wrap gap-1.5">
                      {item.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-[9px] font-semibold text-slate-600 bg-slate-100 rounded-lg px-2 py-1 flex items-center gap-1"
                        >
                          <ShieldCheck className="w-2.5 h-2.5 text-[#6C47FF]" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="pt-4 px-1">
                    <Link
                      href={`/service/${item.id}`}
                      className="w-full py-2.5 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-md shadow-purple-200"
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* RIGHT SIDEBAR: QUICK NAV (Exact match to image) */}
          <aside className="hidden xl:flex flex-col w-64 bg-white rounded-3xl p-5 border border-slate-100 shadow-sm shrink-0 sticky top-24 space-y-6">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 px-2">
                Quick Nav
              </h4>
              <nav className="space-y-1">
                {sidebarLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      className={`flex items-center gap-3 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all ${
                        item.active
                          ? "bg-[#6C47FF] text-white shadow-md shadow-purple-200"
                          : "text-slate-600 hover:bg-purple-50 hover:text-[#6C47FF]"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Need Help Live Chat Card */}
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

      {/* 4. BOTTOM PROMO BANNER */}
      <section className="max-w-[1550px] mx-auto px-4 md:px-6 py-6">
        <div className="relative rounded-[32px] bg-gradient-to-r from-[#6C47FF] via-[#7C3AED] to-[#EC4899] p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
              <Utensils className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-black">Good Food = Better Days!</h3>
              <p className="text-xs text-white/80 mt-0.5">
                Choose your favourite mess and enjoy a healthy & happy campus life.
              </p>
            </div>
          </div>

          <Link
            href="/student/services"
            className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-extrabold flex items-center gap-2 transition shadow-md shrink-0"
          >
            <span className="text-slate-900">Explore All Messes</span>
            <ArrowRight className="w-4 h-4 text-[#6C47FF]" />
          </Link>
        </div>
      </section>

      {/* 5. FOOTER */}
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

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold text-indigo-600 rotate-[-4deg]">
              Stay Connected! ッ
            </span>
            <div className="flex items-center gap-2">
              <button className="w-7 h-7 rounded-full bg-purple-50 text-[#6C47FF] flex items-center justify-center text-xs">
                IG
              </button>
              <button className="w-7 h-7 rounded-full bg-purple-50 text-[#6C47FF] flex items-center justify-center text-xs">
                WA
              </button>
              <button className="w-7 h-7 rounded-full bg-purple-50 text-[#6C47FF] flex items-center justify-center text-xs">
                TG
              </button>
              <button className="w-7 h-7 rounded-full bg-purple-50 text-[#6C47FF] flex items-center justify-center text-xs">
                YT
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}