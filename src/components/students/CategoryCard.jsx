"use client";

import {
  Utensils,
  Shirt,
  Sparkles,
  Home,
  Coffee,
  Users,
  ArrowUpRight,
} from "lucide-react";

const icons = {
  Mess: Utensils,
  Laundry: Shirt,
  Cleaning: Sparkles,
  "PG & Hostels": Home,
  Cafes: Coffee,
  "Roommate Finder": Users,
};

export default function CategoryCard({
  title,
  description,
  count,
  onClick,
}) {
  const Icon = icons[title] || Sparkles;

  return (
    <button
      onClick={onClick}
      className="group w-full text-left bg-white border border-gray-100 rounded-3xl p-5 hover:-translate-y-1 hover:shadow-lg transition"
    >
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>

        <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-purple-500 transition" />
      </div>

      <h3 className="text-lg font-black text-gray-900 mt-5">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
        {description}
      </p>

      {count && (
        <p className="text-xs font-bold text-purple-600 mt-4">
          {count} available
        </p>
      )}
    </button>
  );
}