import {
  ProjectFeature,
  ProjectRow,
  type Project
} from '../../components/ProjectCard';
import { SectionHeading } from '../../components/SectionHeading';

const featured: Project[] = [
  {
    title: 'Yaapi — self-hosted voice-AI platform',
    kind: 'production system · Geek Certified',
    year: '2026',
    status: 'live',
    description:
      'A complete voice-agent platform — telephony, realtime agent runtime, multi-tenant console — built solo and carrying real business phone lines in production. The hard parts are reliability, not demos: interruption handling, failover, and making an LLM safe enough to speak for a business.',
    evidence: [
      'Patched FreeSWITCH media module (C) for bidirectional realtime audio; live PSTN with barge-in',
      'Blue-green HA failover; 224-check deterministic smoke gate before every cutover',
      'Guardrails: anti-fabrication stack, claims whitelisting that beat RAG head-to-head on fair-balance compliance, dedup-safe lead capture, per-assistant compliance engine',
      'Tool-reliability benchmark across models (44% vs 100% raw tool-call emission) now driving default model selection',
      '21-dimension voice-quality rubric validated on 44 real call transcripts; LLM-judge + launch-readiness gate',
      'Outbound dialer: atomic call claiming, dial windows, DNC handling, voicemail retry'
    ],
    tags: ['python', 'c / freeswitch', 'llm orchestration', 'react', 'fastapi', 'pstn']
  },
  {
    title: 'Conduit — token-efficient LLM serving',
    kind: 'funded research · Mitacs Accelerate, McMaster',
    year: '2026–27',
    status: 'research',
    description:
      'Research on the economics of LLM serving: most work optimizes latency or quality; Conduit evaluates routing, prompt compression, and caching against real dollar cost across providers.',
    evidence: [
      'Five generations of quality-vs-cost routing engines; distilled hybrid classifier',
      '739-prompt outcome-labeled routing dataset; quality-cost frontier exposed as an operating-point API',
      '164-provider serving census; same-model price arbitrage quantified',
      'Compression evaluation framework: learned compressors × prefix caching × output expansion × dollar cost (paper in progress)'
    ],
    tags: ['llm serving', 'routing', 'compression', 'evaluation']
  },
  {
    title: 'Superpost — AI social-content pipeline',
    kind: 'production system · Geek Certified',
    year: '2026',
    status: 'live',
    description:
      'Turns long-form client material into platform-ready carousels and Reels for regulated advertisers, with hard compliance boundaries: a human approval gate in front of every publish and zero LLM calls in the publish path.',
    evidence: [
      'Custom EDL→ffmpeg clip engine: frame-exact cuts, 1.3 ms A/V drift',
      'Clip mining: 41-minute source video → 28 scored Reel candidates (~7 months of content from one asset)',
      'Brand-kit system renders every asset on-brand without a designer in the loop'
    ],
    tags: ['ffmpeg', 'node/ts', 'pipelines', 'llm', 'compliance']
  }
];

const index: Project[] = [
  {
    title: 'Canvass',
    year: '2026',
    kind: 'platform',
    description:
      'Multi-tenant outreach platform: workspace isolation (49-check regression gate), compliant source-pool harvesting, cited AI search over leads, grounded email drafting.',
    tags: []
  },
  {
    title: 'virtual_world',
    year: '2026',
    kind: 'open source',
    description:
      'AstrBot plugin that gives a chatbot a life of its own: a private map, daily schedule, scene memory — it cooks, wanders, daydreams, and starts conversations unprompted.',
    tags: [],
    href: 'https://github.com/BeIanChang/astrbot_plugin_virtual_world'
  },
  {
    title: 'openapply',
    year: '2026',
    kind: 'open source',
    description:
      'Job-application autofill browser extension with bring-your-own-key LLM support (OpenAI, Claude, Gemini, Ollama).',
    tags: [],
    href: 'https://github.com/BeIanChang/openapply'
  },
  {
    title: 'Guitar Studio',
    year: '2026',
    kind: 'personal',
    description:
      'Photograph a mixed-notation guitar score → VLM agent pipeline with a validator gate → playable tab DSL. 44 measures transcribed end-to-end with zero errors.',
    tags: []
  },
  {
    title: 'Meridian',
    year: '2026',
    kind: 'platform',
    description:
      'Content/SEO engine built on a universal page model: AI authors into a constrained IR with a curated component library and a contained raw-HTML escape hatch.',
    tags: []
  },
  {
    title: 'Legal-vertical crawler',
    year: '2026',
    kind: 'data engineering',
    description:
      'Firm-discovery engine: 1,600+ law-firm domains and 9,500+ verified emails on zero paid data sources, with consent-basis tagging, block-detection, and MX verification.',
    tags: []
  },
  {
    title: 'DocFoundry',
    year: '2025',
    kind: 'earlier',
    description:
      'Agentic knowledge workspace for document queries — FastAPI, PostgreSQL, Next.js.',
    tags: [],
    href: 'https://github.com/BeIanChang/DocFoundry'
  },
  {
    title: 'pBFT-visualizer',
    year: '2025',
    kind: 'earlier',
    description:
      'Observability pipeline and visualization UI for a C++ pBFT consensus system.',
    tags: [],
    href: 'https://github.com/BeIanChang/pBFT-visualizer'
  },
  {
    title: 'FitCoachAR',
    year: '2025',
    kind: 'earlier',
    description: 'AR fitness-coaching prototype for guided training.',
    tags: [],
    href: 'https://github.com/BeIanChang/FitCoachAR'
  }
];

export default function PortfolioPage() {
  return (
    <div className="space-y-16">
      <header className="max-w-[60ch] space-y-4 pt-4">
        <h1 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Work
        </h1>
        <p className="text-dim">
          Systems that carry real traffic, research with named deliverables,
          and the open-source projects in between. Client work is described at
          the architecture level; code for employer systems stays private.
        </p>
      </header>

      <section className="space-y-2">
        <SectionHeading title="Flagships" meta="deep dives" />
        {featured.map((project) => (
          <ProjectFeature key={project.title} project={project} />
        ))}
      </section>

      <section className="space-y-2">
        <SectionHeading title="Index" meta={`${index.length} entries`} />
        <div>
          {index.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
