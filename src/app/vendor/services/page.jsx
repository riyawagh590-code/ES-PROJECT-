"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2, ToggleLeft, ToggleRight } from "lucide-react";

const initialServices = [
  {
    id: 1,
    name: "Monthly Veg Meal Pass",
    description: "Daily lunch and dinner subscription",
    price: 2850,
    category: "Mess Subscription",
    active: true,
  },
  {
    id: 2,
    name: "Monthly Lunch Pass",
    description: "Unlimited lunch for 30 days",
    price: 1700,
    category: "Mess Subscription",
    active: true,
  },
  {
    id: 3,
    name: "Monthly Dinner Pass",
    description: "Unlimited dinner for 30 days",
    price: 1600,
    category: "Mess Subscription",
    active: true,
  },
  {
    id: 4,
    name: "7-Day Trial Pass",
    description: "Try our mess before subscribing",
    price: 750,
    category: "Trial",
    active: false,
  },
];

export default function VendorServices() {
  const [services, setServices] = useState(initialServices);

  const toggleService = (id) => {
    setServices((current) =>
      current.map((service) =>
        service.id === id
          ? { ...service, active: !service.active }
          : service
      )
    );
  };

  const deleteService = (id) => {
    setServices((current) =>
      current.filter((service) => service.id !== id)
    );
  };

  return (
    <main className="min-h-screen bg-[#f8f4f5]">

      <header className="border-b bg-white px-6 py-5">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#9a7c70]">
              Vendor Portal
            </p>

            <h1 className="text-3xl font-bold text-[#424b55]">
              My Services
            </h1>

            <p className="text-sm text-gray-500">
              Manage your menu, pricing and available services.
            </p>
          </div>

          <div className="flex gap-3">

            <Link
              href="/vendor"
              className="rounded-xl border px-4 py-3 font-semibold"
            >
              ← Dashboard
            </Link>

            <button className="flex items-center gap-2 rounded-xl bg-[#424b55] px-5 py-3 font-semibold text-white">
              <Plus size={18} />
              Add Service
            </button>

          </div>

        </div>

      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="grid gap-5 md:grid-cols-2">

          {services.map((service) => (

            <div
              key={service.id}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >

              <div className="flex justify-between gap-4">

                <div>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                    {service.category}
                  </span>

                  <h2 className="mt-4 text-xl font-bold text-[#424b55]">
                    {service.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>

                <div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      service.active
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {service.active ? "Active" : "Paused"}
                  </span>
                </div>

              </div>

              <div className="mt-6 flex items-end justify-between border-t pt-5">

                <div>
                  <p className="text-sm text-gray-500">
                    Student Price
                  </p>

                  <p className="text-2xl font-bold">
                    ₹{service.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex gap-2">

                  <button
                    onClick={() => toggleService(service.id)}
                    className="rounded-lg border p-2 hover:bg-gray-50"
                    title="Toggle service"
                  >
                    {service.active ? (
                      <ToggleRight className="text-emerald-600" />
                    ) : (
                      <ToggleLeft className="text-gray-400" />
                    )}
                  </button>

                  <button className="rounded-lg border p-2 hover:bg-gray-50">
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => deleteService(service.id)}
                    className="rounded-lg border p-2 text-red-500 hover:bg-red-50"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}