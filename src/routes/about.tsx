import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Cogito Education — Founders' Story & Vision" },
      {
        name: "description",
        content:
          "Founded in 2017 (formerly Shane Education) by veteran educators Ms. Grace Choi and Mr. H.C. Ma. An indigenous Hong Kong education brand inspired by Tagore's 'Influence life with life'.",
      },
      { property: "og:title", content: "About Cogito Education" },
      { property: "og:description", content: "Forty years of educating Hong Kong's children — and the vision that drives Cogito today." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">4.0 · About Cogito</div>
          <h1 className="mt-3 max-w-4xl font-display text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.05]">
            An <em className="not-italic text-primary">indigenous brand</em> for Hong Kong's children.
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Founded in 2017 — formerly known as Shane Education — by two veteran educators with 40 years of experience
            in the field, Cogito Education is a rebranding of the same institute as we cease to be affiliated with a
            British company. Given today's technological advances in knowledge management, our new identity marks a
            focus on being more technology-driven, service-oriented and student-focused. We are now primarily an
            indigenous platform serving the needs of Hong Kong students. Our curriculum has been significantly
            revamped with the aid of AI tools to reassess and reprioritize our teaching system.
          </p>
        </div>
      </section>

      {/* Founder 1 — Grace */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">4.1 · Founder</div>
            <h2 className="mt-3 font-display text-4xl">Ms. Grace Choi</h2>
            <p className="mt-1 font-zh text-muted-foreground">蔡老師</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Registered Teacher · Veteran Educator · Founder
            </p>
            <div className="mt-6 aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/15 to-gold/15 border border-border flex items-center justify-center">
              <div className="font-display text-7xl text-primary/40">蔡</div>
            </div>
          </div>
          <article className="rounded-3xl bg-card p-8 lg:p-12 border border-border shadow-soft">
            <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>
                "With over 40 years of experience in education — first as a secondary school teacher (also responsible
                for school discipline), then as the tutorial-centre owner and principal of a multi-national franchise
                operating in 40 countries — I have, with the help of my husband, built the world's largest centre for
                that franchise (in terms of students, not space). At the peak of that career we had 3,000 active students.
              </p>
              <p>
                The headline of that story is not how to build a big business, but how to influence your students to walk
                the path they need. In our industry, if the motivation is purely pragmatic gain, then gain becomes elusive.
                My motivation is about influencing the next generation to become upright, respectable people who are always
                willing to help where help is needed.
              </p>
              <p>
                My philosophy can be summed up in Tagore's poem,{" "}
                <em className="text-primary">'Influence life with life'</em>, which struck a chord with me.
              </p>
              <p>
                Due to a lot of inhibiting factors with my previous franchise, I founded Cogito with my husband to realize
                a dream. In Cogito, we don't just teach; we illuminate. We try to help each child discover their inner
                light and turn it into a passion for learning.
              </p>
              <p>
                No good work will ever go to waste. I am especially excited when my first students, now parents themselves,
                entrust me with their children. This cross-generational trust fuels our mission: to serve, to spread love,
                and to deliver unparalleled value through education that thinks with your child."
              </p>
              <p className="text-base text-muted-foreground italic">— Ms. Grace Choi</p>
            </div>
          </article>
        </div>
      </section>

      {/* Tagore's Poem */}
      <section className="bg-ink py-24 text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Our Motto · From Tagore</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-cream text-balance">
            Influence life with life.
          </h2>
          <blockquote className="mt-10 font-display text-3xl md:text-4xl leading-[1.4] text-cream/90 italic">
            <p>Live yourself as light,</p>
            <p>Because you don't know</p>
            <p>Who by thy light,</p>
            <p>Out of darkness.</p>
          </blockquote>
          <p className="mt-10 text-cream/70">— Rabindranath Tagore</p>
        </div>
      </section>

      {/* Founder 2 — H.C. */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <article className="rounded-3xl bg-card p-8 lg:p-12 border border-border shadow-soft order-2 lg:order-1">
            <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>
                "I started off as an engineer working my way up the corporate ladder — until one day, out of curiosity,
                I decided to take part in my wife's tutorial centre to see what it's like to educate children. That
                decision enlightened me.
              </p>
              <p>
                Like growing a tree, a botanist would tell you how much sunlight, nutrients and water are needed — but
                the best tree is always the one you plant with your heart. Thirty years ago, I changed course and joined
                my wife's centre because there was so much shared vision about what we could do with our students.
                I have been on that exploratory journey ever since, and seeing how children grow remains the most
                satisfying experience of my life.
              </p>
              <p>
                At this juncture, when we found Cogito, the world is full of chaos and drastic change is imminent. It is
                also a time when humanity must decide what timeline we are going to take — one filled with darkness and
                hate, or one with light and love. Cogito is created to say: we choose to be a facilitator toward the latter.
              </p>
              <p>
                Knowing our work is just a drop in an ocean doesn't in any way diminish our wish to serve. We hope to
                attract like-minded people as franchisees so that more can benefit. From experience, when your mission
                statement is right, everything good will follow."
              </p>
              <p className="text-base text-muted-foreground italic">— Mr. H.C. Ma</p>
            </div>
          </article>
          <div className="lg:sticky lg:top-32 order-1 lg:order-2">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">4.2 · Founder</div>
            <h2 className="mt-3 font-display text-4xl">Mr. H.C. Ma</h2>
            <p className="mt-1 font-zh text-muted-foreground">馬老師</p>
            <p className="mt-3 text-sm text-muted-foreground">C. Eng., M.Phil. · Founder</p>
            <div className="mt-6 aspect-[3/4] rounded-2xl bg-gradient-to-br from-gold/15 to-primary/15 border border-border flex items-center justify-center">
              <div className="font-display text-7xl text-primary/40">馬</div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
