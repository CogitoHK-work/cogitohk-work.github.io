import { useT } from "@/i18n/LanguageProvider";

export function Ticker() {
  const t = useT();
  const items = [...t.ticker, ...t.ticker];
  return (
    <div className="overflow-hidden bg-gradient-primary py-2.5 text-primary-foreground">
      <div className="ticker-track flex w-max items-center gap-12 whitespace-nowrap text-lg font-medium">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="opacity-95">{s}</span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
