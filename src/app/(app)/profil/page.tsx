import { signOutAction } from "@/app/auth-actions";
import { currentProfile, demoGoal } from "@/lib/mock-data";

export default function ProfilePage() {
  return (
    <div className="space-y-5">
      <section className="rounded-[28px] bg-paper p-5 shadow-sm ring-1 ring-line">
        <div className="flex items-center gap-4"><div className="grid size-20 place-items-center rounded-full bg-burgundy font-serif text-3xl text-white">OS</div><div><p className="text-sm font-semibold text-muted">Profil publiczny</p><h1 className="font-serif text-4xl text-ink">{currentProfile.displayName}</h1></div></div>
        <div className="mt-5 flex flex-wrap gap-2">{currentProfile.favouriteGenres.map((genre) => <span className="rounded-full bg-cream px-3 py-2 text-sm font-semibold text-burgundy" key={genre}>{genre}</span>)}</div>
      </section>
      <section className="grid grid-cols-2 gap-3"><Metric label="Przeczytane" value="134" /><Metric label="W tym roku" value="34" /><Metric label="Strony" value="11 482" /><Metric label="Seria" value="9 dni" /></section>
      <section className="rounded-[24px] bg-paper p-5 shadow-sm ring-1 ring-line"><p className="text-sm font-semibold text-muted">Cel roczny</p><h2 className="mt-1 font-serif text-3xl text-burgundy">{demoGoal.currentBooks} / {demoGoal.targetBooks}</h2><p className="mt-2 text-sm text-muted">Przeczytam {demoGoal.targetBooks} książek w {demoGoal.year}.</p></section>
      <form action={signOutAction}><button className="min-h-12 w-full rounded-full border border-burgundy px-5 text-sm font-bold text-burgundy">Wyloguj się</button></form>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-[22px] bg-paper p-4 shadow-sm ring-1 ring-line"><p className="text-xs font-semibold text-muted">{label}</p><p className="mt-2 font-serif text-3xl text-burgundy">{value}</p></div>;
}
