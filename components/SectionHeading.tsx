type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-ink/50">{eyebrow}</p>
      <h2 className="font-serif text-3xl text-ink md:text-4xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-ink/70">{subtitle}</p> : null}
    </div>
  );
}
