import {
  ShieldCheck,
  IndianRupee,
  Clock3,
  Users,
  MapPinned,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified services",
    description:
      "Students can discover services with ratings, details and campus-focused information.",
    bg: "bg-[#e6f7f0]",
    iconColor: "text-[#07895f]",
  },
  {
    icon: IndianRupee,
    title: "Student-friendly pricing",
    description:
      "Transparent prices and Fresher Pass benefits help students save on everyday services.",
    bg: "bg-[#fff1df]",
    iconColor: "text-[#d97b1f]",
  },
  {
    icon: Clock3,
    title: "Save your time",
    description:
      "Book laundry, cleaning, meals and other essentials without running around campus.",
    bg: "bg-[#e9efff]",
    iconColor: "text-[#5573d1]",
  },
  {
    icon: Users,
    title: "Built for student life",
    description:
      "The platform is designed around hostel routines, student budgets and campus schedules.",
    bg: "bg-[#f1eaff]",
    iconColor: "text-[#7957dd]",
  },
  {
    icon: MapPinned,
    title: "Hyperlocal discovery",
    description:
      "See useful services close to your campus, hostel, PG or main gate.",
    bg: "bg-[#fff0f2]",
    iconColor: "text-[#d85f76]",
  },
  {
    icon: BadgeCheck,
    title: "One campus platform",
    description:
      "Meals, laundry, cleaning, housing, cafes and roommates — all connected in one place.",
    bg: "bg-[#e8f7f7]",
    iconColor: "text-[#178e91]",
  },
];

export default function WhyCampusConcierge() {
  return (
    <section className="bg-[#f8f5f7] px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#665b65] shadow-sm">
            Why students choose us
          </span>

          <h2 className="mt-4 text-4xl font-black text-[#343b46] md:text-5xl">
            More than a booking platform
          </h2>

          <p className="mt-4 text-lg leading-7 text-[#786e76]">
            Campus Concierge is designed to become the everyday digital
            companion for student living.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-[#ebe4e9] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${benefit.bg}`}
                >
                  <Icon size={25} className={benefit.iconColor} />
                </div>

                <h3 className="mt-6 text-xl font-black text-[#414852]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#786e76]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 rounded-3xl border border-[#ddd3dc] bg-white p-7 text-center shadow-sm md:p-10">
          <p className="text-2xl font-black text-[#414852] md:text-3xl">
            Less running around.
            <span className="text-[#7654e8]"> More living.</span>
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#786e76] md:text-base">
            From your first day on campus to your final semester, we help
            simplify the everyday things that make student life complicated.
          </p>
        </div>
      </div>
    </section>
  );
}