import { BookCover } from "@/components/ui/book-cover";
import { demoBooks } from "@/lib/mock-data";
import type { ReadingStatus } from "@/lib/types";

const shelves: { label: string; status: ReadingStatus; empty: string }[] = [
  { label: "Chcę przeczytać", status: "want_to_read", empty: "Tu wpadną wszystkie książki z listy marzeń." },
  { label: "Czytam", status: "reading", empty: "Dodaj aktualną lekturę i śledź postęp." },
  { label: "Przeczytane", status: "finished", empty: "Twoje ukończone książki będą wyglądać tu świetnie." },
];

export function BookShelf() {
  return <div className="space-y-6"><header><p className="text-sm font-semibold text-burgundy">Biblioteczka</p><h1 className="font-serif text-4xl text-ink">Moje książki</h1></header>{shelves.map((shelf) => { const books = demoBooks.filter((item) => item.status === shelf.status); return <section key={shelf.status}><h2 className="font-serif text-2xl text-burgundy">{shelf.label}</h2>{books.length ? <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{books.map((item) => <article className="rounded-[22px] bg-paper p-3 shadow-sm ring-1 ring-line" key={item.id}><BookCover title={item.book.title} author={item.book.author} className="w-full" /><h3 className="mt-3 line-clamp-2 font-semibold leading-5">{item.book.title}</h3><p className="mt-1 text-sm text-muted">{item.book.author}</p></article>)}</div> : <div className="mt-3 rounded-[22px] border border-dashed border-line bg-paper p-5 text-sm text-muted">{shelf.empty}</div>}</section>; })}</div>;
}
