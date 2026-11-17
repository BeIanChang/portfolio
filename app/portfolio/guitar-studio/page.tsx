import type { Metadata } from 'next';
import { CaseStudy } from '../../../components/CaseStudy';

export const metadata: Metadata = {
  title: 'Guitar Studio | Yangyang Zhang'
};

export default function GuitarStudioCasePage() {
  return (
    <CaseStudy
      title="Guitar Studio"
      subtitle="My own practice studio — metronome, tuner, drills, a score library, and a photo-to-tab transcription agent."
      meta="Personal Project · 2026"
      tags={['Next.js', 'VLM', 'Agents', 'Web Audio']}
      links={[{ label: 'Live Site', href: 'https://music.geekcertified.com' }]}
      image={{
        src: '/projects/guitar-studio.jpg',
        alt: 'Guitar Studio practice app showing the metronome with time signature and subdivision controls',
        caption:
          'The practice studio — metronome, tuner, scale and chord trainers, and the photo-transcription pipeline (拍照录谱).'
      }}
      sections={[
        {
          heading: 'What it is',
          body:
            'A web practice studio I built for myself as a guitar player: Web-Audio metronome and tuner, scale and chord training, and a score library that plays back tabs — fed by a transcription pipeline that turns photographs of paper scores into playable notation.'
        },
        {
          heading: 'What I built',
          bullets: [
            'Photo-to-tab transcription: photograph a mixed-notation score (numbered notation + tab), a VLM agent pipeline reads it measure by measure, and a validator gate rejects anything inconsistent before it enters the library.',
            '44 measures transcribed end-to-end with zero errors on the first full-song run.',
            'The transcription agent runs headless with a lint gate — bad output can’t ship into the score library.',
            'Playable tab DSL with synchronized playback for practice.'
          ]
        },
        {
          heading: 'Why',
          body:
            'Because I play guitar, and the tool I wanted — point a camera at a paper score and have it playable — didn’t exist. Building for yourself keeps the quality bar honest: I’m the user who complains.'
        }
      ]}
    />
  );
}
