import Link from "next/link";
import { IndianRupee, TrendingUp, Wallet, ArrowDownToLine } from "lucide-react";

const transactions = [
  {
    id: "#CW-3020",
    date: "11 Sep 2026",
    student: "Priya Kulkarni",
    amount: 2850,
    fee: 285,
    net: 2565,
  },
  {
    id: "#CW-2283",
    date: "11 Sep 2026",
    student: "Rohan Patel",
    amount: 2850,
    fee: 285,
    net: 2565,
  },
  {
    id: "#CW-7624",
    date: "10 Sep 2026",
    student: "Riya Sharma",
    amount: 2800,
    fee: 280,
    net: 2520,
  },
];

export default function VendorEarnings() {
  const gross = 34200;
  const fees = 3420;
  const net = gross - fees;

  return (
    <main className="min-h-screen bg-[#f8f4f5]">

      <header className="border-b bg-white px-6 py-5">
        <div className="mx-auto flex max-w-7xl justify-between gap-4">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#9a7c70]">
              Vendor Portal
            </p>

            <h1 className="text-3xl font-bold text-[#424b55]">
              Earnings
            </h1>

            <p className="text-sm text-gray-500">
              Track revenue, platform fees and payouts.
            </p>
          </div>

          <Link
            href="/vendor"
            className="h-fit rounded-xl border px-5 py-3 font-semibold"
          >
            ← Dashboard
          </Link>

        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl bg-purple-100 p-6">
            <IndianRupee className="text-purple-600" />

            <p className="mt-5 text-sm text-purple-700">
              Gross Revenue
            </p>

            <h2 className="text-3xl font-bold text-purple-900">
              ₹{gross.toLocaleString()}
            </h2>
          </div>

          <div className="rounded-2xl bg-orange-100 p-6">
            <TrendingUp className="text-orange-600" />

            <p className="mt-5 text-sm text-orange-700">
              Platform Fees
            </p>

            <h2 className="text-3xl font-bold text-orange-900">
              ₹{fees.toLocaleString()}
            </h2>
          </div>

          <div className="rounded-2xl bg-emerald-100 p-6">
            <Wallet className="text-emerald-600" />

            <p className="mt-5 text-sm text-emerald-700">
              Net Earnings
            </p>

            <h2 className="text-3xl font-bold text-emerald-900">
              ₹{net.toLocaleString()}
            </h2>
          </div>

        </div>

        <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-xl font-bold">
                Recent Transactions
              </h2>

              <p className="text-sm text-gray-500">
                Latest completed vendor payments
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-xl border px-4 py-2 font-semibold">
              <ArrowDownToLine size={17} />
              Export
            </button>

          </div>

          <div className="mt-6 overflow-x-auto">

            <table className="w-full min-w-[650px] text-left">

              <thead>
                <tr className="border-b text-sm text-gray-500">
                  <th className="pb-3">Order</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Student</th>
                  <th className="pb-3">Gross</th>
                  <th className="pb-3">Fee</th>
                  <th className="pb-3">Net</th>
                </tr>
              </thead>

              <tbody>

                {transactions.map((transaction) => (

                  <tr
                    key={transaction.id}
                    className="border-b last:border-0"
                  >

                    <td className="py-4 font-semibold">
                      {transaction.id}
                    </td>

                    <td className="py-4 text-gray-500">
                      {transaction.date}
                    </td>

                    <td className="py-4">
                      {transaction.student}
                    </td>

                    <td className="py-4">
                      ₹{transaction.amount}
                    </td>

                    <td className="py-4 text-red-500">
                      -₹{transaction.fee}
                    </td>

                    <td className="py-4 font-bold text-emerald-600">
                      ₹{transaction.net}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

      </div>
    </main>
  );
}