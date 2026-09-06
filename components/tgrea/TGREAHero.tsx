import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";

export function TGREAHero() {
  return (
    <div>
      <MarketingPageHero
        heroId="tgrea"
        heightPx={600}
        mobileHeightPx={400}
        useViewportHeightFlag
        shiftUnderHeader={false}
        shiftTillSearch={false}
        shiftExtraContentTopPx={0}
        mobileShiftExtraContentTopPx={100}
        viewportHeightBreakpointPx={1024}
      />
    </div>
  );
}
