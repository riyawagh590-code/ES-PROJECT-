"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  LayoutGrid,
  UtensilsCrossed,
  Building2,
  Utensils,
  Coffee,
  Shirt,
  Sparkle,
  Sparkles,
  Users,
  Award,
  Bell,
  Settings,
  MessageCircle,
  Search,
  Filter,
  Flame,
  Heart,
  PlusCircle,
  MapPin,
  ChevronRight,
  ArrowRight,
  SlidersHorizontal,
  User,
} from "lucide-react";

export default function RoommateFinderPage() {
  const [activeTab, setActiveTab] = useState("find");
  const [genderFilter, setGenderFilter] = useState("both");
  const [foodFilter, setFoodFilter] = useState("both");
  const [budgetVal, setBudgetVal] = useState(7000);
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarLinks = [
    { label: "Home", icon: Home, href: "/student", active: false },
    { label: "Services", icon: LayoutGrid, href: "/student", active: false },
    { label: "Mess", icon: UtensilsCrossed, href: "/student/mess", active: false },
    { label: "Hostel / PG", icon: Building2, href: "/student/pg", active: false },
    { label: "Cafe", icon: Coffee, href: "/student/cafes", active: false },
    { label: "Laundry", icon: Shirt, href: "/student/laundry", active: false },
    { label: "Housekeeping", icon: Sparkle, href: "/student/cleaning", active: false },
    { label: "Roommate Finder", icon: Users, href: "/student/roomates", active: true },
    { label: "Freshers Pass", icon: Award, href: "/pass", active: false },
    { label: "Notices", icon: Bell, href: "/student/notices", active: false },
    { label: "Profile", icon: User, href: "/student/profile", active: false },
    { label: "Settings", icon: Settings, href: "/student/settings", active: false },
  ];

  const topCategories = [
    {
      id: "find",
      title: "Find Roommates",
      sub: "Based on your preferences",
      icon: User,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      id: "popular",
      title: "Popular Matches",
      sub: "See what others are choosing",
      icon: Flame,
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
    {
      id: "my",
      title: "My Matches",
      sub: "View your saved profiles",
      icon: Heart,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      id: "post",
      title: "Post Your Need",
      sub: "Find roommates faster",
      icon: PlusCircle,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
  ];

  const roommates = [
    {
      id: 1,
      name: "Aditi Sharma",
      genderSign: "♀",
      age: 20,
      college: "MIT AOE",
      rating: 4.7,
      reviews: 12,
      badge: "Verified",
      badgeStyle: "bg-emerald-100 text-emerald-700 border-emerald-200",
      gender: "Female",
      food: "Veg",
      smoking: "Non-Smoker",
      location: "MIT AOE",
      budget: "₹6k - ₹8k/month",
      interests: "Music, Travel, Reading",
      quote: "Looking for a clean, friendly and respectful roommate.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
      href: "/student/roomates/quiz",
    },
    {
      id: 2,
      name: "Rohit Verma",
      genderSign: "♂",
      age: 21,
      college: "MIT AOE",
      rating: 4.5,
      reviews: 9,
      badge: "Popular",
      badgeStyle: "bg-rose-100 text-rose-700 border-rose-200",
      gender: "Male",
      food: "Non-Veg",
      smoking: "Non-Smoker",
      location: "Dehu Phata",
      budget: "₹5k - ₹7k/month",
      interests: "Sports, Gaming, Movies",
      quote: "Easy going, clean and love new people.",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80",
      href: "/student/roommates/quiz",
    },
    {
      id: 3,
      name: "Sneha Kulkarni",
      genderSign: "♀",
      age: 21,
      college: "MIT AOE",
      rating: 4.8,
      reviews: 15,
      badge: "Verified",
      badgeStyle: "bg-emerald-100 text-emerald-700 border-emerald-200",
      gender: "Female",
      food: "Veg",
      smoking: "Non-Smoker",
      location: "Vishweswar Nagar",
      budget: "₹5k - ₹7k/month",
      interests: "Coding, Books, Food",
      quote: "Looking for a peaceful and cooperative roommate.",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80",
      href: "/student/roommates/quiz",
    },
    {
      id: 4,
      name: "Karan Deshpande",
      genderSign: "♂",
      age: 22,
      college: "MIT AOE",
      rating: 4.3,
      reviews: 4,
      badge: "New",
      badgeStyle: "bg-purple-100 text-purple-700 border-purple-200",
      gender: "Male",
      food: "Veg",
      smoking: "Non-Smoker",
      location: "Alandi",
      budget: "₹7k - ₹9k/month",
      interests: "Cricket, Gym, Web Series",
      quote: "Fun disciplined and always up for good conversations!",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
      href: "/student/roommates/quiz",
    },
    {
      id: 5,
      name: "Isha Patil",
      genderSign: "♀",
      age: 20,
      college: "MIT",
      rating: 4.6,
      reviews: 10,
      badge: "Verified",
      badgeStyle: "bg-emerald-100 text-emerald-700 border-emerald-200",
      gender: "Female",
      food: "Non-Veg",
      smoking: "Non-Smoker",
      location: "Dehu Phata",
      budget: "₹5k - ₹7k/month",
      interests: "Art, Music, Cooking",
      quote: "Love clean space and good vibes only!",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
      href: "/student/roommates/quiz",
    },
    {
      id: 6,
      name: "Siddharth More",
      genderSign: "♂",
      age: 21,
      college: "AOE",
      rating: 4.4,
      reviews: 9,
      badge: "Popular",
      badgeStyle: "bg-rose-100 text-rose-700 border-rose-200",
      gender: "Male",
      food: "Veg",
      smoking: "Non-Smoker",
      location: "MIT Campus",
      budget: "₹4k - ₹5k/month",
      interests: "Tech, Football, Travel",
      quote: "Looking for a peaceful, respectful roommate.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
      href: "/student/roommates/quiz",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FC] text-slate-800 font-sans antialiased p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-[1720px] mx-auto flex flex-col lg:flex-row gap-6 items-start">
        
        {/* =========================================================
            LEFT COLUMN: FILTERS, QUIZ & MORE FEATURES
        ========================================================= */}
        <aside className="w-full lg:w-[300px] min-w-[280px] shrink-0 space-y-4">
          
          {/* Still Confused Quiz Box */}
          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm text-center relative overflow-hidden">
            <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
              <span className="text-4xl">🏡</span>
            </div>
            <h3 className="text-sm font-black text-slate-900 leading-tight">
              Still Confused?
            </h3>
            <p className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">
              Take our quick quiz and <br /> get personalized matches!
            </p>
            <Link
              href="/student/roomates/quiz"
              className="mt-3.5 w-full py-2.5 rounded-xl bg-[#5D42CE] hover:bg-[#4d34b5] text-white text-xs font-black shadow-md shadow-indigo-200 transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Take Compatibility Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Quick Filters Box */}
          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-1 border-b border-slate-50">
              <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#5D42CE]" /> Quick Filters
              </h4>
              <button
                type="button"
                className="text-[10px] font-bold text-[#5D42CE] hover:underline cursor-pointer"
              >
                Clear All
              </button>
            </div>

            {/* Gender */}
            <div className="space-y-2 text-xs">
              <label className="text-[11px] font-black text-slate-700 block">
                Gender
              </label>
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-600">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    checked={genderFilter === "boys"}
                    onChange={() => setGenderFilter("boys")}
                    className="accent-[#5D42CE] w-3.5 h-3.5"
                  />
                  <span>Boys</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    checked={genderFilter === "girls"}
                    onChange={() => setGenderFilter("girls")}
                    className="accent-[#5D42CE] w-3.5 h-3.5"
                  />
                  <span>Girls</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    checked={genderFilter === "both"}
                    onChange={() => setGenderFilter("both")}
                    className="accent-[#5D42CE] w-3.5 h-3.5"
                  />
                  <span>Both</span>
                </label>
              </div>
            </div>

            {/* Food Preference */}
            <div className="space-y-2 text-xs">
              <label className="text-[11px] font-black text-slate-700 block">
                Food Preference
              </label>
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-600">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="food"
                    checked={foodFilter === "veg"}
                    onChange={() => setFoodFilter("veg")}
                    className="accent-[#5D42CE] w-3.5 h-3.5"
                  />
                  <span>Veg</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="food"
                    checked={foodFilter === "nonveg"}
                    onChange={() => setFoodFilter("nonveg")}
                    className="accent-[#5D42CE] w-3.5 h-3.5"
                  />
                  <span>Non-Veg</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="food"
                    checked={foodFilter === "both"}
                    onChange={() => setFoodFilter("both")}
                    className="accent-[#5D42CE] w-3.5 h-3.5"
                  />
                  <span>Both</span>
                </label>
              </div>
            </div>

            {/* Budget Range */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-black text-slate-700">
                  Budget (per month)
                </label>
                <span className="text-[10px] font-black text-[#5D42CE]">
                  ₹{budgetVal.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="3000"
                max="10000"
                step="500"
                value={budgetVal}
                onChange={(e) => setBudgetVal(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#5D42CE]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                <span>₹3,000</span>
                <span>₹10,000+</span>
              </div>
            </div>

            {/* Room Type */}
            <div className="space-y-2 text-xs">
              <label className="text-[11px] font-black text-slate-700 block">
                Room Type
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-600">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#5D42CE] rounded w-3.5 h-3.5" />
                  <span>Single Room</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#5D42CE] rounded w-3.5 h-3.5" />
                  <span>Shared Room</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#5D42CE] rounded w-3.5 h-3.5" />
                  <span>PG / Flat</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#5D42CE] rounded w-3.5 h-3.5" />
                  <span>Hostel</span>
                </label>
              </div>
            </div>

            {/* Additional Preferences */}
            <div className="space-y-2 text-xs">
              <label className="text-[11px] font-black text-slate-700 block">
                Additional Preferences
              </label>
              <div className="space-y-1.5 text-xs font-semibold text-slate-600">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="accent-[#5D42CE] rounded w-3.5 h-3.5" />
                  <span>Working Professional</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#5D42CE] rounded w-3.5 h-3.5" />
                  <span>Study Friendly</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#5D42CE] rounded w-3.5 h-3.5" />
                  <span>No Smoking</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="accent-[#5D42CE] rounded w-3.5 h-3.5" />
                  <span>Pet Friendly</span>
                </label>
              </div>
            </div>

            {/* Apply Button */}
            <button
              type="button"
              className="w-full py-2.5 rounded-xl bg-[#5D42CE] hover:bg-[#4d34b5] text-white text-xs font-black shadow-sm transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Apply Filters</span>
            </button>
          </div>

          {/* More Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-black text-slate-900 px-1">More Features</h4>
            <div className="space-y-2">
              <Link
                href="#"
                className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-100 hover:border-purple-200 shadow-sm transition"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center text-xs">
                    📖
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-900">View Roommate Stories</p>
                    <p className="text-[9px] text-slate-400 font-medium">Real experiences, real connections</p>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              <Link
                href="#"
                className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-100 hover:border-purple-200 shadow-sm transition"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center text-xs">
                    🛡️
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-900">Safety Tips</p>
                    <p className="text-[9px] text-slate-400 font-medium">Stay safe while sharing</p>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              <Link
                href="#"
                className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-100 hover:border-purple-200 shadow-sm transition"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center text-xs">
                    💬
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-900">Ask Community</p>
                    <p className="text-[9px] text-slate-400 font-medium">Get guidance from other students</p>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </div>
        </aside>

        {/* =========================================================
            CENTRAL COLUMN: HERO BANNER, TABS, SEARCH & CARDS
        ========================================================= */}
        <div className="flex-1 min-w-0 space-y-5">
          
          {/* Hero Banner */}
          <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#FCE8F3] via-[#F4E8FC] to-[#E9E4FD] p-6 sm:p-8 border border-purple-100/60 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 min-h-[175px]">
            <div className="space-y-2 z-10 max-w-sm">
              <h1 className="text-2xl sm:text-3xl font-black text-[#5D42CE] tracking-tight leading-tight">
                Find your <br />
                <span className="text-[#36257E]">perfect roommate ♡</span>
              </h1>
              <p className="text-xs font-semibold text-slate-600 leading-snug">
                Same college. Same dreams. <br />
                Find someone who vibes with you!
              </p>
            </div>

            <div className="relative z-10 w-full sm:w-72 h-36 rounded-2xl overflow-hidden shadow-md border-2 border-white shrink-0">
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80"
                alt="Cozy student dorm room"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden lg:block bg-amber-100 border border-amber-200 rounded-2xl p-3 text-[11px] font-black text-slate-800 rotate-2 shadow-sm shrink-0">
              <p>✓ Safe</p>
              <p>✓ Verified</p>
              <p>✓ Student Friendly</p>
              <div className="text-right text-base mt-1">⌣</div>
            </div>
          </div>

          {/* Top Action Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            {topCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`p-3.5 rounded-2xl bg-white border text-left transition shadow-sm flex items-center gap-3 cursor-pointer ${
                    isActive
                      ? "border-[#5D42CE] ring-2 ring-purple-100"
                      : "border-slate-100 hover:border-slate-200"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-black text-slate-900 truncate leading-tight">
                      {cat.title}
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
                      {cat.sub}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Multi-Dropdown Filter Bar */}
          <div className="bg-white rounded-2xl p-2.5 sm:p-3 border border-slate-100 shadow-sm flex flex-col lg:flex-row items-center gap-2.5">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200/70 rounded-xl w-full">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by location, college or interest..."
                className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full lg:w-auto">
              <select className="flex-1 lg:flex-initial text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none cursor-pointer">
                <option className="text-sm font-bold py-2 bg-white text-slate-800">Gender: Any</option>
                <option className="text-sm font-medium py-2 bg-white text-slate-700">Boys</option>
                <option className="text-sm font-medium py-2 bg-white text-slate-700">Girls</option>
              </select>

              <select className="flex-1 lg:flex-initial text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none cursor-pointer">
                <option className="text-sm font-bold py-2 bg-white text-slate-800">Budget: Any</option>
                <option className="text-sm font-medium py-2 bg-white text-slate-700">Under ₹5,000</option>
                <option className="text-sm font-medium py-2 bg-white text-slate-700">₹5,000 - ₹8,000</option>
                <option className="text-sm font-medium py-2 bg-white text-slate-700">₹8,000+</option>
              </select>

              <select className="flex-1 lg:flex-initial text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none cursor-pointer">
                <option className="text-sm font-bold py-2 bg-white text-slate-800">Food: Any</option>
                <option className="text-sm font-medium py-2 bg-white text-slate-700">Veg</option>
                <option className="text-sm font-medium py-2 bg-white text-slate-700">Non-Veg</option>
              </select>

              <select className="flex-1 lg:flex-initial text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none cursor-pointer">
                <option className="text-sm font-bold py-2 bg-white text-slate-800">Room Type: Any</option>
                <option className="text-sm font-medium py-2 bg-white text-slate-700">Single</option>
                <option className="text-sm font-medium py-2 bg-white text-slate-700">Shared</option>
              </select>

              <button
                type="button"
                className="px-5 py-2.5 rounded-xl bg-[#5D42CE] hover:bg-[#4d34b5] text-white text-sm font-black shadow-sm transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* Featured Roommates Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
            <div>
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#5D42CE]" /> Featured Roommates
              </h2>
              <p className="text-[11px] text-slate-400 font-medium">
                Handpicked matches based on your profile and preferences
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span>Sort by:</span>
              <select className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-sm font-bold text-slate-800 focus:outline-none cursor-pointer">
                <option className="text-sm font-semibold py-1.5 bg-white text-slate-800">Most Relevant</option>
                <option className="text-sm font-semibold py-1.5 bg-white text-slate-700">Budget: Low to High</option>
                <option className="text-sm font-semibold py-1.5 bg-white text-slate-700">Rating: High to Low</option>
              </select>
            </div>
          </div>

          {/* Roommate Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {roommates.map((person) => (
              <div
                key={person.id}
                className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border ${person.badgeStyle}`}>
                        {person.badge}
                      </span>
                      <span className="text-[11px] font-black text-amber-500 flex items-center gap-0.5">
                        ★ {person.rating} <span className="text-slate-400 font-medium">({person.reviews})</span>
                      </span>
                    </div>

                    <h3 className="text-sm font-black text-slate-900 mt-1 flex items-center gap-1 truncate">
                      {person.name}
                      <span className="text-xs text-slate-400 font-normal">{person.genderSign}</span>
                    </h3>
                    <p className="text-[10px] text-slate-400 font-semibold">
                      {person.age} • {person.college}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold">
                  <span className="px-2 py-0.5 rounded-lg bg-purple-50 text-purple-700">
                    {person.gender}
                  </span>
                  <span className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700">
                    {person.food}
                  </span>
                  <span className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-600">
                    {person.smoking}
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px] font-medium text-slate-600 pt-1 border-t border-slate-50">
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Looking near: <strong className="text-slate-800">{person.location}</strong></span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-slate-400 font-black">₹</span>
                    <span>Budget: <strong className="text-slate-800">{person.budget}</strong></span>
                  </p>
                  <p className="text-[10px] text-slate-500 truncate">
                    Interests: <span className="font-semibold text-slate-700">{person.interests}</span>
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 text-[10px] italic text-slate-600 leading-snug">
                  &ldquo;{person.quote}&rdquo;
                </div>

                {/* View Profile Link using person.href */}
                <Link
                  href={person.href || "/student/roomates/quiz"}
                  className="w-full py-2 rounded-xl bg-[#5D42CE] hover:bg-[#4d34b5] text-white text-xs font-black shadow-sm transition flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>

        </div>

        {/* =========================================================
            RIGHT COLUMN: QUICK NAV & LIVE CHAT ASIDE
        ========================================================= */}
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
    </div>
  );
}