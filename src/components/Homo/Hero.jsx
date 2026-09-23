"use client";

import Link from "next/link";
import {
  ArrowRight,
  Search,
  Sparkles,
  ShieldCheck,
  MapPin,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5f7]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#d9c9ff] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#ffd9b8] opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-12 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* Small badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 shadow-sm">
              <Sparkles size={16} className="text-purple-600" />
              <span className="text-sm font-bold text-purple-700">
                Built for your first campus year
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-[#14244a] sm:text-6xl lg:text-7xl">
              Your campus life,
              <span className="block text-purple-600">
                sorted.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Find food, laundry, cleaning, hostels, cafes, roommates and
              everyday student services — all in one place.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-xl items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <Search size={21} />
              </div>

              <input
                type="text"
                placeholder="What do you need today?"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
              />

              <Link
                href="/student/services"
                className="hidden rounded-xl bg-[#14244a] px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-700 sm:block"
              >
                Explore
              </Link>
            </div>

            {/* Mobile Explore button */}
            <Link
              href="/student/services"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#14244a] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-purple-700 sm:hidden"
            >
              Explore Services
              <ArrowRight size={17} />
            </Link>

            {/* Trust points */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-green-600" />
                Verified services
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={17} className="text-orange-500" />
                Near your campus
              </div>

              <div className="flex items-center gap-2">
                <Star size={17} className="fill-yellow-400 text-yellow-500" />
                Student rated
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-700"
              >
                Get Started
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/pass"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700"
              >
                <Sparkles size={17} />
                Explore Fresher Pass
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">

            {/* Main image */}
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-purple-200/40">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src="/images/student-dashboard.jpg"
                  alt="Student using Campus Concierge"
                  className="h-[430px] w-full object-cover sm:h-[520px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14244a]/60 via-transparent to-transparent" />

                {/* Bottom text */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-purple-600">
                          Campus Concierge
                        </p>
                        <p className="mt-1 text-lg font-black text-[#14244a]">
                          Everything student life needs.
                        </p>
                      </div>

                      <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-purple-600 text-white sm:flex">
                        <ArrowRight size={19} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating service card */}
            <div className="absolute -left-4 top-12 hidden rounded-2xl border border-white bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-xl">
                  🍱
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    Today's pick
                  </p>
                  <p className="text-sm font-black text-[#14244a]">
                    Food nearby
                  </p>
                </div>
              </div>
            </div>

            {/* Floating roommate card */}
            <div className="absolute -right-4 bottom-20 hidden rounded-2xl border border-white bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100 text-xl">
                  🧑‍🤝‍🧑
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    Looking for
                  </p>
                  <p className="text-sm font-black text-[#14244a]">
                    A compatible roommate
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}