import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";
import type { ComponentProps } from "react";

/** Props forwarded to `MarketingPageHero` — content from `utils/static.json` → `marketingHeroes.partners`. */
type PartnersHeroProps = Omit<
  ComponentProps<typeof MarketingPageHero>,
  "heroId" | "projectsStage"
>;

const defaultProps: Partial<PartnersHeroProps> = {
  heightPx: 600,
  mobileHeightPx: 400,
  useViewportHeightFlag: true,
  viewportHeightBreakpointPx: 1024,
  shiftExtraContentTopPx: 100,
  mobileShiftExtraContentTopPx: 50,
  shiftUnderHeader: false,
  shiftTillSearch: false,
  negativePadding: 50,
};

export function PartnersHero(props: PartnersHeroProps) {
  return <MarketingPageHero heroId="partners" {...defaultProps} {...props} />;
}
