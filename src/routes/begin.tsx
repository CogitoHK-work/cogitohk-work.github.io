import { createFileRoute } from "@tanstack/react-router";
import { PhoneCall, AtSign, MapPinned, MessageCircle, Facebook, Instagram } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroChild from "@/assets/hero-child.jpg";
import { useT } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.36-.214-3.742.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.49-8.413z" />
    </svg>
  );
}

export const Route = createFileRoute("/begin")({
  head: () => ({
    meta: [
      { title: `${dict.en.begin.meta.title} | ${dict.zh.begin.meta.title}` },
      { name: "description", content: `${dict.en.begin.meta.description} ${dict.zh.begin.meta.description}` },
      { property: "og:title", content: dict.en.begin.meta.ogTitle },
      { property: "og:description", content: dict.en.begin.meta.ogDescription },
      { property: "og:url", content: "https://cogito.edu.hk/begin" },
    ],
    links: [{ rel: "canonical", href: "https://cogito.edu.hk/begin" }],
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
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h2 className="font-display text-4xl md:text-5xl text-balance text-primary-foreground max-w-2xl">
                {t.begin.contactTitle}
              </h2>
              <a
                href="https://wa.me/85264009989?text=Hi%20Cogito%2C%20I%27d%20like%20to%20book%20a%20free%20Parent%20Discovery%20Session."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.02] transition-transform"
              >
                <WhatsAppIcon className="h-4 w-4" /> {t.begin.bookCta}
              </a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <a href="tel:81288686" className="rounded-2xl bg-cream/10 border border-cream/20 p-5 hover:bg-cream/15 transition-colors">
                <PhoneCall className="h-5 w-5 text-gold" strokeWidth={2.25} />
                <div className="mt-3 text-xs uppercase tracking-wide opacity-70">{L.phone}</div>
                <div className="mt-1 font-display text-xl">8128 8686</div>
              </a>
              <a
                href="https://wa.me/85264009989"
                target="_blank"
                rel="noopener"
                className="rounded-2xl bg-cream/10 border border-cream/20 p-5 hover:bg-cream/15 transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5 text-gold" />
                <div className="mt-3 text-xs uppercase tracking-wide opacity-70">{L.waParents}</div>
                <div className="mt-1 font-display text-xl">6400 9989</div>
              </a>
              <a
                href="mailto:cogitohk@gmail.com"
                className="rounded-2xl bg-cream/10 border border-cream/20 p-5 hover:bg-cream/15 transition-colors"
              >
                <AtSign className="h-5 w-5 text-gold" strokeWidth={2.25} />
                <div className="mt-3 text-xs uppercase tracking-wide opacity-70">{L.email}</div>
                <div className="mt-1 font-display text-xl">cogitohk@gmail.com</div>
              </a>
              <div className="rounded-2xl bg-cream/10 border border-cream/20 p-5">
                <MapPinned className="h-5 w-5 text-gold" strokeWidth={2.25} />
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
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
