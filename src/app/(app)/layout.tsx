import type { ReactNode } from "react";
import { BottomNav } from "@/components/app-shell/bottom-nav";
import { DesktopNav } from "@/components/app-shell/desktop-nav";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl">
        <DesktopNav />
        <main className="w-full px-4 pb-28 pt-5 sm:px-6 md:px-8 md:pb-10">{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}
