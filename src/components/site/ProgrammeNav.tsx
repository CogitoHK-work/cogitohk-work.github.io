import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export const PROGRAMME_SLUGS = ["kids", "english", "mathematics", "chinese"] as const;
export type ProgrammeSlug = (typeof PROGRAMME_SLUGS)[number];

export function ProgrammeNav({ active }: { active?: ProgrammeSlug | "overview" }) {
  const t = useT();
  const items = [
    { slug: "overview" as const, label: t.programmes.overview, to: "/programmes" },
    ...PROGRAMME_SLUGS.map((slug, idx) => ({
      slug,
      label: t.programmes.list[idx].title,
      to: `/programmes/${slug}` as string,
    })),
  ];

  return (
    <nav className="border-b border-border/60 bg-nav-bg lg:border-b-0 lg:border-r lg:border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:mx-0 lg:max-w-none lg:px-0">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 py-3 text-sm lg:flex-col lg:gap-1 lg:py-0 lg:text-base">
          {items.map((it) => {
            const isActive = active === it.slug;
            return (
              <li key={it.slug} className="lg:w-full">
                <Link
                  to={it.to as string}
                  className={cn(
                    "inline-block transition-colors lg:block lg:w-full lg:rounded-xl lg:px-4 lg:py-3",
                    isActive
                      ? "font-medium text-primary lg:bg-background/80 lg:shadow-sm"
                      : "text-foreground/70 hover:text-primary lg:hover:bg-background/50"
                  )}
                >
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
