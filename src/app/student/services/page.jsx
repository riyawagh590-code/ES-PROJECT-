"use client";

import Link from "next/link";
import {
  Utensils,
  Shirt,
  Sparkles,
  Home,
  Coffee,
  Users,
  ArrowRight,
  Search,
  Star,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const categories = [
  {
    name: "Mess & Meals",
    href: "/student/mess",
    icon: Utensils,
    description:
      "Hygienic and tasty meals from verified mess providers near campus.",
    price: "From ₹1200/month",
    badge: "Popular",
    color: "#ff7518",
    image: "/images/mess.jpg",
  },
  {
    name: "Laundry",
    href: "/student/laundry",
    icon: Shirt,
    description:
      "Convenient laundry and dry-cleaning services with pickup options.",
    price: "From ₹80/bag",
    badge: "Convenient",
    color: "#168cff",
    image: "/images/laundry.jpg",
  },
  {
    name: "Room Cleaning",
    href: "/student/cleaning",
    icon: Sparkles,
    description:
      "Keep your hostel or room fresh with reliable cleaning services.",
    price: "From ₹200/visit",
    badge: "Hassle Free",
    color: "#8b45ed",
    image: "/images/cleaning.jpg",
  },
  {
    name: "PG & Housing",
    href: "/student/pg",
    icon: Home,
    description:
      "Explore verified PGs, hostels and rental rooms close to campus.",
    price: "From ₹4500/month",
    badge: "Verified",
    color: "#10b981",
    image: "/images/hostel.jpg",
  },
  {
    name: "Café Perks",
    href: "/student/cafe",
    icon: Coffee,
    description:
      "Discover cafes, food deals and student-friendly offers around campus.",
    price: "Special Offers",
    badge: "Campus Deals",
    color: "#f59e0b",
    image: "/images/cafe.jpg",
  },
  {
    name: "Roommate Finder",
    href: "/student/roomate",
    icon: Users,
    description:
      "Find compatible roommates based on your lifestyle and preferences.",
    price: "Find a Match",
    badge: "Trending",
    color: "#ec4899",
    image: "/images/roommate.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#faf8ff]">

      {/* ================= HEADER ================= */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-2xl shadow-md">
              🎓
            </div>

            <div>
              <div className="text-xl font-black tracking-tight text-[#14244a]">
                Studentica<span className="text-purple-600">.</span>
              </div>

              <div className="text-xs font-medium text-slate-500">
                Campus Concierge
              </div>
            </div>
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-600 transition hover:text-purple-600"
            >
              Home
            </Link>

            <span className="border-b-2 border-purple-600 pb-2 text-sm font-bold text-purple-600">
              Services
            </span>

            <Link
              href="/pass"
              className="text-sm font-semibold text-slate-600 transition hover:text-purple-600"
            >
              Fresher Pass
            </Link>

            <Link
              href="/student/roomate"
              className="text-sm font-semibold text-slate-600 transition hover:text-purple-600"
            >
              Roommate Finder
            </Link>

            <Link
              href="/about"
              className="text-sm font-semibold text-slate-600 transition hover:text-purple-600"
            >
              About
            </Link>
          </nav>

          {/* ACTIONS */}
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/login"
              className="rounded-xl border border-purple-200 px-5 py-2.5 text-sm font-bold text-purple-700 transition hover:bg-purple-50"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-12 lg:px-8 lg:pt-16">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700">
              ✨ CAMPUS SERVICES
            </span>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#14244a] md:text-6xl">
              Everything you need,
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                all in one place.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              Trusted messes, laundry, room cleaning, PGs, cafés and
              roommates — all from one simple student platform.
            </p>

            {/* SEARCH */}
            <div className="mt-8 flex max-w-xl items-center rounded-2xl border border-slate-100 bg-white p-2 shadow-lg">

              <Search
                size={20}
                className="mx-4 shrink-0 text-slate-400"
              />

              <input
                type="text"
                placeholder="What do you need around campus?"
                className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                type="button"
                className="hidden rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3.5 font-bold text-white transition hover:shadow-lg sm:block"
              >
                Explore →
              </button>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">

              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-green-500" />
                Verified services
              </div>

              <div className="flex items-center gap-2">
                <Star
                  size={17}
                  className="fill-yellow-400 text-yellow-500"
                />
                Student-rated
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={17} className="text-purple-500" />
                Near your campus
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden h-[350px] overflow-hidden rounded-[32px] bg-purple-200 shadow-xl lg:block">

            <img
              src="/images/student-dashboard.jpg"
              alt="Campus students"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">

              <p className="font-black text-[#14244a]">
                Campus Concierge
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Everything you need today ✨
              </p>

            </div>
          </div>
        </div>

        {/* ================= SECTION TITLE ================= */}
        <div className="mt-16 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-purple-600">
              Explore Services
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#14244a] md:text-4xl">
              Your campus, simplified.
            </h2>
          </div>

          <span className="hidden text-sm font-medium text-slate-500 md:block">
            Verified services • Student-rated • Near your campus
          </span>
        </div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                href={category.href}
                key={category.name}
                className="group overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden">

                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* BADGE */}
                  <span
                    className="absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm"
                    style={{
                      backgroundColor: category.color,
                    }}
                  >
                    {category.badge}
                  </span>

                  {/* ICON */}
                  <div
                    className="absolute bottom-[-20px] left-5 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg"
                    style={{
                      backgroundColor: category.color,
                    }}
                  >
                    <Icon size={23} />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-5 pt-8">

                  <h3 className="text-xl font-black text-[#14244a] transition group-hover:text-purple-600">
                    {category.name}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">

                    <strong
                      className="text-sm"
                      style={{
                        color: category.color,
                      }}
                    >
                      {category.price}
                    </strong>

                    <span className="flex items-center gap-1 text-sm font-bold text-slate-700 transition group-hover:text-purple-600">
                      Explore
                      <ArrowRight size={16} />
                    </span>

                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ================= BOTTOM STATS ================= */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl bg-purple-100/70 p-6 text-center md:grid-cols-4">

          <div>
            <b className="text-2xl font-black text-purple-700">
              5+
            </b>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Campus Services
            </p>
          </div>

          <div>
            <b className="text-2xl font-black text-purple-700">
              24/7
            </b>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Service Access
            </p>
          </div>

          <div>
            <b className="text-2xl font-black text-purple-700">
              100%
            </b>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Student Focused
            </p>
          </div>

          <div>
            <b className="text-2xl font-black text-purple-700">
              ₹0
            </b>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Brokerage on PGs
            </p>
          </div>

        </div>
      </section>

      {/* ================= FOOTER SPACE ================= */}
      <div className="h-10" />
    </main>
  );
}