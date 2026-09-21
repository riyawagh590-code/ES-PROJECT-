"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState("student");

  function handleSubmit(e) {
    e.preventDefault();

    if (role === "student") {
      router.push("/student");
    } else {
      router.push("/vendor");
    }
  }

  return (
    <main className="min-h-screen py-12 px-5">
      <div className="max-w-2xl mx-auto card p-7 md:p-10">
        <div className="flex justify-between items-start">
          <div>
            <Link
              href="/"
              className="text-2xl font-black"
            >
              Studentica<span className="text-[#6c4bf4]">.</span>
            </Link>

            <h1 className="text-3xl font-black mt-7">
              Create your account
            </h1>

            <p className="text-gray-500 mt-2">
              Join the campus community.
            </p>
          </div>

          <Link href="/" className="text-gray-400">
            ✕
          </Link>
        </div>

        {/* ROLE */}

        <div className="grid grid-cols-2 gap-4 mt-8">
          <button
            onClick={() => setRole("student")}
            className={`p-5 rounded-2xl border text-left ${
              role === "student"
                ? "border-[#6c4bf4] bg-purple-50"
                : "border-gray-200"
            }`}
          >
            <div className="text-3xl">🎓</div>
            <div className="font-black mt-2">Student</div>
            <div className="text-sm text-gray-500">
              Dorm & PG resident
            </div>
          </button>

          <button
            onClick={() => setRole("vendor")}
            className={`p-5 rounded-2xl border text-left ${
              role === "vendor"
                ? "border-[#ff8a3d] bg-orange-50"
                : "border-gray-200"
            }`}
          >
            <div className="text-3xl">🏪</div>
            <div className="font-black mt-2">Vendor</div>
            <div className="text-sm text-gray-500">
              Mess, laundry, cleaning, PG
            </div>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {role === "student" ? (
            <>
              <div>
                <label className="font-bold text-sm">
                  Full Name
                </label>
                <input
                  required
                  placeholder="e.g. Riya Wagh"
                  className="input"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-bold text-sm">
                    College
                  </label>
                  <input
                    required
                    placeholder="College name"
                    className="input"
                  />
                </div>

                <div>
                  <label className="font-bold text-sm">
                    Year
                  </label>
                  <select className="input">
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>Final Year</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-sm">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="student@example.com"
                  className="input"
                />
              </div>

              <div>
                <label className="font-bold text-sm">
                  Password
                </label>
                <input
                  required
                  type="password"
                  placeholder="Create password"
                  className="input"
                />
              </div>
            </>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-bold text-sm">
                    Business / Service Name
                  </label>
                  <input
                    required
                    placeholder="e.g. Annapurna Mess"
                    className="input"
                  />
                </div>

                <div>
                  <label className="font-bold text-sm">
                    Owner / Manager Name
                  </label>
                  <input
                    required
                    placeholder="e.g. Ramesh Kumar"
                    className="input"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-bold text-sm">
                    Service Category
                  </label>

                  <select className="input">
                    <option>Mess</option>
                    <option>Laundry</option>
                    <option>Cleaning</option>
                    <option>PG / Hostel</option>
                    <option>Cafe</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-sm">
                    Mobile Number
                  </label>

                  <input
                    required
                    placeholder="+91 98765 43210"
                    className="input"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-sm">
                  Campus Location
                </label>

                <input
                  required
                  placeholder="e.g. Near Main Gate"
                  className="input"
                />
              </div>

              <div>
                <label className="font-bold text-sm">
                  Email
                </label>

                <input
                  required
                  type="email"
                  placeholder="vendor@example.com"
                  className="input"
                />
              </div>

              <div>
                <label className="font-bold text-sm">
                  Password
                </label>

                <input
                  required
                  type="password"
                  placeholder="Create password"
                  className="input"
                />
              </div>
            </>
          )}

          <button className="primary-btn w-full">
            Register as {role === "student" ? "Student" : "Vendor"} →
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#6c4bf4] font-bold"
          >
            Login
          </Link>
        </p>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          margin-top: 8px;
          padding: 13px;
          border: 1px solid #e5e1e8;
          border-radius: 12px;
          outline: none;
          background: white;
        }

        .input:focus {
          border-color: #6c4bf4;
        }
      `}</style>
    </main>
  );
}