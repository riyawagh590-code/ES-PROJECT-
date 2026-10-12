"use client";

import Link from "next/link";
import { Heart, ArrowLeft, CheckCircle } from "lucide-react";

const matches = [
  {
    name: "Arjun Sharma",
    course: "B.Tech Computer Science • 2nd Year",
    percentage: "98%",
    budget: "₹7,000 – ₹9,500/mo",
    description:
      "Coding enthusiast, likes weekend FIFA. Keeps the room tidy and prefers a clean study environment.",
    tags: ["Night Owl", "Strict Hygiene", "Gaming"],
  },
  {
    name: "Ananya Roy",
    course: "B.Des Product Design • 2nd Year",
    percentage: "91%",
    budget: "₹8,000 – ₹11,000/mo",
    description:
      "Design student, friendly and social. Music listener with headphones and organized study habits.",
    tags: ["Night Owl", "Moderate Hygiene", "Social"],
  },
  {
    name: "Rohit Khandelwal",
    course: "B.Tech Mechanical • 1st Year",
    percentage: "84%",
    budget: "₹6,500 – ₹8,500/mo",
    description:
      "Early morning gym-goer who prefers a quiet environment during exams.",
    tags: ["Early Bird", "Strict Hygiene", "Quiet"],
  },
];

export default function MatchesPage() {
  return (
    <main className="min-h-screen bg-[#fff7fb] px-6 py-10">

      <div className="mx-auto max-w-7xl">

        <Link
          href="/student/roomate"
          className="inline-flex items-center gap-2 font-semibold text-gray-500"
        >
          <ArrowLeft size={18} />
          Roommate Finder
        </Link>

        <div className="mt-8">

          <span className="rounded-full bg-pink-100 px-4 py-2 font-bold text-pink-700">
            ✨ Your Compatibility Results
          </span>

          <h1 className="mt-5 text-5xl font-black">
            Your Roommate Matches
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            We found students whose lifestyle preferences align with yours.
          </p>

        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {matches.map((match) => (
            <div
              key={match.name}
              className="rounded-3xl bg-white p-7 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-xl font-black text-pink-600">
                  {match.name.charAt(0)}
                </div>

                <div className="rounded-full bg-green-100 px-4 py-2 font-black text-green-700">
                  {match.percentage} Match
                </div>

              </div>

              <h2 className="mt-5 text-2xl font-black">
                {match.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {match.course}
              </p>

              <p className="mt-5 italic leading-7 text-gray-600">
                "{match.description}"
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                {match.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-pink-200 bg-pink-50 px-3 py-2 text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}

              </div>

              <div className="mt-6 border-t pt-5">

                <p className="text-sm text-gray-500">
                  Target Budget
                </p>

                <p className="mt-1 font-black">
                  {match.budget}
                </p>

              </div>

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#414b55] py-3 font-bold text-white">
                <Heart size={18} />
                Connect & Request Contact
              </button>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}