"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Building2,
  GraduationCap,
  Mail,
  Phone,
  Lock,
  User,
} from "lucide-react";

export default function RegisterPage() {
  const [role, setRole] = useState("student");

  return (
    <main className="hex-bg min-h-screen py-10">
      <div className="mx-auto w-[94%] max-w-4xl">
        <Link
          href="/"
          className="mb-5 inline-flex items-center gap-2 text-sm font-bold"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl">
          <div className="bg-[#303944] p-8 text-white md:p-10">
            <div className="text-sm font-bold uppercase tracking-widest text-[#f4a340]">
              Join Studentica
            </div>

            <h1 className="mt-3 text-4xl font-black">
              Create your campus account.
            </h1>

            <p className="mt-3 text-gray-300">
              One account for campus services, bookings and connections.
            </p>
          </div>

          <div className="p-7 md:p-10">
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <button
                onClick={() => setRole("student")}
                className={`rounded-2xl border-2 p-5 text-left ${
                  role === "student"
                    ? "border-[#7357d9] bg-purple-50"
                    : "border-gray-200"
                }`}
              >
                <GraduationCap className="text-[#7357d9]" />
                <div className="mt-3 font-black">Student Account</div>
                <p className="mt-1 text-sm text-gray-500">
                  Book services and discover campus life.
                </p>
              </button>

              <button
                onClick={() => setRole("vendor")}
                className={`rounded-2xl border-2 p-5 text-left ${
                  role === "vendor"
                    ? "border-[#f4a340] bg-orange-50"
                    : "border-gray-200"
                }`}
              >
                <Building2 className="text-orange-500" />
                <div className="mt-3 font-black">Vendor Account</div>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your business and incoming bookings.
                </p>
              </button>
            </div>

            <form className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {role === "student" ? "Full Name" : "Owner / Manager Name"}
                </label>
                <div className="flex items-center gap-3 rounded-2xl border px-4">
                  <User size={18} className="text-gray-400" />
                  <input
                    className="w-full py-4 outline-none"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Mobile Number
                </label>
                <div className="flex items-center gap-3 rounded-2xl border px-4">
                  <Phone size={18} className="text-gray-400" />
                  <input
                    className="w-full py-4 outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {role === "vendor" && (
                <>
                  <div>
                    <label className="mb-2 block text-sm font-bold">
                      Business / Service Name
                    </label>
                    <input
                      className="w-full rounded-2xl border px-4 py-4 outline-none"
                      placeholder="e.g. Annapurna Homely Mess"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold">
                      Service Category
                    </label>
                    <select className="w-full rounded-2xl border px-4 py-4 outline-none">
                      <option>Mess</option>
                      <option>Laundry</option>
                      <option>Cleaning</option>
                      <option>PG / Housing</option>
                      <option>Cafe</option>
                    </select>
                  </div>
                </>
              )}

              {role === "student" && (
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    College / Campus
                  </label>
                  <input
                    className="w-full rounded-2xl border px-4 py-4 outline-none"
                    placeholder="MIT Academy of Engineering"
                  />
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Email Address
                </label>
                <div className="flex items-center gap-3 rounded-2xl border px-4">
                  <Mail size={18} className="text-gray-400" />
                  <input
                    type="email"
                    className="w-full py-4 outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Password
                </label>
                <div className="flex items-center gap-3 rounded-2xl border px-4">
                  <Lock size={18} className="text-gray-400" />
                  <input
                    type="password"
                    className="w-full py-4 outline-none"
                    placeholder="Create password"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="button"
                  className="w-full rounded-2xl bg-[#303944] py-4 font-bold text-white"
                >
                  Create {role === "student" ? "Student" : "Vendor"} Account
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already registered?{" "}
              <Link href="/login" className="font-bold text-[#7357d9]">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}