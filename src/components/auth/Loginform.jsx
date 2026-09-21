"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    // Frontend demo login
    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);

    if (role === "student") {
      router.push("/student");
    } else {
      router.push("/vendor");
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="mb-7 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F46E5] text-2xl text-white shadow-lg">
          ✦
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-[#252938]">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-[#777985]">
          Your campus life, sorted.
        </p>
      </div>

      {/* Role Selection */}
      <div className="mb-6 rounded-2xl bg-[#F3F1F8] p-1.5">
        <div className="grid grid-cols-2 gap-1.5">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
              role === "student"
                ? "bg-white text-[#4F46E5] shadow-sm"
                : "text-[#777985]"
            }`}
          >
            🎓 Student
          </button>

          <button
            type="button"
            onClick={() => setRole("vendor")}
            className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
              role === "vendor"
                ? "bg-white text-[#4F46E5] shadow-sm"
                : "text-[#777985]"
            }`}
          >
            🏪 Vendor
          </button>
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#454956]">
            Email address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={
              role === "student"
                ? "student@college.edu"
                : "vendor@business.com"
            }
            className="w-full rounded-xl border border-[#DEDCE5] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/10"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#454956]">
              Password
            </label>

            <button
              type="button"
              className="text-xs font-semibold text-[#4F46E5]"
            >
              Forgot password?
            </button>
          </div>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full rounded-xl border border-[#DEDCE5] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/10"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#252938] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#252938]/15 transition hover:-translate-y-0.5 hover:bg-[#343847]"
        >
          Login as {role === "student" ? "Student" : "Vendor"} →
        </button>
      </form>

      {/* Demo Login */}
      <div className="mt-7 rounded-2xl border border-[#E8E4EE] bg-[#FAF8FC] p-4">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#918A96]">
          Quick demo login
        </p>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => {
              setRole("student");
              setEmail("student@student.com");
              setPassword("123456");
            }}
            className="rounded-lg border border-[#DDD8E7] bg-white px-3 py-2 text-xs font-semibold text-[#454956] hover:border-[#4F46E5]"
          >
            Student Demo
          </button>

          <button
            type="button"
            onClick={() => {
              setRole("vendor");
              setEmail("vendor@vendor.com");
              setPassword("123456");
            }}
            className="rounded-lg border border-[#DDD8E7] bg-white px-3 py-2 text-xs font-semibold text-[#454956] hover:border-[#4F46E5]"
          >
            Vendor Demo
          </button>
        </div>
      </div>

      {/* Register */}
      <p className="mt-7 text-center text-sm text-[#777985]">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={() => router.push("/register")}
          className="font-bold text-[#4F46E5] hover:underline"
        >
          Create one
        </button>
      </p>
    </div>
  );
}