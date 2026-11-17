import Link from 'next/link';
import { SectionHeading } from '../../components/SectionHeading';

const timeline = [
  {
    role: 'Research Intern — Mitacs Accelerate',
    company: 'McMaster University × Geek Certified',
    period: 'Aug 2026 — Present · Hamilton, ON',
    highlights: [
      'Funded 12-month research internship: token-efficient LLM serving (routing, prompt compression, caching) evaluated against real cross-provider dollar cost.',
      'Built five generations of quality-vs-cost routing engines and a 739-prompt outcome-labeled dataset; shipped the frontier as an operating-point API.',
      'Designing a compression evaluation framework spanning learned compressors, prefix caching, and output expansion; publication in progress.'
    ]
  },
  {
    role: 'Software Engineer — AI Systems',
    company: 'Geek Certified',
    period: '2026 — Present · Hamilton, ON',
    highlights: [
      'Built and operate a self-hosted voice-AI platform (FreeSWITCH + realtime agent pipeline + multi-tenant console) carrying real business phone lines, solo.',
      'Shipped an AI social-content pipeline for regulated advertisers (frame-exact clip engine, approval-gated publishing) and a multi-tenant outreach platform with hard workspace isolation.',
      'Own production operations end to end: HA failover, deterministic cutover gates, monitoring, incident response on a live client-facing fleet.'
    ]
  },
  {
    role: 'Software Engineering Intern',
    company: 'Wanren AI',
    companyUrl: 'https://www.wanrenai.com/',
    period: 'Dec 2024 — Jun 2025 · Beijing, China',
    highlights: [
      'Built an end-to-end healthcare platform with Android client and React portal, exposing FastAPI services.',
      'Shipped Docker/Kubernetes services with gRPC + Kafka, JWT auth, and GitLab CI/CD pipelines.',
      'Implemented Kotlin MVVM client with Retrofit/OkHttp, improving core flow latency to <300 ms.'
    ]
  },
  {
    role: 'Software Engineering Intern',
    company: 'Lalamove',
    companyUrl: 'https://www.lalamove.com/en-hk/',
    period: 'Dec 2023 — Apr 2024 · Beijing, China',
    highlights: [
      'Developed an edge benchmarking system in Kotlin with Android SDK pipelines.',
      'Designed FastAPI ingestion with WebSocket + REST secured by JWT, using OkHttp/Retrofit.',
      'Reduced control-to-execution latency by ~30% while persisting results in PostgreSQL.'
    ]
  }
];

export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      <header className="max-w-[60ch] space-y-4 pt-4">
        <h1 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Experience
        </h1>
        <p className="text-dim">
          Production AI systems, funded research, and the engineering
          internships that led here. M.Eng. Computing &amp; Software, McMaster
          University.
        </p>
      </header>

      <section className="space-y-2">
        <SectionHeading title="Timeline" meta="2023 — present" />
        <div>
          {timeline.map((item) => (
            <article
              key={item.role}
              className="rule grid gap-4 py-8 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-10"
            >
              <div className="space-y-1.5">
                <h3 className="font-semibold tracking-tight text-ink">
                  {item.role}
                </h3>
                {item.companyUrl ? (
                  <Link
                    href={item.companyUrl}
                    target="_blank"
                    className="link-quiet block text-sm"
                  >
                    {item.company} ↗
                  </Link>
                ) : (
                  <p className="text-sm text-dim">{item.company}</p>
                )}
                <p className="font-mono text-xs text-mute">{item.period}</p>
              </div>
              <ul className="space-y-2.5">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5 text-sm text-dim">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] h-px w-3 shrink-0 bg-mint"
                    />
                    <span className="max-w-[62ch]">{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
