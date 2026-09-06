import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";

export function BlogHero() {
  return <MarketingPageHero heroId="blog" heightPx={600} mobileHeightPx={400} useViewportHeightFlag viewportHeightBreakpointPx={1024} shiftExtraContentTopPx={0} shiftUnderHeader={true} shiftTillSearch={false} negativePadding={24} />;
}
