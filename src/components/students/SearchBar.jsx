"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

export default function SearchBar({
  placeholder = "Search services, vendors or locations...",
  onSearch,
}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;

    setValue(newValue);
    onSearch?.(newValue);
  };

  const clearSearch = () => {
    setValue("");
    onSearch?.("");
  };

  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-2xl outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-50 transition"
      />

      {value && (
        <button
          onClick={clearSearch}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}