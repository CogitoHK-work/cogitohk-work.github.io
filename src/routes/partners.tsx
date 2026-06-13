import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Building2, Check, MessageCircle, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import treeImg from "@/assets/tree-illustration.jpg";
import { useT } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: `${dict.en.partners.meta.title} | ${dict.zh.partners.meta.title}` },
      { name: "description", content: `${dict.en.partners.meta.description} ${dict.zh.partners.meta.description}` },
      { property: "og:title", content: dict.en.partners.meta.ogTitle },
      { property: "og:description", content: dict.en.partners.meta.ogDescription },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  const t = useT();
  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:py-14 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.partners.section}</div>
            <h1 className="mt-3 max-w-4xl font-display text-3xl md:text-4xl lg:text-5xl text-balance break-keep leading-[1.05]">
              {t.partners.titleA}
              <em className="not-italic text-primary">{t.partners.titleEm}</em>
              {t.partners.titleB}
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted-foreground leading-relaxed">{t.partners.lead1}</p>
            <p className="mt-3 max-w-3xl text-foreground/75 leading-relaxed">{t.partners.lead2}</p>
          </div>
          <img
            src={treeImg}
            alt=""
            loading="eager"
            className="hidden lg:block h-[33vh] w-full rounded-[2rem] object-cover shadow-elegant"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Partner */}
          <article className="rounded-3xl border border-border bg-card p-10 shadow-soft hover:shadow-elegant transition-shadow">
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.partners.partnerSection}</div>
            <div className="mt-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-foreground">
              <Handshake className="h-7 w-7 text-gold" />
            </div>
            <h2 className="mt-5 font-display text-3xl">{t.partners.partnerTitle}</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">{t.partners.partnerP1}</p>
            <p className="mt-3 text-foreground/75 leading-relaxed">{t.partners.partnerP2}</p>
            <div className="mt-6 rounded-xl bg-gold/5 border border-gold/30 p-4 text-sm text-foreground/80">
              <strong className="text-foreground/80">{t.partners.partnerNoteLabel}</strong> {t.partners.partnerNote}
            </div>
          </article>

          {/* Franchisee */}
          <article className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-card p-10 shadow-elegant">
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.partners.franchiseeSection}</div>
            <div className="mt-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground">
              <Building2 className="h-7 w-7" />
            </div>
            <h2 className="mt-5 font-display text-3xl">{t.partners.franchiseeTitle}</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">{t.partners.franchiseeP1}</p>
            <p className="mt-3 text-foreground/75 leading-relaxed">{t.partners.franchiseeP2}</p>
            <ul className="mt-6 space-y-2.5">
              {t.partners.franchiseeBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/80 text-sm">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Contact */}
        <div className="mt-16 rounded-3xl bg-ink p-10 lg:p-14 text-cream">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl text-cream text-balance">{t.partners.contactTitle}</h3>
              <p className="mt-4 text-cream/75 leading-relaxed">
                {t.partners.contactLeadA}
                <a className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold" href="mailto:cogitohk@gmail.com">cogitohk@gmail.com</a>
                {t.partners.contactLeadB}
                <strong className="text-gold">9494 0994</strong>
                {t.partners.contactLeadC}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="https://wa.me/85294940994?text=Hi%20Cogito%2C%20I%27d%20like%20to%20learn%20about%20joining%20as%20a%20partner%2Ffranchisee."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="h-4 w-4" /> {t.partners.ctaWA}
              </a>
              <a
                href="mailto:cogitohk@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
              >
                <Mail className="h-4 w-4" /> {t.partners.ctaEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
