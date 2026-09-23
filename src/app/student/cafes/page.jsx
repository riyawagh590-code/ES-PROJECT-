"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
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
  Grid,
  Utensils,
  Building,
  Shirt,
  Users,
  Award,
  Bell,
  User,
  Settings,
  MessageCircle,
} from "lucide-react";

export default function StudentCafesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [foodType, setFoodType] = useState({ veg: true, nonVeg: true, both: true });
  const [selectedFoodType, setSelectedFoodType] = useState("All Types");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All Ranges");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [selectedSort, setSelectedSort] = useState("Rating");
  const [currentPage, setCurrentPage] = useState(1);

  const sidebarLinks = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "Services", href: "/student/services", icon: Grid },
    { label: "Mess", href: "/student/mess", icon: Utensils },
    { label: "Hostel / PG", href: "/student/pg", icon: Building },
    { label: "Restaurant", href: "/student/cafes", icon: Utensils },
    { label: "Cafe", href: "/student/cafes", icon: Coffee, active: true },
    { label: "Laundry", href: "/student/laundry", icon: Shirt },
    { label: "Housekeeping", href: "/student/cleaning", icon: Sparkles },
    { label: "Roommate Finder", href: "/student/roommates", icon: Users },
    { label: "Freshers Pass", href: "/pass", icon: Award },
    { label: "Notices", href: "/student/notices", icon: Bell },
    { label: "Profile", href: "/student/profile", icon: User },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  const cafes = [
    {
      id: "cafe-buddys",
      name: "Cafe Buddy's Espresso - Alandi",
      type: "Veg",
      discountBadge: "10% OFF (First Order)",
      discountColor: "bg-[#FF2E93] text-white",
      rating: "5.0",
      location: "College, MITAOE Road, Dehu Phata, Pune 412105",
      hours: "8:00 AM - 11:00 PM",
      price: "₹100-400",
      phone: "+91 8208959471",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "the-elite-space",
      name: "The Elite Space",
      type: "Veg",
      discountBadge: "5% OFF (On Combo)",
      discountColor: "bg-[#F97316] text-white",
      rating: "4.3",
      location: "MIT College Campus, Devachi, Tapkir Nagar, Dehu Phata 412105",
      hours: "7:00 AM - 10:00 PM",
      price: "₹1-200",
      phone: "+91 7040441777",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "the-cafe-24",
      name: "THE CAFE 24",
      type: "Veg",
      discountBadge: "Free Cold Coffee (on ₹300+)",
      discountColor: "bg-[#EF4444] text-white",
      rating: "4.5",
      location: "Tapkir Nagar Dehu-phata, MIT AOE College Road, Alandi 412105",
      hours: "10:00 AM - 9:00 PM",
      price: "₹200-400",
      phone: "contact nhavta tithe",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "cafe-mitram",
      name: "Cafe Mitram",
      type: "Veg",
      discountBadge: "Student Special",
      discountColor: "bg-[#FF5A1F] text-white",
      rating: "4.5",
      location: "Shop No 4, Dehu-Alandi Rd, near MIT College, Tapkir Nagar, Alandi",
      hours: "10:00 AM - 10:00 PM",
      price: "₹200-400",
      phone: "+91 8087742425",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "caffeine-hub",
      name: "Caffeine Hub",
      type: "Veg",
      discountBadge: "Buy 1 Get 1 (Cold Coffee)",
      discountColor: "bg-[#D97706] text-white",
      rating: "4.6",
      location: "opp. MIT college, near Indrayani Co, Vishweshwar Nagar, Dehu Phata, Alandi",
      hours: "10:00 AM - 11:00 PM",
      price: "₹1-200",
      phone: "+91 9763301691",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "cafe-love-shove",
      name: "Cafe Love Shove",
      type: "Veg",
      discountBadge: "Free Dessert (on ₹250+)",
      discountColor: "bg-[#F43F5E] text-white",
      rating: "5.0",
      location: "opposite MIT college, Vishweshwar Nagar, Alandi",
      hours: "9:00 AM - 10:00 PM",
      price: "₹200-400",
      phone: "+91 9112225113",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "first-way-cafe",
      name: "FIRST WAY CAFE",
      type: "Veg",
      discountBadge: "10% OFF (On Orders Above ₹200)",
      discountColor: "bg-[#E11D48] text-white",
      rating: "5.0",
      location: "first floor, Dehu-Alandi Rd, near MIT college, Vishweshwar Nagar, Dehu Phata, Alandi",
      hours: "10:00 AM - 10:00 PM",
      price: "₹1-300",
      phone: "+91 9371971123",
      image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "cafe-hangout",
      name: "Cafe Hangout",
      type: "Veg",
      discountBadge: "Combo Offer",
      discountColor: "bg-[#EA580C] text-white",
      rating: "5.0",
      location: "shop no 1, second floor, Appa G Complex, Pune-Alandi Rd, above Mom's Kitchen, near MIT",
      hours: "10:00 AM - 10:00 PM",
      price: "₹1-200",
      phone: "—",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "cafe-creme",
      name: "CAFE CREME",
      type: "Veg",
      discountBadge: "5% OFF (On ₹200+)",
      discountColor: "bg-[#DC2626] text-white",
      rating: "4.0",
      location: "shop no 2, Asora Tirhtraj Complex, Alandi Devachi, near MIT College, Dehu Phata",
      hours: "11:00 AM - 11:00 PM",
      price: "₹1-200",
      phone: "+91 9850339525",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "hideout-cafe",
      name: "Hideout Cafe",
      type: "Veg",
      discountBadge: "Student Special",
      discountColor: "bg-[#E11D48] text-white",
      rating: "4.3",
      location: "Near MIT ACSC, opposite Mathura Sweet, Dehu-Alandi Rd, Alandi",
      hours: "9:30 AM - 9:30 PM",
      price: "₹1-300",
      phone: "—",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9FD] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
      {/* 1. TOP NAVBAR */}
      <Navbar />

      {/* 2. HERO BANNER */}
      <section className="max-w-[1550px] mx-auto px-4 md:px-6 pt-5 pb-3">
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#FFF1F2] via-[#FDF2F8] to-[#F5F3FF] border border-rose-100/70 p-8 md:p-10 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          {/* Top Doodle Annotation */}
          <div className="absolute top-6 left-1/3 hidden md:block text-[#6C47FF] font-bold text-xs rotate-[-8deg] pointer-events-none select-none">
            Good Food <br /> Better Mood ッ
          </div>

          {/* Left Text Content */}
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

          {/* Center Circular Coffee Graphic */}
          <div className="relative z-10 shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-8 ring-amber-100/60 bg-amber-50">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"
                alt="Cafe Latte Art with Cake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Student Special Card */}
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
                href="/services"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition backdrop-blur-md"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN WORKSPACE: LEFT FILTERS + CENTER CAFE CARDS + RIGHT QUICK NAV */}
      <section className="max-w-[1550px] mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Left Sidebar: Filters */}
          <aside className="xl:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-slate-900 font-extrabold text-sm">
                <SlidersHorizontal className="w-4 h-4 text-[#6C47FF]" />
                Filters
              </div>

              {/* Food Type Checkboxes */}
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
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-800 block">
                  Price Range <span className="font-normal text-[10px] text-slate-400">(per person)</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="400"
                  defaultValue="400"
                  className="w-full accent-[#6C47FF] cursor-pointer"
                />
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span>₹1 - 100</span>
                  <span>₹400+</span>
                </div>
              </div>

              {/* Timings */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-800 block">Timings</label>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                    <input type="checkbox" className="rounded accent-[#6C47FF]" />
                    <span>Breakfast (6AM - 11AM)</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                    <input type="checkbox" className="rounded accent-[#6C47FF]" />
                    <span>Lunch (11AM - 3PM)</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                    <input type="checkbox" className="rounded accent-[#6C47FF]" />
                    <span>Dinner (6PM - 11PM)</span>
                  </label>
                </div>
              </div>

              {/* Offers Available */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-800 block">Offers Available</label>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                    <input type="checkbox" className="rounded accent-[#6C47FF]" />
                    <span>Special Discounts</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                    <input type="checkbox" className="rounded accent-[#6C47FF]" />
                    <span>Combo Offers</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                    <input type="checkbox" className="rounded accent-[#6C47FF]" />
                    <span>Student Deals</span>
                  </label>
                </div>
              </div>

              <button className="w-full py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-extrabold shadow-md shadow-purple-200 transition">
                Apply Filters
              </button>
            </div>

            {/* Bottom Doodle Box */}
            <div className="rounded-3xl p-5 bg-[#FFF4EE] border border-orange-100 text-center space-y-2 shadow-sm">
              <div className="text-xs font-bold text-rose-500 rotate-[-4deg]">
                Good Food <br /> Good Vibes! ッ
              </div>
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">
                ☕
              </div>
            </div>
          </aside>

          {/* Center Main: Controls + 10 Cafe Cards + Bottom Promo */}
          <main className="xl:col-span-7 space-y-5">
            {/* Horizontal Search & Selectors */}
            <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200/70 rounded-xl flex-1 min-w-[180px]">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search cafes by name..."
                  className="w-full text-xs font-semibold text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                />
              </div>

              <div className="relative min-w-[120px]">
                <select
                  value={selectedFoodType}
                  onChange={(e) => setSelectedFoodType(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
                >
                  <option>Food Type</option>
                  <option>All Types</option>
                  <option>Veg</option>
                  <option>Non-Veg</option>
                  <option>Both</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
              </div>

              <div className="relative min-w-[120px]">
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
                >
                  <option>Price Range</option>
                  <option>All Ranges</option>
                  <option>₹1 - 100</option>
                  <option>₹100 - 400</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
              </div>

              <div className="relative min-w-[120px]">
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
                >
                  <option>Rating</option>
                  <option>All Ratings</option>
                  <option>4.5 & above</option>
                  <option>4.0 & above</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <span>Sort by</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl px-2.5 py-1 text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option>Rating</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">
                10 Cafes Found
              </span>
            </div>

            {/* Cafe Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cafes.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-3.5 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Cafe Image Container */}
                    <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Veg Badge */}
                      <span className="absolute top-2.5 left-2.5 flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-md bg-emerald-600 text-white shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        {item.type}
                      </span>

                      {/* Offer Badge */}
                      {item.discountBadge && (
                        <span
                          className={`absolute bottom-2.5 left-2.5 text-[9px] font-black px-2.5 py-0.5 rounded-full ${item.discountColor} shadow-sm`}
                        >
                          {item.discountBadge}
                        </span>
                      )}

                      {/* Rating Pill */}
                      <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md rounded-full px-2.5 py-0.5 flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span className="text-[11px] font-black text-slate-900">{item.rating}</span>
                      </div>
                    </div>

                    {/* Cafe Info */}
                    <div className="px-1 space-y-1.5">
                      <h4 className="text-sm font-black text-slate-900 leading-snug line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 flex items-start gap-1 line-clamp-2 leading-relaxed">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                        <span>{item.location}</span>
                      </p>

                      <div className="pt-1 space-y-1 text-[11px] text-slate-500 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                          <span>{item.hours}</span>
                          <span className="text-slate-300">•</span>
                          <span className="font-bold text-slate-700">{item.price}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 truncate">
                          <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                          <span>{item.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 px-1 grid grid-cols-2 gap-2">
                    <Link
                      href={`/service/${item.id}`}
                      className="py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-bold flex items-center justify-center gap-1 transition shadow-sm shadow-purple-200"
                    >
                      View Details →
                    </Link>
                    <a
                      href={item.phone.startsWith("+") ? `tel:${item.phone}` : "#"}
                      className="py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold flex items-center justify-center gap-1 transition"
                    >
                      <Phone className="w-3 h-3 text-slate-500" />
                      Call
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Promo Banner */}
            <div className="relative rounded-[32px] bg-gradient-to-r from-[#FFF1F2] via-[#FDF2F8] to-[#F5F3FF] border border-rose-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm overflow-hidden mt-6">
              <div className="space-y-2 z-10">
                <div className="text-xs font-bold text-purple-600 rotate-[-3deg]">
                  Good Food, Great Company ッ
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1">
                    🏷️ Best Offers
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1">
                    🎓 Student Friendly
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1">
                    ☕ Wide Variety
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0 z-10">
                <div className="w-44 h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
                    alt="Cafe treats"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Link
                  href="/services"
                  className="px-5 py-3 rounded-2xl bg-[#201B52] hover:bg-[#151138] text-white text-xs font-black flex items-center gap-2 transition shadow-md"
                >
                  <span>Explore More Cafes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-2 pt-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage(1)}
                className={`w-8 h-8 rounded-xl text-xs font-bold ${
                  currentPage === 1
                    ? "bg-[#6C47FF] text-white shadow-md shadow-purple-200"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                1
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`w-8 h-8 rounded-xl text-xs font-bold ${
                  currentPage === 2
                    ? "bg-[#6C47FF] text-white shadow-md shadow-purple-200"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                2
              </button>
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </main>

          {/* Right Sidebar: Quick Nav */}
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

      {/* 4. FOOTER */}
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
              Stay Connected! ♡
            </span>
            <div className="flex items-center gap-2">
              <button className="w-7 h-7 rounded-full bg-purple-50 text-[#6C47FF] flex items-center justify-center text-xs">
                IG
              </button>
              <button className="w-7 h-7 rounded-full bg-purple-50 text-[#6C47FF] flex items-center justify-center text-xs">
                TG
              </button>
              <button className="w-7 h-7 rounded-full bg-purple-50 text-[#6C47FF] flex items-center justify-center text-xs">
                YT
              </button>
              <button className="w-7 h-7 rounded-full bg-purple-50 text-[#6C47FF] flex items-center justify-center text-xs">
                WA
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}