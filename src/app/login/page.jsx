"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("student");
  function handleLogin(event) {
    event.preventDefault();
    router.push(role === "student" ? "/student" : "/vendor");
  }

  return (
    <main className="min-h-screen bg-[#fffaf7] px-6 py-8 text-[#102957]">
      <header className="mx-auto flex max-w-7xl items-center justify-between"><Link href="/" className="text-2xl font-black">Studentica<span className="text-violet-600">.</span><small className="ml-2 text-xs font-semibold text-slate-500">Campus Concierge</small></Link><Link href="/register" className="text-sm font-bold text-violet-600">Create account →</Link></header>
      <section className="mx-auto grid max-w-7xl items-center gap-12 py-12 lg:grid-cols-2">
        <div className="block"><span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">✨ WELCOME BACK</span><h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">Your campus life,<span className="block text-violet-600">made easier.</span></h1><p className="mt-5 max-w-lg text-lg leading-8 text-slate-500">Access your bookings, services and campus community — all in one place.</p><div className="mt-8 space-y-5">{["Quick & easy access", "Verified services", "Student-friendly support"].map((item, index) => <div className="flex items-center gap-4" key={item}><span className={`grid h-11 w-11 place-items-center rounded-full ${index === 0 ? "bg-violet-100 text-violet-600" : index === 1 ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-500"}`}>{index === 0 ? "⚡" : index === 1 ? <ShieldCheck size={21} /> : "★"}</span><div><b>{item}</b><p className="text-sm text-slate-500">Built around your campus life</p></div></div>)}</div><div className="mt-8 h-48 rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85')] bg-cover bg-center shadow-xl" /></div>
        <div className="mx-auto w-full max-w-lg rounded-[2rem] bg-white p-7 shadow-2xl md:p-10"><span className="rounded-full bg-violet-100 px-4 py-2 text-xs font-bold text-violet-700">👋 STUDENT LOGIN</span><h1 className="mt-6 text-4xl font-black">Welcome back!</h1><p className="mt-2 text-slate-500">Sign in to continue to your campus hub.</p><div className="mt-7 grid grid-cols-2 rounded-xl bg-slate-100 p-1">{["student", "vendor"].map((item) => <button key={item} onClick={() => setRole(item)} className={`rounded-lg py-3 text-sm font-bold capitalize transition ${role === item ? "bg-violet-600 text-white shadow" : "text-slate-500"}`}>{item}</button>)}</div><form onSubmit={handleLogin} className="mt-7 space-y-5"><label className="block text-sm font-bold">Email<div className="mt-2 flex items-center rounded-xl border border-slate-200 px-3 focus-within:border-violet-500"><Mail className="text-slate-400" size={18} /><input required type="email" placeholder="you@example.com" className="w-full bg-transparent p-3 outline-none" /></div></label><label className="block text-sm font-bold">Password<div className="mt-2 flex items-center rounded-xl border border-slate-200 px-3 focus-within:border-violet-500"><LockKeyhole className="text-slate-400" size={18} /><input required type="password" placeholder="Enter password" className="w-full bg-transparent p-3 outline-none" /></div></label><div className="flex justify-between text-xs text-slate-500"><label><input type="checkbox" className="mr-2 accent-violet-600" />Remember me</label><Link href="/forgot-password" className="font-bold text-violet-600">Forgot password?</Link></div><button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-4 font-bold text-white shadow-lg">Login as {role === "student" ? "Student" : "Vendor"} <ArrowRight className="ml-2 inline" size={17} /></button></form><div className="my-6 flex items-center gap-3 text-xs text-slate-400"><span className="h-px flex-1 bg-slate-200" /> OR <span className="h-px flex-1 bg-slate-200" /></div><button className="w-full rounded-xl border border-slate-200 py-3 font-bold text-slate-700">🌈 Continue with Google</button><p className="mt-6 text-center text-sm text-slate-500">Don&apos;t have an account? <Link href="/register" className="font-bold text-violet-600">Create one</Link></p></div>
      </section>
    </main>
  );
}
