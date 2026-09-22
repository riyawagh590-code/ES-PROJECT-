// filepath: c:\Users\Riya Wagh\OneDrive\Desktop\ES_prj_SY\src\app\pass\page.jsx
"use client";

import Link from "next/link";
import { Check, Crown, Gem, Leaf, Star, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter Pass",
    price: 99,
    icon: Leaf,
    description: "Perfect for first-time campus explorers.",
    features: ["Mess & Food Discounts", "Laundry Offers", "Cafe Deals", "Campus Events Access"],
    color: "blue",
  },
  {
    name: "Campus Pass",
    price: 199,
    icon: Star,
    description: "The complete campus experience.",
    features: ["All Starter Benefits", "PG & Hostel Discounts", "Roommate Finder Access", "Exclusive Campus Perks", "Priority Support"],
    popular: true,
    color: "purple",
  },
  {
    name: "Pro Pass",
    price: 299,
    icon: Crown,
    description: "For those who want more.",
    features: ["All Campus Benefits", "Unlimited Laundry", "Special Cafe & Restaurant Deals", "Weekend & Event Access", "Exclusive Offers"],
    color: "green",
  },
  {
    name: "Elite Pass",
    price: 499,
    icon: Gem,
    description: "The ultimate student lifestyle.",
    features: ["All Pro Benefits", "Free Room Cleaning", "Premium Cafe Offers", "Exclusive Events", "VIP Support"],
    color: "pink",
  },
];

const colors = {
  blue: "border-blue-200 bg-blue-50/40 text-blue-700",
  purple: "border-purple-500 bg-purple-50/60 text-purple-700",
  green: "border-emerald-200 bg-emerald-50/50 text-emerald-700",
  pink: "border-pink-200 bg-pink-50/50 text-pink-700",
};

export default function PassPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fffaff] via-[#f5f3ff] to-[#fff8ef]">
      <header className="border-b border-white/70 bg-white/80 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 p-2 text-xl">🎓</div>
            <div>
              <div className="text-xl font-black text-[#14244a]">Studentica<span className="text-purple-600">.</span></div>
              <div className="text-xs text-slate-500">Campus Concierge</div>
            </div>
          </Link>
          <nav className="hidden gap-8 text-sm font-semibold text-slate-600 md:flex">
            <Link href="/">Home</Link>
            <Link href="/student/services">Services</Link>
            <Link className="border-b-2 border-purple-600 pb-5 text-purple-600" href="/pass">Fresher Pass</Link>
            <Link href="/student/roomate">Roommate Finder</Link>
            <Link href="/about">About</Link>
          </nav>
          <div className="flex gap-3">
            <Link href="/login" className="rounded-xl border border-purple-300 px-5 py-2 text-sm font-bold text-purple-700">Login</Link>
            <Link href="/register" className="rounded-xl bg-purple-600 px-5 py-2 text-sm font-bold text-white">Get Started</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-14">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700">👑 FRESHER PASS</span>
            <h1 className="mt-5 text-5xl font-black leading-tight text-[#14244a] md:text-7xl">
              One Pass.
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Endless Benefits.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-500">
              Choose a Fresher Pass that fits your needs and unlock exclusive discounts, perks and services across campus.
            </p>
          </div>
          <div className="hidden h-64 rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center shadow-xl lg:block" />
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article key={plan.name} className={`relative rounded-2xl border-2 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl ${colors[plan.color]}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-4 py-2 text-xs font-bold text-white">
                    👑 MOST POPULAR
                  </div>
                )}

                <div className="mb-5 inline-flex rounded-2xl bg-white p-3 shadow-sm">
                  <Icon size={28} />
                </div>
                <h2 className="text-2xl font-black text-[#14244a]">{plan.name}</h2>
                <p className="mt-2 min-h-12 text-sm text-slate-500">{plan.description}</p>

                <div className="my-5 text-4xl font-black text-[#14244a]">
                  ₹{plan.price}
                  <span className="text-sm font-normal text-slate-500"> /month</span>
                </div>

                <ul className="space-y-3 text-sm text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check size={18} className="shrink-0 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl border-2 bg-white py-3 font-bold ${plan.popular ? "border-purple-600 bg-purple-600 text-white" : "border-current"}`}>
                  Choose {plan.name} <ArrowRight size={17} />
                </button>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl bg-purple-100/80 p-7 text-center">
          <h3 className="text-2xl font-black text-purple-800">Why choose Fresher Pass?</h3>
          <div className="mt-5 grid gap-5 text-sm text-slate-600 md:grid-cols-4">
            <div>💰<br /><b>Save Money</b><br />Exclusive discounts</div>
            <div>⚡<br /><b>Save Time</b><br />Quick and easy access</div>
            <div>🛡️<br /><b>Trusted Partners</b><br />Verified services</div>
            <div>💜<br /><b>Better Campus Life</b><br />More convenience</div>
          </div>
        </div>
      </section>
    </main>
  );
}