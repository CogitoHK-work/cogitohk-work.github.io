import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import smallGroup from "@/assets/small-group.jpg";
import { useT } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

export const Route = createFileRoute("/advantage")({
  head: () => ({
    meta: [
      { title: `${dict.en.advantage.meta.title} | ${dict.zh.advantage.meta.title}` },
      { name: "description", content: `${dict.en.advantage.meta.description} ${dict.zh.advantage.meta.description}` },
      { property: "og:title", content: dict.en.advantage.meta.ogTitle },
      { property: "og:description", content: dict.en.advantage.meta.ogDescription },
    ],
  }),
  component: AdvantagePage,
});

function AdvantagePage() {
  const t = useT();
  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.advantage.section}</div>
          <h1 className="mt-3 max-w-4xl font-display text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.05]">
            {t.advantage.titleA}
            <em className="not-italic text-primary">{t.advantage.titleEm}</em>
            {t.advantage.titleB}
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">{t.advantage.lead}</p>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-display text-4xl text-balance">{t.advantage.principlesTitle}</h2>
            <p className="mt-4 text-muted-foreground">{t.advantage.principlesLead}</p>
          </div>
          <ol className="space-y-5">
            {t.advantage.principles.map((p, i) => (
              <li key={i} className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="font-display text-3xl text-gold leading-none">{String(i + 1).padStart(2, "0")}</div>
                <p className="text-foreground/80 leading-relaxed">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Features w/ image */}
      <section className="bg-cream/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
            <div className="lg:sticky lg:top-32 self-start">
              <img
                src={smallGroup}
                alt="Three children learning together at a bright study table"
                width={1400}
                height={1000}
                loading="lazy"
                className="rounded-[2rem] shadow-elegant"
              />
              <div className="mt-6 rounded-2xl bg-card p-5 border border-border shadow-soft">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{t.advantage.classSize}</div>
                <div className="mt-1 font-display text-3xl text-primary">1 : 3</div>
                <div className="text-sm text-muted-foreground">{t.advantage.classSizeDesc}</div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="font-display text-4xl text-balance mb-4">{t.advantage.featuresTitle}</h2>
              {t.advantage.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl bg-card p-6 border border-border shadow-soft hover:shadow-elegant transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-display text-lg text-ink">{f.title}</div>
                      <p className="mt-1 text-foreground/75 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
