"use client";

import {
  MapPin,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function VendorCard({
  vendor,
  onView,
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-lg transition">
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 font-black text-xl">
          {vendor?.name?.charAt(0) || "V"}
        </div>

        {vendor?.verified && (
          <div className="flex items-center gap-1 text-xs font-bold text-green-600">
            <CheckCircle2 className="w-4 h-4" />
            Verified
          </div>
        )}
      </div>

      <h3 className="text-lg font-black text-gray-900 mt-5">
        {vendor?.name || "Vendor"}
      </h3>

      <p className="text-sm text-purple-600 font-semibold mt-1">
        {vendor?.type || "Campus service"}
      </p>

      <div className="flex items-center gap-1 mt-4">
        <Star className="w-4 h-4 fill-orange-400 text-orange-400" />

        <span className="font-bold text-gray-800">
          {vendor?.rating || "4.5"}
        </span>
      </div>

      {vendor?.location && (
        <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
          <MapPin className="w-4 h-4 text-blue-500" />
          {vendor.location}
        </div>
      )}

      <button
        onClick={() => onView?.(vendor)}
        className="w-full mt-5 flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-orange-500 transition"
      >
        View vendor
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}