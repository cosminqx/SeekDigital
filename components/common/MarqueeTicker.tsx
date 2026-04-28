type MarqueeTickerProps = {
  items: string[];
};

export default function MarqueeTicker({ items }: MarqueeTickerProps) {
  const content = items.join(" · ");

  return (
    <div className="marquee border-y border-[#1f1f1f] bg-[#0c0c0c] py-4 text-xs uppercase tracking-[0.32em] text-muted">
      <div className="marquee-track flex min-w-full items-center gap-10 whitespace-nowrap will-change-transform">
        <span>{content}</span>
        <span aria-hidden="true">{content}</span>
      </div>
    </div>
  );
}
