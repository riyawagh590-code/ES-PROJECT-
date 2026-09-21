"use client";

import { Check, Sparkles } from "lucide-react";

export default function FresherPassCard({
  name = "Campus Pro",
  price = 399,
  period = "month",
  features = [],
  popular = false,
  onSelect,
}) {
  return (
    <div
      className={`relative bg-white rounded-3xl p-6 border shadow-sm ${
        popular
          ? "border-purple-400 shadow-purple-100"
          : "border-gray-100"
      }`}
    >
      {popular && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">
          Popular
        </div>
      )}

      <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
        <Sparkles className="w-6 h-6 text-purple-600" />
      </div>

      <h3 className="text-xl font-black text-gray-900 mt-5">
        {name}
      </h3>

      <div className="mt-3">
        <span className="text-3xl font-black text-gray-900">
          ₹{price}
        </span>

        <span className="text-sm text-gray-500">
          /{period}
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
          >
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />

            <span className="text-sm text-gray-600">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => onSelect?.(name)}
        className="w-full mt-6 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-purple-600 transition"
      >
        Choose plan
      </button>
    </div>
  );
}