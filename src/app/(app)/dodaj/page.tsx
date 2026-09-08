import { Barcode, Camera, Search } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";

export default function AddBookPage() {
  return (
    <div className="space-y-5">
      <header>
        <p className="text-sm font-semibold text-burgundy">Nowa książka</p>
        <h1 className="font-serif text-4xl text-ink">Dodaj do półki</h1>
      </header>
      <section className="rounded-[26px] bg-paper p-5 shadow-sm ring-1 ring-line">
        <label className="text-sm font-semibold text-ink" htmlFor="book-search">Szukaj po tytule, autorce albo ISBN</label>
        <div className="mt-3 flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-cream px-4">
          <Search className="h-5 w-5 text-burgundy" aria-hidden />
          <input className="w-full bg-transparent text-base outline-none" id="book-search" placeholder="np. 978..." type="search" />
        </div>
        <PrimaryButton className="mt-4 w-full">Szukaj książki</PrimaryButton>
      </section>
      <section className="rounded-[26px] bg-burgundy p-5 text-white shadow-sm">
        <div className="flex items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/12"><Camera className="h-6 w-6 text-gold" aria-hidden /></span>
          <div>
            <h2 className="font-serif text-2xl">Skanuj kod ISBN</h2>
            <p className="mt-2 text-sm leading-6 text-white/75">W kolejnym kroku użyjemy aparatu telefonu, odczytamy kod i pokażemy ekran potwierdzenia przed zapisaniem książki.</p>
          </div>
        </div>
        <button className="mt-5 flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-ink"><Barcode className="h-5 w-5" aria-hidden />Otwórz skaner</button>
      </section>
      <section className="rounded-[26px] bg-paper p-5 shadow-sm ring-1 ring-line">
        <p className="text-sm font-semibold text-muted">Po znalezieniu książki</p>
        <div className="mt-4 grid gap-2">
          {["Chcę przeczytać", "Czytam", "Przeczytałam"].map((status) => <button className="min-h-12 rounded-2xl border border-line bg-cream px-4 text-left text-sm font-semibold text-ink" key={status}>{status}</button>)}
        </div>
      </section>
    </div>
  );
}
