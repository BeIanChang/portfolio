import Link from 'next/link';
import { Tag } from './Tag';

export type Project = {
  title: string;
  kind: string;
  year: string;
  description: string;
  evidence?: string[];
  tags: string[];
  href?: string;
  linkLabel?: string;
  status?: 'live' | 'research' | 'open source';
};

function StatusDot({ status }: { status: Project['status'] }) {
  if (!status) return null;
  return (
    <span className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-mint">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-mint" />
      {status}
    </span>
  );
}

/** Featured entry — full-width, evidence-forward. */
export function ProjectFeature({ project }: { project: Project }) {
  return (
    <article className="rule grid gap-5 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-ink">
            {project.href ? (
              <Link href={project.href} className="link-mint">
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h3>
          <StatusDot status={project.status} />
        </div>
        <p className="font-mono text-xs text-mute">
          {project.kind} · {project.year}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <p className="max-w-[65ch] text-dim">{project.description}</p>
        {project.evidence ? (
          <ul className="space-y-1.5">
            {project.evidence.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-dim">
                <span aria-hidden="true" className="mt-[0.55em] h-px w-3 shrink-0 bg-mint" />
                <span className="max-w-[62ch]">{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

/** Index entry — one ledger row. */
export function ProjectRow({ project }: { project: Project }) {
  const inner = (
    <div className="rule grid gap-2 py-5 transition-colors duration-200 md:grid-cols-[11rem_minmax(0,1fr)_auto] md:items-baseline md:gap-6">
      <div className="flex items-baseline gap-3">
        <h3 className="font-medium text-ink">{project.title}</h3>
      </div>
      <p className="max-w-[60ch] text-sm text-dim">{project.description}</p>
      <div className="flex items-center gap-4 font-mono text-xs text-mute md:justify-end">
        <span>{project.year}</span>
        {project.href ? (
          <span className="text-mint">{project.linkLabel ?? 'github ↗'}</span>
        ) : null}
      </div>
    </div>
  );

  return project.href ? (
    <Link
      href={project.href}
      className="group block hover:bg-surface"
      target={project.href.startsWith('http') ? '_blank' : undefined}
    >
      {inner}
    </Link>
  ) : (
    <div>{inner}</div>
  );
}
