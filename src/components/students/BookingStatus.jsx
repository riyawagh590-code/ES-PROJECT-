"use client";

import {
  CheckCircle2,
  Clock3,
  XCircle,
  PackageCheck,
} from "lucide-react";

export default function BookingStatus({ status = "Pending" }) {
  const statuses = {
    Pending: {
      icon: Clock3,
      text: "Booking pending",
      style: "bg-orange-50 text-orange-700",
    },

    Confirmed: {
      icon: CheckCircle2,
      text: "Booking confirmed",
      style: "bg-green-50 text-green-700",
    },

    Completed: {
      icon: PackageCheck,
      text: "Service completed",
      style: "bg-blue-50 text-blue-700",
    },

    Cancelled: {
      icon: XCircle,
      text: "Booking cancelled",
      style: "bg-red-50 text-red-700",
    },
  };

  const current = statuses[status] || statuses.Pending;
  const Icon = current.icon;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-bold ${current.style}`}
    >
      <Icon className="w-4 h-4" />
      {current.text}
    </div>
  );
}