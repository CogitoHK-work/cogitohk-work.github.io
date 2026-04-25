import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/comments")({
  head: () => ({
    meta: [
      { title: "Parents' Comments — Cogito Education" },
      {
        name: "description",
        content:
          "Hear from parents whose children have been studying with Cogito Education (formerly Shane Education) — real stories, real benefits.",
      },
      { property: "og:title", content: "Parents' Comments — Cogito Education" },
      { property: "og:description", content: "Real parent stories from our community." },
    ],
  }),
  component: CommentsPage,
});

const COMMENTS = [
  {
    name: "Mrs. C.",
    relation: "Parent of P3 student",
    body:
      "My daughter has been with Cogito (formerly Shane) for two years. The 1:3 setting means she actually gets attention — and she has gone from dreading English to writing little stories at home for fun.",
  },
  {
    name: "Mr. L.",
    relation: "Parent of K3 & P5 students",
    body:
      "Both my children attend Cogito and what I appreciate most is how each of their learning paths looks completely different. The teachers know exactly where each one is, and never push them where they aren't ready.",
  },
  {
    name: "Mrs. W.",
    relation: "Parent of S1 student",
    body:
      "We tried larger tutorial chains before. The difference here is that the staff actually call you about your child — not to upsell, but to update you on real progress. That trust is rare.",
  },
  {
    name: "Ms. Y.",
    relation: "Parent of P1 student",
    body:
      "The personalized programme suits my son perfectly. He's quick at maths but struggles with reading, and Cogito built him a plan that respects both. He looks forward to his lessons.",
  },
  {
    name: "Mr. T.",
    relation: "Parent of P4 student",
    body:
      "What sold me was a five-minute conversation with the founder. You can tell instantly that she has been doing this for decades and that she genuinely cares. We have not regretted enrolling.",
  },
  {
    name: "Mrs. K.",
    relation: "Parent of P2 student",
    body:
      "My daughter's confidence has changed visibly. The teachers don't just correct her — they explain why and let her arrive at the answer herself. That habit has spilled over into her schoolwork.",
  },
];

function CommentsPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">5.0 · Parents' Comments</div>
          <h1 className="mt-3 max-w-4xl font-display text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.05]">
            Real stories from <em className="not-italic text-primary">our families</em>.
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            The following are from parents whose children have been studying at Cogito Education
            (formerly Shane Education). Names are withheld for privacy, but every voice belongs to a real parent
            reaping real benefits.
          </p>
          <p className="mt-3 text-sm text-muted-foreground italic">Comments collected April 2026.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMMENTS.map((c, i) => (
            <article
              key={i}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant transition-shadow"
            >
              <Quote className="absolute -top-3 -left-2 h-10 w-10 text-gold/30" />
              <p className="text-foreground/80 leading-relaxed">"{c.body}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-display text-lg text-ink">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.relation}</div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-center text-muted-foreground italic max-w-2xl mx-auto">
          Note: Additional comments are stored separately and may be added in upcoming updates.
        </p>
      </section>
    </SiteLayout>
  );
}
