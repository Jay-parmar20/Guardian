import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";

export function CareerHero() {
	return (
		<MarketingPageHero
			heroId="career"
			heightPx={600}
			mobileHeightPx={400}
			useViewportHeightFlag
			viewportHeightBreakpointPx={1024}
			shiftUnderHeader={true}
			shiftTillSearch={false}
			shiftExtraContentTopPx={44}
			negativePadding={16}
		/>
	);
}
