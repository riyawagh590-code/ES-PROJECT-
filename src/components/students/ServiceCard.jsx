"use client";

import {
  MapPin,
  Star,
  ArrowUpRight,
} from "lucide-react";

export default function ServiceCard({
  service,
  onClick,
}) {
  return (
    <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition">
      <div className="h-2 bg-purple-500" />

      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
              {service?.type || "Service"}
            </span>

            <h3 className="text-xl font-black text-gray-900 mt-1">
              {service?.name || "Service name"}
            </h3>
          </div>

          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-purple-50 transition">
            <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-purple-600" />
          </div>
        </div>

        <div className="flex items-center gap-1 mt-4">
          <Star className="w-4 h-4 fill-orange-400 text-orange-400" />

          <span className="font-bold text-gray-800">
            {service?.rating || "4.5"}
          </span>
        </div>

        {service?.location && (
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <MapPin className="w-4 h-4 text-blue-500" />
            {service.location}
          </div>
        )}

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>

            <p className="text-lg font-black text-gray-900">
              {service?.price || "₹ —"}
            </p>
          </div>

          <button
            onClick={() => onClick?.(service)}
            className="px-4 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-purple-600 transition"
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
}