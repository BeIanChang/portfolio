import Link from 'next/link';
import { Suspense } from 'react';
import { SectionHeading } from '../../components/SectionHeading';
import { SubmissionNotice } from '../../components/SubmissionNotice';

const iconClasses = 'h-24 w-24';

const contactLinks = [
  {
    label: 'Email',
    value: 'zhang787@mcmaster.ca',
    href: 'mailto:zhang787@mcmaster.ca',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClasses} aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.4l8 5.3 8-5.3V7H4zm16 10V9.7l-7.4 5a1 1 0 0 1-1.2 0L4 9.7V17h16z"
        />
      </svg>
    )
  },
  {
    label: 'GitHub',
    value: 'github.com/BeIanChang',
    href: 'https://github.com/BeIanChang',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClasses} aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2 1-2.8-.1-.2-.4-1.3.1-2.7 0 0 .8-.2 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.2 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.6.8 1 1.7 1 2.8 0 3.9-2.4 4.8-4.7 5.1.4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2z"
        />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yangyang-ian-zhang',
    href: 'https://www.linkedin.com/in/yangyang-ian-zhang/',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClasses} aria-hidden="true">
        <path
          fill="currentColor"
          d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.7-2 3.5-2 3.8 0 4.6 2.5 4.6 5.7V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9z"
        />
      </svg>
    )
  },
  {
    label: 'Medium',
    value: 'medium.com/@ianchangism',
    href: 'https://medium.com/@ianchangism',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClasses} aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 7.4c0-.4.2-.8.5-1l1.8-1.5 4.4 6 4-6 1.9 1.5c.3.2.5.6.5 1v9.1c0 .4-.2.8-.5 1l-1.9 1.5-4-6-4.4 6-1.8-1.5c-.3-.2-.5-.6-.5-1V7.4zm12.8-2.1 2.7-2.2c.2-.2.5-.1.5.2v17.4c0 .3-.3.4-.5.2l-2.7-2.2V5.3z"
        />
      </svg>
    )
  }
];

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something sharp"
        subtitle="Reach out for collaborations, research, or a quick introduction."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="grid w-fit grid-cols-2 gap-x-10 gap-y-8">
            {contactLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="inline-flex items-center justify-center p-2 text-ink/60 transition hover:text-ink"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <form
          className="surface-panel space-y-3 p-5"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/contact/?submitted=true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-ink/50">Send a note</p>
          <Suspense fallback={null}>
            <SubmissionNotice />
          </Suspense>
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-[0.3em] text-ink/50" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-2xl border border-ink/15 bg-white/80 px-3 py-1.5 text-xs text-ink focus:border-ink focus:outline-none"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-[0.3em] text-ink/50" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              required
              className="w-full rounded-2xl border border-ink/15 bg-white/80 px-3 py-1.5 text-xs text-ink focus:border-ink focus:outline-none"
              type="email"
              placeholder="name@email.com"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-[0.3em] text-ink/50" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              className="w-full rounded-2xl border border-ink/15 bg-white/80 px-3 py-1.5 text-xs text-ink focus:border-ink focus:outline-none"
              type="text"
              placeholder="Collaboration, role, or idea"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-[0.3em] text-ink/50" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-2xl border border-ink/15 bg-white/80 px-3 py-1.5 text-xs text-ink focus:border-ink focus:outline-none"
              placeholder="Tell me about your project or question."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-ink px-6 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white shadow-glow transition hover:translate-y-[-2px]"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
