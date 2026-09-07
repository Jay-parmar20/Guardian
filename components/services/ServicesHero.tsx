"use client";

import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";

const VIEWPORT_BREAKPOINT_PX = 1024;

type ServicesHeroProps = {
  /** Buyer's or Developer's services — maps to `utils/static.json` entries. */
  audience: "buyer" | "developer";
};

/**
 * Shared hero for Buyer's and Developer's service pages.
 * Copy and images are defined in `utils/static.json` (`servicesBuyer` / `servicesDeveloper`).
 */
export function ServicesHero({ audience }: ServicesHeroProps) {
  return (
    <MarketingPageHero
      heroId={audience === "buyer" ? "servicesBuyer" : "servicesDeveloper"}
      heightPx={650}
      mobileHeightPx={400}
      useViewportHeightFlag
      viewportHeightBreakpointPx={VIEWPORT_BREAKPOINT_PX}
      shiftExtraContentTopPx={100}
      mobileShiftExtraContentTopPx={50}
      shiftUnderHeader={true}
      shiftTillSearch={false}
      negativePadding={50}
      mobileNegativePadding={50}
    />
  );
}
