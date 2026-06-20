import type { ReactNode } from "react";
import { ProgrammeNav, type ProgrammeSlug } from "./ProgrammeNav";

export function ProgrammeLayout({
  active,
  children,
}: {
  active: ProgrammeSlug | "overview";
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-4 lg:py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        <aside className="bg-nav-bg lg:w-60 lg:shrink-0 lg:rounded-2xl">
          <div className="lg:sticky lg:top-28">
            <ProgrammeNav active={active} />
          </div>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
