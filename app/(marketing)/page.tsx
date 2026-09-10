import type { Metadata } from "next";
import { AudienceMarketingPage } from "@/components/marketing/AudienceMarketingPage";
import { HOME_MARKETING_PAGE } from "@/data/home-marketing";
import { HomeVisitLeadCaptureModal } from "@/components/marketing/visit-lead-modal";

export const metadata: Metadata = {
	title: { absolute: "The Guardians | Real Estate Advisory" },
};

export default function HomePage() {
	return (
		<>
			<AudienceMarketingPage content={HOME_MARKETING_PAGE} />
			<HomeVisitLeadCaptureModal />
		</>
	);
}
