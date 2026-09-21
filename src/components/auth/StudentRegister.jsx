"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StudentRegister() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    hostel: "",
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

    const requiredFields = Object.values(form);

    if (requiredFields.some((value) => !value)) {
      alert("Please fill all the required fields.");
      return;
    }

    // Frontend-only registration
    localStorage.setItem(
      "studentProfile",
      JSON.stringify(form)
    );

    localStorage.setItem("userRole", "student");

    alert("Student account created successfully!");

    router.push("/student");
  };

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-7">
        <span className="inline-flex rounded-full bg-[#E8E5FF] px-3 py-1.5 text-xs font-bold text-[#4F46E5]">
          🎓 STUDENT ACCOUNT
        </span>

        <h1 className="mt-4 text-3xl font-bold text-[#252938]">
          Create your student account
        </h1>

        <p className="mt-2 text-sm leading-6 text-[#777985]">
          Join Campus Concierge and manage your mess, laundry,
          cleaning, PG and campus services from one place.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Email */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#454956]">
              Full name *
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Riya Sharma"
              className="input-style"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#454956]">
              Email address *
            </label>

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@college.edu"
              className="input-style"
            />
          </div>
        </div>

        {/* Phone + College */}
        <div className="grid gap-5 md:grid-cols-2">
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

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#454956]">
              College / University *
            </label>

            <input
              name="college"
              value={form.college}
              onChange={handleChange}
              placeholder="MIT Academy of Engineering"
              className="input-style"
            />
          </div>
        </div>

        {/* Year + Hostel */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#454956]">
              Academic year *
            </label>

            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              className="input-style"
            >
              <option value="">Select year</option>
              <option>1st Year / Fresher</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
              <option>Postgraduate</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#454956]">
              Hostel / PG
            </label>

            <input
              name="hostel"
              value={form.hostel}
              onChange={handleChange}
              placeholder="e.g. Hostel 3 / Sai Residency"
              className="input-style"
            />
          </div>
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

        {/* Benefits */}
        <div className="rounded-2xl border border-[#E4DEF4] bg-[#F8F6FF] p-4">
          <p className="text-sm font-bold text-[#454956]">
            Your student account includes
          </p>

          <div className="mt-3 grid gap-2 text-sm text-[#696B77] md:grid-cols-2">
            <p>✓ Mess & tiffin discovery</p>
            <p>✓ Doorstep laundry</p>
            <p>✓ Weekend cleaning</p>
            <p>✓ PG & hostel discovery</p>
            <p>✓ Roommate matching</p>
            <p>✓ Fresher Pass benefits</p>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-[#4F46E5] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#4F46E5]/20 transition hover:-translate-y-0.5 hover:bg-[#4338CA]"
        >
          Create Student Account →
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#777985]">
        Already have an account?{" "}
        <button
          onClick={() => router.push("/login")}
          className="font-bold text-[#4F46E5] hover:underline"
        >
          Log in
        </button>
      </p>

      {/* Local reusable style */}
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