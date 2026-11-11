# Setup

This project was scaffolded from the official Remotion CLI
(`github.com/remotion-dev/remotion`) and extended with a movie-review
video template: title slide -> scene-by-scene commentary -> rating slide,
with cinematic dark styling and optional background music.

## Prerequisites

- Node.js 16+ (verified working on v24)
- npm

## Reproduce from scratch

```bash
npx create-video@latest --yes --blank my-project
cd my-project
npm install
npm install @remotion/google-fonts
```

Then copy in this project's `src/` folder (theme, fonts, types, data,
components, MovieReview.tsx, Composition.tsx, Root.tsx).

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Opens the Remotion Studio preview at http://localhost:3000 |
| `npm run render` | Renders `MovieReview` to `out/movie-review.mp4` |
| `npx remotion render MovieReview out/custom-name.mp4` | Renders with a custom output path |
| `npm run lint` | Type-checks and lints the project |

## Project structure

```
src/
  index.ts              Remotion entry point (registers the root)
  Root.tsx               Registers compositions
  Composition.tsx        Defines the "MovieReview" composition + duration calc
  MovieReview.tsx         Sequences title -> scenes -> rating + music
  theme.ts                Cinematic dark color palette, video config (1080p/30fps)
  fonts.ts                Loads Bebas Neue + Inter via @remotion/google-fonts
  types.ts                MovieReviewData / Scene TypeScript schema
  data/
    sampleReview.ts       Fictional sample review (no real IP -- see USAGE.md)
  components/
    TitleSlide.tsx        Opening title card
    SceneCard.tsx          Background + Ken Burns zoom + headline/narration text
    RatingSlide.tsx        Animated score reveal + verdict
    BackgroundMusic.tsx    <Audio> wrapper with fade-in/fade-out envelope
public/
  images/                 Put your own scene images here
  audio/                  Put your own licensed background music here
out/
  movie-review.mp4        Rendered output (gitignored)
```

## Verified working

- `npx tsc --noEmit` -> no type errors
- `npx remotion render MovieReview out/movie-review.mp4` -> renders a
  32-second 1920x1080 MP4 (~2.8 MB) using only the built-in fictional
  sample data, CSS-gradient placeholders, and no external assets.
