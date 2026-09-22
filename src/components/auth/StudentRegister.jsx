"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  GraduationCap,
  CalendarDays,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  UserPlus,
  Store,
  Utensils,
  WashingMachine,
  SprayCan,
  House,
  Users,
  Coffee,
  ShieldCheck,
  Leaf,
  Sparkles,
  Moon,
  Send,
  ChevronDown,
} from "lucide-react";

export default function StudentRegister() {
  const [role, setRole] = useState("student");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    college: "",
    year: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.college ||
      !formData.year ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("Please fill in all the required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Frontend-only registration for now.
    // Backend/database can be connected later.
    localStorage.setItem(
      "campusConciergeUser",
      JSON.stringify({
        ...formData,
        role,
      })
    );

    setMessage("Account created successfully!");

    setTimeout(() => {
      window.location.href = "/login";
    }, 900);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fcfaf8] text-[#102b56]">
      {/* =====================================================
          TOP NAVIGATION
      ====================================================== */}

      <header className="relative z-30 border-b border-[#eee9f3] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[86px] max-w-[1500px] items-center justify-between px-6 lg:px-10">
          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6941e8] to-[#5430d8] shadow-lg shadow-purple-200">
              <GraduationCap
                size={31}
                strokeWidth={2.3}
                className="text-white"
              />
            </div>

            <div className="leading-none">
              <div className="text-[25px] font-extrabold tracking-[-0.8px] text-[#112d59]">
                Studentica
                <span className="text-[#7651eb]">.</span>
              </div>

              <div className="mt-1 text-[14px] font-medium text-[#617492]">
                Campus Concierge
              </div>
            </div>
          </Link>

          {/* NAVIGATION */}

          <nav className="hidden items-center gap-9 lg:flex">
            <Link
              href="/"
              className="text-[15px] font-semibold text-[#132e57] transition hover:text-[#6842e6]"
            >
              Home
            </Link>

            <Link
              href="/student/services"
              className="text-[15px] font-semibold text-[#132e57] transition hover:text-[#6842e6]"
            >
              Services
            </Link>

            <Link
              href="/pass"
              className="text-[15px] font-semibold text-[#132e57] transition hover:text-[#6842e6]"
            >
              Fresher Pass
            </Link>

            <Link
              href="/student/roomate"
              className="text-[15px] font-semibold text-[#132e57] transition hover:text-[#6842e6]"
            >
              Roommate Finder
            </Link>

            <Link
              href="/#about"
              className="text-[15px] font-semibold text-[#132e57] transition hover:text-[#6842e6]"
            >
              About
            </Link>
          </nav>

          {/* RIGHT NAV */}

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="hidden h-11 w-11 items-center justify-center rounded-full text-[#112d59] transition hover:bg-[#f3efff] md:flex"
            >
              <Moon size={21} />
            </button>

            <Link
              href="/login"
              className="hidden h-11 items-center justify-center rounded-full border border-[#aebbd0] px-7 text-[15px] font-bold text-[#6740df] transition hover:border-[#6740df] hover:bg-[#f7f3ff] sm:flex"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#7650eb] to-[#6540dd] px-7 text-[15px] font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <section className="relative min-h-[calc(100vh-86px)] overflow-hidden">
        {/* DECORATIVE BACKGROUND BLOBS */}

        <div className="pointer-events-none absolute -top-24 left-[42%] h-64 w-64 rounded-full bg-[#eee5ff] opacity-70 blur-[1px]" />

        <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#fff0e5] opacity-80" />

        <div className="pointer-events-none absolute -bottom-28 left-[-70px] h-72 w-72 rounded-full bg-[#e8ddff] opacity-70" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#fff1df] opacity-70" />

        <div className="relative mx-auto grid min-h-[calc(100vh-86px)] max-w-[1500px] grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-[1fr_1.02fr] lg:px-12 xl:px-16">
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="relative flex min-h-[780px] flex-col justify-center pb-10 lg:pr-10">
            {/* handwritten label */}

            <div className="absolute left-0 top-4 hidden rotate-[-5deg] text-[24px] font-semibold text-[#6541df] lg:block">
              <span className="font-serif italic">
                New here?
              </span>

              <svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                className="absolute left-[85px] top-[20px]"
              >
                <path
                  d="M4 7 C40 0, 74 12, 98 38"
                  fill="none"
                  stroke="#6541df"
                  strokeWidth="2"
                />

                <path
                  d="M91 29 L100 38 L90 42"
                  fill="none"
                  stroke="#6541df"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="mb-5 mt-14 text-[16px] font-extrabold tracking-[0.3px] text-[#7449e7] lg:mt-0">
              JOIN THE CAMPUS COMMUNITY
            </div>

            <h1 className="max-w-[650px] text-[48px] font-extrabold leading-[1.05] tracking-[-2.4px] text-[#112d59] sm:text-[58px] lg:text-[62px]">
              Create your
              <br />
              student account
            </h1>

            <p className="mt-6 max-w-[590px] text-[18px] leading-8 text-[#637796]">
              Get access to messes, laundry, PGs, cafes,
              roommate finder and more — all in one place.
            </p>

            {/* SERVICE FEATURES */}

            <div className="mt-8 grid max-w-[620px] grid-cols-1 gap-4 sm:grid-cols-2">
              {/* QUICK */}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eee7ff] text-[#7046e5]">
                  <Sparkles size={25} />
                </div>

                <div>
                  <h3 className="font-bold text-[#142f59]">
                    Quick & Easy
                  </h3>

                  <p className="mt-1 text-sm text-[#71829b]">
                    Complete in less than 2 minutes
                  </p>
                </div>
              </div>

              {/* VERIFIED */}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dff8ed] text-[#18b875]">
                  <ShieldCheck size={25} />
                </div>

                <div>
                  <h3 className="font-bold text-[#142f59]">
                    Verified Services
                  </h3>

                  <p className="mt-1 text-sm text-[#71829b]">
                    Trusted vendors & safe bookings
                  </p>
                </div>
              </div>

              {/* STUDENT FRIENDLY */}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ffedcb] text-[#ed9a16]">
                  <Sparkles size={25} />
                </div>

                <div>
                  <h3 className="font-bold text-[#142f59]">
                    Student Friendly
                  </h3>

                  <p className="mt-1 text-sm text-[#71829b]">
                    Built for your campus life
                  </p>
                </div>
              </div>
            </div>

            {/* CAMPUS IMAGE */}

            <div className="relative mt-8 hidden h-[410px] w-full max-w-[680px] overflow-visible md:block">
              {/* decorative purple shape */}

              <div className="absolute bottom-[-20px] left-[190px] h-[350px] w-[350px] rounded-[48%_52%_45%_55%] bg-[#eee8ff]" />

              {/* image */}

              <img
                src="/images/student-register-reference.jpg"
                alt="Student using Campus Concierge"
                className="absolute bottom-[-35px] left-[100px] z-10 h-[500px] w-auto max-w-none object-contain"
              />

              {/* handwritten notes */}

              <div className="absolute right-[20px] top-[60px] z-20 rotate-[-8deg] text-[20px] font-semibold text-[#6440dc]">
                Better
                <br />
                Services
              </div>

              <div className="absolute right-[-5px] top-[135px] z-20 rotate-[5deg] text-[20px] font-semibold text-[#6440dc]">
                Bigger
                <br />
                Smiles ☺
              </div>

              {/* crown */}

              <div className="absolute left-[55%] top-[8px] z-20 rotate-[-5deg] text-[#6740df]">
                <svg
                  width="75"
                  height="60"
                  viewBox="0 0 75 60"
                  fill="none"
                >
                  <path
                    d="M8 15 L20 39 L37 13 L51 39 L67 14 L61 48 H14 Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="8"
                    cy="14"
                    r="3"
                    fill="currentColor"
                  />

                  <circle
                    cx="37"
                    cy="12"
                    r="3"
                    fill="currentColor"
                  />

                  <circle
                    cx="67"
                    cy="13"
                    r="3"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* MOBILE IMAGE */}

            <div className="mt-8 flex justify-center md:hidden">
              <img
                src="/images/student-register-reference.jpg"
                alt="Student campus"
                className="h-[360px] w-auto object-contain"
              />
            </div>

            {/* BOTTOM HANDWRITTEN NOTE */}

            <div className="absolute bottom-2 left-0 hidden rotate-[-5deg] lg:block">
              <div className="rounded-[50%] bg-[#eee4ff] px-7 py-4 text-[18px] font-semibold leading-6 text-[#5534c9]">
                Your campus.
                <br />
                Our priority. ♡
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — REGISTER CARD
          ================================================== */}

          <div className="relative z-20 flex justify-center lg:justify-end">
            <div className="w-full max-w-[650px] rounded-[30px] border border-white bg-white/95 p-7 shadow-[0_20px_70px_rgba(37,31,69,0.10)] backdrop-blur-xl sm:p-9 lg:p-10">
              {/* CARD HEADING */}

              <div className="mb-7">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f0eaff] px-4 py-2 text-[13px] font-extrabold uppercase tracking-wide text-[#7045e3]">
                  <UserPlus size={17} />
                  Student Registration
                </div>

                <h2 className="text-[34px] font-extrabold leading-tight tracking-[-1.2px] text-[#112d59] sm:text-[39px]">
                  Let’s get you started!
                </h2>

                <p className="mt-2 text-[17px] text-[#71819c]">
                  Fill in your details to create your account.
                </p>
              </div>

              {/* ROLE SWITCH */}

              <div className="mb-7 grid grid-cols-2 rounded-2xl border border-[#d6dcea] p-1">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`flex h-12 items-center justify-center gap-2 rounded-xl text-[15px] font-bold transition ${
                    role === "student"
                      ? "bg-gradient-to-r from-[#7549e8] to-[#6840dd] text-white shadow-md"
                      : "text-[#536987] hover:bg-[#f7f4ff]"
                  }`}
                >
                  <GraduationCap size={20} />
                  Student
                </button>

                <button
                  type="button"
                  onClick={() => setRole("vendor")}
                  className={`flex h-12 items-center justify-center gap-2 rounded-xl text-[15px] font-bold transition ${
                    role === "vendor"
                      ? "bg-gradient-to-r from-[#7549e8] to-[#6840dd] text-white shadow-md"
                      : "text-[#536987] hover:bg-[#f7f4ff]"
                  }`}
                >
                  <Store size={19} />
                  Vendor
                </button>
              </div>

              {/* FORM */}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* FULL NAME + COLLEGE */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="Full Name"
                    icon={<User size={18} />}
                  >
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="form-input"
                    />
                  </FormField>

                  <FormField
                    label="College"
                    icon={<GraduationCap size={18} />}
                  >
                    <div className="relative">
                      <select
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        className="form-input appearance-none"
                      >
                        <option value="">
                          Enter your college name
                        </option>

                        <option value="MIT Academy of Engineering">
                          MIT Academy of Engineering
                        </option>

                        <option value="Alard College of Engineering">
                          Alard College of Engineering
                        </option>

                        <option value="Other">
                          Other
                        </option>
                      </select>

                      <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6c7f9e]"
                      />
                    </div>
                  </FormField>
                </div>

                {/* YEAR + EMAIL */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="Year"
                    icon={<CalendarDays size={18} />}
                  >
                    <div className="relative">
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="form-input appearance-none"
                      >
                        <option value="">
                          Select your year
                        </option>

                        <option value="1st Year">
                          1st Year
                        </option>

                        <option value="2nd Year">
                          2nd Year
                        </option>

                        <option value="3rd Year">
                          3rd Year
                        </option>

                        <option value="4th Year">
                          4th Year
                        </option>
                      </select>

                      <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6c7f9e]"
                      />
                    </div>
                  </FormField>

                  <FormField
                    label="Email"
                    icon={<Mail size={18} />}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="form-input"
                    />
                  </FormField>
                </div>

                {/* PASSWORD + CONFIRM */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="Password"
                    icon={<LockKeyhole size={18} />}
                  >
                    <div className="relative">
                      <input
                        type={
                          showPassword ? "text" : "password"
                        }
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        className="form-input pr-12"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#71829d] transition hover:text-[#6740df]"
                      >
                        {showPassword ? (
                          <EyeOff size={19} />
                        ) : (
                          <Eye size={19} />
                        )}
                      </button>
                    </div>
                  </FormField>

                  <FormField
                    label="Confirm Password"
                    icon={<LockKeyhole size={18} />}
                  >
                    <div className="relative">
                      <input
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className="form-input pr-12"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#71829d] transition hover:text-[#6740df]"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={19} />
                        ) : (
                          <Eye size={19} />
                        )}
                      </button>
                    </div>
                  </FormField>
                </div>

                {/* MESSAGE */}

                {message && (
                  <div
                    className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                      message.includes("successfully")
                        ? "bg-[#e8faf1] text-[#15945f]"
                        : "bg-[#fff0f0] text-[#d74646]"
                    }`}
                  >
                    {message}
                  </div>
                )}

                {/* CREATE ACCOUNT BUTTON */}

                <button
                  type="submit"
                  className="flex h-[56px] w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#7549e8] to-[#6640dc] text-[16px] font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                >
                  <UserPlus size={20} />

                  {role === "student"
                    ? "Create Account"
                    : "Register as Vendor"}

                  <ArrowRight size={20} />
                </button>

                {/* OR */}

                <div className="flex items-center gap-4 py-1">
                  <div className="h-px flex-1 bg-[#dfe3eb]" />

                  <span className="text-sm font-semibold text-[#73839d]">
                    OR
                  </span>

                  <div className="h-px flex-1 bg-[#dfe3eb]" />
                </div>

                {/* GOOGLE */}

                <button
                  type="button"
                  className="flex h-[55px] w-full items-center justify-center gap-3 rounded-2xl border border-[#d5dce8] bg-white text-[15px] font-bold text-[#233b61] transition hover:border-[#bcaaf2] hover:bg-[#faf8ff]"
                >
                  <span className="text-[22px] font-bold">
                    G
                  </span>

                  Continue with Google
                </button>

                {/* LOGIN */}

                <p className="pt-1 text-center text-[14px] text-[#7a89a1]">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-bold text-[#6840df] hover:underline"
                  >
                    Login
                  </Link>
                </p>

                {/* SECURITY */}

                <div className="flex flex-wrap items-center justify-center gap-4 border-t border-[#edf0f4] pt-5 text-[12px] text-[#8996a9]">
                  <span className="flex items-center gap-2">
                    <ShieldCheck
                      size={16}
                      className="text-[#63809c]"
                    />
                    Your data is safe with us
                  </span>

                  <span className="hidden h-4 w-px bg-[#d7dde6] sm:block" />

                  <span className="flex items-center gap-2">
                    <Leaf
                      size={16}
                      className="text-[#63809c]"
                    />
                    No spam, ever
                  </span>
                </div>
              </form>
            </div>

            {/* DECORATIVE PAPER PLANE */}

            <div className="absolute -bottom-7 -right-2 hidden rotate-[-12deg] text-[#6740df] xl:block">
              <Send size={42} strokeWidth={1.7} />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SMALL STYLE HELPERS
      ====================================================== */}

      <style jsx>{`
        .form-input {
          width: 100%;
          height: 50px;
          border-radius: 12px;
          border: 1px solid #d6ddea;
          background: #ffffff;
          padding: 0 15px;
          font-size: 14px;
          color: #18345e;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-input::placeholder {
          color: #9aa8bd;
        }

        .form-input:hover {
          border-color: #b9abd9;
        }

        .form-input:focus {
          border-color: #7045e3;
          box-shadow: 0 0 0 3px rgba(112, 69, 227, 0.1);
        }

        select.form-input {
          color: #71829d;
        }
      `}</style>
    </main>
  );
}

/* ============================================================
   FORM FIELD COMPONENT
============================================================ */

function FormField({ label, icon, children }) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-[14px] font-bold text-[#18345e]">
        <span className="text-[#27476e]">{icon}</span>
        {label}
      </label>

      {children}
    </div>
  );
}