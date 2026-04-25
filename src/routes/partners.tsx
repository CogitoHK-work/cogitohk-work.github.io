import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Building2, Check, MessageCircle, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Franchisees — Join Cogito Education" },
      {
        name: "description",
        content:
          "Become a Cogito Partner or Franchisee. Low entry requirements, full headquarter support, and a proven systematic curriculum for educators in Hong Kong and beyond.",
      },
      { property: "og:title", content: "Partners & Franchisees — Cogito Education" },
      { property: "og:description", content: "Two simple ways to join us — Cogito Partner or Cogito Franchisee." },
    ],
  }),
  component: PartnersPage,
});

const FRANCHISEE_BENEFITS = [
  "Participation in joint marketing and promotion for brand image",
  "Participation in joint events that boost your position as a recognized quality centre",
  "Training and assistance in daily centre operation",
  "Regular meetings about strategy and how best to move forward",
  "Training in methodology and technology to improve productivity",
  "Training in education to improve teaching quality",
  "Recruitment and manpower assistance",
];

function PartnersPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">6.0 · Joining Us</div>
          <h1 className="mt-3 max-w-4xl font-display text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.05]">
            Two ways to join — <em className="not-italic text-primary">both rooted in passion</em>.
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            If you are a motivated individual, with or without teaching experience, you are welcome to join us either
            as a franchisee or a partner. Entry requirements are low — but we screen candidates by passion, capability
            and circumstance. For experienced operators, becoming a partner augments your existing model with minimum
            disruption at a very affordable monthly fix.
          </p>
          <p className="mt-4 max-w-3xl text-foreground/75 leading-relaxed">
            For those who would like full support from Cogito headquarter, becoming a franchisee is advantageous.
            We don't normally make online quotes — terms depend on size and scale. A face-to-face meeting is the only
            starting point, because we are not interested in feeding data to an AI machine that may be behind an enquiry.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Partner */}
          <article className="rounded-3xl border border-border bg-card p-10 shadow-soft hover:shadow-elegant transition-shadow">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">6.1</div>
            <div className="mt-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-foreground">
              <Handshake className="h-7 w-7 text-gold" />
            </div>
            <h2 className="mt-5 font-display text-3xl">Cogito Partner</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              If you already have an establishment or you're an educator, you can join as a Cogito Partner. A no-hassle
              way to receive part or all of our teaching content for a small monthly fee — the amount depending on the
              size of your establishment and the content you need.
            </p>
            <p className="mt-3 text-foreground/75 leading-relaxed">
              You retain your own corporate identity and name. Simply put up a sign in your shopfront identifying yourself
              as a Cogito Partner. You are still free to run your own courses while offering our programmes alongside.
            </p>
            <div className="mt-6 rounded-xl bg-gold/5 border border-gold/30 p-4 text-sm text-foreground/80">
              <strong className="text-gold-foreground">Note:</strong> Verification of how our content is used in your
              centre is required as part of the partnership.
            </div>
          </article>

          {/* Franchisee */}
          <article className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-card p-10 shadow-elegant">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">6.2</div>
            <div className="mt-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground">
              <Building2 className="h-7 w-7" />
            </div>
            <h2 className="mt-5 font-display text-3xl">Cogito Franchisee</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Full headquarter support across every aspect of operation. Whether starting from scratch or scaling up,
              we assist with centre setup, licencing, recruitment, training, marketing and teaching support. You can
              start small and plan big — we help design a scalable operation with sound management practices.
            </p>
            <p className="mt-3 text-foreground/75 leading-relaxed">
              Requires a higher diploma in any discipline (no education experience needed) — but you must have a passion
              for teaching and the patience to guide children's growth.
            </p>
            <ul className="mt-6 space-y-2.5">
              {FRANCHISEE_BENEFITS.map((b) => (
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
              <h3 className="font-display text-3xl md:text-4xl text-cream text-balance">
                Ready to talk? Let's start with a face-to-face conversation.
              </h3>
              <p className="mt-4 text-cream/75 leading-relaxed">
                Send your enquiry directly to <a className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold" href="mailto:cogitohk@gmail.com">cogitohk@gmail.com</a>{" "}
                or message us on WhatsApp at <strong className="text-gold">9494 0994</strong> with your name and contact.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="https://wa.me/85294940994?text=Hi%20Cogito%2C%20I%27d%20like%20to%20learn%20about%20joining%20as%20a%20partner%2Ffranchisee."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp 9494 0994
              </a>
              <a
                href="mailto:cogitohk@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
              >
                <Mail className="h-4 w-4" /> Email us
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
