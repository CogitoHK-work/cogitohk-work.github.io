import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Brain, BookOpen, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-child.jpg";
import treeImg from "@/assets/tree-illustration.jpg";
import logo from "@/assets/cogito-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cogito Education (夏恩教育) — AI-Powered Personalized Learning in Hong Kong" },
      {
        name: "description",
        content:
          "Cogito Education delivers AI-personalized, small-group (1:3) tutoring for children aged 3–12 in Hong Kong. English, Chinese & Mathematics. Where every child learns differently, brilliantly.",
      },
      { property: "og:title", content: "Cogito Education — Where Every Child Learns Differently" },
      { property: "og:description", content: "AI-powered personalization & expert-led small groups for children aged 3–12 in Hong Kong." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-warm">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> AI-powered personalized learning
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-balance">
              Where your child's <em className="not-italic text-primary">unique learning</em> journey begins.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed text-pretty">
              AI-powered personalization and expert-led small groups (1:3) for children aged 3–12 in Hong Kong.
              Education that thinks with your child.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/programmes"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant hover:shadow-gold transition-all hover:scale-[1.02]"
              >
                Explore Programmes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/85264009989?text=Hi%20Cogito%2C%20I%27d%20like%20to%20book%20a%20free%20discovery%20session."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-7 py-3.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Book a Free Discovery Session
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
              <div>
                <div className="font-display text-2xl text-ink">40+</div>
                <div className="text-xs uppercase tracking-wide">Years of expertise</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl text-ink">1 : 3</div>
                <div className="text-xs uppercase tracking-wide">Teacher to student</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl text-ink">3–12</div>
                <div className="text-xs uppercase tracking-wide">Ages welcome</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={heroImg}
              alt="A young learner deep in study at a sunlit desk"
              width={1600}
              height={1200}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-card p-5 shadow-elegant border border-border max-w-[220px]">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Personalized Path</div>
              <div className="mt-1 font-display text-lg text-ink leading-tight">
                Every child has their own pace.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">1.3 · Our Philosophy</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
              Teaching how to fish — not feeding answers.
            </h2>
            <blockquote className="mt-6 border-l-2 border-gold pl-5 italic text-lg text-foreground/80">
              "Give a man a fish, feed him for a day. Teach him to fish, feed him for a lifetime."
            </blockquote>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Education today is no longer about disseminating information — technology has made it readily
                available. Education is about nurturing a culture of problem solving and a habitual reliance on one's own self.
              </p>
              <p>
                Like teaching a child to walk: a little handholding at first, steady guidance along each tiny step.
                Then one day, they can run. And we're still there, watching proudly, ready to catch them if they stumble.
              </p>
              <p className="font-display text-xl text-primary">Guide first. Then watch them soar. For life.</p>
            </div>
          </div>
          <div className="relative">
            <img
              src={treeImg}
              alt="Tree of Wisdom illustration with neural pathways and golden sparks"
              width={1200}
              height={1200}
              loading="lazy"
              className="rounded-[2rem] shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* NAME + LOGO */}
      <section className="bg-cream/60 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <article className="rounded-3xl bg-card p-10 shadow-soft border border-border">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">1.4 · Our Name</div>
            <h3 className="mt-2 font-display text-3xl">Education that thinks with your child.</h3>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              <strong className="text-primary">Cogito</strong> — Latin for <em>"I think"</em> — is our promise.
              In the AI era, we believe true learning begins when education adapts to the learner. We use technology
              to empower our teachers, not replace them. Our intelligent analytics create a unique learning path for every
              child, ensuring each lesson is purposeful, engaging, and perfectly matched to their strengths and needs.
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              We don't just teach subjects. We nurture thinkers, problem-solvers, and confident communicators ready for tomorrow.
            </p>
          </article>

          <article className="rounded-3xl bg-card p-10 shadow-soft border border-border">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">1.5 · Our Logo</div>
            <h3 className="mt-2 font-display text-3xl">The Tree of Wisdom.</h3>
            <div className="mt-6 flex items-start gap-6">
              <img src={logo} alt="" width={96} height={96} loading="lazy" className="h-24 w-24 shrink-0" />
              <p className="text-foreground/75 leading-relaxed">
                <em>"Takes ten years to grow a tree; a hundred to nurture a person."</em> The Tree of Wisdom, resembling
                the branching pathways of the brain, symbolizes both our commitment to high-quality educational services and
                the era's call for balancing logical thinking and creativity. Lush left and right branches bursting with
                sparks of thought represent the simultaneous activation of both brain hemispheres — and the flourishing of intellect.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* QUICK PROGRAMMES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">2.0 · Programmes</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
              Tailored for everyone, regardless of potential.
            </h2>
          </div>
          <Link to="/programmes" className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow">
            View all programmes <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sparkles, name: "Cogito Kids", age: "Ages 3–6", color: "from-gold/20 to-gold/5" },
            { icon: BookOpen, name: "English Excellence", age: "K1–S3", color: "from-primary/15 to-primary/5" },
            { icon: Brain, name: "Mathematics Mastery", age: "K1–S3", color: "from-primary/15 to-primary/5" },
            { icon: Users, name: "Chinese Eminence", age: "K1–S3", color: "from-gold/20 to-gold/5" },
          ].map((p) => (
            <Link
              key={p.name}
              to="/programmes"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-60`} />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-card shadow-soft text-primary">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.age}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-12 lg:p-16 text-primary-foreground">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-balance text-primary-foreground">
                Begin your child's Cogito journey today.
              </h2>
              <p className="mt-5 max-w-xl text-primary-foreground/80 text-lg">
                Attend a free Parent Discovery Session, take a friendly placement assessment, and receive a personalized learning plan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/begin"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.02] transition-transform"
              >
                Start now <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/85264009989"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
