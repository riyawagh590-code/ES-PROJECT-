"use client";

import { Copy, CheckCircle2, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function PinDisplay({ pin, service, bookingId }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!pin) return;

    try {
      await navigator.clipboard.writeText(String(pin));
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log("Unable to copy PIN");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">

      {/* Main PIN Card */}
      <div className="bg-white border border-[#e3d9e1] rounded-3xl shadow-lg overflow-hidden">

        {/* Top section */}
        <div className="bg-[#46515b] text-white p-7 text-center">

          <div className="mx-auto w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
            <ShieldCheck size={28} />
          </div>

          <p className="text-sm font-semibold text-white/70 uppercase tracking-wider">
            Service Verification PIN
          </p>

          <h2 className="text-2xl font-bold mt-1">
            Booking Confirmed
          </h2>

          <p className="text-sm text-white/70 mt-2">
            Show this PIN to the vendor after the service is delivered.
          </p>

        </div>

        {/* PIN section */}
        <div className="p-7 text-center">

          <p className="text-sm text-[#8a7880] font-medium mb-3">
            Your 4-digit verification code
          </p>

          <div className="flex justify-center gap-3 mb-5">
            {String(pin || "0000")
              .padStart(4, "0")
              .slice(0, 4)
              .split("")
              .map((digit, index) => (
                <div
                  key={index}
                  className="w-14 h-16 sm:w-16 sm:h-18 rounded-2xl bg-[#f7f1f5] border border-[#dcd0d9] flex items-center justify-center"
                >
                  <span className="text-3xl font-extrabold text-[#414b55]">
                    {digit}
                  </span>
                </div>
              ))}
          </div>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#d9ced7] bg-white hover:bg-[#f8f3f7] text-sm font-semibold text-[#4a535d] transition"
          >
            {copied ? (
              <>
                <CheckCircle2 size={16} className="text-[#07835d]" />
                PIN Copied
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy PIN
              </>
            )}
          </button>

          {/* Service information */}
          <div className="mt-7 p-4 rounded-2xl bg-[#faf6f8] text-left">

            <div className="flex justify-between gap-4 mb-3">
              <span className="text-sm text-[#8a7880]">
                Service
              </span>

              <span className="text-sm font-bold text-[#414b55] text-right">
                {service?.name || "Campus Service"}
              </span>
            </div>

            {bookingId && (
              <div className="flex justify-between gap-4">
                <span className="text-sm text-[#8a7880]">
                  Booking ID
                </span>

                <span className="text-sm font-bold text-[#414b55]">
                  #{bookingId}
                </span>
              </div>
            )}

          </div>

          {/* Important notice */}
          <div className="mt-5 flex gap-3 text-left p-4 rounded-2xl bg-[#fff8e8] border border-[#f1dfad]">

            <ShieldCheck
              size={19}
              className="text-[#a76b00] shrink-0 mt-0.5"
            />

            <div>
              <p className="text-sm font-bold text-[#815600]">
                Keep your PIN private
              </p>

              <p className="text-xs text-[#977849] mt-1">
                Only share it with the vendor when your service is being
                completed.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}