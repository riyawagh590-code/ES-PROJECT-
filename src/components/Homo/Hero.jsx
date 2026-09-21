"use client";

import Link from "next/link";
import {
  ArrowRight,
  Search,
  Sparkles,
  ShieldCheck,
  MapPin,
  Star,
  LogIn,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5f7] px-6 pb-20 pt-12 md:px-10 lg:px-16">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#d9c9ff] opacity-40 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#ffd9b8] opacity-50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          {/* Small label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ddd2e9] bg-white px-4 py-2 text-sm font-semibold text-[#5b5263] shadow-sm">
            <Sparkles size={16} className="text-[#8b5cf6]" />
            Built for student life
          </div>

          {/* Main heading */}
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-[#343b46] md:text-6xl lg:text-7xl">
            Your campus life,
            <span className="block text-[#7654e8]">sorted.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#746b73] md:text-xl">
            Find trusted messes, laundry, room cleaning, PGs, cafes and
            roommates — all from one simple student platform.
          </p>

          {/* Search */}
          <div className="mt-8 flex max-w-2xl items-center gap-2 rounded-2xl border border-[#ded5df] bg-white p-2 shadow-lg">
            <Search
              className="ml-3 shrink-0 text-[#8c8189]"
              size={21}
            />

            <input
              type="text"
              placeholder="What do you need around campus?"
              className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-[#343b46] outline-none md:text-base"
            />

            <Link
              href="/student/services"
              className="hidden shrink-0 items-center gap-2 rounded-xl bg-[#46505b] px-5 py-3 font-bold text-white transition hover:bg-[#343b46] sm:flex"
            >
              Explore
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Small benefits */}
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-[#6f6670]">
            <div className="flex items-center gap-2">
              <ShieldCheck
                size={17}
                className="text-[#0e9f6e]"
              />
              Verified services
            </div>

            <div className="flex items-center gap-2">
              <MapPin
                size={17}
                className="text-[#e88a25]"
              />
              Near your campus
            </div>

            <div className="flex items-center gap-2">
              <Star
                size={17}
                className="fill-[#f5a623] text-[#f5a623]"
              />
              Student-rated
            </div>
          </div>

          {/* MAIN ACTION BUTTONS */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {/* GET STARTED */}
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-[#7654e8] px-6 py-3.5 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#6545d4]"
            >
              Get Started
              <ArrowRight size={17} />
            </Link>

            {/* LOGIN */}
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl border border-[#d8cde3] bg-white px-6 py-3.5 font-bold text-[#46505b] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f5f0f8]"
            >
              <LogIn size={17} />
              Login
            </Link>

            {/* FRESHER PASS */}
            <Link
              href="/pass"
              className="inline-flex items-center gap-2 rounded-xl border border-[#f0cda9] bg-[#fff4e8] px-6 py-3.5 font-bold text-[#9a5b17] transition hover:-translate-y-0.5 hover:bg-[#ffecd8]"
            >
              Explore Fresher Pass
            </Link>
          </div>

          {/* Small navigation hint */}
          <p className="mt-4 text-sm text-[#8a8088]">
            New here? Click <strong>Get Started</strong> to register.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Main dashboard card */}
          <div className="rounded-[28px] border border-white bg-white p-5 shadow-2xl">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#968a91]">
                  Campus Concierge
                </p>

                <h3 className="mt-1 text-xl font-black text-[#343b46]">
                  Everything nearby
                </h3>
              </div>

              <div className="rounded-full bg-[#e9f8ef] px-3 py-1.5 text-xs font-bold text-[#0e9565]">
                ● Live
              </div>
            </div>

            {/* Service mini cards */}
            <div className="grid grid-cols-2 gap-3">
              {/* Mess */}
              <Link
                href="/student/mess"
                className="rounded-2xl bg-[#f1ebff] p-4 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-2xl">🍱</div>

                <p className="mt-3 font-bold text-[#40384b]">
                  Mess
                </p>

                <p className="text-xs text-[#81758a]">
                  From ₹2,600/mo
                </p>
              </Link>

              {/* Laundry */}
              <Link
                href="/student/laundry"
                className="rounded-2xl bg-[#fff0e4] p-4 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-2xl">🧺</div>

                <p className="mt-3 font-bold text-[#40384b]">
                  Laundry
                </p>

                <p className="text-xs text-[#81758a]">
                  From ₹60/load
                </p>
              </Link>

              {/* Cleaning */}
              <Link
                href="/student/cleaning"
                className="rounded-2xl bg-[#e5f7f1] p-4 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-2xl">✨</div>

                <p className="mt-3 font-bold text-[#40384b]">
                  Cleaning
                </p>

                <p className="text-xs text-[#81758a]">
                  From ₹150/room
                </p>
              </Link>

              {/* PG */}
              <Link
                href="/student/pg"
                className="rounded-2xl bg-[#eaf0ff] p-4 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-2xl">🏠</div>

                <p className="mt-3 font-bold text-[#40384b]">
                  PGs
                </p>

                <p className="text-xs text-[#81758a]">
                  Verified stays
                </p>
              </Link>
            </div>

            {/* Booking preview */}
            <Link
              href="/bookings"
              className="mt-4 block rounded-2xl border border-[#eee5eb] bg-[#fbf8fa] p-4 transition hover:border-[#d8cde3]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#9a8e95]">
                    UPCOMING
                  </p>

                  <p className="mt-1 font-bold text-[#454c56]">
                    Weekend Room Cleaning
                  </p>
                </div>

                <span className="rounded-full bg-[#fff1d5] px-3 py-1 text-xs font-bold text-[#a56813]">
                  Saturday
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-[#81767e]">
                  11:30 AM – 12:30 PM
                </span>

                <span className="font-black text-[#343b46]">
                  ₹200
                </span>
              </div>
            </Link>
          </div>

          {/* Floating rating */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white bg-white px-5 py-4 shadow-xl sm:block">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0c7]">
                ⭐
              </div>

              <div>
                <p className="font-black text-[#343b46]">
                  4.8/5
                </p>

                <p className="text-xs text-[#81767e]">
                  Student ratings
                </p>
              </div>
            </div>
          </div>

          {/* Floating pass */}
          <Link
            href="/pass"
            className="absolute -right-4 -top-5 hidden rounded-2xl bg-[#46505b] px-5 py-4 text-white shadow-xl transition hover:-translate-y-1 sm:block"
          >
            <p className="text-xs font-semibold text-[#d9dce0]">
              FRESHER PASS
            </p>

            <p className="mt-1 text-lg font-black">
              ₹200/month
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}