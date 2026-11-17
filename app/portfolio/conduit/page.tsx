import type { Metadata } from 'next';
import { CaseStudy } from '../../../components/CaseStudy';

export const metadata: Metadata = {
  title: 'Conduit — LLM Serving Research | Yangyang Zhang'
};

export default function ConduitCasePage() {
  return (
    <CaseStudy
      title="Conduit — LLM Serving Research"
      subtitle="Mitacs Accelerate research on token-efficient LLM serving — the dollar-cost side of inference."
      meta="Funded Research · McMaster University · 2026–27"
      tags={['LLM Serving', 'Routing', 'Compression', 'Evaluation']}
      sections={[
        {
          heading: 'What it is',
          body:
            'A funded 12-month research internship (Mitacs Accelerate, McMaster University × industry partner) studying how far routing, prompt compression, and caching can cut the cost of serving LLM workloads — evaluated against real cross-provider dollar cost, not token counts alone. Most serving research optimizes latency or quality; Conduit treats the invoice as the first-class metric.'
        },
        {
          heading: 'What I built',
          bullets: [
            'Five generations of quality-vs-cost routing engines, culminating in a distilled hybrid classifier.',
            'A 739-prompt outcome-labeled routing dataset and a quality-cost frontier exposed as an operating-point API: callers declare a target quality or a max cost, the router picks the model.',
            'A census of 164 LLM serving providers with same-model price arbitrage quantified.',
            'An evaluation framework for prompt compression that accounts for prefix caching and output expansion — effects that flip naive token-savings math.'
          ]
        },
        {
          heading: 'Status',
          body:
            'Experiments ongoing; publication in progress. Detailed results are held back until the paper is out — happy to talk about the framework and the engineering.'
        }
      ]}
    />
  );
}
