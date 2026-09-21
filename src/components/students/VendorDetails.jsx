"use client";

import {
  MapPin,
  Clock,
  Phone,
  Star,
  CheckCircle2,
  X,
} from "lucide-react";

export default function VendorDetails({
  vendor,
  onClose,
  onBook,
}) {
  if (!vendor) return null;

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
      <div className="h-2 bg-purple-500" />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 text-2xl font-black">
              {vendor.name?.charAt(0) || "V"}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black text-gray-900">
                  {vendor.name}
                </h2>

                {vendor.verified && (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                )}
              </div>

              <p className="text-purple-600 font-semibold">
                {vendor.type || "Campus service"}
              </p>
            </div>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-7">
          <div className="p-4 rounded-2xl bg-gray-50">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Star className="w-4 h-4 text-orange-500" />
              Rating
            </div>

            <p className="font-black text-gray-900 mt-1">
              {vendor.rating || "4.5"}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4 text-blue-500" />
              Location
            </div>

            <p className="font-semibold text-gray-900 mt-1">
              {vendor.location || "Campus area"}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock className="w-4 h-4 text-purple-500" />
              Timings
            </div>

            <p className="font-semibold text-gray-900 mt-1">
              {vendor.timings || "Check availability"}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Phone className="w-4 h-4 text-green-500" />
              Contact
            </div>

            <p className="font-semibold text-gray-900 mt-1">
              {vendor.contact || "Contact available after booking"}
            </p>
          </div>
        </div>

        {vendor.description && (
          <div className="mt-6">
            <h3 className="font-black text-gray-900">
              About this vendor
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mt-2">
              {vendor.description}
            </p>
          </div>
        )}

        {vendor.services?.length > 0 && (
          <div className="mt-6">
            <h3 className="font-black text-gray-900 mb-3">
              Services
            </h3>

            <div className="flex flex-wrap gap-2">
              {vendor.services.map((service, index) => (
                <span
                  key={index}
                  className="px-3 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => onBook?.(vendor)}
          className="w-full mt-7 py-3.5 rounded-xl bg-gray-900 text-white font-bold hover:bg-purple-600 transition"
        >
          Book this service
        </button>
      </div>
    </div>
  );
}