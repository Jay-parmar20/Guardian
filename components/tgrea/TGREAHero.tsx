import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";

export function TGREAHero() {
	return (
		<MarketingPageHero
			heroId="tgrea"
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
