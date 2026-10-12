"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Smile,
  Store,
  User,
  Building,
  Mail,
  Lock,
  Phone,
  MapPin,
  ChevronDown,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  // Active registration tab: 'student' | 'vendor'
  const [role, setRole] = useState("student");

  // Passwords visibility toggle
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Student Form State
  const [studentData, setStudentData] = useState({
    fullName: "",
    college: "",
    year: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Vendor Form State
  const [vendorData, setVendorData] = useState({
    businessName: "",
    ownerName: "",
    serviceCategory: "Mess & Food",
    businessLocation: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    if (studentData.password !== studentData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const newUser = {
      role: "student",
      ...studentData,
      id: `STU-${Date.now()}`,
    };
    try {
      localStorage.setItem("current_user", JSON.stringify(newUser));
    } catch (err) {
      console.error(err);
    }
    router.push("/student");
  };

const getCategoryKey = (category = "", businessName = "") => {
    const cat = category.toLowerCase();
    const name = businessName.toLowerCase();

    if (cat.includes("laundry") || name.includes("cotton") || name.includes("laundry")) return "laundry";
    if (cat.includes("hostel") || cat.includes("pg") || name.includes("manas") || name.includes("hostel")) return "hostel";
    if (cat.includes("housekeeping") || cat.includes("cleaning") || name.includes("shital") || name.includes("cleaning")) return "cleaning";
    if (cat.includes("cafe") || name.includes("cafe") || name.includes("cafe24")) return "cafe";
    if (cat.includes("mess") || cat.includes("food") || name.includes("annapurna") || name.includes("mess")) return "mess";

    return "mess";
  };

  const handleVendorSubmit = (e) => {
    e.preventDefault();
    if (vendorData.password !== vendorData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const categoryKey = getCategoryKey(
      vendorData.serviceCategory,
      vendorData.businessName
    );

    const newVendor = {
      role: "vendor",
      email: vendorData.email.toLowerCase().trim(),
      password: vendorData.password,
      businessName: vendorData.businessName,
      ownerName: vendorData.ownerName,
      serviceCategory: vendorData.serviceCategory,
      categoryKey: categoryKey,
      businessLocation: vendorData.businessLocation,
      contactNumber: vendorData.contactNumber,
      id: `VND-${Date.now()}`,
    };

    try {
      // 1. Set current logged in user
      localStorage.setItem("current_user", JSON.stringify(newVendor));
      
      // 2. Add to registered vendor registry so they can log in later
      const vendorsList = JSON.parse(localStorage.getItem("campus_vendors") || "[]");
      const filtered = vendorsList.filter((v) => v.email !== newVendor.email);
      localStorage.setItem("campus_vendors", JSON.stringify([newVendor, ...filtered]));
    } catch (err) {
      console.error(err);
    }

    // Force navigation with the exact type query
    window.location.href = `/vendor?type=${categoryKey}`;
  };

  

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#14244A] font-sans antialiased selection:bg-purple-200 pb-12">
      {/* Top Header - Compact padding */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 pt-6 pb-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#6C47FF] to-[#8C62FF] flex items-center justify-center text-white shadow-md shadow-purple-200">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-[#14244A] block leading-none">
              Studentica.
            </span>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-1 block">
              Campus Concierge
            </span>
          </div>
        </Link>

        <div className="text-right">
          <span className="text-xs font-black text-[#6C47FF] block">
            Better Campus
          </span>
          <span className="text-[11px] font-semibold text-slate-400">
            Better You ♡
          </span>
        </div>
      </header>

      {/* Main Container - Shifted upwards close to top header */}
      <main className="w-full max-w-6xl mx-auto px-6 sm:px-10 pt-4 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
        
        {/* ===================================================
            LEFT COLUMN (HERO & INFORMATION)
        ==================================================== */}
        <div className="flex-1 w-full max-w-lg space-y-6 pt-2">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#6C47FF]">New here?</span>
              <span className="text-[#6C47FF] text-xs">↘</span>
            </div>

            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#6C47FF]">
              {role === "student" ? "Join the campus community" : "Grow with your campus"}
            </p>

            <h1 className="text-4xl sm:text-5xl font-black text-[#14244A] tracking-tight leading-[1.15]">
              {role === "student" ? (
                <>
                  Create your <br />
                  student <br />
                  account
                </>
              ) : (
                <>
                  Put your <br />
                  business <span className="text-[#6C47FF]">on</span> <br />
                  <span className="text-[#6C47FF]">campus.</span>
                </>
              )}
            </h1>

            <p className="text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed pt-1">
              {role === "student"
                ? "Get access to messes, laundry, PGs, cafes, roommate finder and more — all in one place."
                : "Connect with students, manage bookings, showcase your service and grow your campus business from one place."}
            </p>
          </div>

          {/* Value Props Bullet Items */}
          <div className="space-y-3.5 pt-1">
            {role === "student" ? (
              <>
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-[#F0EBFF] text-[#6C47FF] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#14244A]">Quick &amp; Easy</h4>
                    <p className="text-[11px] font-semibold text-slate-400">Complete in less than 2 minutes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-[#E6F9EE] text-[#0FAF53] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#14244A]">Verified Services</h4>
                    <p className="text-[11px] font-semibold text-slate-400">Trusted vendors &amp; safe bookings</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-[#FFF6E5] text-[#D98200] flex items-center justify-center shrink-0">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#14244A]">Student Friendly</h4>
                    <p className="text-[11px] font-semibold text-slate-400">Built for your campus life</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-[#F0EBFF] text-[#6C47FF] flex items-center justify-center shrink-0">
                    <Store className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#14244A]">Direct Student Reach</h4>
                    <p className="text-[11px] font-semibold text-slate-400">Thousands of students explore daily</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-[#E6F9EE] text-[#0FAF53] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#14244A]">Verified Vendor Badge</h4>
                    <p className="text-[11px] font-semibold text-slate-400">Build high peer trust &amp; verified reviews</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-[#FFF6E5] text-[#D98200] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#14244A]">Smart Management</h4>
                    <p className="text-[11px] font-semibold text-slate-400">Easily organize orders, slots &amp; payments</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Bottom Card With Image */}
          <div className="pt-1">
            <div className="inline-block px-4 py-2 rounded-2xl bg-[#ECE7FE] text-[#6C47FF] text-xs font-extrabold mb-3">
              {role === "student" ? "Your campus. Our priority. ♡" : "Serve students. Build your campus business."}
            </div>

            <div className="w-full max-w-[340px] h-44 rounded-3xl overflow-hidden shadow-lg border border-purple-100">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===================================================
            RIGHT COLUMN (FORM CARD)
        ==================================================== */}
        <div className="w-full lg:w-[480px] bg-white rounded-[36px] p-7 sm:p-8 shadow-[0_20px_50px_rgba(108,71,255,0.07)] border border-slate-100 space-y-5">
          
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECE7FE] text-[#6C47FF] text-[10px] font-black uppercase tracking-wider">
            {role === "student" ? (
              <>
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Student Registration</span>
              </>
            ) : (
              <>
                <Store className="w-3.5 h-3.5" />
                <span>Vendor Registration</span>
              </>
            )}
          </div>

          {/* Form Header */}
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-[#14244A]">
              {role === "student" ? "Let’s get you started!" : "Welcome, Vendor! 👋"}
            </h2>
            <p className="text-xs font-semibold text-slate-400">
              {role === "student"
                ? "Fill in your details to create your account."
                : "Create your business profile and start serving students."}
            </p>
          </div>

          {/* Role Switcher */}
          <div className="p-1 rounded-2xl bg-[#F4F5F9] border border-slate-200/70 flex items-center">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setRole("student")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all ${
                role === "student"
                  ? "bg-[#6C47FF] text-white shadow-md shadow-purple-200"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student</span>
            </button>

            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setRole("vendor")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all ${
                role === "vendor"
                  ? "bg-[#6C47FF] text-white shadow-md shadow-purple-200"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Vendor</span>
            </button>
          </div>

          {/* Student Form */}
          {role === "student" && (
            <form onSubmit={handleStudentSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Full Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={studentData.fullName}
                    onChange={(e) => setStudentData({ ...studentData, fullName: e.target.value })}
                    suppressHydrationWarning
                    data-lpignore="true"
                    className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>College</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your college name"
                    value={studentData.college}
                    onChange={(e) => setStudentData({ ...studentData, college: e.target.value })}
                    suppressHydrationWarning
                    data-lpignore="true"
                    className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700">Year</label>
                  <div className="relative">
                    <select
                      value={studentData.year}
                      onChange={(e) => setStudentData({ ...studentData, year: e.target.value })}
                      required
                      suppressHydrationWarning
                      className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 appearance-none focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                    >
                      <option value="">Select your year</option>
                      <option value="1st Year">1st Year (Fresher)</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="Final Year">Final Year</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={studentData.email}
                    onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                    suppressHydrationWarning
                    data-lpignore="true"
                    className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Create password"
                      value={studentData.password}
                      onChange={(e) => setStudentData({ ...studentData, password: e.target.value })}
                      suppressHydrationWarning
                      data-lpignore="true"
                      className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 pr-9 focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                    />
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Confirm Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      placeholder="Confirm password"
                      value={studentData.confirmPassword}
                      onChange={(e) => setStudentData({ ...studentData, confirmPassword: e.target.value })}
                      suppressHydrationWarning
                      data-lpignore="true"
                      className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 pr-9 focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                    />
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                suppressHydrationWarning
                className="w-full py-3.5 rounded-2xl bg-[#6C47FF] hover:bg-[#5835E5] text-white text-xs font-black shadow-lg shadow-purple-200 transition active:scale-[0.99] flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Vendor Form */}
          {role === "vendor" && (
            <form onSubmit={handleVendorSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-black text-slate-700 flex items-center gap-1.5">
                  <Store className="w-3.5 h-3.5 text-slate-400" />
                  <span>Business / Service Name</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Annapurna Home Mess, Cotton Spa"
                  value={vendorData.businessName}
                  onChange={(e) => setVendorData({ ...vendorData, businessName: e.target.value })}
                  suppressHydrationWarning
                  data-lpignore="true"
                  className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Owner / Contact Person</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Patil"
                    value={vendorData.ownerName}
                    onChange={(e) => setVendorData({ ...vendorData, ownerName: e.target.value })}
                    suppressHydrationWarning
                    data-lpignore="true"
                    className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700">Service Category</label>
                  <div className="relative">
                    <select
                      value={vendorData.serviceCategory}
                      onChange={(e) => setVendorData({ ...vendorData, serviceCategory: e.target.value })}
                      required
                      suppressHydrationWarning
                      className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 appearance-none focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                    >
                      <option value="Mess & Food">Mess &amp; Food</option>
                      <option value="Laundry">Laundry</option>
                      <option value="Hostel & PG">PG &amp; Hostels</option>
                      <option value="Housekeeping">Housekeeping</option>
                      <option value="Cafe">Cafes</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-black text-slate-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Business Location</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter shop/service location near campus"
                  value={vendorData.businessLocation}
                  onChange={(e) => setVendorData({ ...vendorData, businessLocation: e.target.value })}
                  suppressHydrationWarning
                  data-lpignore="true"
                  className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Contact Number</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={vendorData.contactNumber}
                    onChange={(e) => setVendorData({ ...vendorData, contactNumber: e.target.value })}
                    suppressHydrationWarning
                    data-lpignore="true"
                    className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="business@example.com"
                    value={vendorData.email}
                    onChange={(e) => setVendorData({ ...vendorData, email: e.target.value })}
                    suppressHydrationWarning
                    data-lpignore="true"
                    className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Create password"
                      value={vendorData.password}
                      onChange={(e) => setVendorData({ ...vendorData, password: e.target.value })}
                      suppressHydrationWarning
                      data-lpignore="true"
                      className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 pr-9 focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                    />
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Confirm Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      placeholder="Confirm password"
                      value={vendorData.confirmPassword}
                      onChange={(e) => setVendorData({ ...vendorData, confirmPassword: e.target.value })}
                      suppressHydrationWarning
                      data-lpignore="true"
                      className="w-full text-xs font-medium text-slate-800 bg-[#FBFBFE] border border-slate-200 rounded-xl p-3 pr-9 focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-purple-200"
                    />
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                suppressHydrationWarning
                className="w-full py-3.5 rounded-2xl bg-[#6C47FF] hover:bg-[#5835E5] text-white text-xs font-black shadow-lg shadow-purple-200 transition active:scale-[0.99] flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                <span>Create Vendor Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Social Divider */}
          <div className="relative flex items-center justify-center my-2">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[10px] font-black text-slate-400 uppercase tracking-widest absolute">
              OR
            </span>
          </div>

          {/* Google Sign-in */}
          <button
            type="button"
            suppressHydrationWarning
            className="w-full py-3 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Footer note */}
          <div className="text-center space-y-1.5 pt-1">
            <p className="text-xs font-semibold text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="text-[#6C47FF] font-black hover:underline">
                Login
              </Link>
            </p>

            <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-slate-400">
              <span className="flex items-center gap-1">🛡️ Your data is safe with us</span>
              <span>•</span>
              <span className="flex items-center gap-1">🔕 No spam, ever</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}