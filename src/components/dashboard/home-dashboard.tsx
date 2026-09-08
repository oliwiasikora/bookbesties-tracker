import { Flame, Plus, Sparkles } from "lucide-react";
import { BookCover } from "@/components/ui/book-cover";
import { PrimaryButton } from "@/components/ui/primary-button";
import { ProgressRing } from "@/components/ui/progress-ring";
import { currentProfile, demoBooks, demoGoal, leaderboardPreview } from "@/lib/mock-data";
import { formatPercent } from "@/lib/utils";

export function HomeDashboard() {
  const currentBook = demoBooks.find((book) => book.status === "reading");
  const progress = formatPercent(demoGoal.currentBooks, demoGoal.targetBooks);

  return (
    <div className="space-y-5">
      <header className="relative overflow-hidden rounded-[28px] bg-paper px-5 py-6 shadow-sm ring-1 ring-line md:px-8">
        <div className="journal-dots absolute inset-0 opacity-60" />
        <div className="relative">
          <p className="flex items-center gap-2 text-sm font-semibold text-burgundy"><Sparkles className="h-4 w-4" aria-hidden />Cześć, {currentProfile.displayName}</p>
          <h1 className="mt-2 max-w-xl font-serif text-4xl leading-tight text-ink md:text-5xl">Twój czytelniczy wrzesień wygląda pięknie.</h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">Zapisuj postępy, oceniaj książki i zobacz, jak czytają inne Besties.</p>
          <PrimaryButton href="/dodaj" className="mt-5"><Plus className="h-5 w-5" aria-hidden />Dodaj książkę</PrimaryButton>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[24px] bg-paper p-5 shadow-sm ring-1 ring-line">
          <div className="flex items-center justify-between gap-4">
            <div><p className="text-sm font-semibold text-muted">Cel roczny</p><h2 className="mt-1 font-serif text-3xl text-burgundy">{demoGoal.currentBooks} / {demoGoal.targetBooks} książek</h2><p className="mt-2 text-sm text-muted">Przeczytam {demoGoal.targetBooks} książek w {demoGoal.year}.</p></div>
            <ProgressRing value={progress} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3"><Stat label="W tym miesiącu" value="4" /><Stat label="Strony" value="1268" /><Stat label="Seria" value="9 dni" icon={<Flame className="h-4 w-4" />} /></div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[24px] bg-burgundy p-5 text-white shadow-sm">
          <p className="text-sm font-semibold text-white/70">Teraz czytasz</p>
          {currentBook ? <div className="mt-4 grid grid-cols-[7.5rem_1fr] gap-4"><BookCover title={currentBook.book.title} author={currentBook.book.author} className="min-h-44 bg-paper text-burgundy" /><div className="flex flex-col justify-between py-1"><div><h2 className="font-serif text-2xl leading-7">{currentBook.book.title}</h2><p className="mt-2 text-sm text-white/75">{currentBook.book.author}</p></div><div><div className="h-2 rounded-full bg-white/20"><div className="h-2 w-[42%] rounded-full bg-gold" /></div><p className="mt-2 text-xs text-white/70">42% przeczytane</p></div></div></div> : <p className="mt-4 text-sm text-white/75">Dodaj książkę do sekcji „Czytam”, żeby śledzić postęp.</p>}
        </div>

        <div className="rounded-[24px] bg-paper p-5 shadow-sm ring-1 ring-line">
          <div className="flex items-center justify-between"><div><p className="text-sm font-semibold text-muted">Ranking Besties</p><h2 className="font-serif text-2xl text-ink">Książki w miesiącu</h2></div><a className="text-sm font-semibold text-burgundy" href="/ranking">Zobacz</a></div>
          <div className="mt-4 space-y-3">{leaderboardPreview.map((entry) => <div className="flex min-h-14 items-center gap-3 rounded-2xl bg-cream px-3" key={entry.displayName}><span className="w-6 text-sm font-bold text-burgundy">{entry.rank}</span><span className="grid size-9 place-items-center rounded-full bg-gold text-xs font-bold text-ink">{entry.avatar}</span><span className="min-w-0 flex-1 truncate font-semibold">{entry.displayName}</span><span className="text-sm text-muted">{entry.score}</span></div>)}</div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return <div className="rounded-[22px] bg-paper p-4 shadow-sm ring-1 ring-line"><p className="flex items-center gap-1 text-xs font-semibold text-muted">{icon}{label}</p><p className="mt-3 font-serif text-2xl text-burgundy">{value}</p></div>;
}
