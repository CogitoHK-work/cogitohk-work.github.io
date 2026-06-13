import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles, BookOpen, Brain, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useT } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title: `${dict.en.programmes.meta.title} | ${dict.zh.programmes.meta.title}` },
      { name: "description", content: `${dict.en.programmes.meta.description} ${dict.zh.programmes.meta.description}` },
      { property: "og:title", content: dict.en.programmes.meta.ogTitle },
      { property: "og:description", content: dict.en.programmes.meta.ogDescription },
    ],
    links: [{ rel: "canonical", href: "/programmes" }],
  }),
  component: ProgrammesPage,
});

const ICONS = [Sparkles, BookOpen, Brain, Users] as const;
const IDS = ["kids", "english", "mathematics", "chinese"] as const;

function ProgrammesPage() {
  const t = useT();

  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
          <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.programmes.section}</div>
          <h1 className="mt-3 max-w-4xl font-display text-3xl md:text-4xl lg:text-5xl text-balance leading-[1.05]">
            {t.programmes.titleA}
            <em className="not-italic text-primary">{t.programmes.titleEm}</em>
            {t.programmes.titleB}
          </h1>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground leading-relaxed">{t.programmes.lead1}</p>
          <p className="mt-3 max-w-3xl text-foreground/75 leading-relaxed">{t.programmes.lead2}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20 space-y-20">
        {t.programmes.list.map((p, idx) => {
          const Icon = ICONS[idx];
          return (
            <article key={IDS[idx]} id={IDS[idx]} className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">2.{idx + 1}</div>
                <div className="mt-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="mt-5 font-display text-4xl text-balance">{p.title}</h2>
                <div className="mt-2 text-muted-foreground">{p.age}</div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-soft">
                <p className="text-lg text-foreground/85 leading-relaxed">{p.intro}</p>
                <p className="mt-5 text-foreground/75 leading-relaxed">{p.body}</p>

                {p.tracks.length > 0 && (
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {p.tracks.map((tr) => (
                      <div key={tr.name} className="rounded-2xl bg-cream/70 p-5 border border-border/60">
                        <div className="font-display text-lg text-primary">{tr.name}</div>
                        <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{tr.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-8 border-t border-border pt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-ink mb-4">{t.programmes.highlights}</h3>
                  <ul className="space-y-2.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-foreground/80">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}

        <div className="rounded-3xl border border-dashed border-gold/40 bg-gold/5 p-8 text-center">
          <div className="font-display text-xl text-ink">{t.programmes.comingSoon}</div>
          <p className="mt-2 text-sm text-muted-foreground">{t.programmes.comingSoonLead}</p>
        </div>
      </div>
    </SiteLayout>
  );
}
