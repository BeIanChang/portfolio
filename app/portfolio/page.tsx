import { ProjectCard } from '../../components/ProjectCard';
import { SectionHeading } from '../../components/SectionHeading';

const projects = [
  {
    title: 'Yaapi — Voice-AI Platform',
    description:
      'Self-hosted Vapi-class platform built solo: patched FreeSWITCH media layer (C), realtime agent pipeline with barge-in, multi-tenant console. Carries real business phone lines in production with blue-green HA failover and a guardrail + evaluation stack.',
    tags: ['Python', 'FreeSWITCH', 'LLM', 'React'],
    links: [
      { label: 'Case Study', href: '/portfolio/yaapi' }
    ]
  },
  {
    title: 'Conduit — LLM Serving Research',
    description:
      'Mitacs Accelerate research on token-efficient LLM serving: five generations of quality-vs-cost routing engines, a 739-prompt labeled dataset, a 164-provider census, and a prompt-compression evaluation framework (publication in progress).',
    tags: ['LLM Serving', 'Routing', 'Research'],
    links: [
      { label: 'Case Study', href: '/portfolio/conduit' }
    ]
  },
  {
    title: 'Canvass — Outreach Platform',
    description:
      'Multi-tenant lead-gen platform with hard workspace isolation (49-check regression gate), compliant source-pool harvesting, cited AI search over leads, and grounded email drafting.',
    tags: ['Node/TS', 'MariaDB', 'Compliance'],
    links: [
      { label: 'Case Study', href: '/portfolio/canvass' }
    ]
  },
  {
    title: 'Superpost — AI Content Pipeline',
    description:
      'Turns long-form client material into carousels and Reels for regulated advertisers: custom EDL→ffmpeg clip engine with frame-exact cuts (1.3 ms A/V drift), clip mining, and approval-gated publishing with zero LLM calls in the publish path.',
    tags: ['ffmpeg', 'Pipelines', 'Node/TS'],
    links: [
      { label: 'Case Study', href: '/portfolio/superpost' }
    ]
  },
  {
    title: 'virtual_world',
    description:
      'Open-source AstrBot plugin that gives a chatbot a life of its own: a private map, daily schedule, and scene memory — it cooks, wanders, daydreams, and starts conversations unprompted.',
    tags: ['Agents', 'Open Source', 'Python'],
    links: [
      { label: 'GitHub', href: 'https://github.com/BeIanChang/astrbot_plugin_virtual_world' }
    ]
  },
  {
    title: 'openapply',
    description:
      'Open-source job-application autofill browser extension with bring-your-own-key LLM support across OpenAI, Claude, Gemini, and Ollama.',
    tags: ['Extension', 'LLM', 'Open Source'],
    links: [
      { label: 'GitHub', href: 'https://github.com/BeIanChang/openapply' }
    ]
  },
  {
    title: 'Guitar Studio',
    description:
      'Photograph a mixed-notation guitar score and a VLM agent pipeline with a validator gate turns it into a playable tab DSL — 44 measures transcribed end-to-end with zero errors.',
    tags: ['VLM', 'Agents', 'Next.js'],
    links: [
      { label: 'Case Study', href: '/portfolio/guitar-studio' }
    ]
  },
  {
    title: 'Meridian — Content Engine',
    description:
      'Content/SEO engine built on a universal page model: AI authors into a constrained IR with a curated component library and a contained raw-HTML escape hatch.',
    tags: ['LLM', 'Content', 'SEO'],
    links: []
  },
  {
    title: 'Legal-Vertical Crawler',
    description:
      'Firm-discovery engine: 1,600+ law-firm domains and 9,500+ verified emails found on zero paid data sources, with consent-basis tagging, block detection, and MX verification.',
    tags: ['Crawling', 'Data', 'CASL'],
    links: []
  },
  {
    title: 'DocFoundry',
    description: 'Agentic knowledge workspace for document queries with fast APIs and interactive UI.',
    tags: ['FastAPI', 'PostgreSQL', 'Next.js'],
    links: [
      { label: 'GitHub', href: 'https://github.com/BeIanChang/DocFoundry' }
    ]
  },
  {
    title: 'pBFT-visualizer',
    description: 'Observability pipeline and visualization UI for a C++ pBFT system.',
    tags: ['React', 'FastAPI', 'Kafka'],
    links: [
      { label: 'GitHub', href: 'https://github.com/BeIanChang/pBFT-visualizer' }
    ]
  },
  {
    title: 'FitCoachAR',
    description: 'AR fitness coaching experiment focused on guided training experiences.',
    tags: ['AR', 'Mobile', 'Prototype'],
    links: [
      { label: 'GitHub', href: 'https://github.com/BeIanChang/FitCoachAR' }
    ]
  }
];

export default function PortfolioPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects with range"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="motion-safe:animate-reveal"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
