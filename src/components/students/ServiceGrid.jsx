"use client";

import ServiceCard from "./ServiceCard";

export default function ServiceGrid({
  services = [],
  onServiceClick,
}) {
  if (services.length === 0) {
    return (
      <div className="bg-white border border-gray-100 rounded-3xl p-10 text-center">
        <h3 className="text-xl font-bold text-gray-900">
          No services found
        </h3>

        <p className="text-gray-500 mt-2">
          Try changing your search or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id || index}
          service={service}
          onClick={onServiceClick}
        />
      ))}
    </div>
  );
}