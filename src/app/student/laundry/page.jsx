"use client";

import Link from "next/link";
import { MapPin, Clock, ShieldCheck, ArrowLeft } from "lucide-react";

export default function LaundryPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <Link
          href="/student/services"
          className="inline-flex items-center gap-2 font-semibold text-gray-500"
        >
          <ArrowLeft size={18} />
          All Services
        </Link>

        <div className="mt-7">
          <span className="rounded-full bg-blue-100 px-4 py-2 font-bold text-blue-700">
            👕 Doorstep Gate Pickups
          </span>

          <h1 className="mt-5 text-5xl font-black">
            Scheduled Hostel Laundry
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            Leave your laundry bag at the hostel gate and get it back clean
            within 24 hours.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Left */}
          <div className="rounded-3xl bg-white p-7 shadow-sm">

            <h2 className="text-xl font-black">
              1. Choose Washing Category
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-3">

              {[
                ["Wash & Fold", "₹70/bag"],
                ["Wash & Iron", "₹110/bag"],
                ["Dry Clean", "₹140/item"],
              ].map(([title, price], index) => (
                <button
                  key={title}
                  className={`rounded-2xl border p-4 text-center font-bold ${
                    index === 0
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  {title}
                  <span className="mt-1 block text-sm text-gray-500">
                    {price}
                  </span>
                </button>
              ))}

            </div>

            <h2 className="mt-8 text-xl font-black">
              2. Quantity of Laundry Bags
            </h2>

            <div className="mt-4 flex items-center justify-between rounded-2xl border bg-blue-50 p-5">

              <div>
                <p className="text-xl font-black">
                  2 Standard Bags
                </p>
                <p className="text-gray-500">
                  Approximately 10kg
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button className="h-10 w-10 rounded-full border bg-white">
                  −
                </button>
                <b>2</b>
                <button className="h-10 w-10 rounded-full border bg-white">
                  +
                </button>
              </div>

            </div>

            <h2 className="mt-8 text-xl font-black">
              3. Select Gate Pickup Point
            </h2>

            <div className="mt-4 space-y-2">

              {[
                "Hostel 1 Turnstile",
                "Hostel 3 Gate",
                "Main Campus Gate",
                "Greenwood PG Lane",
              ].map((place, index) => (
                <button
                  key={place}
                  className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left font-semibold ${
                    index === 1
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <MapPin size={18} />
                  {place}
                </button>
              ))}

            </div>

          </div>

          {/* Right */}
          <div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">

              <h2 className="text-2xl font-black">
                QuickWash Doorstep Laundry
              </h2>

              <div className="mt-2 text-gray-500">
                ⭐ 4.8 (420 reviews) • 24h Express Turnaround
              </div>

              <hr className="my-6" />

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span className="text-gray-500">Service</span>
                  <b>Wash & Fold</b>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Bags</span>
                  <b>2 Bags</b>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Drop Point</span>
                  <b>Hostel 3 Gate</b>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Slot</span>
                  <b>Today 6:00 PM</b>
                </div>

              </div>

              <hr className="my-6" />

              <div className="flex justify-between text-xl">
                <b>Subtotal</b>
                <b>₹140</b>
              </div>

              <button className="mt-6 w-full rounded-xl bg-[#414b55] py-4 font-bold text-white">
                Confirm Doorstep Pickup (₹140)
              </button>

            </div>

            <div className="mt-5 rounded-3xl border border-green-200 bg-green-50 p-6">

              <div className="flex gap-3">
                <ShieldCheck className="text-green-600" />

                <div>
                  <h3 className="font-black">
                    Laundry Protection Guarantee
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    Every bag is tagged at handover. Delays beyond 24 hours
                    are eligible for platform credits.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}