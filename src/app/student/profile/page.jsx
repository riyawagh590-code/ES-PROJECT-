"use client";

import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  ArrowLeft,
  Save,
} from "lucide-react";

export default function StudentProfilePage() {
  return (
    <main className="min-h-screen bg-[#f8f6f7] px-6 py-10">

      <div className="mx-auto max-w-4xl">

        <Link
          href="/student"
          className="inline-flex items-center gap-2 font-semibold text-gray-500"
        >
          <ArrowLeft size={18} />
          Student Dashboard
        </Link>

        <div className="mt-8 rounded-[32px] bg-white p-8 shadow-sm md:p-10">

          <div className="flex flex-col gap-5 border-b pb-8 md:flex-row md:items-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-3xl font-black text-white">
              RK
            </div>

            <div>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-bold text-purple-700">
                STUDENT ACCOUNT
              </span>

              <h1 className="mt-2 text-3xl font-black">
                Riya Kulkarni
              </h1>

              <p className="text-gray-500">
                B.Tech Computer Science • 1st Year
              </p>
            </div>

          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-bold">
                Full Name
              </label>

              <div className="flex items-center gap-3 rounded-xl border p-3">
                <User size={18} className="text-gray-400" />

                <input
                  defaultValue="Riya Kulkarni"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Email
              </label>

              <div className="flex items-center gap-3 rounded-xl border p-3">
                <Mail size={18} className="text-gray-400" />

                <input
                  defaultValue="riya@studentica.com"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Mobile Number
              </label>

              <div className="flex items-center gap-3 rounded-xl border p-3">
                <Phone size={18} className="text-gray-400" />

                <input
                  defaultValue="+91 98220 12345"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Campus
              </label>

              <div className="flex items-center gap-3 rounded-xl border p-3">
                <MapPin size={18} className="text-gray-400" />

                <input
                  defaultValue="MIT AOE Pune"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-bold">
                Course
              </label>

              <div className="flex items-center gap-3 rounded-xl border p-3">
                <GraduationCap size={18} className="text-gray-400" />

                <input
                  defaultValue="B.Tech Computer Science"
                  className="w-full outline-none"
                />
              </div>
            </div>

          </div>

          <button className="mt-8 flex items-center gap-2 rounded-xl bg-[#414b55] px-7 py-3 font-bold text-white">
            <Save size={18} />
            Save Profile
          </button>

        </div>

      </div>
    </main>
  );
}