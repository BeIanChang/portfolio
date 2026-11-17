import Link from 'next/link';
import { Suspense } from 'react';
import { SubmissionNotice } from '../../components/SubmissionNotice';

const contactLinks = [
  {
    label: 'email',
    value: 'zhang787@mcmaster.ca',
    href: 'mailto:zhang787@mcmaster.ca'
  },
  {
    label: 'github',
    value: 'github.com/BeIanChang',
    href: 'https://github.com/BeIanChang'
  },
  {
    label: 'linkedin',
    value: 'in/yangyang-ian-zhang',
    href: 'https://www.linkedin.com/in/yangyang-ian-zhang/'
  },
  {
    label: 'medium',
    value: '@ianchangism',
    href: 'https://medium.com/@ianchangism'
  }
];

const fieldClasses =
  'w-full rounded-[4px] border border-line bg-surface px-3 py-2 text-sm text-ink placeholder:text-mute focus:border-mint focus:outline-none';

export default function ContactPage() {
  return (
    <div className="space-y-14">
      <header className="max-w-[60ch] space-y-4 pt-4">
        <h1 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Contact
        </h1>
        <p className="text-dim">
          Research, roles, collaborations, or a sharp technical question — all
          welcome. Email gets the fastest response.
        </p>
      </header>

      <div className="rule grid gap-12 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* channels */}
        <dl className="h-fit space-y-0">
          {contactLinks.map((item) => (
            <div
              key={item.label}
              className="flex items-baseline justify-between gap-6 border-b border-line py-4 first:pt-0"
            >
              <dt className="mono-label">{item.label}</dt>
              <dd>
                <Link
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  className="link-mint font-mono text-sm"
                >
                  {item.value}
                </Link>
              </dd>
            </div>
          ))}
        </dl>

        {/* note form */}
        <form
          className="space-y-4"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/contact/?submitted=true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <p className="mono-label">send a note</p>
          <Suspense fallback={null}>
            <SubmissionNotice />
          </Suspense>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="mono-label block" htmlFor="name">
                name
              </label>
              <input
                id="name"
                name="name"
                required
                className={fieldClasses}
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5">
              <label className="mono-label block" htmlFor="email">
                email
              </label>
              <input
                id="email"
                name="email"
                required
                className={fieldClasses}
                type="email"
                placeholder="name@email.com"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="mono-label block" htmlFor="subject">
              subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              className={fieldClasses}
              type="text"
              placeholder="Role, research, or idea"
            />
          </div>
          <div className="space-y-1.5">
            <label className="mono-label block" htmlFor="message">
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={fieldClasses}
              placeholder="What are you building?"
            />
          </div>
          <button
            type="submit"
            className="rounded-[4px] border border-mint bg-transparent px-5 py-2 font-mono text-sm text-mint transition-colors duration-200 hover:bg-mint hover:text-bg"
          >
            send →
          </button>
        </form>
      </div>
    </div>
  );
}
