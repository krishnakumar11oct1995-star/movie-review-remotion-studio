import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { MovieReviewData } from "./types";
import { theme } from "./theme";
import { TitleSlide } from "./components/TitleSlide";
import { SceneCard } from "./components/SceneCard";
import { RatingSlide } from "./components/RatingSlide";
import { BackgroundMusic } from "./components/BackgroundMusic";

export const TITLE_SECONDS = 3;
export const RATING_SECONDS = 5;

export const getTotalDurationInFrames = (
  data: MovieReviewData,
  fps: number,
) => {
  const sceneSeconds = data.scenes.reduce(
    (sum, scene) => sum + scene.durationInSeconds,
    0,
  );
  return Math.round((TITLE_SECONDS + sceneSeconds + RATING_SECONDS) * fps);
};

export const MovieReview: React.FC<{ data: MovieReviewData }> = ({
  data,
}) => {
  const fps = theme.video.fps;
  const titleFrames = TITLE_SECONDS * fps;
  const ratingFrames = RATING_SECONDS * fps;
  const totalFrames = getTotalDurationInFrames(data, fps);

  let cursor = titleFrames;

  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.background }}>
      {data.musicSrc ? (
        <BackgroundMusic src={data.musicSrc} durationInFrames={totalFrames} />
      ) : null}

      <Sequence durationInFrames={titleFrames}>
        <TitleSlide
          movieTitle={data.movieTitle}
          releaseYear={data.releaseYear}
          tagline={data.tagline}
        />
      </Sequence>

      {data.scenes.map((scene, index) => {
        const frames = Math.round(scene.durationInSeconds * fps);
        const from = cursor;
        cursor += frames;
        return (
          <Sequence key={index} from={from} durationInFrames={frames}>
            <SceneCard scene={scene} />
          </Sequence>
        );
      })}

      <Sequence from={cursor} durationInFrames={ratingFrames}>
        <RatingSlide rating={data.rating} verdict={data.verdict} />
      </Sequence>
    </AbsoluteFill>
  );
};
