"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, CalendarDays, CheckCircle2 } from "lucide-react";

const slots = [
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "7:00 PM - 8:00 PM",
  "8:00 PM - 9:00 PM",
];

export default function VendorAvailability() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedSlots, setSelectedSlots] = useState([
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "7:00 PM - 8:00 PM",
  ]);

  const toggleSlot = (slot) => {
    setSelectedSlots((current) =>
      current.includes(slot)
        ? current.filter((item) => item !== slot)
        : [...current, slot]
    );
  };

  return (
    <main className="min-h-screen bg-[#f8f4f5]">

      <header className="border-b bg-white px-6 py-5">
        <div className="mx-auto flex max-w-7xl justify-between gap-4">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#9a7c70]">
              Vendor Portal
            </p>

            <h1 className="text-3xl font-bold text-[#424b55]">
              Availability
            </h1>

            <p className="text-sm text-gray-500">
              Control when students can place bookings.
            </p>
          </div>

          <Link
            href="/vendor"
            className="h-fit rounded-xl border px-5 py-3 font-semibold"
          >
            ← Dashboard
          </Link>

        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">

        {/* Store Status */}
        <section className="rounded-2xl border bg-white p-6 shadow-sm">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div className="flex items-center gap-4">

              <div
                className={`rounded-xl p-4 ${
                  isOpen ? "bg-emerald-100" : "bg-red-100"
                }`}
              >
                <Clock
                  className={
                    isOpen ? "text-emerald-600" : "text-red-600"
                  }
                />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Store Status
                </h2>

                <p className="text-sm text-gray-500">
                  Students can currently see your services.
                </p>
              </div>

            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`rounded-xl px-6 py-3 font-bold ${
                isOpen
                  ? "bg-emerald-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {isOpen ? "● OPEN" : "● CLOSED"}
            </button>

          </div>

        </section>

        {/* Hours */}
        <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">
            <CalendarDays className="text-purple-600" />

            <div>
              <h2 className="text-xl font-bold">
                Weekly Operating Hours
              </h2>

              <p className="text-sm text-gray-500">
                Students will only see slots inside these hours.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">

            {[
              ["Monday", "11:00 AM - 9:00 PM"],
              ["Tuesday", "11:00 AM - 9:00 PM"],
              ["Wednesday", "11:00 AM - 9:00 PM"],
              ["Thursday", "11:00 AM - 9:00 PM"],
              ["Friday", "11:00 AM - 9:00 PM"],
              ["Saturday", "11:00 AM - 10:00 PM"],
              ["Sunday", "11:00 AM - 10:00 PM"],
            ].map(([day, time]) => (

              <div
                key={day}
                className="flex items-center justify-between rounded-xl border p-4"
              >
                <span className="font-semibold">{day}</span>
                <span className="text-sm text-gray-600">{time}</span>
              </div>

            ))}

          </div>

        </section>

        {/* Slots */}
        <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Booking Slots
          </h2>

          <p className="text-sm text-gray-500">
            Select slots that students can book.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {slots.map((slot) => {
              const selected = selectedSlots.includes(slot);

              return (
                <button
                  key={slot}
                  onClick={() => toggleSlot(slot)}
                  className={`flex items-center justify-between rounded-xl border p-4 text-left transition ${
                    selected
                      ? "border-purple-400 bg-purple-50"
                      : "hover:bg-gray-50"
                  }`}
                >

                  <span className="font-semibold">
                    {slot}
                  </span>

                  {selected && (
                    <CheckCircle2
                      size={18}
                      className="text-purple-600"
                    />
                  )}

                </button>
              );
            })}

          </div>

        </section>

      </div>
    </main>
  );
}