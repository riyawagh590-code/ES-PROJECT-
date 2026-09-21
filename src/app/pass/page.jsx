"use client";

import Link from "next/link";

const plans = [
  {
    name: "Fresher Starter",
    price: 199,
    description: "A simple start for campus life.",
    features: [
      "Campus service discovery",
      "Basic Fresher Pass offers",
      "Access to student deals",
    ],
  },
  {
    name: "Campus Pro",
    price: 399,
    description: "More savings and more campus perks.",
    features: [
      "Everything in Starter",
      "Exclusive vendor discounts",
      "Priority booking access",
      "Special campus deals",
    ],
    popular: true,
  },
  {
    name: "Elite Campus Club",
    price: 699,
    description: "The complete fresher experience.",
    features: [
      "Everything in Pro",
      "Premium campus offers",
      "Extra service benefits",
      "Priority support",
    ],
  },
];

export default function PassPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "50px 24px",
        background: "#fffaf5",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <Link href="/">
          ← Back to Home
        </Link>

        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#7c3aed",
              fontWeight: "700",
            }}
          >
            FRESHER PASS
          </p>

          <h1
            style={{
              fontSize: "42px",
              margin: "10px 0",
            }}
          >
            Choose your campus plan
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "18px",
            }}
          >
            Unlock useful campus services, deals and benefits.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "45px",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: "#ffffff",
                padding: "30px",
                borderRadius: "20px",
                border: plan.popular
                  ? "3px solid #7c3aed"
                  : "1px solid #e5e7eb",
                position: "relative",
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    display: "inline-block",
                    background: "#7c3aed",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              <h2>{plan.name}</h2>

              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  margin: "15px 0",
                }}
              >
                ₹{plan.price}
                <span
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  / month
                </span>
              </div>

              <p
                style={{
                  color: "#6b7280",
                }}
              >
                {plan.description}
              </p>

              <ul
                style={{
                  paddingLeft: "20px",
                  lineHeight: "2",
                }}
              >
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <button
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "13px",
                  border: "none",
                  borderRadius: "10px",
                  background: plan.popular
                    ? "#7c3aed"
                    : "#1f2937",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}