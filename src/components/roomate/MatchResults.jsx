"use client";

import {
  Heart,
  MapPin,
  CheckCircle2,
  Star,
  MessageCircle,
} from "lucide-react";

export default function MatchResults({
  roommates = [],
  onViewProfile,
}) {
  if (roommates.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-gray-100 p-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-pink-50 flex items-center justify-center mb-4">
          <Heart className="w-8 h-8 text-pink-500" />
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          No matches yet
        </h3>

        <p className="text-gray-500 mt-2">
          Complete your lifestyle quiz to discover compatible
          roommates.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Heading */}
      <div className="mb-6">
        <p className="text-sm font-bold text-pink-500 uppercase tracking-wide">
          Roommate finder
        </p>

        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-1">
          Your best matches
        </h2>

        <p className="text-gray-500 mt-2">
          Based on your lifestyle preferences and compatibility.
        </p>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {roommates.map((roommate) => (
          <div
            key={roommate.id}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition"
          >
            {/* Top section */}
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 text-xl font-black">
                    {roommate.name?.charAt(0) || "R"}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900">
                        {roommate.name}
                      </h3>

                      {roommate.verified && (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      )}
                    </div>

                    <p className="text-sm text-gray-500">
                      {roommate.age
                        ? `${roommate.age} years`
                        : "Student"}
                    </p>
                  </div>
                </div>

                {/* Match */}
                <div className="text-right">
                  <p className="text-2xl font-black text-purple-600">
                    {roommate.match || 0}%
                  </p>

                  <p className="text-xs text-gray-400">
                    match
                  </p>
                </div>
              </div>

              {/* Course */}
              {roommate.course && (
                <p className="text-sm text-gray-600 mt-4">
                  {roommate.course}
                </p>
              )}

              {/* Location */}
              {roommate.location && (
                <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  {roommate.location}
                </div>
              )}

              {/* Rating */}
              {roommate.rating && (
                <div className="flex items-center gap-1 mt-3">
                  <Star className="w-4 h-4 fill-orange-400 text-orange-400" />

                  <span className="text-sm font-bold text-gray-700">
                    {roommate.rating}
                  </span>

                  <span className="text-xs text-gray-400">
                    rating
                  </span>
                </div>
              )}
            </div>

            {/* Preferences */}
            <div className="px-5 pb-5">
              <div className="flex flex-wrap gap-2">
                {roommate.sleepSchedule && (
                  <span className="px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">
                    {roommate.sleepSchedule}
                  </span>
                )}

                {roommate.cleanliness && (
                  <span className="px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                    {roommate.cleanliness}
                  </span>
                )}

                {roommate.food && (
                  <span className="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold">
                    {roommate.food}
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-gray-100 p-4 flex gap-3">
              <button
                onClick={() =>
                  onViewProfile && onViewProfile(roommate)
                }
                className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-purple-600 transition"
              >
                View profile
              </button>

              <button
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-50 text-pink-500 hover:bg-pink-100 transition"
                title="Connect"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}