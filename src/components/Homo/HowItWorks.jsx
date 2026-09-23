"use client";

import Link from "next/link";
import {
  Search,
  CalendarCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Browse trusted campus services, food, stays, laundry, cleaning and more.",
    icon: Search,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    number: "02",
    title: "Book",
    description:
      "Choose a service, select the details you need and make your booking.",
    icon: CalendarCheck,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    number: "03",
    title: "Enjoy",
    description:
      "Get your service done without the usual campus-life hassle.",
    icon: Sparkles,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f8f5f7] py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-purple-700 shadow-sm">
            Simple by design
          </div>

          <h2 className="text-4xl font-black tracking-tight text-[#14244a] sm:text-5xl">
            Campus life,
            <span className="text-purple-600"> without the chaos.</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500">
            Campus Concierge brings everyday student services together so
            you can spend less time searching and more time enjoying campus.
          </p>
        </div>

        {/* STEPS */}
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">

          {/* Connector line */}
          <div className="absolute left-[16%] right-[16%] top-14 hidden h-px bg-purple-200 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl border border-white bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.iconBg} ${step.iconColor}`}
                  >
                    <Icon size={24} />
                  </div>

                  <span className="text-4xl font-black text-slate-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-black text-[#14244a]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/student/services"
            className="inline-flex items-center gap-2 rounded-xl bg-[#14244a] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-purple-700"
          >
            Explore services
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}