import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles, BookOpen, Brain, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title: "Our Programmes — Cogito Education" },
      {
        name: "description",
        content:
          "Cogito Kids (3–6), English Excellence, Mathematics Mastery and Chinese Eminence (K1–S3). Personalized, AI-enhanced curriculum aligned with the Hong Kong Education Bureau.",
      },
      { property: "og:title", content: "Programmes — Cogito Education" },
      { property: "og:description", content: "Personalized programmes in English, Chinese and Mathematics for children aged 3–12." },
    ],
  }),
  component: ProgrammesPage,
});

const PROGRAMMES = [
  {
    icon: Sparkles,
    id: "kids",
    title: "Cogito Kids",
    age: "Ages 3–6",
    intro:
      "A joyful play-based introduction to learning for kindergarteners that builds foundational literacy, numeracy, social skills, and bilingual confidence in our nurturing small-group setting.",
    body:
      "All three subjects are covered in a one-and-a-half hour weekly lesson cum playtime, preparing children to ascend confidently into primary school. Enough curriculum is covered that the transition to school life — which can feel intense — becomes natural and unintimidating for our Cogito kids.",
    highlights: [
      "Foundational literacy & numeracy",
      "Bilingual confidence",
      "Social-skills development",
      "Smooth transition to primary school",
    ],
  },
  {
    icon: BookOpen,
    id: "english",
    title: "English Excellence",
    age: "K1–S3",
    intro:
      "An integrated programme covering all key elements of English as a foreign language — vocabulary, grammar, reading, writing and listening — through a step-by-step systematic curriculum.",
    body:
      "Each one-hour unit covers four interlocked modules around a common theme. Students choose their own pace: one unit per week for efficient learning, multiple units for immersion. Pre-recorded native-speaker audio nurtures listening, speaking and pronunciation; instructors correct aberrations and keep progress on track.",
    highlights: [
      "Spiral learning that reinforces without boring repetition",
      "Authentic British English pronunciation & native-speaker audio",
      "Integrated vocabulary, grammar, reading, writing & listening",
      "Vocabulary build-up to 5,600 words by P6 and 9,000 by S3",
      "Idioms, proverbs & phrasal verbs",
      "Weekly writing tasks with personalized feedback",
      "Fully aligned with the HK Education Bureau curriculum",
      "Personalized to fit individual aptitude & needs",
      "Experienced instructors ensure progress and quality",
    ],
  },
  {
    icon: Brain,
    id: "mathematics",
    title: "Mathematics Mastery",
    age: "K1–S3",
    intro:
      "If computers and AI can do it better than us, do our children still need to learn Mathematics? Yes. Those who understand maths and use machines for efficiency are masters of machines; those who don't are enslaved by them.",
    body:
      "Mathematics is the universal language — the foundation of rationalism and the building block for science, business, finance and decision making. Our comprehensive programme follows the Education Bureau guidelines, covering all mandatory topics from K1 to S3 with step-by-step illustration so students can self-learn while instructors stand close by to remove roadblocks.",
    tracks: [
      {
        name: "Math Compute",
        desc: "Focuses on speed, accuracy and mental agility in core operations. Heightens mathematical sense — ideal for those seeking to excel in examinations.",
      },
      {
        name: "Math Applications",
        desc: "Emphasises solving real-life problems using techniques learned. Trains critical thinking and logical reasoning.",
      },
    ],
    highlights: [
      "Spiral learning that reinforces without repetition",
      "Topics divided into thematic units with clear objectives",
      "Abundant illustrations & worked examples",
      "Probabilistically sequenced problems — basic to advanced",
      "Fully aligned with the HK Education Bureau curriculum",
      "Personalized programme to fit individual needs",
      "Experienced instructors ensure progress and quality",
    ],
  },
  {
    icon: Users,
    id: "chinese",
    title: "Chinese Eminence",
    age: "K1–S3",
    intro:
      "5,000 years of culture and 3,000 years of written history make Chinese a beautiful but challenging language to master — even for native speakers. Our integrated programme covers modern Chinese plus literature and Classical Chinese.",
    body:
      "Each one-hour unit covers four interlocked modules — vocabulary, grammar, reading comprehension and expressive writing — around a common theme. Students pace themselves: one unit per week for concentrated learning, multiple for immersion. Instructors keep progress on track and correct aberrations.",
    highlights: [
      "Spiral learning carefully planned to reinforce without repetition",
      "Integrated vocabulary, grammar, reading & writing — plus literature & Classical Chinese",
      "Structured vocabulary build-up with abundant 成語 & 諺語 training",
      "Weekly writing tasks with personalized feedback",
      "Fully aligned with the HK Education Bureau curriculum",
      "Personalized programme to fit individual aptitude",
      "Experienced instructors ensure progress and quality",
    ],
  },
];

function ProgrammesPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">2.0 · Programmes</div>
          <h1 className="mt-3 max-w-4xl font-display text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.05]">
            Tailored for everyone, <em className="not-italic text-primary">regardless of potential</em>.
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Our system of education programmes is developed locally by teachers and professionals under a framework
            designed by education experts, with reference to the requirements of the Education Bureau. The curriculum
            covers three prime subjects — English, Chinese and Mathematics — from Grade 1 through 9, optimised by AI to
            maximise benefit with limited time.
          </p>
          <p className="mt-4 max-w-3xl text-foreground/75 leading-relaxed">
            Every child is different in potential. For this reason, the Cogito learning method is highly personalized.
            Each student starts at their own point (determined by an aptitude test) and progresses at their own pace.
            The effectiveness of our system has been verified consistently since our inception.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20 space-y-20">
        {PROGRAMMES.map((p, idx) => (
          <article
            key={p.id}
            id={p.id}
            className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
          >
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">2.{idx + 1}</div>
              <div className="mt-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                <p.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-5 font-display text-4xl text-balance">{p.title}</h2>
              <div className="mt-2 text-muted-foreground">{p.age}</div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-soft">
              <p className="text-lg text-foreground/85 leading-relaxed">{p.intro}</p>
              <p className="mt-5 text-foreground/75 leading-relaxed">{p.body}</p>

              {p.tracks && (
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {p.tracks.map((t) => (
                    <div key={t.name} className="rounded-2xl bg-cream/70 p-5 border border-border/60">
                      <div className="font-display text-lg text-primary">{t.name}</div>
                      <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink mb-4">Highlights</h3>
                <ul className="space-y-2.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-foreground/80">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        <div className="rounded-3xl border border-dashed border-gold/40 bg-gold/5 p-8 text-center">
          <div className="font-display text-xl text-ink">Coming soon: interactive learning</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Watch out for our announcement on next-generation interactive curricula.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
