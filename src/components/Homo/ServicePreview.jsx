"use client";

import Link from "next/link";
import {
  UtensilsCrossed,
  Shirt,
  Sparkles,
  Home,
  Coffee,
  UserCheck,
  GraduationCap,
  Clock,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Mess",
    desc: "Hygienic & affordable meal plans",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop",
    icon: UtensilsCrossed,
    color: "bg-orange-500 text-white",
    href: "/student/mess",
  },
  {
    title: "Laundry",
    desc: "Clean clothes, less stress",
    img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&auto=format&fit=crop",
    icon: Shirt,
    color: "bg-sky-500 text-white",
    href: "/student/laundry",
  },
  {
    title: "Cleaning",
    desc: "A cleaner space, a better you",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop",
    icon: Sparkles,
    color: "bg-emerald-500 text-white",
    href: "/student/cleaning",
  },
  {
    title: "PGs & Hostels",
    desc: "Safe & verified stays",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop",
    icon: Home,
    color: "bg-purple-600 text-white",
    href: "/student/pg",
  },
  {
    title: "Cafes & Restaurants",
    desc: "Great food, close by",
    img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop",
    icon: Coffee,
    color: "bg-amber-500 text-white",
    href: "/student/cafes",
  },
  {
    title: "Roommate Finder",
    desc: "Find your perfect match",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop",
    icon: UserCheck,
    color: "bg-indigo-600 text-white",
    href: "/student/roommates",
  },
];

export default function ServicePreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-xs font-extrabold uppercase text-purple-600 tracking-wider">
          Explore Services
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-950 mt-1">
          Everything you need, <br />
          all in one place.
        </h2>
        <p className="text-slate-500 text-sm mt-2">
          From food to friends, we&apos;ve got your campus life covered.
        </p>
      </div>

      {/* 6 Services Grid Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              className="group bg-white rounded-3xl p-3 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-9 h-9 rounded-xl ${item.color} flex items-center justify-center shadow-md`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-extrabold text-slate-900 text-sm mt-1">
                {item.title}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight mb-2">
                {item.desc}
              </p>
            </Link>
          );
        })}
      </div>

      {/* 4 Bottom Metric Stats */}
      <div className="mt-12 bg-purple-50/70 border border-purple-100 rounded-3xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-purple-200/60">
        <div className="flex items-center gap-4 justify-center">
          <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-black text-slate-900">5+</h4>
            <p className="text-xs font-semibold text-slate-500">Campus Services</p>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center pt-4 md:pt-0">
          <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-black text-slate-900">24/7</h4>
            <p className="text-xs font-semibold text-slate-500">Digital Access</p>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center pt-4 md:pt-0">
          <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center">
            <IndianRupee className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-black text-slate-900">₹199</h4>
            <p className="text-xs font-semibold text-slate-500">Fresher Pass Starts</p>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center pt-4 md:pt-0">
          <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-black text-slate-900">100%</h4>
            <p className="text-xs font-semibold text-slate-500">Student Focused</p>
          </div>
        </div>
      </div>
    </section>
  );
}