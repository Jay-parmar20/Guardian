import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";
import type { ComponentProps } from "react";

type GazetteHeroProps = Omit<
	ComponentProps<typeof MarketingPageHero>,
	"heroId" | "projectsStage"
>;

const defaultProps: Partial<GazetteHeroProps> = {
	heightPx: 600,
	mobileHeightPx: 400,
	useViewportHeightFlag: true,
	viewportHeightBreakpointPx: 1024,

	shiftUnderHeader: true,
	shiftTillSearch: false,

	shiftExtraContentTopPx: 0,

	negativePadding: 50,
};

export function GazetteHero(props: GazetteHeroProps) {
	return <MarketingPageHero heroId="gazette" {...defaultProps} {...props} />;
}
