import { Link, useLocation } from "@tanstack/react-router";
import { PhoneCall, AtSign, MapPinned, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/cogito-logo.png";
import { useT } from "@/i18n/LanguageProvider";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.36-.214-3.742.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.49-8.413z" />
    </svg>
  );
}

export function Footer() {
  const t = useT();
  const { pathname } = useLocation();
  const isProgrammePage = pathname.startsWith("/programmes");

  return (
    <footer className={`border-t border-border bg-ink text-cream ${isProgrammePage ? "" : "mt-24"}`}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Cogito 夏恩教育" className="h-12 w-auto brightness-150" />
              <div>
                <div className="font-display text-xl">Cogito Education</div>
                <div className="font-zh text-sm opacity-70">夏恩教育</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm opacity-75 leading-relaxed">{t.footer.tagline}</p>
            <p className="mt-4 italic text-gold/90 text-sm font-display">{t.footer.motto}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream mb-4 tracking-wide uppercase">{t.footer.explore}</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li><Link to="/" className="hover:text-gold transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/programmes" className="hover:text-gold transition-colors">{t.nav.programmes}</Link></li>
              <li><Link to="/advantage" className="hover:text-gold transition-colors">{t.nav.advantage}</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/centres" className="hover:text-gold transition-colors">{t.nav.centres}</Link></li>
              <li><Link to="/comments" className="hover:text-gold transition-colors">{t.nav.parents}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream mb-4 tracking-wide uppercase">{t.nav.joinUs}</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li><Link to="/begin" className="hover:text-gold transition-colors">{t.nav.joinAsParent}</Link></li>
              <li><Link to="/partners" className="hover:text-gold transition-colors">{t.nav.partners}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream mb-4 tracking-wide uppercase">{t.footer.contact}</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li className="flex items-start gap-3"><PhoneCall className="h-5 w-5 mt-0.5 text-gold shrink-0" strokeWidth={2.25} /> 8128 8686</li>
              <li className="flex items-start gap-3"><WhatsAppIcon className="h-5 w-5 mt-0.5 text-gold shrink-0" /> {t.footer.parentsLine}</li>
              <li className="flex items-start gap-3"><WhatsAppIcon className="h-5 w-5 mt-0.5 text-gold shrink-0" /> {t.footer.othersLine}</li>
              <li className="flex items-start gap-3"><AtSign className="h-5 w-5 mt-0.5 text-gold shrink-0" strokeWidth={2.25} /> cogitohk@gmail.com</li>
              <li className="flex items-start gap-3"><MapPinned className="h-5 w-5 mt-0.5 text-gold shrink-0" strokeWidth={2.25} /> {t.footer.lamTin}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href="https://facebook.com/cogitohk" aria-label="Facebook" className="rounded-full bg-cream/10 p-2 hover:bg-gold hover:text-ink transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full bg-cream/10 p-2 hover:bg-gold hover:text-ink transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs opacity-70">
          <div>
            {t.footer.copyright} <span className="font-zh">「夏恩教育」</span> {t.footer.trademark}
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold">{t.footer.privacy}</a>
            <a href="#" className="hover:text-gold">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
