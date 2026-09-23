"use client";

import { Search, X } from "lucide-react";

export default function SearchBar({
  value = "",
  onChange,
  placeholder = "Search services, food, laundry, hostels...",
}) {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const clearSearch = () => {
    if (onChange) {
      onChange("");
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex min-h-[58px] items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition focus-within:border-purple-300 focus-within:ring-4 focus-within:ring-purple-50">
        <Search
          size={21}
          className="mr-3 shrink-0 text-slate-400"
        />

        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
        />

        {value && (
          <button
            type="button"
            onClick={clearSearch}
            className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Clear search"
          >
            <X size={17} />
          </button>
        )}
      </div>
    </div>
  );
}