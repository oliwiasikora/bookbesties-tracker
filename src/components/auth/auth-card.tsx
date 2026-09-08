import Link from "next/link";
import type { ReactNode } from "react";

export function AuthCard({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return <main className="grid min-h-screen place-items-center bg-cream px-4 py-8"><section className="w-full max-w-md rounded-[28px] bg-paper p-6 shadow-sm ring-1 ring-line"><Link href="/home" className="font-serif text-3xl text-burgundy">BookBesties</Link><h1 className="mt-8 font-serif text-4xl leading-tight text-ink">{title}</h1><p className="mt-2 text-sm leading-6 text-muted">{subtitle}</p><div className="mt-6">{children}</div></section></main>;
}
