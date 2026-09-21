import Link from "next/link";
import {
  ArrowRight,
  Utensils,
  Shirt,
  Sparkles,
  Home,
  Coffee,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Mess & Meals",
    description: "Discover verified messes and flexible monthly meal plans.",
    price: "From ₹2,600/mo",
    href: "/student/mess",
    icon: Utensils,
    bg: "bg-[#fff0e3]",
    iconBg: "bg-[#ffe0c5]",
    iconColor: "text-[#dc791d]",
  },
  {
    title: "Hostel Laundry",
    description: "Schedule pickup and get your clothes back clean and ready.",
    price: "From ₹60/load",
    href: "/student/laundry",
    icon: Shirt,
    bg: "bg-[#eaf0ff]",
    iconBg: "bg-[#dce6ff]",
    iconColor: "text-[#5474d4]",
  },
  {
    title: "Room Cleaning",
    description: "Book weekend cleaning whenever your room needs a reset.",
    price: "From ₹150/room",
    href: "/student/cleaning",
    icon: Sparkles,
    bg: "bg-[#e6f8f1]",
    iconBg: "bg-[#d2f1e4]",
    iconColor: "text-[#079765]",
  },
  {
    title: "PGs & Hostels",
    description: "Find student-friendly stays near your campus.",
    price: "Verified listings",
    href: "/student/pg",
    icon: Home,
    bg: "bg-[#f2edff]",
    iconBg: "bg-[#e4dbff]",
    iconColor: "text-[#7654e8]",
  },
  {
    title: "Cafes & Perks",
    description: "Discover student deals during afternoon campus breaks.",
    price: "Up to 15% off",
    href: "/student/cafes",
    icon: Coffee,
    bg: "bg-[#fff4d9]",
    iconBg: "bg-[#ffeab5]",
    iconColor: "text-[#bc7a09]",
  },
  {
    title: "Roommate Finder",
    description: "Find compatible roommates using lifestyle preferences.",
    price: "Smart matching",
    href: "/student/roommate",
    icon: Users,
    bg: "bg-[#f8eafa]",
    iconBg: "bg-[#efd9f3]",
    iconColor: "text-[#a04cab]",
  },
];

export default function ServicePreview() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="inline-flex rounded-full bg-[#e9f7f1] px-4 py-2 text-sm font-bold text-[#087b57]">
              Campus services
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#343b46] md:text-5xl">
              Everything around campus
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-[#786e76]">
              From your daily meals to finding a roommate, Campus Concierge
              brings the essentials together.
            </p>
          </div>

          <Link
            href="/student/services"
            className="inline-flex items-center gap-2 font-bold text-[#7654e8]"
          >
            View all services
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                href={service.href}
                key={service.title}
                className={`group rounded-3xl p-6 ${service.bg} transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg}`}
                  >
                    <Icon size={25} className={service.iconColor} />
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-[#8b8187] transition group-hover:translate-x-1"
                  />
                </div>

                <h3 className="mt-7 text-xl font-black text-[#414852]">
                  {service.title}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#766d74]">
                  {service.description}
                </p>

                <div className="mt-5 inline-flex rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-[#555d66]">
                  {service.price}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}