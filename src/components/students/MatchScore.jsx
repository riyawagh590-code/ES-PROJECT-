"use client";

import { Heart, Sparkles } from "lucide-react";

export default function MatchScore({ score = 85 }) {
  let label = "Good match";

  if (score >= 90) {
    label = "Excellent match";
  } else if (score >= 80) {
    label = "Great match";
  }

  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
        <Heart className="w-5 h-5 text-pink-500" />
      </div>

      <div>
        <div className="flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-orange-500" />

          <span className="font-black text-gray-900">
            {score}% match
          </span>
        </div>

        <p className="text-xs text-gray-500">
          {label}
        </p>
      </div>
    </div>
  );
}