import { Phone, MessageCircle, Facebook } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

export function TopBar() {
  const { lang, setLang, t } = useLang();
  return (
    <div className="hidden md:block sticky top-0 z-50 border-b border-border/60 bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-base">
        <div className="flex items-center gap-5">
          <a href="tel:81288686" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone className="h-3.5 w-3.5" /> 8128 8686
          </a>
          <a
            href="https://facebook.com/cogitohk"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Facebook className="h-3.5 w-3.5" /> Cogito Hong Kong
          </a>
          <a
            href="https://wa.me/85264009989"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5" /> {t.topbar.parents} 6400 9989
          </a>
          <a
            href="https://wa.me/85294940994"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5" /> {t.topbar.others} 9494 0994
          </a>
        </div>
        <div className="flex items-center gap-3 text-cream/80">
          <button
            type="button"
            onClick={() => setLang("en")}
            aria-label={t.topbar.langENAria}
            aria-pressed={lang === "en"}
            className={
              lang === "en"
                ? "font-medium text-gold"
                : "hover:text-gold transition-colors"
            }
          >
            EN
          </button>
          <span className="opacity-30">|</span>
          <button
            type="button"
            onClick={() => setLang("zh")}
            aria-label={t.topbar.langZHAria}
            aria-pressed={lang === "zh"}
            className={
              lang === "zh"
                ? "font-zh font-medium text-gold"
                : "font-zh hover:text-gold transition-colors"
            }
          >
            繁
          </button>
        </div>
      </div>
    </div>
  );
}
