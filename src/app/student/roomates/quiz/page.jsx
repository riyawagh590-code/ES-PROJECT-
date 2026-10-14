"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Check,
  Send,
  X,
  Heart,
  MessageCircle,
  Sparkles,
  BookmarkCheck,
  Star,
} from "lucide-react";

export default function RoommateQuizPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalQuestions = 7;

  // Answers State
  const [answers, setAnswers] = useState({
    schedule: "Early Bird",
    food: "Veg",
    language: "English",
    budget: "₹4,000 - ₹6,000",
    cleanliness: "Very Neat",
    guests: "Occasional Friends Allowed",
    noise: "Quiet Study Atmosphere",
  });

  const [compatibilityScore, setCompatibilityScore] = useState(86);
  const [isSaved, setIsSaved] = useState(false);
  const [isDmOpen, setIsDmOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const candidateProfile = {
    id: "rm-aditi",
    name: "Aditi Sharma",
    age: 20,
    course: "BTech CS",
    college: "MIT AOE",
    branch: "Computer Engineering",
    hometown: "Nagpur, MH",
    hobbies: "Music, Travel, Reading",
    bio: "Extrovert by nature, friendly, focused on coding & hackathons. Looking for a neat and peaceful flatmate.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
    budget: "₹4,500/mo",
    rating: "4.9",
  };

  // Check if candidate is already saved
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("saved_roommates") || "[]");
      if (saved.some((p) => p.id === candidateProfile.id)) {
        setIsSaved(true);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  // Handle Save Match
  const handleSaveMatch = () => {
    try {
      const existing = JSON.parse(localStorage.getItem("saved_roommates") || "[]");
      if (!isSaved) {
        const updated = [candidateProfile, ...existing.filter((p) => p.id !== candidateProfile.id)];
        localStorage.setItem("saved_roommates", JSON.stringify(updated));
        setIsSaved(true);
        window.dispatchEvent(new Event("storage"));
        showToast("Aditi Sharma saved to your matches!");
      } else {
        const updated = existing.filter((p) => p.id !== candidateProfile.id);
        localStorage.setItem("saved_roommates", JSON.stringify(updated));
        setIsSaved(false);
        window.dispatchEvent(new Event("storage"));
        showToast("Removed from saved matches.");
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Handle Sending Direct Message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    try {
      const chatKey = `roommate_chat_${candidateProfile.id}`;
      const existingChats = JSON.parse(localStorage.getItem(chatKey) || "[]");
      const newMsg = {
        id: Date.now(),
        sender: "Riya Wagh",
        text: messageText.trim(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      localStorage.setItem(chatKey, JSON.stringify([...existingChats, newMsg]));
      window.dispatchEvent(new Event("storage"));
      setMessageText("");
      showToast("Message sent to Aditi!");
      setIsDmOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  const calculateDynamicScore = () => {
    let score = 75;
    if (answers.schedule === "Early Bird") score += 6;
    if (answers.food === "Veg") score += 5;
    if (answers.cleanliness === "Very Neat") score += 5;
    if (score > 98) score = 96;
    setCompatibilityScore(score);
    showToast(`Updated Compatibility Score: ${score}%`);
  };

  return (
    <div className="min-h-screen bg-[#F4F6FC] text-slate-800 p-4 sm:p-6 lg:p-8 font-sans antialiased">
      <div className="max-w-[1450px] mx-auto space-y-5">
        {/* Top Back Navigation */}
        <Link
          href="/student/roomates"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#5D42CE] hover:bg-[#4d34b5] text-white text-xs font-black shadow-sm transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Roommate Page</span>
        </Link>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* =========================================
              LEFT PROFILE CARD: ADITI SHARMA
          ========================================== */}
          <div className="lg:col-span-3 bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
            <div className="h-28 bg-[#1D4E5B] relative flex items-end justify-center">
              <div className="relative -bottom-10 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md bg-white">
                <img
                  src={candidateProfile.img}
                  alt={candidateProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="pt-12 p-5 text-center space-y-3">
              <div>
                <h3 className="text-base font-black text-slate-900">{candidateProfile.name}</h3>
                <p className="text-xs text-slate-400 font-semibold">{candidateProfile.age} yrs</p>
                <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase">
                  {candidateProfile.course}
                </span>
              </div>

              <div className="text-left text-xs font-medium text-slate-600 space-y-1.5 pt-2 border-t border-slate-100">
                <p><span className="font-bold text-slate-400 text-[10px] block uppercase">College:</span> {candidateProfile.college}</p>
                <p><span className="font-bold text-slate-400 text-[10px] block uppercase">Branch:</span> {candidateProfile.branch}</p>
                <p><span className="font-bold text-slate-400 text-[10px] block uppercase">Hometown:</span> {candidateProfile.hometown}</p>
                <p><span className="font-bold text-slate-400 text-[10px] block uppercase">Hobbies:</span> {candidateProfile.hobbies}</p>
                <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                  <span className="font-bold text-slate-400 text-[10px] block uppercase">Personal Bio:</span>
                  &ldquo;{candidateProfile.bio}&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsDmOpen(true)}
                  className="py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-black transition cursor-pointer"
                >
                  DM Match
                </button>
                <button
                  type="button"
                  onClick={handleSaveMatch}
                  className={`py-2.5 rounded-xl text-xs font-black transition cursor-pointer flex items-center justify-center gap-1 ${
                    isSaved
                      ? "bg-emerald-600 text-white"
                      : "bg-[#140E36] hover:bg-[#201752] text-white"
                  }`}
                >
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  <span>{isSaved ? "Saved ✓" : "Save Match"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* =========================================
              CENTER: 7-QUESTION INTERACTIVE QUIZ
          ========================================== */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm space-y-5">
            <div>
              <div className="flex items-center justify-between pb-1">
                <h2 className="text-base font-black text-slate-900 tracking-tight">
                  COMPATIBILITY QUIZ: 7 Questions
                </h2>
                <span className="text-xs font-black text-[#5D42CE]">
                  Question {currentStep} of {totalQuestions}
                </span>
              </div>

              {/* Dynamic Animated Progress Bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                <div
                  className="bg-gradient-to-r from-[#5D42CE] to-[#8C62FF] h-full rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Questions Step-by-Step Container */}
            <div className="min-h-[280px] flex flex-col justify-between pt-2">
              {/* Question 1 */}
              {currentStep === 1 && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <h4 className="text-xs font-black text-slate-800">
                    1. What is your sleep and study schedule?
                  </h4>
                  <div className="space-y-2">
                    {[
                      { val: "Night Owl", label: "🌙 Night Owl (Late study & sleep)" },
                      { val: "Early Bird", label: "☀️ Early Bird (Early morning routine)" },
                      { val: "Balanced", label: "⚖️ Balanced (Regular day hours)" },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setAnswers({ ...answers, schedule: opt.val })}
                        className={`w-full p-3.5 rounded-2xl border text-left text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                          answers.schedule === opt.val
                            ? "border-[#5D42CE] bg-purple-50/70 text-[#5D42CE]"
                            : "border-slate-200 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span>{opt.label}</span>
                        {answers.schedule === opt.val && <Check className="w-4 h-4 text-[#5D42CE]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 2 */}
              {currentStep === 2 && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <h4 className="text-xs font-black text-slate-800">
                    2. What is your dietary and food choice?
                  </h4>
                  <div className="space-y-2">
                    {[
                      { val: "Veg", label: "🥗 Pure Vegetarian" },
                      { val: "Non-Veg", label: "🍗 Non-Vegetarian" },
                      { val: "Both", label: "🍲 Flexible with either" },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setAnswers({ ...answers, food: opt.val })}
                        className={`w-full p-3.5 rounded-2xl border text-left text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                          answers.food === opt.val
                            ? "border-[#5D42CE] bg-purple-50/70 text-[#5D42CE]"
                            : "border-slate-200 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span>{opt.label}</span>
                        {answers.food === opt.val && <Check className="w-4 h-4 text-[#5D42CE]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 3 */}
              {currentStep === 3 && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <h4 className="text-xs font-black text-slate-800">
                    3. Preferred primary speaking language?
                  </h4>
                  <div className="space-y-2">
                    {["English", "Hindi", "Marathi", "Any / Comfortable with all"].map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => setAnswers({ ...answers, language: lang })}
                        className={`w-full p-3.5 rounded-2xl border text-left text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                          answers.language === lang
                            ? "border-[#5D42CE] bg-purple-50/70 text-[#5D42CE]"
                            : "border-slate-200 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span>🗣️ {lang}</span>
                        {answers.language === lang && <Check className="w-4 h-4 text-[#5D42CE]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 4 */}
              {currentStep === 4 && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <h4 className="text-xs font-black text-slate-800">
                    4. What is your preferred monthly rent budget?
                  </h4>
                  <div className="space-y-2">
                    {["Under ₹4,000", "₹4,000 - ₹6,000", "₹6,000 - ₹8,000", "₹8,000+"].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setAnswers({ ...answers, budget: b })}
                        className={`w-full p-3.5 rounded-2xl border text-left text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                          answers.budget === b
                            ? "border-[#5D42CE] bg-purple-50/70 text-[#5D42CE]"
                            : "border-slate-200 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span>₹ {b} per month</span>
                        {answers.budget === b && <Check className="w-4 h-4 text-[#5D42CE]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 5 */}
              {currentStep === 5 && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <h4 className="text-xs font-black text-slate-800">
                    5. How do you handle room cleanliness & chores?
                  </h4>
                  <div className="space-y-2">
                    {[
                      { val: "Very Neat", label: "✨ Very Neat (Daily cleaning & tidy spaces)" },
                      { val: "Weekly Cleaning", label: "🧹 Weekly Cleaning (Shared schedule)" },
                      { val: "Relaxed", label: "📦 Relaxed (Flexible as long as not messy)" },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setAnswers({ ...answers, cleanliness: opt.val })}
                        className={`w-full p-3.5 rounded-2xl border text-left text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                          answers.cleanliness === opt.val
                            ? "border-[#5D42CE] bg-purple-50/70 text-[#5D42CE]"
                            : "border-slate-200 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span>{opt.label}</span>
                        {answers.cleanliness === opt.val && <Check className="w-4 h-4 text-[#5D42CE]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 6 */}
              {currentStep === 6 && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <h4 className="text-xs font-black text-slate-800">
                    6. What are your guest and visitors policies?
                  </h4>
                  <div className="space-y-2">
                    {[
                      "No outside guests / Quiet sanctuary",
                      "Occasional study friends allowed",
                      "Very social / Frequent weekend visitors",
                    ].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setAnswers({ ...answers, guests: g })}
                        className={`w-full p-3.5 rounded-2xl border text-left text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                          answers.guests === g
                            ? "border-[#5D42CE] bg-purple-50/70 text-[#5D42CE]"
                            : "border-slate-200 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span>👥 {g}</span>
                        {answers.guests === g && <Check className="w-4 h-4 text-[#5D42CE]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 7 */}
              {currentStep === 7 && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <h4 className="text-xs font-black text-slate-800">
                    7. What is your noise level and study atmosphere preference?
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Quiet Study Atmosphere (Library vibes)",
                      "Headphones preferred for music/calls",
                      "Casual music and group discussions welcome",
                    ].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setAnswers({ ...answers, noise: n })}
                        className={`w-full p-3.5 rounded-2xl border text-left text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                          answers.noise === n
                            ? "border-[#5D42CE] bg-purple-50/70 text-[#5D42CE]"
                            : "border-slate-200 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span>🎧 {n}</span>
                        {answers.noise === n && <Check className="w-4 h-4 text-[#5D42CE]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                <button
                  type="button"
                  disabled={currentStep === 1}
                  onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 disabled:opacity-40 transition flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {currentStep < totalQuestions ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => Math.min(prev + 1, totalQuestions))}
                    className="px-5 py-2.5 rounded-xl bg-[#5D42CE] hover:bg-[#4d34b5] text-white text-xs font-black shadow-sm transition flex items-center gap-1 cursor-pointer"
                  >
                    <span>Next Question</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={calculateDynamicScore}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-md transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Calculate Final Score</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT: MATCH SCORE & MATCH ATTRIBUTES
          ========================================== */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-[#140E36] rounded-3xl p-6 text-white text-center shadow-lg space-y-2">
              <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#251B5A" strokeWidth="10" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#10B981"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * compatibilityScore) / 100}
                    strokeLinecap="round"
                    fill="none"
                    className="transition-all duration-700"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black">{compatibilityScore}%</span>
                  <span className="text-[9px] text-slate-300 font-bold uppercase">Compatibility</span>
                </div>
              </div>
              <p className="text-xs font-bold text-slate-200 pt-1">Match Compatibility Score</p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-3 text-xs">
              <div className="space-y-2.5 text-slate-700">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-50">
                  <span className="font-semibold text-slate-500">Study Time:</span>
                  <span className="font-bold text-emerald-600">Matches 90%</span>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-50">
                  <span className="font-semibold text-slate-500">Cleanliness:</span>
                  <span className="font-bold text-emerald-600">Matches 95%</span>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-50">
                  <span className="font-semibold text-slate-500">Food Choice:</span>
                  <span className="font-bold text-emerald-600">Matches 85%</span>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-50">
                  <span className="font-semibold text-slate-500">Hometown:</span>
                  <span className="font-bold text-slate-900">Nagpur, MH</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Interests:</span>
                  <span className="font-bold text-slate-900">Travel &amp; Coding</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsDmOpen(true)}
                  className="py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-black transition cursor-pointer"
                >
                  Direct Message
                </button>
                <button
                  type="button"
                  onClick={handleSaveMatch}
                  className={`py-2.5 rounded-xl text-xs font-black transition cursor-pointer flex items-center justify-center gap-1 ${
                    isSaved
                      ? "bg-emerald-600 text-white"
                      : "bg-[#140E36] hover:bg-[#201752] text-white"
                  }`}
                >
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  <span>{isSaved ? "Saved ✓" : "Save Match"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          DIRECT MESSAGE (DM) MODAL
      ========================================================== */}
      {isDmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full border border-slate-100 shadow-2xl space-y-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <img
                  src={candidateProfile.img}
                  alt={candidateProfile.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-100"
                />
                <div>
                  <h4 className="text-sm font-black text-slate-900">Direct Message Aditi</h4>
                  <p className="text-[10px] text-slate-400 font-bold">MIT AOE • Computer Engineering</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsDmOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-3">
              <textarea
                rows={4}
                required
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Hi Aditi, I saw your roommate profile and our compatibility score is 86%! Are you still looking for a flatmate near college?"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#5D42CE]"
              />

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsDmOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#5D42CE] hover:bg-[#4d34b5] text-white text-xs font-black shadow-sm transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#140E36] text-white px-5 py-3 rounded-2xl shadow-xl text-xs font-bold flex items-center gap-2 border border-purple-800 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}