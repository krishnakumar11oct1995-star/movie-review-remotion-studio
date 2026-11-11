import React from "react";
import { interpolate, useCurrentFrame, Img, staticFile } from "remotion";
import { theme } from "../theme";
import { fonts } from "../fonts";
import { Scene } from "../types";

type Props = {
  scene: Scene;
};

// Renders one review "beat": a full-bleed background (image if provided,
// otherwise a CSS gradient placeholder -- no external assets required),
// a slow Ken Burns zoom, and a headline + narration text overlay.
export const SceneCard: React.FC<Props> = ({ scene }) => {
  const frame = useCurrentFrame();

  const textOpacity = interpolate(frame, [8, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textTranslate = interpolate(frame, [8, 24], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Slow continuous zoom for the "Ken Burns" effect, driven by frame count
  // rather than a fixed duration so it works for scenes of any length.
  const zoomScale = interpolate(frame, [0, 300], [1, 1.12], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background: theme.colors.background,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${zoomScale})`,
          background: scene.imageSrc ? undefined : scene.imageColor,
        }}
      >
        {scene.imageSrc ? (
          <Img
            src={staticFile(scene.imageSrc)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : null}
      </div>

      {/* Vignette for text legibility over any background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to bottom, rgba(0,0,0,0) 40%, ${theme.colors.vignette} 100%)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 100,
          bottom: 100,
          right: 100,
          opacity: textOpacity,
          transform: `translateY(${textTranslate}px)`,
        }}
      >
        <div
          style={{
            fontFamily: fonts.heading,
            color: theme.colors.accent,
            fontSize: 56,
            letterSpacing: 2,
            marginBottom: 16,
          }}
        >
          {scene.headline}
        </div>
        <div
          style={{
            fontFamily: fonts.body,
            color: theme.colors.text,
            fontSize: 40,
            lineHeight: 1.35,
            maxWidth: 1500,
          }}
        >
          {scene.narration}
        </div>
      </div>
    </div>
  );
};
