export type ReadingStatus = "want_to_read" | "reading" | "finished";

export type Book = { id: string; title: string; author: string; isbn?: string; coverUrl?: string; pageCount: number; publicationDate?: string };

export type UserBook = { id: string; book: Book; status: ReadingStatus; startDate?: string; finishDate?: string; rating?: number; review?: string };

export type ReadingGoal = { id: string; period: "annual" | "monthly" | "custom"; targetBooks: number; currentBooks: number; year: number };

export type Profile = { id: string; displayName: string; avatarUrl?: string; favouriteGenres: string[] };
