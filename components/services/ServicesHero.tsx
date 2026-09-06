"use client";

import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";
import { useViewportIsMobile } from "@/hooks/useViewportIsMobile";

const VIEWPORT_BREAKPOINT_PX = 1024;

type ServicesHeroProps = {
  /** Buyer's or Developer's services — maps to `utils/static.json` entries. */
  audience: "buyer" | "developer";
};

/**
 * Shared hero for Buyer's and Developer's service pages.
 * Copy and images are defined in `utils/static.json` (`servicesBuyer` / `servicesDeveloper`).
 * `negativePadding` is cleared on mobile inside `MarketingPageHero`.
 */
export function ServicesHero({ audience }: ServicesHeroProps) {
  const isMobile = useViewportIsMobile(true, VIEWPORT_BREAKPOINT_PX);
  const shiftExtraContentTopPx = isMobile
    ? 0
    : audience === "buyer"
      ? 0
      : 0;

  return (
    <MarketingPageHero
      heroId={audience === "buyer" ? "servicesBuyer" : "servicesDeveloper"}
      shiftExtraContentTopPx={shiftExtraContentTopPx}
      shiftUnderHeader={true}
      shiftTillSearch={false}
      negativePadding={0}
    />
  );
}
