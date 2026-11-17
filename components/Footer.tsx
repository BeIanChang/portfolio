export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-wrap items-center justify-between gap-3 py-8 font-mono text-xs text-mute">
        <span>© {new Date().getFullYear()} Yangyang (Ian) Zhang</span>
        <span>
          Hamilton, ON · <span className="text-mint">open to 2027 roles</span>
        </span>
      </div>
    </footer>
  );
}
