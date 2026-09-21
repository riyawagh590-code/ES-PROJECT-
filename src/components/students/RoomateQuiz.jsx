"use client";

import { useState } from "react";

const questions = [
  {
    id: "sleep",
    question: "When do you usually sleep?",
    options: [
      "Early sleeper",
      "Night owl",
      "Flexible",
    ],
  },
  {
    id: "cleanliness",
    question: "How clean do you like your room?",
    options: [
      "Very clean",
      "Moderately clean",
      "Relaxed",
    ],
  },
  {
    id: "noise",
    question: "What kind of environment do you prefer?",
    options: [
      "Quiet",
      "Moderate",
      "Social",
    ],
  },
  {
    id: "food",
    question: "What is your food preference?",
    options: [
      "Vegetarian",
      "Non-vegetarian",
      "Anything works",
    ],
  },
];

export default function RoomateQuiz({ onComplete }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = questions[current];

  const selectAnswer = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: answer,
    }));
  };

  const next = () => {
    if (!answers[question.id]) return;

    if (current === questions.length - 1) {
      onComplete?.(answers);
      return;
    }

    setCurrent((prev) => prev + 1);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
      <div className="flex justify-between mb-3">
        <span className="text-xs font-bold text-purple-600">
          LIFESTYLE QUIZ
        </span>

        <span className="text-xs font-bold text-gray-400">
          {current + 1}/{questions.length}
        </span>
      </div>

      <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-8">
        <div
          className="h-full bg-purple-500 transition-all"
          style={{
            width: `${((current + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      <h2 className="text-2xl font-black text-gray-900">
        {question.question}
      </h2>

      <div className="space-y-3 mt-6">
        {question.options.map((option) => {
          const selected = answers[question.id] === option;

          return (
            <button
              key={option}
              onClick={() => selectAnswer(option)}
              className={`w-full text-left px-5 py-4 rounded-2xl border-2 font-semibold transition ${
                selected
                  ? "border-purple-500 bg-purple-50 text-purple-700"
                  : "border-gray-100 hover:border-purple-200"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <button
        onClick={next}
        disabled={!answers[question.id]}
        className="w-full mt-6 py-3.5 rounded-xl bg-gray-900 text-white font-bold disabled:bg-gray-200 disabled:text-gray-400 hover:bg-purple-600 transition"
      >
        {current === questions.length - 1
          ? "Find my matches"
          : "Next question"}
      </button>
    </div>
  );
}