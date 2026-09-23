"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import {
  Home,
  Grid,
  Utensils,
  Building,
  Coffee,
  Shirt,
  Sparkles,
  Users,
  Award,
  Bell,
  User,
  Settings,
  Search,
  MapPin,
  Clock,
  Phone,
  Star,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Zap,
  Tag,
  SlidersHorizontal,
  MessageCircle,
} from "lucide-react";

export default function StudentLaundryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Areas");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All Ranges");
  const [selectedServiceType, setSelectedServiceType] = useState("All Types");
  const [selectedSort, setSelectedSort] = useState("Rating");
  const [priceSlider, setPriceSlider] = useState(80);

  const sidebarLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/student/services", icon: Grid },
    { label: "Mess", href: "/student/mess", icon: Utensils },
    { label: "Hostel / PG", href: "/student/pg", icon: Building },
    { label: "Restaurant", href: "/student/cafes", icon: Utensils },
    { label: "Cafe", href: "/student/cafes", icon: Coffee },
    { label: "Laundry", href: "/student/laundry", icon: Shirt, active: true },
    { label: "Housekeeping", href: "/student/cleaning", icon: Sparkles },
    { label: "Roommate Finder", href: "/student/roommates", icon: Users },
    { label: "Freshers Pass", href: "/pass", icon: Award },
    { label: "Notices", href: "/student/notices", icon: Bell },
    { label: "Profile", href: "/student/profile", icon: User },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  const laundryVendors = [
    {
      id: "cotton-spa",
      name: "CottonSpa",
      tag: "Fast Service",
      tagColor: "bg-[#4338CA] text-white",
      rating: "4.2",
      location: "Dehu Phata",
      price: "₹60/kg",
      hours: "8am - 10pm",
      phone: "9112207557",
      badges: ["Wash & Fold", "Ironing"],
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "turbodry",
      name: "TurboDry",
      tag: "Best Deal",
      tagColor: "bg-[#059669] text-white",
      rating: "4.0",
      location: "Near vahaturk vibhag police",
      price: "₹55/kg",
      hours: "9am - 9pm",
      phone: "9960396922",
      badges: ["Wash & Fold", "Dry Cleaning"],
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "mauli-krupa",
      name: "Mauli Krupa",
      tag: "Popular",
      tagColor: "bg-[#DB2777] text-white",
      rating: "4.1",
      location: "Dehu Phata",
      price: "₹60/kg",
      hours: "9am - 8pm",
      phone: "8897698907",
      badges: ["Wash & Fold", "Ironing"],
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "wash-house-1",
      name: "Wash House",
      tag: "Eco Friendly",
      tagColor: "bg-[#0D9488] text-white",
      rating: "4.3",
      location: "Near gajanan maharaj mandir",
      price: "₹65/kg",
      hours: "9am - 9:30pm",
      phone: "9112911370",
      badges: ["Dry Cleaning", "Ironing"],
      image: "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "trimurti-drycleaners",
      name: "Trimurti Drycleaners",
      tag: "Student Special",
      tagColor: "bg-[#EA580C] text-white",
      rating: "4.0",
      location: "Shop No. 1, Alandi, Pune 412105",
      price: "₹70/kg",
      hours: "9am - 8pm",
      phone: "8182839598",
      badges: ["Dry Cleaning", "Shoe Cleaning"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "padmavati-laundry",
      name: "Padmavati Laundry & Dry",
      tag: "Best Value",
      tagColor: "bg-[#16A34A] text-white",
      rating: "4.2",
      location: "Bhosale Nagar, Alandi",
      price: "₹65/kg",
      hours: "8am - 10pm",
      phone: "8824919003",
      badges: ["Wash & Fold", "Ironing"],
      image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "radhika-dryclearns",
      name: "Radhika Dryclearns",
      tag: "Popular",
      tagColor: "bg-[#E11D48] text-white",
      rating: "4.1",
      location: "Alandi - Markal Road, Alandi",
      price: "₹60/kg",
      hours: "9am - 8pm",
      phone: "9822868135",
      badges: ["Wash & Fold", "Dry Cleaning"],
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "wash-house-2",
      name: "Wash House",
      tag: "Fast Service",
      tagColor: "bg-[#0284C7] text-white",
      rating: "4.3",
      location: "Shop No. 3, near Gajanan Maharaj Mandir, Dehu Phata",
      price: "₹70/kg",
      hours: "9am - 10pm",
      phone: "9112911370",
      badges: ["Wash & Fold", "Express Service"],
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "shrishti-laundry",
      name: "Shrishti Laundry",
      tag: "Budget Friendly",
      tagColor: "bg-[#7C3AED] text-white",
      rating: "4.0",
      location: "Opp. Gajanan Maharaj Mandir, Dehu Phata",
      price: "₹60/kg",
      hours: "8am - 8pm",
      phone: "7498735276",
      badges: ["Wash & Fold", "Ironing"],
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "expresz-laundry",
      name: "EXPRESZ LAUNDRY SERVICES",
      tag: "Quick Service",
      tagColor: "bg-[#2563EB] text-white",
      rating: "4.2",
      location: "Indrayani Residency, near Yashada Splendid",
      price: "₹65/kg",
      hours: "8am - 9pm",
      phone: "9087645453",
      badges: ["Wash & Fold", "Dry Cleaning"],
      image: "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9FD] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
      {/* 1. TOP NAVBAR */}
      <Navbar />

      {/* 2. MAIN THREE-COLUMN WORKSPACE */}
      <div className="max-w-[1550px] mx-auto px-4 md:px-6 py-6 grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: FILTERS (Same as other dashboards) */}
        <aside className="xl:col-span-3 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#6C47FF]" />
                Filter Laundry
              </h3>
            </div>

            {/* Service Type Checkboxes */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700 block">Service Type</label>
              <div className="space-y-2 text-xs">
                {["Wash & Fold", "Ironing", "Dry Cleaning", "Shoe Cleaning"].map((service, idx) => (
                  <label key={idx} className="flex items-center gap-2.5 text-slate-700 cursor-pointer">
                    <input type="checkbox" className="rounded accent-[#6C47FF]" />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700 block">
                Price Range (per kg)
              </label>
              <input
                type="range"
                min="40"
                max="100"
                step="5"
                value={priceSlider}
                onChange={(e) => setPriceSlider(e.target.value)}
                className="w-full accent-[#6C47FF] cursor-pointer"
              />
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span>₹40/kg</span>
                <span>₹{priceSlider}+/kg</span>
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
                  <option>Dehu Phata</option>
                  <option>Alandi</option>
                  <option>Markal Road</option>
                  <option>Bhosale Nagar</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
              </div>
            </div>

            {/* Turnaround Time */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700 block">Delivery Time</label>
              <div className="space-y-2 text-xs">
                {["Same Day Delivery", "24-Hour Express", "Standard (2-3 Days)"].map((time, idx) => (
                  <label key={idx} className="flex items-center gap-2.5 text-slate-700 cursor-pointer">
                    <input type="checkbox" className="rounded accent-[#6C47FF]" />
                    <span>{time}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Apply Button */}
            <button className="w-full py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-extrabold shadow-md shadow-purple-200 transition">
              Apply Filters
            </button>
          </div>

          {/* Left Doodle Box */}
          <div className="rounded-3xl p-5 bg-[#FFF4EE] border border-orange-100 text-center space-y-2 shadow-sm">
            <div className="text-xs font-extrabold text-[#6C47FF] rotate-[-4deg]">
              Clean Clothes, Happy You! ッ
            </div>
            <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">
              🧺
            </div>
            <p className="text-[11px] font-bold text-slate-500 leading-tight">
              Fresh & spotless! <br />
              Delivered on time ♡
            </p>
          </div>
        </aside>

        {/* CENTER COLUMN: MAIN CONTENT (Cards & Banners) */}
        <main className="xl:col-span-7 space-y-6">
          {/* HERO BANNER */}
          <section className="relative rounded-[32px] bg-gradient-to-r from-[#FFF1F2] via-[#FDF2F8] to-[#F5F3FF] border border-rose-100/70 p-6 md:p-8 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-3 max-w-md z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#6C47FF] text-xs font-bold uppercase tracking-wider">
                <Shirt className="w-3.5 h-3.5" />
                Laundry Services
              </div>

              <h1 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight leading-snug">
                Fresh Clothes <br />
                <span className="text-[#6C47FF]">Happy Vibes ッ</span>
              </h1>

              <p className="text-xs text-slate-600 leading-relaxed">
                Compare laundry services, check prices, timings and find the best deals near your campus.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-bold text-slate-700">
                <span className="bg-white px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#6C47FF]" />
                  Trusted Vendors
                </span>
                <span className="bg-white px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Tag className="w-3 h-3 text-emerald-600" />
                  Best Prices
                </span>
                <span className="bg-white px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-500" />
                  Fast Service
                </span>
              </div>
            </div>

            {/* Hero Graphic & Card Stamp */}
            <div className="relative z-10 flex items-center gap-3 shrink-0">
              <div className="w-44 h-36 md:w-52 md:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&auto=format&fit=crop&q=80"
                  alt="Folded clean laundry near washing machine"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="hidden sm:flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-[#818CF8] to-[#4F46E5] text-white p-2 text-center shadow-lg rotate-3 select-none">
                <p className="text-[10px] font-black leading-tight">
                  Clean <br /> Clothes <br /> Better <br /> Mood ッ
                </p>
              </div>
            </div>
          </section>

          {/* SEARCH & HORIZONTAL CONTROLS */}
          <section className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200/70 rounded-xl flex-1 min-w-[180px]">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search laundry by name..."
                className="w-full text-xs font-semibold text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
            </div>

            <div className="relative min-w-[120px]">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
              >
                <option>All Areas</option>
                <option>Dehu Phata</option>
                <option>Alandi</option>
                <option>Markal Road</option>
                <option>Bhosale Nagar</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>

            <div className="relative min-w-[120px]">
              <select
                value={selectedServiceType}
                onChange={(e) => setSelectedServiceType(e.target.value)}
                className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
              >
                <option>All Types</option>
                <option>Wash & Fold</option>
                <option>Ironing</option>
                <option>Dry Cleaning</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>

            <button className="px-4 py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-bold flex items-center gap-1.5 transition shadow-sm">
              <Search className="w-3.5 h-3.5" />
              Search
            </button>
          </section>

          {/* GRID OF 10 LAUNDRY CARDS */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-xl bg-purple-100 text-[#6C47FF] flex items-center justify-center text-xs font-black">
                  🧺
                </span>
                <h3 className="text-sm font-extrabold text-slate-900">
                  Featured Laundry Services ({laundryVendors.length})
                </h3>
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

            {/* 3-Column Responsive Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {laundryVendors.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-3 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Storefront Image */}
                    <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Tag Badge */}
                      <span
                        className={`absolute top-2 left-2 text-[9px] font-black px-2 py-0.5 rounded-full ${item.tagColor} shadow-sm`}
                      >
                        {item.tag}
                      </span>

                      {/* Rating */}
                      <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-md rounded-full px-2 py-0.5 flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span className="text-[10px] font-black text-slate-900">{item.rating}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-1">
                      <h4 className="text-xs font-black text-slate-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 flex items-start gap-1 line-clamp-1">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                        <span>{item.location}</span>
                      </p>

                      <div className="pt-1 space-y-1 text-[10px] text-slate-600 font-medium">
                        <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs">
                          <span>{item.price}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-3 h-3 shrink-0" />
                          <span>{item.hours}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400 truncate">
                          <Phone className="w-3 h-3 shrink-0" />
                          <span>{item.phone}</span>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="pt-2 flex flex-wrap gap-1">
                        {item.badges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="text-[8px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-[#6C47FF]"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="pt-3">
                    <Link
                      href={`/service/${item.id}`}
                      className="w-full py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-[11px] font-bold flex items-center justify-center gap-1 transition shadow-sm shadow-purple-200"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BOTTOM PROMO STRIP */}
          <section className="relative rounded-[32px] bg-gradient-to-r from-[#EDE9FE] via-[#F3E8FF] to-[#FAE8FF] border border-purple-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm overflow-hidden">
            <div className="flex items-center gap-4 z-10">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl shrink-0">
                🧺
              </div>
              <div>
                <h3 className="text-base md:text-lg font-black text-slate-950">
                  Laundry Done Right — So You Can Do More! ッ
                </h3>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-bold text-slate-600">
                  <span>✓ Affordable Rates</span>
                  <span>✓ On-Time Delivery</span>
                  <span>✓ Quality Service</span>
                </div>
              </div>
            </div>

            <Link
              href="/student/services"
              className="px-5 py-2.5 rounded-2xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-black flex items-center gap-2 transition shadow-md shadow-purple-200 shrink-0 z-10"
            >
              <span>Book Laundry Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </main>

        {/* RIGHT COLUMN: QUICK NAV / SERVICES SIDEBAR (Moved to Right) */}
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

      {/* 3. FOOTER */}
      <footer className="w-full bg-white border-t border-slate-100 py-8 px-6 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#6C47FF] flex items-center justify-center text-white">
              <Shirt className="w-4 h-4" />
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
              <span className="w-7 h-7 rounded-full bg-purple-50 text-[#6C47FF] flex items-center justify-center text-xs font-bold">
                IG
              </span>
              <span className="w-7 h-7 rounded-full bg-purple-50 text-[#6C47FF] flex items-center justify-center text-xs font-bold">
                WA
              </span>
              <span className="w-7 h-7 rounded-full bg-purple-50 text-[#6C47FF] flex items-center justify-center text-xs font-bold">
                TG
              </span>
              <span className="w-7 h-7 rounded-full bg-purple-50 text-[#6C47FF] flex items-center justify-center text-xs font-bold">
                YT
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}