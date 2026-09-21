"use client";

import {
  CheckCircle2,
  XCircle,
  Clock3,
  AlertCircle,
} from "lucide-react";

export default function VendorStatus({
  status = "Active",
}) {
  const config = {
    Active: {
      icon: CheckCircle2,
      style: "bg-green-50 text-green-700",
      text: "Active",
    },

    Inactive: {
      icon: XCircle,
      style: "bg-gray-100 text-gray-600",
      text: "Inactive",
    },

    Busy: {
      icon: Clock3,
      style: "bg-orange-50 text-orange-700",
      text: "Busy",
    },

    "Pending Verification": {
      icon: AlertCircle,
      style: "bg-yellow-50 text-yellow-700",
      text: "Pending verification",
    },
  };

  const current =
    config[status] || config.Active;

  const Icon = current.icon;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${current.style}`}
    >
      <Icon className="w-4 h-4" />
      {current.text}
    </span>
  );
}