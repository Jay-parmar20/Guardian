import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";

export function ContactHero() {
  return <MarketingPageHero heroId="contact" heightPx={600} mobileHeightPx={400} useViewportHeightFlag viewportHeightBreakpointPx={1024} shiftExtraContentTopPx={0} shiftUnderHeader={true} shiftTillSearch={false} negativePadding={24} />;
}
