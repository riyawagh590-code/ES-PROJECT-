"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  User,
  Users,
  Utensils,
  WashingMachine,
  SprayCan,
  Home,
  Coffee,
} from "lucide-react";

export default function StudentRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="min-h-screen bg-[#fcf9f6] text-[#142541] overflow-hidden">

      <div className="min-h-screen grid lg:grid-cols-[50%_50%]">

        {/* LEFT SIDE */}
        <section className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-[#f6f1ff] px-12 xl:px-16 py-10">

          <div className="absolute -top-32 -left-32 w-[430px] h-[430px] rounded-full bg-[#e2d4ff]" />

          <div className="absolute top-0 right-[-130px] w-[390px] h-[390px] rounded-full bg-[#ffe9d6]" />

          <div className="absolute bottom-[-170px] left-[-80px] w-[470px] h-[470px] rounded-full bg-[#d6c8ff]" />

          <div className="relative z-10">

            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-[#6034dc] flex items-center justify-center shadow-lg shadow-purple-200">
                <GraduationCap className="text-white" size={28} />
              </div>

              <div>
                <div className="text-[25px] font-black tracking-[-1px]">
                  Studentica<span className="text-[#6537df]">.</span>
                </div>

                <div className="text-xs font-medium text-[#687792]">
                  Campus Concierge
                </div>
              </div>

            </Link>

            {/* Heading */}
            <div className="mt-20 max-w-xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm text-[#6234dc] text-sm font-bold">
                <Sparkles size={15} />
                Join 5,000+ students
              </div>

              <h1 className="mt-7 text-[54px] xl:text-[62px] leading-[0.98] font-black tracking-[-3px]">
                Your campus life,
                <br />
                made{" "}
                <span className="text-[#6737df]">
                  easier.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-7 text-[#65738e]">
                Get access to trusted messes, laundry, PGs, cleaning,
                cafes and roommates — all in one student platform.
              </p>

              {/* Features */}
              <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-8">

                <Feature
                  icon={<Utensils size={22} />}
                  title="Mess & Food"
                  text="Tasty & hygienic"
                  bg="bg-[#fff0e5]"
                  color="text-[#ff6b00]"
                />

                <Feature
                  icon={<WashingMachine size={22} />}
                  title="Laundry"
                  text="Clean & fresh"
                  bg="bg-[#e8f1ff]"
                  color="text-[#3479ee]"
                />

                <Feature
                  icon={<SprayCan size={22} />}
                  title="Cleaning"
                  text="Save time"
                  bg="bg-[#e6faef]"
                  color="text-[#0ca766]"
                />

                <Feature
                  icon={<Home size={22} />}
                  title="PG & Hostels"
                  text="Verified stays"
                  bg="bg-[#f0e8ff]"
                  color="text-[#7137dc]"
                />

                <Feature
                  icon={<Users size={22} />}
                  title="Roommates"
                  text="Find your vibe"
                  bg="bg-[#ffe9f5]"
                  color="text-[#e9278f]"
                />

                <Feature
                  icon={<Coffee size={22} />}
                  title="Cafes"
                  text="Good food"
                  bg="bg-[#fff3d8]"
                  color="text-[#e99b00]"
                />

              </div>
            </div>
          </div>

          <div className="relative z-10">

            <div className="max-w-md border-l-4 border-[#6335df] pl-5">
              <p className="text-xl font-bold">
                Same campus.
                <br />
                More possibilities.
              </p>

              <p className="mt-2 text-sm text-[#71809a]">
                One account for your everyday campus life.
              </p>
            </div>

          </div>
        </section>

        {/* RIGHT FORM */}
        <section className="relative flex items-center justify-center px-5 sm:px-8 py-10">

          <div className="absolute top-[-100px] right-[-100px] w-72 h-72 bg-[#eee5ff] rounded-full" />

          <div className="relative z-10 w-full max-w-[560px]">

            {/* Mobile logo */}
            <div className="lg:hidden mb-8">
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

            <div className="bg-white rounded-[30px] border border-[#ebe7f4] shadow-[0_25px_70px_rgba(65,42,120,0.12)] p-7 sm:p-10">

              {/* Header */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#f1eaff] text-[#6435dc] text-sm font-bold">
                <User size={15} />
                Create account
              </div>

              <h2 className="mt-6 text-[36px] sm:text-[42px] leading-none font-black tracking-[-2px]">
                Welcome, Student! 👋
              </h2>

              <p className="mt-4 text-[#71809a]">
                Sign up to get started with your campus essentials.
              </p>

              {/* Account type */}
              <div className="mt-7 grid grid-cols-2 gap-2 p-1.5 bg-[#f4f3f8] rounded-2xl">

                <div className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#6537df] text-white font-bold shadow-lg shadow-purple-200">
                  <GraduationCap size={19} />
                  Student
                </div>

                <Link
                  href="/register/vendor"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-[#71809a] font-semibold"
                >
                  <Users size={18} />
                  Vendor
                </Link>

              </div>

              {/* Full name */}
              <Field
                label="Full Name"
                icon={<User size={18} />}
                placeholder="e.g. Riya Singh"
              />

              {/* College */}
              <Field
                label="College"
                icon={<MapPin size={18} />}
                placeholder="Select your college"
                select
              />

              {/* Year + Email */}
              <div className="grid sm:grid-cols-2 gap-4">

                <Field
                  label="Year"
                  icon={<CalendarDays size={18} />}
                  placeholder="Select year"
                  select
                />

                <Field
                  label="Email"
                  icon={<Mail size={18} />}
                  placeholder="you@example.com"
                />

              </div>

              {/* Passwords */}
              <div className="grid sm:grid-cols-2 gap-4">

                <PasswordField
                  label="Password"
                  placeholder="Create a password"
                  show={showPassword}
                  setShow={setShowPassword}
                />

                <PasswordField
                  label="Confirm Password"
                  placeholder="Confirm password"
                  show={showConfirm}
                  setShow={setShowConfirm}
                />

              </div>

              {/* Register */}
              <button
                type="button"
                className="mt-7 w-full h-14 rounded-xl bg-[#6537df] hover:bg-[#5630c9] text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-200 transition hover:-translate-y-0.5"
              >
                Register as Student
                <ArrowRight size={19} />
              </button>

              {/* Google */}
              <div className="flex items-center gap-4 my-7">
                <div className="h-px bg-[#e7e7ec] flex-1" />
                <span className="text-xs text-[#8c95a6] font-semibold">
                  OR
                </span>
                <div className="h-px bg-[#e7e7ec] flex-1" />
              </div>

              <button
                type="button"
                className="w-full py-3.5 rounded-xl border border-[#dfe3eb] flex items-center justify-center gap-3 font-semibold hover:bg-[#faf9fd] transition"
              >
                <span className="font-black text-lg text-[#4285F4]">G</span>
                Continue with Google
              </button>

              <p className="text-center text-sm text-[#758198] mt-7">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-bold text-[#6335dc] hover:underline"
                >
                  Login
                </Link>
              </p>

              {/* Security */}
              <div className="mt-7 pt-5 border-t border-[#eeeef2] flex items-center justify-center gap-4 text-xs text-[#7d879b]">

                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-[#15a46a]" />
                  Your data is safe with us
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


/* ---------------- FEATURE ---------------- */

function Feature({
  icon,
  title,
  text,
  bg,
  color,
}) {
  return (
    <div className="flex items-center gap-3">

      <div
        className={`w-11 h-11 rounded-xl ${bg} ${color} flex items-center justify-center`}
      >
        {icon}
      </div>

      <div>
        <p className="font-bold text-sm">
          {title}
        </p>

        <p className="text-xs text-[#7a879e] mt-0.5">
          {text}
        </p>
      </div>

    </div>
  );
}


/* ---------------- FIELD ---------------- */

function Field({
  label,
  icon,
  placeholder,
  select = false,
}) {
  return (
    <div className="mt-5">

      <label className="flex items-center gap-2 text-sm font-bold mb-2 text-[#263654]">
        {icon}
        {label}
      </label>

      <div className="relative">

        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-14 px-4 pr-12 rounded-xl border border-[#dfe3eb] bg-[#fffdfc] outline-none focus:border-[#713ce5] focus:ring-4 focus:ring-purple-100 transition placeholder:text-[#9aa4b7]"
        />

        {select && (
          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7c879b]"
          />
        )}

      </div>
    </div>
  );
}


/* ---------------- PASSWORD ---------------- */

function PasswordField({
  label,
  placeholder,
  show,
  setShow,
}) {
  return (
    <div className="mt-5">

      <label className="flex items-center gap-2 text-sm font-bold mb-2 text-[#263654]">
        <LockKeyhole size={17} />
        {label}
      </label>

      <div className="relative">

        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="w-full h-14 px-4 pr-12 rounded-xl border border-[#dfe3eb] bg-[#fffdfc] outline-none focus:border-[#713ce5] focus:ring-4 focus:ring-purple-100 transition placeholder:text-[#9aa4b7]"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7d879b]"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>

      </div>
    </div>
  );
}