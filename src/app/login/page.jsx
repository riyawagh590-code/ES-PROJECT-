"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  GraduationCap,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Utensils,
  WashingMachine,
  SprayCan,
  House,
  Users,
  Coffee,
  Store,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("");

    const normalizedEmail = email.trim().toLowerCase();

    /*
      =====================================================
      DEMO VENDOR AUTHENTICATION MAPPING
      =====================================================
    */
    const demoVendors = {
      "annapurna@vendor.com": {
        password: "mess123",
        vendorId: "mess-01",
        name: "Annapurna Dining Hall",
      },
      "mess@campus.com": {
        password: "mess123",
        vendorId: "mess-01",
        name: "Annapurna Dining Hall",
      },
      "cottonspa@vendor.com": {
        password: "laundry123",
        vendorId: "laundry-01",
        name: "CottonSpa Laundry",
      },
      "laundry@campus.com": {
        password: "laundry123",
        vendorId: "laundry-01",
        name: "CottonSpa Laundry",
      },
      "shital@vendor.com": {
        password: "clean123",
        vendorId: "cleaning-01",
        name: "CleanSpace Housekeeping",
      },
      "cleaning@campus.com": {
        password: "clean123",
        vendorId: "cleaning-01",
        name: "CleanSpace Housekeeping",
      },
      "manas@vendor.com": {
        password: "hostel123",
        vendorId: "hostel-01",
        name: "Manas Girls Hostel",
      },
      "hostel@campus.com": {
        password: "hostel123",
        vendorId: "hostel-01",
        name: "Manas Girls Hostel",
      },
      "cafe24@vendor.com": {
        password: "cafe123",
        vendorId: "cafe-03",
        name: "THE CAFE 24",
      },
      "cafe@campus.com": {
        password: "cafe123",
        vendorId: "cafe-03",
        name: "THE CAFE 24",
      },
    };

    const vendor = demoVendors[normalizedEmail];

    // Vendor branch
    if (role === "vendor") {
      if (vendor) {
        if (password === vendor.password) {
          const session = {
            role: "vendor",
            vendorId: vendor.vendorId,
            name: vendor.name,
            email: normalizedEmail,
          };

          localStorage.setItem("currentUser", JSON.stringify(session));
          localStorage.setItem("campusConciergeLoggedIn", JSON.stringify(session));
          localStorage.setItem("vendorLoggedIn", "true");
          localStorage.setItem("vendorId", vendor.vendorId);
          localStorage.setItem("vendorEmail", normalizedEmail);

          router.push(`/vendor?vendor=${vendor.vendorId}`);
          return;
        }

        setErrorMessage("Incorrect password for vendor account.");
        return;
      }

      const savedUser =
        localStorage.getItem("currentUser") ||
        localStorage.getItem("campusConciergeUser");

      if (savedUser) {
        try {
          const parsed = JSON.parse(savedUser);
          if (
            parsed.email &&
            parsed.email.toLowerCase() === normalizedEmail &&
            (!parsed.password || parsed.password === password)
          ) {
            const vendorTargetId = parsed.vendorId || "mess-01";
            localStorage.setItem(
              "currentUser",
              JSON.stringify({ ...parsed, vendorId: vendorTargetId })
            );
            router.push(`/vendor?vendor=${vendorTargetId}`);
            return;
          }
        } catch (err) {
          console.error("Unable to parse vendor session", err);
        }
      }

      setErrorMessage("Vendor account not found. Please verify your credentials or register.");
      return;
    }

    /*
      =====================================================
      STUDENT AUTHENTICATION & DIRECT PROFILE SYNC
      =====================================================
    */
    // 1. Check if this student already registered previously
    const savedStudent =
      localStorage.getItem("currentStudent") ||
      localStorage.getItem("campusConciergeUser") ||
      localStorage.getItem("currentUser");

    if (savedStudent) {
      try {
        const parsed = JSON.parse(savedStudent);

        // If email matches (or password matches), log them straight in with their saved profile
        if (
          parsed.email &&
          parsed.email.toLowerCase() === normalizedEmail &&
          (!parsed.password || parsed.password === password)
        ) {
          const session = {
            role: "student",
            fullName: parsed.fullName || parsed.name || "Student",
            name: parsed.fullName || parsed.name || "Student",
            college: parsed.college || parsed.campus || "MIT AOE Pune",
            campus: parsed.campus || parsed.college || "MIT AOE Pune",
            year: parsed.year || "1st Year",
            email: parsed.email,
            course: parsed.course || "B.Tech Engineering",
            phone: parsed.phone || "+91 98220 12345",
          };

          localStorage.setItem("currentStudent", JSON.stringify(session));
          localStorage.setItem("currentUser", JSON.stringify(session));
          localStorage.setItem("campusConciergeLoggedIn", JSON.stringify(session));

          router.push("/student");
          return;
        }
      } catch (err) {
        console.error("Error reading saved student account:", err);
      }
    }

    // 2. If student is logging in without registering first, format name cleanly from email
    if (normalizedEmail.includes("@")) {
      const emailPrefix = normalizedEmail.split("@")[0];
      const formattedName =
        emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);

      const newStudentSession = {
        role: "student",
        fullName: formattedName,
        name: formattedName,
        college: "MIT AOE Pune",
        campus: "MIT AOE Pune",
        year: "1st Year",
        email: normalizedEmail,
        course: "B.Tech Engineering",
        phone: "+91 98220 12345",
      };

      localStorage.setItem("currentStudent", JSON.stringify(newStudentSession));
      localStorage.setItem("currentUser", JSON.stringify(newStudentSession));
      localStorage.setItem("campusConciergeLoggedIn", JSON.stringify(newStudentSession));

      router.push("/student");
      return;
    }

    setErrorMessage("Please enter a valid email address.");
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fcfaf8] text-[#14244a]">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-36 top-20 h-[450px] w-[450px] rounded-full bg-[#eee9ff] blur-3xl" />
        <div className="absolute right-[-130px] top-[-110px] h-[430px] w-[430px] rounded-full bg-[#fff0df] blur-3xl" />
        <div className="absolute bottom-[-170px] left-[-130px] h-[420px] w-[420px] rounded-full bg-[#e8ddff] blur-3xl" />
      </div>

      {/* HEADER */}
      <header className="relative z-10 px-6 py-7 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#5634e8] to-[#7147ef] shadow-lg shadow-purple-200">
              <GraduationCap
                size={29}
                className="text-white"
                strokeWidth={2.2}
              />
              <span className="absolute -bottom-1 -right-1 text-[15px]">
                ✦
              </span>
            </div>

            <div>
              <div className="text-[28px] font-black leading-none tracking-tight text-[#14244a]">
                Studentica<span className="text-[#5b36e8]">.</span>
              </div>
              <div className="mt-1 text-[15px] font-semibold tracking-wide text-[#61739a]">
                Campus Concierge
              </div>
            </div>
          </Link>

          <div className="hidden text-right sm:block">
            <p className="font-handwriting text-[17px] font-bold text-[#5130d9]">
              Better Campus
            </p>
            <p className="font-handwriting text-[17px] font-bold text-[#5130d9]">
              Better You ♡
            </p>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <section className="relative z-10 mx-auto max-w-[1450px] px-5 pb-10 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] xl:gap-16">
          {/* LEFT */}
          <div className="relative px-2 py-5 sm:px-6 lg:px-4 xl:px-8">
            <div className="absolute -top-7 left-6 hidden rotate-[-5deg] text-[#5634e8] sm:block">
              <p className="text-[18px] font-bold">
                Welcome back!
              </p>
              <p className="ml-24 text-2xl">
                ↘
              </p>
            </div>

            <p className="mb-4 text-sm font-extrabold tracking-[0.08em] text-[#7449e9] sm:text-base">
              WELCOME TO YOUR CAMPUS
            </p>

            <h1 className="max-w-[620px] text-[48px] font-black leading-[1.02] tracking-[-0.04em] text-[#102d59] sm:text-[60px] xl:text-[66px]">
              Your campus
              <br />
              life, made easier.
            </h1>

            <p className="mt-6 max-w-[610px] text-[17px] leading-8 text-[#61739a] sm:text-[19px]">
              Access messes, laundry, PGs, cafes, cleaning,
              roommates and everyday student services — all in one place.
            </p>

            {/* SERVICE ICONS */}
            <div className="mt-9 grid max-w-[530px] grid-cols-3 gap-x-8 gap-y-7">
              <ServiceIcon
                icon={Utensils}
                bg="bg-[#fff0e4]"
                color="text-[#f26b21]"
                title="Mess & Food"
                subtitle="Tasty & hygienic"
              />
              <ServiceIcon
                icon={WashingMachine}
                bg="bg-[#e8f0ff]"
                color="text-[#3b76e9]"
                title="Laundry"
                subtitle="Clean & fresh"
              />
              <ServiceIcon
                icon={SprayCan}
                bg="bg-[#dcf8eb]"
                color="text-[#0eaa6c]"
                title="Cleaning"
                subtitle="Save time"
              />
              <ServiceIcon
                icon={House}
                bg="bg-[#eee5ff]"
                color="text-[#6437e8]"
                title="PG & Hostels"
                subtitle="Verified stays"
              />
              <ServiceIcon
                icon={Users}
                bg="bg-[#f9ddf6]"
                color="text-[#d43cc7]"
                title="Roommates"
                subtitle="Find your vibe"
              />
              <ServiceIcon
                icon={Coffee}
                bg="bg-[#fff0d4]"
                color="text-[#ee9c0e]"
                title="Cafes"
                subtitle="Good food, great vibes"
              />
            </div>

            <div className="mt-9 inline-block rotate-[-4deg] rounded-[28px] bg-[#eee5ff] px-7 py-4">
              <p className="text-[17px] font-bold leading-6 text-[#4d2ac9]">
                Same campus.
                <br />
                More possibilities. ♡
              </p>
            </div>

            {/* STUDENT IMAGE */}
            <div className="relative mt-5 hidden h-[330px] lg:block">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1100&q=90"
                alt="Students together"
                className="absolute bottom-0 left-0 h-[330px] w-full rounded-[35px] object-cover object-center"
              />
              <div className="absolute inset-0 rounded-[35px] bg-gradient-to-t from-[#14244a]/20 to-transparent" />
            </div>
          </div>

          {/* LOGIN CARD */}
          <div className="relative">
            <div className="rounded-[30px] border border-white bg-white/95 p-6 shadow-[0_25px_70px_rgba(54,40,100,0.10)] backdrop-blur-xl sm:p-9 lg:p-10">
              {/* TITLE */}
              <div className="mb-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f1ebff] px-4 py-2 text-sm font-extrabold text-[#6338e8]">
                  <Sparkles size={17} />
                  WELCOME BACK
                </div>

                <h2 className="text-[38px] font-black leading-tight tracking-[-0.03em] text-[#102d59] sm:text-[44px]">
                  Welcome back!
                </h2>

                <p className="mt-2 text-[17px] text-[#7182a5]">
                  Login to continue with your campus essentials.
                </p>
              </div>

              {/* ACCOUNT TYPE TOGGLE */}
              <div className="mb-7 grid grid-cols-2 rounded-2xl border border-[#dfe3ee] bg-white p-1">
                <button
                  type="button"
                  onClick={() => {
                    setRole("student");
                    setErrorMessage("");
                  }}
                  className={`flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-extrabold transition-all duration-200 ${
                    role === "student"
                      ? "bg-gradient-to-r from-[#6438e9] to-[#7447ee] text-white shadow-lg shadow-purple-200"
                      : "text-[#647595] hover:bg-[#f8f6ff]"
                  }`}
                >
                  <GraduationCap size={19} />
                  Student
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setRole("vendor");
                    setErrorMessage("");
                  }}
                  className={`flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-extrabold transition-all duration-200 ${
                    role === "vendor"
                      ? "bg-gradient-to-r from-[#6438e9] to-[#7447ee] text-white shadow-lg shadow-purple-200"
                      : "text-[#647595] hover:bg-[#f8f6ff]"
                  }`}
                >
                  <Store size={18} />
                  Vendor
                </button>
              </div>

              {/* ERROR MESSAGE IF ANY */}
              {errorMessage && (
                <div className="mb-5 rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs font-bold text-rose-600">
                  {errorMessage}
                </div>
              )}

              {/* FORM */}
              <form onSubmit={handleSubmit}>
                {/* EMAIL */}
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-extrabold text-[#20395f]">
                    <Mail size={17} />
                    Email
                  </span>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8190ad]"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={
                        role === "vendor"
                          ? "e.g. annapurna@vendor.com"
                          : "you@example.com"
                      }
                      className="h-14 w-full rounded-xl border border-[#dbe0eb] bg-white pl-11 pr-4 text-sm font-medium text-[#263d63] outline-none transition focus:border-[#6a3ee7] focus:ring-4 focus:ring-purple-100"
                    />
                  </div>
                </label>

                {/* PASSWORD */}
                <label className="mt-5 block">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-extrabold text-[#20395f]">
                      <LockKeyhole size={17} />
                      Password
                    </span>

                    <button
                      type="button"
                      onClick={() => alert("Password reset link will be sent to your email.")}
                      className="text-xs font-bold text-[#6338e8] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <LockKeyhole
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8190ad]"
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="h-14 w-full rounded-xl border border-[#dbe0eb] bg-white px-11 text-sm font-medium text-[#263d63] outline-none transition focus:border-[#6a3ee7] focus:ring-4 focus:ring-purple-100"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8190ad] hover:text-[#5e35df]"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </label>

                {/* LOGIN BUTTON */}
                <button
                  type="submit"
                  className="mt-7 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#6337e8] to-[#7448ed] text-[15px] font-extrabold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <ArrowRight size={20} />
                  Login as {role === "vendor" ? "Vendor" : "Student"}
                  <ArrowRight size={19} />
                </button>

                {/* OR */}
                <div className="my-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-[#e2e5ed]" />
                  <span className="text-sm font-semibold text-[#8a96ad]">
                    OR
                  </span>
                  <div className="h-px flex-1 bg-[#e2e5ed]" />
                </div>

                {/* GOOGLE BUTTON */}
                <button
                  type="button"
                  onClick={() => {
                    const session = { role: "student", name: "Student", email: "student@campus.edu" };
                    localStorage.setItem("currentUser", JSON.stringify(session));
                    router.push("/student");
                  }}
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-[#d9deea] bg-white text-sm font-bold text-[#23385f] transition hover:bg-[#faf9ff]"
                >
                  <span className="text-[21px] font-black text-[#4285f4]">
                    G
                  </span>
                  Continue with Google
                </button>

                {/* REGISTER LINK */}
                <p className="mt-7 text-center text-sm text-[#7583a1]">
                  Don&apos;t have an account?
                  <Link
                    href="/register"
                    className="ml-1 font-extrabold text-[#5e35df] hover:underline"
                  >
                    Create Account
                  </Link>
                </p>

                {/* SECURITY FOOTER */}
                <div className="mt-7 flex items-center justify-center gap-3 text-xs font-medium text-[#8994aa]">
                  <ShieldCheck size={15} />
                  Your data is safe with us
                  <span className="h-4 w-px bg-[#d9deea]" />
                  <span>🌿 No spam, ever</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .font-handwriting {
          font-family: "Comic Sans MS", "Segoe Print", cursive;
        }
        input::placeholder {
          color: #9aa6bc;
        }
      `}</style>
    </main>
  );
}

function ServiceIcon({
  icon: Icon,
  bg,
  color,
  title,
  subtitle,
}) {
  return (
    <div>
      <div
        className={`mb-3 flex h-14 w-14 items-center justify-center rounded-2xl ${bg} ${color}`}
      >
        <Icon size={26} />
      </div>
      <p className="text-sm font-extrabold text-[#17335f]">
        {title}
      </p>
      <p className="mt-1 text-xs text-[#7182a5]">
        {subtitle}
      </p>
    </div>
  );
}