const SLOGANS = [
  "Cogito Education — Where Every Child Learns Differently, Brilliantly",
  "Empowering Minds, Nurturing Futures",
  "Just Right for the Mind of Every Child",
  "Learn Effectively, but Effortlessly",
];

export function Ticker() {
  const items = [...SLOGANS, ...SLOGANS];
  return (
    <div className="overflow-hidden bg-gradient-primary py-2.5 text-primary-foreground">
      <div className="ticker-track flex w-max items-center gap-12 whitespace-nowrap text-sm font-medium">
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
