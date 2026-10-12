"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  MoreVertical,
  Check,
  Moon,
  Sun,
  Sunrise,
  Clock,
  Sparkles,
  Utensils,
  MapPin,
  Users,
} from "lucide-react";

export default function CompatibilityQuizPage() {
  const [scheduleOption, setScheduleOption] = useState("early_bird");
  const [foodChoice, setFoodChoice] = useState("veg");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <div className="min-h-screen bg-[#EEF2FC] text-slate-800 font-sans antialiased p-4 sm:p-6 lg:p-8">
      {/* Top Bar: Back to Roommate Page Button */}
      <div className="max-w-[1380px] mx-auto mb-5">
        <Link
          href="/student/roommates"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#5938B8] hover:bg-[#4d2fa3] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span>Back to Roommate Page</span>
        </Link>
      </div>

      {/* Main 3-Column Card Layout */}
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* =========================================================
            LEFT COLUMN: ADITI SHARMA PROFILE CARD
        ========================================================= */}
        <div className="lg:col-span-3 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            {/* Dark Teal/Green Header Banner with 3 Dots */}
            <div className="relative h-20 bg-[#28686B] flex items-start justify-end p-3.5">
              <button
                type="button"
                className="text-white/80 hover:text-white transition cursor-pointer"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            {/* Avatar & Verification Star */}
            <div className="relative px-5 -mt-11 flex flex-col items-center">
              <div className="relative w-20 h-20 rounded-full border-4 border-white shadow-md bg-white overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
                  alt="Aditi Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-[calc(50%-44px)] w-6 h-6 rounded-full bg-[#189B77] border-2 border-white flex items-center justify-center text-white shadow-sm">
                <Star className="w-3 h-3 fill-white" />
              </div>

              {/* Name, Age, Badge */}
              <h2 className="text-base font-black text-slate-900 mt-2.5 leading-tight text-center">
                Aditi Sharma
              </h2>
              <p className="text-xs font-bold text-slate-500 text-center">20</p>
              
              <div className="mt-1 px-3 py-0.5 rounded-lg bg-[#E1F3FE] text-[#0284C7] text-[10px] font-extrabold uppercase tracking-wide">
                BTech CS
              </div>
            </div>

            {/* Profile Info Attributes */}
            <div className="p-5 pt-3 space-y-2 text-xs">
              <div>
                <p className="text-[11px] font-bold text-slate-500">College</p>
                <p className="font-extrabold text-slate-900 leading-tight">MIT AOE</p>
              </div>

              <div>
                <p className="text-[11px] font-bold text-slate-500">Branch</p>
                <p className="font-extrabold text-slate-900 leading-tight">Computer Engineering</p>
              </div>

              <div>
                <p className="text-[11px] font-bold text-slate-500">Home Town</p>
                <p className="font-extrabold text-slate-900 leading-tight">Nagpur, MH</p>
              </div>

              <div>
                <p className="text-[11px] font-bold text-slate-500">Hobbies</p>
                <p className="font-extrabold text-slate-900 leading-tight">Music, Travel, Reading</p>
              </div>

              <div>
                <p className="text-[11px] font-bold text-slate-500">Personal Bio</p>
                <p className="font-extrabold text-slate-900 leading-snug">
                  Extrovert, nature, friendly, focused, smowling as the...
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-5 pt-0 grid grid-cols-2 gap-2 mt-2">
            <button
              type="button"
              className="py-2 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold transition text-center cursor-pointer"
            >
              DM Match
            </button>
            <button
              type="button"
              className="py-2 px-3 rounded-xl bg-[#140E36] hover:bg-[#1f1654] text-white text-xs font-bold transition text-center cursor-pointer shadow-sm"
            >
              Save Match
            </button>
          </div>
        </div>

        {/* =========================================================
            CENTER COLUMN: COMPATIBILITY QUIZ (7 QUESTIONS)
        ========================================================= */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-100 space-y-5">
          {/* Quiz Header & Progress */}
          <div>
            <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              COMPATIBILITY QUIZ: 7 Questions
            </h1>
            <p className="text-xs font-bold text-slate-500 mt-1">
              Question 4 of 7
            </p>
            {/* Progress Bar */}
            <div className="w-full bg-[#E5E9F5] h-1.5 rounded-full mt-2.5 overflow-hidden">
              <div className="bg-[#5938B8] h-full w-[46%] rounded-full" />
            </div>
          </div>

          <div className="space-y-4 pt-1 text-xs">
            {/* Question: Sleep & Study Schedule */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-1.5 font-black text-slate-900 text-xs">
                <span className="w-4 h-4 rounded-full bg-[#5938B8] text-white text-[10px] flex items-center justify-center font-bold">
                  i
                </span>
                <span>What is your sleep and study schedule?</span>
              </div>

              {/* Option 1: Night Owl */}
              <div
                onClick={() => setScheduleOption("night_owl")}
                className="w-full p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl border border-slate-200 bg-[#F8F9FE] flex items-center justify-between cursor-pointer hover:border-purple-300 transition"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full border border-slate-300 bg-white shrink-0" />
                  <Moon className="w-3.5 h-3.5 text-[#5938B8]" />
                  <span className="font-bold text-slate-800 text-xs">
                    Night Owl (Late study & sleep)
                  </span>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#5938B8] text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              </div>

              {/* Option 2: Early Bird (Selected) */}
              <div
                onClick={() => setScheduleOption("early_bird")}
                className="w-full p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl border-2 border-[#5938B8] bg-[#F4F1FD] flex items-center justify-between cursor-pointer transition"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#5938B8] flex items-center justify-center bg-white shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5938B8]" />
                  </div>
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-bold text-slate-900 text-xs">
                    Early Bird (Early morning routine)
                  </span>
                </div>
                <span className="w-3.5 h-3.5 rounded-full border border-slate-300 bg-white" />
              </div>

              {/* Option 3: Balanced */}
              <div
                onClick={() => setScheduleOption("balanced")}
                className="w-full p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl border border-slate-200 bg-[#F8F9FE] flex items-center justify-between cursor-pointer hover:border-purple-300 transition"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full border border-slate-300 bg-white shrink-0" />
                  <Sunrise className="w-3.5 h-3.5 text-teal-600" />
                  <span className="font-bold text-slate-800 text-xs">
                    Balanced (Regular day hours)
                  </span>
                </div>
                <span className="w-3.5 h-3.5 rounded-full border border-slate-300 bg-white" />
              </div>
            </div>

            {/* Question: Food Choice */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 font-black text-slate-900 text-xs">
                <span className="w-3.5 h-3.5 rounded-full border border-slate-400 bg-white shrink-0" />
                <span>What is your food choice?</span>
              </div>
              <div className="flex items-center gap-5 pl-5 text-xs font-bold text-slate-800">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#5938B8] flex items-center justify-center bg-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5938B8]" />
                  </div>
                  <span>Veg</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <span className="w-3.5 h-3.5 rounded-full border border-slate-400 bg-white" />
                  <span>Both</span>
                </label>
              </div>
            </div>

            {/* Question: Language */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 font-black text-slate-900 text-xs">
                <span className="w-3.5 h-3.5 rounded-full border border-slate-400 bg-white shrink-0" />
                <span>Language your language?</span>
              </div>
              <div className="pl-5">
                <div className="relative max-w-md">
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full py-2 pl-9 pr-8 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-800 appearance-none focus:outline-none cursor-pointer"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Marathi">Marathi</option>
                  </select>
                  <span className="absolute left-3 top-2.5 text-xs leading-none">🇮🇳</span>
                  <span className="absolute right-3 top-3 pointer-events-none text-slate-400 text-[10px]">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            {/* Question: Economic Budget */}
            <div className="pt-1">
              <div className="flex items-center gap-2 font-black text-slate-900 text-xs">
                <span className="w-3.5 h-3.5 rounded-full border border-slate-400 bg-white shrink-0" />
                <span>What is your economic and economic budget?</span>
              </div>
            </div>
          </div>

          {/* Calculate Score CTA Button */}
          <div className="pt-3 text-center">
            <button
              type="button"
              className="px-8 py-2.5 rounded-xl bg-[#231252] hover:bg-[#1a0c40] text-white text-xs font-black shadow-md transition cursor-pointer"
            >
              Calculate Score
            </button>
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN: COMPATIBILITY SCORE & BREAKDOWN
        ========================================================= */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Score Card Banner */}
          <div className="bg-[#140E36] rounded-3xl p-6 text-white text-center relative shadow-sm border border-purple-950 flex flex-col items-center">
            <div className="w-full flex justify-end">
              <button
                type="button"
                className="text-white/60 hover:text-white transition cursor-pointer"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            {/* Radial Dial 86% */}
            <div className="relative w-32 h-32 my-1 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  className="stroke-[#2B235E]"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  className="stroke-[#10B981]"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset="35.16"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-white leading-none">
                  86%
                </span>
                <span className="text-[10px] font-bold text-slate-300 mt-0.5">
                  Compatibility
                </span>
              </div>
            </div>

            <p className="text-xs font-bold text-slate-300 mt-2">
              Match Compatibility Score
            </p>
          </div>

          {/* Breakdown Items List */}
          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-3.5">
            {/* Study Time */}
            <div className="flex items-start gap-2.5 text-xs">
              <div className="w-6 h-6 rounded-lg bg-[#EFEAFE] text-[#5938B8] flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div className="leading-tight">
                <p className="font-extrabold text-slate-900">Study Time:</p>
                <p className="text-[11px] text-slate-600 font-semibold">
                  Early morning <span className="text-[#059669] font-bold">(Matches 90%)</span>
                </p>
              </div>
            </div>

            {/* Cleanliness */}
            <div className="flex items-start gap-2.5 text-xs">
              <div className="w-6 h-6 rounded-lg bg-[#E7F8F2] text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="leading-tight">
                <p className="font-extrabold text-slate-900">Cleanliness:</p>
                <p className="text-[11px] text-slate-600 font-semibold">
                  Very neat <span className="text-[#059669] font-bold">(Matches 95%)</span>
                </p>
              </div>
            </div>

            {/* Food Choice */}
            <div className="flex items-start gap-2.5 text-xs">
              <div className="w-6 h-6 rounded-lg bg-[#EBF7EE] text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                <Utensils className="w-3.5 h-3.5" />
              </div>
              <div className="leading-tight">
                <p className="font-extrabold text-slate-900">Food Choice:</p>
                <p className="text-[11px] text-slate-600 font-semibold">
                  Veg/Both <span className="text-[#059669] font-bold">(Matches 85%)</span>
                </p>
              </div>
            </div>

            {/* Hometown */}
            <div className="flex items-start gap-2.5 text-xs">
              <div className="w-6 h-6 rounded-lg bg-[#EFEAFE] text-[#5938B8] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div className="leading-tight">
                <p className="font-extrabold text-slate-900">Hometown:</p>
                <p className="text-[11px] text-slate-600 font-semibold">
                  Nagpur, MH
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="flex items-start gap-2.5 text-xs">
              <div className="w-6 h-6 rounded-lg bg-[#EFEAFE] text-[#5938B8] flex items-center justify-center shrink-0 mt-0.5">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div className="leading-tight">
                <p className="font-extrabold text-slate-900">Interests:</p>
                <p className="text-[11px] text-slate-600 font-semibold">
                  Traveling & coding
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                className="py-1.5 px-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold transition text-center cursor-pointer"
              >
                Direct Message
              </button>
              <button
                type="button"
                className="py-1.5 px-2 rounded-xl bg-[#140E36] hover:bg-[#1f1654] text-white text-xs font-bold transition text-center cursor-pointer shadow-sm"
              >
                Save Match
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}