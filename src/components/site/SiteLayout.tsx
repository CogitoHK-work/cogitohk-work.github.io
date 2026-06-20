import type { ReactNode } from "react";
import { TopBar } from "./TopBar";
import { Ticker } from "./Ticker";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/sonner";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-clip">
      <TopBar />
      <Ticker />
      <Header />
      <main className="flex-1 flex flex-col min-w-0 overflow-x-clip [&>*]:min-w-0 [&>*]:max-w-full">{children}</main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}

