import { useState, type CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/theme-test")({
  component: ThemeTest,
});

type Palette = {
  id: string;
  name: string;
  description: string;
  vars: Record<string, string>;
};

/**
 * Each palette overrides the same CSS variables defined in src/styles.css.
 * Because they are applied to a wrapper element only, the rest of the site
 * (other routes) is unaffected.
 */
const palettes: Palette[] = [
  {
    id: "current",
    name: "Current — Indigo Mono",
    description: "Near-white canvas, charcoal ink, electric indigo accent.",
    vars: {
      "--background": "oklch(0.995 0 0)",
      "--cream": "oklch(0.975 0.003 250)",
      "--foreground": "oklch(0.18 0.012 260)",
      "--ink": "oklch(0.14 0.014 260)",
      "--card": "oklch(1 0 0)",
      "--card-foreground": "oklch(0.18 0.012 260)",
      "--primary": "oklch(0.21 0.02 260)",
      "--primary-foreground": "oklch(0.99 0 0)",
      "--primary-glow": "oklch(0.58 0.22 275)",
      "--secondary": "oklch(0.965 0.004 260)",
      "--secondary-foreground": "oklch(0.2 0.012 260)",
      "--muted": "oklch(0.965 0.004 260)",
      "--muted-foreground": "oklch(0.48 0.008 260)",
      "--accent": "oklch(0.96 0.01 275)",
      "--accent-foreground": "oklch(0.21 0.02 260)",
      "--gold": "oklch(0.62 0.22 275)",
      "--gold-foreground": "oklch(0.99 0 0)",
      "--border": "oklch(0.92 0.004 260)",
      "--ring": "oklch(0.58 0.22 275)",
    },
  },
  {
    id: "warm-academic",
    name: "Warm Academic",
    description: "Cream paper, deep brown ink, burgundy accent — classical, scholarly.",
    vars: {
      "--background": "oklch(0.98 0.012 80)",
      "--cream": "oklch(0.955 0.018 75)",
      "--foreground": "oklch(0.22 0.025 40)",
      "--ink": "oklch(0.16 0.03 35)",
      "--card": "oklch(0.995 0.006 80)",
      "--card-foreground": "oklch(0.22 0.025 40)",
      "--primary": "oklch(0.35 0.09 25)",
      "--primary-foreground": "oklch(0.98 0.012 80)",
      "--primary-glow": "oklch(0.55 0.17 28)",
      "--secondary": "oklch(0.94 0.022 75)",
      "--secondary-foreground": "oklch(0.25 0.03 35)",
      "--muted": "oklch(0.94 0.018 75)",
      "--muted-foreground": "oklch(0.45 0.025 40)",
      "--accent": "oklch(0.92 0.04 60)",
      "--accent-foreground": "oklch(0.3 0.06 30)",
      "--gold": "oklch(0.7 0.14 75)",
      "--gold-foreground": "oklch(0.18 0.03 35)",
      "--border": "oklch(0.88 0.02 70)",
      "--ring": "oklch(0.55 0.17 28)",
    },
  },
  {
    id: "forest-calm",
    name: "Forest Calm",
    description: "Soft sage canvas, ink green, muted teal accent — nature, growth.",
    vars: {
      "--background": "oklch(0.985 0.012 160)",
      "--cream": "oklch(0.96 0.018 160)",
      "--foreground": "oklch(0.22 0.03 160)",
      "--ink": "oklch(0.16 0.04 165)",
      "--card": "oklch(1 0 0)",
      "--card-foreground": "oklch(0.22 0.03 160)",
      "--primary": "oklch(0.32 0.06 165)",
      "--primary-foreground": "oklch(0.98 0.012 160)",
      "--primary-glow": "oklch(0.6 0.14 180)",
      "--secondary": "oklch(0.94 0.02 160)",
      "--secondary-foreground": "oklch(0.24 0.04 165)",
      "--muted": "oklch(0.94 0.018 160)",
      "--muted-foreground": "oklch(0.46 0.02 165)",
      "--accent": "oklch(0.92 0.04 175)",
      "--accent-foreground": "oklch(0.28 0.06 170)",
      "--gold": "oklch(0.62 0.14 180)",
      "--gold-foreground": "oklch(0.99 0 0)",
      "--border": "oklch(0.9 0.018 160)",
      "--ring": "oklch(0.6 0.14 180)",
    },
  },
  {
    id: "sunny-playful",
    name: "Sunny Playful",
    description: "Bright cream, navy ink, marigold + coral accents — cheerful, kid-friendly.",
    vars: {
      "--background": "oklch(0.985 0.02 95)",
      "--cream": "oklch(0.96 0.03 90)",
      "--foreground": "oklch(0.22 0.05 255)",
      "--ink": "oklch(0.18 0.07 260)",
      "--card": "oklch(1 0 0)",
      "--card-foreground": "oklch(0.22 0.05 255)",
      "--primary": "oklch(0.28 0.08 255)",
      "--primary-foreground": "oklch(0.99 0.02 95)",
      "--primary-glow": "oklch(0.78 0.17 60)",
      "--secondary": "oklch(0.95 0.03 90)",
      "--secondary-foreground": "oklch(0.25 0.06 255)",
      "--muted": "oklch(0.95 0.025 90)",
      "--muted-foreground": "oklch(0.5 0.04 255)",
      "--accent": "oklch(0.92 0.07 50)",
      "--accent-foreground": "oklch(0.28 0.08 255)",
      "--gold": "oklch(0.78 0.17 60)",
      "--gold-foreground": "oklch(0.18 0.07 260)",
      "--border": "oklch(0.9 0.025 90)",
      "--ring": "oklch(0.78 0.17 60)",
    },
  },
];

