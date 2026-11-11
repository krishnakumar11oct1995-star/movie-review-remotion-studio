# Creating a new movie review video

## 1. Write your review data

Edit `src/data/sampleReview.ts` (or create a new file, e.g.
`src/data/myReview.ts`, and point `Composition.tsx`'s `defaultProps` at
it) following the `MovieReviewData` shape in `src/types.ts`:

```ts
export const myReview: MovieReviewData = {
  movieTitle: "Your Movie Title",
  releaseYear: 2024,
  tagline: "One punchy line.",
  rating: 7,          // out of 10
  verdict: "Your closing take, 1-2 sentences.",
  musicSrc: "audio/your-track.mp3", // optional, see below
  scenes: [
    {
      headline: "The Plot",
      narration: "What happens, in your own words -- keep it commentary/analysis, not a script excerpt.",
      durationInSeconds: 6,
      imageColor: "linear-gradient(135deg, #0b1220 0%, #1a2540 100%)",
      // or: imageSrc: "images/scene-1.jpg"
    },
    // add as many scenes as you want -- duration auto-adjusts
  ],
};
```

Each scene renders for `durationInSeconds`; the total video length is
calculated automatically in `Composition.tsx`.

## 2. Preview it

```bash
npm run dev
```

Opens Remotion Studio where you can scrub through the timeline live.

## 3. Render it

```bash
npm run render
```

Outputs `out/movie-review.mp4`, ready to upload.

---

## Avoiding copyright strikes

The template ships with **zero real movie stills, posters, or audio** --
the sample uses a fictional film and CSS-gradient backgrounds
specifically so there's nothing to accidentally infringe. When you add
your own review, keep these rules in mind:

### Images (`public/images/`)
- **Don't** use screenshots/stills from the actual movie, official
  posters, or marketing art -- these are copyrighted and are the most
  common source of strikes on review channels.
- **Do** use:
  - Your own photos/b-roll
  - Royalty-free stock: [Pexels](https://www.pexels.com),
    [Unsplash](https://unsplash.com), [Pixabay](https://pixabay.com)
  - Simple graphics/illustrations you create or commission
  - The built-in CSS gradient placeholders (`imageColor`) -- looks
    intentional and cinematic, costs nothing, zero risk
- If you must reference a film visually for genuine commentary/criticism
  purposes, keep clips extremely short (a few seconds), clearly
  transformative (analysis overlaid, not just replayed), and understand
  this still carries real platform risk (YouTube's Content ID does not
  reliably recognize "fair use" automatically) -- this template does not
  attempt to manage that risk for you.

### Music (`public/audio/`)
- **Don't** use commercial soundtrack music, popular songs, or the
  movie's actual score.
- **Do** use:
  - [YouTube Audio Library](https://www.youtube.com/audiolibrary) (free,
    made for this exact use case)
  - [Pixabay Music](https://pixabay.com/music/) (royalty-free)
  - [Free Music Archive](https://freemusicarchive.org) (check each
    track's specific license)
  - Music you've composed or licensed yourself
- Always check the specific license terms (some require attribution).
- Drop the file into `public/audio/` and reference it as
  `musicSrc: "audio/your-track.mp3"`.

### Narration / script text
- Write your own commentary and analysis in your own words. Reacting to
  and critiquing a film is generally lower-risk than reproducing dialogue
  or lengthy plot summaries verbatim.

## Adjusting the look

- Colors/fonts: `src/theme.ts` and `src/fonts.ts`
- Timing: `TITLE_SECONDS` / `RATING_SECONDS` constants in
  `src/MovieReview.tsx`, plus each scene's `durationInSeconds`
- Background music volume/fade: props on `<BackgroundMusic />` in
  `src/MovieReview.tsx` (`volume`, `fadeInFrames`, `fadeOutFrames`)
