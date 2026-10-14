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
  Camera,
  Check,
  ArrowRight,
} from "lucide-react";

export default function AnnapurnaReviewPage() {
  const router = useRouter();

  const [overallRating, setOverallRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const [categoryRatings, setCategoryRatings] = useState({
    taste: 5,
    hygiene: 4,
    value: 4,
    service: 5,
  });

  const [reviewText, setReviewText] = useState(
    "Honestly, the best mess near campus! Daily paneer and the Sunday sweets are awesome, always fresh..."
  );
  const [recommend, setRecommend] = useState(true);
  const [anonymous, setAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    const reviewPayload = {
      id: `REV-MES-${Date.now()}`,
      vendor: "Annapurna Mess",
      service: "Mess & Dining",
      rating: overallRating,
      categoryRatings,
      reviewText,
      recommend,
      anonymous,
      reviewer: anonymous ? "Anonymous Student" : "Riya Wagh",
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
    <div className="min-h-screen bg-[#F0F3F9] text-[#14244A] font-sans flex antialiased selection:bg-purple-100">
      {/* 1. LEFT SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-[220px] bg-white border-r border-slate-100 p-4 shrink-0 justify-between sticky top-0 h-screen z-30">
        <div className="space-y-6">
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

          <nav className="space-y-1 pt-1">
            <Link
              href="/student"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <LayoutDashboard className="w-4 h-4 shrink-0 text-slate-400" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/student/bookings"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <CalendarDays className="w-4 h-4 shrink-0 text-slate-400" />
              <span>My Bookings</span>
            </Link>

            <Link
              href="/student/mess/annapurna/review"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold bg-[#6C47FF] text-white shadow-md shadow-purple-200 transition"
            >
              <div className="flex items-center gap-3">
                <MessageSquarePlus className="w-4 h-4 shrink-0 text-white" />
                <span>Ratings &amp; Review</span>
              </div>
              <span className="text-xs">✍️</span>
            </Link>

            <Link
              href="/student/profile"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <Settings className="w-4 h-4 shrink-0 text-slate-400" />
              <span>Profile</span>
            </Link>

            <Link
              href="/pass"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              <Settings className="w-4 h-4 shrink-0 text-slate-400" />
              <span>Freshers Pass</span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center justify-center pb-2">
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-center rotate-[-10deg] opacity-70">
            <span className="text-[10px] font-black leading-tight text-slate-400">
              hand-drawn<br />badge
            </span>
          </div>
        </div>
      </aside>

      {/* 2. MAIN BODY */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 sm:px-10 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[#F3F5FA] p-1.5 rounded-2xl border border-slate-200/50" />

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-2 bg-[#F3F5FA] rounded-xl w-64 border border-slate-200/60">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search campus, services..."
                className="w-full text-xs font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
            </div>

            <button
              type="button"
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

        <main className="p-6 sm:p-10 space-y-5 max-w-[1240px] w-full mx-auto">
          <Link
            href="/student/mess/annapurna"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#6C47FF] shadow-sm transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Annapurna Mess</span>
          </Link>

          <div className="space-y-1.5 pt-1">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#6C47FF] text-white text-xs font-extrabold shadow-sm">
              Share Your Experience
            </span>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <h1 className="text-2xl sm:text-3xl font-black text-[#14244A] tracking-tight">
                Review &amp; Rate Annapurna Mess
              </h1>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E8F8F0] text-[#0FAF53] text-xs font-black">
                ✓ Homely &amp; Hygiene
              </span>

              <span className="text-xs font-bold text-slate-600">
                Dynamic <span className="font-black text-[#14244A]">4.5</span>
                <span className="text-amber-400 text-sm"> ★</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Help your fellow campus peers make better dining choices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start pt-2">
            {/* LEFT MAIN FORM */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-8 bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-[0_10px_35px_rgba(20,36,74,0.03)] space-y-7"
            >
              <div className="text-center space-y-2">
                <h2 className="text-lg sm:text-xl font-black text-[#14244A]">
                  How would you rate the taste &amp; quality?
                </h2>
                <p className="text-xs font-bold text-slate-400">Currently</p>

                <div className="relative inline-flex items-center justify-center gap-3 py-1">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = (hoverRating || overallRating) >= star;
                    return (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setOverallRating(star)}
                        className="transition-transform hover:scale-110 active:scale-95 focus:outline-none"
                      >
                        <span
                          className={`text-5xl sm:text-6xl select-none transition-colors ${
                            isFilled
                              ? "text-[#FBBF24] drop-shadow-[0_2px_8px_rgba(251,191,36,0.3)]"
                              : "text-[#FDE68A]/60"
                          }`}
                        >
                          ★
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="text-sm font-black text-[#10B981] flex items-center justify-center gap-1.5 pt-1">
                  <span>✨</span>
                  <span>{overallRating >= 4 ? "Very Good!" : "Average"}</span>
                  <span>✨</span>
                </div>
              </div>

              {/* Specific Categories */}
              <div className="pt-4 border-t border-slate-100 space-y-3.5">
                <h3 className="text-sm sm:text-base font-black text-[#14244A]">
                  Rate Specific Categories
                </h3>

                <div className="space-y-3">
                  {[
                    { key: "taste", label: "Taste & Food Quality", icon: "🍛", rating: categoryRatings.taste },
                    { key: "hygiene", label: "Hygiene & Cleanliness", icon: "🧼", rating: categoryRatings.hygiene },
                    { key: "value", label: "Value for Money", icon: "💰", rating: categoryRatings.value },
                    { key: "service", label: "Staff & Service", icon: "👨‍🍳", rating: categoryRatings.service },
                  ].map((row) => (
                    <div
                      key={row.key}
                      className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-base">{row.icon}</span>
                        <span>{row.label}</span>
                      </span>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() =>
                                setCategoryRatings((prev) => ({
                                  ...prev,
                                  [row.key]: s,
                                }))
                              }
                              className="focus:outline-none"
                            >
                              <span
                                className={`text-base ${
                                  row.rating >= s
                                    ? "text-[#FBBF24]"
                                    : "text-[#FDE68A]/40"
                                }`}
                              >
                                ★
                              </span>
                            </button>
                          ))}
                        </div>
                        <span className="text-xs font-black text-slate-500 w-6 text-right">
                          {row.rating}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Written Review */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-black text-[#14244A] block">
                  Write your review
                </label>
                <div className="rounded-2xl border-2 border-[#8B5CF6]/50 p-4 focus-within:border-[#7C3AED] focus-within:ring-2 focus-within:ring-purple-100 transition">
                  <textarea
                    rows={3}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value.slice(0, 500))}
                    className="w-full text-xs sm:text-sm font-medium text-slate-800 bg-transparent outline-none resize-none leading-relaxed"
                  />
                </div>
                <div className="text-right text-[11px] font-bold text-slate-400">
                  {reviewText.length} / 500 characters
                </div>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-wrap items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700 select-none">
                  <input
                    type="checkbox"
                    checked={recommend}
                    onChange={(e) => setRecommend(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center transition ${
                      recommend ? "bg-emerald-500 text-white" : "bg-slate-200"
                    }`}
                  >
                    {recommend && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span>Recommend to others</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700 select-none">
                  <input
                    type="checkbox"
                    checked={anonymous}
                    onChange={(e) => setAnonymous(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 accent-[#6C47FF]"
                  />
                  <span>Post anonymously</span>
                </label>
              </div>

              {/* Photo Upload Box */}
              <div className="space-y-2 pt-1">
                <label className="text-xs sm:text-sm font-black text-[#14244A] block">
                  Add photos/files
                </label>
                <div className="border-2 border-dashed border-[#A5B4FC]/70 rounded-2xl p-5 bg-[#F8FAFF] flex items-center justify-between gap-4">
                  <div className="flex flex-col items-start gap-1">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-500">
                      <Camera className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-700 mt-1">
                      + Add Photos of Food
                    </span>
                  </div>

                  <div className="relative w-36 h-20 rounded-xl overflow-hidden shadow-md border-2 border-white shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80"
                      alt="Uploaded food dish"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/student/mess/annapurna"
                  className="w-1/3 py-3.5 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-xs text-center transition shadow-sm"
                >
                  Cancel
                </Link>

                <div className="relative w-2/3">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-[#6C47FF] hover:bg-[#5835E5] text-white font-black text-xs shadow-lg shadow-purple-200 transition active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Submit My Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-4 bg-white rounded-[32px] p-6 border border-slate-200/80 shadow-[0_10px_35px_rgba(20,36,74,0.03)] space-y-5">
              <div className="rounded-2xl bg-gradient-to-r from-[#6C47FF] via-[#8553F6] to-[#A855F7] p-4 text-white shadow-sm">
                <h3 className="text-base font-black flex items-center gap-1.5 tracking-tight">
                  Your Voice Matters ッ
                </h3>
              </div>

              <div className="rounded-2xl overflow-hidden h-40 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80"
                  alt="Campus peers smiling"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F9ED] text-[#0FAF53] text-xs font-bold">
                  🌱 Verified Reviews
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF5DC] text-[#D98200] text-xs font-bold">
                    🧀 Peer Trust
                  </span>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEAE4] text-[#E0533C] text-xs font-bold">
                    🍲 Quality Checking
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <h4 className="text-xs font-black text-[#14244A]">Quick Checklist</h4>
                <ol className="text-xs font-bold text-slate-500 space-y-1.5 pl-1 list-decimal list-inside leading-relaxed">
                  <li>Be honest</li>
                  <li>Respectful</li>
                  <li>Focus on taste, hygiene, value</li>
                </ol>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6F3FF] border border-purple-100 space-y-2">
                <h5 className="text-[11px] font-black text-[#14244A]">
                  Recent Peer Words
                </h5>
                <p className="text-[10px] text-slate-500 font-medium">
                  A fast avatar text scroll to validate reviews.
                </p>

                <div className="flex items-center gap-2.5 pt-1">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Reviewer Avatar"
                    className="w-6 h-6 rounded-full object-cover ring-2 ring-white"
                  />
                  <span className="px-2.5 py-1 rounded-lg bg-[#6C47FF] text-white text-[10px] font-bold">
                    &quot;Feels like home!&quot; - R. Sharma
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* SUCCESS MODAL */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl shadow-sm">
              ✨
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#14244A]">
                Review Submitted!
              </h3>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                Thank you for reviewing <span className="font-bold text-slate-900">Annapurna Mess</span>. Your rating is now reflected on the mess profile.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50 text-left text-xs font-bold text-[#6C47FF] space-y-1">
              <p>✦ Rating: {overallRating}/5 Stars</p>
              <p className="text-slate-500 font-semibold text-[11px]">
                Posted {anonymous ? "anonymously" : "as verified student"}.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => router.push("/student/mess/annapurna")}
                className="flex-1 py-3 rounded-2xl bg-[#6C47FF] hover:bg-[#5835E5] text-white text-xs font-black shadow-md shadow-purple-200 transition"
              >
                Back to Annapurna Mess
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}