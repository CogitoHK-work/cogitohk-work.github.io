import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useT, useLang } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

export const Route = createFileRoute("/comments")({
  head: () => ({
    meta: [
      { title: `${dict.en.comments.meta.title} | ${dict.zh.comments.meta.title}` },
      { name: "description", content: `${dict.en.comments.meta.description} ${dict.zh.comments.meta.description}` },
      { property: "og:title", content: dict.en.comments.meta.ogTitle },
      { property: "og:description", content: dict.en.comments.meta.ogDescription },
    ],
    links: [{ rel: "canonical", href: "/comments" }],
  }),
  component: CommentsPage,
});

function CommentsPage() {
  const t = useT();
  const { lang } = useLang();
  const openQuote = lang === "zh" ? "「" : "\u201C";
  const closeQuote = lang === "zh" ? "」" : "\u201D";
  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.comments.section}</div>
          <h1 className="mt-3 max-w-4xl font-display text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.05]">
            {t.comments.titleA}
            <em className="not-italic text-primary">{t.comments.titleEm}</em>
            {t.comments.titleB}
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">{t.comments.lead}</p>
          <p className="mt-3 text-sm text-muted-foreground italic">{t.comments.collected}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.comments.list.map((c, i) => (
            <article
              key={i}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant transition-shadow"
            >
              <Quote className="absolute -top-3 -left-2 h-10 w-10 text-gold/30" />
              <p className="text-foreground/80 leading-relaxed">{openQuote}{c.body}{closeQuote}</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-display text-lg text-ink">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.relation}</div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-center text-muted-foreground italic max-w-2xl mx-auto">
          {t.comments.footnote}
        </p>
      </section>
    </SiteLayout>
  );
}
