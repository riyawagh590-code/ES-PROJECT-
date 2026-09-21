"use client";

import Link from "next/link";
import { Plus, Minus, Check, ArrowLeft } from "lucide-react";

export default function CleaningPage() {
  return (
    <main className="min-h-screen bg-[#faf7ff] px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <Link
          href="/student/services"
          className="inline-flex items-center gap-2 font-semibold text-gray-500"
        >
          <ArrowLeft size={18} />
          All Services
        </Link>

        <div className="mt-7">
          <span className="rounded-full bg-purple-100 px-4 py-2 font-bold text-purple-700">
            ✨ Pay-Per-Use Micro-Cleaning
          </span>

          <h1 className="mt-5 text-5xl font-black">
            Weekend Dorm & Room Cleaning
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            Book reliable Saturday or Sunday room cleaning from ₹200.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-7 shadow-sm">

            <h2 className="text-xl font-black">
              1. How many rooms to clean?
            </h2>

            <div className="mt-5 flex items-center justify-between rounded-2xl border bg-purple-50 p-5">

              <div>
                <h3 className="text-xl font-black">
                  1 Single Room / Studio
                </h3>

                <p className="text-gray-500">
                  Standard rate: ₹200 / room
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button className="rounded-full border bg-white p-2">
                  <Minus size={17} />
                </button>

                <b>1</b>

                <button className="rounded-full border bg-white p-2">
                  <Plus size={17} />
                </button>
              </div>

            </div>

            <h2 className="mt-8 text-xl font-black">
              2. Optional Deep Cleaning Addons
            </h2>

            <div className="mt-4 space-y-3">

              {[
                ["Attached Washroom Deep Scrub", "+₹100"],
                ["Balcony Washing & Bird Net Dusting", "+₹50"],
                ["Fogging & Disinfection", "+₹150"],
              ].map(([name, price], index) => (
                <div
                  key={name}
                  className={`flex items-center justify-between rounded-2xl border p-4 ${
                    index === 0
                      ? "border-purple-500 bg-purple-50"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border p-1">
                      {index === 0 && <Check size={15} />}
                    </div>

                    <b>{name}</b>
                  </div>

                  <b>{price}</b>
                </div>
              ))}

            </div>

            <h2 className="mt-8 text-xl font-black">
              3. Weekend Time Slot
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-3">

              {[
                "Saturday 10:00 AM",
                "Saturday 11:30 AM",
                "Sunday 10:00 AM",
                "Sunday 11:30 AM",
              ].map((slot, index) => (
                <button
                  key={slot}
                  className={`rounded-xl border p-4 font-bold ${
                    index === 1
                      ? "bg-[#414b55] text-white"
                      : "bg-white"
                  }`}
                >
                  {slot}
                </button>
              ))}

            </div>

          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm">

            <h2 className="text-2xl font-black">
              Included in Base Clean
            </h2>

            <div className="mt-6 space-y-4">

              {[
                "Floor sweeping & antiseptic mopping",
                "Study desk & bookshelf dusting",
                "Under-bed dust clearance",
                "Garbage bin emptying",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="rounded-full bg-green-100 p-1 text-green-600">
                    <Check size={15} />
                  </div>

                  <span>{item}</span>
                </div>
              ))}

            </div>

            <hr className="my-7" />

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Room (1 × ₹200)</span>
                <b>₹200</b>
              </div>

              <div className="flex justify-between">
                <span>Addons</span>
                <b>+₹100</b>
              </div>

              <div className="flex justify-between">
                <span>Scheduled Slot</span>
                <b>Saturday 11:30 AM</b>
              </div>

            </div>

            <hr className="my-7" />

            <div className="flex justify-between text-2xl">
              <b>Total Price</b>
              <b>₹300</b>
            </div>

            <button className="mt-6 w-full rounded-xl bg-[#414b55] py-4 font-bold text-white">
              Confirm Cleaning Slot (₹300)
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}