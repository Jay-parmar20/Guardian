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

const globalNetworkFront1 = {
	imageSrc: "/images/about/INDIANS.png",
	imageAlt: "For Indians in Dubai",
	heading: "FOR INDIANS IN DUBAI",
};

const globalNetworkBack1 = {
	imageAlt: "For Indians in Dubai",
	heading: "FOR INDIANS IN DUBAI",
	description:
		"A growing base of Indian professionals and investors in Dubai are looking to invest back home. We give them direct access to vetted Indian developments, transparent pricing and a team that handles the entire process remotely, from shortlisting to registration.",
};

const globalNetworkFront2 = {
	imageSrc: "/images/about/NRIS.png",
	imageAlt: "For NRIs in India",
	heading: "FOR NRIS IN INDIA",
};

const globalNetworkBack2 = {
	imageAlt: "For NRIs in India",
	heading: "FOR NRIS IN INDIA",
	description:
		"Buying property back home shouldn't mean navigating it alone from thousands of miles away. We give NRIs verified project access, on-ground diligence and a single point of contact for the entire journey, from shortlisting to final registration.",
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

			<GlobalNetworks
				className="pt-2 sm:pt-0"
				heading="WHAT WE DO"
				showKnowMore={false}
				frontSide={globalNetworkFront1}
				backSide={globalNetworkBack1}
				frontSide2={globalNetworkFront2}
				backSide2={globalNetworkBack2}
			/>

			<MarketsWeServe />
		</>
	);
}
