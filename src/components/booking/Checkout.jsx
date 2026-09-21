"use client";

import { useState } from "react";
import { CreditCard, Smartphone, Wallet, ArrowLeft, ShieldCheck } from "lucide-react";

export default function Checkout({
  service,
  bookingDetails,
  onBack,
  onConfirm,
}) {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [loading, setLoading] = useState(false);

  const price = bookingDetails?.price || service?.price || 0;

  const handlePayment = () => {
    setLoading(true);

    // Frontend demo payment simulation
    setTimeout(() => {
      setLoading(false);

      if (onConfirm) {
        onConfirm({
          ...bookingDetails,
          paymentMethod,
          amount: price,
          paymentStatus: "Paid",
        });
      }
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full border border-[#ddd5e5] bg-white flex items-center justify-center hover:bg-[#f5f0f7] transition"
        >
          <ArrowLeft size={18} />
        </button>

        <div>
          <p className="text-sm text-[#8a7880]">Booking</p>
          <h2 className="text-2xl font-bold text-[#3f4852]">
            Checkout
          </h2>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white border border-[#e4dce3] rounded-3xl p-6 shadow-sm mb-5">

        <div className="flex justify-between items-start gap-4 mb-5">
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-[#927c78]">
              Service
            </p>

            <h3 className="text-xl font-bold text-[#414b55] mt-1">
              {service?.name || "Campus Service"}
            </h3>

            <p className="text-sm text-[#82747a] mt-1">
              {service?.area || "Campus Area"}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-[#927c78]">Total</p>

            <p className="text-2xl font-bold text-[#3f4852]">
              ₹{price}
            </p>
          </div>
        </div>

        {/* Booking information */}
        <div className="bg-[#faf6f8] rounded-2xl p-4 space-y-3">

          {bookingDetails?.date && (
            <div className="flex justify-between text-sm">
              <span className="text-[#82747a]">Date</span>
              <span className="font-semibold text-[#454d56]">
                {bookingDetails.date}
              </span>
            </div>
          )}

          {bookingDetails?.slot && (
            <div className="flex justify-between text-sm">
              <span className="text-[#82747a]">Time Slot</span>
              <span className="font-semibold text-[#454d56]">
                {bookingDetails.slot}
              </span>
            </div>
          )}

          {bookingDetails?.location && (
            <div className="flex justify-between text-sm gap-4">
              <span className="text-[#82747a]">Location</span>
              <span className="font-semibold text-[#454d56] text-right">
                {bookingDetails.location}
              </span>
            </div>
          )}

        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white border border-[#e4dce3] rounded-3xl p-6 shadow-sm">

        <div className="flex items-center gap-2 mb-5">
          <CreditCard size={19} className="text-[#6551a8]" />

          <h3 className="text-lg font-bold text-[#414b55]">
            Select Payment Method
          </h3>
        </div>

        <div className="space-y-3">

          {/* UPI */}
          <button
            onClick={() => setPaymentMethod("upi")}
            className={`w-full p-4 rounded-2xl border flex items-center gap-4 text-left transition ${
              paymentMethod === "upi"
                ? "border-[#4b5560] bg-[#f8f3f7]"
                : "border-[#e1d9df] bg-white hover:bg-[#faf7f9]"
            }`}
          >
            <div className="w-11 h-11 rounded-xl bg-[#e7f7ef] flex items-center justify-center">
              <Smartphone size={20} className="text-[#087f5b]" />
            </div>

            <div className="flex-1">
              <p className="font-bold text-[#414b55]">
                UPI
              </p>

              <p className="text-xs text-[#8a7880]">
                Google Pay, PhonePe, Paytm
              </p>
            </div>

            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                paymentMethod === "upi"
                  ? "border-[#4b5560]"
                  : "border-[#cfc6cc]"
              }`}
            >
              {paymentMethod === "upi" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#4b5560]" />
              )}
            </div>
          </button>

          {/* Card */}
          <button
            onClick={() => setPaymentMethod("card")}
            className={`w-full p-4 rounded-2xl border flex items-center gap-4 text-left transition ${
              paymentMethod === "card"
                ? "border-[#4b5560] bg-[#f8f3f7]"
                : "border-[#e1d9df] bg-white hover:bg-[#faf7f9]"
            }`}
          >
            <div className="w-11 h-11 rounded-xl bg-[#eee9ff] flex items-center justify-center">
              <CreditCard size={20} className="text-[#6551a8]" />
            </div>

            <div className="flex-1">
              <p className="font-bold text-[#414b55]">
                Debit / Credit Card
              </p>

              <p className="text-xs text-[#8a7880]">
                Visa, Mastercard, RuPay
              </p>
            </div>

            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                paymentMethod === "card"
                  ? "border-[#4b5560]"
                  : "border-[#cfc6cc]"
              }`}
            >
              {paymentMethod === "card" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#4b5560]" />
              )}
            </div>
          </button>

          {/* Wallet */}
          <button
            onClick={() => setPaymentMethod("wallet")}
            className={`w-full p-4 rounded-2xl border flex items-center gap-4 text-left transition ${
              paymentMethod === "wallet"
                ? "border-[#4b5560] bg-[#f8f3f7]"
                : "border-[#e1d9df] bg-white hover:bg-[#faf7f9]"
            }`}
          >
            <div className="w-11 h-11 rounded-xl bg-[#fff3d9] flex items-center justify-center">
              <Wallet size={20} className="text-[#b86a00]" />
            </div>

            <div className="flex-1">
              <p className="font-bold text-[#414b55]">
                Wallet
              </p>

              <p className="text-xs text-[#8a7880]">
                Campus wallet / demo balance
              </p>
            </div>

            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                paymentMethod === "wallet"
                  ? "border-[#4b5560]"
                  : "border-[#cfc6cc]"
              }`}
            >
              {paymentMethod === "wallet" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#4b5560]" />
              )}
            </div>
          </button>

        </div>

        {/* Demo Payment Notice */}
        <div className="mt-5 flex gap-3 p-4 rounded-2xl bg-[#eefaf5] border border-[#cceee0]">
          <ShieldCheck
            size={20}
            className="text-[#07835d] mt-0.5"
          />

          <div>
            <p className="text-sm font-bold text-[#176b53]">
              Secure demo checkout
            </p>

            <p className="text-xs text-[#578476] mt-1">
              This is a frontend prototype. No real payment will be charged.
            </p>
          </div>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full mt-6 bg-[#46515b] hover:bg-[#37414a] text-white py-4 rounded-2xl font-bold text-base transition shadow-md disabled:opacity-60"
        >
          {loading
            ? "Processing..."
            : `Pay ₹${price} & Confirm Booking`}
        </button>

      </div>
    </div>
  );
}