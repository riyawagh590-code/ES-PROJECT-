"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  GraduationCap,
  Store,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  LogIn,
  ShieldCheck,
  Leaf,
  Moon,
  Send,
  Sparkles,
  Utensils,
  WashingMachine,
  SprayCan,
  House,
  Users,
  Coffee,
} from "lucide-react";

export default function LoginForm() {
  const [role, setRole] = useState("student");

  const [showPassword, setShowPassword] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    setMessage("");

    if (!formData.email || !formData.password) {
      setMessage("Please enter your email and password.");
      return;
    }

    /*
      FRONTEND-ONLY LOGIN

      We are checking the account saved during registration.
      Backend authentication can be connected later.
    */

    const savedUser = localStorage.getItem("campusConciergeUser");

    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);

        if (
          user.email &&
          user.email === formData.email &&
          user.password &&
          user.password === formData.password
        ) {
          localStorage.setItem(
            "campusConciergeLoggedIn",
            JSON.stringify({
              email: user.email,
              role: user.role || role,
              name: user.fullName || "",
              rememberMe,
            })
          );

          setMessage("Login successful!");

          setTimeout(() => {
            if (role === "vendor") {
              window.location.href = "/vendor";
            } else {
              window.location.href = "/student";
            }
          }, 700);

          return;
        }
      } catch (error) {
        console.error("Unable to read saved account:", error);
      }
    }

    /*
      If backend is not connected yet, show a friendly message.
    */

    setMessage(
      "Account not found. Please check your details or create an account first."
    );
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

          {/* RIGHT NAVIGATION */}

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
              className="hidden h-11 items-center justify-center rounded-full border border-[#aebbd0] bg-white px-7 text-[15px] font-bold text-[#6740df] transition hover:border-[#6740df] hover:bg-[#f7f3ff] sm:flex"
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
          MAIN LOGIN AREA
      ====================================================== */}

      <section className="relative min-h-[calc(100vh-86px)] overflow-hidden">
        {/* BACKGROUND DECORATIONS */}

        <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#f0eaff] opacity-80" />

        <div className="pointer-events-none absolute -right-20 top-[-80px] h-80 w-80 rounded-full bg-[#fff0df] opacity-80" />

        <div className="pointer-events-none absolute bottom-[-130px] left-[35%] h-80 w-80 rounded-full bg-[#e9e0ff] opacity-70" />

        <div className="pointer-events-none absolute right-[-100px] bottom-[-80px] h-72 w-72 rounded-full bg-[#fce8ff] opacity-60" />

        <div className="relative mx-auto grid min-h-[calc(100vh-86px)] max-w-[1500px] grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 xl:px-16">
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="relative flex min-h-[700px] flex-col justify-center lg:pr-12">
            {/* TOP BADGE */}

            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#ece5ff] bg-white/80 px-5 py-2.5 text-[14px] font-bold text-[#263b61] shadow-sm">
              <Sparkles
                size={17}
                className="text-[#7548e5]"
              />

              Join 5,000+ Students
            </div>

            {/* MAIN HEADING */}

            <h1 className="max-w-[650px] text-[48px] font-extrabold leading-[1.05] tracking-[-2.5px] text-[#112d59] sm:text-[57px] lg:text-[62px]">
              Your campus
              <br />
              life, made{" "}
              <span className="relative inline-block text-[#7145e5]">
                easier.
                <span className="absolute -bottom-2 left-1/2 h-[4px] w-[105%] -translate-x-1/2 rotate-[-2deg] rounded-full bg-[#f08bb7]" />
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-[580px] text-[18px] leading-8 text-[#637796]">
              Get access to trusted messes, laundry, PGs,
              cleaning, cafes and roommates — all in one
              student platform.
            </p>

            {/* =================================================
                SERVICE ICON GRID
            ================================================== */}

            <div className="mt-9 grid max-w-[610px] grid-cols-2 gap-x-7 gap-y-7 sm:grid-cols-3">
              {/* MESS */}

              <ServiceFeature
                icon={<Utensils size={25} />}
                title="Mess & Food"
                subtitle="Tasty & hygienic"
                iconClass="bg-[#fff0e5] text-[#f27835]"
              />

              {/* LAUNDRY */}

              <ServiceFeature
                icon={<WashingMachine size={25} />}
                title="Laundry"
                subtitle="Clean & fresh"
                iconClass="bg-[#e7efff] text-[#477ce5]"
              />

              {/* CLEANING */}

              <ServiceFeature
                icon={<SprayCan size={25} />}
                title="Cleaning"
                subtitle="Save time"
                iconClass="bg-[#e3f8ec] text-[#16b877]"
              />

              {/* PG */}

              <ServiceFeature
                icon={<House size={25} />}
                title="PG & Hostels"
                subtitle="Verified stays"
                iconClass="bg-[#f0e6ff] text-[#7243e4]"
              />

              {/* ROOMMATES */}

              <ServiceFeature
                icon={<Users size={25} />}
                title="Roommates"
                subtitle="Find your vibe"
                iconClass="bg-[#ffe7fa] text-[#d942c8]"
              />

              {/* CAFES */}

              <ServiceFeature
                icon={<Coffee size={25} />}
                title="Cafes"
                subtitle="Good food, great vibes"
                iconClass="bg-[#fff1d9] text-[#e9a31b]"
              />
            </div>

            {/* HANDWRITTEN NOTE */}

            <div className="mt-9 w-fit rotate-[-4deg] rounded-[50%] bg-[#eee4ff] px-7 py-4 text-[17px] font-semibold leading-6 text-[#5635ca]">
              Same campus.
              <br />
              More possibilities. ♡
            </div>

            {/* =================================================
                CAMPUS IMAGE
            ================================================== */}

            <div className="relative mt-7 hidden h-[310px] w-full overflow-visible md:block">
              {/* image background */}

              <div className="absolute bottom-[-30px] left-[-80px] h-[270px] w-[620px] overflow-hidden rounded-[45%_45%_0_0] bg-[#eee7ff]" />

              <img
                src="/images/campus-students-reference.jpg"
                alt="Students enjoying campus life"
                className="absolute bottom-[-70px] left-[-30px] z-10 h-[390px] w-[590px] object-cover object-center"
              />

              {/* purple decoration */}

              <div className="absolute bottom-[-10px] left-[-100px] z-20 h-32 w-32 rounded-full bg-[#dfd1ff] opacity-90" />
            </div>

            {/* MOBILE IMAGE */}

            <div className="mt-8 flex justify-center md:hidden">
              <img
                src="/images/campus-students-reference.jpg"
                alt="Students enjoying campus life"
                className="h-[300px] w-full rounded-[30px] object-cover"
              />
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE LOGIN CARD
          ================================================== */}

          <div className="relative z-20 flex justify-center lg:justify-end">
            <div className="w-full max-w-[620px] rounded-[30px] border border-white bg-white/95 p-7 shadow-[0_20px_70px_rgba(37,31,69,0.10)] backdrop-blur-xl sm:p-9 lg:p-10">
              {/* CARD BADGE */}

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f0eaff] px-4 py-2 text-[13px] font-extrabold text-[#7045e3]">
                <LogIn size={17} />

                Welcome Back
              </div>

              {/* HEADING */}

              <h2 className="text-[35px] font-extrabold leading-tight tracking-[-1.3px] text-[#112d59] sm:text-[41px]">
                Welcome back!
                <span className="ml-2">👋</span>
              </h2>

              <p className="mt-2 text-[17px] leading-7 text-[#71819c]">
                Login to continue your campus journey.
              </p>

              {/* =================================================
                  STUDENT / VENDOR SWITCH
              ================================================== */}

              <div className="mt-7 grid grid-cols-2 rounded-2xl bg-[#f5f4fa] p-1">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`flex h-12 items-center justify-center gap-2 rounded-xl text-[15px] font-bold transition ${
                    role === "student"
                      ? "bg-gradient-to-r from-[#7549e8] to-[#6840dd] text-white shadow-md"
                      : "text-[#536987] hover:bg-white"
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
                      : "text-[#536987] hover:bg-white"
                  }`}
                >
                  <Store size={19} />

                  Vendor
                </button>
              </div>

              {/* =================================================
                  LOGIN FORM
              ================================================== */}

              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >
                {/* EMAIL */}

                <div>
                  <label className="mb-2 flex items-center gap-2 text-[14px] font-bold text-[#18345e]">
                    <Mail
                      size={18}
                      className="text-[#27476e]"
                    />

                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7f91ad]"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="login-input pl-12"
                    />
                  </div>
                </div>

                {/* PASSWORD */}

                <div>
                  <label className="mb-2 flex items-center gap-2 text-[14px] font-bold text-[#18345e]">
                    <LockKeyhole
                      size={18}
                      className="text-[#27476e]"
                    />

                    Password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={19}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7f91ad]"
                    />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="login-input pl-12 pr-12"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
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
                </div>

                {/* REMEMBER + FORGOT */}

                <div className="flex items-center justify-between">
                  <label className="flex cursor-pointer items-center gap-2 text-[13px] font-medium text-[#6f809b]">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) =>
                        setRememberMe(e.target.checked)
                      }
                      className="h-4 w-4 rounded border-[#cbd3df] accent-[#6c42df]"
                    />

                    Remember me
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setMessage(
                        "Password reset will be connected when the backend is added."
                      )
                    }
                    className="text-[13px] font-bold text-[#6840df] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* MESSAGE */}

                {message && (
                  <div
                    className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                      message.includes("successful")
                        ? "bg-[#e8faf1] text-[#15945f]"
                        : "bg-[#fff0f0] text-[#d74646]"
                    }`}
                  >
                    {message}
                  </div>
                )}

                {/* LOGIN BUTTON */}

                <button
                  type="submit"
                  className="flex h-[56px] w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#7549e8] to-[#6640dc] text-[16px] font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                >
                  <LogIn size={20} />

                  {role === "student"
                    ? "Login as Student"
                    : "Login as Vendor"}

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
                  <span className="text-[22px] font-extrabold">
                    G
                  </span>

                  Continue with Google
                </button>

                {/* REGISTER */}

                <p className="pt-1 text-center text-[14px] text-[#7a89a1]">
                  Don't have an account?{" "}
                  <Link
                    href="/register"
                    className="font-bold text-[#6840df] hover:underline"
                  >
                    Create Account
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
              <Send
                size={42}
                strokeWidth={1.7}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCAL INPUT STYLES
      ====================================================== */}

      <style jsx>{`
        .login-input {
          width: 100%;
          height: 54px;
          border-radius: 13px;
          border: 1px solid #d6ddea;
          background: #ffffff;
          padding-right: 15px;
          font-size: 14px;
          color: #18345e;
          outline: none;
          transition: all 0.2s ease;
        }

        .login-input::placeholder {
          color: #9aa8bd;
        }

        .login-input:hover {
          border-color: #b9abd9;
        }

        .login-input:focus {
          border-color: #7045e3;
          box-shadow: 0 0 0 3px rgba(112, 69, 227, 0.1);
        }
      `}</style>
    </main>
  );
}

/* ============================================================
   SERVICE FEATURE
============================================================ */

function ServiceFeature({
  icon,
  title,
  subtitle,
  iconClass,
}) {
  return (
    <div className="flex flex-col">
      <div
        className={`mb-3 flex h-[58px] w-[58px] items-center justify-center rounded-[18px] ${iconClass}`}
      >
        {icon}
      </div>

      <h3 className="text-[15px] font-extrabold text-[#142f59]">
        {title}
      </h3>

      <p className="mt-1 text-[13px] text-[#71829b]">
        {subtitle}
      </p>
    </div>
  );
}