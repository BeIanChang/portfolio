import Link from 'next/link';
import { SectionHeading } from './SectionHeading';
import { Tag } from './Tag';

type CaseSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

type CaseStudyProps = {
  title: string;
  subtitle: string;
  meta: string;
  tags: string[];
  links?: { label: string; href: string }[];
  image?: { src: string; alt: string; caption: string };
  sections: CaseSection[];
};

export function CaseStudy({
  title,
  subtitle,
  meta,
  tags,
  links,
  image,
  sections
}: CaseStudyProps) {
  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <SectionHeading eyebrow="Case Study" title={title} subtitle={subtitle} />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-ink/50">{meta}</p>
          {links?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              className="text-sm uppercase tracking-[0.2em] text-ink/70 underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline"
            >
              {link.label} ↗
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>

      {image ? (
        <figure className="surface-panel space-y-4 !p-4 md:!p-5">
          <div className="overflow-hidden rounded-2xl border border-ink/10">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full transition-transform duration-500 ease-out motion-safe:hover:scale-[1.015]"
            />
          </div>
          <figcaption className="px-1 text-sm text-ink/60">
            {image.caption}
          </figcaption>
        </figure>
      ) : null}

      <div className="grid gap-6">
        {sections.map((section) => (
          <section key={section.heading} className="surface-panel">
            <h3 className="font-serif text-2xl text-ink">{section.heading}</h3>
            {section.body ? (
              <p className="mt-4 max-w-3xl text-ink/70">{section.body}</p>
            ) : null}
            {section.bullets ? (
              <ul className="mt-5 grid gap-3 text-ink/70">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ember" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <div>
        <Link
          href="/portfolio"
          className="text-sm uppercase tracking-[0.2em] text-ink/70 underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline"
        >
          ← All projects
        </Link>
      </div>
    </div>
  );
}
