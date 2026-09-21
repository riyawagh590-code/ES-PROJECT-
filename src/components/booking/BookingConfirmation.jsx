"use client";

import PinDisplay from "./PinDisplay";

export default function BookingConfirmation({
  booking,
  onClose,
  onViewBookings,
}) {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#241c2b]/60 p-4 backdrop-blur-sm">

      <div className="w-full max-w-lg overflow-hidden rounded-[30px] bg-white shadow-2xl">

        {/* SUCCESS HEADER */}
        <div className="bg-gradient-to-br from-[#7456d8] via-[#8b65db] to-[#ef8f6b] px-6 py-8 text-center text-white">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl backdrop-blur">
            ✓
          </div>

          <h2 className="mt-4 text-2xl font-extrabold">
            Booking Confirmed!
          </h2>

          <p className="mt-2 text-sm text-white/80">
            Your Campus Concierge service is booked.
          </p>
        </div>

        <div className="space-y-5 p-6">

          {/* ORDER ID */}
          <div className="flex items-center justify-between rounded-xl bg-[#f8f3f8] px-4 py-3">

            <div>
              <p className="text-xs font-semibold uppercase text-[#94858b]">
                Booking ID
              </p>

              <p className="mt-1 font-extrabold text-[#424952]">
                #{booking.id}
              </p>
            </div>

            <span className="rounded-full bg-[#dff9ed] px-3 py-1 text-xs font-bold text-[#087453]">
              Confirmed
            </span>
          </div>

          {/* SERVICE */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#927d83]">
              Your service
            </p>

            <h3 className="mt-1 text-xl font-extrabold text-[#424952]">
              {booking.serviceName}
            </h3>

            <div className="mt-3 space-y-2 text-sm text-[#71676d]">
              <p>
                📅 <b>Date:</b> {booking.date}
              </p>

              <p>
                🕐 <b>Slot:</b> {booking.slot}
              </p>

              <p>
                📍 <b>Location:</b>{" "}
                {booking.address || "Not specified"}
              </p>
            </div>
          </div>

          {/* PIN */}
          <PinDisplay pin={booking.pin} />

          {/* PRICE */}
          <div className="flex items-center justify-between border-t border-[#eadfe7] pt-4">

            <span className="font-semibold text-[#74686e]">
              Amount paid
            </span>

            <span className="text-xl font-extrabold text-[#424952]">
              ₹{booking.price}
            </span>
          </div>

          {/* BUTTONS */}
          <div className="space-y-3">

            <button
              onClick={onViewBookings}
              className="w-full rounded-xl bg-[#424952] px-5 py-4 font-bold text-white shadow-lg transition hover:bg-[#343a42]"
            >
              View My Bookings
            </button>

            <button
              onClick={onClose}
              className="w-full rounded-xl border border-[#ded2db] bg-white px-5 py-3 font-bold text-[#555b62] transition hover:bg-[#faf6fa]"
            >
              Continue Exploring
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}