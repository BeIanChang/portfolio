import type { Metadata } from 'next';
import { CaseStudy } from '../../../components/CaseStudy';

export const metadata: Metadata = {
  title: 'Canvass — Outreach Platform | Yangyang Zhang'
};

export default function CanvassCasePage() {
  return (
    <CaseStudy
      title="Canvass — Outreach Platform"
      subtitle="A multi-tenant outreach and lead-gen platform with compliance built into the data layer."
      meta="Production System · Geek Certified · 2026"
      tags={['Node/TS', 'React', 'MariaDB', 'Crawling', 'CASL']}
      image={{
        src: '/projects/canvass.jpg',
        alt: 'Canvass Opportunities view listing construction tenders ranked by AI relevance score',
        caption:
          'Opportunities view — public construction tenders ranked by AI fit score for each workspace’s industry. (Data-source labels blurred.)'
      }}
      sections={[
        {
          heading: 'What it is',
          body:
            'A B2B outreach platform where each client gets an isolated workspace: lead harvesting from public sources, enrichment and segmentation, AI-assisted search and drafting, campaign sending, and an opportunities feed that ranks public tenders by fit — one pipeline from raw data to booked conversation.'
        },
        {
          heading: 'What I built',
          bullets: [
            'Hard multi-tenant isolation: every API tenant-scoped, cross-tenant access returns 404, enforced by a 49-check regression suite that must pass after any endpoint change.',
            'Source-pool harvesting with block detection, backoff, and MX verification — a firm-discovery engine that found 1,600+ domains and 9,500+ verified emails on zero paid data subscriptions.',
            'Compliance in the schema: every contact carries a consent basis (CASL), and sending is gated on it — the system can’t be talked into emailing someone it shouldn’t.',
            'Cited AI search over leads (answers link to the rows they came from) and profile-grounded email drafting.',
            'A single-headed send-queue state machine: at-most-once delivery, send-time re-validation, pause/unenroll safety, stall-proof re-kicks.'
          ]
        },
        {
          heading: 'The hard problems',
          bullets: [
            'Isolation you can prove, not promise — IDOR-hunting your own API, then freezing the proof as a regression gate.',
            'Compliant cold outreach: consent tracked per-contact at ingestion time, not checked as an afterthought at send time.',
            'Queue correctness under churn: no skipped sends, no mis-sends after a pause, no silent stalls — each guaranteed by construction, not by monitoring.'
          ]
        }
      ]}
    />
  );
}
