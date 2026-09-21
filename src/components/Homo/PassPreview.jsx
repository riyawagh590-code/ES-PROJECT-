import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Fresher Starter",
    price: "199",
    description: "Essential help for students settling into campus life.",
    bg: "bg-[#fff8ef]",
    border: "border-[#f2dfc8]",
    button: "border-[#dfc8ae] bg-white text-[#4a515a]",
    features: [
      "1 free room clean / month",
      "10% laundry discount",
      "Student-only service rates",
      "Verified campus services",
    ],
  },
  {
    name: "Campus Pro",
    price: "399",
    description: "The complete campus living package for busy students.",
    bg: "bg-[#f2edff]",
    border: "border-[#cfc0f3]",
    button: "bg-[#46505b] text-white",
    popular: true,
    features: [
      "2 free room cleans / month",
      "20% laundry discount",
      "₹250 monthly mess credit",
      "Unlimited concierge access",
      "Zero platform fees on services",
    ],
  },
  {
    name: "Elite Campus Club",
    price: "699",
    description: "Premium convenience for students who want everything handled.",
    bg: "bg-[#eaf8f3]",
    border: "border-[#bde5d4]",
    button: "border-[#b7dcca] bg-white text-[#4a515a]",
    features: [
      "Unlimited weekly cleaning",
      "Free laundry bag service",
      "15% affiliated cafe discount",
      "₹500 monthly mess credit",
      "Priority support",
    ],
  },
];

export default function PassPreview() {
  return (
    <section className="bg-[#f8f5f7] px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e9e2fa] px-4 py-2 text-sm font-bold text-[#6c55a4]">
              <Sparkles size={15} />
              Fresher Pass
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#343b46] md:text-5xl">
              Choose your campus advantage
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-[#786e76]">
              One membership can make everyday college life cheaper,
              easier and much more convenient.
            </p>
          </div>

          <Link
            href="/pass"
            className="inline-flex items-center gap-2 font-bold text-[#7654e8]"
          >
            Compare all plans
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border ${plan.border} ${plan.bg} p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#46505b] px-4 py-1.5 text-xs font-black text-white">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-black text-[#414852]">
                {plan.name}
              </h3>

              <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#806f6b]">
                {plan.description}
              </p>

              <div className="mt-7 flex items-end gap-1">
                <span className="text-5xl font-black text-[#3e4751]">
                  ₹{plan.price}
                </span>
                <span className="mb-2 text-sm font-semibold text-[#806f6b]">
                  /month
                </span>
              </div>

              <div className="my-7 h-px bg-[#ddcfd5]" />

              <p className="text-xs font-black uppercase tracking-wider text-[#947e78]">
                Included privileges
              </p>

              <div className="mt-5 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm font-medium text-[#515963]"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-[#0ba16c]"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/pass"
                className={`mt-8 flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-black transition hover:-translate-y-0.5 ${plan.button}`}
              >
                View plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}