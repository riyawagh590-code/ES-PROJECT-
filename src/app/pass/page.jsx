"use client";

import "./pass.css";
import Link from "next/link";
import {
  Crown,
  Sparkles,
  Star,
  Gem,
  Check,
  PiggyBank,
  Zap,
  ShieldCheck,
  Heart,
  ArrowRight,
  BadgePercent,
  Clock3,
  Gift,
} from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter Pass",
    subtitle: "Perfect for first-time campus explorers.",
    price: "99",
    saving: null,
    icon: <Sparkles size={25} />,
    tag: "New",
    theme: "starter",
    button: "Choose Starter",
    features: [
      "Mess & Food Discounts",
      "Laundry Offers",
      "Cafe Deals",
      "Campus Events Access",
    ],
  },
  {
    id: "campus",
    name: "Campus Pass",
    subtitle: "The complete campus experience.",
    price: "199",
    saving: "Save up to 40%",
    icon: <Star size={27} />,
    tag: "MOST POPULAR",
    theme: "campus",
    button: "Choose Campus Pass",
    features: [
      "All Starter Benefits",
      "PG & Hostel Discounts",
      "Roommate Finder Access",
      "Exclusive Campus Perks",
      "Priority Support",
    ],
  },
  {
    id: "pro",
    name: "Pro Pass",
    subtitle: "For those who want more.",
    price: "299",
    saving: "Save up to 50%",
    icon: <Crown size={27} />,
    tag: null,
    theme: "pro",
    button: "Choose Pro Pass",
    features: [
      "All Campus Benefits",
      "Unlimited Laundry (Monthly)",
      "Special Cafe & Restaurant Deals",
      "Weekend & Event Access",
      "Fresher Pass Exclusive Offers",
    ],
  },
  {
    id: "elite",
    name: "Elite Pass",
    subtitle: "The ultimate student lifestyle.",
    price: "499",
    saving: "Save up to 60%",
    icon: <Gem size={27} />,
    tag: "BEST VALUE",
    theme: "elite",
    button: "Choose Elite Pass",
    features: [
      "All Pro Benefits",
      "Free Room Cleaning (Monthly)",
      "Premium Cafe & Dining Offers",
      "Exclusive Events & Workshops",
      "VIP Support",
    ],
  },
];

const reasons = [
  {
    icon: <PiggyBank size={25} />,
    title: "Save Money",
    text: "Get exclusive discounts and offers",
  },
  {
    icon: <Zap size={25} />,
    title: "Save Time",
    text: "Quick and easy access to essential services",
  },
  {
    icon: <ShieldCheck size={25} />,
    title: "Trusted Partners",
    text: "Verified and safe services",
  },
  {
    icon: <Heart size={25} />,
    title: "Better Campus Life",
    text: "More convenience, more freedom",
  },
];

