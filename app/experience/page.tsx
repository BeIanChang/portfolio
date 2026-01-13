import Link from 'next/link';
import { SectionHeading } from '../../components/SectionHeading';

const timeline = [
  {
    role: 'Software Engineering Intern',
    company: 'Wanren AI',
    companyUrl: 'https://www.wanrenai.com/',
    period: 'Dec 2024 - Jun 2025 · Beijing, China',
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
    period: 'Dec 2023 - Apr 2024 · Beijing, China',
    highlights: [
      'Developed an edge benchmarking system in Kotlin with Android SDK pipelines.',
      'Designed FastAPI ingestion with WebSocket + REST secured by JWT, using OkHttp/Retrofit.',
      'Reduced control-to-execution latency by ~30% while persisting results in PostgreSQL.'
    ]
  },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-14">
      <SectionHeading
        eyebrow="Work Experience"
        title="A focus on impactful engineering"
        subtitle="Hands-on engineering across AI systems, mobile clients, and backend infrastructure."
      />

      <div className="grid gap-6">
        {timeline.map((item) => (
          <div key={item.role} className="surface-panel">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl text-ink">{item.role}</h3>
                {item.companyUrl ? (
                  <Link
                    href={item.companyUrl}
                    className="text-ink/70 hover:text-ink"
                  >
                    {item.company}
                  </Link>
                ) : (
                  <p className="text-ink/70">{item.company}</p>
                )}
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-ink/50">{item.period}</p>
            </div>
            <ul className="mt-6 grid gap-3 text-ink/70">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-ember" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
