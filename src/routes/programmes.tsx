import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, BookOpen, Brain, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroChild from "@/assets/hero-child.jpg";
import { useT } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import { ProgrammeNav, PROGRAMME_SLUGS } from "@/components/site/ProgrammeNav";

export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title: `${dict.en.programmes.meta.title} | ${dict.zh.programmes.meta.title}` },
      { name: "description", content: `${dict.en.programmes.meta.description} ${dict.zh.programmes.meta.description}` },
      { property: "og:title", content: dict.en.programmes.meta.ogTitle },
      { property: "og:description", content: dict.en.programmes.meta.ogDescription },
      { property: "og:url", content: "https://cogito.edu.hk/programmes" },
    ],
    links: [{ rel: "canonical", href: "https://cogito.edu.hk/programmes" }],
  }),
  component: ProgrammesPage,
});

const ICONS = [Sparkles, BookOpen, Brain, Users] as const;

function ProgrammesPage() {
  const t = useT();

  return (
    <SiteLayout>
      <ProgrammeNav active="overview" />

      <section className="bg-gradient-warm">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:py-14 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.programmes.section}</div>
            <h1 className="mt-3 max-w-4xl font-display text-3xl md:text-4xl lg:text-5xl text-balance break-keep leading-[1.05]">
              {t.programmes.titleA}
              <em className="not-italic text-primary">{t.programmes.titleEm}</em>
              {t.programmes.titleB}
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted-foreground leading-relaxed">{t.programmes.lead1}</p>
            <p className="mt-3 max-w-3xl text-foreground/75 leading-relaxed">{t.programmes.lead2}</p>
          </div>
          <img
            src={heroChild}
            alt=""
            loading="eager"
            className="hidden lg:block h-[33vh] w-full rounded-[2rem] object-cover shadow-elegant"
          />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <h2 className="font-display text-2xl md:text-3xl text-ink">{t.programmes.explore}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {t.programmes.list.map((p, idx) => {
            const Icon = ICONS[idx];
            const slug = PROGRAMME_SLUGS[idx];
            return (
              <Link
                key={slug}
                to={`/programmes/${slug}` as string}
                className="group flex flex-col rounded-3xl border border-border bg-card p-7 lg:p-8 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant hover:border-primary/40"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-balance group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="mt-1 text-sm text-muted-foreground">{p.age}</div>
                <p className="mt-4 text-foreground/75 leading-relaxed line-clamp-4">{p.intro}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {t.programmes.learnMore}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl border border-dashed border-gold/40 bg-gold/5 p-8 text-center">
          <div className="font-display text-xl text-ink">{t.programmes.comingSoon}</div>
          <p className="mt-2 text-sm text-muted-foreground">{t.programmes.comingSoonLead}</p>
        </div>
      </div>
    </SiteLayout>
  );
}
