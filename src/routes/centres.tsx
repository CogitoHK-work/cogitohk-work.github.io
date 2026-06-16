import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useT } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

export const Route = createFileRoute("/centres")({
  head: () => ({
    meta: [
      { title: `${dict.en.centres.meta.title} | ${dict.zh.centres.meta.title}` },
      {
        name: "description",
        content: `${dict.en.centres.meta.description} ${dict.zh.centres.meta.description}`,
      },
      { property: "og:title", content: dict.en.centres.meta.ogTitle },
      { property: "og:description", content: dict.en.centres.meta.ogDescription },
      { property: "og:url", content: "https://cogito.edu.hk/centres" },
    ],
    links: [{ rel: "canonical", href: "https://cogito.edu.hk/centres" }],
  }),
  component: CentresPage,
});

function waLink(num: string) {
  return `https://wa.me/852${num.replace(/\s+/g, "")}`;
}

function telLink(num: string) {
  return `tel:+852${num.replace(/\s+/g, "")}`;
}

function mapsLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function CentresPage() {
  const t = useT();
  const c = t.centres;

  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
          <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            {c.section}
          </div>
          <h1 className="mt-3 max-w-4xl font-display text-3xl md:text-4xl lg:text-5xl text-balance break-keep leading-[1.05]">
            {c.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground leading-relaxed">
            {c.lead}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8">
          {c.list.map((centre) => (
            <article
              key={centre.name}
              className="grid gap-6 rounded-3xl bg-card p-6 lg:p-8 shadow-soft border border-border md:grid-cols-2"
            >
              {/* Info column */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl text-balance">
                    {centre.name}
                  </h2>

                  <dl className="mt-6 space-y-5 text-foreground/80">
                    <div className="flex gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                      <div>
                        <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          {c.addressLabel}
                        </dt>
                        <dd className="mt-1 leading-relaxed">{centre.address}</dd>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                      <div>
                        <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          {c.phoneLabel}
                        </dt>
                        <dd className="mt-1">
                          <a
                            href={telLink(centre.phone)}
                            className="hover:text-primary transition-colors"
                          >
                            {centre.phone}
                          </a>
                        </dd>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                      <div>
                        <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          {c.whatsappLabel}
                        </dt>
                        <dd className="mt-1">
                          <a
                            href={waLink(centre.whatsapp)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            {centre.whatsapp}
                          </a>
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={mapsLink(centre.mapsQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant hover:shadow-gold transition-all hover:scale-[1.02]"
                  >
                    <MapPin className="h-4 w-4" aria-hidden />
                    {c.directionsCta}
                  </a>
                  <a
                    href={waLink(centre.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    {c.whatsappCta}
                  </a>
                  <a
                    href={telLink(centre.phone)}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    {c.callCta}
                  </a>
                </div>
              </div>

              {/* Map column */}
              <div className="overflow-hidden rounded-2xl border border-border bg-background">
                <iframe
                  title={`Map of ${centre.name}`}
                  src={centre.mapsEmbed}
                  className="h-64 w-full md:h-full md:min-h-[320px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
