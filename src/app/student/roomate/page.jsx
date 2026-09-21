"use client";

import Link from "next/link";
import {
  Users,
  Moon,
  Sparkles,
  BookOpen,
  Utensils,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function RoomatePage() {
  return (
    <main className="min-h-screen bg-[#fff7fb] px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <Link
          href="/student/services"
          className="inline-flex items-center gap-2 font-semibold text-gray-500"
        >
          <ArrowLeft size={18} />
          All Services
        </Link>

        <div className="mt-8 text-center">

          <span className="rounded-full bg-pink-100 px-4 py-2 font-bold text-pink-700">
            👥 Behavioral Matching Algorithm
          </span>

          <h1 className="mt-6 text-5xl font-black">
            Find a roommate who fits your lifestyle.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            We match students based on sleep cycle, cleanliness,
            study habits, food preferences and guest policies.
          </p>

          <Link
            href="/student/roomate/quiz"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#414b55] px-7 py-4 font-bold text-white"
          >
            Take Compatibility Quiz
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {[
            [Moon, "Sleep Cycle", "Early bird or night owl"],
            [Sparkles, "Cleanliness", "How tidy are you?"],
            [BookOpen, "Study Style", "Quiet room or music?"],
            [Utensils, "Food Habits", "Veg, non-veg or flexible"],
          ].map(([Icon, title, description]) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-6 text-center shadow-sm"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                <Icon />
              </div>

              <h2 className="mt-4 font-black">
                {title}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}