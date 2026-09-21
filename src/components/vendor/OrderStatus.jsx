"use client";

import {
  Clock3,
  CheckCircle2,
  XCircle,
  LoaderCircle,
  PackageCheck,
} from "lucide-react";

export default function OrderStatus({
  status = "Pending",
}) {
  const statusConfig = {
    Pending: {
      icon: Clock3,
      style: "bg-orange-50 text-orange-700",
    },

    Accepted: {
      icon: CheckCircle2,
      style: "bg-blue-50 text-blue-700",
    },

    "In Progress": {
      icon: LoaderCircle,
      style: "bg-purple-50 text-purple-700",
    },

    Completed: {
      icon: PackageCheck,
      style: "bg-green-50 text-green-700",
    },

    Rejected: {
      icon: XCircle,
      style: "bg-red-50 text-red-700",
    },
  };

  const config =
    statusConfig[status] || statusConfig.Pending;

  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${config.style}`}
    >
      <Icon className="w-4 h-4" />
      {status}
    </span>
  );
}