import Link from "next/link";

const services = [
  {
    icon: "🍱",
    title: "Mess & Tiffin",
    text: "Discover verified messes, menus and monthly meal plans.",
    color: "#fff0d9",
    href: "/student/mess",
  },
  {
    icon: "🧺",
    title: "Laundry",
    text: "Schedule hostel pickups and get your clothes back fresh.",
    color: "#e7f0ff",
    href: "/student/laundry",
  },
  {
    icon: "✨",
    title: "Room Cleaning",
    text: "Book affordable weekend cleaning whenever you need it.",
    color: "#e7f8ef",
    href: "/student/cleaning",
  },
  {
    icon: "🏠",
    title: "PG & Hostels",
    text: "Find student-friendly stays without broker headaches.",
    color: "#ffe9f5",
    href: "/student/pg",
  },
  {
    icon: "☕",
    title: "Campus Cafes",
    text: "Grab exclusive student offers during lecture breaks.",
    color: "#fff4d9",
    href: "/student/cafes",
  },
  {
    icon: "👥",
    title: "Roommate Finder",
    text: "Find compatible roommates based on your lifestyle.",
    color: "#eee9ff",
    href: "/student/roommates",
  },
];

const stats = [
  ["5+", "Campus Services"],
  ["24/7", "Digital Concierge"],
  ["₹200", "Fresher Pass"],
  ["100%", "Student Focused"],
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}

      <nav className="border-b border-purple-100 bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="page-container flex items-center justify-between h-18 py-4">
          <Link href="/" className="text-2xl font-black text-[#292532]">
            Studentica<span className="text-[#6c4bf4]">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm font-semibold">
            <a href="#services" className="hover:text-[#6c4bf4]">
              Services
            </a>

            <a href="#how" className="hover:text-[#6c4bf4]">
              How it works
            </a>

            <Link href="/pass" className="hover:text-[#6c4bf4]">
              Fresher Pass
            </Link>

            <Link href="/vendor" className="hover:text-[#6c4bf4]">
              For Vendors
            </Link>
          </div>

          <div className="flex gap-2">
            <Link
              href="/login"
              className="hidden sm:block px-4 py-2 rounded-xl font-semibold"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-4 py-2 rounded-xl bg-[#6c4bf4] text-white font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <section className="page-container pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              ✨ Built for campus life
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] text-[#292532]">
              Your campus life,
              <br />
              <span className="gradient-text">sorted.</span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-[#77727f] max-w-xl leading-relaxed">
              Find trusted messes, laundry, room cleaning, PGs, cafes and
              compatible roommates — all from one student-first platform.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/student" className="primary-btn">
                Explore Student Hub →
              </Link>

              <Link href="/pass" className="secondary-btn">
                Explore Fresher Pass
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
              {stats.map(([number, label]) => (
                <div key={label}>
                  <div className="text-2xl font-black text-[#292532]">
                    {number}
                  </div>
                  <div className="text-xs text-[#77727f]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* HERO VISUAL */}

          <div className="relative">
            <div className="absolute -top-10 -right-5 w-32 h-32 bg-[#f15bb5]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-5 w-40 h-40 bg-[#6c4bf4]/20 rounded-full blur-2xl" />

            <div className="card p-5 relative">
              <div className="flex justify-between items-center mb-5">
                <div>
                  <p className="text-xs text-gray-400">Good morning 👋</p>
                  <h3 className="font-black text-xl">Student Hub</h3>
                </div>

                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  🎓
                </div>
              </div>

              <div className="bg-[#f5f1ff] rounded-2xl p-5 mb-4">
                <p className="text-sm text-purple-700 font-bold">
                  Fresher Pass
                </p>

                <div className="flex justify-between items-end mt-2">
                  <div>
                    <div className="text-3xl font-black">₹200</div>
                    <div className="text-xs text-gray-500">per month</div>
                  </div>

                  <span className="bg-white px-3 py-1 rounded-full text-xs font-bold">
                    ACTIVE
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {services.slice(0, 4).map((service) => (
                  <Link
                    href={service.href}
                    key={service.title}
                    className="rounded-2xl p-4 hover:-translate-y-1 transition"
                    style={{ backgroundColor: service.color }}
                  >
                    <div className="text-2xl">{service.icon}</div>
                    <div className="font-bold text-sm mt-2">
                      {service.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section id="services" className="bg-white py-20">
        <div className="page-container">
          <div className="max-w-2xl">
            <p className="text-[#6c4bf4] font-bold mb-3">
              EVERYTHING AROUND CAMPUS
            </p>

            <h2 className="section-title text-[#292532]">
              One place for your
              <span className="gradient-text"> everyday needs.</span>
            </h2>

            <p className="text-[#77727f] mt-5 text-lg">
              Stop switching between WhatsApp groups, random listings and
              unknown vendors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
              <Link
                href={service.href}
                key={service.title}
                className="card p-7 hover:-translate-y-2 transition duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ backgroundColor: service.color }}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-black mt-5">{service.title}</h3>

                <p className="text-gray-500 mt-2 leading-relaxed">
                  {service.text}
                </p>

                <div className="text-[#6c4bf4] font-bold mt-5">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section id="how" className="py-20">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[#ff8a3d] font-bold">HOW IT WORKS</p>

            <h2 className="section-title mt-3">
              From problem to solved
              <span className="gradient-text"> in minutes.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              ["01", "Discover", "Find the service or vendor you need."],
              ["02", "Book", "Choose your slot and confirm your request."],
              ["03", "Relax", "Track the service until it is completed."],
            ].map(([number, title, text]) => (
              <div key={number} className="card p-7">
                <div className="text-5xl font-black text-purple-100">
                  {number}
                </div>

                <h3 className="text-xl font-black mt-5">{title}</h3>

                <p className="text-gray-500 mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRESHER PASS */}

      <section className="py-20">
        <div className="page-container">
          <div className="rounded-[32px] bg-[#292532] text-white p-8 md:p-12 overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#6c4bf4] rounded-full blur-3xl opacity-50" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="bg-[#ff8a3d] text-white px-4 py-2 rounded-full text-sm font-bold">
                  FRESHER PASS
                </span>

                <h2 className="text-4xl md:text-5xl font-black mt-6">
                  Make your first semester
                  <span className="text-[#c8bfff]"> easier.</span>
                </h2>

                <p className="text-gray-300 mt-5 text-lg">
                  Unlock student-only benefits across cleaning, laundry,
                  messes and campus cafes.
                </p>

                <Link
                  href="/pass"
                  className="inline-block mt-7 bg-white text-[#292532] px-6 py-3 rounded-xl font-bold"
                >
                  View Pass Plans →
                </Link>
              </div>

              <div className="bg-white/10 rounded-3xl p-7 backdrop-blur">
                <div className="text-gray-300 text-sm">Starting from</div>

                <div className="text-5xl font-black mt-2">₹199</div>

                <div className="text-gray-300">/month</div>

                <div className="border-t border-white/20 my-6" />

                <div className="space-y-3 text-sm">
                  <div>✓ Free monthly room cleaning</div>
                  <div>✓ Laundry discounts</div>
                  <div>✓ Mess benefits</div>
                  <div>✓ Campus cafe offers</div>
                  <div>✓ Student-only perks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#292532] text-white py-12">
        <div className="page-container">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="text-2xl font-black">
                Studentica<span className="text-[#c8bfff]">.</span>
              </div>

              <p className="text-gray-400 mt-3 max-w-sm">
                Your campus life, sorted. One platform for everyday student
                living.
              </p>
            </div>

            <div className="flex gap-8 text-sm text-gray-300">
              <Link href="/student">Student Hub</Link>
              <Link href="/pass">Fresher Pass</Link>
              <Link href="/vendor">Vendor Portal</Link>
              <Link href="/login">Login</Link>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-sm text-gray-500">
            © 2026 Studentica. Campus Concierge Platform.
          </div>
        </div>
      </footer>
    </main>
  );
}