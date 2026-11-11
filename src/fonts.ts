// Loads two Google Fonts locally via Remotion's font-loading package.
// Both are open-source (Open Font License) and safe to redistribute --
// no copyright/licensing risk, unlike ripping fonts from a movie poster.

import { loadFont as loadHeadingFont } from "@remotion/google-fonts/BebasNeue";
import { loadFont as loadBodyFont } from "@remotion/google-fonts/Inter";

const { fontFamily: headingFontFamily } = loadHeadingFont();
const { fontFamily: bodyFontFamily } = loadBodyFont();

export const fonts = {
  heading: headingFontFamily,
  body: bodyFontFamily,
};
