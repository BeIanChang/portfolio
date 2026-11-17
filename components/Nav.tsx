import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' }
];

export function Nav() {
  return (
    <nav className="flex flex-col gap-10">
      <Link href="/" className="flex items-center gap-3 text-base font-semibold tracking-wide">
        <img src="/logo/logo.svg" alt="Yangyang Zhang logo" className="h-9 w-9" />
        <span>Yangyang Zhang</span>
      </Link>
      <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.3em] text-white/70">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