export default function FresherPassPage() {
  const handleChoose = (plan) => {
    alert(`${plan.name} selected!`);
  };

  return (
    <main className="pass-page">

      {/* ================= HEADER ================= */}
      <header className="pass-header">
        <Link href="/" className="pass-logo">
          <div className="pass-logo-icon">
            <span>◆</span>
          </div>

          <div>
            <div className="pass-logo-name">
              Studentica<span>.</span>
            </div>
            <div className="pass-logo-subtitle">
              Campus Concierge
            </div>
          </div>
        </Link>

        <nav className="pass-nav">
          <Link href="/">Home</Link>
          <Link href="/student/services">Services</Link>

          <Link
            href="/pass"
            className="pass-nav-active"
          >
            Fresher Pass
          </Link>

          <Link href="/student/roomate">
            Roommate Finder
          </Link>

          <Link href="/about">
            About
          </Link>
        </nav>

        <div className="pass-header-actions">
          <button
            className="pass-search-button"
            aria-label="Search"
          >
            <span></span>
          </button>

          <Link
            href="/login"
            className="pass-login-button"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="pass-get-started"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="pass-hero">

        <div className="pass-hero-background pass-bg-one"></div>
        <div className="pass-hero-background pass-bg-two"></div>

        <div className="pass-hero-content">

          <div className="pass-hero-left">

            <div className="pass-badge-row">
              <span className="pass-main-badge">
                <Crown size={16} />
                Fresher Pass
              </span>

              <span>Save More</span>
              <b>•</b>
              <span>Live Better</span>
              <b>•</b>
              <span>Campus Ready</span>
            </div>

            <h1>
              One Pass.
              <br />
              <span>Endless Benefits.</span>
            </h1>

            <p className="pass-hero-description">
              Student life is better when it's easier. Choose a
              Fresher Pass that fits your needs and unlock exclusive
              discounts, perks and services across campus.
            </p>

            <div className="pass-mini-benefits">

              <div>
                <BadgePercent size={19} />
                <span>Exclusive Discounts</span>
              </div>

              <div>
                <Zap size={19} />
                <span>Instant Benefits</span>
              </div>

              <div>
                <ShieldCheck size={19} />
                <span>Verified Partners</span>
              </div>

            </div>

          </div>

          {/* Hero image */}
          <div className="pass-hero-center">

            <div className="hero-doodle hero-doodle-one">
              More
              <br />
              Savings
            </div>

            <div className="hero-doodle hero-doodle-two">
              More
              <br />
              Smiles
              <span>☺</span>
            </div>

            <div className="pass-student-image-wrap">
              <img
                src="/images/student-profile.jpg"
                alt="Student using Fresher Pass"
                className="pass-student-image"
              />
            </div>

            <div className="pass-crown-doodle">
              ♡
            </div>

          </div>

          {/* Promotion */}
          <div className="pass-promotion">
            <div className="promotion-small">
              Student Special
              <span>📣</span>
            </div>

            <h2>
              Get up to <strong>60% off</strong>
            </h2>

            <p>
              with your Fresher Pass!
            </p>

            <div className="promotion-arrow">
              ↗
            </div>
          </div>

        </div>
      </section>

      {/* ================= PLANS ================= */}
      <section className="pass-plans-section">

        <div className="pass-plans-grid">

          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`pass-card pass-card-${plan.theme}`}
            >

              {plan.tag && (
                <div className={`pass-card-tag tag-${plan.theme}`}>
                  {plan.id === "campus" && <Crown size={14} />}
                  {plan.id === "elite" && <Star size={14} />}
                  {plan.tag}
                </div>
              )}

              <div className="pass-card-top">

                <div className="pass-plan-icon">
                  {plan.icon}
                </div>

                {plan.id === "starter" && (
                  <span className="plan-new">
                    New
                  </span>
                )}

              </div>

              <h3>{plan.name}</h3>

              <p className="pass-plan-subtitle">
                {plan.subtitle}
              </p>

              <div className="pass-price-row">
                <span className="rupee">₹</span>
                <span className="pass-price">
                  {plan.price}
                </span>
                <span className="per-month">
                  /month
                </span>
              </div>

              {plan.saving && (
                <span className="saving-badge">
                  {plan.saving}
                </span>
              )}

              <div className="pass-features">

                {plan.features.map((feature, index) => (
                  <div
                    className="pass-feature"
                    key={index}
                  >
                    <span className="check-circle">
                      <Check size={13} strokeWidth={3} />
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}

              </div>

              <button
                className="pass-choose-button"
                onClick={() => handleChoose(plan)}
              >
                <span>{plan.button}</span>
                <ArrowRight size={18} />
              </button>

            </article>
          ))}

        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="why-pass-section">

        <div className="why-pass-heading">

          <span>
            Why choose
          </span>

          <strong>
            Fresher Pass?
          </strong>

          <div className="why-arrow">
            →
          </div>

        </div>

        <div className="why-pass-items">

          {reasons.map((reason, index) => (
            <div
              className="why-pass-item"
              key={index}
            >

              <div className="why-pass-icon">
                {reason.icon}
              </div>

              <div>
                <h4>{reason.title}</h4>
                <p>{reason.text}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================= BOTTOM DECORATION ================= */}
      <div className="pass-bottom-doodle">
        <span>✈</span>
        <div></div>
      </div>

    </main>
  );
}