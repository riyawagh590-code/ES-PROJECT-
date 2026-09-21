"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const questions = [
  {
    title: "What is your sleep cycle?",
    options: [
      "Early Bird",
      "Moderate",
      "Night Owl",
      "Very Late Sleeper",
    ],
  },
  {
    title: "How clean do you keep your room?",
    options: [
      "Very Strict",
      "Usually Clean",
      "Moderate",
      "Messy but Manageable",
    ],
  },
  {
    title: "What study environment do you prefer?",
    options: [
      "Complete Silence",
      "Quiet Music",
      "Moderate Noise",
      "Social Environment",
    ],
  },
  {
    title: "What is your guest preference?",
    options: [
      "No Guests",
      "Occasional Guests",
      "Friends Welcome",
      "Guests Anytime",
    ],
  },
  {
    title: "What is your dietary preference?",
    options: [
      "Pure Veg",
      "Non-Veg",
      "Jain",
      "Flexible",
    ],
  },
];

export default function RoomateQuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const question = questions[current];

  function selectAnswer(answer) {
    const updated = [...answers];
    updated[current] = answer;
    setAnswers(updated);
  }

  function nextQuestion() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  }

  return (
    <main className="min-h-screen bg-[#fff7fb] px-6 py-10">

      <div className="mx-auto max-w-3xl">

        <Link
          href="/student/roomate"
          className="inline-flex items-center gap-2 font-semibold text-gray-500"
        >
          <ArrowLeft size={18} />
          Roommate Finder
        </Link>

        <div className="mt-10 rounded-[32px] bg-white p-8 shadow-xl md:p-12">

          <div className="flex justify-between text-sm font-bold text-gray-500">
            <span>
              Question {current + 1} of {questions.length}
            </span>

            <span>
              {Math.round(((current + 1) / questions.length) * 100)}%
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full bg-pink-500 transition-all"
              style={{
                width: `${((current + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          <h1 className="mt-10 text-3xl font-black">
            {question.title}
          </h1>

          <div className="mt-7 space-y-3">

            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => selectAnswer(option)}
                className={`w-full rounded-2xl border p-5 text-left font-semibold transition ${
                  answers[current] === option
                    ? "border-pink-500 bg-pink-50 text-pink-700"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                {option}
              </button>
            ))}

          </div>

          <button
            onClick={nextQuestion}
            disabled={!answers[current]}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#414b55] py-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {current === questions.length - 1
              ? "See My Matches"
              : "Next Question"}

            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </main>
  );
}