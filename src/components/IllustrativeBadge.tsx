export function IllustrativeBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-mono-label inline-flex items-center gap-2 border border-white/20 bg-ink/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-paper backdrop-blur-md ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-bronze" aria-hidden />
      Illustrative
    </span>
  );
}
