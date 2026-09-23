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
  ShieldCheck,
  MapPin,
  CalendarDays,
  Wallet,
  Headphones,
} from "lucide-react";

const categories = [
  {
    name: "Mess & Meals",
    description:
      "Hygienic & tasty meals from verified mess providers, with flexible monthly plans.",
    price: "₹1200/month",
    badge: "Popular",
    image: "/images/mess.jpg",
    href: "/student/mess",
    icon: Utensils,
    accent: "orange",
  },
  {
    name: "Laundry",
    description:
      "Clean clothes, convenient pickup and delivery with student-friendly pricing.",
    price: "₹80/bag",
    badge: "Convenient",
    image: "/images/laundry.jpg",
    href: "/student/laundry",
    icon: Shirt,
    accent: "blue",
  },
  {
    name: "Room Cleaning",
    description:
      "Keep your room fresh and comfortable with reliable cleaning services.",
    price: "₹200/visit",
    badge: "Hassle Free",
    image: "/images/cleaning.jpg",
    href: "/student/cleaning",
    icon: Sparkles,
    accent: "purple",
  },
  {
    name: "PG & Housing",
    description:
      "Discover verified PGs, hostels and rental rooms close to your campus.",
    price: "₹4500/month",
    badge: "Verified",
    image: "/images/hostel.jpg",
    href: "/student/pg",
    icon: Home,
    accent: "green",
  },
  {
    name: "Café Perks",
    description:
      "Find cafés and restaurants with special student offers and campus deals.",
    price: "Up to 60% Off",
    badge: "Special Offers",
    image: "/images/cafe.jpg",
    href: "/student/cafe",
    icon: Coffee,
    accent: "yellow",
  },
  {
    name: "Roommate Finder",
    description:
      "Find compatible roommates based on your lifestyle and preferences.",
    price: "Find Now",
    badge: "Trending",
    image: "/images/roommate.jpg",
    href: "/student/roomate",
    icon: Users,
    accent: "pink",
  },
];

const accentStyles = {
  orange: {
    icon: "bg-orange-500",
    text: "text-orange-500",
    border: "border-orange-200",
    button: "bg-orange-500",
  },
  blue: {
    icon: "bg-blue-500",
    text: "text-blue-500",
    border: "border-blue-200",
    button: "bg-blue-500",
  },
  purple: {
    icon: "bg-purple-600",
    text: "text-purple-600",
    border: "border-purple-200",
    button: "bg-purple-600",
  },
  green: {
    icon: "bg-emerald-500",
    text: "text-emerald-600",
    border: "border-emerald-200",
    button: "bg-emerald-500",
  },
  yellow: {
    icon: "bg-amber-500",
    text: "text-amber-500",
    border: "border-amber-200",
    button: "bg-amber-500",
  },
  pink: {
    icon: "bg-pink-500",
    text: "text-pink-500",
    border: "border-pink-200",
    button: "bg-pink-500",
  },
};

