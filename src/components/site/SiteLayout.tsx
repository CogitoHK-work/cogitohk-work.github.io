import type { ReactNode } from "react";
import { TopBar } from "./TopBar";
import { Ticker } from "./Ticker";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/sonner";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <Ticker />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}

