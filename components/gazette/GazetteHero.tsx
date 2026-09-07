import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";
import type { ComponentProps } from "react";

/** Props forwarded to `MarketingPageHero` — `gazette` data comes from `utils/static.json` → `marketingHeroes.gazette`. */
type GazetteHeroProps = Omit<ComponentProps<typeof MarketingPageHero>, "heroId" | "projectsStage">;

const defaultProps: Partial<GazetteHeroProps> = {
  heightPx: 650,
  mobileHeightPx: 400,
  useViewportHeightFlag: true,
  viewportHeightBreakpointPx: 1024,
  shiftExtraContentTopPx: 100,
  mobileShiftExtraContentTopPx: 50,
  shiftUnderHeader: true,
  shiftTillSearch: false,
  negativePadding: 50,
};

export function GazetteHero(props: GazetteHeroProps) {
  return <MarketingPageHero heroId="gazette" {...defaultProps} {...props} negativePadding={50} />;
}
