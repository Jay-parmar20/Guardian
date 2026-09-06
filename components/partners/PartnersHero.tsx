import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";
import type { ComponentProps } from "react";

/** Props forwarded to `MarketingPageHero` — content from `utils/static.json` → `marketingHeroes.partners`. */
type PartnersHeroProps = Omit<
  ComponentProps<typeof MarketingPageHero>,
  "heroId" | "projectsStage"
>;

const defaultProps: Partial<PartnersHeroProps> = {
  heightPx: 600,
  mobileHeightPx: undefined,
  useViewportHeightFlag: false,
  viewportHeightBreakpointPx: 1024,
  shiftExtraContentTopPx: 0,
  shiftUnderHeader: false,
  shiftTillSearch: false,
};

export function PartnersHero(props: PartnersHeroProps) {
  return <MarketingPageHero heroId="partners" {...defaultProps} {...props} />;
}
