"use client";

import { useState } from "react";
import {
  CalendarDays,
  Clock,
  Save,
} from "lucide-react";

export default function AvailabilityManager() {
  const [availability, setAvailability] = useState({
    Monday: { active: true, from: "09:00", to: "18:00" },
    Tuesday: { active: true, from: "09:00", to: "18:00" },
    Wednesday: { active: true, from: "09:00", to: "18:00" },
    Thursday: { active: true, from: "09:00", to: "18:00" },
    Friday: { active: true, from: "09:00", to: "18:00" },
    Saturday: { active: true, from: "10:00", to: "16:00" },
    Sunday: { active: false, from: "10:00", to: "16:00" },
  });

  const updateDay = (day, field, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };

  const saveAvailability = () => {
    localStorage.setItem(
      "vendorAvailability",
      JSON.stringify(availability)
    );

    alert("Availability saved successfully.");
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-bold text-purple-600">
            Vendor portal
          </p>

          <h2 className="text-2xl font-black text-gray-900">
            Availability
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Set the days and hours when customers can book you.
          </p>
        </div>

        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
          <CalendarDays className="w-6 h-6 text-purple-600" />
        </div>
      </div>

      <div className="space-y-3">
        {Object.entries(availability).map(([day, data]) => (
          <div
            key={day}
            className="flex flex-col lg:flex-row lg:items-center gap-4 p-4 rounded-2xl bg-gray-50"
          >
            <div className="flex items-center gap-3 lg:w-40">
              <button
                onClick={() =>
                  updateDay(day, "active", !data.active)
                }
                className={`w-11 h-6 rounded-full transition ${
                  data.active
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    data.active
                      ? "translate-x-5"
                      : "translate-x-0.5"
                  }`}
                />
              </button>

              <span className="font-bold text-gray-800">
                {day}
              </span>
            </div>

            {data.active ? (
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-purple-500" />

                <input
                  type="time"
                  value={data.from}
                  onChange={(e) =>
                    updateDay(day, "from", e.target.value)
                  }
                  className="px-3 py-2 bg-white border border-gray-200 rounded-xl outline-none focus:border-purple-500"
                />

                <span className="text-gray-400">to</span>

                <input
                  type="time"
                  value={data.to}
                  onChange={(e) =>
                    updateDay(day, "to", e.target.value)
                  }
                  className="px-3 py-2 bg-white border border-gray-200 rounded-xl outline-none focus:border-purple-500"
                />
              </div>
            ) : (
              <span className="text-sm font-semibold text-gray-400">
                Closed
              </span>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={saveAvailability}
        className="mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-purple-600 transition"
      >
        <Save className="w-4 h-4" />
        Save availability
      </button>
    </div>
  );
}