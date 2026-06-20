import { Link } from "@tanstack/react-router";
import { useState, useRef, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cogito-logo.png";
import { useLang } from "@/i18n/LanguageProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [navScale, setNavScale] = useState(1);

  const NAV = [
    { to: "/", label: t.nav.home },
    { to: "/programmes", label: t.nav.programmes },
    { to: "/advantage", label: t.nav.advantage },
    { to: "/about", label: t.nav.about },
    { to: "/centres", label: t.nav.centres },
    { to: "/comments", label: t.nav.parents },
  ] as const;

  useLayoutEffect(() => {
    const container = containerRef.current;
    const nav = navRef.current;
    const logoEl = logoRef.current;
    const buttons = buttonsRef.current;
    if (!container || !nav) return;

    const measure = () => {
      // Reset to natural size before measuring
      nav.style.fontSize = "";
      requestAnimationFrame(() => {
        if (getComputedStyle(nav).display === "none") {
          setNavScale(1);
          return;
        }
        const styles = getComputedStyle(container);
        const padX =
          parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
        const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
        const containerW = container.clientWidth - padX;
        // Are the buttons still on the same row as the logo?
        const sameRow =
          buttons && logoEl
            ? Math.abs(buttons.offsetTop - logoEl.offsetTop) < 4
            : true;
        const available = sameRow
          ? containerW -
            (logoEl?.offsetWidth ?? 0) -
            (buttons?.offsetWidth ?? 0) -
            gap * 2
          : containerW - (logoEl?.offsetWidth ?? 0) - gap;
        const needed = nav.scrollWidth;
        if (needed > available && available > 0) {
          const s = Math.max(0.65, available / needed);
          nav.style.fontSize = `${s}rem`;
          setNavScale(s);
        } else {
          setNavScale(1);
        }
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, [lang, t]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div ref={containerRef} className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-y-2 gap-x-4 px-6 py-3">
        <Link ref={logoRef} to="/" className="flex items-center group shrink-0">
          <img
            src={logo}
            alt="Cogito 夏恩教育"
            className="h-[3.75rem] w-auto shrink-0"
          />
        </Link>

        <nav ref={navRef} className="hidden lg:flex items-center gap-1 whitespace-nowrap">
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

        <div className="flex items-center gap-2 shrink-0">
          <div ref={buttonsRef} className="flex items-center gap-2 shrink-0">
            <Link
              to="/partners"
              className="hidden lg:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-base font-medium text-primary-foreground shadow-elegant hover:shadow-gold transition-all hover:scale-[1.02]"
            >
              {t.nav.partners}
            </Link>
            <Link
              to="/begin"
              className="hidden md:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-base font-medium text-primary-foreground shadow-elegant hover:shadow-gold transition-all hover:scale-[1.02]"
            >
              {t.nav.joinAsParent}
            </Link>
          </div>
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
