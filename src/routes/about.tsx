import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useT } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import treeImg from "@/assets/tree-illustration.jpg";
import logo from "@/assets/cogito-logo.png";
import heroChild from "@/assets/hero-child.jpg";
import { useHomeMedia } from "@/hooks/useHomeMedia";

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
  const media = useHomeMedia();
  const featureSrc = media.feature ?? "/name-card.png";

  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:py-14 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.about.section}</div>
            <h1 className="mt-3 max-w-4xl font-display text-3xl md:text-4xl lg:text-5xl text-balance break-keep leading-[1.05]">
              {t.about.titleA}
              <em className="not-italic text-primary">{t.about.titleEm}</em>
              {t.about.titleB}
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted-foreground leading-relaxed">{t.about.lead}</p>
          </div>
          <img
            src={heroChild}
            alt=""
            loading="eager"
            className="hidden lg:block h-[33vh] w-full rounded-[2rem] object-cover shadow-elegant"
          />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={treeImg}
              alt="Tree of Wisdom illustration with neural pathways and golden sparks"
              width={1200}
              height={1200}
              loading="lazy"
              className="rounded-[2rem] shadow-soft"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.home.philSection}</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">{t.home.philTitle}</h2>
            <blockquote className="mt-6 border-l-2 border-gold pl-5 italic text-lg text-foreground/80">
              {t.home.philQuote}
            </blockquote>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>{t.home.philP1}</p>
              <p>{t.home.philP2}</p>
              <p className="font-display text-xl text-primary">{t.home.philP3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NAME + LOGO */}
      <section className="bg-cream/60 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <article className="rounded-3xl bg-card p-10 shadow-soft border border-border">
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.home.nameSection}</div>
            <h3 className="mt-2 font-display text-3xl">{t.home.nameTitle}</h3>
            <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row">
              <div className="shrink-0 overflow-hidden rounded-2xl border border-border shadow-soft">
                <img src={featureSrc} alt="Name card" className="h-24 w-auto object-cover" />
              </div>
              <div className="text-foreground/75 leading-relaxed">
                <p>
                  <strong className="text-primary">{t.home.nameP1A}</strong>
                  {t.home.nameP1B}
                  <em>{t.home.nameP1Em}</em>
                  {t.home.nameP1C}
                </p>
                <p className="mt-4">{t.home.nameP2}</p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl bg-card p-10 shadow-soft border border-border">
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.home.logoSection}</div>
            <h3 className="mt-2 font-display text-3xl">{t.home.logoTitle}</h3>
            <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row">
              <img src={logo} alt="Cogito 夏恩教育" loading="lazy" className="h-24 w-auto shrink-0" />
              <p className="text-foreground/75 leading-relaxed">
                <em>{t.home.logoBodyEm}</em>
                {t.home.logoBody}
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Message from Our Founders */}
      <section className="bg-cream/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.about.foundersSection}</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">{t.about.foundersTitle}</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* Grace */}
            <article className="rounded-3xl bg-card p-8 lg:p-10 shadow-soft border border-border">
              <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{grace.section}</div>
              <h3 className="mt-2 font-display text-3xl">{grace.name}</h3>
              <p className="mt-1 font-zh text-muted-foreground">{grace.nameZh}</p>
              <p className="mt-1 text-sm text-muted-foreground">{grace.role}</p>
              <div className="mt-6 aspect-[3/4] max-h-[240px] rounded-2xl bg-gradient-to-br from-primary/15 to-gold/15 border border-border flex items-center justify-center">
                <div className="font-display text-7xl text-primary/40">{grace.avatar}</div>
              </div>
              <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
                {grace.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <p className="text-base text-muted-foreground italic">{grace.signature}</p>
              </div>
            </article>

            {/* H.C. */}
            <article className="rounded-3xl bg-card p-8 lg:p-10 shadow-soft border border-border">
              <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{hc.section}</div>
              <h3 className="mt-2 font-display text-3xl">{hc.name}</h3>
              <p className="mt-1 font-zh text-muted-foreground">{hc.nameZh}</p>
              <p className="mt-1 text-sm text-muted-foreground">{hc.role}</p>
              <div className="mt-6 aspect-[3/4] max-h-[240px] rounded-2xl bg-gradient-to-br from-gold/15 to-primary/15 border border-border flex items-center justify-center">
                <div className="font-display text-7xl text-primary/40">{hc.avatar}</div>
              </div>
              <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
                {hc.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <p className="text-base text-muted-foreground italic">{hc.signature}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Tagore's Poem */}
      <section className="bg-ink py-12 text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="hidden text-xs uppercase tracking-[0.3em] text-gold font-semibold">{poem.eyebrow}</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream text-balance">{poem.title}</h2>
          <blockquote className="mt-10 font-display text-3xl md:text-4xl leading-[1.4] text-cream/90 italic">
            {poem.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </blockquote>
          <p className="mt-10 text-cream/70">{poem.attribution}</p>
        </div>
      </section>
    </SiteLayout>
  );
}
