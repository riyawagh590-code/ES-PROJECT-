"use client";

import { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  CheckCircle2,
} from "lucide-react";

export default function ServiceManager({
  initialServices = [],
}) {
  const [services, setServices] = useState(
    initialServices
  );

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
  });

  const addService = () => {
    if (!form.name || !form.price) return;

    setServices((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...form,
        active: true,
      },
    ]);

    setForm({
      name: "",
      price: "",
      description: "",
    });
  };

  const toggleService = (id) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id
          ? {
              ...service,
              active: !service.active,
            }
          : service
      )
    );
  };

  const deleteService = (id) => {
    setServices((prev) =>
      prev.filter((service) => service.id !== id)
    );
  };

  return (
    <div className="space-y-6">
      {/* Add service */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-purple-50 flex items-center justify-center">
            <Plus className="w-5 h-5 text-purple-600" />
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900">
              Add a service
            </h2>

            <p className="text-sm text-gray-500">
              Add services students can book.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            placeholder="Service name"
            className="px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-purple-500"
          />

          <input
            type="number"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
            placeholder="Price"
            className="px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-purple-500"
          />
        </div>

        <textarea
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
          placeholder="Short description"
          rows="3"
          className="w-full mt-4 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-purple-500 resize-none"
        />

        <button
          onClick={addService}
          className="mt-4 flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-purple-600 transition"
        >
          <Plus className="w-4 h-4" />
          Add service
        </button>
      </div>

      {/* Services */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-black text-gray-900">
          Your services
        </h2>

        <div className="space-y-3 mt-5">
          {services.length === 0 ? (
            <p className="text-sm text-gray-500">
              No services added yet.
            </p>
          ) : (
            services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-gray-50"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900">
                      {service.name}
                    </h3>

                    {service.active && (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    )}
                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    {service.description}
                  </p>

                  <p className="font-black text-purple-600 mt-2">
                    ₹{service.price}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      toggleService(service.id)
                    }
                    className={`px-3 py-2 rounded-lg text-xs font-bold ${
                      service.active
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {service.active
                      ? "Active"
                      : "Inactive"}
                  </button>

                  <button className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-gray-500 hover:text-purple-600">
                    <Pencil className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() =>
                      deleteService(service.id)
                    }
                    className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-red-500 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}