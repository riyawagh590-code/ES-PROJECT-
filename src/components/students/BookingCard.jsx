"use client";

import {
  CalendarDays,
  Clock,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function BookingCard({ booking, onClick }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-purple-600">
            Booking
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-1">
            {booking?.service || "Service Booking"}
          </h3>
        </div>

        <span className="px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold">
          {booking?.status || "Confirmed"}
        </span>
      </div>

      <div className="space-y-3 mt-5">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <CalendarDays className="w-4 h-4 text-purple-500" />
          {booking?.date || "Date not selected"}
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Clock className="w-4 h-4 text-orange-500" />
          {booking?.time || "Time not selected"}
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-blue-500" />
          {booking?.location || "Campus location"}
        </div>
      </div>

      <button
        onClick={() => onClick?.(booking)}
        className="w-full mt-5 flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-purple-600 transition"
      >
        View booking
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}