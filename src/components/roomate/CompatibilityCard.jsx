"use client";

import { Heart, CheckCircle2, Sparkles } from "lucide-react";

export default function CompatibilityCard({
  score = 85,
  factors = [],
}) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-semibold text-purple-600">
            Compatibility
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-1">
            Your roommate match
          </h3>
        </div>

        <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center">
          <Heart className="w-6 h-6 text-pink-500" />
        </div>
      </div>

      {/* Score */}
      <div className="flex items-center gap-6 mb-6">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[10px] border-purple-100" />

          <div
            className="absolute inset-0 rounded-full border-[10px] border-purple-500"
            style={{
              clipPath: `inset(${100 - score}% 0 0 0)`,
            }}
          />

          <div className="text-center z-10">
            <p className="text-3xl font-black text-gray-900">
              {score}%
            </p>
            <p className="text-xs text-gray-500">match</p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-orange-500" />

            <span className="font-bold text-gray-900">
              Great match!
            </span>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed">
            Your lifestyle preferences are highly compatible with
            this roommate.
          </p>
        </div>
      </div>

      {/* Factors */}
      {factors.length > 0 && (
        <div className="space-y-3">
          {factors.map((factor, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />

              <span className="text-sm font-medium text-gray-700">
                {factor}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}