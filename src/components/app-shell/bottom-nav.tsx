"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookMarked, Home, PlusCircle, Trophy, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/moje-ksiazki", label: "Moje książki", icon: BookMarked },
  { href: "/dodaj", label: "Dodaj", icon: PlusCircle },
  { href: "/ranking", label: "Ranking", icon: Trophy },
  { href: "/profil", label: "Profil", icon: UserRound },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return <Link aria-current={active ? "page" : undefined} className={cn("flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[0.68rem] font-semibold text-muted", active && "bg-burgundy text-white")} href={href} key={href}><Icon className="h-5 w-5" aria-hidden /><span>{label}</span></Link>;
        })}
      </div>
    </nav>
  );
}
