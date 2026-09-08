import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BookBesties Tracker",
  description: "Mobilny dziennik czytelniczy i społecznościowy tracker dla BookBesties.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
