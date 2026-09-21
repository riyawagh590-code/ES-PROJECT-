"use client";

import Link from "next/link";
import { MapPin, Star, ShieldCheck, ArrowLeft } from "lucide-react";

const messes = [
  {
    name: "Annapurna Homely Mess",
    distance: "350m",
    rating: "4.8",
    reviews: "312",
    price: "₹2,850",
    food: "Pure Veg • Jain Friendly",
    color: "from-orange-500 to-red-500",
    menu: "Paneer Butter Masala, Dal Tadka, Jeera Rice, 4 Phulkas, Gulab Jamun",
  },
  {
    name: "Flavors of Punjab & Tiffin Center",
    distance: "450m",
    rating: "4.6",
    reviews: "220",
    price: "₹3,100",
    food: "Pure Veg • Non-Veg Options",
    color: "from-yellow-500 to-orange-500",
    menu: "Amritsari Chole, Jeera Rice, Butter Roti, Boondi Raita, Onion Salad",
  },
  {
    name: "Sai Krupa Maharashtrian Mess",
    distance: "600m",
    rating: "4.7",
    reviews: "185",
    price: "₹2,600",
    food: "Pure Veg",
    color: "from-green-500 to-emerald-600",
    menu: "Batata Rassa Bhaji, Varan Bhaat, Jowar Bhakri, Koshimbir",
  },
];

export default function MessPage() {
  return (
    <main className="min-h-screen bg-[#faf7f5] px-6 py-10">

      <div className="mx-auto max-w-7xl">

        <Link
          href="/student/services"
          className="mb-8 inline-flex items-center gap-2 font-semibold text-gray-500"
        >
          <ArrowLeft size={18} />
          All Services
        </Link>

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
              🍽 Verified Meal Subscriptions
            </span>

            <h1 className="mt-5 text-4xl font-black md:text-5xl">
              College Gate Mess Discovery
            </h1>

            <p className="mt-3 text-lg text-gray-500">
              Compare verified messes, menus, prices and student ratings.
            </p>
          </div>

          <div className="flex gap-2">
            <button className="rounded-full bg-[#414b55] px-5 py-3 font-bold text-white">
              All
            </button>
            <button className="rounded-full bg-white px-5 py-3 font-bold">
              Pure Veg
            </button>
            <button className="rounded-full bg-white px-5 py-3 font-bold">
              Non-Veg
            </button>
          </div>

        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-3">

          {messes.map((mess) => (
            <div
              key={mess.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >

              <div className={`h-44 bg-gradient-to-br ${mess.color} p-5`}>

                <div className="flex justify-end">
                  <span className="rounded-full bg-white px-4 py-2 font-bold">
                    ⭐ {mess.rating} ({mess.reviews})
                  </span>
                </div>

                <span className="mt-20 inline-flex items-center gap-1 rounded-full bg-emerald-700 px-3 py-2 text-sm font-bold text-white">
                  <ShieldCheck size={16} />
                  Hygiene: A+
                </span>

              </div>

              <div className="p-6">

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={16} />
                  {mess.distance} from campus main gate
                </div>

                <h2 className="mt-3 text-2xl font-black">
                  {mess.name}
                </h2>

                <div className="mt-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-bold text-purple-700">
                  {mess.food}
                </div>

                <div className="mt-5 rounded-2xl border border-purple-100 bg-purple-50 p-4">
                  <p className="text-xs font-bold uppercase text-gray-500">
                    Today's Lunch Special
                  </p>

                  <p className="mt-2 font-semibold">
                    {mess.menu}
                  </p>
                </div>

                <div className="mt-6 flex items-end justify-between">

                  <div>
                    <span className="text-3xl font-black">
                      {mess.price}
                    </span>
                    <span className="text-gray-500"> / month</span>
                  </div>

                  <span className="font-semibold underline">
                    View menu
                  </span>

                </div>

                <Link
                  href={`/service/mess-${mess.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  className="mt-5 block rounded-xl bg-[#414b55] py-3 text-center font-bold text-white"
                >
                  Subscribe Pass
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}