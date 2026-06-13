import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroChild from "@/assets/hero-child.jpg";
import { useT } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

export const Route = createFileRoute("/begin")({
  head: () => ({
    meta: [
      { title: `${dict.en.begin.meta.title} | ${dict.zh.begin.meta.title}` },
      { name: "description", content: `${dict.en.begin.meta.description} ${dict.zh.begin.meta.description}` },
      { property: "og:title", content: dict.en.begin.meta.ogTitle },
      { property: "og:description", content: dict.en.begin.meta.ogDescription },
    ],
    links: [{ rel: "canonical", href: "/begin" }],
  }),
  component: BeginPage,
});

function BeginPage() {
  const t = useT();
  const L = t.begin.labels;

  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:py-14 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.begin.section}</div>
            <h1 className="mt-3 max-w-4xl font-display text-3xl md:text-4xl lg:text-5xl text-balance break-keep leading-[1.05]">
              {t.begin.titleA}
              <em className="not-italic text-primary">{t.begin.titleEm}</em>
              {t.begin.titleB}
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted-foreground leading-relaxed">{t.begin.lead}</p>
          </div>
          <img
            src={heroChild}
            alt=""
            loading="eager"
            className="hidden lg:block h-[33vh] w-full rounded-[2rem] object-cover shadow-elegant"
          />
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.begin.steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant transition-shadow"
            >
              <div className="font-display text-5xl text-gold/40 leading-none">{s.n}</div>
              <h3 className="mt-4 font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTAs */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] bg-gradient-primary p-12 lg:p-16 text-primary-foreground relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl text-balance text-primary-foreground max-w-2xl">
              {t.begin.contactTitle}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <a href="tel:81288686" className="rounded-2xl bg-cream/10 border border-cream/20 p-5 hover:bg-cream/15 transition-colors">
                <Phone className="h-5 w-5 text-gold" />
                <div className="mt-3 text-xs uppercase tracking-wide opacity-70">{L.phone}</div>
                <div className="mt-1 font-display text-xl">8128 8686</div>
              </a>
              <a
                href="https://wa.me/85264009989"
                target="_blank"
                rel="noopener"
                className="rounded-2xl bg-cream/10 border border-cream/20 p-5 hover:bg-cream/15 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-gold" />
                <div className="mt-3 text-xs uppercase tracking-wide opacity-70">{L.waParents}</div>
                <div className="mt-1 font-display text-xl">6400 9989</div>
              </a>
              <a
                href="https://wa.me/85294940994"
                target="_blank"
                rel="noopener"
                className="rounded-2xl bg-cream/10 border border-cream/20 p-5 hover:bg-cream/15 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-gold" />
                <div className="mt-3 text-xs uppercase tracking-wide opacity-70">{L.waOthers}</div>
                <div className="mt-1 font-display text-xl">9494 0994</div>
              </a>
              <a
                href="mailto:cogitohk@gmail.com"
                className="rounded-2xl bg-cream/10 border border-cream/20 p-5 hover:bg-cream/15 transition-colors"
              >
                <Mail className="h-5 w-5 text-gold" />
                <div className="mt-3 text-xs uppercase tracking-wide opacity-70">{L.email}</div>
                <div className="mt-1 font-display text-xl">cogitohk@gmail.com</div>
              </a>
              <div className="rounded-2xl bg-cream/10 border border-cream/20 p-5">
                <MapPin className="h-5 w-5 text-gold" />
                <div className="mt-3 text-xs uppercase tracking-wide opacity-70">{L.showcase}</div>
                <div className="mt-1 font-display text-xl">{L.showcaseValue}</div>
                <div className="text-xs opacity-70 mt-1">{L.showcaseHint}</div>
              </div>
              <div className="rounded-2xl bg-cream/10 border border-cream/20 p-5">
                <div className="flex gap-2">
                  <Facebook className="h-5 w-5 text-gold" />
                  <Instagram className="h-5 w-5 text-gold" />
                </div>
                <div className="mt-3 text-xs uppercase tracking-wide opacity-70">{L.social}</div>
                <div className="mt-1 font-display text-xl">{L.socialValue}</div>
                <div className="text-xs opacity-70 mt-1">{L.socialHint}</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://wa.me/85264009989?text=Hi%20Cogito%2C%20I%27d%20like%20to%20book%20a%20free%20Parent%20Discovery%20Session."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="h-4 w-4" /> {t.begin.bookCta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
