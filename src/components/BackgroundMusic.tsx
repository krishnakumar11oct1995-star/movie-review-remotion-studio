import React from "react";
import { Audio, interpolate, staticFile } from "remotion";

type Props = {
  src: string; // path relative to public/, e.g. "audio/theme.mp3"
  durationInFrames: number;
  volume?: number; // 0-1, peak volume once faded in
  fadeInFrames?: number;
  fadeOutFrames?: number;
};

// Wraps Remotion's <Audio> with a fade-in/fade-out envelope so background
// music never cuts in or out abruptly. No audio file ships by default --
// see USAGE.md for royalty-free sources you can drop into public/audio.
export const BackgroundMusic: React.FC<Props> = ({
  src,
  durationInFrames,
  volume = 0.35,
  fadeInFrames = 30,
  fadeOutFrames = 45,
}) => {
  return (
    <Audio
      src={staticFile(src)}
      volume={(frame) =>
        interpolate(
          frame,
          [
            0,
            fadeInFrames,
            durationInFrames - fadeOutFrames,
            durationInFrames,
          ],
          [0, volume, volume, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        )
      }
    />
  );
};
