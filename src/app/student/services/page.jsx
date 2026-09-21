"use client";

import Link from "next/link";
import {
  Utensils,
  Shirt,
  Sparkles,
  Home,
  Coffee,
  Users,
  ArrowLeft,
} from "lucide-react";

const categories = [
  {
    name: "Mess & Meals",
    href: "/student/mess",
    icon: Utensils,
    description: "Verified monthly meal subscriptions",
    color: "bg-orange-500",
  },
  {
    name: "Laundry",
    href: "/student/laundry",
    icon: Shirt,
    description: "Hostel gate pickup & delivery",
    color: "bg-blue-500",
  },
  {
    name: "Room Cleaning",
    href: "/student/cleaning",
    icon: Sparkles,
    description: "Weekend micro-cleaning",
    color: "bg-purple-500",
  },
  {
    name: "PG & Housing",
    href: "/student/pg",
    icon: Home,
    description: "Broker-free student housing",
    color: "bg-green-500",
  },
  {
    name: "Café Perks",
    href: "/student/cafe",
    icon: Coffee,
    description: "Afternoon student discounts",
    color: "bg-yellow-500",
  },
  {
    name: "Roommate Finder",
    href: "/student/roomate",
    icon: Users,
    description: "Lifestyle-based roommate matching",
    color: "bg-pink-500",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f7] px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <Link
          href="/student"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-gray-500"
        >
          <ArrowLeft size={18} />
          Back to Student Hub
        </Link>

        <div>
          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700">
            CAMPUS SERVICES
          </span>

          <h1 className="mt-5 text-5xl font-black">
            Everything you need.
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-gray-500">
            Explore trusted student services available around your campus.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                href={category.href}
                key={category.name}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className={`${category.color} p-7 text-white`}>
                  <Icon size={38} />
                </div>

                <div className="p-7">

                  <h2 className="text-2xl font-black">
                    {category.name}
                  </h2>

                  <p className="mt-2 text-gray-500">
                    {category.description}
                  </p>

                  <div className="mt-6 font-bold text-gray-800">
                    Explore →
                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </main>
  );
}