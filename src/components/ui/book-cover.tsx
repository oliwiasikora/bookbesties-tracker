import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

type BookCoverProps = { title: string; author: string; className?: string };

export function BookCover({ title, author, className }: BookCoverProps) {
  return <div className={cn("cover-shadow relative flex aspect-[2/3] min-h-36 overflow-hidden rounded-[10px] bg-burgundy p-3 text-paper", className)}><div className="absolute inset-y-0 left-0 w-3 bg-black/15" /><div className="journal-dots absolute inset-0 opacity-20" /><div className="relative flex h-full flex-col justify-between"><BookOpen className="h-5 w-5 text-gold" aria-hidden /><div><p className="font-serif text-lg leading-5">{title}</p><p className="mt-2 text-xs uppercase tracking-[0.18em] text-paper/75">{author}</p></div></div></div>;
}
