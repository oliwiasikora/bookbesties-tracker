import Link from "next/link";
import { BookMarked, Home, PlusCircle, Trophy, UserRound } from "lucide-react";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/moje-ksiazki", label: "Moje książki", icon: BookMarked },
  { href: "/dodaj", label: "Dodaj", icon: PlusCircle },
  { href: "/ranking", label: "Ranking", icon: Trophy },
  { href: "/profil", label: "Profil", icon: UserRound },
];

export function DesktopNav() {
  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-line bg-paper px-6 py-8 md:block">
      <Link href="/home" className="block"><p className="font-serif text-3xl text-burgundy">BookBesties</p><p className="mt-1 text-sm text-muted">czytelniczy tracker</p></Link>
      <nav className="mt-10 space-y-2">{navItems.map(({ href, label, icon: Icon }) => <Link className="flex min-h-12 items-center gap-3 rounded-full px-4 text-sm font-semibold text-ink transition hover:bg-cream-deep" href={href} key={href}><Icon className="h-5 w-5 text-burgundy" aria-hidden />{label}</Link>)}</nav>
    </aside>
  );
}
