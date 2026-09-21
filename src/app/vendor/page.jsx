"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Clock3,
  IndianRupee,
  Star,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  CalendarDays,
} from "lucide-react";

const stats = [
  {
    title: "Pending Orders",
    value: "08",
    change: "+3 today",
    icon: ShoppingBag,
    color: "orange",
  },
  {
    title: "Completed Orders",
    value: "124",
    change: "+12 this week",
    icon: CheckCircle2,
    color: "green",
  },
  {
    title: "This Month",
    value: "₹34,200",
    change: "+18.4%",
    icon: IndianRupee,
    color: "purple",
  },
  {
    title: "Rating",
    value: "4.8",
    change: "Excellent",
    icon: Star,
    color: "yellow",
  },
];

const recentOrders = [
  {
    id: "#CW-3020",
    student: "Priya Kulkarni",
    service: "Monthly Veg Meal Pass",
    amount: "₹2,850",
    status: "Pending",
  },
  {
    id: "#CW-2283",
    student: "Rohan Patel",
    service: "Monthly Veg Meal Pass",
    amount: "₹2,850",
    status: "Pending",
  },
  {
    id: "#CW-7624",
    student: "Riya Sharma",
    service: "Monthly Meal Subscription",
    amount: "₹2,800",
    status: "Accepted",
  },
  {
    id: "#CW-1025",
    student: "Abhinav Sharma",
    service: "Lunch & Dinner Pass",
    amount: "₹2,800",
    status: "Completed",
  },
];

const colorClasses = {
  orange: "bg-orange-100 text-orange-600",
  green: "bg-emerald-100 text-emerald-600",
  purple: "bg-purple-100 text-purple-600",
  yellow: "bg-yellow-100 text-yellow-600",
};

export default function VendorDashboard() {
  return (
    <main className="min-h-screen bg-[#f8f4f5] text-[#424b55]">

      {/* Header */}
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#9a7c70]">
              Vendor Portal
            </p>

            <h1 className="mt-1 text-3xl font-bold">
              Annapurna Homely Mess
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your campus services, orders and earnings.
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/vendor/order"
              className="rounded-xl bg-[#424b55] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View Orders
            </Link>

            <Link
              href="/vendor/profile"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold"
            >
              My Profile
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3">

          <Link
            href="/vendor"
            className="rounded-lg bg-[#424b55] px-4 py-2 text-sm font-semibold text-white"
          >
            Dashboard
          </Link>

          <Link
            href="/vendor/order"
            className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            Orders
          </Link>

          <Link
            href="/vendor/services"
            className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            Services
          </Link>

          <Link
            href="/vendor/availability"
            className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            Availability
          </Link>

          <Link
            href="/vendor/earnings"
            className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            Earnings
          </Link>

          <Link
            href="/vendor/review"
            className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            Reviews
          </Link>

          <Link
            href="/vendor/profile"
            className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            Profile
          </Link>

        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Welcome */}
        <section className="mb-8 rounded-3xl bg-gradient-to-r from-[#424b55] via-[#655a68] to-[#8a6d68] p-7 text-white shadow-lg">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm">
                <CheckCircle2 size={15} />
                Store is Open
              </div>

              <h2 className="text-3xl font-bold">
                Good morning, Annapurna 👋
              </h2>

              <p className="mt-2 max-w-xl text-white/80">
                You have 8 incoming requests waiting for action.
                Keep your response time low to maintain your top vendor score.
              </p>
            </div>

            <Link
              href="/vendor/order"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#424b55] hover:bg-gray-100"
            >
              Open Order Queue
              <ArrowUpRight size={18} />
            </Link>

          </div>
        </section>

        {/* Stats */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {item.title}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
                      {item.value}
                    </h3>
                  </div>

                  <div
                    className={`rounded-xl p-3 ${colorClasses[item.color]}`}
                  >
                    <Icon size={21} />
                  </div>

                </div>

                <p className="mt-4 text-sm font-semibold text-emerald-600">
                  {item.change}
                </p>
              </div>
            );
          })}

        </section>

        {/* Main content */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Orders */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm lg:col-span-2">

            <div className="mb-6 flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold">
                  Recent Orders
                </h2>

                <p className="text-sm text-gray-500">
                  Latest requests from students
                </p>
              </div>

              <Link
                href="/vendor/order"
                className="text-sm font-semibold text-[#655a68]"
              >
                View all →
              </Link>

            </div>

            <div className="space-y-3">

              {recentOrders.map((order) => (

                <div
                  key={order.id}
                  className="flex flex-col justify-between gap-4 rounded-xl border p-4 sm:flex-row sm:items-center"
                >

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">
                        {order.service}
                      </span>

                      <span className="text-xs text-gray-400">
                        {order.id}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                      Student: {order.student}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">

                    <div className="text-right">
                      <p className="font-bold">
                        {order.amount}
                      </p>

                      <span
                        className={`text-xs font-semibold ${
                          order.status === "Pending"
                            ? "text-orange-600"
                            : order.status === "Completed"
                            ? "text-emerald-600"
                            : "text-purple-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <Link
                      href="/vendor/order"
                      className="rounded-lg border px-3 py-2 text-sm font-semibold hover:bg-gray-50"
                    >
                      Open
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold">
              Quick Actions
            </h2>

            <p className="mb-5 text-sm text-gray-500">
              Manage your vendor account
            </p>

            <div className="space-y-3">

              <Link
                href="/vendor/services"
                className="flex items-center gap-4 rounded-xl bg-purple-50 p-4 transition hover:bg-purple-100"
              >
                <Package className="text-purple-600" />
                <div>
                  <p className="font-semibold">Manage Services</p>
                  <p className="text-xs text-gray-500">
                    Update menu and pricing
                  </p>
                </div>
              </Link>

              <Link
                href="/vendor/availability"
                className="flex items-center gap-4 rounded-xl bg-orange-50 p-4 transition hover:bg-orange-100"
              >
                <Clock3 className="text-orange-600" />
                <div>
                  <p className="font-semibold">Availability</p>
                  <p className="text-xs text-gray-500">
                    Manage open hours & slots
                  </p>
                </div>
              </Link>

              <Link
                href="/vendor/earnings"
                className="flex items-center gap-4 rounded-xl bg-emerald-50 p-4 transition hover:bg-emerald-100"
              >
                <IndianRupee className="text-emerald-600" />
                <div>
                  <p className="font-semibold">View Earnings</p>
                  <p className="text-xs text-gray-500">
                    Track your revenue
                  </p>
                </div>
              </Link>

              <Link
                href="/vendor/review"
                className="flex items-center gap-4 rounded-xl bg-yellow-50 p-4 transition hover:bg-yellow-100"
              >
                <Star className="text-yellow-600" />
                <div>
                  <p className="font-semibold">Customer Reviews</p>
                  <p className="text-xs text-gray-500">
                    See student feedback
                  </p>
                </div>
              </Link>

            </div>

          </div>

        </section>

        {/* Alert */}
        <section className="mt-6 flex items-start gap-3 rounded-2xl border border-orange-200 bg-orange-50 p-5">
          <AlertCircle className="mt-0.5 text-orange-600" />

          <div>
            <p className="font-semibold">
              8 orders need your attention
            </p>

            <p className="mt-1 text-sm text-gray-600">
              Accept or reject incoming requests within the next few minutes
              to maintain your response score.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}