import Link from 'next/link';

const navItems = [
  { href: '/experience', label: 'experience' },
  { href: '/portfolio', label: 'work' },
  { href: '/contact', label: 'contact' }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="shell flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex shrink-0 items-baseline gap-2 font-mono text-xs text-ink sm:text-sm"
        >
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 translate-y-[-1px] bg-mint transition-transform duration-300 ease-out-quint group-hover:rotate-45"
          />
          yangyang.zhang
        </Link>
        <nav className="flex items-center gap-3.5 font-mono text-xs sm:gap-6 sm:text-[0.8125rem]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="link-quiet">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
