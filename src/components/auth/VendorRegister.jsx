"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Eye,
  EyeOff,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Store,
  User,
  Utensils,
  WashingMachine,
  Home,
  Coffee,
  SprayCan,
} from "lucide-react";

export default function VendorRegister() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Form states to capture vendor info
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [category, setCategory] = useState("Mess & Food");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Map selected category directly to its matching vendor dashboard ID
    let assignedVendorId = "mess-01";
    if (category === "Laundry") assignedVendorId = "laundry-01";
    else if (category === "Housekeeping") assignedVendorId = "cleaning-01";
    else if (category === "PG & Hostels") assignedVendorId = "hostel-01";
    else if (category === "Cafes") assignedVendorId = "cafe-03";

    const session = {
      role: "vendor",
      vendorId: assignedVendorId,
      name: businessName || "Vendor Business",
      owner: ownerName,
      category: category,
      location: location,
      phone: phone,
      email: email,
    };

    localStorage.setItem("currentUser", JSON.stringify(session));
    router.push(`/vendor?vendor=${assignedVendorId}`);
  };

  return (
    <main className="min-h-screen bg-[#fcf9f6] text-[#142541] overflow-hidden">
      <div className="min-h-screen grid lg:grid-cols-[48%_52%]">

        {/* LEFT */}
        <section className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-[#f5f1ff] px-12 xl:px-16 py-10">
          <div className="absolute -top-40 -left-32 w-[430px] h-[430px] rounded-full bg-[#dfd1ff]" />
          <div className="absolute top-[-80px] right-[-120px] w-[400px] h-[400px] rounded-full bg-[#ffe6d1]" />
          <div className="absolute bottom-[-160px] left-[-100px] w-[470px] h-[470px] rounded-full bg-[#d9cbff]" />

          <div className="relative z-10">

            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#6034dc] flex items-center justify-center shadow-lg shadow-purple-200">
                <GraduationCap className="text-white" size={28} />
              </div>

              <div>
                <div className="text-[25px] font-black">
                  Studentica<span className="text-[#6335dc]">.</span>
                </div>

                <div className="text-xs text-[#6f7c94]">
                  Campus Concierge
                </div>
              </div>
            </Link>

            {/* Main vendor message */}
            <div className="mt-20 max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm text-[#6536dc] text-sm font-bold">
                <Store size={15} />
                Grow with your campus
              </div>

              <h1 className="mt-7 text-[54px] xl:text-[62px] leading-[0.98] font-black tracking-[-3px]">
                Put your
                <br />
                business{" "}
                <span className="text-[#6737df]">
                  on campus.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-7 text-[#65738e]">
                Connect with students, manage bookings, showcase your service
                and grow your campus business from one place.
              </p>

              {/* Vendor categories */}
              <div className="mt-10 grid grid-cols-2 gap-5 max-w-lg">
                <VendorFeature
                  icon={<Utensils size={21} />}
                  title="Mess & Food"
                  text="Meal subscriptions"
                  bg="bg-[#fff0e5]"
                  color="text-[#ff6b00]"
                />

                <VendorFeature
                  icon={<WashingMachine size={21} />}
                  title="Laundry"
                  text="Pickup & delivery"
                  bg="bg-[#e8f1ff]"
                  color="text-[#3479ee]"
                />

                <VendorFeature
                  icon={<SprayCan size={21} />}
                  title="Housekeeping"
                  text="Cleaning services"
                  bg="bg-[#e5faef]"
                  color="text-[#0ca766]"
                />

                <VendorFeature
                  icon={<Home size={21} />}
                  title="PG & Hostels"
                  text="Student stays"
                  bg="bg-[#f0e8ff]"
                  color="text-[#7137dc]"
                />

                <VendorFeature
                  icon={<Coffee size={21} />}
                  title="Cafes"
                  text="Student offers"
                  bg="bg-[#fff3d8]"
                  color="text-[#e99b00]"
                />

                <VendorFeature
                  icon={<BriefcaseBusiness size={21} />}
                  title="More services"
                  text="Reach new students"
                  bg="bg-[#ffeaf5]"
                  color="text-[#e9278f]"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 border-l-4 border-[#6536dc] pl-5 max-w-md">
            <p className="text-xl font-bold">
              Serve students.
              <br />
              Build your campus business.
            </p>

            <p className="mt-2 text-sm text-[#74819a]">
              Orders, bookings, services and earnings — together.
            </p>
          </div>
        </section>

        {/* RIGHT */}
        <section className="relative flex items-center justify-center px-5 sm:px-8 py-10">
          <div className="absolute top-[-100px] right-[-100px] w-72 h-72 bg-[#eee5ff] rounded-full" />

          <div className="relative z-10 w-full max-w-[560px]">

            {/* Mobile logo */}
            <div className="lg:hidden mb-8">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#6034dc] flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>

                <div>
                  <div className="font-black text-xl">
                    Studentica<span className="text-[#6335dc]">.</span>
                  </div>

                  <div className="text-xs text-[#73809a]">
                    Campus Concierge
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-[30px] border border-[#ebe7f4] shadow-[0_25px_70px_rgba(65,42,120,0.12)] p-7 sm:p-10">

              {/* Header */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#f1eaff] text-[#6435dc] text-sm font-bold">
                <Store size={15} />
                Vendor registration
              </div>

              <h2 className="mt-6 text-[36px] sm:text-[42px] leading-none font-black tracking-[-2px]">
                Welcome, Vendor! 👋
              </h2>

              <p className="mt-4 text-[#71809a]">
                Create your business profile and start serving students.
              </p>

              {/* Switch */}
              <div className="mt-7 grid grid-cols-2 gap-2 p-1.5 bg-[#f4f3f8] rounded-2xl">
                <Link
                  href="/register"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-[#71809a] font-semibold"
                >
                  <GraduationCap size={18} />
                  Student
                </Link>

                <div className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#6537df] text-white font-bold shadow-lg shadow-purple-200">
                  <Store size={18} />
                  Vendor
                </div>
              </div>

              <form onSubmit={handleRegister}>
                {/* Business name */}
                <Field
                  label="Business / Service Name"
                  icon={<Building2 size={18} />}
                  placeholder="e.g. Annapurna Home Mess"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />

                {/* Owner */}
                <Field
                  label="Owner / Contact Person"
                  icon={<User size={18} />}
                  placeholder="e.g. Rahul Patil"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                />

                {/* Service Category */}
                <div className="mt-5">
                  <label className="flex items-center gap-2 text-sm font-bold mb-2 text-[#263654]">
                    <BriefcaseBusiness size={18} />
                    Service Category
                  </label>
                  <div className="relative">
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full h-14 px-4 pr-12 rounded-xl border border-[#dfe3eb] bg-[#fffdfc] outline-none focus:border-[#713ce5] focus:ring-4 focus:ring-purple-100 transition text-sm font-medium text-[#263654] cursor-pointer"
                    >
                      <option value="Mess & Food">Mess & Food</option>
                      <option value="Laundry">Laundry</option>
                      <option value="Housekeeping">Housekeeping</option>
                      <option value="PG & Hostels">PG & Hostels</option>
                      <option value="Cafes">Cafes</option>
                    </select>
                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7c879b]"
                    />
                  </div>
                </div>

                {/* Location */}
                <Field
                  label="Business Location"
                  icon={<MapPin size={18} />}
                  placeholder="Enter your service location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />

                {/* Phone + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Contact Number"
                    icon={<Phone size={18} />}
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <Field
                    label="Email"
                    icon={<Mail size={18} />}
                    placeholder="business@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <PasswordField
                    label="Password"
                    placeholder="Create password"
                    show={showPassword}
                    setShow={setShowPassword}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <PasswordField
                    label="Confirm Password"
                    placeholder="Confirm password"
                    show={showConfirm}
                    setShow={setShowConfirm}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                {/* Register */}
                <button
                  type="submit"
                  className="mt-7 w-full h-14 rounded-xl bg-[#6537df] hover:bg-[#5630c9] text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-200 transition hover:-translate-y-0.5"
                >
                  Create Vendor Account
                  <ArrowRight size={19} />
                </button>
              </form>

              {/* Login */}
              <p className="text-center text-sm text-[#758198] mt-7">
                Already registered?{" "}
                <Link
                  href="/login"
                  className="font-bold text-[#6335dc] hover:underline"
                >
                  Login
                </Link>
              </p>

              {/* Trust */}
              <div className="mt-7 pt-5 border-t border-[#eeeef2] flex items-center justify-center gap-4 text-xs text-[#7d879b]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-[#15a46a]" />
                  Secure registration
                </span>

                <span className="w-px h-4 bg-[#dddde2]" />

                <span>Campus-focused platform</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------------- VENDOR FEATURE ---------------- */

function VendorFeature({
  icon,
  title,
  text,
  bg,
  color,
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-11 h-11 rounded-xl ${bg} ${color} flex items-center justify-center`}
      >
        {icon}
      </div>

      <div>
        <p className="font-bold text-sm">
          {title}
        </p>

        <p className="text-xs text-[#7a879e] mt-0.5">
          {text}
        </p>
      </div>
    </div>
  );
}

/* ---------------- FIELD ---------------- */

function Field({
  label,
  icon,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="mt-5">
      <label className="flex items-center gap-2 text-sm font-bold mb-2 text-[#263654]">
        {icon}
        {label}
      </label>

      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-14 px-4 pr-4 rounded-xl border border-[#dfe3eb] bg-[#fffdfc] outline-none focus:border-[#713ce5] focus:ring-4 focus:ring-purple-100 transition placeholder:text-[#9aa4b7] text-sm text-[#263654]"
        />
      </div>
    </div>
  );
}

/* ---------------- PASSWORD ---------------- */

function PasswordField({
  label,
  placeholder,
  show,
  setShow,
  value,
  onChange,
}) {
  return (
    <div className="mt-5">
      <label className="flex items-center gap-2 text-sm font-bold mb-2 text-[#263654]">
        <Eye size={16} />
        {label}
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-14 px-4 pr-12 rounded-xl border border-[#dfe3eb] bg-[#fffdfc] outline-none focus:border-[#713ce5] focus:ring-4 focus:ring-purple-100 transition placeholder:text-[#9aa4b7] text-sm text-[#263654]"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7d879b]"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}