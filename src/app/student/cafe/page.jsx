"use client";

import Link from "next/link";
import { Coffee, MapPin, Clock, ArrowLeft } from "lucide-react";

const cafes = [
  {
    name: "Cafe Mocha & Co.",
    distance: "250m",
    discount: "15% FLASH OFF",
    time: "3:00 PM – 7:00 PM",
    description: "Cold brews, artisan pizzas and student burger combos.",
    color: "from-amber-700 to-orange-500",
  },
  {
    name: "The Brew & Bites Yard",
    distance: "400m",
    discount: "12% FLASH OFF",
    time: "3:30 PM – 6:30 PM",
    description: "Student study groups get discounts on food and drinks.",
    color: "from-stone-700 to-amber-600",
  },
  {
    name: "Campus Chai & Bun Maska Adda",
    distance: "180m",
    discount: "10% FLASH OFF",
    time: "3:00 PM – 7:00 PM",
    description: "Chai, bun maska and quick snacks during class breaks.",
    color: "from-orange-700 to-yellow-600",
  },
];

export default function CafePage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] px-6 py-10">

      <div className="mx-auto max-w-7xl">

        <Link
          href="/student/services"
          className="inline-flex items-center gap-2 font-semibold text-gray-500"
        >
          <ArrowLeft size={18} />
          All Services
        </Link>

        <div className="mt-7">

          <span className="rounded-full bg-yellow-100 px-4 py-2 font-bold text-yellow-700">
            ☕ Off-Peak Campus Perks
          </span>

          <h1 className="mt-5 text-5xl font-black">
            Dynamic Lecture-Break Café Deals
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            Show your digital voucher and get instant student discounts.
          </p>

        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-3">

          {cafes.map((cafe) => (
            <div
              key={cafe.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >

              <div
                className={`h-52 bg-gradient-to-br ${cafe.color} p-5 text-white`}
              >

                <div className="flex justify-between">

                  <Coffee size={35} />

                  <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-black">
                    {cafe.discount}
                  </span>

                </div>

                <div className="mt-28 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-2 text-sm font-bold">
                  <Clock size={15} />
                  {cafe.time}
                </div>

              </div>

              <div className="p-6">

                <p className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={16} />
                  {cafe.distance} from campus main gate
                </p>

                <h2 className="mt-3 text-2xl font-black">
                  {cafe.name}
                </h2>

                <p className="mt-3 leading-6 text-gray-500">
                  {cafe.description}
                </p>

                <p className="mt-5 font-bold text-gray-700">
                  Minimum spend: ₹120
                </p>

                <button className="mt-5 w-full rounded-xl bg-[#414b55] py-3 font-bold text-white">
                  Claim Perk Voucher
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}