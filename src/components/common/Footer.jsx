import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#e3dada] bg-[#2f343b] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <div className="mb-5 rounded-2xl bg-white p-3 inline-block">
            <Logo />
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#c9c4c5]">
            Campus Concierge brings mess, laundry, cleaning, PGs,
            cafes and roommate discovery together in one simple
            student platform.
          </p>
        </div>

        {/* Student */}
        <div>
          <h3 className="mb-5 font-bold">For Students</h3>

          <div className="flex flex-col gap-3 text-sm text-[#c9c4c5]">
            <Link href="/student/services">Explore Services</Link>
            <Link href="/pass">Fresher Pass</Link>
            <Link href="/roomate">Find Roommate</Link>
            <Link href="/bookings">My Bookings</Link>
          </div>
        </div>

        {/* Vendors */}
        <div>
          <h3 className="mb-5 font-bold">For Vendors</h3>

          <div className="flex flex-col gap-3 text-sm text-[#c9c4c5]">
            <Link href="/register">Register Business</Link>
            <Link href="/vendor">Vendor Portal</Link>
            <Link href="/vendor/services">Manage Services</Link>
            <Link href="/vendor/orders">Manage Orders</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 font-bold">Campus Concierge</h3>

          <div className="flex flex-col gap-4 text-sm text-[#c9c4c5]">
            <div className="flex gap-3">
              <MapPin size={18} />
              <span>Near Campus Main Gate</span>
            </div>

            <div className="flex gap-3">
              <Mail size={18} />
              <span>hello@campusconcierge.in</span>
            </div>

            <div className="flex gap-3">
              <Phone size={18} />
              <span>+91 90000 00000</span>
            </div>

            <div className="flex gap-3">
              <Instagram size={18} />
              <span>@campusconcierge</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-5 text-xs text-[#aaa5a7] md:flex-row lg:px-8">
          <span>© 2026 Campus Concierge. All rights reserved.</span>

          <span>Built for better campus living.</span>
        </div>
      </div>
    </footer>
  );
}