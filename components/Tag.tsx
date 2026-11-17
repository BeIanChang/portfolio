type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full border border-ink/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink/70">
      {label}
    </span>
  );
}
