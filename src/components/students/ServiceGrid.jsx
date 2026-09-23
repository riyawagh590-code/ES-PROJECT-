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
} from "lucide-react";

const services = [
  {
    title: "Mess & Food",
    description: "Find messes, restaurants and food options near campus.",
    image: "/images/mess.jpg",
    icon: Utensils,
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Laundry",
    description: "Book laundry and dry-cleaning services easily.",
    image: "/images/laundry.jpg",
    icon: Shirt,
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Cleaning",
    description: "Get reliable housekeeping and room-cleaning help.",
    image: "/images/cleaning.jpg",
    icon: Sparkles,
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Hostels & PGs",
    description: "Explore student-friendly hostels and PGs.",
    image: "/images/hostel.jpg",
    icon: Home,
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Cafes & Restaurants",
    description: "Discover cafes and places to eat around campus.",
    image: "/images/cafe.jpg",
    icon: Coffee,
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Roommate Finder",
    description: "Find roommates with compatible preferences.",
    image: "/images/roommate.jpg",
    icon: Users,
    bg: "bg-pink-50",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <Link
            key={service.title}
            href="/student/services"
            className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
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
            <div className={`p-6 ${service.bg}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black text-[#14244a]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-slate-400 shadow-sm transition group-hover:bg-purple-600 group-hover:text-white">
                  <ArrowRight size={17} />
                </div>
              </div>

              <div className="mt-5 text-sm font-bold text-purple-600">
                Explore →
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}