// filepath: c:\Users\Riya Wagh\OneDrive\Desktop\ES_prj_SY\src\app\student\services\page.jsx
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
  CheckCircle2,
} from "lucide-react";

const categories = [
  {
    name: "Mess & Meals",
    href: "/student/mess",
    icon: Utensils,
    description: "Hygienic & tasty meals from verified mess providers.",
    price: "₹1200/month",
    badge: "Popular",
    color: "#ff7518",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Laundry",
    href: "/student/laundry",
    icon: Shirt,
    description: "Clean clothes with convenient pickup and delivery.",
    price: "₹80/bag",
    badge: "Convenient",
    color: "#168cff",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Room Cleaning",
    href: "/student/cleaning",
    icon: Sparkles,
    description: "Keep your space fresh with professional cleaning.",
    price: "₹200/visit",
    badge: "Hassle Free",
    color: "#8b45ed",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "PG & Housing",
    href: "/student/pg",
    icon: Home,
    description: "Verified PGs, hostels and rental rooms near campus.",
    price: "₹4500/month",
    badge: "Verified",
    color: "#10b981",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Café Perks",
    href: "/student/cafe",
    icon: Coffee,
    description: "Student discounts at your favourite cafés.",
    price: "60% Off",
    badge: "Special Offers",
    color: "#f59e0b",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Roommate Finder",
    href: "/student/roomate",
    icon: Users,
    description: "Find compatible roommates based on your lifestyle.",
    price: "Find Now",
    badge: "Trending",
    color: "#ec4899",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-white/70 bg-white/80 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 p-2 text-xl">
              🎓
            </div>
            <div>
              <div className="text-xl font-black text-[#14244a]">
                Studentica<span className="text-purple-600">.</span>
              </div>
              <div className="text-xs text-slate-500">Campus Concierge</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <Link href="/">Home</Link>
            <Link className="border-b-2 border-purple-600 pb-5 text-purple-600" href="/student/services">
              Services
            </Link>
            <Link href="/pass">Fresher Pass</Link>
            <Link href="/student/roomate">Roommate Finder</Link>
            <Link href="/about">About</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Search size={19} className="text-slate-600" />
            <Link href="/login" className="rounded-xl border border-purple-300 px-5 py-2 text-sm font-bold text-purple-700">
              Login
            </Link>
            <Link href="/register" className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 text-sm font-bold text-white shadow-lg">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700">
              ✨ CAMPUS SERVICES
            </span>
            <h1 className="mt-6 text-5xl font-black leading-tight text-[#14244a] md:text-7xl">
              Everything you need,
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                all in one place.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-500">
              Trusted messes, laundry, room cleaning, PGs, cafés and
              roommates — all from one simple student platform.
            </p>

            <div className="mt-8 flex max-w-xl items-center rounded-2xl bg-white p-2 shadow-xl">
              <Search className="mx-4 text-slate-400" size={20} />
              <span className="flex-1 text-sm text-slate-400">
                What do you need around campus?
              </span>
              <button className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 font-bold text-white">
                Explore →
              </button>
            </div>
          </div>

          <div className="relative hidden h-80 overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-300 to-indigo-500 shadow-2xl lg:block">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-90" />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur">
              <p className="font-black text-[#14244a]">Campus Concierge</p>
              <p className="text-sm text-slate-500">Everything you need today ✨</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-purple-600">
              Explore Services
            </p>
            <h2 className="mt-2 text-3xl font-black text-[#14244a]">
              Your campus, simplified.
            </h2>
          </div>
          <span className="hidden text-sm text-slate-500 md:block">
            Verified services • Student-rated • Near your campus
          </span>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                href={category.href}
                key={category.name}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className="relative h- forty h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span
                    className="absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.badge}
                  </span>
                  <div
                    className="absolute bottom-[-22px] left-5 rounded-2xl p-3 text-white shadow-lg"
                    style={{ backgroundColor: category.color }}
                  >
                    <Icon size={25} />
                  </div>
                </div>

                <div className="p-5 pt-8">
                  <h3 className="text-xl font-black text-[#14244a]">
                    {category.name}
                  </h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <strong style={{ color: category.color }}>{category.price}</strong>
                    <span className="flex items-center gap-1 text-sm font-bold text-slate-700">
                      Explore <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-purple-100/70 p-6 text-center md:grid-cols-4">
          <div><b className="text-2xl text-purple-700">5+</b><p className="text-xs text-slate-500">Campus Services</p></div>
          <div><b className="text-2xl text-purple-700">24/7</b><p className="text-xs text-slate-500">Service Availability</p></div>
          <div><b className="text-2xl text-purple-700">₹199</b><p className="text-xs text-slate-500">Fresher Pass Starts</p></div>
          <div><b className="text-2xl text-purple-700">100%</b><p className="text-xs text-slate-500">Student Focused</p></div>
        </div>
      </section>
    </main>
  );
}