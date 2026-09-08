import type { ReadingGoal, UserBook } from "@/lib/types";

export const demoGoal: ReadingGoal = { id: "goal-2026", period: "annual", targetBooks: 50, currentBooks: 34, year: 2026 };

export const demoBooks: UserBook[] = [
  { id: "ub-1", status: "reading", startDate: "2026-09-02", book: { id: "book-1", title: "Jesień w księgarni", author: "Klara Nowicka", isbn: "9788328000001", pageCount: 384, coverUrl: "", publicationDate: "2026" } },
  { id: "ub-2", status: "finished", finishDate: "2026-09-04", rating: 5, book: { id: "book-2", title: "Listy do Luny", author: "Maja Wilk", isbn: "9788328000002", pageCount: 312, publicationDate: "2025" } },
  { id: "ub-3", status: "want_to_read", book: { id: "book-3", title: "Miasto róż", author: "Elena Rybak", isbn: "9788328000003", pageCount: 448, publicationDate: "2026" } },
];

export const leaderboardPreview = [
  { rank: 1, displayName: "OlaReads", avatar: "OR", score: "12 książek" },
  { rank: 2, displayName: "BookowaMarta", avatar: "BM", score: "10 książek" },
  { rank: 3, displayName: "ZaczytanaK", avatar: "ZK", score: "9 książek" },
];

export const currentProfile = { id: "demo", displayName: "Oliwia", avatarUrl: "", favouriteGenres: ["romance", "fantasy", "literatura piękna"] };
