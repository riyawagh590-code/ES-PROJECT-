"use client";

export default function BookingSummary({
  service,
  vendor,
  date,
  time,
  quantity = 1,
  price = 0,
}) {
  const total = Number(price) * Number(quantity);

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
      <p className="text-sm font-bold text-purple-600">
        Booking summary
      </p>

      <h2 className="text-xl font-black text-gray-900 mt-1">
        {service || "Selected service"}
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Vendor</span>
          <span className="font-semibold text-gray-900 text-right">
            {vendor || "Selected vendor"}
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Date</span>
          <span className="font-semibold text-gray-900">
            {date || "-"}
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Time</span>
          <span className="font-semibold text-gray-900">
            {time || "-"}
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Quantity</span>
          <span className="font-semibold text-gray-900">
            {quantity}
          </span>
        </div>

        <div className="border-t border-gray-100 pt-4 flex justify-between">
          <span className="font-bold text-gray-900">
            Total
          </span>

          <span className="text-xl font-black text-purple-600">
            ₹{total}
          </span>
        </div>
      </div>
    </div>
  );
}