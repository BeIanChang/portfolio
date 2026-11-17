# Design

Operator Dark — a personal engineering brand: graphite surface, one mint signal, border-led structure. The register is an instrument panel: labeled, precise, quiet.

## Color

Defined as CSS custom properties in `app/globals.css` (OKLCH), mapped to Tailwind in `tailwind.config.ts`.

| Token | Value | Role |
| --- | --- | --- |
| `--bg` | `oklch(16.5% 0.012 255)` | page background (graphite) |
| `--surface` | `oklch(19.5% 0.013 255)` | inputs, hover fills |
| `--raised` | `oklch(23% 0.014 255)` | raised panels (sparingly) |
| `--ink` | `oklch(95% 0.005 255)` | primary text |
| `--dim` | `oklch(78% 0.01 255)` | secondary text |
| `--mute` | `oklch(64% 0.012 255)` | mono metadata |
| `--mint` | `oklch(86% 0.145 163)` | the single accent: links, status, diagram signal |
| `--line` / `--line-strong` | white @ 9% / 18% | hairline borders |

Rules: one accent only; mint never exceeds ~10% of any viewport. No gradients, no glass, no shadows-as-glow. Selection is mint-on-graphite.

## Typography

- **Inter** (`--font-inter`) — all reading text. Weights: 500/600 for headings, 400 body.
- **JetBrains Mono** (`--font-jetbrains`) — metadata, nav, labels, tags, diagram text.
- Display ceiling 3.4rem; tracking never tighter than -0.02em. `text-wrap: balance` on headings, `pretty` on prose. Body ≤65ch.
- `.mono-label`: 11px mono uppercase, 0.14em tracking, `--mute`. Used for data labels only — never as an eyebrow over every section.

## Structure

- `.shell`: max-w 72rem, px-6/10. Single column; sticky 14-high top nav with hairline bottom border.
- Sections open with `SectionHeading` (hairline rule + title + optional mono meta). No cards: content is **ledger rows** (`ProjectRow`) and **feature entries** (`ProjectFeature`, 2-col: identity left, evidence right).
- Evidence bullets use a 3px mint dash, not dots.
- Radius: 3–4px on tags/inputs/buttons only. Everything else square.

## Motion

- One choreographed hero reveal (`hero-rise`, 4 staggered steps, 0.9s ease-out-quint). Keyframes start at opacity 0.4 — paused renderers must never show a blank hero.
- `signal-dash` / `signal-pulse` animate the hero SVG only.
- Everything else: 200ms color transitions. Full `prefers-reduced-motion` fallback (no animation, instant states).

## Imagery

Custom fine-line SVG only (`HeroVisual`: the voice-platform call path). No stock photos, no icons-above-headings. New imagery must be technical drawing in `--line`/`--mint` strokes.
