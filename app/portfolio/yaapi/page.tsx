import type { Metadata } from 'next';
import { CaseStudy } from '../../../components/CaseStudy';

export const metadata: Metadata = {
  title: 'Yaapi — Voice-AI Platform | Yangyang Zhang'
};

export default function YaapiCasePage() {
  return (
    <CaseStudy
      title="Yaapi — Voice-AI Platform"
      subtitle="A Vapi-class voice-AI platform built end-to-end, solo — carrying real business phone lines in production."
      meta="Production System · Geek Certified · 2026"
      tags={['Python', 'FreeSWITCH', 'C', 'LLM', 'React', 'FastAPI']}
      links={[{ label: 'Product Site', href: 'https://product.yaapi.geekcertified.com' }]}
      image={{
        src: '/projects/yaapi.jpg',
        alt: 'Yaapi product site hero with a live call transcript demo',
        caption:
          'The product site — its live demo line is answered by the platform itself.'
      }}
      sections={[
        {
          heading: 'What it is',
          body:
            'Custom AI phone agents for small businesses: they answer real calls, book against live calendars, capture every lead, and transfer with full context — built around each business’s actual logic (exceptions, conditions, judgment calls) instead of rigid conversation flows.'
        },
        {
          heading: 'What I built',
          bullets: [
            'Telephony layer: patched FreeSWITCH media module (C) for bidirectional realtime audio over live PSTN, with barge-in.',
            'Realtime agent pipeline: streaming ASR → LLM → TTS with interruption handling and per-assistant tools (calendar, CRM, SMS, transfers).',
            'Multi-tenant console: assistants, typed reusable tools, outbound campaigns, contact 360 views, per-client account isolation.',
            'Operations: blue-green high-availability failover and a 224-check deterministic smoke gate run before every cutover.',
            'Evaluation: a 21-dimension voice-quality rubric validated on 44 real transcripts, an LLM judge, and launch-readiness go/no-go gates.'
          ]
        },
        {
          heading: 'The hard problems',
          bullets: [
            'Making an LLM safe to speak for a business: an anti-fabrication guard stack, claims whitelisting that beat a RAG baseline head-to-head on compliance accuracy, and dedup-safe lead capture.',
            'Zero-downtime deploys on live phone lines — real client calls ride the same box you deploy to.',
            'Tool-calling reliability turned out to be a model property: my cross-model benchmark measured 44% vs 100% raw tool-call emission, and that data now drives default model selection.'
          ]
        }
      ]}
    />
  );
}
