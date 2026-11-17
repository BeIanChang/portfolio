export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[3px] border border-line px-1.5 py-0.5 font-mono text-[0.6875rem] text-mute">
      {children}
    </span>
  );
}
