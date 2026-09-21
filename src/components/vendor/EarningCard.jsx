"use client";

import {
  IndianRupee,
  TrendingUp,
  ShoppingBag,
} from "lucide-react";

export default function EarningCard({
  title = "Total earnings",
  amount = 0,
  change = 0,
  orders = 0,
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="w-11 h-11 rounded-2xl bg-green-50 flex items-center justify-center">
          <IndianRupee className="w-5 h-5 text-green-600" />
        </div>

        {change !== 0 && (
          <span
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
              change > 0
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-600"
            }`}
          >
            <TrendingUp className="w-3 h-3" />
            {change > 0 ? "+" : ""}
            {change}%
          </span>
        )}
      </div>

      <p className="text-sm text-gray-500 mt-5">
        {title}
      </p>

      <h3 className="text-3xl font-black text-gray-900 mt-1">
        ₹{Number(amount).toLocaleString("en-IN")}
      </h3>

      <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
        <ShoppingBag className="w-4 h-4" />
        {orders} completed orders
      </div>
    </div>
  );
}
