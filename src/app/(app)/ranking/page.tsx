import { leaderboardPreview } from "@/lib/mock-data";

const tabs = ["Książki w miesiącu", "Książki w roku", "Seria czytania", "% celu"];

export default function RankingPage() {
  return (
    <div className="space-y-5">
      <header><p className="text-sm font-semibold text-burgundy">Społeczność</p><h1 className="font-serif text-4xl text-ink">Ranking</h1></header>
      <div className="flex snap-x gap-2 overflow-x-auto pb-1">
        {tabs.map((tab, index) => <button className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${index === 0 ? "bg-burgundy text-white" : "bg-paper text-ink"}`} key={tab}>{tab}</button>)}
      </div>
      <section className="space-y-3">
        {leaderboardPreview.concat([{ rank: 4, displayName: "NataliaNotes", avatar: "NN", score: "8 książek" }, { rank: 5, displayName: "KawaIKsiążki", avatar: "KK", score: "7 książek" }]).map((entry) => (
          <article className="flex min-h-16 items-center gap-3 rounded-[22px] bg-paper px-4 shadow-sm ring-1 ring-line" key={entry.displayName}>
            <span className="w-7 font-serif text-2xl text-burgundy">{entry.rank}</span>
            <span className="grid size-11 place-items-center rounded-full bg-gold text-sm font-bold text-ink">{entry.avatar}</span>
            <span className="min-w-0 flex-1 truncate font-semibold">{entry.displayName}</span>
            <span className="text-sm text-muted">{entry.score}</span>
          </article>
        ))}
      </section>
    </div>
  );
}
