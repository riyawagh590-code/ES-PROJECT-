"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({
  title,
  description,
  image,
  icon: Icon,
  href = "/student/services",
}) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* IMAGE */}
      <div className="relative h-44 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-purple-100 to-orange-100" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* ICON */}
        {Icon && (
          <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-purple-600 shadow-lg">
            <Icon size={21} />
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-[#14244a] transition group-hover:text-purple-600">
              {title}
            </h3>

            {description && (
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {description}
              </p>
            )}
          </div>

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition group-hover:bg-purple-600 group-hover:text-white">
            <ArrowRight size={17} />
          </div>
        </div>

        <div className="mt-4 text-sm font-bold text-purple-600">
          Explore →
        </div>
      </div>
    </Link>
  );
}