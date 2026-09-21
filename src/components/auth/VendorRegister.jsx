"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VendorRegister() {
  const router = useRouter();

  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    category: "",
    location: "",
    description: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some((value) => !value)) {
      alert("Please fill all the required fields.");
      return;
    }

    // Frontend demo vendor registration
    localStorage.setItem(
      "vendorProfile",
      JSON.stringify(form)
    );

    localStorage.setItem("userRole", "vendor");

    alert("Vendor account created successfully!");

    router.push("/vendor");
  };

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-7">
        <span className="inline-flex rounded-full bg-[#FFF0D9] px-3 py-1.5 text-xs font-bold text-[#B76500]">
          🏪 VENDOR PARTNER
        </span>

        <h1 className="mt-4 text-3xl font-bold text-[#252938]">
          Register your business
        </h1>

        <p className="mt-2 text-sm leading-6 text-[#777985]">
          Bring your service closer to students and manage
          bookings, availability and orders from your vendor portal.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Business + Owner */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#454956]">
              Business / Service name *
            </label>

            <input
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              placeholder="e.g. Annapurna Homely Mess"
              className="input-style"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#454956]">
              Owner / Manager name *
            </label>

            <input
              name="ownerName"
              value={form.ownerName}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className="input-style"
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#454956]">
              Business email *
            </label>

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="business@example.com"
              className="input-style"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#454956]">
              Mobile number *
            </label>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98220 12345"
              className="input-style"
            />
          </div>
        </div>

        {/* Category + Location */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#454956]">
              Service category *
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="input-style"
            >
              <option value="">Select category</option>
              <option value="mess">Mess / Tiffin</option>
              <option value="laundry">Laundry</option>
              <option value="cleaning">Cleaning</option>
              <option value="pg">PG / Hostel</option>
              <option value="cafe">Cafe / Restaurant</option>
              <option value="other">Other Student Service</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#454956]">
              Campus location *
            </label>

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="e.g. 300m from Main Gate"
              className="input-style"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#454956]">
            About your service *
          </label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            placeholder="Tell students what makes your service useful..."
            className="input-style resize-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#454956]">
            Create password *
          </label>

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create a secure password"
            className="input-style"
          />
        </div>

        {/* Vendor Benefits */}
        <div className="rounded-2xl border border-[#F1DDBE] bg-[#FFF9EE] p-4">
          <p className="text-sm font-bold text-[#454956]">
            Your vendor portal will include
          </p>

          <div className="mt-3 grid gap-2 text-sm text-[#696B77] md:grid-cols-2">
            <p>✓ Incoming student orders</p>
            <p>✓ Accept / reject bookings</p>
            <p>✓ Service availability</p>
            <p>✓ Order status tracking</p>
            <p>✓ Earnings overview</p>
            <p>✓ Customer reviews</p>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-[#252938] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#252938]/15 transition hover:-translate-y-0.5 hover:bg-[#343847]"
        >
          Register as Vendor →
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#777985]">
        Already registered?{" "}
        <button
          onClick={() => router.push("/login")}
          className="font-bold text-[#4F46E5] hover:underline"
        >
          Log in
        </button>
      </p>

      <style jsx>{`
        .input-style {
          width: 100%;
          border-radius: 12px;
          border: 1px solid #dedce5;
          background: white;
          padding: 14px 16px;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
        }

        .input-style:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
        }
      `}</style>
    </div>
  );
}