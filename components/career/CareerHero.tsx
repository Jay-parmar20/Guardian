import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";

const VIEWPORT_HEIGHT_BREAKPOINT_PX = 1024;

export function CareerHero() {
  return (
    <MarketingPageHero
      heroId="career"
      heightPx={600}
      mobileHeightPx={400}
      useViewportHeightFlag
      viewportHeightBreakpointPx={VIEWPORT_HEIGHT_BREAKPOINT_PX}
      shiftUnderHeader={false}
      shiftTillSearch={false}
      shiftExtraContentTopPx={100}
      mobileShiftExtraContentTopPx={50}
      negativePadding={50}
    />
  );
}
