"use client";

import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";

const VIEWPORT_HEIGHT_BREAKPOINT_PX = 1024;

/** Home marketing hero — content from `utils/static.json`. */
export function HeroSection() {
  return (
    <MarketingPageHero
      heroId="home"
      shiftUnderHeader
      shiftTillSearch={false}
      shiftExtraContentTopPx={100}
      mobileShiftExtraContentTopPx={50}
      useViewportHeightFlag
      viewportHeightBreakpointPx={VIEWPORT_HEIGHT_BREAKPOINT_PX}
      mobileHeightPx={400}
      heightPx={600}
      negativePadding={50}
      mobileNegativePadding={50}
    />
  );
}
