"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Edit2,
  Camera,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  QrCode,
  Lock,
  ArrowUpRight,
  Shirt,
  UtensilsCrossed,
  Users,
  Tag,
  PiggyBank,
  Home,
  Calendar,
  Ticket,
  Check,
  X,
  Copy,
  BookOpen,
  LogOut,
  Upload,
} from "lucide-react";

export default function StudentProfilePage() {
  const router = useRouter();
  const fileInputRef = useRef(null);

  // Dynamic Profile Identity State
  const [profileData, setProfileData] = useState({
    name: "Riya Wagh",
    studentId: "STU-2026-8942",
    college: "MIT AOE",
    branch: "Computer Engineering",
    year: "3rd Year (SY)",
    hostel: "Om Shanti Girls PG",
    email: "riya.wagh@mitaoe.ac.in",
    phone: "+91 91******12",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
  });

  // Lifestyle states
  const [cleanlinessFriendly, setCleanlinessFriendly] = useState("Yes");
  const [sleepWakeHour, setSleepWakeHour] = useState("Night Owl");
  const [dietPref, setDietPref] = useState("Veg");
  const [addictions, setAddictions] = useState("No");

  // Editable 3 Languages
  const [languages, setLanguages] = useState(["Marathi", "Hindi", "English"]);

  // Editable 3 Interests & Hobbies
  const [hobbies, setHobbies] = useState(["Music", "Travel", "Reading"]);

  // Short Bio & Inquiries Toggle
  const [shortBio, setShortBio] = useState(
    "Easy-going, loves reading, quiet study environments, and weekend outings."
  );
  const [openToInquiries, setOpenToInquiries] = useState(true);

  // Modal & Toast States
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({ ...profileData });
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  // Load registered session user from localStorage
  const loadProfile = useCallback(() => {
    try {
      const stored =
        localStorage.getItem("current_user") ||
        localStorage.getItem("currentUser") ||
        localStorage.getItem("currentStudent");

      const savedAvatar = localStorage.getItem("profile_avatar");

      if (stored) {
        const parsed = JSON.parse(stored);
        const resolvedName = parsed.fullName || parsed.name || profileData.name;
        const resolvedEmail = parsed.email || profileData.email;
        const resolvedCollege = parsed.college || profileData.college;
        const resolvedYear = parsed.year || profileData.year;
        const resolvedAvatar =
          savedAvatar ||
          parsed.avatar ||
          profileData.avatar;

        const updated = {
          name: resolvedName,
          studentId: parsed.id || profileData.studentId,
          college: resolvedCollege,
          branch: parsed.branch || profileData.branch,
          year: resolvedYear,
          hostel: parsed.hostel || profileData.hostel,
          email: resolvedEmail,
          phone: parsed.phone || parsed.contactNumber || profileData.phone,
          avatar: resolvedAvatar,
        };

        setProfileData(updated);
        setEditFormData(updated);
      } else if (savedAvatar) {
        setProfileData((prev) => ({ ...prev, avatar: savedAvatar }));
        setEditFormData((prev) => ({ ...prev, avatar: savedAvatar }));
      }

      // Load saved lifestyle habits if stored
      const savedHabits = localStorage.getItem("student_lifestyle_settings");
      if (savedHabits) {
        const parsedHabits = JSON.parse(savedHabits);
        if (parsedHabits.cleanlinessFriendly) setCleanlinessFriendly(parsedHabits.cleanlinessFriendly);
        if (parsedHabits.sleepWakeHour) setSleepWakeHour(parsedHabits.sleepWakeHour);
        if (parsedHabits.dietPref) setDietPref(parsedHabits.dietPref);
        if (parsedHabits.addictions) setAddictions(parsedHabits.addictions);
        if (parsedHabits.languages) setLanguages(parsedHabits.languages);
        if (parsedHabits.hobbies) setHobbies(parsedHabits.hobbies);
        if (parsedHabits.shortBio) setShortBio(parsedHabits.shortBio);
        if (parsedHabits.openToInquiries !== undefined) setOpenToInquiries(parsedHabits.openToInquiries);
      }
    } catch (e) {
      console.error("Error loading profile:", e);
    }
  }, []);

  useEffect(() => {
    loadProfile();
    window.addEventListener("storage", loadProfile);
    window.addEventListener("focus", loadProfile);
    return () => {
      window.removeEventListener("storage", loadProfile);
      window.removeEventListener("focus", loadProfile);
    };
  }, [loadProfile]);

  const handleLanguageChange = (index, value) => {
    const updated = [...languages];
    updated[index] = value;
    setLanguages(updated);
  };

  const handleHobbyChange = (index, value) => {
    const updated = [...hobbies];
    updated[index] = value;
    setHobbies(updated);
  };

  // Image File Upload Handler
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Please upload an image smaller than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setEditFormData((prev) => ({ ...prev, avatar: base64String }));
      setProfileData((prev) => ({ ...prev, avatar: base64String }));
      try {
        localStorage.setItem("profile_avatar", base64String);
        const stored = localStorage.getItem("current_user");
        if (stored) {
          const parsed = JSON.parse(stored);
          localStorage.setItem("current_user", JSON.stringify({ ...parsed, avatar: base64String }));
        }
        window.dispatchEvent(new Event("storage"));
        showToast("Profile photo updated!");
      } catch (err) {
        console.error(err);
      }
    };
    reader.readAsDataURL(file);
  };

  // Save Lifestyle settings
  const handleSaveLifestyle = () => {
    const payload = {
      cleanlinessFriendly,
      sleepWakeHour,
      dietPref,
      addictions,
      languages,
      hobbies,
      shortBio,
      openToInquiries,
    };
    try {
      localStorage.setItem("student_lifestyle_settings", JSON.stringify(payload));
      window.dispatchEvent(new Event("storage"));
      showToast("Lifestyle & roommate preferences saved!");
    } catch (e) {
      console.error(e);
    }
  };

  // Save Primary Identity info
  const handleSaveIdentity = (e) => {
    e.preventDefault();
    setProfileData(editFormData);
    try {
      const stored =
        localStorage.getItem("current_user") ||
        localStorage.getItem("currentUser") ||
        "{}";
      const parsed = JSON.parse(stored);
      const updated = {
        ...parsed,
        fullName: editFormData.name,
        name: editFormData.name,
        college: editFormData.college,
        branch: editFormData.branch,
        year: editFormData.year,
        hostel: editFormData.hostel,
        avatar: editFormData.avatar,
      };
      localStorage.setItem("current_user", JSON.stringify(updated));
      localStorage.setItem("currentUser", JSON.stringify(updated));
      if (editFormData.avatar) {
        localStorage.setItem("profile_avatar", editFormData.avatar);
      }
      window.dispatchEvent(new Event("storage"));
      setIsEditModalOpen(false);
      showToast("Profile details updated successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  // Logout Function
  const handleLogout = () => {
    try {
      localStorage.removeItem("current_user");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("currentStudent");
      localStorage.removeItem("campusConciergeLoggedIn");
      window.dispatchEvent(new Event("storage"));
      router.push("/login");
    } catch (err) {
      console.error(err);
      router.push("/login");
    }
  };

  const copyId = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(profileData.studentId);
    }
    showToast(`Copied ID: ${profileData.studentId}`);
  };

  return (
    <div className="min-h-screen bg-[#F1F4FA] text-slate-700 font-sans antialiased p-4 sm:p-6 lg:p-8 select-none">
      {/* Hidden File Input for Avatar */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />

      {/* =========================================================
          PAGE HEADER: PROFILE SECTION
      ========================================================= */}
      <div className="max-w-[1360px] mx-auto mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/student"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#5D42CE] text-sm font-bold shadow-sm transition"
          >
            ← Back to Dashboard
          </Link>
          <span className="text-slate-300 text-lg">/</span>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Profile Section
          </h1>
        </div>

        {/* Cursive tagline */}
        <div className="hidden md:block text-right pointer-events-none">
          <p className="font-serif italic text-sm text-[#5D42CE]/80 leading-tight">
            Good food, Good company
          </p>
          <p className="font-serif italic text-xs text-purple-400 font-normal leading-tight pl-3 mt-0.5">
            Great college life ♡
          </p>
        </div>
      </div>

      {/* =========================================================
          TOP ROW: 3-COLUMN PROFILE GRID
      ========================================================= */}
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* =========================================================
            CARD 1 (LEFT COLUMN): IDENTITY + CAMPUS STATUS
        ========================================================= */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-5">
            <div className="flex items-start gap-4">
              {/* Avatar with click-to-upload */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden bg-purple-100 shrink-0 border-2 border-white shadow-sm flex items-center justify-center group">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white text-[9px] font-bold transition cursor-pointer"
                  title="Upload photo"
                >
                  <Camera className="w-4 h-4 mb-0.5" />
                  <span>Change</span>
                </button>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#5D42CE] text-white flex items-center justify-center border border-white cursor-pointer hover:bg-[#4d34b5] shadow-sm"
                  title="Change photo"
                >
                  <Camera className="w-3 h-3" />
                </button>
              </div>

              {/* Name / ID / Verified Badge */}
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#059669] text-xs font-bold border border-emerald-100 mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Verified Student</span>
                </div>

                <div className="flex items-center gap-1.5 mt-0.5">
                  <h2 className="text-lg font-black text-slate-900 tracking-tight truncate">
                    {profileData.name}
                  </h2>
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(true)}
                    className="text-slate-400 hover:text-[#5D42CE] transition cursor-pointer"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs font-semibold text-slate-400 mt-0.5">
                  {profileData.studentId}
                </p>
              </div>
            </div>

            {/* College / Branch Info list */}
            <div className="space-y-3 pt-3.5 border-t border-slate-100 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">College</span>
                <span className="font-bold text-slate-800 text-right">{profileData.college}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">Branch</span>
                <span className="font-bold text-slate-800 text-right">{profileData.branch}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">Year of Study</span>
                <span className="font-bold text-slate-800 text-right">{profileData.year}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">Hostel/PG Name</span>
                <span className="font-bold text-slate-800 text-right">{profileData.hostel}</span>
              </div>
            </div>

            {/* Profile Completion Bar */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-slate-700">Profile Completion</span>
                <span
                  onClick={() => setIsEditModalOpen(true)}
                  className="font-black text-[#5D42CE] flex items-center gap-0.5 cursor-pointer"
                >
                  92% <ChevronRight className="w-4 h-4 text-[#5D42CE]" />
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#5D42CE] h-full w-[92%] rounded-full" />
              </div>
            </div>

            {/* Complete your profile promo */}
            <div
              onClick={() => setIsEditModalOpen(true)}
              className="p-4 rounded-xl bg-[#F6F4FE] border border-purple-100 flex items-center justify-between gap-3 cursor-pointer hover:bg-purple-100/50 transition"
            >
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#5D42CE] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 leading-tight">Complete your profile</p>
                  <p className="text-[11px] text-slate-500 font-medium leading-normal mt-0.5">
                    Update your photo, hostel, year &amp; branch anytime!
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4.5 h-4.5 text-[#5D42CE] shrink-0" />
            </div>
          </div>

          {/* CAMPUS STATUS & BADGES CARD */}
          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-3.5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-purple-100 text-[#5D42CE] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black text-slate-900">Campus Status &amp; Badges</h4>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                Active Student
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#FAF9FE] border border-purple-50">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Study Mode</p>
                  <p className="font-extrabold text-slate-900">Exam / Semester Prep</p>
                </div>
                <span className="text-xs">📚</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#FAF9FE] border border-purple-50">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Digital ID Token</p>
                  <p className="font-extrabold text-slate-900 font-mono text-[11px]">{profileData.studentId}</p>
                </div>
                <button
                  type="button"
                  onClick={copyId}
                  className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#5D42CE] transition cursor-pointer"
                  title="Copy Student Token"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-between pt-1 text-[11px] font-bold text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Emergency Contact Synced
                </span>
                <span className="text-purple-600">MIT AOE ✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            CARD 2 (CENTER): ROOMMATE & LIFESTYLE SETTINGS (lg:col-span-5)
        ========================================================= */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-4">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-50">
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#5D42CE]" />
              Roommate &amp; Lifestyle Settings
            </h3>
            <button
              type="button"
              onClick={handleSaveLifestyle}
              className="text-xs font-bold text-white bg-[#5D42CE] hover:bg-[#4d34b5] rounded-lg px-3 py-1 transition cursor-pointer shadow-xs"
            >
              Save Settings
            </button>
          </div>

          {/* Habit Snapshot: Cleanliness */}
          <div className="space-y-2">
            <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block">Habit Snapshot</p>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-semibold text-slate-600">Cleanliness Friendly?</span>
              <div className="flex items-center gap-1.5">
                {["Yes", "No"].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => {
                      setCleanlinessFriendly(v);
                      showToast(`Cleanliness set to ${v}`);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      cleanlinessFriendly === v
                        ? "bg-[#5D42CE] text-white shadow-xs"
                        : "bg-slate-50 text-slate-500 hover:text-slate-800 border border-slate-200"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sleep/Wake Hour */}
          <div className="flex items-center justify-between text-xs sm:text-sm pt-0.5">
            <span className="font-semibold text-slate-600">Sleep/Wake Hour</span>
            <div className="flex items-center gap-1.5">
              {["Night Owl", "Early Bird"].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    setSleepWakeHour(v);
                    showToast(`Schedule set to ${v}`);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    sleepWakeHour === v
                      ? "bg-[#5D42CE] text-white shadow-xs"
                      : "bg-slate-50 text-slate-500 hover:text-slate-800 border border-slate-200"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Diet Pref */}
          <div className="flex items-center justify-between text-xs sm:text-sm pt-0.5">
            <span className="font-semibold text-slate-600">Diet Pref</span>
            <div className="flex items-center gap-1.5">
              {["Veg", "Non-veg", "Both"].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    setDietPref(v);
                    showToast(`Diet preference set to ${v}`);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    dietPref === v
                      ? "bg-[#10B981] text-white shadow-xs"
                      : "bg-slate-50 text-slate-500 hover:text-slate-800 border border-slate-200"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Addictions */}
          <div className="flex items-center justify-between text-xs sm:text-sm pt-0.5">
            <span className="font-semibold text-slate-600">Addictions</span>
            <div className="flex items-center gap-1.5">
              {["Yes", "No"].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    setAddictions(v);
                    showToast(`Habit preference set to ${v}`);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    addictions === v
                      ? "bg-[#5D42CE] text-white shadow-xs"
                      : "bg-slate-50 text-slate-500 hover:text-slate-800 border border-slate-200"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Editable Languages */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-500 block">Languages (editable)</span>
            <div className="grid grid-cols-3 gap-2.5">
              {languages.map((lang, idx) => (
                <input
                  key={idx}
                  type="text"
                  value={lang}
                  onChange={(e) => handleLanguageChange(idx, e.target.value)}
                  placeholder={`Lang ${idx + 1}`}
                  className="w-full text-center py-2 px-3 bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:outline-none focus:ring-1 focus:ring-purple-300"
                />
              ))}
            </div>
          </div>

          {/* Editable Interests & Hobbies */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-500 block">Interests &amp; Hobbies (editable)</span>
            <div className="grid grid-cols-3 gap-2.5">
              {hobbies.map((hobby, idx) => (
                <input
                  key={idx}
                  type="text"
                  value={hobby}
                  onChange={(e) => handleHobbyChange(idx, e.target.value)}
                  placeholder={`Hobby ${idx + 1}`}
                  className="w-full text-center py-2 px-3 bg-slate-50 hover:bg-purple-50 focus:bg-white border border-slate-200 focus:border-purple-200 rounded-lg text-xs font-bold text-slate-700 focus:outline-none focus:ring-1 focus:ring-purple-300"
                />
              ))}
            </div>
          </div>

          {/* Short Bio */}
          <div className="space-y-1.5 pt-0.5">
            <span className="text-[11px] font-bold text-slate-500 block">Short Bio</span>
            <textarea
              value={shortBio}
              onChange={(e) => setShortBio(e.target.value)}
              rows={2}
              className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white text-[11.5px] font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-purple-300 resize-none leading-relaxed"
            />
          </div>

          {/* Toggle: Open to Roommate Inquiries */}
          <div className="pt-2.5 border-t border-slate-50 flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Open to Roommate Inquiries</p>
              <p className="text-[11px] text-slate-400 font-medium">(Turn off visibility if found)</p>
            </div>
            <button
              type="button"
              onClick={() => {
                const updated = !openToInquiries;
                setOpenToInquiries(updated);
                showToast(updated ? "You are now visible for roommate inquiries" : "Roommate inquiries hidden");
              }}
              className={`w-10 h-6 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${
                openToInquiries ? "bg-[#5D42CE]" : "bg-slate-300"
              }`}
            >
              <span
                className={`w-4 h-4 bg-white rounded-full transition-transform transform ${
                  openToInquiries ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* =========================================================
            CARD 3 (RIGHT): 3-STACK METRIC CARDS (lg:col-span-3)
        ========================================================= */}
        <div className="lg:col-span-3 space-y-4">
          {/* Stack 1: Student Identification */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-3.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#5D42CE]" />
                Student Identification
              </h4>
              <span className="text-[10px] font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-emerald-100">
                ✓ Verified
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Status</span>
                </div>
                <span className="font-bold text-slate-800 flex items-center gap-0.5">
                  Verified <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                </span>
              </div>

              <div className="py-0.5 border-b border-slate-50">
                <span className="text-[10px] text-slate-400 font-medium block">College Email</span>
                <span className="font-semibold text-slate-700 text-xs truncate block mt-0.5">
                  {profileData.email}
                </span>
              </div>

              <div
                onClick={copyId}
                className="flex items-center justify-between pt-0.5 cursor-pointer hover:bg-slate-50 p-1 rounded-xl transition"
              >
                <div className="flex items-center gap-2">
                  <QrCode className="w-4 h-4 text-slate-500" />
                  <div>
                    <p className="font-bold text-slate-800 text-xs leading-tight">QR Code</p>
                    <p className="text-[10px] text-slate-400 leading-tight">Scan to verify ID</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </div>
            </div>
          </div>

          {/* Stack 2: Active Subscription */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-[#5D42CE]" />
                Active Subscription
              </h4>
              <Link href="/pass" className="text-[11px] font-bold text-[#5D42CE] hover:underline">
                Manage
              </Link>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">Campus Pass</span>
                <span className="text-[9.5px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                  ★ Most Popular
                </span>
              </div>
              <p className="text-lg font-black text-slate-900 mt-0.5">
                ₹199 <span className="text-xs font-normal text-slate-400">/ month</span>
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-50 text-[11px]">
              <div>
                <span className="text-slate-400 font-medium block text-[9.5px]">Next Renewal</span>
                <span className="font-bold text-slate-700">15 Nov 2026</span>
              </div>
              <span className="text-xs font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-emerald-100">
                ✓ Active
              </span>
            </div>
          </div>

          {/* Stack 3: Account Security & Services (With LOGOUT) */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-3">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-50">
              <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#5D42CE]" />
                Account Security &amp; Services
              </h4>
              <button
                type="button"
                onClick={() => setIsEditModalOpen(true)}
                className="text-[11px] font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Edit
              </button>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center justify-between py-0.5">
                <span className="text-slate-400 font-medium text-xs">Email</span>
                <div className="flex items-center gap-1.5 truncate max-w-[170px]">
                  <span className="font-semibold text-slate-700 text-xs truncate">{profileData.email}</span>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">✓</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-0.5 border-b border-slate-50 pb-2">
                <span className="text-slate-400 font-medium text-xs">Phone</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-700 text-xs">{profileData.phone}</span>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">✓</span>
                </div>
              </div>

              <div
                onClick={() => showToast("Password reset link sent to your college email.")}
                className="flex items-center justify-between py-1.5 border-b border-slate-50 cursor-pointer hover:text-[#5D42CE] text-xs font-semibold text-slate-700"
              >
                <span>Reset Password</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              </div>

              <div
                onClick={() => showToast("Profile privacy settings: Roommate profile is public on campus.")}
                className="flex items-center justify-between py-1.5 border-b border-slate-50 cursor-pointer hover:text-[#5D42CE] text-xs font-semibold text-slate-700"
              >
                <span>Privacy Settings</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              </div>

              {/* REPLACED BLOCK / REPORT WITH FUNCTIONAL LOGOUT */}
              <div
                onClick={handleLogout}
                className="flex items-center justify-between pt-1.5 cursor-pointer hover:text-rose-700 text-xs font-bold text-rose-600 transition"
              >
                <span className="flex items-center gap-1.5">
                  <LogOut className="w-3.5 h-3.5" />
                  Log Out
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM ROW: 4 STATS OVERVIEW CARDS
      ========================================================= */}
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {/* Card 1: My Savings */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-black text-slate-800">My Savings</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <PiggyBank className="w-4 h-4" />
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Savings</p>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-xl font-black text-slate-900">₹ 1,240</span>
              <span className="text-[9.5px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                ↑ 12%
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium">this month</p>
          </div>
          <Link href="/pass" className="text-xs font-bold text-[#5D42CE] hover:underline flex items-center gap-0.5 pt-1.5 border-t border-slate-50">
            <span>View Details</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Card 2: My Accommodation */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-black text-slate-800">My Accommodation</span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Home className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-black text-slate-900 truncate">{profileData.hostel}</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 tracking-wider">Rent Due</p>
            <p className="text-sm font-black text-slate-900">5 Nov 2026</p>
          </div>
          <Link href="/student/pg" className="text-xs font-bold text-[#5D42CE] hover:underline flex items-center gap-0.5 pt-1.5 border-t border-slate-50">
            <span>View Details</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Card 3: My Activity */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-black text-slate-800">My Activity</span>
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="space-y-0.5 text-xs sm:text-sm">
            <p className="font-semibold text-slate-600">
              <strong className="text-slate-900 font-black">2</strong> Upcoming Bookings
            </p>
            <p className="font-semibold text-slate-600">
              <strong className="text-slate-900 font-black">1</strong> Pending Roommate Request
            </p>
          </div>
          <Link href="/student/bookings" className="text-xs font-bold text-[#5D42CE] hover:underline flex items-center gap-0.5 pt-1.5 border-t border-slate-50">
            <span>View All</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Card 4: My Coupons */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-black text-slate-800">My Coupons</span>
            <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#5D42CE] flex items-center justify-center">
              <Ticket className="w-4 h-4" />
            </div>
          </div>
          <div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">
              <strong className="text-slate-900 font-black">3</strong> Active Coupons
            </p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">₹ 450 Total Savings</p>
          </div>
          <Link href="/student/cafes" className="text-xs font-bold text-[#5D42CE] hover:underline flex items-center gap-0.5 pt-1.5 border-t border-slate-50">
            <span>View Coupons</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* =========================================================
          BOTTOM ROW: QUICK ACTIONS & PROMO BANNER
      ========================================================= */}
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch mt-5">
        {/* Quick Actions (lg:col-span-6) */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-3 flex flex-col justify-center">
          <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#5D42CE]" />
            Quick Actions
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/student/laundry"
              className="p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-purple-50 hover:text-[#5D42CE] border border-slate-100 text-center transition flex flex-col items-center gap-1 text-[11.5px] font-bold text-slate-600"
            >
              <Shirt className="w-4.5 h-4.5 text-purple-600" />
              <span>Book Laundry</span>
            </Link>

            <Link
              href="/student/mess"
              className="p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F2FDF8] hover:text-[#10B981] border border-slate-100/70 text-center transition flex flex-col items-center gap-1 text-[11.5px] font-bold text-slate-600"
            >
              <UtensilsCrossed className="w-4.5 h-4.5 text-[#10B981]" />
              <span>Order Mess</span>
            </Link>

            <Link
              href="/student/roomates"
              className="p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#EFF6FF] hover:text-[#3B82F6] border border-slate-100/70 text-center transition flex flex-col items-center gap-1 text-[11.5px] font-bold text-slate-600"
            >
              <Users className="w-4.5 h-4.5 text-blue-600" />
              <span>Find Roommate</span>
            </Link>

            <Link
              href="/pass"
              className="p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-purple-50 hover:text-[#5D42CE] border border-slate-100 text-center transition flex flex-col items-center gap-1 text-[11.5px] font-bold text-slate-600"
            >
              <Tag className="w-4.5 h-4.5 text-amber-600" />
              <span>View Offers</span>
            </Link>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="lg:col-span-6 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-pink-500/5 rounded-2xl p-5 border border-purple-100/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-black text-slate-900 leading-tight">
              Save more. Live better.
            </h4>
            <p className="text-[11px] text-slate-500 font-medium max-w-sm leading-normal">
              Your Studentica membership helps you get exclusive discounts on mess, laundry, local cafés, and prime student services!
            </p>
          </div>

          <Link
            href="/pass"
            className="px-5 py-2.5 rounded-xl bg-[#5D42CE] hover:bg-[#4d34b5] text-white text-xs font-bold shadow-sm transition shrink-0"
          >
            Explore Offers →
          </Link>
        </div>
      </div>

      {/* =========================================================
          PROFILE EDIT MODAL POPUP (WITH PHOTO CHOOSER)
      ========================================================== */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full border border-slate-100 shadow-2xl space-y-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Edit2 className="w-4 h-4 text-[#5D42CE]" />
                <h3 className="text-sm font-black text-slate-900">Edit Profile Identity</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            {/* Photo Selection Row */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-purple-100 border-2 border-white shadow-sm shrink-0 flex items-center justify-center">
                <img
                  src={editFormData.avatar}
                  alt="Avatar preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-xs font-bold text-slate-800">Profile Photo</p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1 rounded-xl bg-[#5D42CE] hover:bg-[#4d34b5] text-white text-[10px] font-black shadow-xs transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Upload className="w-3 h-3" />
                  <span>Upload Image</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleSaveIdentity} className="space-y-3 text-xs font-bold text-slate-700">
              <div>
                <label className="text-[10px] text-slate-400 uppercase block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={editFormData.name}
                  onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#5D42CE]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase block mb-1">College</label>
                  <input
                    type="text"
                    required
                    value={editFormData.college}
                    onChange={(e) => setEditFormData({ ...editFormData, college: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#5D42CE]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 uppercase block mb-1">Year of Study</label>
                  <input
                    type="text"
                    required
                    value={editFormData.year}
                    onChange={(e) => setEditFormData({ ...editFormData, year: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#5D42CE]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase block mb-1">Branch</label>
                <input
                  type="text"
                  required
                  value={editFormData.branch}
                  onChange={(e) => setEditFormData({ ...editFormData, branch: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#5D42CE]"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase block mb-1">Hostel / PG Name</label>
                <input
                  type="text"
                  required
                  value={editFormData.hostel}
                  onChange={(e) => setEditFormData({ ...editFormData, hostel: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#5D42CE]"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#5D42CE] hover:bg-[#4d34b5] text-white font-black transition cursor-pointer"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#140E36] text-white px-5 py-3 rounded-2xl shadow-xl text-xs font-bold flex items-center gap-2 border border-purple-800 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}