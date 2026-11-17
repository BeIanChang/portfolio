import Link from 'next/link';
import { Tag } from './Tag';

type ProjectLink = {
  label: 'Live' | 'GitHub' | 'Case Study' | string;
  href: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

export function ProjectCard({ title, description, tags, links }: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white/70 p-6 shadow-glow backdrop-blur transition-all duration-300 ease-out motion-safe:hover:-translate-y-1.5 hover:shadow-glow-lift hover:border-ink/20">
      <div className="space-y-4">
        <h3 className="font-serif text-2xl text-ink">{title}</h3>
        <p className="text-ink/70">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em] text-ink/70">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="transition-colors duration-200 hover:text-ink underline-offset-4 hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
