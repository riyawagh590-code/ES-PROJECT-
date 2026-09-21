import Link from "next/link";
import {
  Search,
  Star,
  MapPin,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";

const vendors = [
  {
    id: "annapurna-mess",
    name: "Annapurna Homely Mess",
    category: "Mess",
    location: "350m from campus",
    rating: "4.8",
    price: "₹2,850/month",
    badge: "Pure Veg",
    image: "/images/mess.jpg",
  },
  {
    id: "quickwash-laundry",
    name: "QuickWash Doorstep Laundry",
    category: "Laundry",
    location: "Hostel 3 Gate",
    rating: "4.8",
    price: "₹70/bag",
    badge: "24h Express",
    image: "/images/laundry.jpg",
  },
  {
    id: "cleanspace-cleaning",
    name: "CleanSpace Weekend",
    category: "Cleaning",
    location: "Hostels A & B",
    rating: "4.9",
    price: "₹200/room",
    badge: "Weekend",
    image: "/images/cleaning.jpg",
  },
  {
    id: "sai-residency",
    name: "Sai Residency",
    category: "PG",
    location: "Campus Crossroad",
    rating: "4.6",
    price: "₹4,500/month",
    badge: "Zero Brokerage",
    image: "/images/pg.jpg",
  },
  {
    id: "campus-brew",
    name: "Campus Brew",
    category: "Cafe",
    location: "College Road",
    rating: "4.7",
    price: "₹99 combo",
    badge: "Campus Deal",
    image: "/images/cafe.jpg",
  },
];

export default function ExplorePage() {
  return (
    <main className="hex-bg min-h-screen">
      <nav className="border-b bg-white">
        <div className="page-container flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-black">
            Studentica<span className="text-[#7357d9]">.</span>
          </Link>

          <Link
            href="/student"
            className="rounded-xl bg-[#303944] px-4 py-2 text-sm font-bold text-white"
          >
            Student Dashboard
          </Link>
        </div>
      </nav>

      <div className="page-container py-10">
        <div>
          <div className="text-sm font-bold text-[#7357d9]">
            CAMPUS MARKETPLACE
          </div>

          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Explore campus services
          </h1>

          <p className="mt-3 text-[#766f73]">
            Compare trusted student-friendly vendors before you book.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
            <Search className="text-gray-400" />
            <input
              className="w-full outline-none"
              placeholder="Search services..."
            />
          </div>

          <button className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold shadow-sm">
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {["All", "Mess", "Laundry", "Cleaning", "PG", "Cafe"].map(
            (category, index) => (
              <button
                key={category}
                className={`rounded-full px-5 py-2.5 text-sm font-bold ${
                  index === 0
                    ? "bg-[#303944] text-white"
                    : "bg-white"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor) => (
            <Link
              href={`/vendors/${vendor.id}`}
              key={vendor.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 bg-gray-200">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold">
                  {vendor.category}
                </div>

                <div className="absolute right-4 top-4 rounded-full bg-[#303944] px-3 py-1 text-xs font-bold text-white">
                  {vendor.badge}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between gap-4">
                  <h2 className="text-xl font-black">{vendor.name}</h2>

                  <div className="flex items-center gap-1 text-sm font-bold">
                    <Star
                      size={15}
                      className="fill-orange-400 text-orange-400"
                    />
                    {vendor.rating}
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={15} />
                  {vendor.location}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="font-black">{vendor.price}</div>

                  <span className="flex items-center gap-1 font-bold text-[#7357d9]">
                    Details
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}