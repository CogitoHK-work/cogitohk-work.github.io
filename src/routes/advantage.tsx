import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import smallGroup from "@/assets/small-group.jpg";

export const Route = createFileRoute("/advantage")({
  head: () => ({
    meta: [
      { title: "The Cogito Advantage — Personalized, AI-Enhanced, Small-Group Learning" },
      {
        name: "description",
        content:
          "Truly personalized learning, intimate 1:3 small groups, British English foundation, in-house teaching content, systematic learning and holistic development — the Cogito advantage.",
      },
      { property: "og:title", content: "The Cogito Advantage" },
      { property: "og:description", content: "Why Cogito's method works: personalization, small groups, systematic content and holistic growth." },
    ],
  }),
  component: AdvantagePage,
});

const PRINCIPLES = [
  "Understanding all the core skills required for turning knowledge into understanding and internalizing them as foundations for more learning.",
  "Building a system incorporating all the knowledge content required by the local education system.",
  "A methodology that allows personalized planning to fit individual needs.",
  "Nurturing a habit students can grow into — one that produces positive feedback and continues voluntarily.",
  "Good communication with parents to keep them informed of status and progress.",
  "A student-first culture that puts result above profit.",
];

const FEATURES = [
  {
    title: "Truly Personalized Learning",
    desc: "Data-driven insights from ongoing assessments customize every child's journey. No one is left behind or held back.",
  },
  {
    title: "Intimate Small Groups (1:3 Ratio)",
    desc: "With no more than 3 students per teacher, your child receives focused attention, immediate feedback, and a supportive space where curiosity thrives.",
  },
  {
    title: "British English Foundation, Local Relevance",
    desc: "Authentic British English fluency, aligned with Hong Kong's curriculum and enriched with real-world contexts.",
  },
  {
    title: "Proven, High-Quality Content",
    desc: "All teaching materials are developed in-house by our academic team with decades of experience in Hong Kong education.",
  },
  {
    title: "Systematic Learning",
    desc: "Materials are carefully planned to build foundations step-by-step — accumulation without unnecessary strain or repetition.",
  },
  {
    title: "Mentality Shaping",
    desc: "Our method reinforces self-learning ability and encourages positive thinking through positive feedback.",
  },
  {
    title: "Holistic Development",
    desc: "We cultivate integrity, empathy, and intellectual curiosity alongside core academic skills.",
  },
];

function AdvantagePage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">3.0 · The Cogito Advantage</div>
          <h1 className="mt-3 max-w-4xl font-display text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.05]">
            Built on <em className="not-italic text-primary">forty years</em> of trust and result.
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            The key to any successful programme lies in a true understanding of what it takes to be a good learner —
            and a track record of earning parents' and students' trust. Cogito's founders bring four decades of experience,
            having nurtured countless students into outstanding performers in public examinations and top universities.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-display text-4xl text-balance">Six principles that build a brand worth trusting.</h2>
            <p className="mt-4 text-muted-foreground">
              These are the foundations every Cogito programme is built on.
            </p>
          </div>
          <ol className="space-y-5">
            {PRINCIPLES.map((p, i) => (
              <li
                key={i}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="font-display text-3xl text-gold leading-none">{String(i + 1).padStart(2, "0")}</div>
                <p className="text-foreground/80 leading-relaxed">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Features w/ image */}
      <section className="bg-cream/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
            <div className="lg:sticky lg:top-32 self-start">
              <img
                src={smallGroup}
                alt="Three children learning together at a bright study table"
                width={1400}
                height={1000}
                loading="lazy"
                className="rounded-[2rem] shadow-elegant"
              />
              <div className="mt-6 rounded-2xl bg-card p-5 border border-border shadow-soft">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Class size</div>
                <div className="mt-1 font-display text-3xl text-primary">1 : 3</div>
                <div className="text-sm text-muted-foreground">Maximum students per teacher</div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="font-display text-4xl text-balance mb-4">In practice — what it looks like.</h2>
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl bg-card p-6 border border-border shadow-soft hover:shadow-elegant transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-display text-lg text-ink">{f.title}</div>
                      <p className="mt-1 text-foreground/75 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
