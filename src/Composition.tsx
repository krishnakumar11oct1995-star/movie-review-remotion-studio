import { CalculateMetadataFunction, Composition } from "remotion";
import { MovieReview, getTotalDurationInFrames } from "./MovieReview";
import { sampleReview } from "./data/sampleReview";
import { theme } from "./theme";
import { MovieReviewData } from "./types";

type Props = {
  data: MovieReviewData;
};

const calculateMetadata: CalculateMetadataFunction<Props> = ({ props }) => {
  return {
    durationInFrames: getTotalDurationInFrames(props.data, theme.video.fps),
  };
};

export const MovieReviewComposition = () => {
  return (
    <Composition
      id="MovieReview"
      component={MovieReview}
      fps={theme.video.fps}
      width={theme.video.width}
      height={theme.video.height}
      durationInFrames={getTotalDurationInFrames(sampleReview, theme.video.fps)}
      defaultProps={{ data: sampleReview }}
      calculateMetadata={calculateMetadata}
    />
  );
};
