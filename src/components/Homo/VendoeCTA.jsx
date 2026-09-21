import Link from "next/link";
import {
  ArrowRight,
  Store,
  ClipboardList,
  Wallet,
  BarChart3,
} from "lucide-react";

export default function VendoeCTA() {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        <div className="overflow-hidden rounded-[32px] bg-[#46505b] px-7 py-12 text-white shadow-2xl md:px-12 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
                <Store size={17} />
                For campus vendors
              </div>

              <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
                Turn your local service into a student-first business.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#d8dce0] md:text-lg">
                Manage incoming bookings, availability, orders, customer
                verification and earnings from your own vendor dashboard.
              </p>

              <Link
                href="/register"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-black text-[#46505b] transition hover:-translate-y-0.5"
              >
                Become a vendor
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* RIGHT FEATURES */}
            <div className="grid gap-4 sm:grid-cols-2">
              
              <div className="rounded-2xl bg-white/10 p-5">
                <ClipboardList size={25} />
                <h3 className="mt-5 font-black">Manage orders</h3>
                <p className="mt-2 text-sm leading-6 text-[#d8dce0]">
                  Accept, reject and update service requests.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <BarChart3 size={25} />
                <h3 className="mt-5 font-black">Track performance</h3>
                <p className="mt-2 text-sm leading-6 text-[#d8dce0]">
                  See completion rate, ratings and service activity.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <Wallet size={25} />
                <h3 className="mt-5 font-black">View earnings</h3>
                <p className="mt-2 text-sm leading-6 text-[#d8dce0]">
                  Keep your revenue and settlements organized.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <Store size={25} />
                <h3 className="mt-5 font-black">Own your portal</h3>
                <p className="mt-2 text-sm leading-6 text-[#d8dce0]">
                  Get a dedicated workspace for your business.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}