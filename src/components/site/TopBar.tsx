import { PhoneCall, Facebook } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.36-.214-3.742.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.49-8.413z" />
    </svg>
  );
}

export function TopBar() {
  const { lang, setLang, t } = useLang();
  return (
    <div className="hidden md:block sticky top-0 z-50 border-b border-border/60 bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-base">
        <div className="flex items-center gap-5">
          <a href="tel:81288686" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <PhoneCall className="h-3.5 w-3.5" strokeWidth={2.25} /> 8128 8686
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
            <WhatsAppIcon className="h-3.5 w-3.5" /> {t.topbar.parents} 6400 9989
          </a>
          <a
            href="https://wa.me/85294940994"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" /> {t.topbar.others} 9494 0994
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
