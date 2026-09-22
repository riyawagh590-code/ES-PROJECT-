"use client";

import Link from "next/link";
import {
  Home,
  Grid2X2,
  CalendarDays,
  Bell,
  UserRound,
  Search,
  ChevronDown,
  ChevronRight,
  Utensils,
  Shirt,
  Sparkles,
  House,
  Coffee,
  UsersRound,
  WalletCards,
  Headphones,
  MapPin,
  ShieldCheck,
  Zap,
  Star,
  ArrowRight,
  Clock3,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   SERVICE DATA
========================================================= */

const services = [
  {
    title: "Mess & Meals",
    description: "Hygienic & tasty meals, verified mess providers, monthly plans.",
    price: "₹1200",
    unit: "/month",
    button: "Book Now",
    badge: "Popular",
    color: "orange",
    image: "/images/mess.jpg",
    icon: Utensils,
    href: "/student/mess",
  },
  {
    title: "Laundry",
    description: "Clean clothes, fresh you. Pickup & delivery available.",
    price: "₹80",
    unit: "/bag",
    button: "Book Now",
    badge: "Convenient",
    color: "blue",
    image: "/images/laundry.jpg",
    icon: Shirt,
    href: "/student/laundry",
  },
  {
    title: "Room Cleaning",
    description: "Keep your space fresh & clean with our professional team.",
    price: "₹200",
    unit: "/visit",
    button: "Book Now",
    badge: "Hassle Free",
    color: "purple",
    image: "/images/cleaning.jpg",
    icon: Sparkles,
    href: "/student/cleaning",
  },
  {
    title: "PG & Housing",
    description: "Verified PGs, hostels and rental rooms near your campus.",
    price: "₹4500",
    unit: "/month",
    button: "Explore",
    badge: "Verified",
    color: "green",
    image: "/images/hostel.jpg",
    icon: House,
    href: "/student/pg",
  },
  {
    title: "Café Perks",
    description: "Student discounts at your favourite cafes and restaurants.",
    price: "60%",
    unit: "Off",
    button: "Explore",
    badge: "Special Offers",
    color: "yellow",
    image: "/images/cafe.jpg",
    icon: Coffee,
    href: "/student/cafe",
  },
  {
    title: "Roommate Finder",
    description: "Find compatible roommates based on your own lifestyle.",
    price: "",
    unit: "",
    button: "Find Now",
    badge: "Trending",
    color: "pink",
    image: "/images/roommate.jpg",
    icon: UsersRound,
    href: "/student/roomate",
  },
];

/* =========================================================
   COLOR HELPERS
========================================================= */

const colorStyles = {
  orange: {
    border: "border-orange-200",
    iconBg: "bg-orange-500",
    button: "bg-orange-500 hover:bg-orange-600",
    badge: "bg-fuchsia-500",
    price: "text-orange-500",
    ring: "ring-orange-200",
  },

  blue: {
    border: "border-blue-200",
    iconBg: "bg-blue-500",
    button: "bg-blue-500 hover:bg-blue-600",
    badge: "bg-sky-500",
    price: "text-blue-600",
    ring: "ring-blue-200",
  },

  purple: {
    border: "border-violet-200",
    iconBg: "bg-violet-600",
    button: "bg-violet-600 hover:bg-violet-700",
    badge: "bg-violet-600",
    price: "text-violet-700",
    ring: "ring-violet-200",
  },

  green: {
    border: "border-emerald-200",
    iconBg: "bg-emerald-500",
    button: "bg-emerald-500 hover:bg-emerald-600",
    badge: "bg-emerald-500",
    price: "text-emerald-600",
    ring: "ring-emerald-200",
  },

  yellow: {
    border: "border-amber-200",
    iconBg: "bg-amber-500",
    button: "bg-amber-500 hover:bg-amber-600",
    badge: "bg-amber-500",
    price: "text-amber-500",
    ring: "ring-amber-200",
  },

  pink: {
    border: "border-pink-200",
    iconBg: "bg-pink-500",
    button: "bg-pink-500 hover:bg-pink-600",
    badge: "bg-pink-500",
    price: "text-pink-600",
    ring: "ring-pink-200",
  },
};

/* =========================================================
   SIDEBAR ITEM
========================================================= */

function SidebarItem({ icon: Icon, label, active, href }) {
  return (
    <Link
      href={href}
      className={[
        "group flex items-center gap-4 rounded-xl px-5 py-3.5 text-sm font-medium transition-all",
        active
          ? "bg-violet-100 text-violet-700"
          : "text-slate-600 hover:bg-violet-50 hover:text-violet-700",
      ].join(" ")}
    >
      <Icon
        size={20}
        strokeWidth={1.8}
        className={active ? "text-violet-700" : "text-slate-500"}
      />

      <span>{label}</span>
    </Link>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ service }) {
  const Icon = service.icon;
  const colors = colorStyles[service.color];

  return (
    <div
      className={[
        "group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        colors.border,
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative h-[125px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Badge */}
        <div
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-sm ${colors.badge}`}
        >
          {service.badge}
        </div>

        {/* Icon */}
        <div
          className={`absolute -bottom-5 left-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white text-white shadow-md ${colors.iconBg}`}
        >
          <Icon size={22} strokeWidth={2} />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-7">
        <h3 className="text-[17px] font-bold text-slate-900">
          {service.title}
        </h3>

        <p className="mt-1 min-h-[40px] text-xs leading-5 text-slate-500">
          {service.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            {service.price ? (
              <>
                <p className="text-[10px] font-medium text-slate-400">
                  {service.color === "yellow" ? "Up to" : "From"}
                </p>

                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-xl font-extrabold ${colors.price}`}
                  >
                    {service.price}
                  </span>

                  <span className="text-xs font-medium text-slate-500">
                    {service.unit}
                  </span>
                </div>
              </>
            ) : (
              <div className="h-[34px]" />
            )}
          </div>

          <Link
            href={service.href}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold text-white transition-all ${colors.button}`}
          >
            {service.button}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STUDENT DASHBOARD
========================================================= */

export default function StudentDashboard() {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* =====================================================
          TOP NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 h-[72px] border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="flex h-full items-center justify-between px-5 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 shadow-md shadow-violet-200">
              <svg
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7L12 3L21 7L12 11L3 7Z"
                  fill="white"
                />
                <path
                  d="M6 9.5V15C6 15 8.5 18 12 18C15.5 18 18 15 18 15V9.5L12 12L6 9.5Z"
                  fill="white"
                  opacity=".95"
                />
                <path
                  d="M21 8V13"
                  stroke="white"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="leading-none">
              <div className="text-[22px] font-extrabold tracking-tight text-slate-900">
                Studentica<span className="text-violet-600">.</span>
              </div>

              <div className="mt-1 text-[11px] font-medium text-slate-500">
                Campus Hub
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 lg:flex">
            <Link
              href="/student"
              className="flex items-center gap-2 rounded-xl bg-violet-100 px-5 py-3 text-sm font-semibold text-violet-700"
            >
              <Home size={17} />
              Home
            </Link>

            <Link
              href="/student/services"
              className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              <Grid2X2 size={17} />
              Services
            </Link>

            <Link
              href="/bookings"
              className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              <CalendarDays size={17} />
              My Bookings
            </Link>

            <button className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
              <Bell size={17} />
              Notices
            </button>

            <Link
              href="/student/profile"
              className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              <UserRound size={17} />
              Profile
            </Link>
          </nav>

          {/* Right Side */}
          <div className="hidden items-center gap-5 lg:flex">
            {/* Search */}
            <div className="flex h-11 w-[225px] items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4">
              <Search size={17} className="text-slate-500" />

              <input
                type="text"
                placeholder="Search services, amenities..."
                className="w-full bg-transparent text-xs text-slate-700 placeholder:text-slate-400"
              />
            </div>

            {/* Notification */}
            <button className="relative text-slate-600">
              <Bell size={21} />

              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-500 px-1 text-[10px] font-bold text-white">
                3
              </span>
            </button>

            {/* User */}
            <button className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow">
                <img
                  src="/images/student-profile.jpg"
                  alt="Student"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">
                  Hi, Riya!
                </p>

                <p className="text-[10px] text-slate-500">Student</p>
              </div>

              <ChevronDown size={15} className="text-slate-500" />
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileSidebar(true)}
            className="rounded-xl p-2 text-slate-700 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE SIDEBAR
      ===================================================== */}

      {mobileSidebar && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            onClick={() => setMobileSidebar(false)}
            className="absolute inset-0 bg-slate-900/40"
            aria-label="Close menu"
          />

          <aside className="relative h-full w-[280px] bg-white p-5 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xl font-extrabold text-slate-900">
                  Studentica<span className="text-violet-600">.</span>
                </p>

                <p className="text-xs text-slate-500">
                  Campus Hub
                </p>
              </div>

              <button
                onClick={() => setMobileSidebar(false)}
                className="rounded-lg bg-slate-100 p-2"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-2">
              <SidebarItem
                icon={Home}
                label="Dashboard"
                active
                href="/student"
              />

              <SidebarItem
                icon={CalendarDays}
                label="My Bookings"
                href="/bookings"
              />

              <SidebarItem
                icon={WalletCards}
                label="Wallet"
                href="/student/profile"
              />

              <SidebarItem
                icon={Headphones}
                label="Support"
                href="#support"
              />

              <SidebarItem
                icon={UserRound}
                label="Profile"
                href="/student/profile"
              />
            </div>
          </aside>
        </div>
      )}

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="mx-auto flex max-w-[1600px]">
        {/* ===================================================
            LEFT SIDEBAR
        =================================================== */}

        <aside className="hidden w-[200px] shrink-0 border-r border-slate-100 bg-white px-5 py-7 lg:block">
          <div className="sticky top-[95px]">
            <div className="space-y-2">
              <SidebarItem
                icon={Home}
                label="Dashboard"
                active
                href="/student"
              />

              <SidebarItem
                icon={CalendarDays}
                label="My Bookings"
                href="/bookings"
              />

              <SidebarItem
                icon={WalletCards}
                label="Wallet"
                href="/student/profile"
              />

              <SidebarItem
                icon={Headphones}
                label="Support"
                href="#support"
              />

              <SidebarItem
                icon={UserRound}
                label="Settings"
                href="/student/profile"
              />
            </div>

            {/* Decorative note */}
            <div className="mt-[380px] px-3">
              <p className="rotate-[-5deg] text-sm font-semibold leading-6 text-violet-700">
                Happy
                <br />
                Campus Life
                <br />
                Starts Here!
              </p>

              <div className="mt-3 h-1 w-16 rotate-[-4deg] rounded-full bg-violet-300" />
            </div>
          </div>
        </aside>

        {/* ===================================================
            PAGE CONTENT
        =================================================== */}

        <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-5 xl:px-6">
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* =================================================
                CENTER
            ================================================= */}

            <div className="min-w-0">
              {/* HERO */}
              <section className="relative min-h-[280px] overflow-hidden rounded-2xl">
                <img
                  src="/images/student-dashboard.jpg"
                  alt="Student campus"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b3b72]/90 via-[#1763a1]/55 to-transparent" />

                <div className="relative z-10 flex min-h-[280px] max-w-[630px] flex-col justify-center px-7 py-8 text-white sm:px-9">
                  <div className="mb-4 inline-flex w-fit items-center rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-blue-700">
                    Welcome Back, Riya! 👋
                  </div>

                  <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-[42px]">
                    Your Campus Life,
                    <br />
                    <span className="text-violet-300">
                      Our Priority!
                    </span>
                  </h1>

                  <p className="mt-3 max-w-[510px] text-sm font-medium leading-5 text-white/90">
                    Explore and access all essential services designed
                    to make your campus experience easier, safer and
                    better.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/90">
                        <ShieldCheck size={17} />
                      </span>

                      <span className="text-xs font-semibold">
                        Trusted Services
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-400/90">
                        <Zap size={17} />
                      </span>

                      <span className="text-xs font-semibold">
                        Quick Access
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/90">
                        <UsersRound size={17} />
                      </span>

                      <span className="text-xs font-semibold">
                        Student Focused
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* SERVICES HEADER */}
              <section className="mt-6">
                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <UsersRound
                        size={23}
                        className="text-violet-600"
                      />

                      <h2 className="text-2xl font-extrabold text-[#12356b]">
                        Our Services
                      </h2>
                    </div>

                    <p className="ml-9 mt-1 text-xs text-slate-500">
                      Everything you need, all in one place.
                    </p>
                  </div>

                  <Link
                    href="/student/services"
                    className="hidden items-center gap-2 rounded-full border border-violet-200 px-5 py-2.5 text-xs font-semibold text-violet-600 transition hover:bg-violet-50 sm:flex"
                  >
                    View All Services
                    <ArrowRight size={15} />
                  </Link>
                </div>

                {/* SERVICE GRID */}
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.title}
                      service={service}
                    />
                  ))}
                </div>
              </section>

              {/* BOTTOM STATS */}
              <section className="mt-5 overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-white">
                <div className="grid grid-cols-3 divide-x divide-violet-100">
                  <div className="flex items-center gap-3 px-4 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white">
                      <UsersRound size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold text-slate-900">
                        5+
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Campus Services
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-4 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                      <Clock3 size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold text-slate-900">
                        24/7
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Service Availability
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-4 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                      <ShieldCheck size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold text-slate-900">
                        100%
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Student Verified
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* =================================================
                RIGHT SIDEBAR
            ================================================= */}

            <aside className="space-y-5">
              {/* GREETING CARD */}
              <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#477ff1] via-[#7053ee] to-[#b65cf1] p-5 text-white shadow-sm">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10" />

                <div className="relative z-10">
                  <h2 className="text-lg font-extrabold">
                    Good Morning, Riya! ☀️
                  </h2>

                  <p className="mt-1 text-xs text-white/85">
                    Keep going, you're doing great!
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white p-4 text-slate-900">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <CalendarDays size={18} />
                      </div>

                      <p className="mt-3 text-lg font-extrabold">
                        2
                      </p>

                      <p className="text-[10px] text-slate-500">
                        Upcoming Bookings
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-4 text-slate-900">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
                        <Star size={18} />
                      </div>

                      <p className="mt-3 text-lg font-extrabold">
                        ₹450
                      </p>

                      <p className="text-[10px] text-slate-500">
                        Wallet Balance
                      </p>
                    </div>
                  </div>

                  <button className="mt-4 flex w-full items-center justify-between rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-left backdrop-blur transition hover:bg-white/20">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                        <Headphones size={18} />
                      </span>

                      <div>
                        <p className="text-xs font-bold">
                          Need help?
                        </p>

                        <p className="mt-1 text-[10px] text-white/75">
                          Our support team is always here for you.
                        </p>
                      </div>
                    </div>

                    <ChevronRight size={18} />
                  </button>
                </div>
              </section>

              {/* QUICK LINKS */}
              <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-extrabold text-[#12356b]">
                  Quick Links
                </h2>

                <div className="mt-3 divide-y divide-slate-100">
                  <button className="flex w-full items-center gap-4 py-4 text-left">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                      <Zap size={20} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <strong className="block text-xs font-bold text-slate-900">
                        Book a Service
                      </strong>

                      <small className="mt-1 block text-[10px] text-slate-500">
                        Mess, Laundry, Cleaning & more
                      </small>
                    </span>

                    <ChevronRight
                      size={17}
                      className="text-slate-400"
                    />
                  </button>

                  <button className="flex w-full items-center gap-4 py-4 text-left">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                      <MapPin size={20} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <strong className="block text-xs font-bold text-slate-900">
                        Campus Map
                      </strong>

                      <small className="mt-1 block text-[10px] text-slate-500">
                        Find services near you
                      </small>
                    </span>

                    <ChevronRight
                      size={17}
                      className="text-slate-400"
                    />
                  </button>

                  <button className="flex w-full items-center gap-4 py-4 text-left">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                      <Headphones size={20} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <strong className="block text-xs font-bold text-slate-900">
                        Help & Support
                      </strong>

                      <small className="mt-1 block text-[10px] text-slate-500">
                        Get assistance, 24/7
                      </small>
                    </span>

                    <ChevronRight
                      size={17}
                      className="text-slate-400"
                    />
                  </button>
                </div>
              </section>

              {/* PROMO CARD */}
              <section className="relative overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm">
                <div className="relative h-[145px] overflow-hidden">
                  <img
                    src="/images/campus-building.jpg"
                    alt="Campus"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                  <div className="absolute right-4 top-4 rotate-[-4deg] text-xs font-semibold text-violet-700">
                    Small Steps
                    <br />
                    Big Dreams →
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <h3 className="text-sm font-extrabold text-[#12356b]">
                    Make the most of your campus life!
                  </h3>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Explore. Book. Enjoy.
                  </p>

                  <button className="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                    <ArrowRight size={15} />
                  </button>
                </div>
              </section>

              {/* SUPPORT */}
              <section
                id="support"
                className="rounded-2xl border border-violet-100 bg-gradient-to-br from-white to-violet-50 p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-violet-100 text-2xl">
                    👩‍💻
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-violet-700">
                      Need Help?
                    </h3>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Our support team is just a click away.
                    </p>
                  </div>
                </div>

                <button className="mt-4 rounded-xl bg-violet-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700">
                  Contact Support →
                </button>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}