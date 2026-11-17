type SectionHeadingProps = {
  title: string;
  meta?: string;
};

export function SectionHeading({ title, meta }: SectionHeadingProps) {
  return (
    <div className="rule flex items-baseline justify-between gap-6 pt-5">
      <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
        {title}
      </h2>
      {meta ? <span className="mono-label shrink-0">{meta}</span> : null}
    </div>
  );
}
