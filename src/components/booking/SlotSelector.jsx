"use client";

export default function SlotSelector({
  booking,
  updateBooking,
  service,
  onContinue,
}) {
  const slots = [
    {
      id: "morning",
      time: "10:00 AM – 11:00 AM",
      label: "Morning",
    },
    {
      id: "afternoon",
      time: "1:00 PM – 2:00 PM",
      label: "Afternoon",
    },
    {
      id: "evening",
      time: "5:00 PM – 6:00 PM",
      label: "Evening",
    },
    {
      id: "night",
      time: "7:00 PM – 8:00 PM",
      label: "Late Evening",
    },
  ];

  return (
    <div className="space-y-6">

      {/* SERVICE SUMMARY */}
      <div className="rounded-2xl bg-gradient-to-r from-[#f7effc] to-[#fff4e8] p-5">
        <div className="flex items-start justify-between gap-4">

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8d6e63]">
              Selected service
            </p>

            <h3 className="mt-1 text-xl font-extrabold text-[#424952]">
              {service.name}
            </h3>

            <p className="mt-1 text-sm text-[#786d73]">
              📍 {service.area}
            </p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-extrabold text-[#424952]">
              ₹{service.price}
            </p>

            <p className="text-xs text-[#8d7d83]">
              {service.unit}
            </p>
          </div>
        </div>
      </div>

      {/* DATE */}
      <div>
        <label className="mb-2 block text-sm font-bold text-[#48505a]">
          1. Choose date
        </label>

        <input
          type="date"
          value={booking.date}
          onChange={(e) =>
            updateBooking("date", e.target.value)
          }
          min={new Date().toISOString().split("T")[0]}
          className="w-full rounded-xl border border-[#dfd2dc] bg-white px-4 py-3 text-[#424952] outline-none transition focus:border-[#7456d8] focus:ring-4 focus:ring-[#7456d8]/10"
        />
      </div>

      {/* SLOTS */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <label className="text-sm font-bold text-[#48505a]">
            2. Select time slot
          </label>

          <span className="text-xs font-semibold text-[#8d7b82]">
            Available today
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {slots.map((slot) => {
            const selected = booking.slot === slot.id;

            return (
              <button
                key={slot.id}
                type="button"
                onClick={() =>
                  updateBooking("slot", slot.id)
                }
                className={`rounded-2xl border p-4 text-left transition ${
                  selected
                    ? "border-[#7456d8] bg-[#7456d8] text-white shadow-lg shadow-[#7456d8]/20"
                    : "border-[#dfd2dc] bg-white text-[#48505a] hover:border-[#b9a7c8] hover:bg-[#faf6fb]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold">
                    {slot.label}
                  </span>

                  {selected && (
                    <span className="text-lg">
                      ✓
                    </span>
                  )}
                </div>

                <p
                  className={`mt-1 text-sm ${
                    selected
                      ? "text-white/80"
                      : "text-[#8c7d83]"
                  }`}
                >
                  {slot.time}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ADDRESS */}
      <div>
        <label className="mb-2 block text-sm font-bold text-[#48505a]">
          3. Delivery / pickup location
        </label>

        <input
          type="text"
          value={booking.address}
          onChange={(e) =>
            updateBooking("address", e.target.value)
          }
          placeholder="e.g. Hostel 3, Room 210"
          className="w-full rounded-xl border border-[#dfd2dc] px-4 py-3 outline-none transition placeholder:text-[#aaa0a5] focus:border-[#7456d8] focus:ring-4 focus:ring-[#7456d8]/10"
        />
      </div>

      {/* NOTES */}
      <div>
        <label className="mb-2 block text-sm font-bold text-[#48505a]">
          Special instructions
          <span className="ml-2 font-normal text-[#9b8c92]">
            Optional
          </span>
        </label>

        <textarea
          value={booking.notes}
          onChange={(e) =>
            updateBooking("notes", e.target.value)
          }
          rows={3}
          placeholder="Any instructions for the vendor?"
          className="w-full resize-none rounded-xl border border-[#dfd2dc] px-4 py-3 outline-none transition placeholder:text-[#aaa0a5] focus:border-[#7456d8] focus:ring-4 focus:ring-[#7456d8]/10"
        />
      </div>

      {/* BUTTON */}
      <button
        onClick={onContinue}
        className="w-full rounded-xl bg-[#424952] px-5 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#343a42]"
      >
        Continue to checkout →
      </button>
    </div>
  );
}