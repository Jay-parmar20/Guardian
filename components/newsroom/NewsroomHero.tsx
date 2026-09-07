import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";

const VIEWPORT_HEIGHT_BREAKPOINT_PX = 1024;

export function NewsroomHero() {
  return (
    <MarketingPageHero
      heroId="newsroom"
      heightPx={600}
      mobileHeightPx={400}
      useViewportHeightFlag
      viewportHeightBreakpointPx={VIEWPORT_HEIGHT_BREAKPOINT_PX}
      shiftUnderHeader
      shiftTillSearch={false}
      shiftExtraContentTopPx={100}
      mobileShiftExtraContentTopPx={50}
      negativePadding={50}
      mobileNegativePadding={50}
    />
  );
}
