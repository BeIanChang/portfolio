import Link from 'next/link';
import { HeroVisual } from '../components/HeroVisual';
import { ProjectFeature, type Project } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';

const featured: Project[] = [
  {
    title: 'Yaapi — self-hosted voice-AI platform',
    kind: 'production system',
    year: '2026',
    status: 'live',
    description:
      'A Vapi-class voice-agent platform built solo, end to end: patched FreeSWITCH media layer (C), realtime agent pipeline, and a full multi-tenant console. Real business phone lines run on it in production.',
    evidence: [
      '37k LOC across telephony, agent runtime, and React console; live PSTN calls with barge-in',
      'Blue-green high-availability failover; 224-check deterministic cutover gate',
      'Guardrail stack: anti-fabrication, claims whitelisting (beat RAG head-to-head on compliance), lead-capture persistence',
      'Tool-reliability benchmark that overturned model folklore: 44% vs 100% raw tool-call emission across models'
    ],
    tags: ['python', 'c / freeswitch', 'llm orchestration', 'react', 'pstn'],
    href: '/portfolio',
    linkLabel: 'details'
  },
  {
    title: 'Conduit — token-efficient LLM serving',
    kind: 'funded research · Mitacs Accelerate',
    year: '2026–27',
    status: 'research',
    description:
      'Research internship on the cost side of LLM serving: routing, prompt compression, and caching, evaluated against real dollar cost across providers rather than tokens alone.',
    evidence: [
      'Quality-vs-cost routing engines (5 generations) with a 739-prompt outcome-labeled dataset',
      'Operating-point API: callers declare target quality or max cost, router picks the model',
      'Census of 164 serving providers; same-model price arbitrage quantified',
      'Evaluation framework for prompt compression under prefix caching and output expansion (paper in progress)'
    ],
    tags: ['llm serving', 'routing', 'evaluation', 'research']
  },
  {
    title: 'Superpost — AI content pipeline',
    kind: 'production system',
    year: '2026',
    status: 'live',
    description:
      'Article-to-social pipeline for regulated advertisers: long-form input becomes carousels and Reels through a frame-exact clip engine, with a human approval gate in front of every publish.',
    evidence: [
      'Custom EDL→ffmpeg clip engine, 1.3 ms A/V drift, frame-exact cuts',
      'Clip mining: one 41-minute client video → 28 scored Reel candidates with transcript-grounded hooks',
      'Compliance-by-design for a regulated profession: zero LLM calls in the publish path'
    ],
    tags: ['ffmpeg', 'pipelines', 'llm', 'compliance']
  }
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* hero */}
      <section className="grid items-center gap-12 pt-6 md:pt-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-7">
          <p className="mono-label hero-rise">
            yangyang (ian) zhang · hamilton, on
          </p>
          <h1 className="hero-rise hero-rise-2 max-w-[16ch] text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-[3.4rem]">
            Systems engineering for the AI era.
          </h1>
          <p className="hero-rise hero-rise-3 max-w-[52ch] text-base text-dim">
            I build the load-bearing parts of AI products: a self-hosted
            voice-AI platform answering real phone lines, funded research on
            token-efficient LLM serving, and a dozen shipped systems in
            between. M.Eng. Computing &amp; Software, McMaster University.
          </p>
          <div className="hero-rise hero-rise-4 flex flex-wrap items-center gap-6 pt-1 font-mono text-sm">
            <Link href="/portfolio" className="link-mint">
              view work →
            </Link>
            <Link href="/contact" className="link-quiet">
              contact
            </Link>
            <a
              href="https://github.com/BeIanChang"
              target="_blank"
              rel="noreferrer"
              className="link-quiet"
            >
              github
            </a>
          </div>
        </div>
        <div className="hero-rise hero-rise-3 w-full max-w-[520px] justify-self-center lg:justify-self-end">
          <HeroVisual />
        </div>
      </section>

      {/* signal strip */}
      <section aria-label="Highlights" className="rule">
        <dl className="grid gap-x-10 gap-y-6 py-6 sm:grid-cols-3">
          {[
            ['production', 'Real PSTN lines served by a platform built solo'],
            ['research', 'Mitacs Accelerate — token-efficient LLM serving'],
            ['range', '12+ systems shipped: voice, crawlers, pipelines, consoles']
          ].map(([term, detail]) => (
            <div key={term} className="space-y-1.5">
              <dt className="mono-label">{term}</dt>
              <dd className="text-sm text-dim">{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* featured work */}
      <section className="space-y-2">
        <SectionHeading title="Selected work" meta="03 of 12" />
        <div>
          {featured.map((project) => (
            <ProjectFeature key={project.title} project={project} />
          ))}
        </div>
        <div className="rule pt-6">
          <Link href="/portfolio" className="link-mint font-mono text-sm">
            full index →
          </Link>
        </div>
      </section>
    </div>
  );
}
