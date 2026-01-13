import { ProjectCard } from '../../components/ProjectCard';
import { SectionHeading } from '../../components/SectionHeading';

const projects = [
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
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
