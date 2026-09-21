"use client";

import { X } from "lucide-react";

export default function Modal({
  open,
  onClose,
  title,
  children,
  width = "max-w-lg",
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#201b24]/60 p-4 backdrop-blur-sm">
      <div
        className={`relative max-h-[90vh] w-full ${width} overflow-y-auto rounded-3xl border border-[#e4dddd] bg-white shadow-2xl`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#eee6e6] bg-white px-6 py-5">
          <h2 className="text-xl font-extrabold text-[#424b55]">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="rounded-full bg-[#f5eeee] p-2 text-[#514b55] transition hover:bg-[#ebe3e3]"
          >
            <X size={19} />
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}