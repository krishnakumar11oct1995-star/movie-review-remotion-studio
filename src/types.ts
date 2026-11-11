export type Scene = {
  headline: string;
  narration: string;
  durationInSeconds: number;
  imageSrc?: string; // path relative to public/, e.g. "images/scene-1.jpg"
  imageColor?: string; // fallback solid/gradient color if no image supplied
};

export type MovieReviewData = {
  movieTitle: string;
  releaseYear: number;
  tagline: string;
  rating: number; // out of 10
  scenes: Scene[];
  verdict: string;
  musicSrc?: string; // path relative to public/, e.g. "audio/theme.mp3"
};