export default function StudentServicesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-[#14244a]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-2xl shadow-lg">
              🎓
            </div>

            <div>
              <div className="text-xl font-black tracking-tight">
                Studentica<span className="text-purple-600">.</span>
              </div>

              <div className="text-xs font-medium text-slate-500">
                Campus Concierge
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="font-medium text-slate-600 transition hover:text-purple-600"
            >
              Home
            </Link>

            <Link
              href="/student/services"
              className="border-b-2 border-purple-600 pb-2 font-bold text-purple-600"
            >
              Services
            </Link>

            <Link
              href="/pass"
              className="font-medium text-slate-600 transition hover:text-purple-600"
            >
              Fresher Pass
            </Link>

            <Link
              href="/student/roomate"
              className="font-medium text-slate-600 transition hover:text-purple-600"
            >
              Roommate Finder
            </Link>

            <Link
              href="/about"
              className="font-medium text-slate-600 transition hover:text-purple-600"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-xl border border-purple-300 px-5 py-2.5 text-sm font-bold text-purple-700 sm:block"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-12 lg:px-10 lg:pt-16">

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700">
              ✨ CAMPUS SERVICES
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Everything you need,
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                all in one place.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
              Trusted messes, laundry, room cleaning, PGs, cafés and
              roommates — all from one simple student platform.
            </p>

            {/* SEARCH */}
            <div className="mt-8 flex max-w-2xl items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-purple-100">
              <Search
                size={21}
                className="ml-4 shrink-0 text-slate-400"
              />

              <input
                type="text"
                placeholder="What do you need around campus?"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                type="button"
                className="shrink-0 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white"
              >
                Explore
              </button>
            </div>

            {/* SMALL BENEFITS */}
            <div className="mt-7 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-100 p-2 text-emerald-600">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Verified Services
                    </p>

                    <p className="text-xs text-slate-400">
                      Trusted & safe
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Near Campus
                    </p>

                    <p className="text-xs text-slate-400">
                      Convenient & quick
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="rounded-xl bg-purple-100 p-2 text-purple-600">
                  <Users size={20} />
                </div>

                <p className="mt-2 text-sm font-bold">
                  Student Rated
                </p>

                <p className="text-xs text-slate-400">
                  Real experiences
                </p>
              </div>

            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative hidden lg:block">
            <div className="overflow-hidden rounded-[34px] border-8 border-white bg-purple-100 shadow-2xl">
              <img
                src="/images/student-dashboard.jpg"
                alt="Campus students"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white bg-white p-5 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-600">
                Campus Concierge
              </p>

              <p className="mt-1 font-black text-[#14244a]">
                What do you need today?
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Food • Laundry • Housing • More
              </p>
            </div>

            <div className="absolute -right-4 -top-5 rounded-2xl bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-xl">
              Better Services ✨
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-10">

        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-600">
              Explore Services
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Your campus, simplified.
            </h2>

            <p className="mt-2 text-slate-500">
              Verified services • Student-rated • Campus focused
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {
            const Icon = category.icon;
            const styles = accentStyles[category.accent];

            return (
              <Link
                key={category.name}
                href={category.href}
                className={`group overflow-hidden rounded-[24px] border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${styles.border}`}
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
                  <div
                    className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-lg ${styles.icon}`}
                  >
                    {category.badge}
                  </div>

                  {/* ICON */}
                  <div
                    className={`absolute bottom-[-22px] left-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-xl ${styles.icon}`}
                  >
                    <Icon size={27} />
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="p-6 pt-9">

                  <h3 className="text-xl font-black text-[#14244a]">
                    {category.name}
                  </h3>

                  <p className="mt-2 min-h-[52px] text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">

                    <div>
                      <p className="text-xs text-slate-400">
                        Starting from
                      </p>

                      <p className={`mt-1 text-lg font-black ${styles.text}`}>
                        {category.price}
                      </p>
                    </div>

                    <span
                      className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white ${styles.button}`}
                    >
                      Explore
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>

                  </div>
                </div>
              </Link>
            );
          })}

        </div>

        {/* BOTTOM STATS */}
        <div className="mt-8 grid overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-r from-purple-50 to-indigo-50 md:grid-cols-4">

          <div className="flex items-center justify-center gap-3 border-b border-purple-100 p-6 md:border-b-0 md:border-r">
            <div className="rounded-2xl bg-purple-600 p-3 text-white">
              <Users size={22} />
            </div>

            <div>
              <p className="text-xl font-black">5+</p>
              <p className="text-xs text-slate-500">
                Campus Services
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 border-b border-purple-100 p-6 md:border-b-0 md:border-r">
            <div className="rounded-2xl bg-purple-600 p-3 text-white">
              <CalendarDays size={22} />
            </div>

            <div>
              <p className="text-xl font-black">24/7</p>
              <p className="text-xs text-slate-500">
                Service Availability
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 border-b border-purple-100 p-6 md:border-b-0 md:border-r">
            <div className="rounded-2xl bg-purple-600 p-3 text-white">
              <Wallet size={22} />
            </div>

            <div>
              <p className="text-xl font-black">₹199</p>
              <p className="text-xs text-slate-500">
                Fresher Pass Starts
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-6">
            <div className="rounded-2xl bg-purple-600 p-3 text-white">
              <Headphones size={22} />
            </div>

            <div>
              <p className="text-xl font-black">100%</p>
              <p className="text-xs text-slate-500">
                Student Focused
              </p>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}