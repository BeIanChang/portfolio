import type { Metadata } from 'next';
import { CaseStudy } from '../../../components/CaseStudy';

export const metadata: Metadata = {
  title: 'Superpost — AI Content Pipeline | Yangyang Zhang'
};

export default function SuperpostCasePage() {
  return (
    <CaseStudy
      title="Superpost — AI Content Pipeline"
      subtitle="Long-form client material in, platform-ready carousels and Reels out — with a human gate in front of every publish."
      meta="Production System · Geek Certified · 2026"
      tags={['Node/TS', 'ffmpeg', 'LLM', 'Pipelines', 'Compliance']}
      sections={[
        {
          heading: 'What it is',
          body:
            'A social-content production system for businesses in regulated professions: it turns articles and long videos into on-brand carousels and Reels, batches them for monthly client approval, and publishes only what a human has signed off. The clients it serves cannot afford an AI hallucination in an ad — so the pipeline is designed around that constraint.'
        },
        {
          heading: 'What I built',
          bullets: [
            'A custom EDL→ffmpeg clip engine with frame-exact cuts and 1.3 ms audio/video drift — no off-the-shelf editor in the loop.',
            'Clip mining: one 41-minute source video yielded 28 scored Reel candidates with transcript-grounded hooks (~7 months of content from a single asset).',
            'A brand-kit system that renders every asset on-brand — fonts, colors, layouts — without a designer in the loop.',
            'Approval-gated publishing: zero LLM calls in the publish path; what goes out is byte-identical to what the client approved.'
          ]
        },
        {
          heading: 'The hard problems',
          bullets: [
            'Frame-exact video assembly in a headless pipeline — editors hide the hard parts; ffmpeg does not.',
            'Compliance for regulated advertisers: forbidden claim types are blocked structurally (no testimonials, no superlatives), not by hoping the model behaves.',
            'Designing for the approval workflow: the unit of work is a reviewable monthly batch, not an individual post.'
          ]
        }
      ]}
    />
  );
}
