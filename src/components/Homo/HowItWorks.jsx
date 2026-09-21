import {
  Search,
  CalendarCheck,
  PackageCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "Browse trusted campus services based on your location, budget and preferences.",
    color: "bg-[#eee7ff]",
    iconColor: "text-[#7654e8]",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Book",
    description:
      "Choose a service, select your preferred slot and confirm your booking in seconds.",
    color: "bg-[#fff0e3]",
    iconColor: "text-[#e98a28]",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Track",
    description:
      "Keep track of your bookings, service status and verification PIN from your dashboard.",
    color: "bg-[#e3f7ef]",
    iconColor: "text-[#0c9b69]",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Enjoy",
    description:
      "Spend less time managing everyday chores and more time enjoying college life.",
    color: "bg-[#e9efff]",
    iconColor: "text-[#5576d9]",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-[#f0eafa] px-4 py-2 text-sm font-bold text-[#6d55a5]">
            Simple by design
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#343b46] md:text-5xl">
            How Campus Concierge works
          </h2>

          <p className="mt-4 text-lg leading-7 text-[#786e76]">
            From finding a service to getting it completed, everything stays
            inside one student-friendly platform.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group rounded-3xl border border-[#ebe4e9] bg-[#fcfafb] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.color}`}
                  >
                    <Icon size={25} className={step.iconColor} />
                  </div>

                  <span className="text-4xl font-black text-[#e8e1e6]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-black text-[#3d444e]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#7b7179]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}