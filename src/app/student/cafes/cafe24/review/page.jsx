"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  LayoutDashboard,
  CalendarDays,
  Star,
  MessageSquarePlus,
  Settings,
  ArrowLeft,
  Search,
  Bell,
  CheckCircle2,
  Camera,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Cafe24ReviewPage() {
  const router = useRouter();

  // Ratings State
  const [mainRating, setMainRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const [categoryRatings, setCategoryRatings] = useState({
    taste: 5,
    drinks: 4,
    value: 4,
    speed: 5,
  });

  // Form State
  const [reviewText, setReviewText] = useState(
    "The best spot on campus for a quick bite! I absolutely love their special combos—the Maggie + Coffee for ₹99 is a lifesaver between classes. The seating gets busy, but the service is super fast, and the staff is really friendly. Perfectly priced for students!..."
  );
  const [recommend, setRecommend] = useState(true);
  const [postAnonymous, setPostAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reliable Image Sources with fallback handlers
  const previewImages = [
    {
      id: "fries",
      alt: "French Fries",
      src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&auto=format&fit=crop&q=80",
      fallback: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "burger",
      alt: "Cheeseburger",
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=80",
      fallback: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "coffee",
      alt: "Hot Latte Art",
      src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&auto=format&fit=crop&q=80",
      fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "counter",
      alt: "Cafe Counter & Desserts",
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&auto=format&fit=crop&q=80",
      fallback: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&auto=format&fit=crop&q=80",
    },
  ];

  const ratingLabels = {
    1: "Needs Improvement",
    2: "Fair",
    3: "Good",
    4: "Very Good!",
    5: "Exceptional! ✨",
  };

  const handleCategoryRate = (category, value) => {
    setCategoryRatings((prev) => ({ ...prev, [category]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewPayload = {
      id: `REV-CF-${Date.now()}`,
      vendor: "Cafe 24",
      service: "Cafe & Dining",
      rating: mainRating,
      categoryRatings,
      reviewText,
      recommend,
      anonymous: postAnonymous,
      reviewer: postAnonymous ? "Anonymous Student" : "Riya Wagh",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    try {
      const existing = JSON.parse(
        localStorage.getItem("student_reviews") || "[]"
      );
      localStorage.setItem(
        "student_reviews",
        JSON.stringify([reviewPayload, ...existing])
      );
    } catch (err) {
      console.error(err);
    }

    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F6FC] text-[#14244A] font-sans flex antialiased">
      {/* =====================================================
          1. LEFT SIDEBAR (STICKY & MATCHED HIERARCHY)
      ====================================================== */}
      <aside className="hidden lg:flex flex-col w-[230px] bg-white border-r border-slate-100 p-4 shrink-0 justify-between sticky top-0 h-screen z-30">
        <div className="space-y-6">
          {/* Logo */}
          <Link href="/student" className="flex items-center gap-3 px-2 pt-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#6C47FF] to-[#8C62FF] flex items-center justify-center text-white shadow-md shadow-purple-200">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-[#14244A] block leading-none">
                Studentica.
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-1 block">
                CAMPUS FEEDS
              </span>
            </div>
          </Link>

          {/* Navigation Items (Add Review is ACTIVE) */}
          <nav className="space-y-1 pt-2">
            
            {/* Active Highlight on Add Review */}
            

            
          </nav>
        </div>

        {/* Hand-drawn badge stamp */}
        <div className="flex items-center justify-center pb-2">
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-center rotate-[-10deg] opacity-75">
            <span className="text-[10px] font-black leading-tight text-slate-400">
              hand-drawn<br />badge
            </span>
          </div>
        </div>
      </aside>

      {/* =====================================================
          2. MAIN CONTENT VIEWPORT
      ====================================================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[#F4F5F9] p-1.5 rounded-2xl border border-slate-200/50">
            
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-2 bg-[#F3F5FA] rounded-xl w-64 border border-slate-200/60">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search campus, services..."
                suppressHydrationWarning
                data-lpignore="true"
                autoComplete="off"
                className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
            </div>

            <button
              type="button"
              suppressHydrationWarning
              className="relative p-2.5 rounded-xl bg-[#F3F5FA] text-slate-600 hover:text-slate-900 transition"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FF3B7A] text-[9px] font-black text-white flex items-center justify-center">
                8
              </span>
            </button>

            <Link
              href="/student/profile"
              className="flex items-center gap-3 pl-3 border-l border-slate-200"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-purple-100"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-black text-[#14244A] leading-tight">
                  Hi, Riya!
                </p>
                <p className="text-[10px] text-slate-400 font-semibold">Student</p>
              </div>
            </Link>
          </div>
        </header>

        {/* Content Body */}
        <main className="p-6 sm:p-8 space-y-6 max-w-[1250px] w-full mx-auto">
          {/* Back Pill Button */}
          <Link
            href="/student/cafes/cafe24"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#6C47FF] shadow-sm transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Cafe 24</span>
          </Link>

          {/* Heading Block */}
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#6C47FF] text-white text-[11px] font-black shadow-sm shadow-purple-200">
              Share Your Experience
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-black text-[#14244A] tracking-tight">
                Review &amp; Rate Cafe 24
              </h1>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E3F9EC] text-[#0FAF53] text-xs font-black">
                🌱 Verified Service
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF5DC] text-[#D98200] text-xs font-black">
                Dynamic 4.6 ★
              </span>
            </div>

            <p className="text-xs font-medium text-slate-500">
              Help your fellow campus peers make better dining, beverage, and hangout choices.
            </p>
          </div>

          {/* ===================================================
              TWO COLUMN LAYOUT: REVIEW FORM & SIDEBAR CARD
          ==================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT MAIN CARD: 8 COLS */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-8 bg-white rounded-[32px] p-6 sm:p-8 border border-slate-100 shadow-sm space-y-8"
            >
              {/* Core Star Rating Component */}
              <div className="text-center space-y-3 py-2">
                <h2 className="text-lg sm:text-xl font-black text-[#14244A]">
                  How would you rate the food &amp; beverage quality?
                </h2>
                <p className="text-[11px] font-bold text-slate-400">Currently</p>

                {/* Big Interactive Stars */}
                <div className="flex items-center justify-center gap-2 text-4xl sm:text-5xl">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      suppressHydrationWarning
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setMainRating(star)}
                      className="transition-transform hover:scale-110 focus:outline-none"
                    >
                      <span
                        className={
                          (hoverRating || mainRating) >= star
                            ? "text-amber-400 drop-shadow"
                            : "text-slate-200"
                        }
                      >
                        ★
                      </span>
                    </button>
                  ))}
                </div>

                <div className="text-xs font-black text-[#0FAF53] flex items-center justify-center gap-1.5 pt-1">
                  <span>✨</span>
                  <span>{ratingLabels[hoverRating || mainRating]}</span>
                  <span>✨</span>
                </div>
              </div>

              {/* Specific Categories */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-black text-[#14244A]">
                  Rate Specific Categories
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      key: "taste",
                      label: "Taste & Food Quality",
                      icon: "🍔",
                    },
                    {
                      key: "drinks",
                      label: "Drinks & Beverages",
                      icon: "☕",
                    },
                    {
                      key: "value",
                      label: "Value for Money",
                      icon: "💰",
                    },
                    {
                      key: "speed",
                      label: "Speed & Service",
                      icon: "⚡",
                    },
                  ].map((cat) => (
                    <div
                      key={cat.key}
                      className="flex items-center justify-between text-xs font-bold text-slate-700 p-2 rounded-xl hover:bg-slate-50 transition"
                    >
                      <div className="flex items-center gap-2">
                        <span>{cat.icon}</span>
                        <span>{cat.label}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-xs">→</span>
                        <div className="flex text-amber-400 text-sm">
                          {[1, 2, 3, 4, 5].map((val) => (
                            <button
                              key={val}
                              type="button"
                              suppressHydrationWarning
                              onClick={() => handleCategoryRate(cat.key, val)}
                              className="focus:outline-none"
                            >
                              <span
                                className={
                                  categoryRatings[cat.key] >= val
                                    ? "text-amber-400"
                                    : "text-slate-200"
                                }
                              >
                                ★
                              </span>
                            </button>
                          ))}
                        </div>
                        <span className="text-[11px] font-black text-slate-500 w-6 text-right">
                          {categoryRatings[cat.key]}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Written Review */}
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-700 block">
                  Write your review
                </label>
                <textarea
                  rows={4}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  maxLength={500}
                  suppressHydrationWarning
                  data-lpignore="true"
                  className="w-full text-xs font-medium text-slate-800 bg-white border border-slate-200 rounded-2xl p-4 focus:outline-none focus:border-[#6C47FF] focus:ring-2 focus:ring-purple-100 transition resize-none"
                />
                <div className="text-right text-[10px] font-bold text-slate-400">
                  {reviewText.length} / 500 characters
                </div>
              </div>

              {/* Checkbox Options */}
              <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-slate-700">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={recommend}
                    onChange={(e) => setRecommend(e.target.checked)}
                    suppressHydrationWarning
                    className="w-4 h-4 rounded text-[#6C47FF] focus:ring-purple-200 accent-[#0FAF53]"
                  />
                  <span>Recommend to others</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={postAnonymous}
                    onChange={(e) => setPostAnonymous(e.target.checked)}
                    suppressHydrationWarning
                    className="w-4 h-4 rounded text-[#6C47FF] focus:ring-purple-200"
                  />
                  <span>Post anonymously</span>
                </label>
              </div>

              {/* Photo Upload Section with fully resilient thumbnail previews */}
              <div className="space-y-2">
                <span className="text-xs font-black text-slate-700 block">
                  Add photos/files
                </span>

                <div className="rounded-2xl border-2 border-dashed border-slate-200 p-4 flex flex-wrap items-center gap-3.5 bg-slate-50/50">
                  <button
                    type="button"
                    suppressHydrationWarning
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:border-[#6C47FF] hover:text-[#6C47FF] transition shadow-sm"
                  >
                    <Camera className="w-4 h-4 text-slate-400" />
                    <span>+ Add Photos of Food/Cafe</span>
                  </button>

                  {/* 4 Guaranteed Preview Thumbnails */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {previewImages.map((img) => (
                      <div
                        key={img.id}
                        className="w-14 h-14 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 shrink-0"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="eager"
                          onError={(e) => {
                            if (e.currentTarget.src !== img.fallback) {
                              e.currentTarget.src = img.fallback;
                            }
                          }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-4">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => router.push("/student/cafes/cafe24")}
                  className="px-8 py-3 rounded-2xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>

                <div className="relative">
                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="px-8 py-3.5 rounded-2xl bg-[#5833B6] hover:bg-[#49279D] text-white text-xs font-black shadow-lg shadow-purple-200 transition active:scale-[0.99] flex items-center gap-2"
                  >
                    <span>Submit My Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="absolute right-2 -bottom-4 pointer-events-none">
                    <span className="text-2xl drop-shadow">👆</span>
                  </div>
                </div>
              </div>
            </form>

            {/* RIGHT SIDEBAR PANEL: 4 COLS */}
            <div className="lg:col-span-4 space-y-5">
              {/* Your Voice Matters Hero Card */}
              <div className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm space-y-4 overflow-hidden">
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#6C47FF] to-[#8C62FF] text-white text-center font-black text-sm shadow-sm">
                  Your Voice Matters ッ
                </div>

                <div className="rounded-2xl overflow-hidden shadow-sm h-48 border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop&q=80"
                    alt="Cafe counter seating"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 pt-1 text-xs font-bold">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verified Reviews</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>Peer Trust</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-rose-50 text-rose-800 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-rose-600" />
                    <span>Taste &amp; Quality</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-black text-[#14244A]">
                    Quick Checklist
                  </h4>
                  <ul className="text-xs font-medium text-slate-500 space-y-1 leading-relaxed">
                    <li>1. Be honest</li>
                    <li>2. Respectful</li>
                    <li>3. Focus on taste, hygiene, speed, and cost</li>
                  </ul>
                </div>

                {/* Recent Peer Words */}
                <div className="p-4 rounded-2xl bg-[#F6F4FE] border border-purple-100 space-y-2">
                  <h5 className="text-[11px] font-black text-[#14244A]">
                    Recent Peer Words
                  </h5>
                  <p className="text-[10px] text-slate-400 font-medium">
                    A fast avatar text scroll to validate reviews.
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                      alt="K. Sen"
                      className="w-6 h-6 rounded-full object-cover ring-2 ring-white"
                    />
                    <span className="px-2.5 py-1 rounded-full bg-[#5833B6] text-white text-[10px] font-bold">
                      &quot;Amazing cold coffee!&quot; - K. Sen
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* =====================================================
          3. SUCCESS POPUP MODAL
      ====================================================== */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl shadow-sm">
              ☕
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#14244A]">
                Review Submitted!
              </h3>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                Thank you for reviewing <span className="font-bold text-slate-900">Cafe 24</span>. Your feedback helps students discover the best snacks and study hangout spots!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50 text-left text-xs font-bold text-[#6C47FF] space-y-1">
              <p>✦ Rating: {mainRating}/5 Stars</p>
              <p className="text-slate-500 font-semibold text-[11px]">
                Posted {postAnonymous ? "anonymously" : "as verified student"}.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => router.push("/student/cafes/cafe24")}
                className="flex-1 py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835E5] text-white text-xs font-black shadow-md shadow-purple-200 transition"
              >
                Back to Cafe 24
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}