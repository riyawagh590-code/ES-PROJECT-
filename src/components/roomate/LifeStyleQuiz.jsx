"use client";

import { useState } from "react";
import {
  Moon,
  Sun,
  Sparkles,
  Volume2,
  Utensils,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const questions = [
  {
    id: "sleepSchedule",
    title: "What's your usual sleep schedule?",
    subtitle: "We'll find someone with a similar routine.",
    options: [
      {
        label: "Early bird",
        value: "Early bird",
        icon: Sun,
      },
      {
        label: "Night owl",
        value: "Night owl",
        icon: Moon,
      },
      {
        label: "Flexible",
        value: "Flexible",
        icon: Sparkles,
      },
    ],
  },

  {
    id: "cleanliness",
    title: "How important is cleanliness?",
    subtitle: "Choose what best describes you.",
    options: [
      {
        label: "Very clean",
        value: "Very clean",
        icon: Sparkles,
      },
      {
        label: "Moderately clean",
        value: "Moderately clean",
        icon: Sparkles,
      },
      {
        label: "Relaxed",
        value: "Relaxed",
        icon: Sparkles,
      },
    ],
  },

  {
    id: "noise",
    title: "What's your preferred noise level?",
    subtitle: "Think about studying, sleeping and relaxing.",
    options: [
      {
        label: "Quiet",
        value: "Quiet",
        icon: Volume2,
      },
      {
        label: "Moderate",
        value: "Moderate",
        icon: Volume2,
      },
      {
        label: "Social & lively",
        value: "Social & lively",
        icon: Volume2,
      },
    ],
  },

  {
    id: "food",
    title: "What's your food preference?",
    subtitle: "This helps us improve your compatibility score.",
    options: [
      {
        label: "Vegetarian",
        value: "Vegetarian",
        icon: Utensils,
      },
      {
        label: "Non-vegetarian",
        value: "Non-vegetarian",
        icon: Utensils,
      },
      {
        label: "Anything works",
        value: "Anything works",
        icon: Utensils,
      },
    ],
  },
];

export default function LifeStyleQuiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = questions[currentQuestion];

  const selectedAnswer = answers[question.id];

  const handleSelect = (value) => {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: value,
    }));
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
    } else {
      if (onComplete) {
        onComplete(answers);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6 md:p-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>

            <span className="text-sm font-bold text-purple-600">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <p className="text-sm font-bold text-orange-500 uppercase tracking-wide mb-2">
            Lifestyle quiz
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            {question.title}
          </h2>

          <p className="text-gray-500 mt-2">
            {question.subtitle}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedAnswer === option.value;

            return (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                  isSelected
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-100 bg-white hover:border-purple-200 hover:bg-purple-50/40"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    isSelected
                      ? "bg-purple-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <span
                  className={`font-semibold ${
                    isSelected
                      ? "text-purple-700"
                      : "text-gray-700"
                  }`}
                >
                  {option.label}
                </span>

                <div className="ml-auto">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected
                        ? "border-purple-500"
                        : "border-gray-300"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition ${
              currentQuestion === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition ${
              selectedAnswer
                ? "bg-gray-900 text-white hover:bg-purple-600"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            {currentQuestion === questions.length - 1
              ? "See matches"
              : "Next"}

            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}