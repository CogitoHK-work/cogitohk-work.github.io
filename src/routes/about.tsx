import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useT } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `${dict.en.about.meta.title} | ${dict.zh.about.meta.title}` },
      { name: "description", content: `${dict.en.about.meta.description} ${dict.zh.about.meta.description}` },
      { property: "og:title", content: dict.en.about.meta.ogTitle },
      { property: "og:description", content: dict.en.about.meta.ogDescription },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  const { grace, poem, hc } = t.about;

  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.about.section}</div>
          <h1 className="mt-3 max-w-4xl font-display text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.05]">
            {t.about.titleA}
            <em className="not-italic text-primary">{t.about.titleEm}</em>
            {t.about.titleB}
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">{t.about.lead}</p>
        </div>
      </section>

      {/* Founder 1 — Grace */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{grace.section}</div>
            <h2 className="mt-3 font-display text-4xl">{grace.name}</h2>
            <p className="mt-1 font-zh text-muted-foreground">{grace.nameZh}</p>
            <p className="mt-3 text-sm text-muted-foreground">{grace.role}</p>
            <div className="mt-6 aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/15 to-gold/15 border border-border flex items-center justify-center">
              <div className="font-display text-7xl text-primary/40">{grace.avatar}</div>
            </div>
          </div>
          <article className="rounded-3xl bg-card p-8 lg:p-12 border border-border shadow-soft">
            <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
              {grace.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p className="text-base text-muted-foreground italic">{grace.signature}</p>
            </div>
          </article>
        </div>
      </section>

      {/* Tagore's Poem */}
      <section className="bg-ink py-24 text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="hidden text-xs uppercase tracking-[0.3em] text-gold font-semibold">{poem.eyebrow}</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-cream text-balance">{poem.title}</h2>
          <blockquote className="mt-10 font-display text-3xl md:text-4xl leading-[1.4] text-cream/90 italic">
            {poem.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </blockquote>
          <p className="mt-10 text-cream/70">{poem.attribution}</p>
        </div>
      </section>

      {/* Founder 2 — H.C. */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <article className="rounded-3xl bg-card p-8 lg:p-12 border border-border shadow-soft order-2 lg:order-1">
            <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
              {hc.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p className="text-base text-muted-foreground italic">{hc.signature}</p>
            </div>
          </article>
          <div className="lg:sticky lg:top-32 order-1 lg:order-2">
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{hc.section}</div>
            <h2 className="mt-3 font-display text-4xl">{hc.name}</h2>
            <p className="mt-1 font-zh text-muted-foreground">{hc.nameZh}</p>
            <p className="mt-3 text-sm text-muted-foreground">{hc.role}</p>
            <div className="mt-6 aspect-[3/4] rounded-2xl bg-gradient-to-br from-gold/15 to-primary/15 border border-border flex items-center justify-center">
              <div className="font-display text-7xl text-primary/40">{hc.avatar}</div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
