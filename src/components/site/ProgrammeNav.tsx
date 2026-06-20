import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";

export const PROGRAMME_SLUGS = ["kids", "english", "mathematics", "chinese"] as const;
export type ProgrammeSlug = (typeof PROGRAMME_SLUGS)[number];

export function ProgrammeNav({ active }: { active?: ProgrammeSlug | "overview" }) {
  const t = useT();
  const items = [
    { slug: "overview" as const, label: t.programmes.overview, to: "/programmes" },
    ...PROGRAMME_SLUGS.map((slug, idx) => ({
      slug,
      label: t.programmes.list[idx].title,
      to: `/programmes/${slug}` as const,
    })),
  ];

  return (
    <nav className="border-b border-border/60 bg-cream/40">
      <div className="mx-auto max-w-7xl px-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 py-3 text-sm">
          {items.map((it) => {
            const isActive = active === it.slug;
            return (
              <li key={it.slug}>
                <Link
                  to={it.to}
                  className={
                    isActive
                      ? "font-medium text-primary"
                      : "text-foreground/70 hover:text-primary transition-colors"
                  }
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