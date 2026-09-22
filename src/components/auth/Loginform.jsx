"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  GraduationCap,
  Store,
  ShieldCheck,
  Sparkles,
  Utensils,
  WashingMachine,
  Home,
  Users,
  Coffee,
} from "lucide-react";

export default function LoginForm() {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);

  const student = role === "student";

  return (
    <main className="min-h-screen bg-[#fcf9f6] text-[#13233f] overflow-hidden">
      <div className="min-h-screen grid lg:grid-cols-[48%_52%]">

        {/* LEFT BRAND PANEL */}
        <section className="relative hidden lg:flex flex-col justify-between overflow-hidden px-12 xl:px-16 py-10 bg-[#f7f2ff]">

          {/* Decorative shapes */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#e5d8ff]" />
          <div className="absolute top-20 right-[-100px] w-72 h-72 rounded-full bg-[#ffe7d1]" />
          <div className="absolute bottom-[-130px] left-[-80px] w-96 h-96 rounded-full bg-[#dcd0ff]" />

          <div className="relative z-10">

            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#5d35d8] flex items-center justify-center shadow-lg shadow-purple-200">
                <GraduationCap size={27} className="text-white" />
              </div>

              <div>
                <div className="text-[25px] font-black tracking-[-1px]">
                  Studentica<span className="text-[#6435e8]">.</span>
                </div>

                <div className="text-xs font-medium text-[#61708c] -mt-1">
                  Campus Concierge
                </div>
              </div>
            </Link>

            {/* Main copy */}
            <div className="mt-20 max-w-xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-purple-100 text-[#6232dc] text-sm font-bold">
                <Sparkles size={15} />
                Your campus, simplified
              </div>

              <h1 className="mt-7 text-[54px] xl:text-[64px] leading-[0.98] font-black tracking-[-3px]">
                Welcome
                <br />
                <span className="text-[#6839df]">back.</span>
              </h1>

              <p className="mt-6 text-lg leading-7 text-[#64738e] max-w-md">
                Everything you need around campus, from trusted meals and
                laundry to housing, cafes and roommates.
              </p>

              {/* Service mini grid */}
              <div className="mt-10 grid grid-cols-3 gap-5 max-w-lg">

                <MiniService
                  icon={<Utensils size={22} />}
                  title="Mess & Food"
                  text="Fresh meals"
                  bg="bg-[#fff0e5]"
                  iconColor="text-[#ff6a00]"
                />

                <MiniService
                  icon={<WashingMachine size={22} />}
                  title="Laundry"
                  text="Clean & easy"
                  bg="bg-[#eaf2ff]"
                  iconColor="text-[#3478ee]"
                />

                <MiniService
                  icon={<Sparkles size={22} />}
                  title="Cleaning"
                  text="Save time"
                  bg="bg-[#e7faf0]"
                  iconColor="text-[#10a765]"
                />

                <MiniService
                  icon={<Home size={22} />}
                  title="PGs"
                  text="Verified stays"
                  bg="bg-[#f2eaff]"
                  iconColor="text-[#793be5]"
                />

                <MiniService
                  icon={<Users size={22} />}
                  title="Roommates"
                  text="Find your vibe"
                  bg="bg-[#ffeaf5]"
                  iconColor="text-[#ed2991]"
                />

                <MiniService
                  icon={<Coffee size={22} />}
                  title="Cafes"
                  text="Good food"
                  bg="bg-[#fff4dc]"
                  iconColor="text-[#ef9e00]"
                />

              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="relative z-10 max-w-md">
            <div className="border-l-4 border-[#6b3be8] pl-5">
              <p className="text-xl font-bold text-[#273654]">
                Same campus.
                <br />
                More possibilities.
              </p>

              <p className="mt-2 text-sm text-[#71809b]">
                Discover. Book. Connect. Done.
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT LOGIN PANEL */}
        <section className="relative flex items-center justify-center px-5 sm:px-8 py-10">

          {/* subtle background decoration */}
          <div className="absolute top-[-100px] right-[-100px] w-72 h-72 rounded-full bg-[#eee5ff]" />
          <div className="absolute bottom-[-120px] left-[-100px] w-80 h-80 rounded-full bg-[#fff0e1]" />

          <div className="relative z-10 w-full max-w-[510px]">

            {/* Mobile logo */}
            <div className="lg:hidden mb-10">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#6034dc] flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>

                <div>
                  <div className="font-black text-xl">
                    Studentica<span className="text-[#6335dc]">.</span>
                  </div>
                  <div className="text-xs text-[#73809a]">
                    Campus Concierge
                  </div>
                </div>
              </Link>
            </div>

            {/* Login card */}
            <div className="bg-white rounded-[30px] border border-[#ebe7f4] shadow-[0_25px_70px_rgba(65,42,120,0.12)] p-7 sm:p-10">

              <div className="flex items-center gap-2 w-fit px-3.5 py-2 rounded-full bg-[#f1eaff] text-[#6735df] text-sm font-bold">
                <Sparkles size={15} />
                Campus Concierge
              </div>

              <h2 className="mt-6 text-[38px] sm:text-[45px] leading-none font-black tracking-[-2px]">
                Welcome back
                <span className="ml-2">👋</span>
              </h2>

              <p className="mt-4 text-[#71809a] text-base">
                Sign in to continue to your campus hub.
              </p>

              {/* Role selector */}
              <div className="mt-8 p-1.5 bg-[#f5f4f8] rounded-2xl grid grid-cols-2 gap-1">

                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-all ${
                    student
                      ? "bg-white text-[#6335dc] shadow-[0_4px_15px_rgba(70,45,120,0.10)]"
                      : "text-[#72809a]"
                  }`}
                >
                  <GraduationCap size={19} />
                  Student
                </button>

                <button
                  type="button"
                  onClick={() => setRole("vendor")}
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-all ${
                    !student
                      ? "bg-white text-[#6335dc] shadow-[0_4px_15px_rgba(70,45,120,0.10)]"
                      : "text-[#72809a]"
                  }`}
                >
                  <Store size={18} />
                  Vendor
                </button>

              </div>

              {/* Email */}
              <div className="mt-7">
                <label className="block text-sm font-bold mb-2 text-[#263654]">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-14 px-4 rounded-xl border border-[#dfe3eb] bg-[#fffdfc] outline-none transition focus:border-[#713ce5] focus:ring-4 focus:ring-purple-100 text-[#263654]"
                />
              </div>

              {/* Password */}
              <div className="mt-5">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-[#263654]">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-[#6938df] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full h-14 px-4 pr-12 rounded-xl border border-[#dfe3eb] bg-[#fffdfc] outline-none transition focus:border-[#713ce5] focus:ring-4 focus:ring-purple-100 text-[#263654]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7a879e]"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* Login button */}
              <button
                type="button"
                className="mt-7 w-full h-14 rounded-xl bg-[#6537df] hover:bg-[#572bcf] text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-200 transition-all hover:-translate-y-0.5"
              >
                Login as {student ? "Student" : "Vendor"}
                <ArrowRight size={19} />
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 my-7">
                <div className="h-px flex-1 bg-[#e8e7ec]" />
                <span className="text-xs text-[#929bae] font-semibold">
                  OR
                </span>
                <div className="h-px flex-1 bg-[#e8e7ec]" />
              </div>

              {/* Google */}
              <button
                type="button"
                className="w-full h-13 py-3.5 rounded-xl border border-[#dfe3eb] bg-white font-semibold flex items-center justify-center gap-3 hover:bg-[#faf9fd] transition"
              >
                <span className="font-black text-lg text-[#4285F4]">G</span>
                Continue with Google
              </button>

              {/* Register */}
              <p className="text-center text-sm text-[#73809a] mt-7">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-bold text-[#6636dd] hover:underline"
                >
                  Create one
                </Link>
              </p>

              {/* Trust */}
              <div className="mt-7 pt-5 border-t border-[#eeeef2] flex items-center justify-center gap-5 text-xs text-[#7d879b]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-[#16a56b]" />
                  Safe & secure
                </span>

                <span className="w-px h-4 bg-[#dddde2]" />

                <span>No spam, ever</span>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


/* ---------------- MINI SERVICE ---------------- */

function MiniService({
  icon,
  title,
  text,
  bg,
  iconColor,
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center ${iconColor}`}
      >
        {icon}
      </div>

      <div>
        <p className="font-bold text-sm text-[#263654]">
          {title}
        </p>

        <p className="text-xs text-[#7b879c] mt-0.5">
          {text}
        </p>
      </div>
    </div>
  );
}