"use client";

import OrderStatus from "./OrderStatus";

export default function OrderTable({
  orders = [],
  onSelect,
}) {
  if (orders.length === 0) {
    return (
      <div className="bg-white border border-gray-100 rounded-3xl p-10 text-center">
        <h3 className="text-lg font-bold text-gray-900">
          No orders yet
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          New student bookings will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
      <div className="p-5 border-b border-gray-100">
        <h2 className="text-xl font-black text-gray-900">
          Recent orders
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Manage your incoming student bookings.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase">
                Order
              </th>

              <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase">
                Student
              </th>

              <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase">
                Date
              </th>

              <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase">
                Amount
              </th>

              <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id || index}
                onClick={() => onSelect?.(order)}
                className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer transition"
              >
                <td className="px-5 py-4">
                  <p className="font-bold text-gray-900">
                    #{order.id || index + 1}
                  </p>

                  <p className="text-xs text-gray-400">
                    {order.service || "Service"}
                  </p>
                </td>

                <td className="px-5 py-4 text-sm text-gray-700">
                  {order.customer || "Student"}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {order.date || "-"}
                </td>

                <td className="px-5 py-4 font-bold text-gray-900">
                  ₹{order.amount || 0}
                </td>

                <td className="px-5 py-4">
                  <OrderStatus
                    status={order.status || "Pending"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}