function PaletteSwatches({ vars }: { vars: Record<string, string> }) {
  const keys = [
    "--background",
    "--ink",
    "--primary",
    "--primary-glow",
    "--accent",
    "--gold",
  ];
  return (
    <div className="flex gap-1.5">
      {keys.map((k) => (
        <span
          key={k}
          title={k}
          className="h-6 w-6 rounded-md border border-black/10"
          style={{ background: vars[k] }}
        />
      ))}
    </div>
  );
}

function SamplePage() {
  return (
    <div
      className="rounded-2xl border bg-background text-foreground"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Fake nav */}
      <div
        className="flex items-center justify-between border-b px-6 py-4"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="font-display text-lg font-semibold text-[color:var(--ink)]">
          Cogito Education
        </div>
        <div className="flex gap-5 text-sm text-[color:var(--muted-foreground)]">
          <span>About</span>
          <span>Programmes</span>
          <span>Contact</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-hero px-6 py-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--primary-glow)]">
          Sample hero
        </p>
        <h1 className="mt-3 font-display text-3xl text-[color:var(--ink)] md:text-4xl">
          Where your child's unique learning journey begins.
        </h1>
        <p className="mt-3 max-w-xl text-[color:var(--muted-foreground)]">
          Small-group tutorials with AI-personalised learning in Hong Kong.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            Primary action
          </button>
          <button
            className="rounded-md border px-4 py-2 text-sm font-medium text-[color:var(--ink)]"
            style={{ borderColor: "var(--border)" }}
          >
            Secondary
          </button>
          <a className="px-4 py-2 text-sm font-medium text-[color:var(--primary-glow)] underline-offset-4 hover:underline">
            Link style →
          </a>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-4 px-6 py-8 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-xl border bg-card p-5 shadow-elegant"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="mb-3 inline-block rounded-md bg-[color:var(--accent)] px-2 py-1 text-xs text-[color:var(--accent-foreground)]">
              Category
            </div>
            <h3 className="font-display text-lg text-[color:var(--ink)]">
              Programme {i}
            </h3>
            <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
              A short description of this programme card to show body copy.
            </p>
          </div>
        ))}
      </div>

      {/* Muted strip */}
      <div
        className="border-t bg-[color:var(--cream)] px-6 py-6 text-sm text-[color:var(--muted-foreground)]"
        style={{ borderColor: "var(--border)" }}
      >
        "An incredible experience for our child." — parent
      </div>
    </div>
  );
}

function ThemeTest() {
  const [activeId, setActiveId] = useState(palettes[0].id);
  const active = palettes.find((p) => p.id === activeId)!;

  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Sandbox
            </p>
            <h1 className="font-display text-3xl text-ink">Colour scheme test</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Only this page is affected — the rest of the site keeps the current theme.
            </p>
          </div>
          <Link to="/" className="text-sm underline">
            ← Back to site
          </Link>
        </div>

        {/* Palette picker */}
        <div className="mb-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {palettes.map((p) => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`rounded-xl border p-4 text-left transition ${
                  isActive
                    ? "border-foreground ring-2 ring-foreground/20"
                    : "border-border hover:border-foreground/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-ink">{p.name}</span>
                  <PaletteSwatches vars={p.vars} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{p.description}</p>
              </button>
            );
          })}
        </div>

        {/* Themed preview */}
        <div style={active.vars as CSSProperties}>
          <SamplePage />
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Tip: when you've picked a winner, tell me the palette name and I'll apply it
          to <code>src/styles.css</code> across the whole site.
        </p>
      </div>
    </div>
  );
}