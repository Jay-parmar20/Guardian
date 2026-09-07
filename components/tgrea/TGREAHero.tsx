import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";

export function TGREAHero() {
  return (
    <div>
      <MarketingPageHero
        heroId="tgrea"
        heightPx={650}
        mobileHeightPx={400}
        useViewportHeightFlag
        shiftUnderHeader={false}
        shiftTillSearch={false}
        shiftExtraContentTopPx={100}
        mobileShiftExtraContentTopPx={50}
        viewportHeightBreakpointPx={1024}
        negativePadding={50}
      />
    </div>
  );
}
