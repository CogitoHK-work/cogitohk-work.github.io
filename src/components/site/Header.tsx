import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/cogito-logo.png";
import { useLang } from "@/i18n/LanguageProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      <div className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-end gap-y-2 gap-x-4 px-6 py-3">
        {/* Left side: logo + nav items (desktop only) */}
        <div className="flex items-center gap-4 mr-auto">
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src={logo}
              alt="Cogito 夏恩教育"
              className="h-[3.75rem] w-auto shrink-0"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 whitespace-nowrap">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-base font-medium text-foreground/75 hover:text-primary transition-colors relative"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side: CTA button (desktop only) */}
        <div className="hidden lg:flex items-center shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full bg-gradient-primary px-5 py-2.5 text-base font-medium text-primary-foreground shadow-elegant hover:shadow-gold transition-all hover:scale-[1.02]"
              >
                {t.nav.joinUs}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="rounded-2xl border-0 bg-gradient-primary p-2 text-primary-foreground shadow-elegant"
            >
              <DropdownMenuItem
                asChild
                className="cursor-pointer rounded-xl px-4 py-2.5 text-base font-medium text-primary-foreground focus:bg-primary-foreground/20 focus:text-primary-foreground"
              >
                <Link to="/begin">{t.nav.joinAsParent}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="cursor-pointer rounded-xl px-4 py-2.5 text-base font-medium text-primary-foreground focus:bg-primary-foreground/20 focus:text-primary-foreground"
              >
                <Link to="/partners">{t.nav.partners}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 shrink-0 lg:hidden">
          {/* Mobile language toggle, left of hamburger */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
