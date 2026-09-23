"use client";

import Link from "next/link";
import {
  ArrowRight,
  Utensils,
  Shirt,
  Sparkles,
  Home,
  Coffee,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Mess & Food",
    description: "Discover nearby messes, restaurants and everyday food options.",
    image: "/images/mess.jpg",
    icon: Utensils,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Laundry",
    description: "Find reliable laundry and dry-cleaning services around campus.",
    image: "/images/laundry.jpg",
    icon: Shirt,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Cleaning",
    description: "Book trusted housekeeping and room-cleaning services.",
    image: "/images/cleaning.jpg",
    icon: Sparkles,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Hostels & PGs",
    description: "Explore student-friendly stays near your college.",
    image: "/images/hostel.jpg",
    icon: Home,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Cafes",
    description: "Find cafes for quick meals, coffee, study sessions and hangouts.",
    image: "/images/cafe.jpg",
    icon: Coffee,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Roommates",
    description: "Find students with compatible habits, preferences and lifestyles.",
    image: "/images/roommate.jpg",
    icon: Users,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export default function ServicePreview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* SECTION HEADER */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex rounded-full bg-purple-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-purple-700">
              Everything in one place
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#14244a] sm:text-5xl">
              Services that make
              <span className="text-purple-600"> campus life easier.</span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
              From your daily meals to finding a roommate, get the services
              you need without jumping between different platforms.
            </p>
          </div>

          <Link
            href="/student/services"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-purple-200 px-5 py-3 text-sm font-bold text-purple-700 transition hover:bg-purple-50"
          >
            View all services
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* SERVICE GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href="/student/services"
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* ICON */}
                  <div
                    className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl ${service.iconBg} ${service.iconColor} shadow-lg`}
                  >
                    <Icon size={21} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black text-[#14244a]">
                      {service.title}
                    </h3>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition group-hover:bg-purple-600 group-hover:text-white">
                      <ArrowRight size={17} />
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-5 text-sm font-bold text-purple-600">
                    Explore service →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}