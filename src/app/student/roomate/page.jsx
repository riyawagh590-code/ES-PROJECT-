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
  ShieldCheck,
  Users,
  Award,
  User,
  Settings,
  ArrowRight,
  Flame,
  Heart,
  PlusCircle,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  ChevronDown,
  Home as HomeIcon,
  Grid,
  Utensils,
  Building,
  Coffee,
  Shirt,
  MessageCircle,
} from "lucide-react";

export default function StudentRoommatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGender, setSelectedGender] = useState("Any");
  const [selectedBudget, setSelectedBudget] = useState("Any");
  const [selectedFood, setSelectedFood] = useState("Any");
  const [selectedSort, setSelectedSort] = useState("Most Relevant");
  const [budgetSlider, setBudgetSlider] = useState(8000);
  const [currentPage, setCurrentPage] = useState(1);

  const sidebarLinks = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "Services", href: "/student/services", icon: Grid },
    { label: "Mess", href: "/student/mess", icon: Utensils },
    { label: "Hostel / PG", href: "/student/pg", icon: Building },
    { label: "Restaurant", href: "/student/cafes", icon: Utensils },
    { label: "Cafe", href: "/student/cafes", icon: Coffee },
    { label: "Laundry", href: "/student/laundry", icon: Shirt },
    { label: "Housekeeping", href: "/student/cleaning", icon: Sparkles },
    { label: "Roommate Finder", href: "/student/roommates", icon: Users, active: true },
    { label: "Freshers Pass", href: "/pass", icon: Award },
    { label: "Notices", href: "/student/notices", icon: Bell },
    { label: "Profile", href: "/student/profile", icon: User },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  const roommates = [
    {
      id: "aditi-sharma",
      name: "Aditi Sharma",
      genderSymbol: "♀",
      ageCollege: "20 • MIT AOE",
      badge: "Verified",
      badgeColor: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      rating: "4.7",
      reviews: "12",
      genderText: "Female",
      food: "Veg",
      smoking: "Non-Smoker",
      lookingNear: "MIT AOE",
      budget: "₹6k - ₹8k/month",
      interests: "Music, Travel, Reading",
      quote: "Looking for a clean, friendly and respectful roommate.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "rohit-verma",
      name: "Rohit Verma",
      genderSymbol: "♂",
      ageCollege: "21 • MIT AOE",
      badge: "Popular",
      badgeColor: "bg-rose-50 text-rose-600 border border-rose-200",
      rating: "4.5",
      reviews: "8",
      genderText: "Male",
      food: "Non-Veg",
      smoking: "Non-Smoker",
      lookingNear: "Dehu Phata",
      budget: "₹5k - ₹7k/month",
      interests: "Sports, Gaming, Movies",
      quote: "Easy going, clean and love meeting new people!",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "sneha-kulkarni",
      name: "Sneha Kulkarni",
      genderSymbol: "♀",
      ageCollege: "21 • MIT AOE",
      badge: "Verified",
      badgeColor: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      rating: "4.8",
      reviews: "15",
      genderText: "Female",
      food: "Veg",
      smoking: "Non-Smoker",
      lookingNear: "Vishweshwar Nagar",
      budget: "₹5k - ₹7k/month",
      interests: "Coding, Books, Food",
      quote: "Looking for a peaceful and cooperative roommate.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "karan-deshpande",
      name: "Karan Deshpande",
      genderSymbol: "♂",
      ageCollege: "22 • MIT AOE",
      badge: "New",
      badgeColor: "bg-purple-50 text-[#6C47FF] border border-purple-200",
      rating: "4.3",
      reviews: "6",
      genderText: "Male",
      food: "Veg",
      smoking: "Non-Smoker",
      lookingNear: "Alandi",
      budget: "₹7k - ₹9k/month",
      interests: "Cricket, Gym, Web Series",
      quote: "Fun, disciplined and always up for good conversations!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "isha-patil",
      name: "Isha Patil",
      genderSymbol: "♀",
      ageCollege: "20 • MIT",
      badge: "Verified",
      badgeColor: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      rating: "4.6",
      reviews: "10",
      genderText: "Female",
      food: "Non-Veg",
      smoking: "Non-Smoker",
      lookingNear: "Dehu Phata",
      budget: "₹5k - ₹7k/month",
      interests: "Art, Music, Cooking",
      quote: "Love a clean space and good vibes only!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: "siddharth-more",
      name: "Siddharth More",
      genderSymbol: "♂",
      ageCollege: "21 • AOE",
      badge: "Popular",
      badgeColor: "bg-rose-50 text-rose-600 border border-rose-200",
      rating: "4.4",
      reviews: "9",
      genderText: "Male",
      food: "Veg",
      smoking: "Non-Smoker",
      lookingNear: "MIT Campus",
      budget: "₹6k - ₹8k/month",
      interests: "Tech, Football, Travel",
      quote: "Looking for a chill and respectful roommate.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9FD] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
      {/* 1. TOP NAVBAR */}
      <Navbar />

      {/* 2. THREE-COLUMN WORKSPACE */}
      <div className="max-w-[1550px] mx-auto px-4 md:px-6 py-6 grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: FILTERS & QUIZ CARD */}
        <aside className="xl:col-span-3 space-y-6">
          {/* Still Confused Quiz Card */}
          <div className="rounded-3xl p-5 bg-gradient-to-br from-purple-50 via-indigo-50/50 to-white border border-purple-100 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-xl shrink-0">
                🏡
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900">Still Confused?</h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Take our quick quiz and get personalized matches!
                </p>
              </div>
            </div>
            <button className="w-full py-2.5 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-sm">
              <span>Take Compatibility Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Filters Box */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#6C47FF]" />
                Quick Filters
              </h3>
              <button className="text-xs font-bold text-[#6C47FF] hover:underline">
                Clear All
              </button>
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 block">Gender</label>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="rounded accent-[#6C47FF]" />
                  <span>Boys</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="rounded accent-[#6C47FF]" />
                  <span>Girls</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded accent-[#6C47FF]" />
                  <span className="text-[#6C47FF] font-bold">Both</span>
                </label>
              </div>
            </div>

            {/* Food Preference */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 block">Food Preference</label>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="rounded accent-[#6C47FF]" />
                  <span>Veg</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="rounded accent-[#6C47FF]" />
                  <span>Non-Veg</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded accent-[#6C47FF]" />
                  <span className="text-[#6C47FF] font-bold">Both</span>
                </label>
              </div>
            </div>

            {/* Budget Slider */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 block">Budget (per month)</label>
              <input
                type="range"
                min="3000"
                max="10000"
                step="500"
                value={budgetSlider}
                onChange={(e) => setBudgetSlider(e.target.value)}
                className="w-full accent-[#6C47FF] cursor-pointer"
              />
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span>₹3,000</span>
                <span>₹{Number(budgetSlider).toLocaleString()}+</span>
              </div>
            </div>

            {/* Room Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 block">Room Type</label>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-600">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded accent-[#6C47FF]" />
                  <span>Single Room</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded accent-[#6C47FF]" />
                  <span>Shared Room</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded accent-[#6C47FF]" />
                  <span>PG / Flat</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded accent-[#6C47FF]" />
                  <span>Hostel</span>
                </label>
              </div>
            </div>

            {/* Additional Preferences */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 block">Additional Preferences</label>
              <div className="space-y-2 text-xs font-semibold text-slate-600">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded accent-[#6C47FF]" />
                  <span>Working Professional</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded accent-[#6C47FF]" />
                  <span>Study Friendly</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded accent-[#6C47FF]" />
                  <span>No Smoking</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded accent-[#6C47FF]" />
                  <span>Pet Friendly</span>
                </label>
              </div>
            </div>

            <button className="w-full py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-extrabold shadow-md shadow-purple-200 transition">
              Apply Filters
            </button>
          </div>

          {/* Left Doodle Box */}
          <div className="rounded-3xl p-5 bg-[#FFF4EE] border border-orange-100 text-center space-y-2 shadow-sm">
            <div className="text-xs font-black text-rose-500 rotate-[-4deg]">
              Better Roommates, Bigger Dreams! ♡
            </div>
            <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&auto=format&fit=crop&q=80"
                alt="Roommates"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </aside>

        {/* CENTER COLUMN: MAIN CONTENT */}
        <main className="xl:col-span-7 space-y-6">
          {/* HERO BANNER */}
          <section className="relative rounded-[32px] bg-gradient-to-r from-[#FFF1F2] via-[#FDF2F8] to-[#F5F3FF] border border-rose-100/70 p-6 md:p-8 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 z-10 max-w-md">
              <h1 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Find your <br />
                <span className="text-[#6C47FF]">perfect roommate ッ</span>
              </h1>
              <p className="text-xs font-medium text-slate-600">
                Same college. Same dreams. <br />
                Find someone who vibes with you!
              </p>
            </div>

            {/* Room Graphic */}
            <div className="relative z-10 flex items-center gap-4 shrink-0">
              <div className="w-48 h-36 md:w-60 md:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80"
                  alt="Cozy student dorm room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:flex flex-col text-[11px] font-bold text-slate-700 space-y-1">
                <span className="text-emerald-600">✓ Safe</span>
                <span className="text-emerald-600">✓ Verified</span>
                <span className="text-emerald-600">✓ Student Friendly</span>
              </div>
            </div>
          </section>

          {/* 4 TOP ACTION PILLS */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-[#6C47FF] transition text-left group">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#6C47FF] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900 group-hover:text-[#6C47FF] transition">
                  Find Roommates
                </h4>
                <p className="text-[10px] text-slate-400">Based on preferences</p>
              </div>
            </button>

            <button className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-orange-500 transition text-left group">
              <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900 group-hover:text-orange-600 transition">
                  Popular Matches
                </h4>
                <p className="text-[10px] text-slate-400">What others choose</p>
              </div>
            </button>

            <button className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-emerald-500 transition text-left group">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900 group-hover:text-emerald-600 transition">
                  My Matches
                </h4>
                <p className="text-[10px] text-slate-400">View saved profiles</p>
              </div>
            </button>

            <button className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-pink-500 transition text-left group">
              <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                <PlusCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900 group-hover:text-pink-600 transition">
                  Post Your Need
                </h4>
                <p className="text-[10px] text-slate-400">Find matches faster</p>
              </div>
            </button>
          </section>

          {/* SEARCH & HORIZONTAL CONTROLS */}
          <section className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200/70 rounded-xl flex-1 min-w-[180px]">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by location, college or interest..."
                className="w-full text-xs font-semibold text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
            </div>

            <div className="relative min-w-[110px]">
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
              >
                <option>Gender: Any</option>
                <option>Boys</option>
                <option>Girls</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>

            <div className="relative min-w-[110px]">
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
              >
                <option>Budget: Any</option>
                <option>₹5k - ₹7k</option>
                <option>₹7k - ₹9k</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>

            <div className="relative min-w-[110px]">
              <select
                value={selectedFood}
                onChange={(e) => setSelectedFood(e.target.value)}
                className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none"
              >
                <option>Food: Any</option>
                <option>Veg</option>
                <option>Non-Veg</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>

            <button className="px-5 py-2.5 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-bold flex items-center gap-1.5 transition shadow-sm">
              <Search className="w-3.5 h-3.5" />
              Search
            </button>
          </section>

          {/* ROOMMATE CARDS LIST */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6C47FF]" />
                  Featured Roommates
                </h3>
                <p className="text-xs text-slate-500">
                  Handpicked matches based on your profile and preferences
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <span>Sort by</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl px-2.5 py-1 text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option>Most Relevant</option>
                  <option>Rating: High to Low</option>
                  <option>Budget: Low to High</option>
                </select>
              </div>
            </div>

            {/* 3-Column Responsive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roommates.map((person) => (
                <div
                  key={person.id}
                  className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    {/* Header: Photo + Details */}
                    <div className="flex items-start gap-3">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[9px] font-black px-2 py-0.5 rounded-full ${person.badgeColor}`}
                          >
                            {person.badge}
                          </span>
                          <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500">
                            <Star className="w-3 h-3 fill-amber-500" />
                            <span>{person.rating}</span>
                            <span className="text-slate-400 font-normal">({person.reviews})</span>
                          </div>
                        </div>

                        <h4 className="text-sm font-black text-slate-900 truncate mt-1">
                          {person.name}{" "}
                          <span className="text-xs font-normal text-slate-400">
                            {person.genderSymbol}
                          </span>
                        </h4>
                        <p className="text-[11px] text-slate-400">{person.ageCollege}</p>

                        <div className="flex flex-wrap items-center gap-1.5 pt-1.5 text-[9px] font-bold text-slate-600">
                          <span className="bg-slate-100 px-1.5 py-0.5 rounded-md">
                            {person.genderText}
                          </span>
                          <span className="bg-slate-100 px-1.5 py-0.5 rounded-md">
                            {person.food}
                          </span>
                          <span className="bg-slate-100 px-1.5 py-0.5 rounded-md">
                            {person.smoking}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-1 text-[11px] text-slate-600 font-medium pt-1 border-t border-slate-50">
                      <p className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>Looking near: <strong>{person.lookingNear}</strong></span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <span className="text-slate-400 font-bold">₹</span>
                        <span>Budget: <strong>{person.budget}</strong></span>
                      </p>
                      <p className="text-[10px] text-slate-500 truncate">
                        Interests: {person.interests}
                      </p>
                    </div>

                    {/* Quote */}
                    <p className="text-[11px] italic text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      "{person.quote}"
                    </p>
                  </div>

                  {/* View Profile Button */}
                  <div className="pt-3">
                    <Link
                      href={`/service/${person.id}`}
                      className="w-full py-2 rounded-xl bg-[#6C47FF] hover:bg-[#5835e5] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-sm shadow-purple-200"
                    >
                      View Profile
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
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
                onClick={() => setCurrentPage(3)}
                className={`w-8 h-8 rounded-xl text-xs font-bold ${
                  currentPage === 3
                    ? "bg-[#6C47FF] text-white shadow-md shadow-purple-200"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                3
              </button>
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* MORE FEATURES PROMO TILES */}
          <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              More Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Link
                href="/stories"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100 flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xs">
                    📖
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-slate-900 group-hover:text-[#6C47FF]">
                      View Roommate Stories
                    </h5>
                    <p className="text-[10px] text-slate-400">Real experiences, real bonds</p>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#6C47FF] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/safety"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100 flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-xs">
                    🛡️
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-slate-900 group-hover:text-[#6C47FF]">
                      Safety Tips
                    </h5>
                    <p className="text-[10px] text-slate-400">Stay safe while sharing</p>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#6C47FF] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/community"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100 flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#6C47FF] flex items-center justify-center text-xs">
                    💬
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-slate-900 group-hover:text-[#6C47FF]">
                      Ask Community
                    </h5>
                    <p className="text-[10px] text-slate-400">Get student advice</p>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#6C47FF] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
        </main>

        {/* RIGHT COLUMN: QUICK NAV SIDEBAR */}
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
              Good Rooms • Good People • Better College Life ッ
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