import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import smallGroup from "@/assets/small-group.jpg";
import { useT, useLang } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

export const Route = createFileRoute("/comments")({
  head: () => ({
    meta: [
      { title: `${dict.en.comments.meta.title} | ${dict.zh.comments.meta.title}` },
      { name: "description", content: `${dict.en.comments.meta.description} ${dict.zh.comments.meta.description}` },
      { property: "og:title", content: dict.en.comments.meta.ogTitle },
      { property: "og:description", content: dict.en.comments.meta.ogDescription },
      { property: "og:url", content: "https://cogito.edu.hk/comments" },
    ],
    links: [{ rel: "canonical", href: "https://cogito.edu.hk/comments" }],
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
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:py-14 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <div className="hidden text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t.comments.section}</div>
            <h1 className="mt-3 max-w-4xl font-display text-3xl md:text-4xl lg:text-5xl text-balance break-keep leading-[1.05]">
              {t.comments.titleA}
              <em className="not-italic text-primary">{t.comments.titleEm}</em>
              {t.comments.titleB}
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted-foreground leading-relaxed">{t.comments.lead}</p>
            <p className="mt-2 text-sm text-muted-foreground italic">{t.comments.collected}</p>
          </div>
          <img
            src={smallGroup}
            alt=""
            loading="eager"
            className="hidden lg:block h-[33vh] w-full rounded-[2rem] object-cover shadow-elegant"
          />
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
