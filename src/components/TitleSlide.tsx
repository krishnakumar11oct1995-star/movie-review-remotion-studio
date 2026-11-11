import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { fonts } from "../fonts";

type Props = {
  movieTitle: string;
  releaseYear: number;
  tagline: string;
};

export const TitleSlide: React.FC<Props> = ({
  movieTitle,
  releaseYear,
  tagline,
}) => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleScale = interpolate(frame, [0, 20], [0.92, 1], {
    extrapolateRight: "clamp",
  });
  const taglineOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `radial-gradient(circle at 50% 40%, ${theme.colors.backgroundGradientEnd}, ${theme.colors.background})`,
      }}
    >
      <div
        style={{
          fontFamily: fonts.body,
          color: theme.colors.accent,
          fontSize: 32,
          letterSpacing: 8,
          textTransform: "uppercase",
          marginBottom: 24,
          opacity: titleOpacity,
        }}
      >
        Movie Review
      </div>
      <div
        style={{
          fontFamily: fonts.heading,
          color: theme.colors.text,
          fontSize: 140,
          letterSpacing: 4,
          textAlign: "center",
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          lineHeight: 1.1,
          padding: "0 80px",
        }}
      >
        {movieTitle}
        <span
          style={{
            fontSize: 56,
            color: theme.colors.textMuted,
            marginLeft: 20,
          }}
        >
          ({releaseYear})
        </span>
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          color: theme.colors.textMuted,
          fontSize: 38,
          marginTop: 40,
          textAlign: "center",
          opacity: taglineOpacity,
          maxWidth: 1100,
          padding: "0 40px",
        }}
      >
        {tagline}
      </div>
    </div>
  );
};
