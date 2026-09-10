import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";

const VIEWPORT_HEIGHT_BREAKPOINT_PX = 1024;

export function BlogHero() {
	return (
		<MarketingPageHero
			heroId="blog"
			heightPx={600}
			mobileHeightPx={400}
			useViewportHeightFlag
			viewportHeightBreakpointPx={VIEWPORT_HEIGHT_BREAKPOINT_PX}
			shiftUnderHeader
			shiftTillSearch={false}
			shiftExtraContentTopPx={200}
			mobileShiftExtraContentTopPx={0}
			negativePadding={50}
			mobileNegativePadding={false}
		/>
	);
}
