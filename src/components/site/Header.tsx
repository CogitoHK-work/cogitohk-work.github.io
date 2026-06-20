import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cogito-logo.png";
import { useLang } from "@/i18n/LanguageProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLang();

  const NAV = [
    { to: "/", label: t.nav.home },
    { to: "/programmes", label: t.nav.programmes },
    { to: "/advantage", label: t.nav.advantage },
    { to: "/about", label: t.nav.about },
    { to: "/centres", label: t.nav.centres },
    { to: "/comments", label: t.nav.parents },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="Cogito 夏恩教育"
            className="h-[3.75rem] w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-base lg:text-lg font-medium text-foreground/75 hover:text-primary transition-colors relative"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/partners"
            className="hidden lg:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-lg font-medium text-primary-foreground shadow-elegant hover:shadow-gold transition-all hover:scale-[1.02]"
          >
            {t.nav.partners}
          </Link>
          <Link
            to="/begin"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-lg font-medium text-primary-foreground shadow-elegant hover:shadow-gold transition-all hover:scale-[1.02]"
          >
            {t.nav.joinAsParent}
          </Link>
          {/* Mobile language toggle, left of hamburger */}
          <div className="lg:hidden flex items-center gap-2 text-xs text-muted-foreground">
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={lang === "en" ? "font-medium text-primary" : "hover:text-primary"}
            >
              EN
            </button>
            <span className="opacity-30">|</span>
            <button
              type="button"
              onClick={() => setLang("zh")}
              aria-pressed={lang === "zh"}
              className={
                lang === "zh"
                  ? "font-zh font-medium text-primary"
                  : "font-zh hover:text-primary"
              }
            >
              繁
            </button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label={t.nav.menu}
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
                className="py-3 text-lg font-medium text-foreground/80 border-b border-border/40 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/partners"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-gradient-primary px-5 py-3 text-lg font-medium text-primary-foreground"
            >
              {t.nav.partners}
            </Link>
            <Link
              to="/begin"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-gradient-primary px-5 py-3 text-lg font-medium text-primary-foreground"
            >
              {t.nav.joinAsParent}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
