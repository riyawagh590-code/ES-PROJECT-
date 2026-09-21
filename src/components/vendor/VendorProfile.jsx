"use client";

import {
  Store,
  MapPin,
  Phone,
  Mail,
  Clock,
  Pencil,
} from "lucide-react";

export default function VendorProfile({
  vendor = {},
  onEdit,
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
            <Store className="w-7 h-7" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900">
              {vendor.name || "Your Business"}
            </h2>

            <p className="text-purple-600 font-semibold">
              {vendor.type || "Campus Service Provider"}
            </p>
          </div>
        </div>

        <button
          onClick={onEdit}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-purple-600 transition"
        >
          <Pencil className="w-4 h-4" />
          Edit profile
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
        <div className="p-4 rounded-2xl bg-gray-50">
          <MapPin className="w-5 h-5 text-blue-500" />

          <p className="text-xs text-gray-400 mt-3">
            Location
          </p>

          <p className="text-sm font-bold text-gray-800 mt-1">
            {vendor.location || "Campus area"}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-gray-50">
          <Phone className="w-5 h-5 text-green-500" />

          <p className="text-xs text-gray-400 mt-3">
            Phone
          </p>

          <p className="text-sm font-bold text-gray-800 mt-1">
            {vendor.phone || "Not added"}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-gray-50">
          <Mail className="w-5 h-5 text-orange-500" />

          <p className="text-xs text-gray-400 mt-3">
            Email
          </p>

          <p className="text-sm font-bold text-gray-800 mt-1 break-all">
            {vendor.email || "Not added"}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-gray-50">
          <Clock className="w-5 h-5 text-purple-500" />

          <p className="text-xs text-gray-400 mt-3">
            Timings
          </p>

          <p className="text-sm font-bold text-gray-800 mt-1">
            {vendor.timings || "Not added"}
          </p>
        </div>
      </div>
    </div>
  );
}