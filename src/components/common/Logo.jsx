import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#424b55] text-white shadow-md">
        <Sparkles size={19} />
      </div>

      <div className="leading-none">
        <div className="text-xl font-extrabold tracking-tight text-[#424b55]">
          Campus<span className="text-[#7357d9]">Concierge</span>
        </div>

        <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#8b7c78]">
          Your campus life, sorted
        </div>
      </div>
    </Link>
  );
}