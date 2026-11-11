import { MovieReviewData } from "../types";

// Fictional sample review. Ships with a made-up movie (no real title,
// stills, or audio) so the template renders end-to-end with zero
// copyright risk out of the box. Swap this out for a real review --
// see USAGE.md for what to change.

export const sampleReview: MovieReviewData = {
  movieTitle: "Aurora Drift",
  releaseYear: 2025,
  tagline: "A signal from the edge of the solar system changes everything.",
  rating: 8,
  verdict:
    "Aurora Drift trades spectacle for patience, and mostly earns it. A tense, well-acted sci-fi drama with a finale that lingers.",
  musicSrc: undefined,
  scenes: [
    {
      headline: "The Setup",
      narration:
        "The film opens on a deep-space relay station picking up a signal that shouldn't exist. The crew's quiet routine unravels fast.",
      durationInSeconds: 6,
      imageColor: "linear-gradient(135deg, #0b1220 0%, #1a2540 100%)",
    },
    {
      headline: "The Performances",
      narration:
        "The lead cast carries long stretches of near-silence with real conviction. The chemistry between the two leads is the film's backbone.",
      durationInSeconds: 6,
      imageColor: "linear-gradient(135deg, #1a1220 0%, #3a1f3d 100%)",
    },
    {
      headline: "The Pacing Problem",
      narration:
        "The middle act slows to a crawl. A tighter edit in the second hour would have made the payoff land even harder.",
      durationInSeconds: 6,
      imageColor: "linear-gradient(135deg, #201a12 0%, #3d2f1f 100%)",
    },
    {
      headline: "The Ending",
      narration:
        "Without spoiling it: the final ten minutes reframe everything that came before. It's the kind of ending that demands a rewatch.",
      durationInSeconds: 6,
      imageColor: "linear-gradient(135deg, #0f2013 0%, #1f3d2a 100%)",
    },
  ],
};
