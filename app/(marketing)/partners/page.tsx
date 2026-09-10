import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";
import { PartnersLogoGrid } from "@/components/partners/PartnersLogoGrid";
import { PartnersStats } from "@/components/partners/PartnersStats";
import { PartnersTestimonials } from "@/components/partners/PartnersTestimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: { absolute: "Partners & Clients | The Guardians" },
	description:
		"Our trusted partners and clients across the Indian real estate landscape.",
};

export default function PartnersClientsPage() {
	return (
		<div className="min-w-0 bg-white mb-14 md:mb-25">
			{/* Partners Hero */}
			<MarketingPageHero
				heroId="partners"
				heightPx={600}
				mobileHeightPx={400}
				useViewportHeightFlag
				viewportHeightBreakpointPx={1024}
				shiftUnderHeader={true}
				shiftTillSearch={false}
				shiftExtraContentTopPx={44}
				mobileShiftExtraContentTopPx={0}
				negativePadding={16}
				mobileNegativePadding={false}
			/>

			{/* Partners content */}
			<PartnersLogoGrid />

			<PartnersTestimonials />

			<PartnersStats />
		</div>
	);
}
