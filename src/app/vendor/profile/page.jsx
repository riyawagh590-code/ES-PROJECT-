"use client";

import { useState } from "react";
import Link from "next/link";
import { Save, Store, Phone, Mail, MapPin } from "lucide-react";

export default function VendorProfile() {
  const [saved, setSaved] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8f4f5]">

      <header className="border-b bg-white px-6 py-5">

        <div className="mx-auto flex max-w-5xl justify-between gap-4">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#9a7c70]">
              Vendor Portal
            </p>

            <h1 className="text-3xl font-bold text-[#424b55]">
              Business Profile
            </h1>

            <p className="text-sm text-gray-500">
              Manage the information students see about your business.
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

        <section className="overflow-hidden rounded-3xl border bg-white shadow-sm">

          {/* Cover */}
          <div className="h-36 bg-gradient-to-r from-[#424b55] via-[#655a68] to-[#9a7c70]" />

          <div className="p-6">

            <div className="-mt-16 flex h-28 w-28 items-center justify-center rounded-3xl border-4 border-white bg-[#424b55] text-white shadow-lg">
              <Store size={40} />
            </div>

            <div className="mt-5">

              <h2 className="text-2xl font-bold">
                Annapurna Homely Mess
              </h2>

              <p className="text-gray-500">
                Verified campus food vendor
              </p>

            </div>

            {/* Form */}
            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Business Name
                </label>

                <input
                  defaultValue="Annapurna Homely Mess"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Owner / Manager Name
                </label>

                <input
                  defaultValue="Ramesh Kumar"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <Phone size={15} />
                    Mobile Number
                  </span>
                </label>

                <input
                  defaultValue="+91 98220 12345"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <Mail size={15} />
                    Email Address
                  </span>
                </label>

                <input
                  defaultValue="annapurna@example.com"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <MapPin size={15} />
                    Campus Location
                  </span>
                </label>

                <input
                  defaultValue="Near MIT AOE Main Gate, Pune"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  About Your Business
                </label>

                <textarea
                  defaultValue="Student-friendly mess providing fresh vegetarian meals, flexible monthly subscriptions and affordable meal plans."
                  rows={5}
                  className="w-full resize-none rounded-xl border px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

            </div>

            {/* Save */}
            <div className="mt-8 flex justify-end">

              <button
                onClick={() => {
                  setSaved(true);
                  setTimeout(() => setSaved(false), 2000);
                }}
                className="flex items-center gap-2 rounded-xl bg-[#424b55] px-6 py-3 font-semibold text-white"
              >
                <Save size={18} />

                {saved ? "Saved!" : "Save Changes"}

              </button>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}