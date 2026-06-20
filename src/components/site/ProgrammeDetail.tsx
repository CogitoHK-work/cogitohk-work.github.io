import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Sparkles, BookOpen, Brain, Users } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";
import { ProgrammeNav, PROGRAMME_SLUGS, type ProgrammeSlug } from "./ProgrammeNav";

const ICONS = [Sparkles, BookOpen, Brain, Users] as const;

export function ProgrammeDetail({ slug }: { slug: ProgrammeSlug }) {
  const t = useT();
  const idx = PROGRAMME_SLUGS.indexOf(slug);
  const p = t.programmes.list[idx];
  const Icon = ICONS[idx];
  const prevIdx = idx > 0 ? idx - 1 : null;
  const nextIdx = idx < PROGRAMME_SLUGS.length - 1 ? idx + 1 : null;

  return (
    <>
      <ProgrammeNav active={slug} />

      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <Link
            to="/programmes"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.programmes.backToAll}
          </Link>
          <div className="mt-6 flex items-start gap-5">
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-balance leading-[1.05]">
                {p.title}
              </h1>
              <div className="mt-2 text-muted-foreground">{p.age}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-14">
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
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink mb-4">
              {t.programmes.highlights}
            </h2>
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

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
          {prevIdx !== null ? (
            <Link
              to={`/programmes/${PROGRAMME_SLUGS[prevIdx]}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.programmes.list[prevIdx].title}
            </Link>
          ) : <span />}
          {nextIdx !== null ? (
            <Link
              to={`/programmes/${PROGRAMME_SLUGS[nextIdx]}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors sm:ml-auto"
            >
              {t.programmes.list[nextIdx].title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : <span />}
        </div>
      </div>
    </>
  );
}