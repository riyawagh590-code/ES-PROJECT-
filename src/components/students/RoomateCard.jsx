"use client";

import {
  MapPin,
  CheckCircle2,
  Heart,
} from "lucide-react";

export default function RoomateCard({
  roommate,
  onView,
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 text-xl font-black">
            {roommate?.name?.charAt(0) || "R"}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-black text-gray-900">
                {roommate?.name || "Roommate"}
              </h3>

              {roommate?.verified && (
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              )}
            </div>

            <p className="text-sm text-gray-500">
              {roommate?.course || "Student"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-bold">
          <Heart className="w-3.5 h-3.5" />
          {roommate?.match || 0}%
        </div>
      </div>

      {roommate?.location && (
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
          <MapPin className="w-4 h-4 text-blue-500" />
          {roommate.location}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-4">
        {roommate?.sleepSchedule && (
          <span className="px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">
            {roommate.sleepSchedule}
          </span>
        )}

        {roommate?.cleanliness && (
          <span className="px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
            {roommate.cleanliness}
          </span>
        )}

        {roommate?.food && (
          <span className="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold">
            {roommate.food}
          </span>
        )}
      </div>

      <button
        onClick={() => onView?.(roommate)}
        className="w-full mt-5 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-pink-500 transition"
      >
        View profile
      </button>
    </div>
  );
}