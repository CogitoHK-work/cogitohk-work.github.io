import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cogito-logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/programmes", label: "Programmes" },
  { to: "/advantage", label: "Advantage" },
  { to: "/about", label: "About" },
  { to: "/comments", label: "Parents" },
  { to: "/partners", label: "Partners" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Cogito Tree of Wisdom"
            width={44}
            height={44}
            className="h-11 w-11 transition-transform group-hover:scale-105"
          />
          <div className="leading-tight">
            <div className="font-display text-xl font-semibold text-ink">Cogito</div>
            <div className="font-zh text-[11px] text-muted-foreground -mt-0.5">夏恩教育</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors relative"
              activeProps={{ className: "px-3 py-2 text-sm font-medium text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/begin"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant hover:shadow-gold transition-all hover:scale-[1.02]"
          >
            Join as Parent
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/80 border-b border-border/40 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/begin"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Join as Parent
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
