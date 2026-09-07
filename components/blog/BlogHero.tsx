import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";

export function BlogHero() {
  return <MarketingPageHero heroId="blog" heightPx={650} mobileHeightPx={400} useViewportHeightFlag viewportHeightBreakpointPx={1024} shiftExtraContentTopPx={100} mobileShiftExtraContentTopPx={50} shiftUnderHeader={true} shiftTillSearch={false} negativePadding={50} />;
}
