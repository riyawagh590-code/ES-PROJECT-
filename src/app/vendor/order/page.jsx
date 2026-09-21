"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Clock,
  MapPin,
  Phone,
  User,
} from "lucide-react";

const initialOrders = [
  {
    id: "#CW-3020",
    student: "Priya Kulkarni",
    phone: "+91 98223 63287",
    location: "Hostel 1, Room 342",
    service: "Monthly Veg Meal Pass (30 Days)",
    slot: "Daily Lunch & Dinner",
    amount: 2850,
    status: "Pending",
  },
  {
    id: "#CW-2283",
    student: "Rohan Patel",
    phone: "+91 98223 27100",
    location: "Hostel 3, Room 310",
    service: "Monthly Veg Meal Pass (30 Days)",
    slot: "Daily Lunch & Dinner",
    amount: 2850,
    status: "Pending",
  },
  {
    id: "#CW-7624",
    student: "Riya Sharma",
    phone: "+91 98223 37147",
    location: "Hostel 3, Room 176",
    service: "Monthly Veg Meal Pass (30 Days)",
    slot: "Daily Lunch & Dinner",
    amount: 2850,
    status: "Pending",
  },
  {
    id: "#CW-1025",
    student: "Abhinav Sharma",
    phone: "+91 98765 43210",
    location: "Alandi Road Gate",
    service: "Lunch & Dinner Unlimited Pass",
    slot: "1:00 PM - 2:30 PM",
    amount: 2800,
    status: "Pending",
  },
];

export default function VendorOrders() {
  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (id, status) => {
    setOrders((current) =>
      current.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const pending = orders.filter((order) => order.status === "Pending");
  const accepted = orders.filter((order) => order.status === "Accepted");
  const completed = orders.filter((order) => order.status === "Completed");

  return (
    <main className="min-h-screen bg-[#f8f4f5]">

      <header className="border-b bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-wide text-[#9a7c70]">
            Vendor Order Management
          </p>

          <div className="mt-1 flex flex-col justify-between gap-4 md:flex-row md:items-center">

            <div>
              <h1 className="text-3xl font-bold text-[#424b55]">
                Incoming Requests
              </h1>

              <p className="text-sm text-gray-500">
                Accept, reject and complete student bookings.
              </p>
            </div>

            <Link
              href="/vendor"
              className="rounded-xl border px-5 py-3 text-sm font-semibold"
            >
              ← Dashboard
            </Link>

          </div>

        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Summary */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl bg-orange-50 p-5">
            <p className="text-sm text-orange-700">
              Pending
            </p>
            <p className="mt-1 text-3xl font-bold text-orange-800">
              {pending.length}
            </p>
          </div>

          <div className="rounded-2xl bg-purple-50 p-5">
            <p className="text-sm text-purple-700">
              Accepted
            </p>
            <p className="mt-1 text-3xl font-bold text-purple-800">
              {accepted.length}
            </p>
          </div>

          <div className="rounded-2xl bg-emerald-50 p-5">
            <p className="text-sm text-emerald-700">
              Completed
            </p>
            <p className="mt-1 text-3xl font-bold text-emerald-800">
              {completed.length}
            </p>
          </div>

        </div>

        {/* Orders */}
        <div className="space-y-5">

          {orders.map((order) => (

            <div
              key={order.id}
              className="rounded-2xl border-l-4 border-orange-400 bg-white p-6 shadow-sm"
            >

              <div className="flex flex-col justify-between gap-5 lg:flex-row">

                <div className="flex-1">

                  <div className="mb-3 flex flex-wrap items-center gap-3">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        order.status === "Pending"
                          ? "bg-orange-100 text-orange-700"
                          : order.status === "Accepted"
                          ? "bg-purple-100 text-purple-700"
                          : order.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>

                    <span className="text-sm font-semibold text-gray-500">
                      {order.id}
                    </span>

                  </div>

                  <h2 className="text-xl font-bold text-[#424b55]">
                    {order.service}
                  </h2>

                  <div className="mt-4 grid gap-3 text-sm text-gray-600 sm:grid-cols-2">

                    <p className="flex items-center gap-2">
                      <User size={16} />
                      <strong>{order.student}</strong>
                    </p>

                    <p className="flex items-center gap-2">
                      <Phone size={16} />
                      {order.phone}
                    </p>

                    <p className="flex items-center gap-2">
                      <MapPin size={16} />
                      {order.location}
                    </p>

                    <p className="flex items-center gap-2">
                      <Clock size={16} />
                      {order.slot}
                    </p>

                  </div>

                </div>

                <div className="flex min-w-[220px] flex-col items-start justify-between gap-4 lg:items-end">

                  <div className="text-left lg:text-right">
                    <p className="text-sm text-gray-500">
                      Order Value
                    </p>

                    <p className="text-3xl font-bold text-[#424b55]">
                      ₹{order.amount.toLocaleString()}
                    </p>

                    <p className="text-sm font-semibold text-emerald-600">
                      Net: ₹{Math.round(order.amount * 0.9).toLocaleString()}
                    </p>
                  </div>

                  {order.status === "Pending" && (

                    <div className="flex gap-2">

                      <button
                        onClick={() =>
                          updateStatus(order.id, "Rejected")
                        }
                        className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2 font-semibold text-red-600 hover:bg-red-50"
                      >
                        <XCircle size={17} />
                        Decline
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(order.id, "Accepted")
                        }
                        className="flex items-center gap-2 rounded-xl bg-[#424b55] px-4 py-2 font-semibold text-white hover:opacity-90"
                      >
                        <CheckCircle2 size={17} />
                        Accept
                      </button>

                    </div>

                  )}

                  {order.status === "Accepted" && (

                    <button
                      onClick={() =>
                        updateStatus(order.id, "Completed")
                      }
                      className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white"
                    >
                      <CheckCircle2 size={18} />
                      Mark Completed
                    </button>

                  )}

                  {order.status === "Completed" && (
                    <span className="flex items-center gap-2 font-semibold text-emerald-600">
                      <CheckCircle2 size={18} />
                      Order Completed
                    </span>
                  )}

                  {order.status === "Rejected" && (
                    <span className="font-semibold text-red-600">
                      Order Rejected
                    </span>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}