import { GlobalNetworks } from "@/components/sections/GlobalNetworks";
import { InternationalSales } from "@/components/sections/global-network/InternationalSales";
import { MarketsWeServe } from "@/components/sections/global-network/MarketsWeServe";
import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: { absolute: "Global Networks | The Guardians" },
	description:
		"Our global network partnerships and presence across international markets.",
};

export default function GlobalNetworkPage() {
	return (
		<>
			<MarketingPageHero
				heroId="globalNetwork"
				heightPx={600}
				mobileHeightPx={400}
				useViewportHeightFlag
				viewportHeightBreakpointPx={1024}
				shiftUnderHeader={true}
				shiftTillSearch={false}
				shiftExtraContentTopPx={44}
				negativePadding={16}
			/>

			<InternationalSales />

			<GlobalNetworks heading="WHAT WE DO" showKnowMore={false} />

			<MarketsWeServe />
		</>
	);
}
