"use client";

import Link from "next/link";
import { Home, MapPin, ShieldCheck, ArrowLeft } from "lucide-react";

const properties = [
  {
    name: "Sai Residency",
    location: "Campus Crossroad",
    price: "₹4,500",
    type: "Single / Double Sharing",
    tag: "Zero Brokerage",
  },
  {
    name: "Greenwood Student Homes",
    location: "Kothrud",
    price: "₹6,500",
    type: "Single Room",
    tag: "Verified Property",
  },
  {
    name: "Campus View PG",
    location: "Alandi Road",
    price: "₹5,200",
    type: "Double Sharing",
    tag: "300m from Gate",
  },
];

export default function PGPage() {
  return (
    <main className="min-h-screen bg-[#f5fbf7] px-6 py-10">

      <div className="mx-auto max-w-7xl">

        <Link
          href="/student/services"
          className="inline-flex items-center gap-2 font-semibold text-gray-500"
        >
          <ArrowLeft size={18} />
          All Services
        </Link>

        <div className="mt-7">
          <span className="rounded-full bg-green-100 px-4 py-2 font-bold text-green-700">
            🏠 Zero-Broker Housing
          </span>

          <h1 className="mt-5 text-5xl font-black">
            Student PG & Housing
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-gray-500">
            Find verified PGs and rooms near campus without unnecessary
            brokerage charges.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {properties.map((property) => (
            <div
              key={property.name}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >

              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-green-400 to-emerald-700 text-white">
                <Home size={60} />
              </div>

              <div className="p-6">

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  {property.tag}
                </span>

                <h2 className="mt-4 text-2xl font-black">
                  {property.name}
                </h2>

                <p className="mt-2 flex items-center gap-2 text-gray-500">
                  <MapPin size={16} />
                  {property.location}
                </p>

                <p className="mt-4 font-semibold">
                  {property.type}
                </p>

                <div className="mt-6">
                  <span className="text-3xl font-black">
                    {property.price}
                  </span>
                  <span className="text-gray-500"> / month</span>
                </div>

                <button className="mt-5 w-full rounded-xl bg-[#414b55] py-3 font-bold text-white">
                  View Property
                </button>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-10 flex gap-4 rounded-3xl border border-green-200 bg-green-50 p-6">

          <ShieldCheck className="text-green-600" />

          <div>
            <h3 className="font-black">
              Verified Housing Promise
            </h3>

            <p className="mt-1 text-sm text-gray-600">
              Listings are checked for location, basic amenities and
              student suitability.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}