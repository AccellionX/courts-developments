type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p
          className={`font-mono-label text-[11px] uppercase tracking-[0.24em] ${
            inverted ? "text-bronze-soft" : "text-bronze"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl ${
          inverted ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            inverted ? "text-paper/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
