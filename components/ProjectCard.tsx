import Link from 'next/link';
import { Tag } from './Tag';

type ProjectLink = {
  label: 'Live' | 'GitHub' | 'Case Study';
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
    <div className="flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white/70 p-6 shadow-glow backdrop-blur">
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
          <Link key={link.label} href={link.href} className="hover:text-ink">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
