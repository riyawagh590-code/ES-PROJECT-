"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import {
  GraduationCap,
  Search,
  Sparkles,
  Clock,
  ShieldCheck,
  Star,
  Calendar,
  ChevronDown,
  ArrowRight,
  RotateCcw,
  SlidersHorizontal,
  Home as HomeIcon,
  Grid,
  Utensils,
  Building,
  Coffee,
  Shirt,
  Users,
  Award,
  Bell,
  User,
  Settings,
  MessageCircle,
} from "lucide-react";

export default function StudentCleaningPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRate, setSelectedRate] = useState("All Rates");
  const [selectedDays, setSelectedDays] = useState("All Days");
  const [selectedRating, setSelectedRating] = useState("All Ratings");

  const sidebarLinks = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "Services", href: "/student/services", icon: Grid },
    { label: "Mess", href: "/student/mess", icon: Utensils },
    { label: "Hostel / PG", href: "/student/pg", icon: Building },
    { label: "Restaurant", href: "/student/cafes", icon: Utensils },
    { label: "Cafe", href: "/student/cafes", icon: Coffee },
    { label: "Laundry", href: "/student/laundry", icon: Shirt },
    { label: "Housekeeping", href: "/student/cleaning", icon: Sparkles, active: true },
    { label: "Roommate Finder", href: "/student/roommates", icon: Users },
    { label: "Freshers Pass", href: "/pass", icon: Award },
    { label: "Notices", href: "/student/notices", icon: Bell },
    { label: "Profile", href: "/student/profile", icon: User },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  const staffMembers = [
    {
      id: "asha-jadhav",
      name: "Asha Jadhav",
      role: "Housekeeping Staff",
      rating: "4.8",
      rate: "250",
      hours: "8:00 AM - 6:00 PM",
      days: "Monday - Saturday",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "shital-patil",
      name: "Shital Patil",
      role: "Housekeeping Staff",
      rating: "4.6",
      rate: "300",
      hours: "9:00 AM - 5:00 PM",
      days: "Monday - Saturday",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "pooja-deshmukh",
      name: "Pooja Deshmukh",
      role: "Housekeeping Staff",
      rating: "4.7",
      rate: "150",
      hours: "8:00 AM - 7:00 PM",
      days: "Monday - Sunday",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "prajakta-nikam",
      name: "prajakta Nikam",
      role: "Housekeeping Staff",
      rating: "4.9",
      rate: "200",
      hours: "9:00 AM - 6:00 PM",
      days: "Monday - Friday",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "bharti-wagh",
      name: "Bharti Wagh",
      role: "Housekeeping Staff",
      rating: "4.5",
      rate: "300",
      hours: "8:00 AM - 5:00 PM",
      days: "Monday - Saturday",
      image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "jyoti-patil",
      name: "Jyoti Patil",
      role: "Housekeeping Staff",
      rating: "4.7",
      rate: "200",
      hours: "10:00 AM - 7:00 PM",
      days: "Monday - Sunday",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "sunita-pawar",
      name: "Sunita Pawar",
      role: "Housekeeping Staff",
      rating: "4.4",
      rate: "150",
      hours: "8:00 AM - 6:00 PM",
      days: "Monday - Saturday",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "surekha-hyalij",
      name: "Surekha Hyalij",
      role: "Housekeeping Staff",
      rating: "4.6",
      rate: "150",
      hours: "9:00 AM - 6:00 PM",
      days: "Monday - Saturday",
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "lalita-shinde",
      name: "Lalita Shinde",
      role: "Housekeeping Staff",
      rating: "4.8",
      rate: "250",
      hours: "8:00 AM - 8:00 PM",
      days: "Monday - Sunday",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "sunanda-bhosale",
      name: "Sunanda Bhosale",
      role: "Housekeeping Staff",
      rating: "4.5",
      rate: "200",
      hours: "9:00 AM - 5:00 PM",
      days: "Monday - Friday",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9FD] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
      {/* 1. TOP NAVBAR */}
      <Navbar />

      {/* 2. HERO BANNER */}
      <section className="max-w-[1550px] mx-auto px-4 md:px-6 pt-5 pb-4">
        {/* Back Link */}
        <Link
          href="/student/services"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F46E5] hover:text-indigo-800 transition mb-3"
        >
          ← All Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Main Hero Card (8 Cols) */}
          <div className="lg:col-span-8 relative rounded-[32px] bg-gradient-to-r from-[#EDE9FE] via-[#F5F3FF] to-[#FAF5FF] border border-purple-100 p-8 md:p-10 overflow-hidden flex flex-col justify-between shadow-sm min-h-[220px]">
            {/* Background Cutout Housekeeper Image */}
            <div className="absolute right-0 top-0 bottom-0 w-[44%] hidden sm:block pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80"
                alt="Housekeeper cleaning tidy room"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Doodled Annotation */}
            <div className="absolute top-6 right-[44%] hidden md:block text-[#6C47FF] text-xs font-bold rotate-[-8deg] pointer-events-none select-none">
              Clean Spaces ♡ <br /> Better Days ♡
            </div>

            <div className="relative z-10 space-y-3 max-w-md">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-200/60 text-[#6C47FF] text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                Housekeeping Services
              </div>

              <h1 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Find trusted housekeeping help
              </h1>

              <p className="text-xs md:text-sm font-medium text-slate-600">
                Book reliable help for your room, hostel or PG.
              </p>
            </div>

            {/* Metric Pills */}
            <div className="relative z-10 flex flex-wrap items-center gap-4 pt-6 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-[#6C47FF] flex items-center justify-center text-[10px]">
                  👤
                </span>
                <span>10 staff listed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#6C47FF]" />
                <span>Hourly booking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#6C47FF]" />
                <span>Student-friendly rates</span>
              </div>
            </div>
          </div>

          {/* Need help choosing Promo Box (4 Cols) */}
          <div className="lg:col-span-4 rounded-[32px] bg-gradient-to-br from-[#EEF2FF] via-[#F5F3FF] to-[#FAF5FF] border border-indigo-100/70 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden min-h-[170px]">
            <div className="space-y-2 max-w-[65%] z-10">
              <div className="flex items-center gap-2 text-[#4F46E5]">
                {/* Lightbulb with radiant lines */}
                <svg className="w-5 h-5 text-[#4F46E5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M12 2v1" />
                  <path d="M4.93 4.93l.7.7" />
                  <path d="M19.07 4.93l-.7.7" />
                </svg>
                <h3 className="text-sm md:text-base font-extrabold text-[#1E1B4B] tracking-tight">
                  Need help choosing?
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Compare hourly rates and timings before booking.
              </p>
              <Link
                href="/support"
                className="inline-flex items-center text-[#4F46E5] text-xs font-bold pt-2 hover:translate-x-1 transition group"
              >
                <span className="text-base group-hover:text-[#6C47FF]">→</span>
              </Link>
            </div>

            {/* Exact Bucket, Mop & Potted Plant Illustration */}
            <div className="absolute right-3 bottom-0 w-32 h-28 pointer-events-none select-none flex items-end justify-end">
              <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
                {/* Soft shadow base */}
                <ellipse cx="85" cy="132" rx="60" ry="6" fill="#E0E7FF" />

                {/* Potted plant on left */}
                <path d="M35 110 L47 110 L44 130 L38 130 Z" fill="#4338CA" />
                <ellipse cx="41" cy="110" rx="6" ry="2" fill="#312E81" />
                {/* Green leaves */}
                <path d="M41 110 Q32 98 34 88 Q40 98 41 110" fill="#10B981" />
                <path d="M41 110 Q41 94 45 84 Q47 96 41 110" fill="#34D399" />
                <path d="M41 110 Q50 99 53 91 Q49 101 41 110" fill="#059669" />

                {/* Cleaning Bucket */}
                <path d="M75 92 L120 92 L114 132 L81 132 Z" fill="#3B82F6" />
                <path d="M72 90 L123 90 L121 95 L74 95 Z" fill="#2563EB" rx="2" />
                {/* Bucket rim depth and water reflection */}
                <path d="M78 96 L117 96 L114 104 L81 104 Z" fill="#60A5FA" opacity="0.6" />
                <path d="M85 108 L110 108 L108 126 L87 126 Z" fill="#1D4ED8" opacity="0.35" />

                {/* Bucket metal handle */}
                <path d="M73 95 Q68 112 78 120" stroke="#93C5FD" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                {/* Mop Handle leaning */}
                <rect x="100" y="24" width="6" height="82" rx="3" transform="rotate(-14 100 24)" fill="#F59E0B" />
                <rect x="98.5" y="60" width="7" height="10" rx="2" transform="rotate(-14 98.5 60)" fill="#D97706" />

                {/* Mop Cloth Head inside bucket */}
                <ellipse cx="98" cy="92" rx="14" ry="5" fill="#E0F2FE" />
                <path d="M88 92 Q98 102 108 92" stroke="#BAE6FD" strokeWidth="3" fill="none" />

                {/* Water bubbles & sparkle accents */}
                <circle cx="82" cy="78" r="3" fill="#67E8F9" opacity="0.8" />
                <circle cx="76" cy="66" r="2" fill="#A5F3FC" />
                <path d="M118 64 Q122 60 120 54 Q116 58 118 64" fill="#34D399" opacity="0.8" />
                <path d="M125 72 Q127 68 125 64" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN WORKSPACE: LEFT FILTERS + CENTER STAFF CARDS + RIGHT QUICK NAV */}
      <section className="max-w-[1550px] mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* LEFT SIDEBAR: FILTERS */}
          <aside className="xl:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-slate-900 font-extrabold text-sm">
                <SlidersHorizontal className="w-4 h-4 text-[#6C47FF]" />
                Filters
              </div>

              {/* Hourly Rate Checkboxes */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-800 block">Hourly Rate</label>
                <div className="space-y-2 text-xs">
                  {["₹150 / hour", "₹200 / hour", "₹250 / hour", "₹300 / hour"].map((rate, idx) => (
                    <label key={idx} className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                      <input type="checkbox" className="rounded accent-[#6C47FF]" />
                      <span>{rate}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Working Days Checkboxes */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-800 block">Working Days</label>
                <div className="space-y-2 text-xs">
                  {["Monday - Friday", "Monday - Saturday", "Monday - Sunday"].map((day, idx) => (
                    <label key={idx} className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                      <input type="checkbox" className="rounded accent-[#6C47FF]" />
                      <span>{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Checkboxes */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-800 block">Rating</label>
                <div className="space-y-2 text-xs">
                  {["4.5 & above", "4.0 & above"].map((rate, idx) => (
                    <label key={idx} className="flex items-center gap-2.5 text-slate-600 cursor-pointer">
                      <input type="checkbox" className="rounded accent-[#6C47FF]" />
                      <span>{rate}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Doodle Box */}
            <div className="rounded-3xl p-5 bg-[#EEF2FF] border border-indigo-100 text-center space-y-2 shadow-sm">
              <div className="text-xs font-bold text-[#4F46E5] rotate-[-4deg]">
                A cleaner space <br /> helps you focus <br /> on what matters! ♡
              </div>
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl">
                🪣
              </div>
            </div>
          </aside>

          {/* CENTER MAIN: SEARCH BAR + 10 STAFF CARDS */}
          <main className="xl:col-span-7 space-y-5">
            {/* Horizontal Filter Controls */}
            <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-3">
              {/* Search by Name */}
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200/70 rounded-xl flex-1 min-w-[180px]">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name"
                  className="w-full text-xs font-semibold text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                />
              </div>

              {/* Hourly Rate Filter */}
              <div className="relative min-w-[125px]">
                <select
                  value={selectedRate}
                  onChange={(e) => setSelectedRate(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
                >
                  <option>Hourly Rate</option>
                  <option>All Rates</option>
                  <option>₹150 / hour</option>
                  <option>₹200 / hour</option>
                  <option>₹250 / hour</option>
                  <option>₹300 / hour</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
              </div>

              {/* Working Days Filter */}
              <div className="relative min-w-[125px]">
                <select
                  value={selectedDays}
                  onChange={(e) => setSelectedDays(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
                >
                  <option>Working Days</option>
                  <option>All Days</option>
                  <option>Monday - Friday</option>
                  <option>Monday - Saturday</option>
                  <option>Monday - Sunday</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
              </div>

              {/* Rating Filter */}
              <div className="relative min-w-[125px]">
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

              {/* Reset */}
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedRate("All Rates");
                  setSelectedDays("All Days");
                  setSelectedRating("All Ratings");
                }}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-600 hover:text-[#6C47FF] transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>

            {/* Staff Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {staffMembers.map((staff) => (
                <div
                  key={staff.id}
                  className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-stretch gap-4 group"
                >
                  {/* Left: Staff Photo */}
                  <div className="w-32 sm:w-36 h-auto rounded-2xl overflow-hidden shrink-0 relative bg-slate-100">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Right: Info & CTA */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                          {staff.role}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-black text-slate-900">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span>{staff.rating}</span>
                        </div>
                      </div>

                      <h4 className="text-sm font-black text-slate-900 mt-0.5">{staff.name}</h4>

                      <div className="mt-1">
                        <span className="text-base font-black text-slate-900">₹{staff.rate}</span>
                        <span className="text-[10px] text-slate-400 font-semibold"> / hour</span>
                      </div>

                      <div className="space-y-1 mt-2 text-[11px] text-slate-500 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{staff.hours}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{staff.days}</span>
                        </div>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="pt-3">
                      <Link
                        href={`/service/${staff.id}`}
                        className="w-full py-2 px-3 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-sm shadow-purple-200"
                      >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* RIGHT SIDEBAR: QUICK NAV */}
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
        <div className="relative rounded-[32px] bg-gradient-to-r from-[#EDE9FE] via-[#F3E8FF] to-[#FAE8FF] border border-purple-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl shrink-0">
              🧼
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-950">Choose your housekeeping help</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Clean rooms. Better focus. A more comfortable campus life.
              </p>
            </div>
          </div>

          <button className="px-6 py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-extrabold flex items-center gap-2 transition shadow-md shadow-purple-200 shrink-0">
            <span>Explore All Staff</span>
            <ArrowRight className="w-4 h-4" />
          </button>
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