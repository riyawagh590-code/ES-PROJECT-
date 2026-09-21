"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [role, setRole] = useState("student");

  function handleLogin(e) {
    e.preventDefault();

    if (role === "student") {
      router.push("/student");
    } else {
      router.push("/vendor");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md card p-8">
        <Link
          href="/"
          className="text-2xl font-black text-[#292532]"
        >
          Studentica<span className="text-[#6c4bf4]">.</span>
        </Link>

        <h1 className="text-3xl font-black mt-8">
          Welcome back 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Sign in to continue to your campus hub.
        </p>

        <div className="grid grid-cols-2 gap-2 mt-7 bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setRole("student")}
            className={`py-3 rounded-lg font-bold ${
              role === "student"
                ? "bg-white shadow text-[#6c4bf4]"
                : "text-gray-500"
            }`}
          >
            Student
          </button>

          <button
            onClick={() => setRole("vendor")}
            className={`py-3 rounded-lg font-bold ${
              role === "vendor"
                ? "bg-white shadow text-[#6c4bf4]"
                : "text-gray-500"
            }`}
          >
            Vendor
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-5 mt-7">
          <div>
            <label className="font-bold text-sm">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 border border-gray-200 rounded-xl p-3 outline-none focus:border-[#6c4bf4]"
              required
            />
          </div>

          <div>
            <label className="font-bold text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full mt-2 border border-gray-200 rounded-xl p-3 outline-none focus:border-[#6c4bf4]"
              required
            />
          </div>

          <button className="primary-btn w-full">
            Login as {role === "student" ? "Student" : "Vendor"} →
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-7">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-[#6c4bf4] font-bold"
          >
            Create one
          </Link>
        </p>

        <div className="mt-6 p-4 rounded-xl bg-purple-50 text-sm text-purple-700">
          <b>Demo mode:</b> Login does not require a backend yet.
        </div>
      </div>
    </main>
  );
}