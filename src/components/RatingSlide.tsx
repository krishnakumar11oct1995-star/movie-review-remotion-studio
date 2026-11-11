import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { fonts } from "../fonts";

type Props = {
  rating: number; // out of 10
  verdict: string;
};

export const RatingSlide: React.FC<Props> = ({ rating, verdict }) => {
  const frame = useCurrentFrame();

  const ratingProgress = interpolate(frame, [0, 40], [0, rating], {
    extrapolateRight: "clamp",
  });
  const barWidth = interpolate(frame, [0, 40], [0, (rating / 10) * 100], {
    extrapolateRight: "clamp",
  });
  const verdictOpacity = interpolate(frame, [30, 55], [0, 1], {
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
        background: `radial-gradient(circle at 50% 60%, ${theme.colors.backgroundGradientEnd}, ${theme.colors.background})`,
      }}
    >
      <div
        style={{
          fontFamily: fonts.body,
          color: theme.colors.textMuted,
          fontSize: 32,
          letterSpacing: 6,
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        Our Verdict
      </div>

      <div
        style={{
          fontFamily: fonts.heading,
          color: theme.colors.accent,
          fontSize: 220,
          lineHeight: 1,
        }}
      >
        {ratingProgress.toFixed(1)}
        <span style={{ fontSize: 80, color: theme.colors.textMuted }}>
          /10
        </span>
      </div>

      <div
        style={{
          width: 700,
          height: 14,
          borderRadius: 7,
          background: "rgba(255,255,255,0.12)",
          marginTop: 30,
          marginBottom: 50,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${barWidth}%`,
            background: theme.colors.accent,
            borderRadius: 7,
          }}
        />
      </div>

      <div
        style={{
          fontFamily: fonts.body,
          color: theme.colors.text,
          fontSize: 36,
          textAlign: "center",
          maxWidth: 1300,
          padding: "0 60px",
          opacity: verdictOpacity,
        }}
      >
        {verdict}
      </div>
    </div>
  );
};
