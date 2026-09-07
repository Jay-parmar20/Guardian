import type { MarketingHeroContent } from "@/data/audience-marketing";
import {
  MarketingAudienceHero,
  type MarketingHeroNegativeContentShift,
} from "@/components/marketing/MarketingPageHero";

export type AudienceHeroProps = {
  content: MarketingHeroContent;
  shiftUnderHeader?: boolean;
  shiftTillSearch?: boolean;
  heightPx?: number;
  mobileHeightPx?: number;
  useViewportHeightFlag?: boolean;
  viewportHeightBreakpointPx?: number;
  negativePadding?: MarketingHeroNegativeContentShift;
  mobileNegativePadding?: MarketingHeroNegativeContentShift;
  shiftExtraContentTopPx?: number;
  mobileShiftExtraContentTopPx?: number;
};

export function AudienceHero({
  content,
  heightPx,
  mobileHeightPx,
  useViewportHeightFlag,
  viewportHeightBreakpointPx,
  negativePadding,
  mobileNegativePadding,
  shiftUnderHeader,
  shiftTillSearch,
  shiftExtraContentTopPx,
  mobileShiftExtraContentTopPx,
}: AudienceHeroProps) {
  const resolvedExtraTop =
    shiftExtraContentTopPx !== undefined
      ? shiftExtraContentTopPx
      : content.shiftExtraContentTopPx;

  return (
    <MarketingAudienceHero
      content={content}
      heightPx={heightPx}
      mobileHeightPx={mobileHeightPx}
      useViewportHeightFlag={useViewportHeightFlag}
      viewportHeightBreakpointPx={viewportHeightBreakpointPx}
      negativePadding={negativePadding}
      mobileNegativePadding={mobileNegativePadding}
      shiftUnderHeader={shiftUnderHeader}
      shiftTillSearch={shiftTillSearch}
      shiftExtraContentTopPx={resolvedExtraTop}
      mobileShiftExtraContentTopPx={mobileShiftExtraContentTopPx}
    />
  );
}
