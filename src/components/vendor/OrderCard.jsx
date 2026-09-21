"use client";

import {
  CalendarDays,
  Clock,
  MapPin,
  User,
} from "lucide-react";

export default function OrderCard({
  order,
  onAccept,
  onReject,
  onStatusChange,
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold text-purple-600 uppercase tracking-wide">
            Order #{order?.id || "0001"}
          </p>

          <h3 className="text-lg font-black text-gray-900 mt-1">
            {order?.service || "Service booking"}
          </h3>
        </div>

        <span className="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs font-bold">
          {order?.status || "Pending"}
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <User className="w-4 h-4 text-purple-500" />
          {order?.customer || "Student"}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <CalendarDays className="w-4 h-4 text-blue-500" />
          {order?.date || "-"}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4 text-orange-500" />
          {order?.time || "-"}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-green-500" />
          {order?.location || "Campus"}
        </div>
      </div>

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500">
          Amount
        </span>

        <span className="text-xl font-black text-gray-900">
          ₹{order?.amount || 0}
        </span>
      </div>

      {order?.status === "Pending" && (
        <div className="grid grid-cols-2 gap-3 mt-5">
          <button
            onClick={() => onReject?.(order)}
            className="py-3 rounded-xl border border-red-200 text-red-600 font-bold hover:bg-red-50 transition"
          >
            Reject
          </button>

          <button
            onClick={() => onAccept?.(order)}
            className="py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-green-600 transition"
          >
            Accept
          </button>
        </div>
      )}

      {order?.status === "Accepted" && (
        <button
          onClick={() =>
            onStatusChange?.(order, "In Progress")
          }
          className="w-full mt-5 py-3 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-700 transition"
        >
          Start service
        </button>
      )}

      {order?.status === "In Progress" && (
        <button
          onClick={() =>
            onStatusChange?.(order, "Completed")
          }
          className="w-full mt-5 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition"
        >
          Mark completed
        </button>
      )}
    </div>
  );
}