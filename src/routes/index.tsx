import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Brain, BookOpen, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import treeImg from "@/assets/tree-illustration.jpg";
import logo from "@/assets/cogito-logo.png";
import { useT } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import { useHomeMedia } from "@/hooks/useHomeMedia";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${dict.en.home.meta.title} | ${dict.zh.home.meta.title}` },
      {
        name: "description",
        content: `${dict.en.home.meta.description} ${dict.zh.home.meta.description}`,
      },
      { property: "og:title", content: dict.en.home.meta.ogTitle },
      { property: "og:description", content: dict.en.home.meta.ogDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const ICONS = [Sparkles, BookOpen, Brain, Users] as const;
const CARD_TINTS = [
  "from-gold/20 to-gold/5",
  "from-primary/15 to-primary/5",
  "from-primary/15 to-primary/5",
  "from-gold/20 to-gold/5",
] as const;

function HomePage() {
  const t = useT();
  const media = useHomeMedia();
  const heroSrc = media.hero ?? heroImg;
  const featureSrc = media.feature ?? "/hero-feature-1.4.1.png";

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-warm">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> {t.home.heroBadge}
            </div>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-balance">
              {t.home.heroTitleA}
              <em className="not-italic text-primary">{t.home.heroTitleEm}</em>
              {t.home.heroTitleB}
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed text-pretty">
              {t.home.heroLead}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/programmes"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant hover:shadow-gold transition-all hover:scale-[1.02]"
              >
                {t.home.ctaExplore}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/85264009989?text=Hi%20Cogito%2C%20I%27d%20like%20to%20book%20a%20free%20discovery%20session."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-7 py-3.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                {t.home.ctaBook}
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
              <div>
                <div className="font-display text-2xl text-ink">40+</div>
                <div className="text-xs uppercase tracking-wide">{t.home.stat40}</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl text-ink">1 : 3</div>
                <div className="text-xs uppercase tracking-wide">{t.home.stat13}</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl text-ink">3–12</div>
                <div className="text-xs uppercase tracking-wide">{t.home.statAges}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={heroSrc}
              alt="A young learner deep in study at a sunlit desk"
              width={1600}
              height={1200}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-card p-5 shadow-elegant border border-border max-w-[220px]">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">{t.home.heroCardLabel}</div>
              <div className="mt-1 font-display text-lg text-ink leading-tight">
                {t.home.heroCardLine}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-5xl px-6 pt-16">
        <div className="grid gap-6 md:grid-cols-[1.6fr_1fr] md:items-start">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant h-[500px]">
            <video
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant bg-card">
            <iframe
              title="Facebook updates"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2F%25E5%25A4%258F%25E6%2581%25A9%25E8%2594%25A1%25E8%2580%2581%25E5%25B8%25AB-Shane-Grace-Choi-Education-100063495683700%2F&tabs=timeline&width=380&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="380"
              height="500"
              loading="lazy"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              allow="encrypted-media"
              className="w-full h-[500px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
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
          <div className="relative">
            <img
              src={treeImg}
              alt="Tree of Wisdom illustration with neural pathways and golden sparks"
              width={1200}
              height={1200}
              loading="lazy"
              className="rounded-[2rem] shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* NAME + LOGO */}
      <section className="bg-cream/60 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <article className="rounded-3xl bg-card p-10 shadow-soft border border-border">
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.home.nameSection}</div>
            <h3 className="mt-2 font-display text-3xl">{t.home.nameTitle}</h3>
            {/*
              Swappable hero photo "hero-feature-1.4.1".
              To replace: overwrite the file at `public/hero-feature-1.4.1.png`
              with your new image (keep the same filename). No code changes needed.
            */}
            <div className="mt-6 inline-block overflow-hidden rounded-2xl border border-border shadow-soft">
              <img
                src={featureSrc}
                alt="hero-feature-1.4.1"
                className="h-24 w-auto object-cover"
              />
            </div>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              <strong className="text-primary">{t.home.nameP1A}</strong>
              {t.home.nameP1B}
              <em>{t.home.nameP1Em}</em>
              {t.home.nameP1C}
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">{t.home.nameP2}</p>
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

      {/* QUICK PROGRAMMES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.home.progSection}</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">{t.home.progTitle}</h2>
          </div>
          <Link to="/programmes" className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow">
            {t.home.progViewAll} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.home.cards.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Link
                key={p.name}
                to="/programmes"
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${CARD_TINTS[i]} opacity-60`} />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-card shadow-soft text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.age}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {t.home.progLearnMore} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-12 lg:p-16 text-primary-foreground">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-balance text-primary-foreground">
                {t.home.ctaTitle}
              </h2>
              <p className="mt-5 max-w-xl text-primary-foreground/80 text-lg">{t.home.ctaLead}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/begin"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.02] transition-transform"
              >
                {t.home.ctaStart} <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/85264009989"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> {t.home.ctaWA}
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
