"use client";

import { useState } from "react";
import SlotSelector from "./SlotSelector";
import Checkout from "./Checkout";

export default function BookingModal({
  service,
  isOpen,
  onClose,
  onBookingComplete,
}) {
  const [step, setStep] = useState(1);

  const [booking, setBooking] = useState({
    date: "",
    slot: "",
    address: "",
    notes: "",
  });

  if (!isOpen || !service) return null;

  const updateBooking = (field, value) => {
    setBooking((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleContinue = () => {
    if (!booking.date || !booking.slot) {
      alert("Please select a date and time slot.");
      return;
    }

    setStep(2);
  };

  const handleClose = () => {
    setStep(1);

    setBooking({
      date: "",
      slot: "",
      address: "",
      notes: "",
    });

    onClose();
  };

  const handlePaymentComplete = (finalBooking) => {
    if (onBookingComplete) {
      onBookingComplete({
        ...finalBooking,
        service,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#241c2b]/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-[28px] bg-white shadow-2xl">

        {/* HEADER */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#eadfe8] bg-white px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8d6e63]">
              {step === 1 ? "Schedule service" : "Review & pay"}
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-[#3f4650]">
              {service.name}
            </h2>
          </div>

          <button
            onClick={handleClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6edf4] text-xl text-[#4b5058] transition hover:bg-[#eadce8]"
          >
            ×
          </button>
        </div>

        {/* STEP INDICATOR */}
        <div className="flex items-center gap-3 px-6 pt-5">
          <div
            className={`h-2 flex-1 rounded-full ${
              step >= 1 ? "bg-[#7456d8]" : "bg-[#eadfe8]"
            }`}
          />

          <div
            className={`h-2 flex-1 rounded-full ${
              step >= 2 ? "bg-[#7456d8]" : "bg-[#eadfe8]"
            }`}
          />
        </div>

        <div className="px-6 pt-2 text-xs font-semibold text-[#8b7b80]">
          Step {step} of 2
        </div>

        {/* BODY */}
        <div className="p-6">
          {step === 1 && (
            <SlotSelector
              booking={booking}
              updateBooking={updateBooking}
              service={service}
              onContinue={handleContinue}
            />
          )}

          {step === 2 && (
            <Checkout
              service={service}
              booking={booking}
              onBack={() => setStep(1)}
              onComplete={handlePaymentComplete}
            />
          )}
        </div>
      </div>
    </div>
  );
}