import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Building2, Check, MessageCircle, Send } from "lucide-react";
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
      { property: "og:url", content: "https://cogito.edu.hk/partners" },
    ],
    links: [{ rel: "canonical", href: "https://cogito.edu.hk/partners" }],
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

        {/* Interest Form */}
        <div className="mt-16 rounded-3xl border border-border bg-card p-10 lg:p-14 shadow-soft">
          {!submitted ? (
            <>
              <h3 className="font-display text-2xl md:text-3xl text-balance">{t.partners.formTitle}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{t.partners.formLead}</p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="pi-name">{t.partners.formName}</Label>
                  <Input
                    id="pi-name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    maxLength={100}
                    placeholder=""
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pi-email">{t.partners.formEmail}</Label>
                  <Input
                    id="pi-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    maxLength={255}
                    placeholder=""
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pi-phone">{t.partners.formPhone}</Label>
                  <Input
                    id="pi-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    maxLength={50}
                    placeholder=""
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pi-region">{t.partners.formRegion}</Label>
                  <Input
                    id="pi-region"
                    value={formData.region}
                    onChange={(e) => handleChange("region", e.target.value)}
                    maxLength={100}
                    placeholder=""
                  />
                </div>
                <div className="space-y-3 md:col-span-2">
                  <Label>{t.partners.formInterest}</Label>
                  <div className="flex flex-wrap gap-3">
                    {([
                      { value: "partner", label: t.partners.formInterestPartner },
                      { value: "franchisee", label: t.partners.formInterestFranchisee },
                      { value: "both", label: t.partners.formInterestBoth },
                    ] as const).map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleChange("interest_type", opt.value)}
                        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors border ${
                          formData.interest_type === opt.value
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-transparent text-foreground/80 border-border hover:bg-muted"
                        }`}
                      >
                        {formData.interest_type === opt.value && <Check className="h-4 w-4" />}
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="pi-message">{t.partners.formMessage}</Label>
                  <Textarea
                    id="pi-message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    maxLength={1000}
                    rows={4}
                    placeholder={t.partners.formMessagePlaceholder}
                  />
                </div>
                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 h-auto text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    {submitting ? t.partners.formSubmitting : t.partners.formSubmit}
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl">{t.partners.formSuccessTitle}</h3>
              <p className="mt-3 text-muted-foreground max-w-lg mx-auto leading-relaxed">{t.partners.formSuccessMessage}</p>
              <button
                type="button"
                onClick={resetForm}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                {t.partners.formSubmitAnother}
              </button>
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="mt-16 rounded-[2.5rem] bg-gradient-primary p-12 lg:p-16 text-primary-foreground relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display text-2xl md:text-3xl text-balance text-primary-foreground max-w-2xl">
              {t.partners.preferChat}
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/85294940994?text=Hi%20Cogito%2C%20I%27d%20like%20to%20learn%20about%20joining%20as%20a%20partner%2Ffranchisee."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="mailto:cogitohk@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-cream/10 border border-cream/20 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-cream/15 transition-colors"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
